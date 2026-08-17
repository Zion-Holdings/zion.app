import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Service Comparison | Zion Tech Group',
  description: 'Compare AI, IT, cloud, and automation services side by side.',
};

export default function ServiceComparisonLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
