'use client';

import { useState } from 'react';

const engines = [
  {
    version: 'V1091',
    name: 'Tone Adaptation Engine',
    icon: '🎭',
    description: 'Automatically adapt email tone based on recipient relationship and context',
    features: ['Relationship-based tone detection', 'Formality level analysis', 'Cultural sensitivity checks', 'Tone consistency scoring'],
    price: '$549/mo',
    color: 'from-purple-500 to-pink-500'
  },
  {
    version: 'V1092',
    name: 'Priority Intelligence',
    icon: '⚡',
    description: 'AI-powered email priority scoring with automatic inbox organization',
    features: ['Multi-factor priority scoring', 'Smart notifications', 'Urgency detection', 'Automatic organization'],
    price: '$499/mo',
    color: 'from-orange-500 to-red-500'
  },
  {
    version: 'V1093',
    name: 'Knowledge Extractor',
    icon: '🧠',
    description: 'Extract structured knowledge and build knowledge graphs automatically',
    features: ['Entity extraction', 'Relationship mapping', 'Knowledge graph building', 'Fact extraction'],
    price: '$599/mo',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    version: 'V1094',
    name: 'Compliance Guardian',
    icon: '⚖️',
    description: 'Real-time compliance checking for GDPR, HIPAA, SOX, and PCI-DSS',
    features: ['Multi-regulation support', 'Sensitive data detection', 'Audit trail generation', 'Compliance scoring'],
    price: '$699/mo',
    color: 'from-green-500 to-emerald-500'
  },
  {
    version: 'V1095',
    name: 'Collaboration Hub',
    icon: '🤝',
    description: 'Team email collaboration with shared inbox management and task assignment',
    features: ['Shared inbox management', 'Internal comments', 'Task assignment', 'Collaboration workflows'],
    price: '$579/mo',
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function V1091V1095Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);
  const engine = engines[activeEngine];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            V1091-V1095: Intelligence & Collaboration Suite
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Five advanced engines for tone adaptation, priority intelligence, knowledge extraction,
            compliance management, and team collaboration - all with reply-all enforcement.
          </p>
          <div className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold">
            5,305 Services • 1,095 Engines • Reply-All Enforced
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
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">LIVE</span>
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

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Reply-All Enforcement</h4>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <p className="text-blue-300 text-sm">
                        ✓ All engines automatically enforce reply-all for multi-recipient emails,
                        ensuring all stakeholders stay informed and no one is accidentally left out.
                      </p>
                    </div>
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

        {/* Use Cases */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Enterprise Use Cases</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg font-bold text-white mb-2">Executive Communications</h4>
              <p className="text-gray-400 text-sm">
                Adapt tone for C-suite communications, ensure compliance with regulations,
                and maintain consistent professionalism across all executive correspondence.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="text-lg font-bold text-white mb-2">Compliance-Heavy Industries</h4>
              <p className="text-gray-400 text-sm">
                Healthcare, finance, and legal organizations benefit from automated compliance
                checking, sensitive data detection, and comprehensive audit trails.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl mb-3">👥</div>
              <h4 className="text-lg font-bold text-white mb-2">Large Teams</h4>
              <p className="text-gray-400 text-sm">
                Coordinate across departments with shared inboxes, internal comments,
                task assignment, and collaborative workflows for efficient team communication.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Enhance Your Email Intelligence?</h3>
            <p className="text-purple-200 mb-6">
              Contact Zion Tech Group for personalized demos and enterprise pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <a href="tel:+13024640" className="flex items-center gap-2 hover:text-white transition-colors">
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
