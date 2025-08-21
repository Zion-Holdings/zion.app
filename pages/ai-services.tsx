import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import EnhancedServiceShowcase from '../components/sections/EnhancedServiceShowcase';
import Button from '../components/ui/Button';

export default function AIServicesPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>AI Services & Agentic Solutions | Zion Tech Group</title>
        <meta name="description" content="Production-ready AI services: agents, RAG, evals, guardrails, observability, and automation. Market-aligned pricing and fast onboarding." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Services & Agentic Platforms
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Deploy AI copilots, agents, and automated workflows with safety, evals, and
              observability built-in. We productize delivery for fast value—no endless discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/services" variant="primary">Browse All Services</Button>
              <Button href="/market-pricing" variant="secondary">See Market Pricing</Button>
              <Button href="/contact" variant="secondary">Talk to an Expert</Button>
            </div>
            <div className="text-sm text-slate-400">
              Contact: <a className="underline text-cyan-300" href="tel:+13024640950">{contactInfo.mobile}</a> •
              <a className="underline text-purple-300 ml-1" href="mailto:kleber@ziontechgroup.com">{contactInfo.email}</a>
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Agents, RAG & Orchestration</h2>
              <p className="text-slate-300 mb-3">Design and operate reliable, tool-using agents and grounded retrieval systems.</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                <li>Agent frameworks with tool safety & retries</li>
                <li>Evaluation harness and regression gates</li>
                <li>Latency, cost and quality optimization</li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Safety, Guardrails & Evals</h2>
              <p className="text-slate-300 mb-3">Jailbreak detection, PII redaction and policy engines with dashboards.</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                <li>Prompt and output policy enforcement</li>
                <li>Hallucination and grounding scores</li>
                <li>Audit trails and incident triage</li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Observability & Cost Control</h2>
              <p className="text-slate-300 mb-3">Track quality, drift and spend across models and prompts with alerts.</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                <li>Span traces and prompt versioning</li>
                <li>Anomaly detection & drift alarms</li>
                <li>Budgets, caching and routing</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-3xl font-bold">Transparent Pricing References</h2>
            <p className="text-slate-300">Benchmark vendors and typical budgets:</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>OpenAI API: <a className="text-cyan-300 underline" href={`https://openai.com/api/pricing`} target="_blank" rel="noopener noreferrer">openai.com/api/pricing</a></li>
              <li>Anthropic: <a className="text-cyan-300 underline" href={`https://www.anthropic.com/pricing`} target="_blank" rel="noopener noreferrer">anthropic.com/pricing</a></li>
              <li>Langfuse (observability): <a className="text-cyan-300 underline" href={`https://langfuse.com/pricing`} target="_blank" rel="noopener noreferrer">langfuse.com/pricing</a></li>
              <li>Weights & Biases: <a className="text-cyan-300 underline" href={`https://wandb.ai/site/pricing`} target="_blank" rel="noopener noreferrer">wandb.ai/site/pricing</a></li>
            </ul>
            <div className="text-sm text-slate-400">Typical SMB budgets: $100–$2,000/month depending on traffic and models.</div>
          </section>

          <EnhancedServiceShowcase title="Featured AI Services" subtitle="Production-ready AI platforms and accelerators" showFilters={true} />
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
