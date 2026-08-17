import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'AI & IT Solutions — Zion Tech Group',
  description: 'Discover AI and IT solutions that automate your business processes, optimize operations, and drive innovation. From AI chatbots to cybersecurity, we build what you need.',
  alternates: { canonical: '/solutions/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
