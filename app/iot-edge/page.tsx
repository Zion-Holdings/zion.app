import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'IoT & Edge Computing | Zion Tech Group',
  description: 'IoT and edge computing solutions for real-time data processing.',
  alternates: { canonical: '/iot-edge/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "IoT & Edge Computing",
      description: "IoT and edge computing solutions for real-time data processing.",
      category: 'AI Service',
      categoryColor: "from-teal-500 to-green-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
