import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Cybersecurity Services | Zion Tech Group',
  description: 'Comprehensive cybersecurity solutions to protect your digital assets.',
  alternates: { canonical: '/cybersecurity/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Cybersecurity Services",
      description: "Comprehensive cybersecurity solutions to protect your digital assets.",
      category: 'AI Service',
      categoryColor: "from-red-500 to-orange-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
