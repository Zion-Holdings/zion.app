import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Data Services | Zion Tech Group',
  description: 'Data engineering, analytics, and management services.',
  alternates: { canonical: '/data-services/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Data Services",
      description: "Data engineering, analytics, and management services.",
      category: 'AI Service',
      categoryColor: "from-green-500 to-emerald-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
