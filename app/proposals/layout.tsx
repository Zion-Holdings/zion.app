import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Proposals | Zion Tech Group',
  description: 'View your custom service proposals from Zion Tech Group.',
};

export default function ProposalsLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
