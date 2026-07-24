import type { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
  title: 'AI Quick Audit — 2 Minute Readiness Check | Zion Tech Group',
  description: 'Take the 8-question AI readiness quick audit. Get a maturity score and recommended next steps in 2 minutes.',
  alternates: { canonical: '/tools/ai-quick-audit' },
};

export default function Page() {
  return <Client />;
}
