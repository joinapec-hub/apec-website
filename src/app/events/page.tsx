import Image from "next/image";
import Link from "next/link";

const BBQ_POSTER = "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Assets/Event%20Posters/APEC%20BBQ%20AUG%202026.JPG";

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
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Events &amp; Programs</h1>
          <p className="text-xl text-gray-300">Stay connected. Keep growing. Make an impact.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://www.showpass.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8A24B] text-[#0E3D2E] font-bold rounded-lg hover:bg-[#d4aa5a] transition-colors">
              <TicketIcon /> Buy Tickets on Showpass
            </a>
            <a href="https://www.gofundme.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A90D9] text-white font-bold rounded-lg hover:bg-[#3a7bc8] transition-colors">
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

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#15604A] mb-10">Upcoming Events</h2>

          {/* BBQ Event Card */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Poster */}
              <div className="relative h-72 lg:h-auto min-h-[320px]">
                <Image
                  src={BBQ_POSTER}
                  alt="APEC BBQ August 2026"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  priority
                />
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-orange-800">Community Social</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-800">Family Friendly</span>
                  </div>

                  <h3 className="text-3xl font-bold text-[#15604A] mb-3">APEC Annual BBQ 2026</h3>

                  <div className="space-y-3 text-[#4a5a52] text-sm mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#15604A]/10 flex items-center justify-center text-[#15604A] flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                      </div>
                      <span className="font-medium">August 2026</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#15604A]/10 flex items-center justify-center text-[#15604A] flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      </div>
                      <span className="font-medium">Calgary, Alberta</span>
                    </div>
                  </div>

                  <p className="text-[#4a5a52] leading-relaxed">
                    Join us for APEC's annual summer BBQ — a beloved community tradition bringing together engineers, professionals, and families for food, fun, and great conversation. All members and guests are welcome.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href="https://www.showpass.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A24B] text-[#0E3D2E] font-bold rounded-lg text-base hover:bg-[#d4aa5a] transition-colors"
                  >
                    <TicketIcon /> Get Tickets on Showpass
                  </a>
                  <p className="mt-3 text-xs text-gray-400">Ticket link will be updated closer to the event date.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-[#4a5a52] text-sm">
            More events coming soon. Follow us on{" "}
            <a href="https://www.facebook.com/groups/781259795220477/" target="_blank" rel="noopener noreferrer" className="text-[#4A90D9] hover:underline font-medium">Facebook</a>{" "}
            for announcements.
          </p>
        </div>
      </section>

      {/* Past events */}
      <section className="py-16 bg-[#F2E9D2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#15604A] mb-4">Missed a Past Event?</h2>
          <p className="text-[#4a5a52] mb-6">Browse our photo gallery or visit the Facebook group for photos, recordings, and recaps from previous events.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery" className="inline-flex items-center gap-2 px-6 py-3 bg-[#15604A] text-white font-semibold rounded-lg hover:bg-[#0E3D2E] transition-colors">
              View Photo Gallery →
            </Link>
            <a href="https://www.facebook.com/groups/781259795220477/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A90D9] text-white font-semibold rounded-lg hover:bg-[#3a7bc8] transition-colors">
              Visit Our Facebook Group →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
