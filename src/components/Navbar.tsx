"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Membership", href: "/membership" },
  { label: "Team", href: "/team" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#1B3A6B] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/apec-logo.png"
              alt="APEC Canada Logo"
              width={44}
              height={44}
              className="rounded-full"
              priority
            />
            <div className="leading-tight">
              <span className="block text-white font-bold text-sm sm:text-base tracking-wide">
                APEC Canada
              </span>
              <span className="block text-[#C9A227] text-xs hidden sm:block">
                Association of Pakistani Engineers in Canada
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[#C9A227] text-[#1B3A6B]"
                    : "text-gray-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/membership"
              className="ml-3 px-4 py-2 bg-[#C9A227] text-[#1B3A6B] font-bold rounded-md text-sm hover:bg-yellow-400 transition-colors"
            >
              Join Now
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
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
        <div className="md:hidden bg-[#152e56] border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 mt-1 rounded-md text-sm font-medium ${
                pathname === link.href
                  ? "bg-[#C9A227] text-[#1B3A6B]"
                  : "text-gray-200 hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/membership"
            onClick={() => setOpen(false)}
            className="block mt-3 px-4 py-2 bg-[#C9A227] text-[#1B3A6B] font-bold rounded-md text-sm text-center"
          >
            Join Now
          </Link>
        </div>
      )}
    </header>
  );
}
