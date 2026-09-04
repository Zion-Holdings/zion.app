// app/tools/layout.tsx
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Free AI Tools & Calculators | Zion Tech Group',
  description: 'Free AI-powered tools: service router, ROI calculator, port scanner, SSL checker, health check, and service comparison.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/' },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
