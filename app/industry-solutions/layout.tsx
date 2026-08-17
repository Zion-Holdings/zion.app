import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Industry Solutions | Zion Tech Group',
  description: 'Industry-specific AI, IT, and Micro-SaaS solutions for enterprise.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
