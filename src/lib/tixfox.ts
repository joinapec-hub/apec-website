// TixFox integration — read-only sync of the organization's events.
//
// This reads the public organizer-profile endpoint that powers
// tixfox.co/o/apec. It needs no API key and no dashboard configuration:
// anything published in TixFox shows up here automatically, which is exactly
// the "publish once, appears on the site" behaviour we want.
//
// Webhooks are deliberately not used. TixFox only offers Order Created /
// Order Completed / Order Failed triggers, so a webhook can report ticket
// sales but can never tell the site that a new event exists.
//
// The endpoint buckets events into upcoming / live / past server-side and gets
// it right, but `withoutPastEvents` below re-checks the dates anyway so a
// finished event can never reach the page.

const PROFILE_API = "https://api.tixfox.co/api/v1/organization-profiles";
const EVENT_BASE = "https://tixfox.co/e/";

// Overridable so a rename in TixFox doesn't need a code change.
const ORG_SLUG = process.env.TIXFOX_ORG_SLUG || "apec";

// Revalidate the events list every 5 minutes so changes made in the
// TixFox dashboard (add / remove / edit an event) appear on the site
// without a redeploy.
const REVALIDATE_SECONDS = 300;

export type TixFoxTicket = {
  name: string | null;
  price: number | string | null;
  quantity: number | null;
  hide_ticket?: boolean;
  ticket_status: string | null;
};

export type TixFoxVenue = {
  name: string | null;
  street_address: string | null;
  locality: string | null;
  region: string | null;
  postal_code: string | null;
  country: string | null;
} | null;

export type TixFoxEvent = {
  title: string;
  slug: string;
  custom_slug: string | null;
  description: string | null;
  /** "YYYY-MM-DD HH:mm:ss" — wall-clock time in `timezone`, not UTC. */
  start_time: string | null;
  end_time: string | null;
  timezone: string | null;
  location: string | null;
  address: string | null;
  venue: TixFoxVenue;
  event_image: string | null;
  is_sold_out: boolean;
  is_recurring: boolean;
  currency: { code: string | null; symbol: string | null } | null;
  tickets: TixFoxTicket[];
  status: number;
};

type ProfileResponse = {
  status: boolean;
  data?: {
    events?: Partial<Record<"upcoming" | "live" | "past", TixFoxEvent[]>>;
  };
};

export type TixFoxData = {
  upcoming: TixFoxEvent[];
  live: TixFoxEvent[];
  /** False when the request failed, so the page can show a graceful empty state. */
  ok: boolean;
};

/** Public ticket URL for a given event. */
export function eventUrl(ev: TixFoxEvent): string {
  return EVENT_BASE + (ev.custom_slug || ev.slug);
}

// --- Time handling ---------------------------------------------------------
//
// The API returns wall-clock strings ("2026-09-18 00:00:00") plus a separate
// IANA timezone. Passing that to `new Date()` would interpret it in the
// server's zone — UTC on Vercel — and shift every event by hours. These two
// helpers resolve the string against the event's real zone instead.

/** How far `timeZone` is from UTC at a given instant, in milliseconds. */
function zoneOffset(instant: number, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(new Date(instant));

  const at = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  const asUtc = Date.UTC(
    at("year"),
    at("month") - 1,
    at("day"),
    at("hour") % 24,
    at("minute"),
    at("second"),
  );
  return asUtc - instant;
}

/** Resolve a wall-clock timestamp in `timeZone` to a real instant. */
export function eventInstant(
  stamp: string | null,
  timeZone: string | null,
): Date | null {
  if (!stamp) return null;
  const match = stamp
    .trim()
    .match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?/);
  if (!match) {
    const loose = new Date(stamp);
    return Number.isNaN(loose.getTime()) ? null : loose;
  }

  const [, y, mo, d, h, mi, s] = match;
  const wall = Date.UTC(+y, +mo - 1, +d, +h, +mi, +(s ?? 0));
  if (!timeZone) return new Date(wall);

  // Guess with the offset at the wall-clock instant, then correct once — that
  // second pass is what keeps events near a DST switch on the right side of it.
  const firstGuess = wall - zoneOffset(wall, timeZone);
  const corrected = wall - zoneOffset(firstGuess, timeZone);
  return new Date(corrected);
}

/**
 * True once an event is over. The API buckets events itself, but this is the
 * check that actually decides whether an event belongs on the page, so a stale
 * bucket can never resurrect a finished event.
 *
 * An event with no usable date is kept — "date to be announced" is a real
 * upcoming state, not a past one.
 */
