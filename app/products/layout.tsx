import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Products & Platforms | Zion Tech Group',
  description: 'Six product families, AI, IT, Cloud, Security, Data, and Automation platforms for enterprise.',
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
