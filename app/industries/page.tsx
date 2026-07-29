'use client';

import Link from 'next/link';
import industries from '@/app/data/industries';

const tiles = [
  { key: 'healthcare', label: 'Healthcare & Life Sciences', emoji: '🏥', href: '/industries/healthcare/' },
  { key: 'financial', label: 'Financial Services & FinTech', emoji: '💳', href: '/industries/financial-services/' },
  { key: 'manufacturing', label: 'Manufacturing & Industrial', emoji: '🏗️', href: '/industries/manufacturing/' },
  { key: 'retail', label: 'Retail & E-Commerce', emoji: '🛒', href: '/industries/retail/' },
  { key: 'education', label: 'Education & Research', emoji: '🎓', href: '/industries/education/' },
  { key: 'legal', label: 'Legal & Compliance', emoji: '⚖️', href: '/ai-consulting/' },
  { key: 'energy', label: 'Energy & Utilities', emoji: '⚡', href: '/ai-consulting/' },
  { key: 'logistics', label: 'Logistics & Supply Chain', emoji: '🚚', href: '/ai-consulting/' },
  { key: 'technology', label: 'Technology & SaaS', emoji: '🏭', href: '/ai-consulting/' },
];

export default function IndustriesPage() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Industries We Serve</h1>
      <p className="text-xl text-slate-300 mb-10 max-w-3xl">
        AI & IT solutions across 9 industries—healthcare, finance, manufacturing, retail, education, legal, energy, logistics, and technology.
      </p>
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-14">
        {tiles.map(item => (
          <Link key={item.key} href={item.href} className="card group">
            <div className="text-3xl mb-3">{item.emoji}</div>
            <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">{item.label}</h3>
            <p className="text-sm text-slate-400 mt-2">AI, automation, cloud, security, and data solutions.</p>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Link className="btn-primary" href="/request-proposal/">Request a proposal</Link>
        <Link className="btn-secondary ml-4" href="/services/">View all services</Link>
      </div>
    </main>
  );
}
