import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Flexible pricing for managed IT, AI, cloud, and cybersecurity services.',
  alternates: { canonical: '/pricing/' },
};

const PLANS = [
  { name: 'Starter', price: '$999/mo', features: ['Monitoring', 'Helpdesk', 'Basic security'] },
  { name: 'Growth', price: '$2,499/mo', features: ['SOC', 'Cloud management', 'Automation'] },
  { name: 'Enterprise', price: 'Custom', features: ['Dedicated team', 'Custom AI', 'Compliance'] },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing</h1>
          <p className="text-xl text-slate-300 leading-relaxed">Transparent plans for every stage of growth.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div key={plan.name} className="glass-card p-6">
              <h3 className="text-white font-semibold text-xl mb-2">{plan.name}</h3>
              <p className="text-purple-300 text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="text-slate-300 text-sm">{f}</li>
                ))}
              </ul>
              <Link href="/contact/" className="btn-primary w-full text-center block">Get Started</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}