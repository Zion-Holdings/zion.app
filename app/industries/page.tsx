import Link from 'next/link';

export const metadata = {
  title: 'Industries',
  description: 'Zion Tech Group provides AI and IT solutions across 25+ industries including healthcare, finance, manufacturing, retail, government, and more.',
};

export default function IndustriesPage() {
  const industries = [
    { emoji: '🏥', name: 'Healthcare & Life Sciences', href: '/industries/healthcare', services: 120, desc: 'AI diagnostics, EHR integration, telemedicine, and patient experience automation.' },
    { emoji: '💳', name: 'Financial Services & FinTech', href: '/case-studies/financial-fraud-detection', services: 145, desc: 'RegTech, fraud detection, trading bots, and compliance automation.' },
    { emoji: '🏭', name: 'Manufacturing & Industrial', href: '/services?category=automation', services: 95, desc: 'Predictive maintenance, supply chain optimization, and quality inspection AI.' },
    { emoji: '🛒', name: 'Retail & E-Commerce', href: '/case-studies/retail-personalization-engine', services: 110, desc: 'Recommendation engines, inventory AI, dynamic pricing, and omnichannel support.' },
    { emoji: '💻', name: 'Technology & SaaS', href: '/services?category=it', services: 200, desc: 'DevOps, cloud migration, cybersecurity, and platform engineering.' },
    { emoji: '🚚', name: 'Logistics & Supply Chain', href: '/case-studies/ai-revenue-operations-transformation', services: 85, desc: 'Route optimization, warehouse automation, fleet management, and last-mile delivery.' },
    { emoji: '🏛️', name: 'Government & Public Sector', href: '/services', services: 65, desc: 'Citizen services, compliance automation, civic AI, and policy workflow.' },
    { emoji: '🛡️', name: 'Insurance', href: '/case-studies/financial-risk-management', services: 70, desc: 'Claims automation, underwriting AI, risk assessment, and policy analytics.' },
    { emoji: '🎓', name: 'Education & EdTech', href: '/services?category=ai', services: 55, desc: 'Adaptive learning, LMS automation, student analytics, and content generation.' },
    { emoji: '⚡', name: 'Energy & Utilities', href: '/case-studies/energy-optimization', services: 45, desc: 'Grid optimization, demand forecasting, renewable integration, and asset monitoring.' },
    { emoji: '🏗️', name: 'Construction & Engineering', href: '/case-studies/manufacturing-predictive-maintenance', services: 35, desc: 'Project controls, BIM automation, safety analytics, and field coordination.' },
    { emoji: '🎬', name: 'Media & Entertainment', href: '/case-studies/cybersecurity-threat-hunting', services: 50, desc: 'Content generation, recommendation engines, streaming optimization, and audience analytics.' },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Industries</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Solutions Across<br /><span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Every Industry</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            764+ AI and IT services tailored to 25+ industries. No matter your sector, we have the expertise to transform your business.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Link key={i} href={ind.href} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
                <span className="text-3xl">{ind.emoji}</span>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">{ind.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{ind.desc}</p>
                <p className="mt-3 text-xs text-purple-400">{ind.services} services →</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg">
              Explore All 764+ Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
