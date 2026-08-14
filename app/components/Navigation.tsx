'use client';

import Link from 'next/link';
import { useState } from 'react';

const EMAIL = 'kleber@ziontechgroup.com';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="text-white font-bold text-xl">Zion Tech Group</Link>
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">Menu</button>
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <Link href="/ai/" className="hover:text-purple-400 transition">AI Lab</Link>
          <Link href="/services/" className="hover:text-purple-400 transition">Services</Link>
          <Link href="/solutions/" className="hover:text-purple-400 transition">Solutions</Link>
          <Link href="/about/" className="hover:text-purple-400 transition">About</Link>
          <Link href="/blog/" className="hover:text-purple-400 transition">Blog</Link>
          <Link href="/pricing/" className="hover:text-purple-400 transition">Pricing</Link>
          <Link href="/tools/" className="hover:text-purple-400 transition">Tools</Link>
          <Link href="/contact/" className="hover:text-purple-400 transition">Contact</Link>
          <a href={`mailto:${EMAIL}`} className="hover:text-pink-400 transition">Email</a>
        </nav>
      </div>
    </header>
  );
}
