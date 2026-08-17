import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Tools Analytics | Zion Tech Group',
  description: 'Usage analytics for Zion Tech Group tools and services.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
