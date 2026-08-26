'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlVisibility = () => {
      const currentScrollY = window.scrollY;
      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlVisibility);
    return () => window.removeEventListener('scroll', controlVisibility);
  }, [lastScrollY]);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-slate-900/95 backdrop-blur-xl border-t border-purple-500/30 p-4 shadow-2xl">
        <div className="flex gap-3">
          <Link
            href="/configurator/"
            className="flex-1 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
          >
            ⚡ Get Custom Proposal
          </Link>
          <a
            href="tel:+13024640950"
            className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold text-sm hover:bg-slate-700 transition-all"
          >
            ☎ Call
          </a>
        </div>
      </div>
    </div>
  );
}