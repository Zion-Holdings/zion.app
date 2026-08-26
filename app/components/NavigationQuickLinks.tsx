'use client';

import Link from 'next/link';
import { CATEGORIES } from '../constants/categories';

const TOP = CATEGORIES.slice(0, 10);

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
      </div>
    </section>
  );
}
