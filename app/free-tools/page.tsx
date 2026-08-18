import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Free Tools & Calculators | Zion Tech Group',
  description: 'Free online tools for network diagnostics, SSL checks, service comparison, AI recommendations, and ROI planning.',
  alternates: { canonical: '/free-tools/' },
};

export default function FreeToolsPage() {
  redirect('/tools/');
}
