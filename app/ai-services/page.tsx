import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'End-to-end AI services from strategy to production: assistants, RAG, autonomous agents, agentic workflows, evaluation, and governance. Powered by Hermes Agent.',
  keywords: [
    'AI services',
    'Hermes Agent',
    'autonomous agents',
    'agentic workflows',
    'AI governance',
    'RAG',
    'AI automation',
    'Nous Research',
  ],
  openGraph: { title: 'AI Services | Zion Tech Group', description: 'Production AI services and autonomous agent implementation powered by Hermes Agent.', url: 'https://ziontechgroup.com/ai-services/', type: 'website' },
  alternates: { canonical: '/ai-services/' },
};

export default function AiServicesPage() {
  return (
    <StandardPage
      title="AI Services"
      subtitle="Strategy, implementation, and operations for production AI."
      breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'AI Services' }]}
      actions={[{ label: 'Get started', href: '/contact/', style: 'primary' }]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mb-12">
        <Link href="/services?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Assistants & RAG</h3>
          <p className="text-slate-400 text-sm">Support bots, knowledge retrieval, and grounded answers.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=automation" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Agentic Workflows</h3>
          <p className="text-slate-400 text-sm">Automation with guardrails, observability, and review loops.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=security" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">AI Governance</h3>
          <p className="text-slate-400 text-sm">Policy, evaluation, and safe deployment practices.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>

      {/* Featured: Hermes Agent Platform */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-purple-500/30 rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-300 text-xs font-mono rounded-full border border-purple-500/20 mb-3">
                Powered by Nous Research
              </span>
              <h2 className="text-3xl font-bold text-white mb-2">Hermes Agent — Autonomous AI Platform</h2>
              <p className="text-lg text-slate-300 max-w-2xl">
                Deploy self-improving autonomous agents that work 24/7 across messaging platforms, your IDE, and CLI. Built by Nous Research with persistent memory, 350+ skills, and multi-model providers.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="/hermes-agents/"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all text-center"
              >
                Learn More
              </Link>
              <Link
                href="/services/hermes-agent/"
                className="px-6 py-3 border border-slate-700 text-slate-200 font-semibold rounded-full hover:border-purple-500/40 hover:bg-slate-900/60 transition-all text-center"
              >
                Service Detail
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/services/hermes-agent/" className="block bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-purple-500/40 transition-colors">
            <span className="text-3xl mb-3 block">🤖</span>
            <h3 className="text-xl font-semibold text-white mb-2">Hermes AI Agent Platform</h3>
            <p className="text-slate-400 text-sm">Full-stack Hermes deployment with multi-agent orchestration, persistent memory, and 24/7 monitoring.</p>
          </Link>
          <Link href="/agents-monitoring/" className="block bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-purple-500/40 transition-colors">
            <span className="text-3xl mb-3 block">📊</span>
            <h3 className="text-xl font-semibold text-white mb-2">Live Agent Dashboard</h3>
            <p className="text-slate-400 text-sm">Real-time observability dashboard for your Hermes agent fleet — task tracking, skill usage, and health monitoring.</p>
          </Link>
        </div>
      </div>
    </StandardPage>
  );
}
