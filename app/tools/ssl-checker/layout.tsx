import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'SSL Certificate Checker | Zion Tech Group',
  description: 'Free SSL/TLS certificate checker for any domain.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
