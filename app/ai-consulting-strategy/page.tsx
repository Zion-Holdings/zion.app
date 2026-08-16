import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Consulting Strategy | Zion Tech Group',
  description: 'AI strategy and consulting for executive-ready roadmaps and measurable outcomes.',
  alternates: { canonical: '/ai-consulting-strategy/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Consulting Strategy",
      description: "AI strategy and consulting for executive-ready roadmaps and measurable outcomes.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
