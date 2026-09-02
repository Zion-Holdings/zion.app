'use client';
import Link from 'next/link';

export const metadata = {
  title: 'AI Agent Solutions | Zion Tech Group',
  description: 'AI-powered agent solutions for autonomous operations, workflow orchestration, and intelligent automation.',
};

const agentServices = [
  { id: 'ai-agents-autonomous', title: 'Autonomous AI Agents', href: '/services/ai-agents-autonomous', icon: '🤖', pricing: 'Starting at $99/mo', description: 'Build autonomous agents that research, code, and deploy solutions 24/7.' },
  { id: 'ai-agent-orchestration-platform', title: 'Agent Orchestration Platform', href: '/services/ai-agent-orchestration-platform', icon: '🎭', pricing: 'Custom', description: 'Coordinate multiple AI agents with workflow orchestration and monitoring.' },
  { id: 'ai-agentic-workflows', title: 'Agentic Workflows', href: '/services/ai-agentic-workflows', icon: '🔄', pricing: 'From $149/mo', description: 'Build agentic workflows that adapt and self-improve over time.' },
  { id: 'ai-agent-tool-builder', title: 'Agent Tool Builder', href: '/services/ai-agent-tool-builder', icon: '🔧', pricing: 'Custom', description: 'Create custom tools and integrations for your AI agents.' },
  { id: 'ai-agent-safety-evaluation', title: 'Agent Safety Evaluation', href: '/services/ai-agent-safety-evaluation', icon: '🛡️', pricing: 'From $199/mo', description: 'Evaluate and improve agent safety, alignment, and reliability.' },
];

export default function AgentIndustryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(124,58,237,0.15),rgba(165,130,250,0.12))]" />
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm mb-6">
            <span className="text-green-400">●</span> Autonomous AI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">AI Agent Solutions</span></h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">Build autonomous AI agents that work 24/7 to research, build, and deploy solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/agents-monitoring" className="btn-primary text-lg px-8 py-4">🤖 View Agent Dashboard</Link>
            <Link href="/services/?category=ai" className="btn-secondary text-lg px-8 py-4">📊 View AI Services</Link>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AI Agent Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Build autonomous AI agents for research, development, and operations.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentServices.map((s) => (
              <Link key={s.id} href={s.href} className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-violet-500/40 transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300">{s.title}</h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{s.description}</p>
                <span className="text-xs font-semibold uppercase bg-violet-500/20 text-violet-300 px-2 py-1 rounded">{s.pricing}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-950/30 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Deploy Autonomous AI?</h2>
          <p className="text-slate-300 mb-8">See how 9 AI agents are already building this website 24/7.</p>
          <Link href="/agents-monitoring" className="btn-primary text-lg px-8 py-4">🚀 View Live Agent Dashboard</Link>
        </div>
      </section>
    </main>
  );
}