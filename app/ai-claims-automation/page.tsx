import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Claims Automation | Zion Tech Group',
  description: 'Automate insurance claims processing with AI and machine learning.',
  alternates: { canonical: '/ai-claims-automation/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Claims Automation",
      description: "Automate insurance claims processing with AI and machine learning.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
