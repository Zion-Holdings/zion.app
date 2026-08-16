import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Cloud AI Services | Zion Tech Group',
  description: 'Managed cloud AI services for inference, pipelines, and cost governance.',
  alternates: { canonical: '/cloud-ai-services/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Cloud AI Services",
      description: "Managed cloud AI services for inference, pipelines, and cost governance.",
      category: 'AI Service',
      categoryColor: "from-sky-400 to-blue-600",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
