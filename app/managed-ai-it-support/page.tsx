import Link from 'next/link';

export const metadata = {
  title: 'Managed AI & IT Support | Zion Tech Group',
  description: '24/7 managed AI and IT support from Zion Tech Group. Monitoring, incident response, optimization, and proactive maintenance for business-critical systems.',
  alternates: { canonical: '/managed-ai-it-support/' },
};

export default function ManagedAiItSupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Managed AI & IT Support</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            24/7 coverage for AI platforms, cloud infrastructure, endpoints, and networks — so your team can focus on outcomes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link href="/contact/" className="btn-primary text-lg">Request Coverage</Link>
            <Link href="/ai-it-consulting/" className="btn-secondary text-lg">AI & IT Consulting</Link>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Proactive monitoring</h3>
              <p className="text-slate-400 text-sm">AI model drift, API latency, infrastructure health, and anomaly alerts.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Incident response</h3>
              <p className="text-slate-400 text-sm">Fast triage, root-cause analysis, and remediation for production issues.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Continuous optimization</h3>
              <p className="text-slate-400 text-sm">Performance tuning, cost control, and rollout planning on a recurring cadence.</p>
            </div>
          </div>
        </section>

        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need 24/7 support?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Tell us your stack and SLA targets. We’ll design a support model that fits your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary text-lg">Talk to an Expert</Link>
            <a href="tel:+130****0950" className="btn-secondary text-lg">Call +1 302 464 0950</a>
          </div>
        </section>
      </div>
    </main>
  );
}
