import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "200+", label: "Members" },
  { value: "10+", label: "Years Active" },
  { value: "50+", label: "Events Hosted" },
  { value: "7", label: "Executive Members" },
];

const highlights = [
  { icon: "🤝", title: "Professional Networking", desc: "Connect with engineers and professionals across every discipline and background." },
  { icon: "📚", title: "Knowledge Sharing", desc: "Attend technical seminars, workshops, and training sessions led by industry experts." },
  { icon: "🌍", title: "Community Impact", desc: "Build a more inclusive, thriving Canada through cross-cultural collaboration." },
  { icon: "🎓", title: "Career Development", desc: "Get guidance on Canadian licensure, job markets, and professional certifications." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80" alt="Professionals collaborating" fill priority className="object-cover object-center" sizes="100vw" quality={85} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B]/90 to-[#1B3A6B]/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <span className="inline-block px-4 py-1 bg-[#C9A227]/20 border border-[#C9A227] rounded-full text-[#C9A227] text-sm font-medium mb-6">Calgary, Alberta · Est. 2011</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Engineers &amp; Professionals<br /><span className="text-[#C9A227]">Building Canada Together</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            APEC Canada is a non-profit community welcoming professionals from all backgrounds to network, grow, and make a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="px-8 py-4 bg-[#C9A227] text-[#1B3A6B] font-bold rounded-lg text-lg hover:bg-yellow-400 transition-all shadow-lg">Become a Member</Link>
            <Link href="/events" className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-lg text-lg hover:bg-white/20 transition-all backdrop-blur-sm">Upcoming Events</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#C9A227] py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-[#1B3A6B]">{s.value}</p>
              <p className="text-[#1B3A6B] font-medium text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1B3A6B] leading-tight">A Community Built on Connection and Purpose</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">Founded in Calgary in 2011, APEC Canada was created to support Pakistani-Canadian engineers navigating a new professional landscape. Today, we have grown into a vibrant, inclusive community that welcomes professionals from every culture, discipline, and background.</p>
              <p className="mt-3 text-gray-600 leading-relaxed">We believe diverse perspectives strengthen communities. Our events, mentorship programs, and networking opportunities are open to anyone who shares our commitment to professional excellence and community service.</p>
              <Link href="/about" className="mt-6 inline-block px-6 py-3 bg-[#1B3A6B] text-white font-semibold rounded-lg hover:bg-[#152e56] transition-colors">Learn More About Us</Link>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80" alt="Diverse professionals" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={85} />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B]">What We Offer</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">Practical support and meaningful connections for professionals at every stage.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{h.icon}</div>
                <h3 className="text-lg font-bold text-[#1B3A6B] mb-2">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
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
              <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80" alt="Community event" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={85} />
            </div>
            <div>
              <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Events &amp; Programs</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1B3A6B] leading-tight">Join Our Next Gathering</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">From technical seminars and P.Eng exam prep to cultural celebrations and community socials — our calendar is packed with meaningful events year-round.</p>
              <p className="mt-3 text-gray-600 leading-relaxed">Events are powered by Showpass for seamless ticketing. Many events are free or low-cost, with fundraiser opportunities to support our community programs.</p>
              <Link href="/events" className="mt-6 inline-block px-6 py-3 bg-[#C9A227] text-[#1B3A6B] font-bold rounded-lg hover:bg-yellow-400 transition-colors">View All Events</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1B3A6B]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Be Part of Something Bigger?</h2>
          <p className="text-gray-300 text-lg mb-8">Membership starts at just $10/year. Join a community that invests in your professional future.</p>
          <Link href="/membership" className="px-10 py-4 bg-[#C9A227] text-[#1B3A6B] font-bold rounded-lg text-lg hover:bg-yellow-400 transition-colors shadow-lg">Join APEC Today</Link>
        </div>
      </section>
    </>
  );
}
