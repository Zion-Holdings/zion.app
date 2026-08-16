import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'Computer Vision Solutions | Zion Tech Group',
  description: 'Image and video analysis powered by deep learning and computer vision.',
  alternates: { canonical: '/computer-vision/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "Computer Vision Solutions",
      description: "Image and video analysis powered by deep learning and computer vision.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
