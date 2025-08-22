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
    'Proven architectures and reference implementations'
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
        { name: 'OpenRouter', href: 'https://openrouter.ai/models' },
        { name: 'Weights & Biases', href: 'https://wandb.ai/site/pricing' },
        { name: 'Humanloop', href: 'https://humanloop.com/pricing' }
      ],
      note: 'SMB budgets: $100–$2,000/mo.'
    },
    {
      title: 'Security & Compliance',
      links: [
        { name: 'Wiz', href: 'https://www.wiz.io/pricing' },
        { name: 'Prisma Cloud', href: 'https://www.paloaltonetworks.com/prisma/cloud/pricing' },
        { name: 'HashiCorp Vault', href: 'https://www.hashicorp.com/products/vault/pricing' },
        { name: 'Cloudflare Zero Trust', href: 'https://www.cloudflare.com/products/zero-trust/pricing/' },
        { name: 'Snyk', href: 'https://snyk.io/plans/' }
      ],
      note: 'SMB budgets: $200–$5,000/mo.'
    },
    {
      title: 'Vector & Search',
      links: [
        { name: 'Pinecone', href: 'https://www.pinecone.io/pricing/' },
        { name: 'Weaviate', href: 'https://weaviate.io/pricing' },
        { name: 'Qdrant', href: 'https://qdrant.tech/pricing/' },
        { name: 'Elasticsearch Serverless', href: 'https://www.elastic.co/pricing/' }
      ],
      note: 'SMB budgets: $50–$1,000/mo.'
    },
    {
      title: 'Cloud & Edge',
      links: [
        { name: 'AWS Calculator', href: 'https://calculator.aws' },
        { name: 'Azure', href: 'https://azure.microsoft.com/pricing' },
        { name: 'Cloudflare', href: 'https://www.cloudflare.com/plans/' },
        { name: 'Netlify', href: 'https://www.netlify.com/pricing/' },
        { name: 'Vercel', href: 'https://vercel.com/pricing' }
      ],
      note: 'SMB budgets: $200–$10,000/mo.'
    },
    {
      title: 'Observability & SRE',
      links: [
        { name: 'Datadog', href: 'https://www.datadoghq.com/pricing/' },
        { name: 'New Relic', href: 'https://newrelic.com/pricing' },
        { name: 'Grafana Cloud', href: 'https://grafana.com/products/cloud/pricing/' },
        { name: 'PagerDuty', href: 'https://www.pagerduty.com/pricing/' }
      ],
      note: 'SMB budgets: $100–$3,000/mo.'
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="high" 
      colorScheme="quantum-fusion"
      particleCount={300}
      animationSpeed={1.5}
      enableHolographic={true}
      enableQuantumEffects={true}
    >
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
                { name: 'Edge Orchestration', price: '$3,499/mo', href: '/edge-computing-orchestration' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">New in Q2 2025</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'AI Sales Playbook Generator', price: '$99/mo', href: '/services/ai-sales-playbook-generator' },
                { name: 'Customer Journey Analytics Starter', price: '$79/mo', href: '/services/customer-journey-analytics-starter' },
                { name: 'Incident Postmortem AI Scribe', price: '$39/mo', href: '/services/incident-postmortem-ai-scribe' },
                { name: 'SLO Burn Rate Coach', price: '$49/mo', href: '/services/slo-burn-rate-coach' },
                { name: 'API Changelog & SDK Publisher', price: '$59/mo', href: '/services/api-changelog-sdk-publisher' },
                { name: 'Browser Performance Optimizer', price: '$69/mo', href: '/services/browser-performance-optimizer' },
                { name: 'Secret Rotation Orchestrator', price: '$129/mo', href: '/services/secret-rotation-orchestrator' },
                { name: 'SaaS Billing Anomaly Guard', price: '$119/mo', href: '/services/saas-billing-anomaly-guard' },
                { name: 'ML Feature Store Starter', price: '$149/mo', href: '/services/ml-feature-store-starter' },
                { name: 'Edge Cron Orchestrator', price: '$59/mo', href: '/services/edge-cron-orchestrator' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">New in Q4 2025</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'AI Governance & Control Center', price: '$399/mo', href: '/services/ai-governance-control-center' },
                { name: 'Cloud Cost Governance Suite', price: '$499/mo', href: '/services/cloud-cost-governance-suite' },
                { name: 'Customer Feedback Intelligence', price: '$149/mo', href: '/services/customer-feedback-intelligence' },
                { name: 'API Security Posture Monitor', price: '$299/mo', href: '/services/api-security-posture-monitor' },
                { name: 'Incident Copilot Automation', price: '$129/mo', href: '/services/incident-copilot-automation' },
                { name: 'LLM Eval & Regression Lab', price: '$199/mo', href: '/services/llm-eval-and-regression-lab' },
                { name: 'Managed Feature Flags @ Edge', price: '$79/mo', href: '/services/managed-feature-flags-edge' },
                { name: 'AI Sales Assistant Outreach', price: '$249/mo', href: '/services/ai-sales-assistant-outreach' },
                { name: 'SSO & User Lifecycle Hub', price: '$229/mo', href: '/services/sso-and-user-lifecycle-hub' },
                { name: 'AI Marketing Content Studio', price: '$119/mo', href: '/services/ai-marketing-content-studio' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Strategic Platforms</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-6">High-impact solutions that drive measurable outcomes. Average prices reflect typical mid-market deployments; final quotes vary by scope and integrations.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[ 
                { name: 'Zero Trust Security Platform', price: '$4,999/mo', benefit: 'Identity-aware access and micro-segmentation', href: '/zero-trust-security-platform' },
                { name: 'AI-Powered DevOps Platform', price: '$899/mo', benefit: 'AI-assisted CI/CD and safer releases', href: '/ai-powered-devops-platform' },
                { name: 'Edge Computing Orchestration', price: '$3,499/mo', benefit: 'Fleet management and policy at the edge', href: '/edge-computing-orchestration-platform' },
                { name: 'Quantum-Secure Cloud Infrastructure', price: '$5,999/mo', benefit: 'PQC-ready encryption and KMS', href: '/quantum-secure-cloud-infrastructure' },
                { name: 'AI-Powered Cybersecurity', price: '$2,999/mo', benefit: 'Threat detection and SOAR automation', href: '/ai-powered-cybersecurity' },
                { name: 'Brain-Computer Interface Platform', price: '$9,999/mo', benefit: 'Neural decoding toolkits and safety', href: '/brain-computer-interface-platform' },
                { name: 'AI-Powered Space Technology', price: '$14,999/mo', benefit: 'Autonomous ops and mission planning', href: '/ai-powered-space-technology' }
              ].map((o) => (
                <a key={o.name} href={o.href} className="block p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">From</div>
                      <div className="text-2xl font-bold text-white">{o.price}</div>
                    </div>
                    <div className="text-xs text-emerald-400">{o.benefit}</div>
                  </div>
                  <div className="text-gray-200 mt-2">{o.name}</div>
                </a>
              ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Newest Additions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'API Security Posture Monitor', price: '$299/mo', href: '/services/api-security-posture-monitor' },
                { name: 'Edge Cron Orchestrator', price: '$59/mo', href: '/services/edge-cron-orchestrator' },
                { name: 'SaaS Billing Anomaly Guard', price: '$119/mo', href: '/services/saas-billing-anomaly-guard' },
                { name: 'ML Feature Store Starter', price: '$149/mo', href: '/services/ml-feature-store-starter' },
                { name: 'AI Sales Playbook Generator', price: '$99/mo', href: '/services/ai-sales-playbook-generator' },
                { name: 'Customer Journey Analytics Starter', price: '$79/mo', href: '/services/customer-journey-analytics-starter' },
                { name: 'Incident Postmortem AI Scribe', price: '$39/mo', href: '/services/incident-postmortem-ai-scribe' },
                { name: 'SLO Burn Rate Coach', price: '$49/mo', href: '/services/slo-burn-rate-coach' },
                { name: 'API Changelog & SDK Publisher', price: '$59/mo', href: '/services/api-changelog-sdk-publisher' },
                { name: 'Browser Performance Optimizer', price: '$69/mo', href: '/services/browser-performance-optimizer' },
                { name: 'Secret Rotation Orchestrator', price: '$129/mo', href: '/services/secret-rotation-orchestrator' },
                { name: 'Managed Feature Flags @ Edge', price: '$79/mo', href: '/services/managed-feature-flags-edge' },
                { name: 'AI Governance & Control Center', price: '$399/mo', href: '/services/ai-governance-control-center' },
                { name: 'Cloud Cost Governance Suite', price: '$499/mo', href: '/services/cloud-cost-governance-suite' },
                { name: 'Customer Feedback Intelligence', price: '$149/mo', href: '/services/customer-feedback-intelligence' },
                { name: 'LLM Eval & Regression Lab', price: '$199/mo', href: '/services/llm-eval-and-regression-lab' },
                { name: 'AI Marketing Content Studio', price: '$119/mo', href: '/services/ai-marketing-content-studio' },
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
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-700 text-white">
                Get a Custom Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white">Call: +1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white">Email: kleber@ziontechgroup.com</a>
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