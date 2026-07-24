'use client';

import Link from 'next/link';

/* ─── Data ──────────────────────────────────────────────────────────── */
const INDUSTRIES = [
  {
    key: 'technology-&-saas',
    label: 'Technology & SaaS',
    href: '/services?industry=technology-&-saas',
    emoji: '🏭',
  },
  { key: 'healthcare', label: 'Healthcare', href: '/services?industry=healthcare', emoji: '🏥' },
  { key: 'financial-services', label: 'Financial Services', href: '/services?industry=financial-services', emoji: '💳' },
  { key: 'retail', label: 'Retail & E-commerce', href: '/services?industry=retail', emoji: '🛒' },
  { key: 'manufacturing', label: 'Manufacturing', href: '/services?industry=manufacturing', emoji: '🏗️' },
  { key: 'logistics', label: 'Logistics', href: '/services?industry=logistics', emoji: '🚚' },
];

const USE_CASES = [
  {
    label: 'Cost Optimization',
    href: '/services?useCase=cost-optimization',
    emoji: '💰',
  },
  {
    label: 'Automation',
    href: '/services?useCase=automation',
    emoji: '🤖',
  },
  {
    label: 'Security Hardening',
    href: '/services?useCase=security',
    emoji: '🔐',
  },
  {
    label: 'Analytics',
    href: '/services?useCase=analytics',
    emoji: '📊',
  },
  {
    label: 'Compliance',
    href: '/services?useCase=compliance',
    emoji: '✅',
  },
  {
    label: 'Customer Experience',
    href: '/services?useCase=customer-experience',
    emoji: '🎯',
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */
export default function NavigationQuickLinks() {
  return (
    <section
      className="py-16"
      aria-labelledby="quick-links-heading"
    >
      <div className="container-page">
        <div className="text-center mb-8">
          <h2
            id="quick-links-heading"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            Start With Your Goal
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
            Explore curated pathways by industry or use case — the fastest route
            from requirement to a tailored implementation plan.
          </p>
        </div>

        {/* Industries */}
        <div className="mb-10">
          <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
            By Industry
          </h3>
          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map(item => (
              <Link
                key={item.key}
                href={item.href}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/70 border border-slate-700/60 text-slate-200 hover:border-purple-500/40 hover:text-white transition-all"
              >
                <span aria-hidden="true" className="text-base">{item.emoji}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
            By Use Case
          </h3>
          <div className="flex flex-wrap gap-2">
            {USE_CASES.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/70 border border-slate-700/60 text-slate-200 hover:border-purple-500/40 hover:text-white transition-all"
              >
                <span aria-hidden="true" className="text-base">{item.emoji}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
