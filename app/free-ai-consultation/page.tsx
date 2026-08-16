import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Free AI Consultation | Zion Tech Group',
  description: 'Tailored AI proposal, use-case shortlist, and 90-day roadmap.',
  alternates: { canonical: '/free-ai-consultation/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Free AI Consultation",
      description: "Tailored AI proposal, use-case shortlist, and 90-day roadmap.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
