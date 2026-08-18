import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Free AI Tools | Zion Tech Group',
  description: 'Free online tools for network diagnostics, SSL checks, service comparison, AI recommendations, and ROI planning.',
  alternates: { canonical: '/free-ai-tools/' },
};

export default function FreeAiToolsPage() {
  redirect('/tools/');
}
