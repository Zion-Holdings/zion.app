import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { ArrowRight, CheckCircle, ExternalLink, Phone, Mail, MapPin } from 'lucide-react';

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
    'Proven architectures and reference implementations',
    'Vendor-agnostic choices to fit budget and scale',
    'Outcome-based roadmaps and success criteria'
  ];

  const anchors = [
    { title: 'AI & Data', href: '/services#ai' },
    { title: 'Cloud & FinOps', href: '/services#cloud' },
    { title: 'Observability', href: '/services#observability' },
    { title: 'Developer Tools', href: '/services#developer-tools' },
    { title: 'Quality & Monitoring', href: '/services#quality' }
  ];

  const pricingRefs = [
    {
      title: 'AI Platforms',
      links: [
        { name: 'OpenAI', href: 'https://openai.com/api/pricing' },
        { name: 'Anthropic', href: 'https://www.anthropic.com/pricing' },
        { name: 'Langfuse', href: 'https://langfuse.com/pricing' },
        { name: 'Groq', href: 'https://wow.groq.com/pricing' },
        { name: 'OpenRouter', href: 'https://openrouter.ai/models' }
      ],
      note: 'SMB budgets: $100–$2,000/mo.'
    },
    {
      title: 'Security & Compliance',
      links: [
        { name: 'Wiz', href: 'https://www.wiz.io/pricing' },
        { name: 'Prisma Cloud', href: 'https://www.paloaltonetworks.com/prisma/cloud/pricing' },
        { name: 'HashiCorp Vault', href: 'https://www.hashicorp.com/products/vault/pricing' },
        { name: 'Cloudflare Zero Trust', href: 'https://www.cloudflare.com/products/zero-trust/pricing/' }
      ],
      note: 'SMB budgets: $200–$5,000/mo.'
    },
    {
      title: 'Vector & Search',
      links: [
        { name: 'Pinecone', href: 'https://www.pinecone.io/pricing/' },
        { name: 'Weaviate', href: 'https://weaviate.io/pricing' },
        { name: 'Qdrant', href: 'https://qdrant.tech/pricing/' }
      ],
      note: 'SMB budgets: $50–$1,000/mo.'
    },
    {
      title: 'Cloud & Edge',
      links: [
        { name: 'AWS Calculator', href: 'https://calculator.aws' },
        { name: 'Azure', href: 'https://azure.microsoft.com/pricing' },
        { name: 'Cloudflare', href: 'https://www.cloudflare.com/plans/' },
        { name: 'Netlify', href: 'https://www.netlify.com/pricing/' }
      ],
      note: 'SMB budgets: $200–$10,000/mo.'
    }
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
                Talk to Sales <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/market-pricing" variant="outline" className="px-8 py-4 border border-gray-600 text-gray-200">
                View Market Pricing <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Why Zion Tech Group</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1" />
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
                { name: 'TLS Certificate Monitor', price: '$49/mo', href: '/tls-certificate-monitor' },
                { name: 'AI Multimodal Fusion', price: '$2,499/mo', href: '/ai-multimodal-fusion-platform' },
                { name: 'Zero Trust Architecture', price: '$4,999/mo', href: '/zero-trust-network-architecture' },
                { name: 'Edge Orchestration', price: '$3,499/mo', href: '/edge-computing-orchestration' },
                { name: 'Feature Flags & Experimentation', price: '$299/mo', href: '/services/feature-flags-edge' },
                { name: 'On-Call Automation & ROI', price: '$399/mo', href: '/incident-automation-suite' },
                { name: 'Email Warmup & Deliverability Ops', price: '$249/mo', href: '/email-deliverability-monitor' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                <h3 className="text-xl font-semibold text-white mb-3">AI & Data</h3>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>LLM gateways, guardrails, evaluation suites</li>
                  <li>RAG platforms, embeddings, vector DB tuning</li>
                  <li>Privacy-by-design, PII redaction, governance</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                <h3 className="text-xl font-semibold text-white mb-3">Cloud & Platform</h3>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>FinOps savings, rightsizing, budgets and alerts</li>
                  <li>API security, WAF, schema, and auth hardening</li>
                  <li>Observability, SLOs, on-call automation</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Benchmark With Market Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingRefs.map((group) => (
                <div key={group.title} className="p-6 rounded-2xl bg-black/40 border border-cyan-500/30">
                  <h3 className="text-xl font-semibold text-white mb-3">{group.title}</h3>
                  <ul className="text-slate-300 space-y-1">
                    {group.links.map((l) => (
                      <li key={l.href}><a className="text-cyan-400 underline" href={l.href} target="_blank" rel="noopener noreferrer">{l.name}: {new URL(l.href).hostname + new URL(l.href).pathname}</a></li>
                    ))}
                  </ul>
                  <div className="text-sm text-slate-400 mt-3">{group.note}</div>
                </div>
              ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href={`tel:${contact.mobile.replace(/[^+\d]/g, '')}`} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-200">{contact.mobile}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-purple-500/40 flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-200">{contact.email}</span>
              </a>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-emerald-500/40 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-200 text-sm">{contact.address}</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}