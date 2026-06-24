import Image from "next/image";

type Person = {
  name: string;
  role: string;
  desc: string;
  photo?: string;
};

const executives: Person[] = [
  { name: "Muhammad Farhan Khan", role: "President", desc: "Leads APEC and presides over all meetings and organizational activities.", photo: "/team/farhan-khan.jpg" },
  { name: "Usman Alam", role: "Vice President", desc: "Supports the President in day-to-day activities and oversees committee operations.", photo: "/team/usman-alam.jpg" },
  { name: "Salman Ali Mumtaz", role: "General Secretary", desc: "Manages communications, meeting minutes, and organizational coordination.", photo: "/team/salman-mumtaz.jpg" },
  { name: "Usama Cheema", role: "Director Finance / Treasurer", desc: "Maintains financial records, prepares budgets, and files annual tax returns.", photo: "/team/usama-cheema.jpg" },
  { name: "Asad Kamal", role: "Director Event Coordinator", desc: "Plans and organizes logistics for all organizational, social, and professional events.", photo: "/team/asad-kamal.jpg" },
  { name: "Usman Choudhary", role: "Director Professional Membership & Career Development", desc: "Guides members on professional licensure, certifications, and career growth in Canada.", photo: "/team/usman-choudhary.png" },
  { name: "Majid Tariq", role: "Director Recreational & Social Program", desc: "Organizes recreational and social activities for the wellbeing of members and families." },
];

const advisors: Person[] = [
  { name: "Muhammad Azam Kahloo", role: "Advisor / Ex-President", desc: "A founding pillar and former President of APEC, continuing to guide the organization with his experience and dedication.", photo: "/team/azam-kahloo.png" },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="relative h-72 bg-gradient-to-br from-[#0a1645] to-[#0f1f5c]">
        {person.photo ? (
          <Image
            src={person.photo}
            alt={person.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-[#C8A24B] flex items-center justify-center text-[#0a1645] text-2xl font-bold">
              {initials(person.name)}
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#1D2621]">{person.name}</h3>
        <p className="text-[#0f1f5c] font-semibold text-sm mt-1">{person.role}</p>
        <p className="text-[#4a5a52] text-sm mt-3 leading-relaxed">{person.desc}</p>
      </div>
    </div>
  );
}

export default function TeamPage() {
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
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Executive Team</h1>
          <p className="text-xl text-gray-300">Meet the dedicated professionals leading APEC Canada.</p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 bg-[#F2E9D2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((exec) => (
              <PersonCard key={exec.name} person={exec} />
            ))}
          </div>
        </div>
      </section>

      {/* Advisors / Honorary */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#C8A24B] font-semibold text-sm uppercase tracking-wider">With Gratitude</span>
            <div className="w-12 h-0.5 bg-[#C8A24B] mt-2 mb-3 mx-auto" />
            <h2 className="text-4xl font-bold text-[#0f1f5c]">Advisors &amp; Honorary Members</h2>
            <p className="mt-3 text-[#4a5a52] max-w-2xl mx-auto">Recognizing those whose long-standing service and leadership continue to shape APEC.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {advisors.map((person) => (
              <div key={person.name} className="w-full max-w-xs">
                <PersonCard person={person} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance note */}
      <section className="py-16 bg-[#F2E9D2]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0f1f5c] mb-4">Governance Structure</h2>
          <p className="text-[#4a5a52] leading-relaxed">
            The Executive Committee is elected by regular and life members through a general election.
          </p>
          <p className="mt-3 text-[#4a5a52] leading-relaxed">
            Elections are overseen by an independent three-member Election Commission to ensure fairness and transparency.
          </p>
        </div>
      </section>
    </>
  );
}
