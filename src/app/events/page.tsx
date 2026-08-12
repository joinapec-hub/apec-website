/* eslint-disable @next/next/no-img-element --
 * next.config.ts sets `images.unoptimized`, so next/image would return the
 * same bytes with no transform. A plain <img> is what lets the poster run at
 * its own aspect ratio on mobile instead of being cropped to a fixed box.
 */
import Link from "next/link";
import {
  getTixFoxEvents,
  eventUrl,
  formatEventDate,
  formatEventLocation,
  formatEventPrice,
  eventInstant,
  summarize,
  type TixFoxEvent,
} from "@/lib/tixfox";
import { STRIPE_LINKS } from "@/lib/payments";

import type { Metadata } from "next";

// Re-fetch the TixFox events list at most every 5 minutes.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Events & Programs",
  description:
    "Upcoming APEC events and programs — networking mixers, the annual BBQ, workshops, and community gatherings for engineers and professionals in Calgary and across Canada.",
  alternates: { canonical: "/events" },
};

const FACEBOOK_GROUP = "https://www.facebook.com/groups/781259795220477/";

function TicketIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 inline-block mr-1.5 -mt-0.5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 inline-block mr-1.5 -mt-0.5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function EventCard({ ev, live }: { ev: TixFoxEvent; live?: boolean }) {
  const url = eventUrl(ev);
  const summary = summarize(ev.description);
  const price = formatEventPrice(ev);
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Poster.
            Mobile stacks the card, so the image runs at its own aspect ratio —
            the whole poster stays visible however wide or tall it is, which
            matters because these are text-heavy designs that lose their detail
            the moment they are cropped. From `lg` the card is two columns and
            the poster fills its half, where cropping is fine. */}
        <div className="relative bg-[#0f1f5c] min-h-[200px] lg:min-h-[320px]">
          {ev.event_image ? (
            <img
              src={ev.event_image}
              alt={ev.title}
              className="w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:object-cover lg:object-top"
            />
          ) : null}
        </div>

        {/* Details */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {live ? (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-800">Happening Now</span>
              ) : (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-orange-800">Upcoming Event</span>
              )}
              {ev.is_sold_out ? (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-200 text-gray-700">Sold Out</span>
              ) : price ? (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#C8A24B]/20 text-[#8a6d24]">{price}</span>
              ) : null}
              {ev.is_recurring ? (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">Recurring</span>
              ) : null}
            </div>

            <h3 className="text-3xl font-bold text-[#0f1f5c] mb-3">{ev.title}</h3>

            <div className="space-y-3 text-[#4a5a52] text-sm mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0f1f5c]/10 flex items-center justify-center text-[#0f1f5c] flex-shrink-0">
                  <CalendarIcon />
                </div>
                <span className="font-medium">{formatEventDate(ev)}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0f1f5c]/10 flex items-center justify-center text-[#0f1f5c] flex-shrink-0">
                  <MapPinIcon />
                </div>
                <span className="font-medium">{formatEventLocation(ev)}</span>
              </div>
            </div>

            {summary ? <p className="text-[#4a5a52] leading-relaxed">{summary}</p> : null}
          </div>

          <div className="mt-8">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-lg text-base transition-colors ${
                ev.is_sold_out
                  ? "bg-[#0f1f5c] text-white hover:bg-[#0a1645]"
                  : "bg-[#C8A24B] text-[#0a1645] hover:bg-[#d4aa5a]"
              }`}
            >
              <TicketIcon /> {ev.is_sold_out ? "View Event" : "Get Tickets"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function NoEvents() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-md">
      <h3 className="text-2xl font-bold text-[#0f1f5c] mb-3">No upcoming events right now</h3>
      <p className="text-[#4a5a52] mb-6">
        We&apos;re planning our next event. Check back soon, or follow us on Facebook for announcements.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={FACEBOOK_GROUP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A90D9] text-white font-bold rounded-lg hover:bg-[#3a7bc8] transition-colors"
        >
          Follow Us on Facebook →
        </a>
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f1f5c] text-white font-bold rounded-lg hover:bg-[#0a1645] transition-colors"
        >
          See Past Event Photos →
        </Link>
      </div>
    </div>
  );
}

export default async function EventsPage() {
  // Anything already finished has been dropped, so every event here is one
  // that is genuinely still ahead of us. Live events lead the list.
  const { upcoming, live } = await getTixFoxEvents();
  const events = [...live, ...upcoming];

  // Event structured data (schema.org) for search + AI answer engines.
  const eventsJsonLd = events.map((ev) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: ev.title,
    startDate: eventInstant(ev.start_time, ev.timezone)?.toISOString(),
    endDate: eventInstant(ev.end_time, ev.timezone)?.toISOString(),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: ev.event_image ? [ev.event_image] : undefined,
    description: summarize(ev.description, 500) || undefined,
    url: eventUrl(ev),
    location: {
      "@type": "Place",
      name: ev.venue?.name || undefined,
      address:
        ev.address ||
        [ev.venue?.locality, ev.venue?.region].filter(Boolean).join(", ") ||
        undefined,
    },
    offers: ev.tickets?.length
      ? {
          "@type": "Offer",
          url: eventUrl(ev),
          price: Math.min(...ev.tickets.map((t) => Number(t.price) || 0)),
          priceCurrency: ev.currency?.code || "CAD",
          availability: ev.is_sold_out
            ? "https://schema.org/SoldOut"
            : "https://schema.org/InStock",
        }
      : undefined,
    organizer: {
      "@type": "Organization",
      name: "APEC",
      url: "https://www.apecanada.ca",
    },
  }));

  return (
    <>
      {eventsJsonLd.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
        />
      )}

      {/* Hero */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f1f5c 0%, #0a1645 60%, #060d38 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #C8A24B 0, #C8A24B 1px, transparent 0, transparent 50%)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Events &amp; Programs</h1>
          <p className="text-xl text-gray-300">Stay connected. Keep growing. Make an impact.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            {/* Only linked while an event is actually on sale — never to one that has passed. */}
            {events[0] ? (
              <a href={eventUrl(events[0])} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8A24B] text-[#0a1645] font-bold rounded-lg hover:bg-[#d4aa5a] transition-colors">
                <TicketIcon /> Buy Tickets
              </a>
            ) : null}
            <a href={STRIPE_LINKS.donation} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A90D9] text-white font-bold rounded-lg hover:bg-[#3a7bc8] transition-colors">
              <HeartIcon /> Donate / Support Us
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f1f5c] mb-10">Upcoming Events</h2>

          {events.length > 0 ? (
            <div className="space-y-8">
              {events.map((ev) => (
                <EventCard key={ev.slug} ev={ev} live={live.includes(ev)} />
              ))}
            </div>
          ) : (
            <NoEvents />
          )}

          <p className="mt-8 text-center text-[#4a5a52] text-sm">
            More events coming soon. Follow us on{" "}
            <a href={FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer" className="text-[#4A90D9] hover:underline font-medium">Facebook</a>{" "}
            for announcements.
          </p>
        </div>
      </section>

      {/* Past events */}
      <section className="py-16 bg-[#F2E9D2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0f1f5c] mb-4">Missed a Past Event?</h2>
          <p className="text-[#4a5a52] mb-6">Browse our photo gallery or visit the Facebook group for photos, recordings, and recaps from previous events.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f1f5c] text-white font-semibold rounded-lg hover:bg-[#0a1645] transition-colors">
              View Photo Gallery →
            </Link>
            <a href={FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A90D9] text-white font-semibold rounded-lg hover:bg-[#3a7bc8] transition-colors">
              Visit Our Facebook Group →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
