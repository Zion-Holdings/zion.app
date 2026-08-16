import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Data Analytics & BI | Zion Tech Group',
  description: 'Business intelligence and data analytics for data-driven decisions.',
  alternates: { canonical: '/data-analytics-bi/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Data Analytics & BI",
      description: "Business intelligence and data analytics for data-driven decisions.",
      category: 'AI Service',
      categoryColor: "from-green-500 to-emerald-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
