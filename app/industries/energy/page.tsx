'use client';
import Link from 'next/link';

export const metadata = {
  title: 'Energy AI Solutions | Zion Tech Group',
  description: 'AI-powered energy solutions for grid optimization, renewable energy, predictive maintenance, and smart meter analytics.',
};

const energyServices = [
  { id: 'ai-grid-demand-forecast', title: 'Grid Demand Forecasting', href: '/services/ai-grid-demand-forecast', icon: '⚡', pricing: 'From $199/mo' },
  { id: 'ai-renewable-energy', title: 'Renewable Energy Optimization', href: '/services/ai-renewable-energy', icon: '☀️', pricing: 'Custom' },
  { id: 'ai-energy-predictive-maintenance', title: 'Predictive Maintenance', href: '/services/ai-energy-predictive-maintenance', icon: '🔧', pricing: 'From $149/mo' },
  { id: 'ai-smart-meter-analytics', title: 'Smart Meter Analytics', href: '/services/ai-smart-meter-analytics', icon: '📊', pricing: 'From $99/mo' },
];

export default function EnergyIndustryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(245,158,11,0.15),rgba(245,158,11,0.12))]" />
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm mb-6">
            <span className="text-green-400">●</span> Clean Energy AI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">AI Solutions for Energy</span></h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">Optimize grid operations, maximize renewable output, and reduce energy costs with AI.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">⚡ Book Energy Consultation</Link>
            <Link href="/services/?category=ai" className="btn-secondary text-lg px-8 py-4">📊 View AI Services</Link>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Energy AI Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">AI-powered tools for grid and renewable energy optimization.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {energyServices.map((s) => (
              <Link key={s.id} href={s.href} className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-amber-500/40 transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-300">{s.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{s.description}</p>
                <span className="text-xs font-semibold uppercase bg-amber-500/20 text-amber-300 px-2 py-1 rounded">{s.pricing}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-950/30 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Power Your Future?</h2>
          <p className="text-slate-300 mb-8">Schedule a free consultation for your energy operations.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">📞 Book Consultation</Link>
        </div>
      </section>
    </main>
  );
}