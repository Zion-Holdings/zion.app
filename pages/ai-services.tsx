import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { Brain, CheckCircle, Zap, Shield, Workflow, Rocket } from 'lucide-react';

export default function AIServicesPage() {
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
    { name: 'AI Eval Service', href: '/ai-eval' },
  ];

  return (
    <UltraAdvancedFuturisticBackground intensity="high" colorScheme="quantum-fusion" particleCount={300} animationSpeed={1.5} enableHolographic={true} enableQuantumEffects={true}>
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Production-grade AI services: agents, guardrails, evaluation, observability, and secure deployments." />
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
