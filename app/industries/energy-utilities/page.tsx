import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Energy & Utilities | Zion Tech Group',
  description: 'AI-powered grid optimization, demand forecasting, renewable energy management, and utility automation for sustainable energy solutions.',
  keywords: 'energy AI, utility AI, grid optimization, renewable energy AI, demand forecasting, smart grid, energy management',
  alternates: { canonical: '/industries/energy-utilities' },
};

const SERVICES = [
  {
    title: 'AI Grid Demand Forecaster',
    slug: '/services/ai-grid-demand-forecasting',
    description: 'Predict energy demand with 95% accuracy using weather patterns, historical data, and market trends. Optimize grid capacity and prevent blackouts with AI-powered forecasting.',
    icon: '⚡',
    category: 'ai',
    ROI: '95% forecast accuracy'
  },
  {
    title: 'Renewable Energy Optimization AI',
    slug: '/services/renewable-energy-optimization',
    description: 'Maximize output from solar, wind, and hydroelectric sources with AI-driven scheduling and storage optimization. Increase renewable energy yield by up to 35%.',
    icon: '☀️',
    category: 'ai',
    ROI: '35% yield increase'
  },
  {
    title: 'Smart Grid Management Platform',
    slug: '/services/smart-grid-management',
    description: 'Real-time grid monitoring, automated load balancing, and outage prediction. Improve grid reliability and reduce maintenance costs by 40% with AI intelligence.',
    icon: '🌐',
    category: 'ai',
    ROI: '40% maintenance reduction'
  },
  {
    title: 'Energy Storage Optimization AI',
    slug: '/services/energy-storage-optimization',
    description: 'Intelligent battery management, charge/discharge scheduling, and lifecycle prediction. Extend battery life by 50% and optimize energy arbitrage with AI algorithms.',
    icon: '🔋',
    category: 'ai',
    ROI: '50% battery life extension'
  },
  {
    title: 'Predictive Maintenance for Power Infrastructure',
    slug: '/services/power-infrastructure-maintenance',
    description: 'AI predicts transformer, substation, and transmission line failures before they occur. Reduce unplanned outages by 60% and emergency repairs by 45%.',
    icon: '🔧',
    category: 'ai',
    ROI: '60% outage reduction'
  },
  {
    title: 'Carbon Footprint & Sustainability Analytics',
    slug: '/services/carbon-footprint-analytics',
    description: 'Track and optimize carbon emissions across energy operations. Achieve sustainability goals faster with AI-powered emission reduction strategies.',
    icon: '🌱',
    category: 'data',
    ROI: '30% emission reduction'
  },
];

export default function EnergyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-sm mb-6">
              <span className="text-green-400">●</span> CLEAN ENERGY AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Energy & Utilities AI
              </span>{' '}
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI-powered grid optimization, renewable energy management, demand forecasting, 
              and utility automation for sustainable and reliable energy solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact" className="btn-primary text-lg px-10 py-4">
                ⚡ Get Energy Assessment →
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-10 py-4">
                🛠️ Browse Energy Services
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-emerald-400 mb-1">95%</div>
                <div className="text-sm text-slate-400">Forecast Accuracy</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-amber-400 mb-1">35%</div>
                <div className="text-sm text-slate-400">Renewable Yield</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-rose-400 mb-1">60%</div>
                <div className="text-sm text-slate-400">Outage Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Solutions */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI-Powered Energy Solutions
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Optimize grid operations, maximize renewable energy output, 
              and ensure reliable power delivery with AI-driven utility solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={service.slug}
                className="group bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/40 transition-all"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{service.description}</p>
                <div className="text-xs text-emerald-400 font-medium">{service.ROI}</div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-500 hover:to-teal-500 transition-all"
            >
              View All Energy Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
                Clean Energy Transformation
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Accelerate your transition to sustainable energy with AI-powered optimization, 
              grid modernization, and carbon reduction strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-3">🌞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Solar Optimization</h3>
              <p className="text-slate-400 text-sm">Maximize solar farm efficiency with AI algorithms</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-3">💨</div>
              <h3 className="text-lg font-semibold text-white mb-2">Wind Farm Analytics</h3>
              <p className="text-slate-400 text-sm">Optimize turbine performance and predict maintenance needs</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-3">🔋</div>
              <h3 className="text-lg font-semibold text-white mb-2">Energy Storage</h3>
              <p className="text-slate-400 text-sm">Smart battery management for grid-scale storage</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/configurator"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all"
            >
              ⚡ Get Sustainability Roadmap →
            </Link>
            <p className="text-slate-500 text-xs mt-2">Free clean energy assessment</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Power the Future with AI
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a free AI-powered energy assessment and optimization roadmap. 
            Our autonomous AI agents analyze your energy systems and recommend improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+130****0950" className="btn-primary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}