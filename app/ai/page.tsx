import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Labs | Zion Tech Group',
  description: 'Research, evaluation, and applied AI experiments from Zion Tech Group.',
  openGraph: {
    title: 'AI Labs | Zion Tech Group',
    description: 'AI research and applied experiments from Zion Tech Group.',
    url: 'https://ziontechgroup.com/ai/',
    type: 'website',
  },
  alternates: { canonical: '/ai/' },
};

export default function AiLabPage() {
  return (
    <StandardPage
      title="AI Labs"
      subtitle="Research, evaluation, and applied experiments in autonomous systems and production AI."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'AI Labs' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse AI services', href: '/services?category=ai', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/blog/enterprise-ai-intelligence-hub-vendor-evaluation" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Evaluation</h3>
          <p className="text-slate-400 text-sm">Benchmarking and vendor-evaluation frameworks.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Read more →</span>
        </Link>
        <Link href="/services?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Applied AI</h3>
          <p className="text-slate-400 text-sm">Production assistants, RAG, and agentic workflows.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/agents-monitoring" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Monitoring</h3>
          <p className="text-slate-400 text-sm">Observability and reliability for AI systems.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>
    </StandardPage>
  );
}
