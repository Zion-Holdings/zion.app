import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/70 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="font-semibold text-white">Zion</span> — Autonomous Cloud Automations
        </div>
        <nav className="flex flex-wrap items-center gap-4">
          <Link href="/automation"><a className="hover:text-white">Automations</a></Link>
          <Link href="/site-health"><a className="hover:text-white">Site Health</a></Link>
          <Link href="/newsroom"><a className="hover:text-white">Newsroom</a></Link>
          <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">ziontechgroup.com</a>
        </nav>
      </div>
    </footer>
  );
}

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-gray-200 bg-white text-gray-700">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm">© {currentYear} Zion Tech Group. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <a className="hover:underline" href="/">Home</a>
            <a className="hover:underline" href="/newsroom">Newsroom</a>
            <a className="hover:underline" href="/site-health">Site Health</a>
            <a className="hover:underline" href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer">ziontechgroup.com</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
