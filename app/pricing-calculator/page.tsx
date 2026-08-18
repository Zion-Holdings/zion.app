import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing Calculator | Zion Tech Group',
  description: 'Estimate your monthly AI, IT, cloud, and security service cost with an interactive pricing calculator.',
  openGraph: {
    title: 'Pricing Calculator',
    description: 'Instant bundled estimate for AI, IT, cloud, and security services.',
    url: 'https://ziontechgroup.com/pricing-calculator/',
    type: 'website',
  },
  alternates: { canonical: '/pricing-calculator/' },
};

export default function PricingCalculatorPage() {
  return (
    <PageWrapper>
      <div className="container-page">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing Calculator</h1>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl">
          Estimate your monthly AI, IT, cloud, and security service cost. Configure services, tier, and support level to get an instant bundled estimate.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-card">
            <h3 className="text-white font-semibold mb-2">Services</h3>
            <p className="text-slate-400 text-sm">Select the service categories you want to include.</p>
          </div>
          <div className="glass-card">
            <h3 className="text-white font-semibold mb-2">Tier</h3>
            <p className="text-slate-400 text-sm">Choose a delivery tier: pilot, program, or managed.</p>
          </div>
          <div className="glass-card">
            <h3 className="text-white font-semibold mb-2">Support</h3>
            <p className="text-slate-400 text-sm">Pick business-hours or 24/7 support coverage.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary text-center">Request quote</Link>
          <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
        </div>
      </div>
    </PageWrapper>
  );
}
