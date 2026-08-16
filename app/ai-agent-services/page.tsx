import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Agent Services | Zion Tech Group',
  description: 'Enterprise AI agent services for support, outreach, operations, and governed automation.',
  alternates: { canonical: '/ai-agent-services/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Agent Services",
      description: "Enterprise AI agent services for support, outreach, operations, and governed automation.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
