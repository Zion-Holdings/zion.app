import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy | Zion Tech Group',
  description: 'How Zion Tech Group uses cookies and similar technologies on our website.',
  alternates: { canonical: '/cookie-policy/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Cookie Policy",
      description: "How Zion Tech Group uses cookies and similar technologies on our website.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
