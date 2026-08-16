import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Business IT Consulting | Zion Tech Group',
  description: 'Business IT consulting for digital strategy, delivery, and measurable growth.',
  alternates: { canonical: '/business-it-consulting/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Business IT Consulting",
      description: "Business IT consulting for digital strategy, delivery, and measurable growth.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
