import Link from "next/link";
import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { GALLERY_BASE, GALLERY_EVENTS } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Browse photos from APEC events — galas, networking mixers, workshops, and community celebrations.",
  alternates: { canonical: "/gallery" },
};

const BLUR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVR4nGN4//IWAAV9ArPB0Os9AAAAAElFTkSuQmCC";

export default function GalleryPage() {
  return (
    <>
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
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <span className="inline-block px-4 py-1.5 bg-[#C8A24B]/20 border border-[#C8A24B]/50 rounded-full text-[#C8A24B] text-sm font-medium mb-6">Our Story in Photos</span>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Community Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Over a decade of galas, gatherings, workshops, and celebrations — this is what APEC looks like.
          </p>
        </div>
      </section>

      {/* Gallery sections (click any photo to view full size & download) */}
      <GalleryGrid events={GALLERY_EVENTS} base={GALLERY_BASE} blur={BLUR} />

      {/* CTA */}
      <section className="py-16 bg-[#F2E9D2]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0f1f5c] mb-4">Be Part of Our Next Event</h2>
          <p className="text-[#4a5a52] mb-6">Join APEC and be in the next photo. Our events are open to all professionals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="px-8 py-3.5 bg-[#0f1f5c] text-white font-bold rounded-lg hover:bg-[#0a1645] transition-colors">View Upcoming Events</Link>
            <Link href="/membership" className="px-8 py-3.5 bg-[#C8A24B] text-[#0a1645] font-bold rounded-lg hover:bg-[#d4aa5a] transition-colors">Join APEC</Link>
          </div>
        </div>
      </section>
    </>
  );
}
