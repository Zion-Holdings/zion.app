'use client';

import Link from 'next/link';
import { CATEGORIES } from '../constants/categories';

const TOP = CATEGORIES.slice(0, 10);

// Industry quick links for the homepage
const INDUSTRY_LINKS = [
  { key: 'healthcare', label: 'Healthcare', emoji: '🏥', href: '/services/?category=ai&industry=healthcare-it' },
  { key: 'finance', label: 'Finance', emoji: '💳', href: '/services/?category=ai&industry=financial-services' },
  { key: 'retail', label: 'Retail', emoji: '🛒', href: '/services/?category=ai&industry=retail' },
  { key: 'manufacturing', label: 'Manufacturing', emoji: '🏭', href: '/services/?category=ai&industry=manufacturing' },
  { key: 'technology', label: 'Technology', emoji: '💻', href: '/services/?category=it' },
  { key: 'energy', label: 'Energy', emoji: '⚡', href: '/services/?category=ai&industry=energy' },
];

export default function NavigationQuickLinks() {
  return (
    <section className="py-10 border-t border-slate-800/60">
      <div className="container-page">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xl">🗂️</span>
          <h2 className="text-xl font-bold text-white">Top Categories</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {TOP.map((cat) => (
            <Link
              key={cat.key}
              href={`/services/?category=${cat.key}`}
              className="px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-200 hover:text-white hover:border-purple-500/40 transition-colors"
            >
              <span className="mr-1 opacity-70">{cat.emoji}</span>
              {cat.label}
            </Link>
          ))}
          <Link
            href="/services"
            className="px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-500 transition-colors"
          >
            All services
          </Link>
        </div>
        
        {/* Industry Quick Links */}
        <div className="mt-6 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xl">🏭</span>
            <h3 className="text-lg font-bold text-white">By Industry</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {INDUSTRY_LINKS.map((ind) => (
              <Link
                key={ind.key}
                href={ind.href}
                className="px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-200 hover:text-white hover:border-purple-500/40 transition-colors text-xs"
              >
                <span className="mr-1">{ind.emoji}</span>
                {ind.label}
              </Link>
            ))}
            <Link
              href="/industries"
              className="px-3 py-1.5 rounded-lg bg-purple-600 text-white hover:bg-purple-500 transition-colors text-xs font-medium"
            >
              View all industries →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}