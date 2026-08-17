import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Service Recommender | Zion Tech Group',
  description: 'Answer 3 quick questions — our AI finds the best-matched services.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
