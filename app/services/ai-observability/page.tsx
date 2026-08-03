import Link from 'next/link';

export const metadata = {
  title: 'Services - Ai Observability | Zion Tech Group',
  description: 'Observability, AIOps, monitoring, and incident automation for modern IT operations.',
  alternates: { canonical: '/services/ai-observability' },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        <Link href="/services" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Services</Link>
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📊</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">AI Observability & AIOps</h1>
              <p className="text-slate-400 text-sm mt-1">Monitoring & Alerting</p>
            </div>
          </div>
          <p className="text-slate-300 text-base leading-relaxed mb-6">Monitoring, anomaly detection, and incident automation for modern IT operations.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Features</h2>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Metrics, logs, and traces unification</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Anomaly detection and root-cause analysis</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Incident response automation and chatops</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>SLO-based reliability guardrails</span></li>
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Benefits</h2>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Reduce MTTR with automated triage</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Faster detection before customer impact</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Unified visibility across clouds and clusters</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Actionable signals instead of alert noise</span></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-purple-300 text-sm font-medium">Starting at Contact for Quote</span>
            <a href="mailto:kleber@ziontechgroup.com?subject=AI%20Observability%20%26%20AIOps" className="btn-primary">Contact Us</a>
            <Link href="/services" className="text-sm text-purple-400 hover:underline inline-flex items-center gap-1">Browse Services →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
