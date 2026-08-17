import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Service Explorer | Zion Tech Group',
  description: 'Browse and filter enterprise AI and IT services by category, industry, and keyword.',
};

export default function ServicesExplorerLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
