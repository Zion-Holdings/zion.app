import PricingCalculatorClient from './PricingCalculatorClient';

export const metadata = {
  title: 'Pricing Calculator',
  description: 'Estimate your monthly AI, IT, cloud, and security service cost. Configure services, tier, and support level — instant bundled estimate.',
  alternates: { canonical: '/pricing-calculator/' },
};

export default function Page() {
  return (

    <>

      <h1>Pricing Calculator</h1>

      <PricingCalculatorClient  />

    </>

  );
}
