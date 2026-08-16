import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Cloud Infrastructure | Zion Tech Group',
  description: 'Scalable, secure cloud infrastructure solutions for enterprises.',
  alternates: { canonical: '/cloud-infrastructure/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud infrastructure solutions for enterprises.",
      category: 'AI Service',
      categoryColor: "from-sky-400 to-blue-600",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
