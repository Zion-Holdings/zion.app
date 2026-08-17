import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to the most common questions about our AI services, IT solutions, consulting, and micro-SaaS products.',
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
