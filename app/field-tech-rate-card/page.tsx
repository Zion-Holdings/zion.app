import Link from 'next/link';

export const metadata = {
  title: 'Field Tech Rate Card | Zion Tech Group',
  description: 'Transparent field technician rate card from Zion Tech Group. Compare engagement models, rates, and inclusions for IT support and AI-assisted field services.',
  alternates: { canonical: '/field-tech-rate-card/' },
};

const plans = [
  {
    name: 'On-Demand',
    price: 'From $95/hr',
    cadence: 'per dispatch',
    bestFor: 'Spot coverage',
    features: ['No minimum', 'Same-day dispatch', 'After-hours option', 'Cancel anytime'],
  },
  {
    name: 'Retainer',
    price: 'From $3,200/mo',
    cadence: 'monthly block',
    bestFor: 'Ongoing ops',
    features: ['Priority scheduling', 'Dedicated lead tech', 'Monthly review', 'Discounted rates'],
  },
  {
    name: 'Project',
    price: 'From $4,500',
    cadence: 'per project',
    bestFor: 'Finite rollout',
    features: ['Fixed scope', 'Milestone billing', 'QA handoff', '30-day support'],
  },
];

export default function FieldTechRateCardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Field Tech Rate Card</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Clear pricing for field-ready IT support talent. Choose the engagement model that fits your team and budget.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link href="/contact/" className="btn-primary text-lg">Get Started</Link>
            <Link href="/field-tech/" className="btn-secondary text-lg">Back to Recruiting</Link>
          </div>
        </header>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-6 hover:border-purple-500/40 transition-all">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-white">{plan.name}</h2>
                  <p className="text-slate-400 text-sm">Best for: {plan.bestFor}</p>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-500 text-sm ml-2">{plan.cadence}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="text-slate-300 text-sm">• {f}</li>
                  ))}
                </ul>
                <Link href="/contact/" className="block text-center w-full btn-primary text-base">Request this plan</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a custom package?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Tell us your volume, coverage area, and skill mix. We’ll tailor a rate card and delivery plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary text-lg">Talk to Us</Link>
            <a href="tel:+130****0950" className="btn-secondary text-lg">Call +1 302 464 0950</a>
          </div>
        </section>
      </div>
    </main>
  );
}
