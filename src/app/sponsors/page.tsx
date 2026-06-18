import Link from "next/link";

const currentSponsors = [
  {
    tier: "Gold Sponsor",
    name: "FastSigns Downtown Calgary",
    tagline: "Professional Signage & Visual Communications",
    director: "Salman Ali Mumtaz",
    address: "931 6 Ave SW, Calgary, AB, T2P 0V7",
    phone: "403-775-6633",
    email: "2189@fastsigns.com",
    website: "https://www.fastsigns.com",
    desc: "FastSigns Downtown Calgary is our proud website sponsor. They provide high-quality signage, banners, and visual communications solutions for businesses across Calgary. Their expertise and community support make a real difference for organizations like APEC.",
    color: "border-[#C9A227] bg-[#C9A227]/5",
    badgeColor: "bg-[#C9A227] text-[#1B3A6B]",
  },
];

const tiers = [
  { name: "Platinum", price: "$5,000+/yr", perks: ["Logo on homepage hero", "Speaking slot at events", "VIP access to all events", "Social media features", "Banner at physical events"] },
  { name: "Gold", price: "$2,500/yr", perks: ["Logo on sponsors page", "Social media mentions", "Access to all events", "Banner at major events"] },
  { name: "Silver", price: "$1,000/yr", perks: ["Logo on website", "Social media mention", "Event access passes"] },
  { name: "Community", price: "$500/yr", perks: ["Website mention", "Certificate of appreciation"] },
];

export default function SponsorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-[#1B3A6B]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Sponsors</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sponsoring APEC Canada means investing in a community of skilled professionals who are building a stronger Canada.
          </p>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1B3A6B] mb-8 text-center">Current Sponsors</h2>
          {currentSponsors.map((sponsor) => (
            <div key={sponsor.name} className={`border-2 ${sponsor.color} rounded-2xl p-8`}>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${sponsor.badgeColor} mb-3`}>{sponsor.tier}</span>
                  <h3 className="text-2xl font-bold text-[#1B3A6B]">{sponsor.name}</h3>
                  <p className="text-[#C9A227] font-semibold">{sponsor.tagline}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">{sponsor.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2 text-gray-600">
                  <p>👤 <strong>Contact:</strong> {sponsor.director}</p>
                  <p>📍 <strong>Address:</strong> {sponsor.address}</p>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>📞 <strong>Phone:</strong> <a href={`tel:${sponsor.phone}`} className="text-[#4A90D9] hover:underline">{sponsor.phone}</a></p>
                  <p>✉️ <strong>Email:</strong> <a href={`mailto:${sponsor.email}`} className="text-[#4A90D9] hover:underline">{sponsor.email}</a></p>
                </div>
              </div>
              <div className="mt-4">
                <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-[#1B3A6B] text-white font-semibold rounded-lg text-sm hover:bg-[#152e56] transition-colors">Visit FastSigns Calgary →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B3A6B]">Become a Sponsor</h2>
            <p className="mt-2 text-gray-500 max-w-xl mx-auto">
              Align your brand with a trusted professional community and gain visibility among hundreds of engineers and tech professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-[#1B3A6B] mb-1">{tier.name}</h3>
                <p className="text-[#C9A227] font-bold text-sm mb-4">{tier.price}</p>
                <ul className="space-y-2">
                  {tier.perks.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-gray-600">
                      <span className="text-[#C9A227]">✓</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-block px-8 py-4 bg-[#C9A227] text-[#1B3A6B] font-bold rounded-lg hover:bg-yellow-400 transition-colors text-lg">
              Enquire About Sponsorship
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
