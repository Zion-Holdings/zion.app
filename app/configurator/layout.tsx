import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solution Configurator | Zion Tech Group',
  description: 'Answer a few questions, get a custom itemized proposal in minutes.',
  alternates: { canonical: '/configurator/' },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
