import { redirect } from 'next/navigation';

export const metadata = {
  title: 'AI Services Pricing',
  description: 'AI service pricing and calculators from Zion Tech Group.',
  alternates: { canonical: '/pricing-calculator/' },
};

export default function AiServicesPricingAlias() {
  redirect('/pricing-calculator/');
}
