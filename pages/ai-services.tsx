import React from 'react';
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Link from 'next/link';

export default function AIServicesPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <SEO title="AI Services | Zion Tech Group" description="LLM apps, RAG, evaluation, guardrails, and automation with transparent pricing." canonical="https://ziontechgroup.com/ai-services/" />
      <div className="container mx-auto px-4 py-24 text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</h1>
          <p className="text-gray-300 text-lg">Productized AI solutions: evaluation labs, safety & guardrails, chatbots, agents, search/RAG, and automation. See <Link className="text-cyan-400 underline" href="/market-pricing">Market Pricing</Link> for typical vendor benchmarks.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'RAG & Vector Search', href: '/vector-search-starter' },
              { title: 'AI Evaluation Lab', href: '/rag-evaluation-lab' },
              { title: 'AI Guardrails', href: '/ai-powered-cybersecurity' },
              { title: 'AI Content Generator', href: '/intelligent-content-automation-platform' },
              { title: 'AI Customer Service', href: '/ai-customer-service' },
              { title: 'AI Sales Intelligence', href: '/ai-sales-automation' },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-500/40 transition-colors">
                <div className="text-xl font-semibold">{c.title}</div>
                <div className="text-sm text-gray-400 mt-2">Implementation‑ready with pricing and SLAs.</div>
              </Link>
            ))}
          </div>
          <div className="text-sm text-gray-400">Questions? <Link className="text-cyan-400 underline" href="/contact">Contact us</Link>.</div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
