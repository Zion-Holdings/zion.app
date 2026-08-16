import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Cloud Infrastructure Management | Zion Tech Group',
  description: 'Manage and optimize your cloud infrastructure across providers.',
  alternates: { canonical: '/cloud-infrastructure-management/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Cloud Infrastructure Management",
      description: "Manage and optimize your cloud infrastructure across providers.",
      category: 'AI Service',
      categoryColor: "from-sky-400 to-blue-600",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
