import PricingCalculatorClient from './PricingCalculatorClient';

export const metadata = {
  title: 'Pricing Calculator | Zion Tech Group',
  description: 'Estimate your monthly AI, IT, cloud, and security service cost. Configure services, tier, and support level — instant bundled estimate.',
  alternates: { canonical: '/pricing-calculator/' },
};

export default function PricingCalculatorPage() {
  return (
    <div className="container-page py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing Calculator</h1>
        <p className="text-slate-400 text-lg mb-8">
          Estimate your monthly AI, IT, cloud, and security service cost. Configure services, tier, and support level to get an instant bundled estimate.
        </p>
        <PricingCalculatorClient />
      </div>
    </div>
  );
}
