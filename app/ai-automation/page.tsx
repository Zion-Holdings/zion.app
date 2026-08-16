import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Automation | Zion Tech Group',
  description: 'AI-powered automation for support, operations, and revenue workflows.',
  alternates: { canonical: '/ai-automation/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Automation",
      description: "AI-powered automation for support, operations, and revenue workflows.",
      category: 'AI Service',
      categoryColor: "from-pink-500 to-rose-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
