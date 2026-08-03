import Link from 'next/link';

export const metadata = {
  title: 'Services - Ai Energy Utilities Analytics | Zion Tech Group',
  description: 'AI-powered energy analytics, utilities automation, compliance, integration, operations, and predictive insights for modern infrastructure.',
  alternates: { canonical: '/services/ai-energy-utilities-analytics' },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        <Link href="/services" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Services</Link>
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">⚡</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">AI Energy & Utilities Analytics</h1>
              <p className="text-slate-400 text-sm mt-1">Energy • Utilities</p>
            </div>
          </div>
          <p className="text-slate-300 text-base leading-relaxed mb-6">Grid demand forecasting, asset operations, and compliance analytics for energy and utility operators.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Features</h2>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Demand forecasting and load prediction</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Asset operations and maintenance optimization</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Compliance analytics and regulatory reporting</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Outage prediction and response planning</span></li>
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Benefits</h2>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Lower operational costs with predictive maintenance</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Faster compliance cycles and audit readiness</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Improved reliability and outage response</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Scalable analytics across generation and distribution</span></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-purple-300 text-sm font-medium">Starting at Contact for Quote</span>
            <a href="mailto:kleber@ziontechgroup.com?subject=AI%20Energy%20%26%20Utilities%20Analytics" className="btn-primary">Contact Us</a>
            <Link href="/services" className="text-sm text-purple-400 hover:underline inline-flex items-center gap-1">Browse Services →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
