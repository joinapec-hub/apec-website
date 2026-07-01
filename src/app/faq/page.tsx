import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about APEC — the Association of Pakistani Engineers in Canada. Membership, fees, events, P.Eng and APEGA licensing guidance, mentorship for internationally trained engineers, and how to join our Calgary-based engineering community.",
  keywords: [
    "Pakistani engineers Canada",
    "Pakistani engineers Calgary",
    "Association of Pakistani Engineers in Canada",
    "engineering association Calgary",
    "internationally trained engineers Canada",
    "immigrant engineers Alberta",
    "P.Eng licensing Alberta",
    "APEGA guidance",
    "engineer mentorship Calgary",
    "engineering networking Alberta",
    "join APEC",
  ],
  alternates: { canonical: "/faq" },
};

type QA = { q: string; a: string; link?: { href: string; label: string } };
type Category = { id: string; title: string; blurb: string; items: QA[] };

const categories: Category[] = [
  {
    id: "about",
    title: "About APEC",
    blurb: "Who we are, what we stand for, and who we serve.",
    items: [
      {
        q: "What is APEC (the Association of Pakistani Engineers in Canada)?",
        a: "APEC — the Association of Pakistani Engineers in Canada — is a Calgary-based, non-profit professional community of engineers and technically minded professionals. Founded in 2011, APEC connects more than 1,200 members through networking, mentorship, career development, and community events. While our roots are in Calgary's Pakistani engineering community, membership is open to engineers and professionals of every background across Canada.",
        link: { href: "/about", label: "Read our full story" },
      },
      {
        q: "What does APEC stand for?",
        a: "APEC stands for the Association of Pakistani Engineers in Canada. It is a voluntary, non-profit professional organization headquartered in Calgary, Alberta.",
      },
      {
        q: "Where is APEC located?",
        a: "APEC's head office is in Calgary, Alberta, Canada. We serve engineers and professionals across Alberta and the rest of Canada, and we support members who wish to help form local APEC branches in other cities, provinces, and territories.",
      },
      {
        q: "When was APEC founded?",
        a: "APEC was founded in Calgary in 2011 by a group of engineers who understood first-hand how difficult it can be to build a professional career in a new country. They created APEC as a bridge — a place where newcomers could find mentors and established professionals could give back.",
      },
      {
        q: "Do I have to be Pakistani to join APEC?",
        a: "No. Although APEC began within Calgary's Pakistani engineering community, today it is a multicultural organization. We actively welcome engineers and professionals of all ethnicities, nationalities, disciplines, and backgrounds who share our commitment to community, excellence, and mutual support.",
      },
      {
        q: "Is APEC a non-profit organization?",
        a: "Yes. APEC is a non-profit, non-partisan, non-religious, and non-political voluntary professional organization. APEC is not affiliated with or associated with any political party or government body.",
      },
      {
        q: "Who is APEC for?",
        a: "APEC is for practising engineers, engineering students, recent graduates, and newly immigrated engineers, as well as technically minded professionals in related fields. Whether you are establishing your career in Canada, seeking mentorship, or looking to give back, there is a place for you at APEC.",
      },
    ],
  },
  {
    id: "membership",
    title: "Membership",
    blurb: "Who can join, how much it costs, and what you get.",
    items: [
      {
        q: "Who can become a member of APEC?",
        a: "Engineers, engineering students, recent graduates, and technical professionals from any background can become members. We offer Student, Regular, and Life memberships to suit different stages of your career and studies.",
        link: { href: "/membership", label: "Compare membership options" },
      },
      {
        q: "What types of membership does APEC offer?",
        a: "APEC offers three memberships: Student (free, for those enrolled in an undergraduate engineering program in Canada), Regular ($10 per year, for those with at least a Bachelor's degree or equivalent in engineering), and Life ($100 one-time, a lifetime membership with full voting rights forever).",
        link: { href: "/membership", label: "View membership tiers" },
      },
      {
        q: "How much does APEC membership cost?",
        a: "Student membership is free. Regular membership is $10 per year. Life membership is a one-time payment of $100. Any regular member can upgrade to a Life membership with a lump-sum payment.",
      },
      {
        q: "Can engineering students join APEC for free?",
        a: "Yes. Students currently enrolled in an undergraduate engineering program in Canada can join APEC for free. Student members can attend all events, access community resources, and take part in mentorship and career-guidance sessions.",
      },
      {
        q: "What are the benefits of APEC membership?",
        a: "Members gain access to professional networking, mentorship, career-development resources, seminars and workshops, social and community events, participation in the Annual General Meeting (AGM), and — for Regular and Life members — full voting rights within the organization.",
      },
      {
        q: "Do APEC members get voting rights?",
        a: "Yes. Regular and Life members have equal rights and privileges, including the right to vote. Each member is entitled to one vote, which may be cast in person or through a secure online system, and all members may attend general body meetings.",
      },
      {
        q: "How do I become a member of APEC?",
        a: "You can join APEC directly through our Membership page, where you can choose the Student, Regular, or Life option and complete a secure online payment for paid tiers. Membership includes a receipt and immediate access to member benefits.",
        link: { href: "/membership", label: "Join APEC today" },
      },
      {
        q: "How do I renew my APEC membership?",
        a: "Regular memberships renew annually. Life membership is paid once and never needs renewal. Membership fees are non-refundable. If you have questions about your renewal, contact us and we will be glad to help.",
        link: { href: "/contact", label: "Contact us about renewal" },
      },
    ],
  },
  {
    id: "careers",
    title: "Careers, Credentials & Mentorship",
    blurb: "Support for internationally trained engineers, P.Eng guidance, and mentorship.",
    items: [
      {
        q: "Does APEC help internationally trained engineers find work in Canada?",
        a: "Yes. Supporting internationally trained and newly immigrated engineers is at the heart of APEC's mission. More than half of STEM-educated immigrants in Canada work outside their field; APEC helps close that gap through mentorship, networking, career-guidance sessions, and connections to established professionals who have navigated the same journey.",
        link: { href: "/about", label: "Why this matters" },
      },
      {
        q: "Can APEC help me get my P.Eng license in Alberta or Canada?",
        a: "APEC does not issue engineering licenses — in Alberta that is done by the provincial regulator, APEGA (the Association of Professional Engineers and Geoscientists of Alberta). What APEC provides is guidance and mentorship: connecting you with licensed professionals who can help you understand the licensing process, prepare your application, and advance your credentials and career in Canada.",
      },
      {
        q: "Does APEC offer mentorship for engineers?",
        a: "Yes. Mentorship is one of APEC's core programs. Newcomers and students are paired with experienced engineers and professionals for guidance on careers, credentials, workplace culture, and professional growth in Canada.",
      },
      {
        q: "I'm a new immigrant engineer in Calgary — how can APEC help me?",
        a: "APEC was created precisely for this situation. As a new immigrant engineer in Calgary you can access mentorship, professional networking, career-development resources, and a welcoming community of peers who understand the challenges of rebuilding a career in a new country. Joining is affordable, and student membership is free.",
        link: { href: "/membership", label: "Get started" },
      },
      {
        q: "Does APEC support engineering students and recent graduates?",
        a: "Yes. APEC provides career-development support to engineering students, fresh graduates, and newly immigrated engineers — including free student membership, mentorship, career-guidance sessions, and networking with working professionals across many engineering disciplines.",
      },
    ],
  },
  {
    id: "events",
    title: "Events & Networking",
    blurb: "The gatherings that keep our community connected.",
    items: [
      {
        q: "What kind of events does APEC host?",
        a: "APEC hosts a mix of professional and social events, including seminars, technical workshops, career-development sessions, networking mixers, and community socials such as our popular annual summer BBQ. We have delivered 50+ events for the community since 2011.",
        link: { href: "/events", label: "See upcoming events" },
      },
      {
        q: "Can non-members attend APEC events?",
        a: "Many APEC events, including community socials such as the annual BBQ, welcome members and guests alike. Some professional sessions may prioritize members. The best way to never miss an event is to become a member and follow our announcements.",
        link: { href: "/events", label: "Browse events" },
      },
      {
        q: "How do I get tickets to APEC events?",
        a: "Tickets for ticketed events are available directly from the event listing on our Events page. Event links and details are updated as each event is announced, and you can also follow our Facebook and WhatsApp groups for the latest updates.",
        link: { href: "/events", label: "Get tickets" },
      },
    ],
  },
  {
    id: "involved",
    title: "Community & Getting Involved",
    blurb: "Volunteer, mentor, connect, and help APEC grow.",
    items: [
      {
        q: "How can I volunteer or get involved with APEC?",
        a: "APEC is a volunteer-driven organization and there are many ways to contribute — helping organize events, mentoring newcomers, supporting career-development programs, or serving on committees. The easiest first step is to become a member and reach out to our team.",
        link: { href: "/contact", label: "Reach out to volunteer" },
      },
      {
        q: "Is there an APEC branch in cities other than Calgary?",
        a: "APEC's head office is in Calgary, and we have aspirations to expand across provinces and territories as our community grows. One of our stated objectives is to assist engineers in forming local APEC branches. If you would like to help start a branch in your city, we would love to hear from you.",
        link: { href: "/contact", label: "Start a branch" },
      },
      {
        q: "How can I connect with the APEC community online?",
        a: "You can join our active Facebook group and WhatsApp community to stay in touch between events, ask questions, share opportunities, and connect with fellow engineers and professionals across Canada. Links are in the footer of every page.",
      },
      {
        q: "Can I become a mentor with APEC?",
        a: "Absolutely. Experienced engineers and professionals are encouraged to give back by mentoring students and newcomers. Mentoring with APEC is a meaningful way to help the next generation of engineers succeed in Canada while strengthening your own professional network.",
        link: { href: "/contact", label: "Become a mentor" },
      },
    ],
  },
  {
    id: "sponsorship",
    title: "Sponsorship & Contact",
    blurb: "Partner with APEC or get in touch.",
    items: [
      {
        q: "How can my company sponsor APEC?",
        a: "Businesses can partner with APEC through sponsorship tiers ranging from General up to our premier Mega tier, gaining visibility among 1,200+ engineers and technical professionals. Sponsorship benefits include logo placement, event banners, complimentary tickets, social-media features, and verbal recognition at events.",
        link: { href: "/sponsors", label: "Explore sponsorship" },
      },
      {
        q: "How can I contact APEC?",
        a: "You can reach APEC by email at info@apecanada.ca, through the contact form on our website, or via our Facebook and WhatsApp community groups. Our head office is in Calgary, Alberta, Canada.",
        link: { href: "/contact", label: "Contact APEC" },
      },
    ],
  },
];

