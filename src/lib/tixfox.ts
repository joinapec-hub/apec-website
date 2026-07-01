// TixFox integration — read-only sync of the organization's events.
//
// The API key lives ONLY in the TIXFOX_API_KEY environment variable
// (set it in Vercel → Project → Settings → Environment Variables).
// Never hard-code it here or commit it to the repo.

const TIXFOX_API = "https://api.tixfox.co/api/get-events-list";
const EVENT_BASE = "https://tixfox.co/e/";

// Revalidate the events list every 5 minutes so changes made in the
// TixFox dashboard (add / remove / edit an event) appear on the site
// without a redeploy.
const REVALIDATE_SECONDS = 300;

export type TixFoxEvent = {
  title: string;
  slug: string;
  custom_slug: string | null;
  description: string | null;
  start_time: string | null;
  end_time: string | null;
  timezone: string | null;
  location: string | null;
  address: string | null;
  venue_name: string | null;
  locality: string | null;
  region: string | null;
  event_image: string | null;
  status: number;
};

type EventsResponse = {
  status: boolean;
  events: {
    upcoming_events?: TixFoxEvent[];
    live_events?: TixFoxEvent[];
    past_events?: TixFoxEvent[];
  };
};

export type TixFoxData = {
  upcoming: TixFoxEvent[];
  live: TixFoxEvent[];
  // `configured` is false when the API key is missing; `ok` is false when
  // the request failed. Both let the page fall back gracefully.
  configured: boolean;
  ok: boolean;
};

/** Public ticket URL for a given event. */
export function eventUrl(ev: TixFoxEvent): string {
  return EVENT_BASE + (ev.custom_slug || ev.slug);
}

export async function getTixFoxEvents(): Promise<TixFoxData> {
  const apiKey = process.env.TIXFOX_API_KEY;
  if (!apiKey) {
    return { upcoming: [], live: [], configured: false, ok: false };
  }

  try {
    const res = await fetch(TIXFOX_API, {
      headers: { "X-Api-Key": apiKey, Accept: "application/json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      return { upcoming: [], live: [], configured: true, ok: false };
    }

    const data = (await res.json()) as EventsResponse;
    const events = data?.events ?? {};
    return {
      upcoming: events.upcoming_events ?? [],
      live: events.live_events ?? [],
      configured: true,
      ok: Boolean(data?.status),
    };
  } catch {
    return { upcoming: [], live: [], configured: true, ok: false };
  }
}

/** Format a TixFox event's start time in its own timezone. */
export function formatEventDate(ev: TixFoxEvent): string {
  if (!ev.start_time) return "Date to be announced";
  const d = new Date(ev.start_time);
  if (Number.isNaN(d.getTime())) return "Date to be announced";
  try {
    return new Intl.DateTimeFormat("en-CA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZone: ev.timezone || "America/Edmonton",
      timeZoneName: "short",
    }).format(d);
  } catch {
    return new Intl.DateTimeFormat("en-CA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(d);
  }
}

/** Human-readable location line built from the event's address fields. */
export function formatEventLocation(ev: TixFoxEvent): string {
  const parts = [
    ev.venue_name,
    ev.address && ev.address !== ev.venue_name ? ev.address : null,
  ].filter(Boolean);
  if (parts.length) return parts.join(" — ");
  const cityRegion = [ev.locality, ev.region].filter(Boolean).join(", ");
  return cityRegion || "Location to be announced";
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
