import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Predictive Maintenance | Zion Tech Group',
  description: 'Predict equipment failures before they happen with IoT and AI.',
  alternates: { canonical: '/ai-predictive-maintenance/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Predictive Maintenance",
      description: "Predict equipment failures before they happen with IoT and AI.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
