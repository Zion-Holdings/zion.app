import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/70 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="font-semibold text-white">Zion</span> — Autonomous Cloud Automations
        </div>
        <nav className="flex flex-wrap items-center gap-4">
          <Link href="/explore" className="hover:text-white">Explore</Link>
          <Link href="/automation" className="hover:text-white">Automations</Link>
          <Link href="/reports" className="hover:text-white">Reports</Link>
          <Link href="/newsroom" className="hover:text-white">Updates</Link>
          <Link href="/site-health" className="hover:text-white">Site Health</Link>
          <Link href="/search" className="hover:text-white">Search</Link>
          <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
          <a href="https://github.com/Zion-Holdings/zion.app" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">ziontechgroup.com</a>
        </nav>
      </div>
    </footer>
  );
}
