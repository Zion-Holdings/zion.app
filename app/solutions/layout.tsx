import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Zion Tech Group',
  description: 'Industry-specific AI and IT solutions tailored to your business.',
  alternates: { canonical: '/solutions/' },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
