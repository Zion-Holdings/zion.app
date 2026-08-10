import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automation | Zion Tech Group',
  description: 'Workflow automation, AI orchestration, RPA, and intelligent document processing from Zion Tech Group.',
  alternates: { canonical: '/automation/' },
};

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Automation</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Reduce manual work with intelligent automation across operations, document workflows, and integrations.
          </p>
        </div>
        <section className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Workflow Orchestration</h3>
            <p className="text-slate-400">Low-code and code-native orchestration with observability and retries.</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Intelligent Document Processing</h3>
            <p className="text-slate-400">Extract, classify, and route documents with AI-assisted accuracy.</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-white mb-2">RPA + AI Agents</h3>
            <p className="text-slate-400">Combine robotic automation with agentic decision making for end-to-end workflows.</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Integration Platform</h3>
            <p className="text-slate-400">Connect internal systems, SaaS tools, and APIs with governed automation.</p>
          </div>
        </section>
        <div className="text-center mt-10">
          <Link href="/contact/" className="btn-primary text-lg px-10 py-4 inline-block">
            Talk to an Automation Expert →
          </Link>
        </div>
      </div>
    </main>
  );
}
