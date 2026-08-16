import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'IoT Platform | Zion Tech Group',
  description: 'Comprehensive IoT platform for device management and data analytics.',
  alternates: { canonical: '/iot-platform/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "IoT Platform",
      description: "Comprehensive IoT platform for device management and data analytics.",
      category: 'AI Service',
      categoryColor: "from-cyan-500 to-blue-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
