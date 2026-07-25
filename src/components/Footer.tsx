import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#071f15] text-gray-300 border-t-4 border-[#C8A24B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/apec-logo.png" alt="APEC Logo" width={48} height={48} className="rounded-full" />
              <div>
                <p className="text-white font-bold text-lg">APEC</p>
                <p className="text-[#C8A24B] text-xs">Association of Pakistani Engineers in Canada</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              A non-profit professional community welcoming engineers and professionals from all backgrounds to connect, grow, and contribute to Canada.
            </p>
            <p className="mt-3 text-xs text-gray-400 italic">
              APEC is not affiliated with or associated with any political party or government.
            </p>
            {/* Follow us on social media */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.facebook.com/share/1BQ9gMnjL9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow APEC on Facebook"
                title="Follow us on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] text-[#C8A24B] hover:text-white flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/apecanada.ca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow APEC on Instagram"
                title="Follow us on Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E1306C] text-[#C8A24B] hover:text-white flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <span className="w-px h-5 bg-white/15" aria-hidden="true" />
              <a
                href="https://www.facebook.com/groups/781259795220477/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A24B] hover:text-[#d4aa5a] transition-colors text-sm font-medium"
              >
                Facebook Group →
              </a>
              <a
                href="https://chat.whatsapp.com/Ju7iSnLwYniA8dTZnKbrIJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A24B] hover:text-[#d4aa5a] transition-colors text-sm font-medium"
              >
                WhatsApp Group →
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
                { label: "Gallery", href: "/gallery" },
                { label: "Sponsors", href: "/sponsors" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#C8A24B] transition-colors">
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
                <a href="mailto:info@apecanada.ca" className="hover:text-[#C8A24B] transition-colors break-words">
                  info@apecanada.ca
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#C8A24B] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#C8A24B] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#C8A24B]/20 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Association of Pakistani Engineers in Canada (APEC). All rights reserved.
          <br className="sm:hidden" />
          <span className="sm:ml-2">Head Office: Calgary, Alberta, Canada</span>
        </div>
      </div>
    </footer>
  );
}
