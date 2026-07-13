import Link from 'next/link';

export const metadata = {
  title: 'Industries',
  description: 'Zion Tech Group provides AI and IT solutions across 25+ industries including healthcare, finance, manufacturing, retail, government, and more.',
};

export default function IndustriesPage() {
  const industries = [
    { emoji: '🏥', name: 'Healthcare & Life Sciences', href: '/solutions/healthcare', services: 120, desc: 'AI diagnostics, EHR integration, telemedicine, drug discovery.' },
    { emoji: '💳', name: 'Financial Services & FinTech', href: '/solutions/financial-services', services: 145, desc: 'Fraud detection, algorithmic trading, regulatory compliance, digital banking.' },
    { emoji: '🏭', name: 'Manufacturing & Industrial', href: '/solutions/manufacturing-industrial', services: 95, desc: 'Digital twins, predictive maintenance, supply chain optimization.' },
    { emoji: '🛒', name: 'Retail & E-Commerce', href: '/solutions/ecommerce-retail', services: 110, desc: 'Personalization, inventory management, dynamic pricing, omnichannel.' },
    { emoji: '💻', name: 'Technology & SaaS', href: '/solutions/technology-and-saas', services: 200, desc: 'DevOps, cloud migration, cybersecurity, AI/ML platforms.' },
    { emoji: '🚚', name: 'Logistics & Supply Chain', href: '/solutions/logistics-supply-chain', services: 85, desc: 'Route optimization, warehouse automation, fleet management, last-mile delivery.' },
    { emoji: '🏛️', name: 'Government & Public Sector', href: '/solutions/government-and-public-sector', services: 65, desc: 'Digital services, citizen engagement, data analytics, security.' },
    { emoji: '🛡️', name: 'Insurance', href: '/solutions/insurance', services: 70, desc: 'Claims automation, underwriting AI, risk assessment, fraud prevention.' },
    { emoji: '🎓', name: 'Education & EdTech', href: '/solutions/education-training', services: 55, desc: 'Adaptive learning, LMS platforms, student analytics, content generation.' },
    { emoji: '⚡', name: 'Energy & Utilities', href: '/solutions/energy-utilities', services: 45, desc: 'Grid optimization, demand forecasting, renewable integration, IoT monitoring.' },
    { emoji: '🏗️', name: 'Construction & Engineering', href: '/solutions/construction-engineering', services: 35, desc: 'Project management, BIM, safety monitoring, resource planning.' },
    { emoji: '🎬', name: 'Media & Entertainment', href: '/solutions/media-entertainment', services: 50, desc: 'Content generation, recommendation engines, streaming optimization.' },
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
