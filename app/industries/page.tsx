'use client';

import Link from 'next/link';

const INDUSTRIES = [
  { key: 'technology-&-saas', label: 'Technology & SaaS', emoji: '🏭', count: 145, sample: 'AI Analytics & BI' },
  { key: 'media-&-entertainment', label: 'Media & Entertainment', emoji: '🎬', count: 95, sample: 'AI Knowledge Management' },
  { key: 'legal-&-compliance', label: 'Legal & Compliance', emoji: '⚖️', count: 77, sample: 'Contract Lifecycle Intelligence' },
  { key: 'energy-&-utilities', label: 'Energy & Utilities', emoji: '⚡', count: 69, sample: 'Grid Demand Forecaster' },
  { key: 'retail-&-e-commerce', label: 'Retail & E-Commerce', emoji: '🛒', count: 57, sample: 'Product Recommendations' },
  { key: 'logistics-&-supply-chain', label: 'Logistics & Supply Chain', emoji: '🚚', count: 57, sample: 'Sustainable Supply Chain Radar' },
  { key: 'manufacturing-&-industrial', label: 'Manufacturing & Industrial', emoji: '🏗️', count: 25, sample: 'Vision Quality Inspection' },
  { key: 'financial-services-&-fintech', label: 'Financial Services & FinTech', emoji: '💳', count: 23, sample: 'Commerce Flow Orchestrator' },
  { key: 'education-&-research', label: 'Education & Research', emoji: '🎓', count: 15, sample: 'Learning Optimisation' },
  { key: 'healthcare-&-life-sciences', label: 'Healthcare & Life Sciences', emoji: '🏥', count: 12, sample: 'AI Drug Discovery' },
];

export const metadata = {
  title: 'Industries We Serve | Zion Tech Group',
  description: 'Explore AI & IT services by industry — from healthcare and fintech to manufacturing and retail.',
  alternates: { canonical: '/industries/' }
};

export default function IndustriesHub() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Industries We Serve</h1>
          <p className="text-slate-300 mb-10 max-w-2xl">
            Choose your industry to see curated AI, IT, cloud, security, and automation recommendations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.key}
                href={`/industries/${ind.key}`}
                className="group block rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 hover:border-purple-500/30 p-5 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{ind.emoji}</span>
                  <span className="text-xs text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded-full">{ind.count}+</span>
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors mb-1">{ind.label}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{ind.sample}</p>
              </Link>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-3">Browse all services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/services" className="glass-card p-5 hover:border-purple-500/40">
                <div className="text-white font-semibold">Complete service catalog</div>
                <div className="text-slate-400 text-sm mt-1">All categories and services</div>
              </Link>
              <Link href="/ai-services" className="glass-card p-5 hover:border-purple-500/40">
                <div className="text-white font-semibold">AI services</div>
                <div className="text-slate-400 text-sm mt-1">Machine learning and applied AI</div>
              </Link>
              <Link href="/configurator" className="glass-card p-5 hover:border-purple-500/40">
                <div className="text-white font-semibold">Custom proposal</div>
                <div className="text-slate-400 text-sm mt-1">Tailored recommendations</div>
              </Link>
            </div>
          </section>

          <section className="cta-section text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Not sure where to start?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Start with a free AI readiness assessment or book a short consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configurator" className="btn-primary text-lg px-10 py-4">Get Your Custom Proposal →</Link>
              <a href="tel:+130****0950" className="btn-secondary text-lg px-10 py-4">☎ +1 302 464 0950</a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
