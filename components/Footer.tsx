import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/70 grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <div className="text-lg font-semibold text-white">Zion</div>
          <p className="text-white/70">Autonomous Cloud Automations</p>
          <p className="text-white/50">Continuous, safe improvements delivered to main.</p>
        </div>
        <nav className="grid grid-cols-2 gap-3">
          <Link href="/explore" className="hover:text-white">Explore</Link>
          <Link href="/automation" className="hover:text-white">Automations</Link>
          <Link href="/reports" className="hover:text-white">Reports</Link>
          <Link href="/newsroom" className="hover:text-white">Updates</Link>
          <Link href="/site-health" className="hover:text-white">Site Health</Link>
          <Link href="/search" className="hover:text-white">Search</Link>
          <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
        </nav>
        <div className="flex items-start gap-4 md:justify-end">
          <a href="https://github.com/Zion-Holdings/zion" target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">GitHub</a>
          <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">Website</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-white/50 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Zion. All rights reserved.</span>
          <span className="hidden sm:inline">Built with Next.js & Netlify • Tailwind UI</span>
        </div>
      </div>
    </footer>
  );
}
