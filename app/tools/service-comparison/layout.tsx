import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Service Comparison Tool | Zion Tech Group',
  description: 'Compare Zion Tech Group services side by side.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
