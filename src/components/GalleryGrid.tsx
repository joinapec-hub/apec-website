"use client";

/* eslint-disable @next/next/no-img-element --
 * next/image is deliberately not used here. next.config.ts sets
 * `images.unoptimized`, so <Image> would hand back the untouched source with
 * extra wrapper markup and no benefit. These images are already the right size:
 * `npm run gallery` pre-builds 500px thumbnails and 1400px lightbox WebPs into
 * /public, which the CDN serves as plain static files at zero optimization
 * quota. Switching back to <Image> would serve multi-megabyte originals again.
 */

import { useState, useEffect, useCallback, useMemo } from "react";
import type { GalleryEvent, GalleryPhoto } from "@/lib/gallery";

type Position = { event: number; photo: number };

export default function GalleryGrid({
  events,
  originalsBase,
}: {
  events: GalleryEvent[];
  originalsBase: string;
}) {
  const [at, setAt] = useState<Position | null>(null);
  const [downloading, setDownloading] = useState(false);

  // Flattened so the lightbox arrows can walk the whole gallery, not just one
  // event, and so neighbours can be preloaded by index.
  const flat = useMemo(
    () =>
      events.flatMap((event, eventIndex) =>
        event.photos.map((photo, photoIndex) => ({
          photo,
          eventName: event.name,
          eventIndex,
          photoIndex,
        })),
      ),
    [events],
  );

  const cursor = useMemo(() => {
    if (!at) return -1;
    return flat.findIndex(
      (item) => item.eventIndex === at.event && item.photoIndex === at.photo,
    );
  }, [at, flat]);

  const current = cursor >= 0 ? flat[cursor] : null;

  const close = useCallback(() => setAt(null), []);

  const step = useCallback(
    (delta: number) => {
      setAt((position) => {
        if (!position) return position;
        const index = flat.findIndex(
          (item) =>
            item.eventIndex === position.event && item.photoIndex === position.photo,
        );
        const next = flat[index + delta];
        if (!next) return position;
        return { event: next.eventIndex, photo: next.photoIndex };
      });
    },
    [flat],
  );

  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [current, close, step]);

  // Warm the neighbours so arrowing through the gallery never shows a gap.
  useEffect(() => {
    if (cursor < 0) return;
    for (const neighbour of [flat[cursor - 1], flat[cursor + 1]]) {
      if (!neighbour) continue;
      const img = new Image();
      img.src = neighbour.photo.large;
    }
  }, [cursor, flat]);

  async function handleDownload(photo: GalleryPhoto) {
    setDownloading(true);
    // The grid and lightbox show compressed WebPs; a download should still hand
    // back the untouched full-resolution original.
    const href = originalsBase + photo.original;
    try {
      const res = await fetch(href);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = photo.download;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      // Fallback: open in a new tab so the user can save manually.
      window.open(href, "_blank", "noopener,noreferrer");
    } finally {
      setDownloading(false);
    }
  }

  return (
    <>
      {events.map((event, eventIndex) => (
        <section
          key={event.name}
          className={`py-16 border-b border-gray-100 last:border-0 ${eventIndex % 2 === 0 ? "bg-white" : "bg-[#f8fafe]"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-8 bg-[#C8A24B] rounded-full" />
              <h2 className="text-3xl font-bold text-[#0f1f5c]">{event.name}</h2>
              <span className="text-sm text-[#4a5a52] font-medium">
                {event.photos.length} photos
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {event.photos.map((photo, photoIndex) => {
                // Only the opening rows load eagerly; everything else waits
                // until it is near the viewport.
                const priority = eventIndex === 0 && photoIndex < 10;
                return (
                  <button
                    key={photo.thumb}
                    type="button"
                    onClick={() => setAt({ event: eventIndex, photo: photoIndex })}
                    aria-label={`View ${event.name} — photo ${photoIndex + 1}`}
                    className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C8A24B]"
                    style={{ backgroundColor: photo.color }}
                  >
                    <img
                      src={photo.thumb}
                      alt={`${event.name} — photo ${photoIndex + 1}`}
                      width={500}
                      height={500}
                      loading={priority ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={priority ? "high" : "auto"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0a1645]/20 group-hover:bg-[#0a1645]/0 transition-colors duration-300" />
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
      {current && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${current.eventName} — photo ${current.photoIndex + 1}`}
        >
          <div
            className="relative max-w-6xl w-full max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Controls */}
            <div className="absolute -top-2 right-0 sm:top-2 sm:right-2 z-10 flex gap-2">
              <button
                type="button"
                onClick={() => handleDownload(current.photo)}
                disabled={downloading}
                className="flex items-center gap-2 px-4 py-2 bg-[#C8A24B] text-[#0a1645] font-bold rounded-lg text-sm hover:bg-[#d4aa5a] transition-colors disabled:opacity-60"
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

            {/* Previous / next */}
            {cursor > 0 && (
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/15 text-white rounded-full hover:bg-white/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
            )}
            {cursor < flat.length - 1 && (
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/15 text-white rounded-full hover:bg-white/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            )}

            <div className="relative w-full h-[80vh] mt-10 sm:mt-0 flex items-center justify-center">
              <img
                // Keying on the path swaps the element on navigation, so the
                // previous photo never lingers while the next one decodes.
                key={current.photo.large}
                src={current.photo.large}
                alt={`${current.eventName} — photo ${current.photoIndex + 1}`}
                width={current.photo.width}
                height={current.photo.height}
                decoding="async"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>

            <p className="mt-3 text-center text-white/70 text-sm">
              {current.eventName} · {current.photoIndex + 1} of{" "}
              {events[current.eventIndex].photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
