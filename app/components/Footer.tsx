// app/components/Footer.tsx
'use client';

import Link from 'next/link';

const FOOTER_LINKS = [
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Status', href: '/status/' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container-page py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
        </p>
        <nav className="flex items-center gap-6 text-sm text-slate-300">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-purple-400 transition">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
