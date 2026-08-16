import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Consulting Services | Zion Tech Group',
  description: 'AI consulting services for strategy, implementation, and measurable outcomes.',
  alternates: { canonical: '/ai-consulting-services/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Consulting Services",
      description: "AI consulting services for strategy, implementation, and measurable outcomes.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
