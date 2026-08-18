import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Study {
  slug: string;
  title: string;
  excerpt: string;
  href: string;
}

const studies: Study[] = [
  { slug: 'ai-automation-in-it-support', title: 'AI Automation in IT Support', excerpt: 'Reducing response times with intelligent routing.', href: '/case-studies/ai-automation-in-it-support' },
];

export const metadata: Metadata = {
  title: 'Case Studies | Zion Tech Group',
  description: 'Real-world AI and IT transformation case studies from Zion Tech Group.',
  alternates: { canonical: 'https://ziontechgroup.com/case-studies/' },
};

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  notFound();
}
