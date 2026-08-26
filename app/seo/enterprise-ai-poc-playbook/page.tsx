export const metadata = {
  title: 'Enterprise AI PoC Playbook | Zion Tech Group',
  description: 'Use this enterprise AI PoC playbook to select use cases, define success metrics, avoid common pitfalls, and move from proof-of-concept to production with Zion Tech Group.',

};

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16">
        <div className="container-page relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-400/20 bg-orange-400/5 mb-6">
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Playbook</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">Enterprise AI PoC Playbook</h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">A practical playbook for enterprise AI pilots: use-case selection, success metrics, governance, and production transition.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition">Download Playbook</a>
            <a href="https://ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-purple-500/40 transition">Visit ziontechgroup.com</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">What we cover</h2>
          <p className="text-slate-400 max-w-2xl mb-6">From candidate selection to rollout and measurement, keep the PoC aligned with business outcomes.</p>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-300 list-disc pl-6">
            <li>Use-case scoring and prioritization</li>
            <li>Data, access, and compliance readiness</li>
            <li>Pilot metrics and executive reporting</li>
            <li>Production handoff and scaling plan</li>
          </ul>
          <div className="mt-10">
            <a href="https://calendly.com/kleber-ziontechgroup" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Book a Meeting</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Free AI resources</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">Access free AI tools, templates, and services at https://ziontechgroup.com to support your PoC.</p>
          <a href="https://ziontechgroup.com" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Visit ziontechgroup.com</a>
        </div>
      </section>
    </main>
  );
}
