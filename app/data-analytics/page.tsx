import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Data Analytics | Zion Tech Group',
  description: 'Advanced data analytics platform with visualization and reporting.',
  alternates: { canonical: '/data-analytics/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Data Analytics",
      description: "Advanced data analytics platform with visualization and reporting.",
      category: 'AI Service',
      categoryColor: "from-green-500 to-emerald-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
