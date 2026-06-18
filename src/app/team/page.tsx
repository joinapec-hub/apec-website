import Image from "next/image";

const executives = [
  { name: "Muhammad Farhan Khan", role: "President", desc: "Leads APEC and presides over all meetings and organizational activities.", initial: "MF" },
  { name: "Usman Alam", role: "Vice President", desc: "Supports the President in day-to-day activities and oversees committee operations.", initial: "UA" },
  { name: "Salman Ali Mumtaz", role: "General Secretary", desc: "Manages communications, meeting minutes, and organizational coordination.", initial: "SM" },
  { name: "Usama Cheema", role: "Director Finance / Treasurer", desc: "Maintains financial records, prepares budgets, and files annual tax returns.", initial: "UC" },
  { name: "Asad Kamal", role: "Director Event Coordinator", desc: "Plans and organizes logistics for all organizational, social, and professional events.", initial: "AK" },
  { name: "Usman Chaudhary", role: "Director Professional Membership & Career Development", desc: "Guides members on professional licensure, certifications, and career growth in Canada.", initial: "UC2" },
  { name: "Majid Tariq", role: "Director Recreational & Social Program", desc: "Organizes recreational and social activities for the wellbeing of members and families.", initial: "MT" },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-[#1B3A6B]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Executive Team</h1>
          <p className="text-xl text-gray-300">Meet the dedicated professionals leading APEC Canada.</p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((exec) => (
              <div key={exec.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-[#1B3A6B] to-[#4A90D9] flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#C9A227] flex items-center justify-center text-[#1B3A6B] text-2xl font-bold">
                    {exec.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1B3A6B]">{exec.name}</h3>
                  <p className="text-[#C9A227] font-semibold text-sm mt-1">{exec.role}</p>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">{exec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance note */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1B3A6B] mb-4">Governance Structure</h2>
          <p className="text-gray-600 leading-relaxed">
            The Executive Committee is elected every two years by regular and life members through a general election. All committee members must be registered as P.Eng. or EIT in Canada. No executive member receives remuneration for their service.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Elections are overseen by an independent three-member Election Commission to ensure fairness and transparency.
          </p>
        </div>
      </section>
    </>
  );
}
