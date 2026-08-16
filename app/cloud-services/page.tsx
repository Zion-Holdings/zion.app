import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Cloud Services | Zion Tech Group',
  description: 'Comprehensive cloud services including migration, management, and optimization.',
  alternates: { canonical: '/cloud-services/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Cloud Services",
      description: "Comprehensive cloud services including migration, management, and optimization.",
      category: 'AI Service',
      categoryColor: "from-sky-400 to-blue-600",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
