import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
'use client';

import Link from 'next/link';
import { useState } from 'react';

const SERVICES = [
  {
    id: 'ai-analytics',
    title: 'AI Analytics Platform',
    desc: 'Predictive BI dashboards, anomaly detection, and automated insight generation.',
    icon: '📊',
  },
  {
    id: 'ai-chatbot-builder-pro',
    title: 'AI Chatbot Builder Pro',
    desc: 'Conversational AI with RAG, handoff to humans, and multi-channel deployment.',
    icon: '💬',
  },
  {
    id: 'ai-code-assistant-enterprise',
    title: 'Enterprise Code Assistant',
    desc: 'AI pair-programming, automated reviews, and secure code-generation guardrails.',
    icon: '🧑‍💻',
  },
  {
    id: 'ai-customer-support',
    title: 'Customer Support AI',
    desc: 'Ticket triage, auto-responses, and knowledge-base automation for support teams.',
    icon: '🎧',
  },
  {
    id: 'ai-knowledge-graph',
    title: 'Knowledge Graph Builder',
    desc: 'Entity resolution, relationship mapping, and semantic search across enterprise data.',
    icon: '🕸️',
  },
  {
    id: 'ai-meeting-assistant-pro',
    title: 'Meeting Assistant Pro',
    desc: 'Transcription, summaries, action-item extraction, and CRM auto-updates.',
    icon: '📝',
  },
  {
    id: 'ai-voice-agent-platform',
    title: 'Voice Agent Platform',
    desc: 'IVR replacement, voice analytics, and multilingual support automation.',
    icon: '🎙️',
  },
  {
    id: 'ai-agentic-workflows',
    title: 'Agentic Workflows',
    desc: 'Multi-step autonomous agents for operations, approvals, and business processes.',
    icon: '⚡',
  },
];

export default function AIServicesPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-6xl mb-4 block">🤖</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Services</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-6">Applied AI capabilities built for enterprise scale, governance, and measurable ROI.</p>
          <Link href="/configurator/" className="btn-primary text-lg px-10 py-4 inline-block">⚡ Get Your Custom Proposal →</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.id} className="glass-card">
              <span className="text-3xl block mb-3">{s.icon}</span>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  
      <Footer />
    </div>);
}
