import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'AI Services | Zion Tech Group',
  description: '300+ AI-powered services — from chatbots to computer vision, predictive analytics to autonomous agents.',
  alternates: { canonical: 'https://ziontechgroup.com/ai-services/' },
};

export default function AILabLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
