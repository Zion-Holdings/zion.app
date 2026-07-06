export const metadata = {
  title: 'AI Platform Free Trial | Zion Tech Group',
  description: 'Start an AI platform free trial with guided setup, automation templates, and support from Zion Tech Group to move from evaluation to production.',
  alternates: { canonical: '/ai-platform-free-trial' },
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16">
        <div className="container-page relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-400/20 bg-orange-400/5 mb-6">
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">AI Platform Free Trial</h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">Evaluate Zion Tech Group AI platform capabilities with a guided trial: document automation, copilots, operations assistants, and analytics.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://calendly.com/kleber-ziontechgroup" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition">Start Trial</a>
            <a href="https://ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-purple-500/40 transition">Visit ziontechgroup.com</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">Trial scope</h2>
          <p className="text-slate-400 max-w-2xl mb-6">A structured trial with milestones, guardrails, and an executive summary so stakeholders can approve production investment.</p>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-300 list-disc pl-6">
            <li>AI platform access and onboarding</li>
            <li>Document-automation or copilot pilot</li>
            <li>Security, data, and governance checks</li>
            <li>Timeline, costs, and adoption roadmap</li>
          </ul>
          <div className="mt-10">
            <a href="https://calendly.com/kleber-ziontechgroup" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Book a Meeting</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Free AI services and tools</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">Try our free services and tools at https://ziontechgroup.com before or during your trial.</p>
          <a href="https://ziontechgroup.com" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Visit ziontechgroup.com</a>
        </div>
      </section>
    </main>
  );
}
