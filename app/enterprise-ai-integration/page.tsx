import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Enterprise AI Integration | Zion Tech Group',
  description: 'Enterprise AI integration for APIs, pipelines, identity, and adoption governance.',
  alternates: { canonical: '/enterprise-ai-integration/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Enterprise AI Integration",
      description: "Enterprise AI integration for APIs, pipelines, identity, and adoption governance.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
