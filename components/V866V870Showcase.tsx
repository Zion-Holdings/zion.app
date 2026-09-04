'use client';

import { useState } from 'react';

export default function V866V870Showcase() {
  const [activeTab, setActiveTab] = useState(0);

  const engines = [
    {
      id: 'v866',
      name: 'V866: Event Management & ROI',
      icon: '🎪',
      description: 'Event planning, attendee scoring, post-event analytics, sponsorship optimization, and ROI tracking',
      color: 'from-pink-600 to-rose-600',
      features: [
        'Event ROI tracking (3.2x return demonstrated)',
        'Attendee scoring with lead qualification',
        'Sponsorship optimization and renewal prediction',
        'Engagement tracking (sessions, booths, networking)',
        'Post-event feedback and sentiment analysis',
        'Reply-all enforcement for event coordination'
      ]
    },
    {
      id: 'v867',
      name: 'V867: Subscription & Billing Intelligence',
      icon: '💳',
      description: 'Dunning management, churn prediction, usage-based billing, and revenue recognition automation',
      color: 'from-blue-600 to-cyan-600',
      features: [
        'Dunning management (67% recovery rate)',
        'Churn prediction with $485K ARR at risk',
        'Usage-based billing with meter tracking',
        'Revenue recognition (ARR/MRR automation)',
        'Subscription cohort analytics (LTV, payback)',
        'Reply-all enforcement for billing operations'
      ]
    },
    {
      id: 'v868',
      name: 'V868: AI Competitive Intelligence',
      icon: '🏆',
      description: 'Market monitoring, win/loss analysis, battle card generation, and strategic positioning',
      color: 'from-purple-600 to-violet-600',
      features: [
        'Win/loss analysis (62% win rate tracking)',
        'Battle card auto-generation',
        'Market intelligence and competitor monitoring',
        'Competitive pricing tracking',
        'Product intelligence and feature gap analysis',
        'Reply-all enforcement for competitive updates'
      ]
    },
    {
      id: 'v869',
      name: 'V869: Digital Experience Monitoring',
      icon: '👁️',
      description: 'Real user monitoring, synthetic testing, performance optimization, and UX scoring',
      color: 'from-green-600 to-emerald-600',
      features: [
        'Real user monitoring (145K+ sessions)',
        'Synthetic monitoring (99.87% uptime)',
        'Core Web Vitals optimization (LCP, FID, CLS)',
        'Error tracking and crash reporting',
        'UX analytics with heatmaps and journey mapping',
        'Reply-all enforcement for DEM operations'
      ]
    },
    {
      id: 'v870',
      name: 'V870: Investor Relations Platform',
      icon: '📊',
      description: 'Earnings preparation, shareholder analytics, ESG reporting, and market intelligence',
      color: 'from-amber-600 to-orange-600',
      features: [
        'Earnings call preparation (Q3: $125M revenue)',
        'Shareholder analytics (2,847 holders, 78% institutional)',
        'ESG reporting (MSCI rating upgrade to A)',
        'Market intelligence and valuation analysis',
        'SEC filing automation (10-K, 10-Q, 8-K)',
        'Reply-all enforcement for IR communications'
      ]
    }
  ];

  const stats = [
    { label: 'Email Intelligence Engines', value: '870+', icon: '🤖' },
    { label: 'Total Services', value: '4,117', icon: '🎯' },
    { label: 'New Domains', value: '5', icon: '🌐' },
    { label: 'Reply-All Enforcement', value: '100%', icon: '✅' }
  ];

  return (
    <section id="v866-v870" className="py-20 bg-gradient-to-br from-rose-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full text-white text-sm font-semibold mb-4">
            V866-V870 • Strategic Intelligence Suite
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Strategic Intelligence for Growth
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            5 advanced email intelligence engines powering Event Management, Subscription Billing, 
            Competitive Intelligence, Digital Experience, and Investor Relations with AI-driven insights
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
            30 New Services Across 5 Strategic Domains
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
          <div className="inline-block bg-gradient-to-r from-rose-600 to-orange-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Accelerate Strategic Growth?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl">
              Deploy AI-powered intelligence across Events, Billing, Competitive Strategy, 
              Digital Experience, and Investor Relations with reply-all enforcement
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="px-8 py-3 bg-white text-rose-600 rounded-xl font-semibold hover:bg-gray-100 transition-all">
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
