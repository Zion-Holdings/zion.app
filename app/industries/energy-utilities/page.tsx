<<<<<<< HEAD
=======

>>>>>>> d2b89cec39a2d0e2724bc7e817985633189a41c1
import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Energy & Utilities | Zion Tech Group',
<<<<<<< HEAD
  description: 'AI-powered grid optimization, demand forecasting, renewable energy management, and utility automation for sustainable energy solutions.',
  keywords: 'energy AI, utility AI, grid optimization, renewable energy AI, demand forecasting, smart grid, energy management',
=======
  description: 'AI grid optimization, demand forecasting, renewable energy management, and utility automation for energy companies and utilities.',
  keywords: 'energy AI, utility AI, grid optimization, demand forecasting, renewable energy AI, energy management',
>>>>>>> d2b89cec39a2d0e2724bc7e817985633189a41c1
  alternates: { canonical: '/industries/energy-utilities' },
};

const SERVICES = [
  {
<<<<<<< HEAD
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
=======
    title: 'Grid Demand Forecaster',
    slug: '/services/grid-demand-forecaster',
    description: 'AI-powered electricity demand forecasting with weather integration and load pattern analysis. Optimize grid operations and reduce waste by 15%.',
    icon: '⚡',
    category: 'ai',
    ROI: '15% waste reduction'
  },
  {
    title: 'Renewable Energy AI Platform',
    slug: '/services/renewable-energy-ai',
    description: 'AI optimization for solar, wind, and hydroelectric power generation. Predictive maintenance and output forecasting for maximum efficiency.',
    icon: '☀️',
    category: 'ai',
    ROI: '20% efficiency gain'
  },
  {
    title: 'Smart Grid Management AI',
    slug: '/services/smart-grid-management',
    description: 'AI-driven smart grid operations with real-time monitoring, outage prediction, and automated fault detection. Improve reliability and response time.',
    icon: '⚙️',
    category: 'iot',
    ROI: '99% uptime'
>>>>>>> d2b89cec39a2d0e2724bc7e817985633189a41c1
  },
  {
    title: 'Energy Storage Optimization AI',
    slug: '/services/energy-storage-optimization',
<<<<<<< HEAD
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
=======
    description: 'AI-powered battery storage management, charge/discharge optimization, and lifecycle prediction. Maximize storage efficiency and ROI.',
    icon: '🔋',
    category: 'ai',
    ROI: '25% efficiency gain'
  },
  {
    title: 'Energy Trading AI',
    slug: '/services/energy-trading-ai',
    description: 'AI-driven energy trading with price prediction, risk management, and automated trading strategies. Optimize energy portfolio performance.',
    icon: '📈',
    category: 'ai',
    ROI: 'Optimized trading'
  },
  {
    title: 'Utility Customer Experience AI',
    slug: '/services/utility-customer-experience',
    description: 'AI-powered customer service, outage communication, and energy usage insights for utility companies. Reduce calls and improve satisfaction.',
    icon: '📞',
    category: 'ai',
    ROI: '40% satisfaction boost'
  },
];

export default function EnergyUtilitiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
>>>>>>> d2b89cec39a2d0e2724bc7e817985633189a41c1
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
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
=======
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/30 border border-green-500/30 text-green-300 text-sm mb-6">
              <span className="text-green-400">●</span> AI-ENERGIZED UTILITIES
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                Energy & Utilities
              </span>{' '}
              <span className="text-white">AI Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI grid optimization, demand forecasting, renewable energy management, and utility automation 
              for energy companies. Drive efficiency and sustainability with intelligent energy solutions.
>>>>>>> d2b89cec39a2d0e2724bc7e817985633189a41c1
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
<<<<<<< HEAD
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
=======
                <div className="text-2xl font-bold text-emerald-400 mb-1">15%</div>
                <div className="text-sm text-slate-400">Waste Reduction</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-green-400 mb-1">20%</div>
                <div className="text-sm text-slate-400">Efficiency Gain</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-cyan-400 mb-1">99%</div>
                <div className="text-sm text-slate-400">Grid Uptime</div>
>>>>>>> d2b89cec39a2d0e2724bc7e817985633189a41c1
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Energy Solutions */}
=======
>>>>>>> d2b89cec39a2d0e2724bc7e817985633189a41c1
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
<<<<<<< HEAD
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
=======
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
>>>>>>> d2b89cec39a2d0e2724bc7e817985633189a41c1
                AI-Powered Energy Solutions
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
<<<<<<< HEAD
              Optimize grid operations, maximize renewable energy output, 
              and ensure reliable power delivery with AI-driven utility solutions.
=======
              Optimize grid operations, forecast demand, and manage renewable energy with AI agents 24/7.
>>>>>>> d2b89cec39a2d0e2724bc7e817985633189a41c1
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={service.slug}
<<<<<<< HEAD
                className="group bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/40 transition-all"
=======
                className="group bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/40 transition-all"
>>>>>>> d2b89cec39a2d0e2724bc7e817985633189a41c1
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

<<<<<<< HEAD
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
=======
      <section className="py-20">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Intelligent Energy Management
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a free energy efficiency assessment from our AI agents. 
            Discover how AI can reduce costs and improve grid performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book Energy Consultation
>>>>>>> d2b89cec39a2d0e2724bc7e817985633189a41c1
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}