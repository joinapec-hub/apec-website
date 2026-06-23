"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5728.jpeg",
    alt: "APEC Eid Gala 2026 — Community celebration",
    event: "Eid Gala 2026",
  },
  {
    src: "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-26%5B1%5D.jpg",
    alt: "APEC Summer Gala 2025 — Professionals connecting",
    event: "Summer Gala 2025",
  },
  {
    src: "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5721.jpeg",
    alt: "APEC Eid Gala 2026 — Members gathering",
    event: "Eid Gala 2026",
  },
  {
    src: "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-28.jpg",
    alt: "APEC Summer Gala 2025 — Networking and fun",
    event: "Summer Gala 2025",
  },
  {
    src: "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-40.jpg",
    alt: "APEC Eid Gala 2024 — Community gathering",
    event: "Eid Gala 2024",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            loading={i === 0 ? "eager" : undefined}
            placeholder={i !== 0 ? "blur" : undefined}
            blurDataURL={i !== 0 ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" : undefined}
            className="object-cover object-center"
            sizes="100vw"
            quality={70}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1645]/93 to-[#0f1f5c]/65" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <span className="inline-block px-4 py-1.5 bg-[#C8A24B]/20 border border-[#C8A24B] rounded-full text-[#C8A24B] text-sm font-medium mb-8">
          Calgary, Alberta · Est. 2011
        </span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Engineers &amp; Professionals<br />
          <span className="text-[#C8A24B]">Building Canada Together</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
          APEC Canada is a non-profit community welcoming professionals from all backgrounds to network, grow, and make a lasting impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/membership" className="px-10 py-4 bg-[#C8A24B] text-[#0a1645] font-bold rounded-lg text-lg hover:bg-[#d4aa5a] transition-all shadow-lg">
            Become a Member
          </Link>
          <Link href="/events" className="px-10 py-4 bg-[#4A90D9] text-white font-bold rounded-lg text-lg hover:bg-[#3a7bc8] transition-all shadow-lg">
            Upcoming Events
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#C8A24B] w-8" : "bg-white/40 w-2 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Current event label */}
      <div className="absolute bottom-8 right-6 z-20 text-xs text-white/50 font-medium">
        {slides[current].event}
      </div>
    </section>
  );
}
