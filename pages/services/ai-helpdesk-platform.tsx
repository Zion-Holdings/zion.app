import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, Headphones, Bot, Clock, Shield, Zap, DollarSign, BookOpen } from 'lucide-react';

export default function AIHelpdeskPlatformPage() {
  return (
    <>
      <Head>
        <title>AI Helpdesk Platform | 24/7 Customer Support Automation</title>
        <meta name="description" content="AI-powered helpdesk with chatbots, ticketing, knowledge base and human handoff. Reduce costs and improve CSAT with 24/7 automated support." />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-helpdesk-platform" />
      </Head>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Helpdesk Platform</h1>
            <p className="mt-6 text-gray-300 text-lg">Automate tier-1 support with AI chat, ticket routing, and a living knowledge base. Seamless human handoff when needed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Bot className="w-6 h-6" />, title: 'AI Chat & Email', desc: 'Omnichannel chatbot and email triage with intent detection.' },
              { icon: <Headphones className="w-6 h-6" />, title: 'Agent Assist', desc: 'Suggested replies and next-best-actions for agents.' },
              { icon: <Shield className="w-6 h-6" />, title: 'Secure & Compliant', desc: 'Role-based access, PII redaction, SOC2-ready patterns.' },
              { icon: <Clock className="w-6 h-6" />, title: '24/7 Coverage', desc: 'Always-on responses with escalation paths.' },
              { icon: <Zap className="w-6 h-6" />, title: 'Automation', desc: 'Auto-close, SLA timers, macros, and workflow builders.' },
              { icon: <BookOpen className="w-6 h-6" />, title: 'Knowledge Base', desc: 'Self-updating KB from resolved tickets and docs.' }
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-900/70 border border-gray-800/70">
                <div className="text-cyan-400 mb-3">{f.icon}</div>
                <div className="font-semibold text-white">{f.title}</div>
                <div className="text-gray-400 text-sm mt-1">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-gray-900/70 border border-gray-800/70">
              <h2 className="text-2xl font-bold text-white mb-4">Benefits</h2>
              <ul className="space-y-3">
                {[
                  'Deflect 30-60% of tickets with AI-first resolution',
                  'Improve CSAT with instant answers and faster handoffs',
                  'Lower support costs by 20-40% through automation',
                  'Gain insights with topic trends and satisfaction analytics'
                ].map((b) => (
                  <li className="flex items-start gap-3" key={b}>
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                    <span className="text-gray-300">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gray-900/70 border border-gray-800/70">
              <h2 className="text-2xl font-bold text-white mb-4">Pricing (avg. market)</h2>
              <div className="text-gray-300 space-y-3">
                <div className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-cyan-400" /> SMB: $300–$800/mo + $0.02–$0.10/msg</div>
                <div className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-cyan-400" /> Mid-Market: $1,000–$3,000/mo + usage</div>
                <div className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-cyan-400" /> Enterprise: custom + SSO/SLA/compliance</div>
              </div>
              <p className="text-sm text-gray-500 mt-4">Benchmarks: <a className="text-cyan-400 hover:underline" href="https://www.zendesk.com/pricing/" target="_blank" rel="noopener noreferrer">Zendesk Pricing</a>, <a className="text-cyan-400 hover:underline" href="https://www.intercom.com/pricing" target="_blank" rel="noopener noreferrer">Intercom Pricing</a>, <a className="text-cyan-400 hover:underline" href="https://www.gorgias.com/pricing" target="_blank" rel="noopener noreferrer">Gorgias Pricing</a>.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">Talk to Sales</Link>
            <Link href="/pricing" className="px-6 py-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700">View Pricing</Link>
            <a href="https://support.google.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700">See KB examples</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 text-sm text-gray-400">
          <div>Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709</div>
        </div>
      </section>
    </>
  );
}