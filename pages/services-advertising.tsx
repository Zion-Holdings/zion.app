import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';

export default function ServicesAdvertisingPage() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const benefits = [
    '1000% ROI target with measurable KPIs',
    'Transparent pricing with market references',
    'Fast onboarding with templates and playbooks',
    'Enterprise-grade security and compliance',
    '24/7 support with SLAs',
    'Proven architectures and reference implementations'
  ];

  const anchors = [
    { title: 'AI & Data', href: '/services#ai' },
    { title: 'Cloud & FinOps', href: '/services#cloud' },
    { title: 'Observability', href: '/services#observability' },
    { title: 'Developer Tools', href: '/services#developer-tools' },
    { title: 'Quality & Monitoring', href: '/services#quality' }
  ];

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic" intensity={0.9}>
      <Head>
        <title>AI, IT and Micro SaaS Services Advertising | Zion Tech Group</title>
        <meta name="description" content="Explore our AI, IT, and micro SaaS services with features, capabilities, benefits, pricing references, and easy contact options." />
        <link rel="canonical" href="https://ziontechgroup.com/services-advertising" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Services That Ship Outcomes
            </h1>
            <p className="text-gray-300 text-lg">AI platforms, enterprise IT solutions, and real micro SaaS accelerators.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
                Talk to Sales
              </Button>
              <Button href="/market-pricing" variant="outline" className="px-8 py-4 border border-gray-600 text-gray-200">
                View Market Pricing
              </Button>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Why Zion Tech Group</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    <p className="text-gray-200">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Featured Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'LLM Gateway & Cost Control', price: '$299/mo', href: '/llm-gateway' },
                { name: 'API Observability Starter', price: '$149/mo', href: '/api-observability-starter' },
                { name: 'Cloud Cost Optimizer', price: '$399/mo', href: '/cloud-cost-optimizer' },
                { name: 'SOC 2 Evidence Automation', price: '$499/mo', href: '/soc2-evidence-automation' },
                { name: 'Vector Search Starter', price: '$249/mo', href: '/vector-search-starter' },
                { name: 'TLS Certificate Monitor', price: '$49/mo', href: '/tls-certificate-monitor' }
              ].map((o) => (
                <a key={o.name} href={o.href} className="block p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40">
                  <div className="text-sm text-gray-400 mb-1">From</div>
                  <div className="text-2xl font-bold text-white">{o.price}</div>
                  <div className="text-gray-200 mt-2">{o.name}</div>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">New 2025 Launches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Feature Flags at the Edge', price: '$199/mo', href: '/feature-flags-edge' },
                { name: 'RAG Observability & Evals', price: '$299/mo', href: '/ai-evals' },
                { name: 'Synthetic Data Studio', price: '$349/mo', href: '/services' },
                { name: 'Kubernetes Cost Guardrails', price: '$279/mo', href: '/services' },
                { name: 'API Security Posture', price: '$329/mo', href: '/services' },
                { name: 'Browser Performance Insights', price: '$149/mo', href: '/browser-performance-monitor' }
              ].map((o) => (
                <a key={o.name} href={o.href} className="block p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40">
                  <div className="text-sm text-gray-400 mb-1">From</div>
                  <div className="text-2xl font-bold text-white">{o.price}</div>
                  <div className="text-gray-200 mt-2">{o.name}</div>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Benchmark With Market Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-black/40 border border-cyan-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">AI Platforms</h3>
                <ul className="text-slate-300 space-y-1">
                  <li>OpenAI: <a className="text-cyan-400 underline" href={`https://openai.com/api/pricing`} target="_blank" rel="noopener noreferrer">openai.com/api/pricing</a></li>
                  <li>Anthropic: <a className="text-cyan-400 underline" href={`https://www.anthropic.com/pricing`} target="_blank" rel="noopener noreferrer">anthropic.com/pricing</a></li>
                  <li>Langfuse: <a className="text-cyan-400 underline" href={`https://langfuse.com/pricing`} target="_blank" rel="noopener noreferrer">langfuse.com/pricing</a></li>
                </ul>
                <div className="text-sm text-slate-400 mt-3">SMB budgets: $100–$2,000/mo.</div>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-purple-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">Security & Compliance</h3>
                <ul className="text-slate-300 space-y-1">
                  <li>Wiz: <a className="text-cyan-400 underline" href={`https://www.wiz.io/pricing`} target="_blank" rel="noopener noreferrer">wiz.io/pricing</a></li>
                  <li>Prisma Cloud: <a className="text-cyan-400 underline" href={`https://www.paloaltonetworks.com/prisma/cloud/pricing`} target="_blank" rel="noopener noreferrer">paloaltonetworks.com/prisma/cloud/pricing</a></li>
                  <li>HashiCorp Vault: <a className="text-cyan-400 underline" href={`https://www.hashicorp.com/products/vault/pricing`} target="_blank" rel="noopener noreferrer">hashicorp.com/products/vault/pricing</a></li>
                </ul>
                <div className="text-sm text-slate-400 mt-3">SMB budgets: $200–$5,000/mo.</div>
              </div>
            </div>
            <div className="text-center mt-6">
              <Button href="/market-pricing" variant="secondary" className="px-8 py-4">Full Market Pricing</Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Explore by Category</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {anchors.map((a) => (
                <a key={a.title} href={a.href} className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 text-gray-200">
                  {a.title}
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Average SMB Pricing Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-black/40 border border-cyan-500/30">
                <div className="text-white font-semibold mb-2">AI Platforms & Observability</div>
                <div className="text-slate-300 text-sm">$100–$2,000/month depending on model choice and QPS.</div>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-purple-500/30">
                <div className="text-white font-semibold mb-2">Security & Compliance</div>
                <div className="text-slate-300 text-sm">$200–$5,000/month based on assets and controls.</div>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-emerald-500/30">
                <div className="text-white font-semibold mb-2">Cloud & K8s Cost</div>
                <div className="text-slate-300 text-sm">$200–$2,000/month depending on clusters and spend.</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href={`tel:${contact.mobile.replace(/[^+\d]/g, '')}`} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 flex items-center gap-3">
                <span className="text-cyan-400">📱</span>
                <span className="text-gray-200">{contact.mobile}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-purple-500/40 flex items-center gap-3">
                <span className="text-purple-400">✉️</span>
                <span className="text-gray-200">{contact.email}</span>
              </a>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-emerald-500/40 flex items-center gap-3">
                <span className="text-emerald-400">📍</span>
                <span className="text-gray-200 text-sm">{contact.address}</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