const allItems = categories.flatMap((c) => c.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about the Association of Pakistani Engineers in Canada — membership, events, mentorship, and how to get involved.
          </p>
        </div>
      </section>

      {/* Intro + category nav */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#4a5a52] leading-relaxed text-center max-w-3xl mx-auto">
            APEC is a Calgary-based, non-profit community of <strong>1,200+ Pakistani and multicultural engineers and professionals</strong> across Canada. Whether you are an internationally trained engineer settling in Alberta, an engineering student, or a company looking to support the community, the answers below will help. Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/contact" className="text-[#4A90D9] hover:underline font-medium">Contact us</Link>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="px-4 py-2 rounded-full bg-[#F2E9D2] text-[#0f1f5c] text-sm font-semibold hover:bg-[#C8A24B] hover:text-white transition-colors"
              >
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-28">
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-0.5 rounded-full bg-[#C8A24B]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#C8A24B]">{cat.title}</span>
                </div>
                <p className="mt-2 text-[#4a5a52]">{cat.blurb}</p>
              </div>

              <div className="space-y-3">
                {cat.items.map((item) => (
                  <details
                    key={item.q}
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 font-semibold text-[#0f1f5c] hover:bg-[#F2E9D2]/40">
                      <span>{item.q}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 flex-shrink-0 text-[#C8A24B] transition-transform group-open:rotate-180"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 -mt-1 text-[#4a5a52] leading-relaxed">
                      <p>{item.a}</p>
                      {item.link && (
                        <Link href={item.link.href} className="inline-block mt-3 text-[#4A90D9] hover:underline font-medium">
                          {item.link.label} →
                        </Link>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F2E9D2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0f1f5c] mb-4">Still have questions?</h2>
          <p className="text-[#4a5a52] mb-6">
            Our team is happy to help you find the right membership, connect with a mentor, or plan your next step with APEC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="inline-flex items-center justify-center px-7 py-3.5 bg-[#C8A24B] text-[#0a1645] font-bold rounded-lg hover:bg-[#d4aa5a] transition-colors">
              Become a Member
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0f1f5c] text-white font-semibold rounded-lg hover:bg-[#0a1645] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
