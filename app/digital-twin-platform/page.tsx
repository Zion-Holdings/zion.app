import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Digital Twin Platform | Zion Tech Group',
  description: 'Create digital twins of physical assets for simulation and optimization.',
  alternates: { canonical: '/digital-twin-platform/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Digital Twin Platform",
      description: "Create digital twins of physical assets for simulation and optimization.",
      category: 'AI Service',
      categoryColor: "from-cyan-500 to-blue-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
