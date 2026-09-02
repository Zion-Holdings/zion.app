'use client';

import { useState } from 'react';

const engines = [
  {
    version: 'V1086',
    name: 'Sentiment Evolution Tracker',
    icon: '📈',
    description: 'Track sentiment changes across email threads over time. Detect deteriorating relationships early and predict churn risk.',
    features: ['Real-time sentiment tracking', 'Trend analysis', 'Churn risk prediction', 'Relationship health scoring', 'Early warning alerts'],
    price: '$599/mo',
    color: 'from-purple-500 to-pink-600'
  },
  {
    version: 'V1087',
    name: 'Response Quality Scorer',
    icon: '🎯',
    description: 'AI-powered scoring of email response quality across clarity, tone, completeness, professionalism, and actionability.',
    features: ['Multi-dimensional scoring', 'Real-time feedback', 'Improvement suggestions', 'Quality benchmarks', 'Strengths identification'],
    price: '$499/mo',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    version: 'V1088',
    name: 'Smart Threading & Context Builder',
    icon: '🧵',
    description: 'Intelligently group related emails across threads and build complete context from fragmented discussions.',
    features: ['Cross-thread grouping', 'Context building', 'Entity extraction', 'Decision tracking', 'Related conversation finder'],
    price: '$529/mo',
    color: 'from-green-500 to-emerald-600'
  },
  {
    version: 'V1089',
    name: 'Productivity Analytics Dashboard',
    icon: '📊',
    description: 'Comprehensive analytics on email productivity. Track response patterns, identify bottlenecks, and optimize workflows.',
    features: ['Response time tracking', 'Inbox health scoring', 'Bottleneck identification', 'Workload analysis', 'Actionable insights'],
    price: '$479/mo',
    color: 'from-orange-500 to-red-600'
  },
  {
    version: 'V1090',
    name: 'Follow-up Automation',
    icon: '🔄',
    description: 'Intelligent follow-up system tracking commitments, deadlines, and unanswered emails with automated reminders.',
    features: ['Commitment tracking', 'Deadline monitoring', 'Auto follow-ups', 'Escalation rules', 'Template generation'],
    price: '$549/mo',
    color: 'from-indigo-500 to-purple-600'
  }
];

export default function V1086V1090Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);
  const engine = engines[activeEngine];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            V1086-V1090: Intelligence & Productivity Suite
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Five advanced engines that track sentiment evolution, ensure quality responses, build conversation context,
            boost productivity, and automate follow-ups.
          </p>
          <div className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold">
            5,280 Services • 1,090 Engines • Reply-All Enforced
          </div>
        </div>

        {/* Engine Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {engines.map((eng, idx) => (
            <button
              key={eng.version}
              onClick={() => setActiveEngine(idx)}
              className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeEngine === idx
                  ? `bg-gradient-to-r ${eng.color} text-white shadow-2xl scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <div className="text-3xl mb-1">{eng.icon}</div>
              <div className="text-sm">{eng.version}</div>
            </button>
          ))}
        </div>

        {/* Active Engine Details */}
        <div className="max-w-5xl mx-auto">
          <div className={`bg-gradient-to-r ${engine.color} rounded-3xl p-[2px] shadow-2xl`}>
            <div className="bg-gray-950 rounded-3xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className={`w-20 h-20 bg-gradient-to-br ${engine.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg mb-4`}>
                    {engine.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-mono text-gray-500">{engine.version}</span>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-300 text-xs rounded-full">LIVE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{engine.name}</h3>
                  <p className="text-gray-400 mb-4">{engine.description}</p>
                  <div className="text-3xl font-bold text-white mb-1">{engine.price}</div>
                  <div className="text-sm text-gray-500 mb-4">per organization/month</div>
                  <a
                    href="mailto:kleber@ziontechgroup.com?subject=Inquiry: ${engine.name}"
                    className={`inline-block px-6 py-3 bg-gradient-to-r ${engine.color} text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg`}
                  >
                    Get Started →
                  </a>
                </div>

                <div className="lg:w-2/3">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {engine.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white/5 rounded-xl p-3 border border-white/5">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 max-w-5xl mx-auto">
          {engines.map((eng, idx) => (
            <div
              key={eng.version}
              onClick={() => setActiveEngine(idx)}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center cursor-pointer transition-all duration-300 ${
                activeEngine === idx
                  ? 'border-2 border-purple-500 scale-105'
                  : 'border border-white/10 hover:border-white/30'
              }`}
            >
              <div className="text-3xl mb-2">{eng.icon}</div>
              <div className="text-sm font-bold text-white">{eng.version}</div>
              <div className="text-xs text-gray-400 mt-1">{eng.price}</div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Enhance Your Email Intelligence?</h3>
            <p className="text-purple-200 mb-6">
              Contact Zion Tech Group for personalized demos and enterprise pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <a href="tel:+130****0950" className="flex items-center gap-2 hover:text-white transition-colors">
                <span>📱</span> +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 hover:text-white transition-colors">
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
