import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System Status | Zion Tech Group',
  description: 'Real-time status of Zion Tech Group services.',
  alternates: { canonical: '/status/' },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
