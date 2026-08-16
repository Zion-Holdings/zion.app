import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI/ML Platform | Zion Tech Group',
  description: 'End-to-end machine learning platform for training, deploying, and monitoring models.',
  alternates: { canonical: '/ai-ml-platform/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI/ML Platform",
      description: "End-to-end machine learning platform for training, deploying, and monitoring models.",
      category: 'AI Service',
      categoryColor: "from-cyan-500 to-blue-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
