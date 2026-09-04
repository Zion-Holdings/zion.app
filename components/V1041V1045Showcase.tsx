'use client';

import { useState } from 'react';

const engines = [
  {
    version: 'V1041',
    name: 'AI Sentiment Evolution Tracker',
    icon: '📈',
    description: 'Track sentiment changes across email threads over time. Detect relationship deterioration early.',
    features: ['Real-time sentiment scoring', 'Thread trend analysis', 'Account health monitoring', 'Deterioration alerts', 'Weekly reports', 'Contact risk scoring'],
    price: '$299/mo',
    color: 'from-green-500 to-emerald-600'
  },
  {
    version: 'V1042',
    name: 'Email Response Time Optimizer',
    icon: '⏱️',
    description: 'Intelligently prioritize inbox based on sender importance, urgency, and SLA requirements.',
    features: ['Smart inbox prioritization', 'SLA deadline tracking', 'Auto-acknowledgment', 'Response analytics', 'Sender tier classification', 'Optimal timing'],
    price: '$249/mo',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    version: 'V1043',
    name: 'AI Attachment Intelligence',
    icon: '🔐',
    description: 'Scan attachments for sensitive data, detect missing files, and convert large files to secure links.',
    features: ['PII/credential scanning', 'Missing attachment detection', 'File risk assessment', 'Security scoring', 'Auto-summarization', 'Secure file sharing'],
    price: '$449/mo',
    color: 'from-red-500 to-orange-600'
  },
  {
    version: 'V1044',
    name: 'Email Meeting Scheduler Pro',
    icon: '📅',
    description: 'Parse meeting requests, find optimal times across timezones, and generate agendas automatically.',
    features: ['Multi-timezone coordination', 'Smart slot recommendations', 'Auto agenda generation', 'Calendar conflict detection', 'Meeting link generation', 'Follow-up automation'],
    price: '$249/mo',
    color: 'from-purple-500 to-violet-600'
  },
  {
    version: 'V1045',
    name: 'AI Knowledge Graph Builder',
    icon: '🕸️',
    description: 'Build organizational knowledge graphs from emails. Extract entities, relationships, and decisions.',
    features: ['Entity extraction', 'Relationship mapping', 'Decision tracking', 'Knowledge gap detection', 'Semantic search', 'Auto documentation'],
    price: '$599/mo',
    color: 'from-amber-500 to-yellow-600'
  }
];

export default function V1041V1045Showcase() {
  const [selectedEngine, setSelectedEngine] = useState(0);
  const engine = engines[selectedEngine];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-semibold rounded-full mb-4">
            🚀 V1041–V1045 • 5 NEW AI EMAIL ENGINES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Next-Gen Email Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Case-by-case analysis • Reply-all enforcement • 1,045 total engines powering smarter business communications
          </p>
        </div>

        {/* Engine Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {engines.map((e, i) => (
            <button
              key={e.version}
              onClick={() => setSelectedEngine(i)}
              className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedEngine === i
                  ? `bg-gradient-to-r ${e.color} text-white shadow-lg scale-105`
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="text-2xl mr-2">{e.icon}</span>
              {e.version}
            </button>
          ))}
        </div>

        {/* Selected Engine Detail */}
        <div className={`bg-gradient-to-br ${engine.color} rounded-2xl p-1 mb-10`}>
          <div className="bg-gray-900 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{engine.icon}</span>
                  <div>
                    <span className="text-sm text-gray-400 font-mono">{engine.version}</span>
                    <h3 className="text-2xl font-bold text-white">{engine.name}</h3>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-6">{engine.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {engine.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 text-center min-w-[200px]">
                <div className="text-sm text-gray-400 mb-1">Starting at</div>
                <div className="text-3xl font-bold text-white mb-3">{engine.price}</div>
                <div className="text-xs text-gray-500 mb-4">per user/month</div>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Inquiry: ${engine.name}"
                  className="block w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Started →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="text-white font-semibold mb-2">Case-by-Case Analysis</h4>
            <p className="text-gray-400 text-sm">Every email is analyzed individually for context, urgency, sentiment, and appropriate action.</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-3">👥</div>
            <h4 className="text-white font-semibold mb-2">Reply-All Enforcement</h4>
            <p className="text-gray-400 text-sm">Mandatory reply-all for multi-recipient emails. Never accidentally leave someone out again.</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-3">🔒</div>
            <h4 className="text-white font-semibold mb-2">Enterprise Security</h4>
            <p className="text-gray-400 text-sm">PII detection, DLP scanning, encrypted audit trails, and compliance monitoring built-in.</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Email Workflow?</h3>
          <p className="text-gray-300 mb-6">Contact Zion Tech Group for a personalized demo and pricing.</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <a href="tel:+13024640950" className="flex items-center gap-2 hover:text-white transition-colors">
              <span>📱</span> +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <span>✉️</span> kleber@ziontechgroup.com
            </a>
            <span className="flex items-center gap-2">
              <span>📍</span> 364 E Main St STE 1008, Middletown DE 19709
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
