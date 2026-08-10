import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PricingCalculatorClient from './PricingCalculatorClient';

export const metadata: Metadata = {
  title: 'Pricing Calculator',
  description: 'Estimate your monthly AI, IT, cloud, and security service cost with the Zion Tech Group pricing calculator.',
  alternates: { canonical: '/pricing-calculator/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="py-20">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing Calculator</h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Configure services, tier, and support level to get an instant bundled estimate.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {['AI','Cloud','Security','Managed IT'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">{tag}</span>
              ))}
            </div>
          </div>
          <div className="glass-card p-6">
            <PricingCalculatorClient />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
