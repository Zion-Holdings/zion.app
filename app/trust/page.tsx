import Link from 'next/link';

export const metadata = {
  title: 'Trust & Transparency',
  description: 'Compliance posture, platform reality, support model, and data-handling commitments for Zion Tech Group clients.',
};

const commitments = [
  { title: 'US-based delivery', detail: 'Primary team and escalation path are US-based. Offshore or third-party execution is explicit, not assumed.' },
  { title: 'Real engagement model', detail: 'No FOMO pressure, fake waitlists, or unverified reviews. Contact options use real mailto/tel links.' },
  { title: 'Honest capabilities', detail: 'Scope and limits are stated up front. Complexity is explained in plain language, not covered with jargon.' },
  { title: 'Reasonable support', detail: 'Clear expectations for response hours, SLA tiers, escalation path, and after-hours coverage.' },
  { title: 'Data handling', detail: 'Client data stays scoped. Collection, retention, and deletion are explained before engagement start.' },
  { title: 'Business reality', detail: 'Operating address, contact channels, and ownership are public and traceable.' },
];

const proofRows = [
  { label: 'Operating address', value: '364 E Main St STE 1008, Middletown, DE 19709' },
  { label: 'Business contact', value: 'kleber@ziontechgroup.com / +1 302 464 0950' },
  { label: 'Primary channels', value: 'Calendly for meetings; Google Meet as fallback' },
  { label: 'Timezone', value: 'America/Sao_Paulo' },
  { label: 'Support mode', detail: 'Live contact path present on Contact page with real contact entries.' },
];

const guarantees = [
  'Written engagement scope before work starts',
  'No hidden platform fees or forced product dependency',
  'Pricing explained in the recommended engagement currency',
  'No duplicate outreach by thread or bounce',
  'No fake scarcity tactics in client communications',
];

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">Trust & Transparency</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">No fine print. <span className="text-purple-400">Clear expectations.</span></h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            This page is a behavior contract, not marketing copy. If a promise is missing, it is not offered.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all">
              Start with a discovery call
            </Link>
            <Link href="/pricing/" className="inline-flex items-center gap-2 bg-slate-800/70 border border-slate-700/60 text-slate-200 px-6 py-3 rounded-xl font-medium hover:border-purple-500/40 transition-all">
              View pricing model
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2">Operating commitments</h2>
          <p className="text-slate-400 mb-8">Each item is a current behavior rule, not an aspiration.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-all">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2">Verifiable business facts</h2>
          <p className="text-slate-400 mb-8">These are testable claims with real links and channels.</p>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 divide-y divide-slate-800">
            {proofRows.map((row) => (
              <div key={row.label} className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5">
                <div className="text-sm font-semibold text-purple-300">{row.label}</div>
                <div className="sm:col-span-2 text-sm text-slate-300">{row.value ?? row.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2">Client safeguards</h2>
          <p className="text-slate-400 mb-8">These guardrails reduce bad client experiences.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guarantees.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Transparent operations, predictable delivery</h2>
          <p className="text-slate-400 mb-8">Review public signals or contact us directly for a short discovery call.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-7 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all">
              Contact us
            </Link>
            <Link href="/case-studies/" className="inline-flex items-center gap-2 bg-slate-800/70 border border-slate-700/60 text-slate-200 px-7 py-3 rounded-xl font-medium hover:border-purple-500/40 transition-all">
              Review case studies
            </Link>
            <Link href="/status/" className="inline-flex items-center gap-2 bg-slate-800/70 border border-slate-700/60 text-slate-200 px-7 py-3 rounded-xl font-medium hover:border-purple-500/40 transition-all">
              Check system status
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
