import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery — APEC Canada",
  description: "Browse photos from APEC Canada events — galas, networking mixers, workshops, and community celebrations.",
};

const events = [
  {
    name: "Eid Gala 2026",
    photos: [
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5719.jpeg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5721.jpeg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5722.jpeg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5723.jpeg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5724.jpeg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5725.jpeg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5726.jpeg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5727.jpeg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5728.jpeg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5730.jpeg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5731.jpeg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5736.jpeg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5738.jpeg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5739.jpeg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5740.jpeg",
    ],
  },
  {
    name: "Summer Gala 2025",
    photos: [
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-25%5B1%5D.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-25%5B2%5D.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-25%5B3%5D.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-26.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-26%5B1%5D.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-27.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-27%5B1%5D.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-27%5B2%5D.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-28.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-29.jpg",
    ],
  },
  {
    name: "Eid Gala 2024",
    photos: [
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-39.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-40.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-42.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-42%5B1%5D.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-46.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-52.jpg",
      "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-55.jpg",
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #15604A 0%, #0E3D2E 60%, #0a2c1e 100%)" }}
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

      {/* Gallery sections */}
      {events.map((event) => (
        <section key={event.name} className="py-16 bg-white border-b border-gray-100 last:border-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-8 bg-[#C8A24B] rounded-full" />
              <h2 className="text-3xl font-bold text-[#15604A]">{event.name}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {event.photos.map((src, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                  <Image
                    src={src}
                    alt={`${event.name} — photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-[#0E3D2E]/20 group-hover:bg-[#0E3D2E]/0 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-[#F2E9D2]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#15604A] mb-4">Be Part of Our Next Event</h2>
          <p className="text-[#4a5a52] mb-6">Join APEC and be in the next photo. Our events are open to all professionals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="px-8 py-3.5 bg-[#15604A] text-white font-bold rounded-lg hover:bg-[#0E3D2E] transition-colors">View Upcoming Events</Link>
            <Link href="/membership" className="px-8 py-3.5 bg-[#C8A24B] text-[#0E3D2E] font-bold rounded-lg hover:bg-[#d4aa5a] transition-colors">Join APEC</Link>
          </div>
        </div>
      </section>
    </>
  );
}
