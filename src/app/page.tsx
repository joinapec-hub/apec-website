import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";

const stats = [
  { value: "200+", label: "Members" },
  { value: "10+", label: "Years Active" },
  { value: "50+", label: "Events Hosted" },
  { value: "7", label: "Executive Members" },
];

const highlights = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: "Professional Networking",
    desc: "Connect with engineers and professionals across every discipline and background.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Knowledge Sharing",
    desc: "Attend technical seminars, workshops, and training sessions led by industry experts.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Community Impact",
    desc: "Build a more inclusive, thriving Canada through cross-cultural collaboration.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    title: "Career Development",
    desc: "Get guidance on Canadian licensure, job markets, and professional certifications.",
  },
];

const communityPhotos = [
  { src: "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5723.jpeg", alt: "APEC Eid Gala 2026" },
  { src: "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-25%5B1%5D.jpg", alt: "APEC Summer Gala 2025" },
  { src: "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-42.jpg", alt: "APEC Eid Gala 2024" },
  { src: "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5724.jpeg", alt: "APEC Eid Gala 2026" },
  { src: "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-27.jpg", alt: "APEC Summer Gala 2025" },
  { src: "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2024/APEC%20Eid%20Gala%202024/PHOTO-2026-03-31-22-30-52.jpg", alt: "APEC Eid Gala 2024" },
  { src: "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5731.jpeg", alt: "APEC Eid Gala 2026" },
  { src: "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-27%5B1%5D.jpg", alt: "APEC Summer Gala 2025" },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* Stats */}
      <section className="bg-[#F2E9D2] py-14">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className={`pl-5 border-l-4 ${i % 2 === 0 ? "border-[#C8A24B]" : "border-[#4A90D9]"}`}>
              <p className={`text-5xl font-bold ${i % 2 === 0 ? "text-[#15604A]" : "text-[#4A90D9]"}`}>{s.value}</p>
              <p className="text-[#4a5a52] font-medium text-base mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 bg-[#F2E9D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#C8A24B] font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <div className="w-12 h-0.5 bg-[#C8A24B] mt-2 mb-3" />
              <h2 className="text-4xl sm:text-5xl font-bold text-[#15604A] leading-tight">A Community Built on Connection and Purpose</h2>
              <p className="mt-4 text-[#4a5a52] leading-relaxed">Founded in Calgary in 2011, APEC Canada was created to support Pakistani-Canadian engineers navigating a new professional landscape. Today, we have grown into a vibrant, inclusive community that welcomes professionals from every culture, discipline, and background.</p>
              <p className="mt-3 text-[#4a5a52] leading-relaxed">We believe diverse perspectives strengthen communities. Our events, mentorship programs, and networking opportunities are open to anyone who shares our commitment to professional excellence and community service.</p>
              <Link href="/about" className="mt-6 inline-block px-6 py-3 bg-[#15604A] text-white font-semibold rounded-lg hover:bg-[#0E3D2E] transition-colors">Learn More About Us</Link>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2026/Eid%20Gala%202026/IMG_5719.jpeg" alt="APEC community event" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={85} />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#15604A]">What We Offer</h2>
            <p className="mt-3 text-[#4a5a52] max-w-xl mx-auto">Practical support and meaningful connections for professionals at every stage.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <div key={h.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4" style={{ borderLeftColor: i % 2 === 0 ? "#15604A" : "#4A90D9" }}>
                <div className="w-11 h-11 p-2.5 rounded-lg mb-4" style={{ backgroundColor: i % 2 === 0 ? "rgba(21,96,74,0.1)" : "rgba(74,144,217,0.1)", color: i % 2 === 0 ? "#15604A" : "#4A90D9" }}>
                  {h.icon}
                </div>
                <h3 className="text-lg font-bold text-[#15604A] mb-2">{h.title}</h3>
                <p className="text-[#4a5a52] text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/2025/Summer%20Gala%202025/PHOTO-2026-04-03-09-48-26.jpg" alt="APEC event" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={85} />
            </div>
            <div>
              <span className="text-[#C8A24B] font-semibold text-sm uppercase tracking-wider">Events &amp; Programs</span>
              <div className="w-12 h-0.5 bg-[#C8A24B] mt-2 mb-3" />
              <h2 className="text-4xl sm:text-5xl font-bold text-[#15604A] leading-tight">Join Our Next Gathering</h2>
              <p className="mt-4 text-[#4a5a52] leading-relaxed">From technical seminars and P.Eng exam prep to cultural celebrations and community socials — our calendar is packed with meaningful events year-round.</p>
              <p className="mt-3 text-[#4a5a52] leading-relaxed">Events are powered by Showpass for seamless ticketing. Many events are free or low-cost, with fundraiser opportunities to support our community programs.</p>
              <Link href="/events" className="mt-6 inline-block px-6 py-3 bg-[#C8A24B] text-[#0E3D2E] font-bold rounded-lg hover:bg-[#d4aa5a] transition-colors">View All Events</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Photos */}
      <section className="py-16 bg-[#0E3D2E]" style={{ backgroundImage: "radial-gradient(#C8A24B15 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#C8A24B] font-semibold text-sm uppercase tracking-wider">Real People. Real Community.</span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-white">Life at APEC</h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">From Eid Galas to Summer mixers — here&apos;s what belonging to APEC looks like.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {communityPhotos.map((photo, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-[#0E3D2E]/30 group-hover:bg-[#0E3D2E]/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C8A24B] text-[#0E3D2E] font-bold rounded-lg hover:bg-[#d4aa5a] transition-colors text-lg">
              View Full Gallery
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 bg-[#0E3D2E]"
        style={{ backgroundImage: "radial-gradient(#C8A24B22 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Ready to Be Part of Something Bigger?</h2>
          <p className="text-gray-300 text-xl mb-8">Membership starts at just $10/year. Join a community that invests in your professional future.</p>
          <Link href="/membership" className="px-10 py-4 bg-[#C8A24B] text-[#0E3D2E] font-bold rounded-lg text-lg hover:bg-[#d4aa5a] transition-colors shadow-lg">Join APEC Today</Link>
        </div>
      </section>
    </>
  );
}
