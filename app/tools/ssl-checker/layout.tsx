import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSL Certificate Checker | Zion Tech Group',
  description: 'Free SSL/TLS certificate checker for any domain.',
  alternates: { canonical: '/tools/ssl-checker/' },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
