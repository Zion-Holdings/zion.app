import Head from 'next/head';
import Link from 'next/link';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import Button from '../components/ui/Button';
import { Brain, CheckCircle, Shield, Rocket } from 'lucide-react';

export default function AIServicesPage() {
  const curated = [
    'ai-assistant',
    'ai-data-analytics',
    'ai-guardrails',
    'ai-code-review-copilot',
    'ai-sales-automation',
    'ai-website-personalization'
  ];

  const items = [...nextGenerationAIServices, ...innovativeAIServices]
    .filter((s: any) => s && typeof s.link === 'string')
    .filter((s: any) => {
      try {
        const u = new URL(s.link);
        const slug = u.pathname.replace(/^\/+|\/+$/g, '');
        return curated.includes(slug);
      } catch {
        return false;
      }
    });

  const features = [
    'Agentic RAG, tool-use, and memory orchestration',
    'Guardrails, PII redaction, policy enforcement, HITL',
    'Evaluation harnesses with regression metrics',
    'Observability: traces, costs, versions, success rates',
    'On-prem, VPC, or multi-cloud deployment options',
  ];

  const solutions = [
    { name: 'AI Agent Orchestrator', href: '/ai-assistant' },
    { name: 'Customer Service AI', href: '/customer-service-ai' },
    { name: 'AI Sales Copilot', href: '/sales-copilot' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics' },
  ];

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic" intensity={0.95}>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="AI assistants, analytics, guardrails, code review, and sales automation." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">AI Services</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Ship reliable AI assistants and platforms with enterprise guardrails, evaluation, and full-stack observability.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4">Talk to Sales</Button>
              <Button href="/market-pricing" variant="outline" className="px-8 py-4">See Market Pricing</Button>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Popular Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3 text-cyan-300 mb-2"><Rocket className="w-5 h-5" /><span className="font-semibold">{s.name}</span></div>
                  <p className="text-gray-300 text-sm">Learn more</p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Featured Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((s: any) => {
                const u = new URL(s.link);
                const slug = u.pathname.replace(/^\/+|\/+$/g, '');
                return (
                  <Link key={s.id || s.name} href={`/${slug}`} className="block bg-black/30 rounded-2xl border border-cyan-500/30 p-6 hover:border-cyan-400/60 transition-colors">
                    <div className="text-xl font-semibold text-white mb-2">{s.name}</div>
                    {s.tagline && <div className="text-slate-300 mb-3">{s.tagline}</div>}
                    {s.price && <div className="text-cyan-300">{s.price}{s.period || ''}</div>}
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="text-center">
            <div className="inline-flex items-center justify-center gap-3 text-gray-300">
              <Shield className="w-5 h-5 text-purple-400" />
              <span>Security-first engineering with redaction, audit logs, and approvals</span>
            </div>
          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
