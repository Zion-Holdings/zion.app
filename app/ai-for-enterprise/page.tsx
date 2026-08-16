import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI for Enterprise | Zion Tech Group',
  description: 'Enterprise AI adoption with governance, integration, and measurable business outcomes.',
  alternates: { canonical: '/ai-for-enterprise/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI for Enterprise",
      description: "Enterprise AI adoption with governance, integration, and measurable business outcomes.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
