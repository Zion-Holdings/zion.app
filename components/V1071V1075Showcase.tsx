'use client';

import { useState } from 'react';

export default function V1071V1075Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);

  const engines = [
    {
      version: 'V1071',
      name: 'Email Intent Classifier',
      icon: '🎯',
      description: 'Automatically classify email intent and route to appropriate teams with priority scoring and smart recommendations.',
      features: [
        '8 intent categories (question, request, complaint, feedback, inquiry, support, cancellation, order)',
        'Priority-based routing (urgent, high, medium, low)',
        'Confidence scoring with keyword matching',
        'Automatic team assignment',
        'SLA enforcement and escalation',
        'Intent-specific response templates'
      ],
      price: '$499/month',
      useCase: 'Customer support teams routing 1000+ emails daily to appropriate departments'
    },
    {
      version: 'V1072',
      name: 'Meeting Scheduler AI',
      icon: '📅',
      description: 'Parse meeting requests from emails and automatically schedule meetings with calendar integration and timezone coordination.',
      features: [
        'Natural language time extraction',
        'Multi-timezone coordination',
        'Calendar conflict detection',
        'Automatic attendee detection',
        'Smart duration estimation',
        'Calendar invite generation'
      ],
      price: '$599/month',
      useCase: 'Sales teams scheduling 50+ client meetings per week across multiple timezones'
    },
    {
      version: 'V1073',
      name: 'Email Summarizer Pro',
      icon: '📝',
      description: 'Generate concise summaries of long email threads with key points, action items, deadlines, and executive briefs.',
      features: [
        'Thread summarization with key sentences',
        'Action item extraction',
        'Deadline and decision detection',
        'Question identification',
        'Executive brief generation',
        'Reading time estimation'
      ],
      price: '$449/month',
      useCase: 'Executives managing 200+ emails daily needing quick context and action items'
    },
    {
      version: 'V1074',
      name: 'Customer Journey Mapper',
      icon: '🗺️',
      description: 'Track and analyze customer email interactions across their journey. Identify stages, predict next steps, and optimize experiences.',
      features: [
        '8 journey stage detection (awareness to churn risk)',
        'Engagement scoring (0-100)',
        'Pain point identification',
        'Journey progression tracking',
        'Next stage prediction',
        'Churn risk alerts'
      ],
      price: '$699/month',
      useCase: 'Customer success teams managing 500+ accounts and preventing churn'
    },
    {
      version: 'V1075',
      name: 'Email A/B Testing Platform',
      icon: '🧪',
      description: 'Create and analyze A/B tests for email campaigns with statistical significance and automated winner selection.',
      features: [
        'Multi-variant testing (4+ variants)',
        'Statistical significance calculation (95% confidence)',
        'Automatic audience splitting',
        'Performance metric tracking',
        'Sample size calculator',
        'Winner auto-selection'
      ],
      price: '$549/month',
      useCase: 'Marketing teams optimizing email campaigns for 10,000+ subscribers'
    }
  ];

  const engine = engines[activeEngine];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            V1071-V1075: Next-Gen Email Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five cutting-edge engines that transform email communication with AI-powered intent classification,
            smart scheduling, intelligent summarization, journey mapping, and A/B testing.
          </p>
          <div className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold">
            1,075 Total Engines • 5,205 Services • Reply-All Enforced
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
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl scale-105'
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
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-6xl">{engine.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-mono text-purple-300">{engine.version}</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">LIVE</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{engine.name}</h3>
                <p className="text-gray-300 text-lg">{engine.description}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">Starting at</div>
                <div className="text-3xl font-bold text-white">{engine.price}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span>⚡</span> Key Features
                </h4>
                <ul className="space-y-3">
                  {engine.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span>🎯</span> Primary Use Case
                </h4>
                <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
                  <p className="text-gray-300">{engine.useCase}</p>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span>👥</span> Reply-All Enforcement
                  </h4>
                  <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
                    <p className="text-gray-300 text-sm">
                      All engines automatically enforce reply-all for multi-recipient emails, ensuring all stakeholders stay informed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Inquiry: ${engine.name}"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Started with {engine.version} →
              </a>
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
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Email Workflow?</h3>
            <p className="text-gray-300 mb-6">
              Contact Zion Tech Group for personalized demos and enterprise pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <a href="tel:+13024640950" className="flex items-center gap-2 hover:text-white transition-colors">
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
