import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'System Status | Zion Tech Group',
  description: 'Real-time status of Zion Tech Group services.',
};

export default function StatusLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
