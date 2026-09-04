'use client';
import React, { useState } from 'react';

const engines = [
  {
    version: 'V1036', name: 'AI Email Negotiation Coach', icon: '🤝',
    description: 'Real-time AI coaching during email negotiations with deal stage detection, pricing signal analysis, and counterpart strategy identification',
    features: ['Deal stage detection (discovery→closing)', 'Pricing signal analysis', 'Counterpart strategy detection (anchoring, ultimatum)', 'Response coaching with ROI justification', 'Competitor mention alerts', 'Deadline pressure detection', 'Risk scoring & opportunity identification', 'Mandatory reply-all enforcement'],
    benefit: 'Win more deals', price: '$149/mo', color: 'from-amber-500 to-orange-500'
  },
  {
    version: 'V1037', name: 'Email-to-CRM Auto-Sync', icon: '🔗',
    description: 'Bidirectional sync between email and CRM with auto-enrichment, intent classification, deal signal extraction, and interaction logging',
    features: ['Contact auto-enrichment', 'Intent classification (purchase/support/churn)', 'Deal signal extraction (budget/timeline/decision-maker)', 'Sentiment tracking per interaction', 'CRM action automation', 'Salesforce/HubSpot/Pipedrive integration', 'Churn risk flagging', 'Reply-all metadata preservation'],
    benefit: 'Zero manual CRM entry', price: '$99/mo', color: 'from-cyan-500 to-blue-500'
  },
  {
    version: 'V1038', name: 'AI Thread Summarizer Pro', icon: '📋',
    description: 'Compresses 50+ reply email chains into structured summaries with decisions, action items, questions, and thread health assessment',
    features: ['Long thread compression (50+ emails)', 'Decision extraction engine', 'Action item detection', 'Open question identification', 'Timeline generation', 'Sentiment trend tracking', 'Thread health scoring', 'Executive summary generation'],
    benefit: 'Hours saved per week', price: '$69/mo', color: 'from-emerald-500 to-teal-500'
  },
  {
    version: 'V1039', name: 'Predictive Email Response Engine', icon: '🔮',
    description: 'Learns from historical reply patterns to auto-draft optimal responses with predicted tone, length, CTA, and best send time',
    features: ['Pattern learning from past replies', 'Auto-draft generation', 'Tone prediction (formal/casual/empathetic)', 'Optimal send time prediction', 'Follow-up scheduling', 'Success rate tracking (95%+)', 'Personalization engine', 'Mandatory reply-all enforcement'],
    benefit: 'Faster, better replies', price: '$119/mo', color: 'from-violet-500 to-purple-500'
  },
  {
    version: 'V1040', name: 'Email Compliance Audit Trail', icon: '🔍',
    description: 'Automated regulatory compliance tracking for HIPAA, GDPR, SOX, SOC2, PCI-DSS with real-time PII detection and tamper-proof audit logging',
    features: ['Multi-regulation compliance (6 frameworks)', 'PII/PHI/SSN detection', 'Credit card data scanning', 'Tamper-proof SHA-256 audit log', 'Retention policy management', 'Audit-ready report generation', 'Consent tracking', 'Reply-all for audit integrity'],
    benefit: 'Audit-ready always', price: '$199/mo', color: 'from-rose-500 to-red-500'
  }
];

export default function V1036V1040Showcase() {
  const [active, setActive] = useState(0);
  const e = engines[active];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-400">New • V1036–V1040</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">
            Email Intelligence Suite — Negotiation, CRM, Threads, Prediction & Compliance
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Five groundbreaking engines that transform email into your most powerful business tool.
            <strong> 1,040+ engines</strong> powering 5,030+ services worldwide.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {engines.map((eng, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${active === i ? `bg-gradient-to-r ${eng.color} text-white shadow-lg scale-105` : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
              {eng.icon} {eng.version}
            </button>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-5xl">{e.icon}</span>
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold text-white">{e.name}</h3>
              <p className="text-indigo-300">{e.version} • {e.price}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${e.color} text-white`}>{e.benefit}</span>
          </div>
          <p className="text-slate-300 mb-6 text-lg">{e.description}</p>
          <div className="grid md:grid-cols-2 gap-3">
            {e.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-slate-200">{f}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg">
            <p className="text-yellow-300 font-semibold">
              🔒 Reply-All Enforcement: Every engine strictly enforces reply-all for multi-recipient emails.
              Case-by-case analysis ensures the most appropriate action for every email.
            </p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Supercharge Your Email Intelligence?</h3>
          <p className="text-indigo-100 mb-6">Join 10,000+ businesses using Zion Tech Group&apos;s 1,040+ AI email engines</p>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <a href="tel:+13024640950" className="hover:text-indigo-200 transition">📱 +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="hover:text-indigo-200 transition">✉️ kleber@ziontechgroup.com</a>
            <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
          </div>
        </div>
      </div>
    </section>
  );
}
