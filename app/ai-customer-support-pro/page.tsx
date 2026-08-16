import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Customer Support Pro | Zion Tech Group',
  description: 'AI-powered customer support automation and ticket management.',
  alternates: { canonical: '/ai-customer-support-pro/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Customer Support Pro",
      description: "AI-powered customer support automation and ticket management.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
