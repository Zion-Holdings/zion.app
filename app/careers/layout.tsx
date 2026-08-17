import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Careers | Zion Tech Group',
  description: 'Join Zion Tech Group. Remote-first roles in AI engineering, DevOps, and solution architecture.',
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
