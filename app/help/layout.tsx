// app/help/layout.tsx — Server component (metadata for client page)
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help Center | Zion Tech Group',
  description: 'Common questions about AI services, IT support, pricing, and engagement models. Get answers to frequently asked questions.',
  alternates: { canonical: 'https://ziontechgroup.com/help/' },
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
