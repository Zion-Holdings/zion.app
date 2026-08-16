import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Business Intelligence | Zion Tech Group',
  description: 'Transform data into actionable insights with our BI platform.',
  alternates: { canonical: '/business-intelligence/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Business Intelligence",
      description: "Transform data into actionable insights with our BI platform.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
