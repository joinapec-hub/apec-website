import Image from "next/image";
import Link from "next/link";

const events = [
  {
    date: "Aug 15, 2026",
    title: "Annual General Meeting 2026",
    type: "Governance",
    location: "Calgary, AB",
    desc: "Join us for the Annual General Meeting where we review achievements, present financials, and plan the year ahead. All members welcome.",
    free: true,
  },
  {
    date: "Sep 6, 2026",
    title: "P.Eng Exam Prep Workshop",
    type: "Professional Development",
    location: "Online (Zoom)",
    desc: "An intensive workshop to help engineers prepare for the National Professional Practice Exam (NPPE). Led by licensed P.Eng professionals.",
    free: false,
  },
  {
    date: "Sep 20, 2026",
    title: "Summer Networking Mixer",
    type: "Networking",
    location: "Calgary, AB",
    desc: "Connect with fellow engineers and professionals in a relaxed social setting. Light refreshments provided. All backgrounds welcome.",
    free: true,
  },
  {
    date: "Oct 11, 2026",
    title: "Technical Seminar: AI in Engineering",
    type: "Technical",
    location: "Calgary, AB",
    desc: "Industry experts discuss the impact of artificial intelligence on engineering workflows, design, and safety — and what it means for your career.",
    free: false,
  },
];

const typeColors: Record<string, string> = {
  "Governance": "bg-purple-100 text-purple-800",
  "Professional Development": "bg-blue-100 text-blue-800",
  "Networking": "bg-green-100 text-green-800",
  "Technical": "bg-orange-100 text-orange-800",
};

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block mr-1 -mt-0.5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 inline-block mr-1.5 -mt-0.5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 inline-block mr-1.5 -mt-0.5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  );
}

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#0E3D2E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600&q=80" alt="" fill className="object-cover" sizes="100vw" quality={70} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Events &amp; Programs</h1>
          <p className="text-xl text-gray-300">Stay connected. Keep growing. Make an impact.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://www.showpass.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8A24B] text-[#0E3D2E] font-bold rounded-lg hover:bg-[#d4aa5a] transition-colors">
              <TicketIcon /> Buy Tickets on Showpass
            </a>
            <a href="https://www.gofundme.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
              <HeartIcon /> Donate / Support Us
            </a>
          </div>
        </div>
      </section>

      {/* Showpass banner */}
      <section className="bg-[#F2E9D2] border-b border-[#C8A24B]/20 py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[#4a5a52]">
          <div className="flex items-center gap-2">
            <span className="text-[#15604A] font-bold">Powered by Showpass</span>
            <span>— secure, seamless ticketing for all APEC events.</span>
          </div>
          <a href="https://www.showpass.com" target="_blank" rel="noopener noreferrer" className="text-[#4A90D9] hover:underline font-medium">View all events on Showpass →</a>
        </div>
      </section>

      {/* Events list */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#15604A] mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 text-center sm:text-left">
                  <div className="bg-[#15604A] text-white rounded-xl p-3 inline-block sm:block min-w-[80px]">
                    <p className="text-xs font-medium opacity-70">{event.date.split(" ")[0]}</p>
                    <p className="text-2xl font-bold">{event.date.split(" ")[1].replace(",", "")}</p>
                    <p className="text-xs opacity-70">{event.date.split(" ")[2]}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColors[event.type]}`}>{event.type}</span>
                    {event.free && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-800">Free</span>}
                  </div>
                  <h3 className="text-xl font-bold text-[#15604A]">{event.title}</h3>
                  <p className="text-[#4a5a52] text-sm mt-1"><MapPinIcon />{event.location}</p>
                  <p className="text-[#4a5a52] text-sm mt-2 leading-relaxed">{event.desc}</p>
                  <a href="https://www.showpass.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-5 py-2 bg-[#C8A24B] text-[#0E3D2E] font-bold rounded-lg text-sm hover:bg-[#d4aa5a] transition-colors">
                    {event.free ? "Register Free" : "Get Tickets"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="py-16 bg-[#F2E9D2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#15604A] mb-4">Missed a Past Event?</h2>
          <p className="text-[#4a5a52] mb-6">Check our Facebook group for photos, recordings, and recaps from previous events.</p>
          <a href="https://www.facebook.com/groups/781259795220477/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#15604A] text-white font-semibold rounded-lg hover:bg-[#0E3D2E] transition-colors">
            Visit Our Facebook Group →
          </a>
        </div>
      </section>
    </>
  );
}
