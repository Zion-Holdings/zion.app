import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Custom Software Development | Zion Tech Group',
  description: 'Bespoke software development tailored to your business needs.',
  alternates: { canonical: '/custom-development/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Custom Software Development",
      description: "Bespoke software development tailored to your business needs.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
