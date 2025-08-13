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
