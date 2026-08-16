import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Enterprise Security | Zion Tech Group',
  description: 'Enterprise-grade security solutions for large organizations.',
  alternates: { canonical: '/enterprise-security/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Enterprise Security",
      description: "Enterprise-grade security solutions for large organizations.",
      category: 'AI Service',
      categoryColor: "from-red-500 to-orange-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
