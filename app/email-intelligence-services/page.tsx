import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Email Intelligence Services | Zion Tech Group',
  description: 'Email intelligence, automation, and monitoring for outreach, support, and operations.',
  alternates: { canonical: '/email-intelligence-services/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Email Intelligence Services",
      description: "Email intelligence, automation, and monitoring for outreach, support, and operations.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
