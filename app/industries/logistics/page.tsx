'use client';
import Link from 'next/link';

export const metadata = {
  title: 'Logistics AI Solutions | Zion Tech Group',
  description: 'AI-powered logistics solutions for route optimization, supply chain visibility, delivery prediction, and warehouse automation.',
};

const logisticsServices = [
  { id: 'ai-route-optimizer', title: 'Route Optimization AI', href: '/services/ai-route-optimizer', icon: '🚚', pricing: 'From $129/mo', description: 'Optimize delivery routes with real-time traffic, weather, and demand data.' },
  { id: 'ai-supply-chain-visibility', title: 'Supply Chain Visibility', href: '/services/ai-supply-chain-visibility', icon: '👁️', pricing: 'Custom', description: 'End-to-end tracking and analytics for inventory and shipment visibility.' },
  { id: 'ai-delivery-prediction', title: 'Delivery Prediction', href: '/services/ai-delivery-prediction', icon: '📦', pricing: 'From $99/mo', description: 'Predict delivery times and ETAs with machine learning models.' },
  { id: 'ai-warehouse-automation', title: 'Warehouse Automation', href: '/services/ai-warehouse-automation', icon: '🤖', pricing: 'Custom', description: 'AI-powered inventory management and automated warehouse operations.' },
];

export default function LogisticsIndustryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(245,158,11,0.15),rgba(245,158,11,0.12))]" />
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm mb-6">
            <span className="text-green-400">●</span> Logistics Optimization
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">AI Solutions for Logistics</span></h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">Optimize routes, improve visibility, and automate warehouses with AI-powered logistics.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">🚚 Book Logistics Consultation</Link>
            <Link href="/services/?category=ai" className="btn-secondary text-lg px-8 py-4">📊 View AI Services</Link>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Logistics AI Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">AI-powered tools for supply chain and delivery optimization.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {logisticsServices.map((s) => (
              <Link key={s.id} href={s.href} className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-amber-500/40 transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-300">{s.title}</h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{s.description}</p>
                <span className="text-xs font-semibold uppercase bg-amber-500/20 text-amber-300 px-2 py-1 rounded">{s.pricing}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-950/30 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Streamline Your Supply Chain?</h2>
          <p className="text-slate-300 mb-8">Schedule a free consultation for your logistics operation.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">📞 Book Consultation</Link>
        </div>
      </section>
    </main>
  );
}