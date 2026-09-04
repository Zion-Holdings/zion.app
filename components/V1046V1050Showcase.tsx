'use client';

import { useState } from 'react';

const engines = [
  {
    version: 'V1046',
    name: 'AI Email Tone Adapter',
    icon: '🎭',
    color: 'from-purple-500 to-pink-500',
    features: ['Real-time tone analysis', 'Recipient seniority detection', 'Cultural context adaptation', 'Relationship history tracking'],
    price: '$199/month',
    useCase: 'Automatically adjusts email tone based on recipient seniority, relationship history, and cultural context'
  },
  {
    version: 'V1047',
    name: 'Email Revenue Attribution',
    icon: '💰',
    color: 'from-green-500 to-emerald-500',
    features: ['Revenue signal detection', 'Pipeline stage tracking', 'Deal value extraction', 'Close probability prediction'],
    price: '$599/month',
    useCase: 'Track which emails lead to closed deals, renewals, and upsells'
  },
  {
    version: 'V1048',
    name: 'AI Crisis Detection System',
    icon: '🚨',
    color: 'from-red-500 to-orange-500',
    features: ['Real-time crisis detection', 'Multi-category risk analysis', 'Auto-escalation workflows', 'Response strategy generation'],
    price: '$799/month',
    useCase: 'Detect emerging PR crises, customer escalations, and legal risks in real-time'
  },
  {
    version: 'V1049',
    name: 'Email-to-Project Auto-Creator',
    icon: '📋',
    color: 'from-blue-500 to-cyan-500',
    features: ['Task extraction from emails', 'Deadline detection', 'Assignee identification', 'Multi-platform integration'],
    price: '$349/month',
    useCase: 'Parse project requirements from emails and auto-create tasks in Jira/Asana/Linear'
  },
  {
    version: 'V1050',
    name: 'AI Email Localization Engine',
    icon: '🌐',
    color: 'from-indigo-500 to-purple-500',
    features: ['50+ language support', 'Tone-preserving translation', 'Cultural adaptation', 'Quality scoring'],
    price: '$449/month',
    useCase: 'Auto-translate emails while preserving tone, idioms, and business context'
  }
];

export default function V1046V1050Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);
  const current = engines[activeEngine];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-semibold mb-4">
            V1046-V1050 • 5 NEW ENGINES • 25 NEW SERVICES
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Next-Gen Email Intelligence Suite
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From tone adaptation to crisis detection, revenue attribution to project automation, 
            and 50+ language localization — all with mandatory reply-all enforcement.
          </p>
        </div>

        {/* Engine Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {engines.map((engine, idx) => (
            <button
              key={engine.version}
              onClick={() => setActiveEngine(idx)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeEngine === idx
                  ? `bg-gradient-to-r ${engine.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{engine.icon}</span>
              {engine.version}
            </button>
          ))}
        </div>

        {/* Active Engine Display */}
        <div className="max-w-5xl mx-auto">
          <div className={`bg-gradient-to-r ${current.color} rounded-3xl p-1 shadow-2xl`}>
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Icon & Title */}
                <div className="flex-shrink-0">
                  <div className={`w-24 h-24 bg-gradient-to-br ${current.color} rounded-2xl flex items-center justify-center text-5xl shadow-lg`}>
                    {current.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-mono text-gray-400">{current.version}</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">LIVE</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">{current.name}</h3>
                  <p className="text-gray-300 text-lg mb-6">{current.useCase}</p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {current.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-3xl font-bold text-white">{current.price}</div>
                      <div className="text-sm text-gray-400">per organization/month</div>
                    </div>
                    <a
                      href="mailto:kleber@ziontechgroup.com?subject=Inquiry: ${current.name}"
                      className={`px-8 py-3 bg-gradient-to-r ${current.color} text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg`}
                    >
                      Get Started →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 max-w-5xl mx-auto">
          {engines.map((engine) => (
            <div key={engine.version} className="bg-white/5 backdrop-blur rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl mb-2">{engine.icon}</div>
              <div className="text-sm font-semibold text-white">{engine.version}</div>
              <div className="text-xs text-gray-400 mt-1">{engine.price}</div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <h4 className="text-xl font-bold text-white mb-4">Ready to Transform Your Email Workflow?</h4>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <a href="tel:+13024640950" className="flex items-center gap-2 hover:text-white transition">
                <span>📱</span> +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 hover:text-white transition">
                <span>✉️</span> kleber@ziontechgroup.com
              </a>
              <div className="flex items-center gap-2">
                <span>📍</span> 364 E Main St STE 1008, Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
