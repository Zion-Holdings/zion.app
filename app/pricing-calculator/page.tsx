import PricingCalculatorClient from './PricingCalculatorClient';

export const metadata = {
  title: 'Pricing Calculator',
  description: 'Estimate your monthly AI, IT, cloud, and security service cost. Configure services, tier, and support level — instant bundled estimate.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-12">
        <PricingCalculatorClient />
      </div>
    </main>
  );
}
