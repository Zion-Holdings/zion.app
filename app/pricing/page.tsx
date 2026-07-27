import Link from 'next/link';

export const metadata = {
  title: 'Pricing & Plans | Zion Tech Group',
  description:
    'Transparent AI and IT pricing options for startups, mid-market, and enterprise. Pilot, fixed-scope, and managed engagement models.',
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Simple options,<br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">clear ROI</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Engagement models built for growth. Start with a pilot or go straight to a fixed-scope build. We optimize for measurable results, not billable hours.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Pilot',
                price: 'From $5,000',
                cadence: 'One-time pilot',
                best: 'Quick validation',
                features: [
                  '30-day outcome-first scope',
                  '1 measurable KPI',
                  'Weekly execution review',
                  'Optional follow-on build',
                ],
                href: '/free-consultation/',
              },
              {
                name: 'Fixed Scope',
                price: 'From $18,000',
                cadence: 'Per project',
                best: 'Clear deliverables',
                features: [
                  'Scoped build with acceptance criteria',
                  'Dedicated delivery lead',
                  'QA + onboarding handoff',
                  '30-day post-launch support',
                ],
                href: '/free-consultation/',
              },
              {
                name: 'Managed Growth',
                price: 'Custom',
                cadence: 'Monthly retainer',
                best: 'Ongoing outcomes',
                features: [
                  'Continuous optimization',
                  'Multi-service roadmap',
                  'SLA-backed operations',
                  'Executive cadence review',
                ],
                href: '/free-consultation/',
              },
            ].map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">{plan.best}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-3xl font-bold text-white">{plan.price}</p>
                <p className="mt-1 text-sm text-slate-400">{plan.cadence}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  {plan.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white"
                >
                  Get this option
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-purple-500/20 bg-slate-900/40 p-6">
            <h3 className="text-lg font-semibold text-white">Not sure which fits?</h3>
            <p className="mt-2 text-sm text-slate-300">
              Most clients start with a pilot and move to managed growth after the first measurable win. If you share your target outcome, I can recommend the fastest path.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/free-consultation/" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">
                Book a free consultation
              </Link>
              <Link href="/contact/" className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white">
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
