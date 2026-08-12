import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Port Scanner Tool | Zion Tech Group',
  description: 'Free network port scanner — check open ports and security posture.',
  alternates: { canonical: '/tools/port-scanner/' },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
