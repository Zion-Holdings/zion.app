import React from 'react';

export const metadata = {
  title: 'Hermes Agent Pricing | From $49/mo | Zion Tech Group',
  description: 'Hermes AI agent pricing. Starter plans from $49/mo, professional from $149/mo, enterprise custom. No hidden fees. Cancel anytime.',
  openGraph: { title: 'Hermes Agent Pricing | Zion Tech Group', description: 'Transparent pricing for AI agents. From $49/mo.' },
};

export default function HermesPricing() {
  const plans = [
    { name: 'Starter', price: '$49', period: '/mo', features: ['1 Agent', '100 tasks/mo', 'Basic analytics', 'Email support', '1 integration'], cta: 'Start Free' },
    { name: 'Professional', price: '$149', period: '/mo', features: ['5 Agents', '1,000 tasks/mo', 'Advanced analytics', 'Priority support', '10 integrations', 'Custom skills'], cta: 'Start Free Trial' },
    { name: 'Business', price: '$499', period: '/mo', features: ['25 Agents', '10,000 tasks/mo', 'Real-time dashboards', '24/7 support', 'Unlimited integrations', 'Custom development'], cta: 'Contact Sales' },
    { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited Agents', 'Unlimited tasks', 'Dedicated CTO', 'SLA guarantee', 'On-prem deployment', 'Compliance audit'], cta: 'Talk to Us' },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-indigo-200">No surprises. No hidden fees. Pay for what you use, scale when you need.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((p) => (
              <div key={p.name} className="border border-slate-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{p.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-indigo-600">{p.price}</span>
                  <span className="text-slate-500">{p.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="text-indigo-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="block text-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
