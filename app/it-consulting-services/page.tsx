import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'IT Consulting Services | Zion Tech Group',
  description: 'Enterprise IT consulting for architecture, delivery, governance, and measurable outcomes.',
  alternates: { canonical: '/it-consulting-services/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "IT Consulting Services",
      description: "Enterprise IT consulting for architecture, delivery, governance, and measurable outcomes.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
