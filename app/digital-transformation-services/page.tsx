import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Digital Transformation Services | Zion Tech Group',
  description: 'Enterprise digital transformation from strategy through measurable outcomes.',
  alternates: { canonical: '/digital-transformation-services/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Digital Transformation Services",
      description: "Enterprise digital transformation from strategy through measurable outcomes.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
