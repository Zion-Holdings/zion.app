import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Platform Health Check 🩺 | Zion Tech Group',
  description: 'Autonomous diagnostic — runs every check without any API key or external tool.',
  alternates: { canonical: '/tools/health-check/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
