export const metadata = {
  title: 'Free AI Trial for Enterprise | Zion Tech Group',
  description: 'Start with a free AI trial designed for enterprise teams. Evaluate AI automation, sales copilots, and operations assistants with low risk and fast setup.',
  alternates: { canonical: '/ai-free-trial-enterprise' },
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16">
        <div className="container-page relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-400/20 bg-orange-400/5 mb-6">
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Free Trial</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">Free AI Trial for Enterprise</h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">Evaluate enterprise AI with a structured free trial: workflow audits, automation templates, and guided PoC support from Zion Tech Group.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://calendly.com/kleber-ziontechgroup" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition">Start Free Trial</a>
            <a href="https://ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-purple-500/40 transition">Visit ziontechgroup.com</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">What the trial includes</h2>
          <p className="text-slate-400 max-w-2xl mb-6">A short, practical trial with measurable milestones so stakeholders can see real AI value quickly.</p>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-300 list-disc pl-6">
            <li>Workflow audit to identify highest-ROI automation candidates</li>
            <li>AI copilot or document-automation pilot</li>
            <li>Security, data, and operations readiness review</li>
            <li>Executive summary and production roadmap</li>
          </ul>
          <div className="mt-10">
            <a href="https://calendly.com/kleber-ziontechgroup" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Book a Meeting</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Free services and tools</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">We also publish free AI services and tools on https://ziontechgroup.com so teams can test value before committing.</p>
          <a href="https://ziontechgroup.com" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Visit ziontechgroup.com</a>
        </div>
      </section>
    </main>
  );
}
