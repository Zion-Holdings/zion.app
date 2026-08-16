import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Price Optimizer | Zion Tech Group',
  description: 'Dynamic pricing optimization using machine learning and market data.',
  alternates: { canonical: '/ai-price-optimizer/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Price Optimizer",
      description: "Dynamic pricing optimization using machine learning and market data.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
