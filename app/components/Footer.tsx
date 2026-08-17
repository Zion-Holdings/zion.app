// app/components/Footer.tsx
'use client';

import Link from 'next/link';

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Products', href: '/products/' },
  { label: 'Solutions', href: '/solutions/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container-page py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
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
