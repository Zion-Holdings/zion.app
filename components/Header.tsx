import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: '/landing', label: 'Landing' },
    { href: '/explore', label: 'Explore' },
    { href: '/services', label: 'Services' },
    { href: '/automation', label: 'Automations' },
    { href: '/reports', label: 'Reports' },
    { href: '/newsroom', label: 'Updates' },
    { href: '/search', label: 'Search' },
  ];

  return (
    <header className="sticky top-0 z-50">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 rounded bg-white px-3 py-2 text-slate-900">Skip to content</a>
      <div className="backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
              </Link>
              <span className="hidden text-xs text-white/60 sm:inline">Autonomous Cloud Automations</span>
            </div>

            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
              <Link href="/main/front#features" className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-1.5 text-sm font-semibold shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_28px_rgba(34,211,238,0.6)] transition-shadow">
                Get Started
              </Link>
            </div>

            <button
              aria-label="Toggle navigation menu"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/10 text-white/90 hover:bg-white/15"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {mobileOpen && (
          <div id="mobile-nav" className="md:hidden border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-3 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-white/90 hover:bg-white/10">
                  {item.label}
                </Link>
              ))}
              <Link href="/main/front#features" className="rounded-md bg-white/90 px-3 py-2 text-center font-semibold text-slate-900 hover:bg-white">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


