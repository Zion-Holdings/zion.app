import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Email Automation | Zion Tech Group',
  description: 'AI-powered email automation for marketing, sales, and support.',
  alternates: { canonical: '/email-automation/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Email Automation",
      description: "AI-powered email automation for marketing, sales, and support.",
      category: 'AI Service',
      categoryColor: "from-pink-500 to-rose-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
