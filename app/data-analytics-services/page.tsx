import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Data Analytics Services | Zion Tech Group',
  description: 'Enterprise data analytics for insight, decision speed, and measurable outcomes.',
  alternates: { canonical: '/data-analytics-services/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Data Analytics Services",
      description: "Enterprise data analytics for insight, decision speed, and measurable outcomes.",
      category: 'AI Service',
      categoryColor: "from-green-500 to-emerald-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
