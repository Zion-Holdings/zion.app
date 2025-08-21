import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { Bot, Check, Phone, Mail, MapPin, Shield, BookOpen, Link2, Rocket } from 'lucide-react';

export default function AIAssistantPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const plans = [
    { name: 'Starter', price: '$149/month', items: ['RAG over your docs', 'Website widget', 'Slack/Teams channel', 'Analytics dashboard'] },
    { name: 'Pro', price: '$399/month', items: ['Hybrid search + citations', 'Guardrails & PII redaction', 'Multi-brand support', 'Human handoff + Zendesk'] },
    { name: 'Enterprise', price: 'Custom', items: ['Private VPC deployment', 'SAML/SSO & SCIM', 'Custom tools & connectors', 'SLA-backed support'] },
  ];

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic" intensity={0.9}>
      <Head>
        <title>AI Assistant Pro | Zion Tech Group</title>
        <meta name="description" content="Secure, branded AI copilot with RAG, guardrails, human handoff, and analytics. Cut support tickets by 30–50%." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-assistant" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent flex items-center justify-center gap-3"><Bot className="w-10 h-10" />AI Assistant Pro</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">Branded AI assistant with retrieval over your knowledge, guardrails, analytics, and seamless human handoff.</p>
            <div className="mt-6 flex justify-center gap-3">
              <Button href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl"><Rocket className="w-4 h-4 mr-2" />Request a Demo</Button>
              <Button href="/docs" variant="outline" className="border-gray-600 text-gray-200">Explore Docs</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {plans.map((p) => (
              <div key={p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                <div className="text-cyan-400 font-semibold mb-4">{p.price}</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-400" /> <span>{i}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'RAG with hybrid vector + keyword search and source citations',
                  'Guardrails: jailbreak detection, PII/PHI redaction, safety policies',
                  'Channels: Web widget, Slack, Teams, Intercom/Zendesk handoff',
                  'Analytics: CSAT, containment, topics, latency and cost KPIs',
                ].map((feat) => (
                  <li key={feat} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-cyan-400 mt-0.5" /><span>{feat}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit">
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{contactInfo.address}</span></div>
              </div>
              <div className="mt-4"><Button href="/contact" variant="quantum" size="lg" className="w-full">Talk to an Expert</Button></div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}