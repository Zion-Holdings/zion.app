import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Proposal Generator | Zion Tech Group',
  description: 'Generate a custom proposal in minutes.',
};

export default function ProposalGeneratorLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
