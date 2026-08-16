import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Readiness Assessment | Zion Tech Group',
  description: 'AI readiness assessment for prioritized use cases, data, risk, and roadmap planning.',
  alternates: { canonical: '/ai-readiness-assessment-services/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Readiness Assessment",
      description: "AI readiness assessment for prioritized use cases, data, risk, and roadmap planning.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
