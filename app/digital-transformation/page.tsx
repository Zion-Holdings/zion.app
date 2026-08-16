import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Digital Transformation | Zion Tech Group',
  description: 'End-to-end digital transformation consulting and implementation.',
  alternates: { canonical: '/digital-transformation/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