export function hasEnded(ev: TixFoxEvent, now: number = Date.now()): boolean {
  const ends = eventInstant(ev.end_time || ev.start_time, ev.timezone);
  if (!ends) return false;
  return ends.getTime() < now;
}

/** Drop events that are already over, keeping the original order. */
export function withoutPastEvents(
  events: TixFoxEvent[],
  now: number = Date.now(),
): TixFoxEvent[] {
  return events.filter((ev) => !hasEnded(ev, now));
}

// --- Fetching --------------------------------------------------------------

async function fetchBucket(status: "upcoming" | "live"): Promise<TixFoxEvent[] | null> {
  const url =
    `${PROFILE_API}/${encodeURIComponent(ORG_SLUG)}/events` +
    `?page=1&per_page=50&sort_by=start_time&sort_order=asc&status=${status}`;

  try {
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;

    const body = (await res.json()) as ProfileResponse;
    if (!body?.status) return null;
    return body.data?.events?.[status] ?? [];
  } catch {
    return null;
  }
}

export async function getTixFoxEvents(): Promise<TixFoxData> {
  const [upcoming, live] = await Promise.all([
    fetchBucket("upcoming"),
    fetchBucket("live"),
  ]);

  return {
    upcoming: withoutPastEvents(upcoming ?? []),
    live: withoutPastEvents(live ?? []),
    ok: upcoming !== null || live !== null,
  };
}

// --- Presentation ----------------------------------------------------------

/**
 * Events with no confirmed time are published as midnight-to-late-evening.
 * Printing "12:00 a.m." for those is misleading, so show the day alone.
 */
function isAllDay(ev: TixFoxEvent): boolean {
  const start = ev.start_time?.slice(11, 16);
  const end = ev.end_time?.slice(11, 16);
  return start === "00:00" && (!end || end >= "23:00");
}

/** Format a TixFox event's start time in its own timezone. */
export function formatEventDate(ev: TixFoxEvent): string {
  const start = eventInstant(ev.start_time, ev.timezone);
  if (!start) return "Date to be announced";

  const timeZone = ev.timezone || "America/Edmonton";
  const dayOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone,
  };

  try {
    if (isAllDay(ev)) {
      return `${new Intl.DateTimeFormat("en-CA", dayOptions).format(start)} — time to be announced`;
    }
    return new Intl.DateTimeFormat("en-CA", {
      ...dayOptions,
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    }).format(start);
  } catch {
    return new Intl.DateTimeFormat("en-CA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(start);
  }
}

/** Human-readable location line built from the event's venue / address fields. */
export function formatEventLocation(ev: TixFoxEvent): string {
  const venueName = ev.venue?.name || null;
  const parts = [venueName, ev.address && ev.address !== venueName ? ev.address : null];
  const line = parts.filter(Boolean).join(" — ");
  if (line) return line;

  const cityRegion = [ev.venue?.locality, ev.venue?.region].filter(Boolean).join(", ");
  return cityRegion || "Location to be announced";
}

/**
 * Cheapest visible ticket, formatted for the card — "Free", "From CA$5", or
 * null when the event has no purchasable tickets loaded.
 */
export function formatEventPrice(ev: TixFoxEvent): string | null {
  const prices = (ev.tickets ?? [])
    .filter((ticket) => !ticket.hide_ticket)
    .map((ticket) => Number(ticket.price))
    .filter((price) => Number.isFinite(price));

  if (prices.length === 0) return null;

  const lowest = Math.min(...prices);
  if (lowest <= 0) return "Free";

  const symbol = ev.currency?.symbol || "$";
  const amount = Number.isInteger(lowest) ? String(lowest) : lowest.toFixed(2);
  const prefix = prices.length > 1 || prices.some((p) => p !== lowest) ? "From " : "";
  return `${prefix}${symbol}${amount}`;
}

/** Strip HTML tags from the TixFox description for use as plain summary text. */
export function plainDescription(html: string | null): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/&#8212;|&mdash;/g, "—")
    .replace(/\s+/g, " ")
    .trim();
}

/** First paragraph or so of the description — enough for a card teaser. */
export function summarize(html: string | null, limit = 220): string {
  const text = plainDescription(html);
  if (text.length <= limit) return text;
  const clipped = text.slice(0, limit);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, lastSpace > 0 ? lastSpace : limit).trimEnd()}…`;
}
