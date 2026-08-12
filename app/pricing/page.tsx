import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Flexible pricing for managed IT, AI, cloud, and cybersecurity services.',
  alternates: { canonical: '/pricing/' },

  openGraph: {
    title: 'Pricing',
    description: 'Flexible pricing for managed IT, AI, cloud, and cybersecurity services.',
    url: 'https://ziontechgroup.com/pricing/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

const PLANS = [
  {
    name: 'Starter',
    price: '$999/mo',
    features: ['Monitoring', 'Helpdesk', 'Basic security'],
    cta: '/contact/',
  },
  {
    name: 'Growth',
    price: '$2,499/mo',
    features: ['SOC', 'Cloud management', 'Automation'],
    cta: '/contact/',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Dedicated team', 'Custom AI', 'Compliance'],
    cta: '/contact/',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="py-20 px-4 text-center bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Pricing
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Transparent plans for every stage of growth.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-20">
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div key={plan.name} className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-white font-semibold text-xl mb-2">{plan.name}</h3>
                <p className="text-purple-300 text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="text-slate-300 text-sm">{f}</li>
                  ))}
                </ul>
                <Link href={plan.cta} className="btn-primary w-full text-center block">Get Started</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-10 border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">Need a custom package?</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Tell us your goals and we’ll put together a tailored proposal with transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary">Get Free Consultation</Link>
            <Link href="/services/" className="btn-secondary">Browse Services</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
