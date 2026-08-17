import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import type { Metadata } from 'next';
import { pricingTiers, pricingFaq } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'Pricing | Zion Tech Group',
  description: 'Transparent pricing for AI services, IT solutions, and enterprise automation platforms.',
};

export default function PricingPage() {
  return (
    <PageWrapper>
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
            {pricingTiers.map((plan) => (
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

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pricingFaq.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-white mb-2">{item.question}</h3>
                <p className="text-slate-400 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
