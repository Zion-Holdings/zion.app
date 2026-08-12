'use client';

import Link from 'next/link';
import { useState } from 'react';

const EMAIL = 'kleber@ziontechgroup.com';

const NAV_LINKS = [
  { href: '/services/', label: 'Services' },
  { href: '/ai/', label: 'AI Solutions' },
  { href: '/products/', label: 'AI Products' },
  { href: '/tools/', label: 'Free Tools' },
  { href: '/solutions/', label: 'Solutions' },
  { href: '/about/', label: 'About' },
  { href: '/case-studies/', label: 'Case Studies' },
  { href: '/blog/', label: 'Blog' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/contact/', label: 'Contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="text-white font-bold text-xl">Zion Tech Group</Link>
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          Menu
        </button>
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-purple-400 transition"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${EMAIL}`}
            className="hover:text-pink-400 transition"
          >
            Email
          </a>
        </nav>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 ${
          mobileOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col gap-2 px-4 text-sm text-slate-300">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 hover:text-purple-400 transition"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${EMAIL}`}
            className="py-3 hover:text-pink-400 transition"
            onClick={() => setMobileOpen(false)}
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}
