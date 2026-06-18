import Link from "next/link";

const tiers = [
  {
    name: "Student",
    price: "Free",
    period: "",
    color: "border-[#4A90D9]",
    badge: "bg-[#4A90D9]",
    features: ["Attend all events", "Access to community resources", "Mentorship opportunities", "Career guidance sessions"],
    note: "Must be enrolled in an undergraduate engineering program in Canada.",
    cta: "Apply as Student",
  },
  {
    name: "Regular",
    price: "$10",
    period: "/year",
    color: "border-[#1B3A6B] ring-2 ring-[#1B3A6B]",
    badge: "bg-[#1B3A6B]",
    popular: true,
    features: ["Full voting rights", "All event access", "AGM participation", "Professional networking", "Career development resources", "Mentorship program"],
    note: "Requires a minimum Bachelor's degree or equivalent in engineering.",
    cta: "Join as Regular Member",
  },
  {
    name: "Life",
    price: "$100",
    period: "one-time",
    color: "border-[#C9A227]",
    badge: "bg-[#C9A227] text-[#1B3A6B]",
    features: ["All Regular Member benefits", "Lifetime membership — pay once", "Full voting rights forever", "Recognition in APEC publications", "Priority event access"],
    note: "Any regular member can upgrade to Life Member with a lump sum payment.",
    cta: "Become a Life Member",
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-[#1B3A6B]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Join APEC Canada</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Membership unlocks a network of professionals, events, mentorship, and career support — all for as little as $10/year.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B3A6B]">Membership Tiers</h2>
            <p className="mt-2 text-gray-500">Choose the membership that fits your stage of career.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div key={tier.name} className={`bg-white rounded-2xl border-2 ${tier.color} p-8 relative flex flex-col`}>
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#1B3A6B] text-white text-xs font-bold rounded-full">Most Popular</span>
                )}
                <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-4 ${tier.badge}`}>{tier.name}</div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#1B3A6B]">{tier.price}</span>
                  <span className="text-gray-500 ml-1">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#C9A227] mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mb-4 italic">{tier.note}</p>
                <a href="https://www.showpass.com" target="_blank" rel="noopener noreferrer" className="block text-center px-6 py-3 bg-[#C9A227] text-[#1B3A6B] font-bold rounded-lg hover:bg-yellow-400 transition-colors">
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white border border-dashed border-[#1B3A6B]/30 rounded-xl p-6 text-center">
            <h3 className="font-bold text-[#1B3A6B] mb-1">Honorary Membership</h3>
            <p className="text-sm text-gray-500">Awarded by recommendation of the Executive Committee to individuals who make substantial contributions to APEC's mission. No fee required; by invitation only.</p>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1B3A6B] mb-8 text-center">Payment &amp; Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-[#1B3A6B] mb-2">💳 Pay via Showpass</h3>
              <p className="text-sm text-gray-600 mb-4">Secure online payment for Regular and Life memberships. Fast, easy, and receipt included.</p>
              <a href="https://www.showpass.com" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-[#1B3A6B] text-white font-semibold rounded-lg text-sm hover:bg-[#152e56] transition-colors">Register on Showpass</a>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-[#1B3A6B] mb-2">❤️ Donate / Support</h3>
              <p className="text-sm text-gray-600 mb-4">Help fund community programs, events, and scholarships. Donations accepted via GoFundMe.</p>
              <a href="https://www.gofundme.com" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-[#C9A227] text-[#1B3A6B] font-bold rounded-lg text-sm hover:bg-yellow-400 transition-colors">Donate on GoFundMe</a>
            </div>
          </div>
        </div>
      </section>

      {/* Rights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1B3A6B] mb-6 text-center">Member Rights &amp; Responsibilities</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {[
              "All regular and life members have equal rights and privileges, including the right to vote.",
              "Each member is entitled to one vote. Votes may be cast in-person or through a secure online system.",
              "Proxy voting is not permitted.",
              "All members have the right to attend general body meetings.",
              "Membership is renewed annually for regular members; fees are non-refundable.",
              "Members who withdraw may do so by notifying the Secretary in writing.",
              "Members are expected to abide by APEC's bylaws and the Code of Ethics of APEGA.",
            ].map((r, i) => (
              <li key={i} className="flex gap-3 items-start bg-white rounded-lg p-4 shadow-sm">
                <span className="flex-shrink-0 text-[#C9A227] font-bold">•</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
