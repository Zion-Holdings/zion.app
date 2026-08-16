import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Development | Zion Tech Group',
  description: 'Enterprise AI development for assistants, documents, predictive models, and deployment.',
  alternates: { canonical: '/ai-development/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Development",
      description: "Enterprise AI development for assistants, documents, predictive models, and deployment.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
