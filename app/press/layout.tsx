import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Press & News | Zion Tech Group',
  description: 'Press releases, media coverage, and news about Zion Tech Group.',
};

export default function PressLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
