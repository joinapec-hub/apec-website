import Image from "next/image";

const values = [
  { title: "Inclusivity", icon: "🌐", desc: "We welcome professionals from every culture, discipline, and background." },
  { title: "Community", icon: "🤝", desc: "We build lasting bonds that extend beyond the professional sphere." },
  { title: "Excellence", icon: "⭐", desc: "We hold ourselves to the highest standards of professional and ethical conduct." },
  { title: "Integrity", icon: "🛡️", desc: "We operate with transparency, fairness, and honesty in everything we do." },
  { title: "Collaboration", icon: "🔗", desc: "We believe collective effort achieves what no individual can alone." },
  { title: "Service", icon: "❤️", desc: "We give back to the community that has given us so much." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#1B3A6B] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1600&q=80" alt="" fill className="object-cover" sizes="100vw" quality={70} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About APEC Canada</h1>
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
              <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="mt-2 text-3xl font-bold text-[#1B3A6B]">Where We Came From</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                The Association of Pakistani Engineers in Canada (APEC) was founded in Calgary, Alberta in 2011 by a group of engineers who understood the challenges of building a professional career in a new country. They created APEC as a bridge — a place where newcomers could find mentors, and where established professionals could give back.
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Over the years, our membership has grown and so has our vision. While we remain proud of our origins, APEC today is a multicultural organization. We actively welcome professionals from all ethnicities, disciplines, and walks of life who share our commitment to community, excellence, and mutual support.
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1B3A6B] text-white rounded-2xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-[#C9A227] mb-4">Our Mission</h2>
            <p className="leading-relaxed text-gray-200">
              To bring together engineers and professionals from diverse backgrounds — fostering knowledge-sharing, professional development, and cross-cultural collaboration that strengthens both individuals and the communities they serve across Canada.
            </p>
          </div>
          <div className="bg-[#C9A227] rounded-2xl p-8">
            <div className="text-4xl mb-4">🔭</div>
            <h2 className="text-2xl font-bold text-[#1B3A6B] mb-4">Our Vision</h2>
            <p className="leading-relaxed text-[#1B3A6B]">
              A Canada where every engineer and technically-minded professional — regardless of origin, ethnicity, or background — has the networks, mentorship, and opportunities they need to thrive and contribute.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B]">Our Values</h2>
            <p className="mt-3 text-gray-500">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-lg font-bold text-[#1B3A6B] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1B3A6B] mb-8 text-center">Our Objectives</h2>
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
              <li key={i} className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#C9A227] text-[#1B3A6B] flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <p className="text-gray-600">{obj}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Non-affiliation */}
      <section className="py-8 bg-[#1B3A6B]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-300 text-sm">
            <strong className="text-[#C9A227]">Important Notice:</strong> APEC Canada is a non-profit, non-partisan, non-religious, and non-political voluntary professional organization. APEC is not affiliated with or associated with any political party or government body.
          </p>
        </div>
      </section>
    </>
  );
}
