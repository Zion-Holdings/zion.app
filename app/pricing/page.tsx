import Link from 'next/link';

export const metadata = {
  title: 'Pricing | Zion Tech Group',
  description: 'Flexible engagement models with transparent pricing so you can scale AI and IT services predictably.',
  alternates: { canonical: '/pricing/' },
};

const models = [
  {
    title: 'Time & Materials',
    copy: 'Hourly or daily rates for staffing, advisory, and iterative delivery where scope will evolve.',
    goodFor: 'Staffing augmentation, ongoing advisory, exploratory sprints.',
  },
  {
    title: 'Fixed Price',
    copy: 'Scoped deliverables with milestone payments, acceptance criteria, and delivery reviews.',
    goodFor: 'Platform builds, migrations, integrations, and defined outcomes.',
  },
  {
    title: 'Retainer',
    copy: 'Ongoing managed services with predictable monthly spend, SLA terms, and prioritized support.',
    goodFor: 'Managed AI, operations, monitoring, and continuous improvement.',
  },
];

const trust = [
  { label: 'Client rating', value: '4.8 / 5' },
  { label: 'Response time', value: 'Under 1 hour' },
  { label: 'Engagement start', value: '<7 days' },
  { label: 'Delivery model', value: 'US-based, 24/7 coverage' },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <header className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-emerald-300 font-medium uppercase tracking-wider">Transparent Engagement Models</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Flexible <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Choose the model that matches your risk tolerance, governance requirements, and desired speed of delivery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-colors">
              Request a Proposal
            </Link>
            <Link href="/free-consultation/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/10 text-slate-100 font-semibold hover:border-white/30 hover:bg-white/5 transition-colors">
              Free Consultation
            </Link>
          </div>
        </header>

        <section className="py-6">
          <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
            {models.map((m) => (
              <div key={m.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-purple-500/40 transition-colors">
                <h2 className="text-white font-semibold text-lg mb-2">{m.title}</h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">{m.copy}</p>
                <p className="text-xs text-purple-300">Best for: {m.goodFor}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What’s included</h2>
            <p className="text-slate-300 leading-relaxed">Every engagement includes the operating model, not just line items.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto">
            {[
              'Scoped milestones with clear acceptance criteria',
              'Dedicated delivery lead and named account contacts',
              'Monitoring, observability, and escalation runbooks',
              'Weekly client-facing progress and risk summaries',
              'Production handoff with knowledge transfer docs',
              'Post-launch improvement loop and optimization sprints',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-300 flex gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {trust.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                <div className="text-xl font-bold text-white">{item.value}</div>
                <div className="text-xs text-slate-400 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Need a concrete cost model before you commit?</h3>
              <p className="text-slate-300 leading-relaxed">
                Share your scope and constraints and we’ll return a categorized proposal with estimated timeline, team, and ROI.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex gap-2"><span className="text-emerald-400">✓</span> Fixed-scope pilot or managed support path</li>
                <li className="flex gap-2"><span className="text-emerald-400">✓</span> Milestones, owners, and acceptance criteria</li>
                <li className="flex gap-2"><span className="text-emerald-400">✓</span> Transparent cost model and payment terms</li>
                <li className="flex gap-2"><span className="text-emerald-400">✓</span> Production deployment and handoff</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contact/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-colors">
                Request a Consultation
              </Link>
              <Link href="/free-consultation/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/10 text-slate-100 font-semibold hover:border-white/30 hover:bg-white/5 transition-colors">
                Book Free Consultation
              </Link>
              <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                <Link href="/services/" className="hover:text-purple-300 transition-colors">Browse services →</Link>
                <Link href="/case-studies/" className="hover:text-purple-300 transition-colors">Case studies →</Link>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-300 transition-colors">Email for pricing →</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-purple-500/30 bg-slate-900/95 backdrop-blur-xl p-4 shadow-2xl">
        <div className="flex gap-3 max-w-6xl mx-auto">
          <Link href="/contact/" className="flex-1 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25">
            ⚡ Get Your Custom Proposal
          </Link>
          <a href="tel:+13024640950" className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold text-sm hover:bg-slate-700 transition-all">
            ☎ Call
          </a>
        </div>
      </div>
    </main>
  );
}
