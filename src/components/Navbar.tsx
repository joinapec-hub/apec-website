"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Membership", href: "/membership" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-[#0f1f5c] transition-shadow ${scrolled ? "shadow-xl" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[96px]">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/apec-logo.png"
              alt="APEC Logo"
              width={64}
              height={64}
              className="rounded-full ring-2 ring-[#C8A24B]/40 shadow-md"
              priority
            />
            <div className="leading-tight">
              <span className="block text-white font-bold text-2xl tracking-wide">
                APEC
              </span>
              <span className="block text-[#C8A24B] text-sm hidden sm:block max-w-[220px] leading-tight">
                Association of Pakistani Engineers in Canada
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-1.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  pathname === link.href
                    ? "bg-[#C8A24B] text-[#0f1f5c]"
                    : "text-gray-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/membership"
              className="ml-2 px-4 py-2 bg-[#C8A24B] text-[#0f1f5c] font-bold rounded-md text-sm hover:bg-[#d4aa5a] transition-colors whitespace-nowrap"
            >
              Join Now
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-[#0a1645] border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 mt-1 rounded-md text-sm font-medium ${
                pathname === link.href
                  ? "bg-[#C8A24B] text-[#0f1f5c]"
                  : "text-gray-200 hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/membership"
            onClick={() => setOpen(false)}
            className="block mt-3 px-4 py-2 bg-[#C8A24B] text-[#0f1f5c] font-bold rounded-md text-sm text-center"
          >
            Join Now
          </Link>
        </div>
      )}
    </header>
  );
}
