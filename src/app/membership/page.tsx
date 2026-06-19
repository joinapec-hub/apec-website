import Link from "next/link";

const tiers = [
  {
    name: "Student",
    price: "Free",
    period: "",
    color: "border-[#4A90D9]",
    badge: "bg-[#4A90D9]",
    badgeText: "text-white",
    features: ["Attend all events", "Access to community resources", "Mentorship opportunities", "Career guidance sessions"],
    note: "Must be enrolled in an undergraduate engineering program in Canada.",
    cta: "Apply as Student",
  },
  {
    name: "Regular",
    price: "$10",
    period: "/year",
    color: "border-[#15604A] ring-2 ring-[#15604A]",
    badge: "bg-[#15604A]",
    badgeText: "text-white",
    popular: true,
    features: ["Full voting rights", "All event access", "AGM participation", "Professional networking", "Career development resources", "Mentorship program"],
    note: "Requires a minimum Bachelor's degree or equivalent in engineering.",
    cta: "Join as Regular Member",
  },
  {
    name: "Life",
    price: "$100",
    period: "one-time",
    color: "border-[#C8A24B]",
    badge: "bg-[#C8A24B]",
    badgeText: "text-[#0E3D2E]",
    features: ["All Regular Member benefits", "Lifetime membership — pay once", "Full voting rights forever", "Recognition in APEC publications", "Priority event access"],
    note: "Any regular member can upgrade to Life Member with a lump sum payment.",
    cta: "Become a Life Member",
  },
];

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#C8A24B]">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 inline-block mr-2 -mt-0.5 text-[#15604A]">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 21Z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 inline-block mr-2 -mt-0.5 text-[#C8A24B]">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  );
}

export default function MembershipPage() {
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Join APEC Canada</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Membership unlocks a network of professionals, events, mentorship, and career support — all for as little as $10/year.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 bg-[#F2E9D2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#15604A]">Membership Tiers</h2>
            <p className="mt-2 text-[#4a5a52]">Choose the membership that fits your stage of career.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div key={tier.name} className={`bg-white rounded-2xl border-2 ${tier.color} p-8 relative flex flex-col`}>
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#15604A] text-white text-xs font-bold rounded-full">Most Popular</span>
                )}
                <div className={`inline-block px-3 py-1 rounded-full ${tier.badgeText} text-sm font-semibold mb-4 ${tier.badge}`}>{tier.name}</div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#15604A]">{tier.price}</span>
                  <span className="text-[#4a5a52] ml-1">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#4a5a52]">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mb-4 italic">{tier.note}</p>
                <a href="https://www.showpass.com" target="_blank" rel="noopener noreferrer" className="block text-center px-6 py-3 bg-[#C8A24B] text-[#0E3D2E] font-bold rounded-lg hover:bg-[#d4aa5a] transition-colors">
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white border border-dashed border-[#15604A]/30 rounded-xl p-6 text-center">
            <h3 className="font-bold text-[#15604A] mb-1">Honorary Membership</h3>
            <p className="text-sm text-[#4a5a52]">Awarded by recommendation of the Executive Committee to individuals who make substantial contributions to APEC&apos;s mission. No fee required; by invitation only.</p>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#15604A] mb-8 text-center">Payment &amp; Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-[#15604A] mb-2"><CreditCardIcon />Pay via Showpass</h3>
              <p className="text-sm text-[#4a5a52] mb-4">Secure online payment for Regular and Life memberships. Fast, easy, and receipt included.</p>
              <a href="https://www.showpass.com" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-[#15604A] text-white font-semibold rounded-lg text-sm hover:bg-[#0E3D2E] transition-colors">Register on Showpass</a>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-[#15604A] mb-2"><HeartIcon />Donate / Support</h3>
              <p className="text-sm text-[#4a5a52] mb-4">Help fund community programs, events, and scholarships. Donations accepted via GoFundMe.</p>
              <a href="https://www.gofundme.com" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-[#C8A24B] text-[#0E3D2E] font-bold rounded-lg text-sm hover:bg-[#d4aa5a] transition-colors">Donate on GoFundMe</a>
            </div>
          </div>
        </div>
      </section>

      {/* Rights */}
      <section className="py-16 bg-[#F2E9D2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#15604A] mb-6 text-center">Member Rights &amp; Responsibilities</h2>
          <ul className="space-y-3 text-sm text-[#4a5a52]">
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
                <CheckIcon />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
