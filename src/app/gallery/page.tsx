import Link from "next/link";
import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Photo Gallery — APEC",
  description: "Browse photos from APEC events — galas, networking mixers, workshops, and community celebrations.",
};

const BASE = "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/";
const BLUR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVR4nGN4//IWAAV9ArPB0Os9AAAAAElFTkSuQmCC";

const events = [
  {
    name: "Eid Gala 2026",
    photos: [
      "2026/Eid%20Gala%202026/IMG_5719.jpeg",
      "2026/Eid%20Gala%202026/IMG_5720.jpeg",
      "2026/Eid%20Gala%202026/IMG_5721.jpeg",
      "2026/Eid%20Gala%202026/IMG_5722.jpeg",
      "2026/Eid%20Gala%202026/IMG_5723.jpeg",
      "2026/Eid%20Gala%202026/IMG_5724.jpeg",
      "2026/Eid%20Gala%202026/IMG_5725.jpeg",
      "2026/Eid%20Gala%202026/IMG_5726.jpeg",
      "2026/Eid%20Gala%202026/IMG_5727.jpeg",
      "2026/Eid%20Gala%202026/IMG_5728.jpeg",
      "2026/Eid%20Gala%202026/IMG_5730.jpeg",
      "2026/Eid%20Gala%202026/IMG_5731.jpeg",
      "2026/Eid%20Gala%202026/IMG_5736.jpeg",
      "2026/Eid%20Gala%202026/IMG_5738.jpeg",
      "2026/Eid%20Gala%202026/IMG_5739.jpeg",
      "2026/Eid%20Gala%202026/IMG_5740.jpeg",
      "2026/Eid%20Gala%202026/IMG_5718.jpeg",
    ],
  },
  {
    name: "Summer Gala 2025",
    photos: [
      "2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-25%5B1%5D.jpg",
      "2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-25%5B2%5D.jpg",
      "2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-25%5B3%5D.jpg",
      "2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-26.jpg",
      "2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-26%5B1%5D.jpg",
      "2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-27.jpg",
      "2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-27%5B1%5D.jpg",
      "2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-27%5B2%5D.jpg",
      "2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-28.jpg",
      "2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-29.jpg",
      "2025/Summer%20Gala%202025/WhatsApp%20Image%202026-04-03%20at%209.48.25%20AM.jpeg",
      "2025/Summer%20Gala%202025/WhatsApp%20Image%202026-04-03%20at%209.48.28%20AM%20%281%29.jpeg",
      "2025/Summer%20Gala%202025/WhatsApp%20Image%202026-04-03%20at%209.48.28%20AM.jpeg",
    ],
  },
  {
    name: "Eid Gala 2024",
    photos: [
      "2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-39.jpg",
      "2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-40.jpg",
      "2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-42.jpg",
      "2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-42%5B1%5D.jpg",
      "2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-46.jpg",
      "2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-52.jpg",
      "2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-55.jpg",
    ],
  },
  {
    name: "Picnic and Youth Networking 2019",
    photos: [
      "2019/Picnic%20and%20Youth%20networking%202019/WhatsApp%20Image%202026-04-03%20at%209.55.47%20AM.jpeg",
      "2019/Picnic%20and%20Youth%20networking%202019/WhatsApp%20Image%202026-04-03%20at%209.55.48%20AM%20%281%29.jpeg",
      "2019/Picnic%20and%20Youth%20networking%202019/WhatsApp%20Image%202026-04-03%20at%209.55.48%20AM.jpeg",
      "2019/Picnic%20and%20Youth%20networking%202019/WhatsApp%20Image%202026-04-03%20at%209.55.51%20AM%20%282%29.jpeg",
      "2019/Picnic%20and%20Youth%20networking%202019/WhatsApp%20Image%202026-04-03%20at%209.55.51%20AM%20%283%29.jpeg",
      "2019/Picnic%20and%20Youth%20networking%202019/WhatsApp%20Image%202026-04-03%20at%209.55.52%20AM%20%281%29.jpeg",
      "2019/Picnic%20and%20Youth%20networking%202019/WhatsApp%20Image%202026-04-03%20at%209.55.52%20AM%20%283%29.jpeg",
      "2019/Picnic%20and%20Youth%20networking%202019/WhatsApp%20Image%202026-04-03%20at%209.55.52%20AM.jpeg",
      "2019/Picnic%20and%20Youth%20networking%202019/WhatsApp%20Image%202026-04-03%20at%209.55.54%20AM%20%283%29.jpeg",
      "2019/Picnic%20and%20Youth%20networking%202019/WhatsApp%20Image%202026-04-03%20at%209.55.58%20AM%20%281%29.jpeg",
      "2019/Picnic%20and%20Youth%20networking%202019/WhatsApp%20Image%202026-04-03%20at%209.56.00%20AM%20%281%29.jpeg",
      "2019/Picnic%20and%20Youth%20networking%202019/WhatsApp%20Image%202026-04-03%20at%209.56.01%20AM.jpeg",
      "2019/Picnic%20and%20Youth%20networking%202019/WhatsApp%20Image%202026-04-03%20at%209.56.02%20AM%20%281%29.jpeg",
    ],
  },
  {
    name: "Technical Workshop 2017",
    photos: [
      "2017/Technical%20Workshop%202017/WhatsApp%20Image%202026-04-03%20at%2010.21.47%20AM.jpeg",
      "2017/Technical%20Workshop%202017/WhatsApp%20Image%202026-04-03%20at%2010.21.51%20AM%20%283%29.jpeg",
      "2017/Technical%20Workshop%202017/WhatsApp%20Image%202026-04-03%20at%2010.21.52%20AM%20%282%29.jpeg",
      "2017/Technical%20Workshop%202017/WhatsApp%20Image%202026-04-03%20at%2010.21.53%20AM.jpeg",
    ],
  },
  {
    name: "Resume Writing Skills 2016",
    photos: [
      "2016/Resume%20Writing%20skills%202016/PHOTO-2026-04-03-10-32-27.jpg",
      "2016/Resume%20Writing%20skills%202016/PHOTO-2026-04-03-10-32-32.jpg",
      "2016/Resume%20Writing%20skills%202016/PHOTO-2026-04-03-10-32-38.jpg",
      "2016/Resume%20Writing%20skills%202016/PHOTO-2026-04-03-10-32-52.jpg",
      "2016/Resume%20Writing%20skills%202016/PHOTO-2026-04-03-10-33-02.jpg",
      "2016/Resume%20Writing%20skills%202016/PHOTO-2026-04-03-10-33-30.jpg",
      "2016/Resume%20Writing%20skills%202016/PHOTO-2026-04-03-10-33-53.jpg",
    ],
  },
  {
    name: "Networking Session 2016",
    photos: [
      "2016/Networking%20Session%202016/PHOTO-2026-03-31-09-52-36.jpg",
      "2016/Networking%20Session%202016/PHOTO-2026-03-31-09-52-37.jpg",
      "2016/Networking%20Session%202016/PHOTO-2026-03-31-09-52-37%5B1%5D.jpg",
      "2016/Networking%20Session%202016/PHOTO-2026-03-31-09-52-38.jpg",
    ],
  },
  {
    name: "Technical Workshop 2015",
    photos: [
      "2015/Technical%20Workshop%202015/WhatsApp%20Image%202026-04-03%20at%2012.34.11%20PM.jpeg",
      "2015/Technical%20Workshop%202015/WhatsApp%20Image%202026-04-03%20at%2012.34.13%20PM%20%281%29.jpeg",
      "2015/Technical%20Workshop%202015/WhatsApp%20Image%202026-04-03%20at%2012.34.13%20PM.jpeg",
      "2015/Technical%20Workshop%202015/WhatsApp%20Image%202026-04-03%20at%2012.34.14%20PM%20%281%29.jpeg",
      "2015/Technical%20Workshop%202015/WhatsApp%20Image%202026-04-03%20at%2012.34.14%20PM%20%282%29.jpeg",
      "2015/Technical%20Workshop%202015/WhatsApp%20Image%202026-04-03%20at%2012.34.14%20PM%20%283%29.jpeg",
      "2015/Technical%20Workshop%202015/WhatsApp%20Image%202026-04-03%20at%2012.34.14%20PM%20%284%29.jpeg",
      "2015/Technical%20Workshop%202015/WhatsApp%20Image%202026-04-03%20at%2012.34.14%20PM%20%285%29.jpeg",
      "2015/Technical%20Workshop%202015/WhatsApp%20Image%202026-04-03%20at%2012.34.14%20PM.jpeg",
      "2015/Technical%20Workshop%202015/WhatsApp%20Image%202026-04-03%20at%2012.34.15%20PM%20%281%29.jpeg",
      "2015/Technical%20Workshop%202015/WhatsApp%20Image%202026-04-03%20at%2012.34.15%20PM.jpeg",
    ],
  },
  {
    name: "Picnic and Networking 2014",
    photos: [
      "2014/Picnic%20and%20Networking%202014/PHOTO-2026-04-03-10-06-40.jpg",
      "2014/Picnic%20and%20Networking%202014/PHOTO-2026-04-03-10-07-48.jpg",
      "2014/Picnic%20and%20Networking%202014/PHOTO-2026-04-03-10-07-54.jpg",
      "2014/Picnic%20and%20Networking%202014/PHOTO-2026-04-03-10-08-44.jpg",
      "2014/Picnic%20and%20Networking%202014/WhatsApp%20Image%202026-04-03%20at%2010.09.08%20AM.jpeg",
      "2014/Picnic%20and%20Networking%202014/WhatsApp%20Image%202026-04-03%20at%2010.09.22%20AM.jpeg",
    ],
  },
  {
    name: "Professional Communication Seminar 2014",
    photos: [
      "2014/Professional%20Communication%20Seminar%202014/WhatsApp%20Image%202026-04-03%20at%208.16.28%20PM.jpeg",
      "2014/Professional%20Communication%20Seminar%202014/WhatsApp%20Image%202026-04-03%20at%208.16.30%20PM.jpeg",
      "2014/Professional%20Communication%20Seminar%202014/WhatsApp%20Image%202026-04-03%20at%208.16.32%20PM%20%284%29.jpeg",
      "2014/Professional%20Communication%20Seminar%202014/WhatsApp%20Image%202026-04-03%20at%208.16.32%20PM%20%285%29.jpeg",
      "2014/Professional%20Communication%20Seminar%202014/WhatsApp%20Image%202026-04-03%20at%208.16.33%20PM%20%282%29.jpeg",
      "2014/Professional%20Communication%20Seminar%202014/WhatsApp%20Image%202026-04-03%20at%208.16.33%20PM%20%283%29.jpeg",
      "2014/Professional%20Communication%20Seminar%202014/WhatsApp%20Image%202026-04-03%20at%208.16.33%20PM%20%285%29.jpeg",
    ],
  },
  {
    name: "Piping Stress Workshop 2013",
    photos: [
      "2013/Work%20shop%20piping%20stress%20and%20process%20engineering%202013/PHOTO-2026-04-03-10-22-58.jpg",
      "2013/Work%20shop%20piping%20stress%20and%20process%20engineering%202013/PHOTO-2026-04-03-10-23-03.jpg",
      "2013/Work%20shop%20piping%20stress%20and%20process%20engineering%202013/PHOTO-2026-04-03-10-23-04.jpg",
      "2013/Work%20shop%20piping%20stress%20and%20process%20engineering%202013/PHOTO-2026-04-03-10-23-04%5B1%5D.jpg",
      "2013/Work%20shop%20piping%20stress%20and%20process%20engineering%202013/PHOTO-2026-04-03-10-23-05.jpg",
      "2013/Work%20shop%20piping%20stress%20and%20process%20engineering%202013/PHOTO-2026-04-03-10-23-05%5B1%5D.jpg",
    ],
  },
  {
    name: "Seminar on Induction Motors 2012",
    photos: [
      "2012/Seminar%20Induction%20Motors%202012/WhatsApp%20Image%202026-04-03%20at%2012.34.15%20PM.jpeg",
      "2012/Seminar%20Induction%20Motors%202012/WhatsApp%20Image%202026-04-03%20at%2012.34.16%20PM%20%282%29.jpeg",
      "2012/Seminar%20Induction%20Motors%202012/WhatsApp%20Image%202026-04-03%20at%2012.34.16%20PM.jpeg",
      "2012/Seminar%20Induction%20Motors%202012/WhatsApp%20Image%202026-04-03%20at%2012.34.23%20PM%20%283%29.jpeg",
      "2012/Seminar%20Induction%20Motors%202012/WhatsApp%20Image%202026-04-03%20at%2012.34.25%20PM%20%282%29.jpeg",
      "2012/Seminar%20Induction%20Motors%202012/WhatsApp%20Image%202026-04-03%20at%2012.34.25%20PM%20%285%29.jpeg",
      "2012/Seminar%20Induction%20Motors%202012/WhatsApp%20Image%202026-04-03%20at%2012.34.28%20PM%20%282%29.jpeg",
      "2012/Seminar%20Induction%20Motors%202012/WhatsApp%20Image%202026-04-03%20at%2012.34.28%20PM%20%284%29.jpeg",
    ],
  },
];

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
      <GalleryGrid events={events} base={BASE} blur={BLUR} />

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
