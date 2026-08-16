import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Predictive Analytics | Zion Tech Group',
  description: 'Predictive analytics platform for data-driven business decisions.',
  alternates: { canonical: '/ai-predictive-analytics/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Predictive Analytics",
      description: "Predictive analytics platform for data-driven business decisions.",
      category: 'AI Service',
      categoryColor: "from-green-500 to-emerald-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
