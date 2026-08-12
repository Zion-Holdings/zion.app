import PricingCalculatorClient from './PricingCalculatorClient';

export const metadata = {
  title: 'Pricing Calculator',
  description: 'Estimate your monthly AI, IT, cloud, and security service cost. Configure services, tier, and support level — instant bundled estimate.',
  alternates: { canonical: '/pricing-calculator/' },

  openGraph: {
    title: 'Pricing Calculator',
    description: 'Estimate your monthly AI, IT, cloud, and security service cost. Configure services, tier, and support level — instant bundled estimate.',
    url: 'https://ziontechgroup.com/pricing-calculator/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

export default function Page() {
  return (

    <>

      <h1>Pricing Calculator</h1>

      <PricingCalculatorClient  />

    </>

  );
}
