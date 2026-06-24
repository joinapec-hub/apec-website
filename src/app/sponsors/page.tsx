import Link from "next/link";

// rank determines display order: 1 = Platinum (top), 4 = Community (bottom)
const currentSponsors = [
  {
    rank: 4,
    tier: "Community Sponsor",
    name: "FastSigns Downtown Calgary",
    tagline: "Professional Signage & Visual Communications",
    director: "Salman Ali Mumtaz",
    address: "931 6 Ave SW, Calgary, AB, T2P 0V7",
    phone: "403-775-6633",
    email: "2189@fastsigns.com",
    website: "https://www.fastsigns.com",
    desc: "FastSigns Downtown Calgary is a proud community sponsor of APEC. They provide high-quality signage, banners, and visual communications solutions for businesses across Calgary. Their expertise and community support make a real difference for organizations like APEC.",
    color: "border-[#4A90D9] bg-[#4A90D9]/5",
    badgeColor: "bg-[#4A90D9] text-white",
  },
];

const tiers = [
  { name: "Platinum", price: "$6,000/yr", perks: ["Logo on homepage hero", "Speaking slot at events", "VIP access to all events", "Social media features", "Banner at physical events"] },
  { name: "Gold", price: "$4,000/yr", perks: ["Logo on sponsors page", "Social media mentions", "Access to all events", "Banner at major events"] },
  { name: "Silver", price: "$2,000/yr", perks: ["Logo on website", "Social media mention", "Event access passes"] },
  { name: "Community", price: "$1,000/yr", perks: ["Website mention", "Certificate of appreciation"] },
  { name: "General", price: "$100–$400/yr", perks: ["Name listed on our website", "Certificate of appreciation"] },
];

function PersonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block mr-1 -mt-0.5 text-[#0f1f5c]">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block mr-1 -mt-0.5 text-[#0f1f5c]">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block mr-1 -mt-0.5 text-[#0f1f5c]">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block mr-1 -mt-0.5 text-[#0f1f5c]">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 flex-shrink-0 text-[#C8A24B]">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function SponsorsPage() {
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Our Sponsors</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sponsoring APEC means investing in a community of skilled professionals who are building a stronger Canada.
          </p>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f1f5c] mb-3 text-center">Current Sponsors</h2>
          <p className="text-[#4a5a52] text-sm text-center mb-8 max-w-2xl mx-auto">Sponsors are featured by tier — Platinum partners are showcased first, followed by Gold, Silver, and Community sponsors.</p>
          <div className="space-y-6">
          {[...currentSponsors].sort((a, b) => a.rank - b.rank).map((sponsor) => (
            <div key={sponsor.name} className={`border-2 ${sponsor.color} rounded-2xl p-8`}>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${sponsor.badgeColor} mb-3`}>{sponsor.tier}</span>
                  <h3 className="text-3xl font-bold text-[#0f1f5c]">{sponsor.name}</h3>
                  <p className="text-[#C8A24B] font-semibold">{sponsor.tagline}</p>
                </div>
              </div>
              <p className="text-[#4a5a52] leading-relaxed mb-6">{sponsor.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2 text-[#4a5a52]">
                  <p><PersonIcon /><strong>Contact:</strong> {sponsor.director}</p>
                  <p><MapPinIcon /><strong>Address:</strong> {sponsor.address}</p>
                </div>
                <div className="space-y-2 text-[#4a5a52]">
                  <p><PhoneIcon /><strong>Phone:</strong> <a href={`tel:${sponsor.phone}`} className="text-[#4A90D9] hover:underline">{sponsor.phone}</a></p>
                  <p><EnvelopeIcon /><strong>Email:</strong> <a href={`mailto:${sponsor.email}`} className="text-[#4A90D9] hover:underline">{sponsor.email}</a></p>
                </div>
              </div>
              <div className="mt-4">
                <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-[#0f1f5c] text-white font-semibold rounded-lg text-sm hover:bg-[#0a1645] transition-colors">Visit FastSigns Calgary →</a>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Sponsorship tiers */}
      <section className="py-20 bg-[#F2E9D2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0f1f5c]">Become a Sponsor</h2>
            <p className="mt-2 text-[#4a5a52] max-w-xl mx-auto">
              Align your brand with a trusted professional community and gain visibility among hundreds of engineers and tech professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-[#0f1f5c] mb-1">{tier.name}</h3>
                <p className="text-[#C8A24B] font-bold text-sm mb-4">{tier.price}</p>
                <ul className="space-y-2">
                  {tier.perks.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-[#4a5a52]">
                      <CheckIcon />{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-block px-8 py-4 bg-[#C8A24B] text-[#0a1645] font-bold rounded-lg hover:bg-[#d4aa5a] transition-colors text-lg">
              Enquire About Sponsorship
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
