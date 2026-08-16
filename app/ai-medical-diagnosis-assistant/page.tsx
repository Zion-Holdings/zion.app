import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Medical Diagnosis Assistant | Zion Tech Group',
  description: 'AI-powered diagnostic assistance for healthcare professionals.',
  alternates: { canonical: '/ai-medical-diagnosis-assistant/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Medical Diagnosis Assistant",
      description: "AI-powered diagnostic assistance for healthcare professionals.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
