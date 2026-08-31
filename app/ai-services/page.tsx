import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'End-to-end AI services from strategy to production: assistants, RAG, agents, evaluation, and governance.',
  openGraph: {
    title: 'AI Services | Zion Tech Group',
    description: 'Production AI services and implementation.',
    url: 'https://ziontechgroup.com/ai-services/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Services | Zion Tech Group',
    description: 'Production AI services and implementation.',
  },
  alternates: { canonical: '/ai-services/' },
};


export default function AiServicesPage() {
  return (
<>
    <StandardPage
      title="AI Services"
      subtitle="Strategy, implementation, and operations for production AI."
      breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'AI Services' }]}
      actions={[{ label: 'Get started', href: '/contact/', style: 'primary' }]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/services/?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Assistants & RAG</h3>
          <p className="text-slate-400 text-sm">Support bots, knowledge retrieval, and grounded answers.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=automation" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Agentic Workflows</h3>
          <p className="text-slate-400 text-sm">Automation with guardrails, observability, and review loops.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=security" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">AI Governance</h3>
          <p className="text-slate-400 text-sm">Policy, evaluation, and safe deployment practices.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">What you can expect</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Scoped pilots with measurable KPIs and timeline.</li>
          <li>Data-grounded assistants with retrieval, routing, and escalation logic.</li>
          <li>Evaluation suites for prompt quality, safety, and consistency.</li>
          <li>Governance policies, audit trails, and production rollback plans.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/services/" className="btn-primary text-center">All services</a>
          <a href="/contact/" className="btn-secondary text-center">Get started</a>
        </div>
      </div>
    </StandardPage>
  </>
  );
}