"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type GalleryEvent = { name: string; photos: string[] };

export default function GalleryGrid({
  events,
  base,
  blur,
}: {
  events: GalleryEvent[];
  base: string;
  blur: string;
}) {
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);
  const [downloading, setDownloading] = useState(false);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  async function handleDownload() {
    if (!selected) return;
    setDownloading(true);
    const filename = decodeURIComponent(selected.src.split("/").pop() || "apec-photo.jpg");
    try {
      const res = await fetch(selected.src);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      // Fallback: open in a new tab so the user can save manually
      window.open(selected.src, "_blank", "noopener,noreferrer");
    } finally {
      setDownloading(false);
    }
  }

  return (
    <>
      {events.map((event, idx) => (
        <section key={event.name} className={`py-16 border-b border-gray-100 last:border-0 ${idx % 2 === 0 ? "bg-white" : "bg-[#f8fafe]"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-8 bg-[#C8A24B] rounded-full" />
              <h2 className="text-3xl font-bold text-[#15604A]">{event.name}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {event.photos.map((path, i) => {
                const src = base + path;
                const alt = `${event.name} — photo ${i + 1}`;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelected({ src, alt })}
                    aria-label={`View ${alt}`}
                    className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C8A24B]"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={blur}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      quality={60}
                    />
                    <div className="absolute inset-0 bg-[#0E3D2E]/20 group-hover:bg-[#0E3D2E]/0 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-black/50 text-white rounded-full p-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15.75 15.75 21 21m-3.75-9a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Zm-6.75-3v3m0 0v3m0-3h3m-3 0h-3" />
                        </svg>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {/* Controls */}
            <div className="absolute -top-2 right-0 sm:top-2 sm:right-2 z-10 flex gap-2">
              <button
                type="button"
                onClick={handleDownload}
                disabled={downloading}
                className="flex items-center gap-2 px-4 py-2 bg-[#C8A24B] text-[#0E3D2E] font-bold rounded-lg text-sm hover:bg-[#d4aa5a] transition-colors disabled:opacity-60"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                {downloading ? "Downloading…" : "Download"}
              </button>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="p-2 bg-white/15 text-white rounded-lg hover:bg-white/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="relative w-full h-[80vh] mt-10 sm:mt-0">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                quality={90}
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
