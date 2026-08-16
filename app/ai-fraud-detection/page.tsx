import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Fraud Detection | Zion Tech Group',
  description: 'Real-time fraud detection and prevention powered by machine learning.',
  alternates: { canonical: '/ai-fraud-detection/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Fraud Detection",
      description: "Real-time fraud detection and prevention powered by machine learning.",
      category: 'AI Service',
      categoryColor: "from-red-500 to-orange-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
