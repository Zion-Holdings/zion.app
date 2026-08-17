import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Search | Zion Tech Group',
  description: 'Search our catalog of services, solutions, and industry offerings at Zion Tech Group.',
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
