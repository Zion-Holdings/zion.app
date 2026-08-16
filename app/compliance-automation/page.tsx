import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Compliance Automation | Zion Tech Group',
  description: 'Compliance Automation — Zion Tech Group enterprise solutions.',
  alternates: { canonical: '/compliance-automation/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Compliance Automation",
      description: "Compliance Automation — Zion Tech Group enterprise solutions.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
