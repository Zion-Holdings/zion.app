import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Customer 360 | Zion Tech Group',
  description: 'Unified customer view powered by AI for personalized experiences.',
  alternates: { canonical: '/ai-customer-360/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Customer 360",
      description: "Unified customer view powered by AI for personalized experiences.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
