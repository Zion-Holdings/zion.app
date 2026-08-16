import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Business Intelligence Services | Zion Tech Group',
  description: 'Enterprise BI for decision speed, KPI governance, and trusted reporting.',
  alternates: { canonical: '/business-intelligence-services/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Business Intelligence Services",
      description: "Enterprise BI for decision speed, KPI governance, and trusted reporting.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
