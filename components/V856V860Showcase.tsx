'use client';

import { useState } from 'react';

export default function V856V860Showcase() {
  const [activeTab, setActiveTab] = useState(0);

  const engines = [
    {
      id: 'v856',
      name: 'V856: Revenue Operations Intelligence',
      icon: '📊',
      description: 'Pipeline analytics, forecast accuracy, deal intelligence, territory optimization, and compensation modeling',
      color: 'from-blue-600 to-cyan-600',
      features: [
        'Pipeline health scoring and conversion tracking',
        'Forecast accuracy with weighted pipeline analysis',
        'Deal intelligence with win probability scoring',
        'Territory optimization and whitespace identification',
        'Compensation modeling and quota attainment',
        'Reply-all enforcement for RevOps decisions'
      ]
    },
    {
      id: 'v857',
      name: 'V857: Data Governance & Quality',
      icon: '🏛️',
      description: 'Data lineage tracking, quality scoring, master data management, metadata cataloging, and compliance automation',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Data quality profiling and validation',
        'Automated data lineage discovery',
        'Metadata catalog with business glossary',
        'Master data management with golden records',
        'Privacy compliance (GDPR, CCPA, HIPAA)',
        'Reply-all enforcement for governance decisions'
      ]
    },
    {
      id: 'v858',
      name: 'V858: Incident Response & Threat Hunting',
      icon: '🚨',
      description: 'Automated incident triage, threat correlation, forensic analysis, playbook execution, and post-incident review',
      color: 'from-red-600 to-orange-600',
      features: [
        'Incident severity assessment and triage',
        'Threat hunting with IOC correlation',
        'Digital forensics and timeline analysis',
        'Automated playbook execution',
        'Breach notification and regulatory compliance',
        'Reply-all enforcement for incident coordination'
      ]
    },
    {
      id: 'v859',
      name: 'V859: Customer Data Platform Intelligence',
      icon: '👥',
      description: 'Unified customer profiles, identity resolution, segment creation, activation orchestration, and attribution modeling',
      color: 'from-green-600 to-teal-600',
      features: [
        '360-degree unified customer profiles',
        'Identity resolution across devices and channels',
        'Predictive segmentation and lookalike modeling',
        'Omnichannel activation orchestration',
        'Multi-touch attribution and incrementality testing',
        'Reply-all enforcement for CDP decisions'
      ]
    },
    {
      id: 'v860',
      name: 'V860: Content Strategy & SEO',
      icon: '📈',
      description: 'Content gap analysis, keyword intelligence, competitor benchmarking, SERP tracking, and content ROI measurement',
      color: 'from-yellow-600 to-amber-600',
      features: [
        'Content gap analysis and topic clustering',
        'Keyword research with search intent analysis',
        'Technical SEO and Core Web Vitals optimization',
        'Competitor content benchmarking',
        'Content ROI measurement and attribution',
        'Reply-all enforcement for content strategy'
      ]
    }
  ];

  const stats = [
    { label: 'Email Intelligence Engines', value: '860+', icon: '🤖' },
    { label: 'Total Services', value: '4,057', icon: '🎯' },
    { label: 'New Domains', value: '5', icon: '🌐' },
    { label: 'Reply-All Enforcement', value: '100%', icon: '✅' }
  ];

  return (
    <section id="v856-v860" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-sm font-semibold mb-4">
            V856-V860 • Advanced Analytics & Intelligence Suite
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Next-Generation Analytics & Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            5 cutting-edge email intelligence engines powering RevOps, Data Governance, 
            Incident Response, Customer Data Platforms, and Content Strategy with AI-driven insights
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
            30 New Services Across 5 Domains
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
          <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Analytics?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl">
              Deploy AI-powered intelligence across RevOps, Data Governance, Security, 
              Customer Data, and Content Strategy with reply-all enforcement
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all">
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
