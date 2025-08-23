import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { Bot, CheckCircle, Zap, Shield, Network, Workflow, DollarSign, ExternalLink, Phone, Mail, MapPin } from 'lucide-react';

export default function AIAssistantPage() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    'Multi-agent orchestration (task, tool, memory roles)',
    'Guardrails for PII, jailbreaks, and policy compliance',
    'Human-in-the-loop review queues and approvals',
    'Evaluation harness with regression suites and metrics',
    'Observability: traces, costs, latencies, prompt versions',
    'Integrations: Slack, Zendesk, Notion, Google Drive, Jira',
  ];

  const plans = [
    { name: 'Starter', price: '$1,499', period: '/month', includes: ['Single agent', 'Basic guardrails', 'Email support'] },
    { name: 'Growth', price: '$2,999', period: '/month', includes: ['Multi-agent', 'Advanced guardrails', 'Slack support', 'Eval suites'] },
    { name: 'Enterprise', price: 'Custom', period: '', includes: ['SAML/SCIM', 'VPC deployment', '24/7 support', 'Custom tooling'] },
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>AI Agent Orchestrator | Zion Tech Group</title>
        <meta name="description" content="Production-ready AI agent orchestration with guardrails, observability, and human-in-the-loop. Ship reliable assistants fast." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-assistant" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Hero */}
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">AI Agent Orchestrator</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Design, evaluate, and operate reliable AI assistants with enterprise guardrails, HITL, and full observability.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Talk to Sales</Button>
              <Button href="/market-pricing" variant="outline" className="px-8 py-4 border border-gray-600 text-gray-200">See Market Pricing</Button>
            </div>
          </header>

          {/* Value props */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{icon: <Zap className="w-5 h-5" />, title: 'Ship Faster', desc: 'Blueprints and evals help you move from idea to production quickly.'}, {icon: <Shield className="w-5 h-5" />, title: 'Trust & Safety', desc: 'Guardrails, redaction, and HITL ensure compliant outcomes.'}, {icon: <Workflow className="w-5 h-5" />, title: 'Operate Reliably', desc: 'Full telemetry and cost controls to prevent surprises.'}].map((i) => (
                <div key={i.title} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <div className="flex items-center gap-3 text-cyan-300 mb-2">{i.icon}<span className="font-semibold">{i.title}</span></div>
                  <p className="text-gray-300 text-sm">{i.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{f}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Plans */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Plans & Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((p) => (
                <div key={p.name} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <div className="text-gray-400 text-sm mb-1">{p.name}</div>
                  <div className="text-3xl font-bold text-white">{p.price}<span className="text-base text-gray-400">{p.period}</span></div>
                  <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                    {p.includes.map((i) => <li key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />{i}</li>)}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <Button href="/contact" className="flex-1">Contact Sales</Button>
                    <Button href="/services" variant="outline" className="flex-1">Explore More</Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
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