import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1B3A6B] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/apec-logo.png" alt="APEC Logo" width={48} height={48} className="rounded-full" />
              <div>
                <p className="text-white font-bold text-lg">APEC Canada</p>
                <p className="text-[#C9A227] text-xs">Association of Pakistani Engineers in Canada</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              A non-profit professional community welcoming engineers and professionals from all backgrounds to connect, grow, and contribute to Canada.
            </p>
            <p className="mt-3 text-xs text-gray-400 italic">
              APEC is not affiliated with or associated with any political party or government.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/groups/781259795220477/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A227] hover:text-yellow-300 transition-colors text-sm font-medium"
              >
                Facebook Group →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About APEC", href: "/about" },
                { label: "Events", href: "/events" },
                { label: "Membership", href: "/membership" },
                { label: "Executive Team", href: "/team" },
                { label: "Sponsors", href: "/sponsors" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#C9A227] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Calgary, Alberta, Canada</li>
              <li>
                <a href="mailto:info@apecanada.ca" className="hover:text-[#C9A227] transition-colors">
                  info@apecanada.ca
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#C9A227] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#C9A227] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Association of Pakistani Engineers in Canada (APEC). All rights reserved.
          <br className="sm:hidden" />
          <span className="sm:ml-2">Head Office: Calgary, Alberta, Canada</span>
        </div>
      </div>
    </footer>
  );
}
