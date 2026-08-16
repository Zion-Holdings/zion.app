import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'DevOps Automation | Zion Tech Group',
  description: 'CI/CD pipelines, infrastructure as code, and DevOps automation.',
  alternates: { canonical: '/devops-automation/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "DevOps Automation",
      description: "CI/CD pipelines, infrastructure as code, and DevOps automation.",
      category: 'AI Service',
      categoryColor: "from-pink-500 to-rose-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
