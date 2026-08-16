import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Documentation Center | Zion Tech Group',
  description: 'Comprehensive documentation for all Zion Tech Group services, APIs, and integrations.',
  alternates: { canonical: '/docs/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Documentation Center",
      description: "Comprehensive documentation for all Zion Tech Group services, APIs, and integrations.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
