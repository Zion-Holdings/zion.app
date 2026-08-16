import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Free AI Assessment | Zion Tech Group',
  description: 'Free AI readiness assessment with next steps and prioritized use cases.',
  alternates: { canonical: '/free-ai-assessment/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Free AI Assessment",
      description: "Free AI readiness assessment with next steps and prioritized use cases.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
