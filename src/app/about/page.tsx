import Image from "next/image";

const values = [
  {
    title: "Inclusivity",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    desc: "We welcome professionals from every culture, discipline, and background.",
  },
  {
    title: "Community",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    desc: "We build lasting bonds that extend beyond the professional sphere.",
  },
  {
    title: "Excellence",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    desc: "We hold ourselves to the highest standards of professional and ethical conduct.",
  },
  {
    title: "Integrity",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    desc: "We operate with transparency, fairness, and honesty in everything we do.",
  },
  {
    title: "Collaboration",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
    desc: "We believe collective effort achieves what no individual can alone.",
  },
  {
    title: "Service",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    desc: "We give back to the community that has given us so much.",
  },
];

function TargetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

export default function AboutPage() {
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
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">About APEC Canada</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A professional community rooted in shared values — and open to all who share them.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#C8A24B] font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <div className="w-12 h-0.5 bg-[#C8A24B] mt-2 mb-3" />
              <h2 className="text-4xl font-bold text-[#15604A]">Where We Came From</h2>
              <p className="mt-4 text-[#4a5a52] leading-relaxed">
                The Association of Pakistani Engineers in Canada (APEC) was founded in Calgary, Alberta in 2011 by a group of engineers who understood the challenges of building a professional career in a new country. They created APEC as a bridge — a place where newcomers could find mentors, and where established professionals could give back.
              </p>
              <p className="mt-3 text-[#4a5a52] leading-relaxed">
                Over the years, our membership has grown and so has our vision. While we remain proud of our origins, APEC today is a multicultural organization. We actively welcome professionals from all ethnicities, disciplines, and walks of life who share our commitment to community, excellence, and mutual support.
              </p>
              <p className="mt-3 text-[#4a5a52] leading-relaxed">
                Our head office is in Calgary, with aspirations to expand across provinces and territories as our community grows.
              </p>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80" alt="Community gathering" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={85} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-[#F2E9D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#15604A] text-white rounded-2xl p-8">
            <div className="mb-4 text-[#C8A24B]"><TargetIcon /></div>
            <h2 className="text-2xl font-bold text-[#C8A24B] mb-4">Our Mission</h2>
            <p className="leading-relaxed text-gray-200">
              To bring together engineers and professionals from diverse backgrounds — fostering knowledge-sharing, professional development, and cross-cultural collaboration that strengthens both individuals and the communities they serve across Canada.
            </p>
          </div>
          <div className="bg-[#4A90D9] rounded-2xl p-8">
            <div className="mb-4 text-white"><EyeIcon /></div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="leading-relaxed text-blue-50">
              A Canada where every engineer and technically-minded professional — regardless of origin, ethnicity, or background — has the networks, mentorship, and opportunities they need to thrive and contribute.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F2E9D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#15604A]">Our Values</h2>
            <p className="mt-3 text-[#4a5a52]">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border-l-4 border-[#C8A24B] rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 p-2 bg-[#15604A]/10 rounded-lg text-[#15604A] mb-3">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-[#15604A] mb-2">{v.title}</h3>
                <p className="text-[#4a5a52] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#15604A] mb-8 text-center">Our Objectives</h2>
          <ul className="space-y-4">
            {[
              "Create an environment for exchanging technical knowledge within the Code of Ethics of APEGA.",
              "Promote the engineering profession and professional development through training and networking.",
              "Support engineers in obtaining their Professional Engineer (P.Eng.) license in Canada.",
              "Foster technical cooperation with other engineering and technical societies across Canada.",
              "Assist Pakistani engineers across provinces and territories in forming local APEC branches.",
              "Provide career development support to engineering students, fresh graduates, and newly immigrated engineers.",
              "Promote the engineering profession and community engagement within diverse communities across Canada.",
            ].map((obj, i) => (
              <li key={i} className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#15604A] text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <p className="text-[#4a5a52]">{obj}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Non-affiliation */}
      <section className="py-8 bg-[#0E3D2E]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-300 text-sm">
            <strong className="text-[#C8A24B]">Important Notice:</strong> APEC Canada is a non-profit, non-partisan, non-religious, and non-political voluntary professional organization. APEC is not affiliated with or associated with any political party or government body.
          </p>
        </div>
      </section>
    </>
  );
}
