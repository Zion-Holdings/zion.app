// app/tools/ai-service-router/layout.tsx
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'AI Service Router — Zion Tech Group',
  description: 'Describe what you need and our AI instantly routes you to the best-matching service from our comprehensive AI-powered service catalog.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/ai-service-router/' },
};

export default function AIServiceRouterLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
