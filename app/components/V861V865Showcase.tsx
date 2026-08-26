'use client';

import { useState } from 'react';

export default function V861V865Showcase() {
  const [activeTab, setActiveTab] = useState(0);

  const engines = [
    {
      id: 'v861',
      name: 'V861: Partner & Channel Management',
      icon: '🤝',
      description: 'Partner scoring, deal registration, channel conflict detection, co-marketing optimization, and performance tracking',
      color: 'from-blue-600 to-indigo-600',
      features: [
        'Partner performance scoring across 6 dimensions',
        'Automated deal registration with conflict detection',
        'Channel conflict resolution with mediation',
        'Co-marketing budget allocation and ROI tracking',
        'Partner enablement and certification tracking',
        'Reply-all enforcement for partner communications'
      ]
    },
    {
      id: 'v862',
      name: 'V862: Product Analytics & Feature Adoption',
      icon: '📊',
      description: 'Feature usage tracking, user behavior analysis, retention cohorts, A/B test analysis, and product-led growth metrics',
      color: 'from-green-600 to-emerald-600',
      features: [
        'Feature adoption curve analysis',
        'Retention cohort tracking (D1/D7/D30)',
        'A/B testing with statistical significance',
        'User behavior and funnel analytics',
        'Product-led growth metrics (PLG)',
        'Reply-all enforcement for product decisions'
      ]
    },
    {
      id: 'v863',
      name: 'V863: AI Contract Lifecycle Management',
      icon: '📄',
      description: 'Contract generation, clause extraction, obligation tracking, renewal automation, and risk assessment',
      color: 'from-purple-600 to-violet-600',
      features: [
        'AI-powered contract generation from templates',
        'Clause extraction with risk flagging',
        'Obligation tracking with milestone alerts',
        'Automated renewal management',
        'Contract risk assessment and scoring',
        'Reply-all enforcement for contract communications'
      ]
    },
    {
      id: 'v864',
      name: 'V864: Employee Experience & Engagement',
      icon: '👥',
      description: 'Sentiment analysis, pulse surveys, retention risk scoring, engagement drivers, and culture analytics',
      color: 'from-orange-600 to-red-600',
      features: [
        'Employee sentiment analysis (72/100 scoring)',
        'Pulse survey automation and analytics',
        'Retention risk prediction (23 high-risk flags)',
        'Engagement driver identification',
        'DEI and culture analytics',
        'Reply-all enforcement for HR communications'
      ]
    },
    {
      id: 'v865',
      name: 'V865: Pricing & Packaging Intelligence',
      icon: '💲',
      description: 'Price optimization, competitive pricing analysis, packaging recommendations, WTP modeling, and discount governance',
      color: 'from-yellow-600 to-amber-600',
      features: [
        'Price optimization ($3.2M incremental ARR)',
        'Competitive pricing intelligence',
        'Packaging and tier structure optimization',
        'Willingness-to-pay research (Van Westendorp)',
        'Discount governance and approval workflows',
        'Reply-all enforcement for pricing decisions'
      ]
    }
  ];

  const stats = [
    { label: 'Email Intelligence Engines', value: '865+', icon: '🤖' },
    { label: 'Total Services', value: '4,087', icon: '🎯' },
    { label: 'New Domains', value: '5', icon: '🌐' },
    { label: 'Reply-All Enforcement', value: '100%', icon: '✅' }
  ];

  return (
    <section id="v861-v865" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-semibold mb-4">
            V861-V865 • Enterprise Intelligence Suite
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Enterprise-Grade Intelligence at Scale
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            5 advanced email intelligence engines powering Partner Management, Product Analytics, 
            Contract Lifecycle, Employee Experience, and Pricing Strategy with AI-driven insights
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Engine Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {engines.map((engine, idx) => (
              <button
                key={engine.id}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === idx
                    ? `bg-gradient-to-r ${engine.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{engine.icon}</span>
                {engine.id.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Active Engine Details */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div className={`text-6xl p-4 rounded-2xl bg-gradient-to-br ${engines[activeTab].color} shadow-xl`}>
              {engines[activeTab].icon}
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-white mb-3">{engines[activeTab].name}</h3>
              <p className="text-lg text-gray-300">{engines[activeTab].description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {engines[activeTab].features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                <div className={`text-2xl mt-1 bg-gradient-to-r ${engines[activeTab].color} bg-clip-text text-transparent`}>
                  ✓
                </div>
                <div className="text-gray-200">{feature}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            30 New Services Across 5 Enterprise Domains
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {engines.map((engine, idx) => (
              <div key={engine.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all">
                <div className={`text-4xl mb-4 bg-gradient-to-r ${engine.color} bg-clip-text text-transparent`}>
                  {engine.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{engine.id.toUpperCase()}</h4>
                <p className="text-sm text-gray-400 mb-4">
                  {engine.name.split(':')[1]?.trim()}
                </p>
                <div className="text-xs text-gray-500">
                  6 specialized services
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Scale Your Enterprise Intelligence?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl">
              Deploy AI-powered intelligence across Partners, Product, Contracts, 
              Employee Experience, and Pricing with reply-all enforcement
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="px-8 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                Get Started
              </a>
              <a href="/services" className="px-8 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/30">
                View All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
