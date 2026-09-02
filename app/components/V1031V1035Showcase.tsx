'use client';
import React, { useState } from 'react';

const V1031V1035Showcase: React.FC = () => {
  const [activeEngine, setActiveEngine] = useState(0);

  const engines = [
    {
      version: 'V1031',
      name: 'Email Analytics Dashboard',
      icon: '📊',
      description: 'Comprehensive AI-powered email performance analytics with real-time dashboards, engagement metrics, and actionable insights',
      features: [
        'Real-time email performance metrics (open, click, reply rates)',
        'AI-powered engagement pattern analysis',
        'Hourly distribution heatmaps for optimal send times',
        'Reply-all compliance tracking and enforcement',
        'Sentiment and priority distribution analytics',
        'Response time benchmarking against industry standards',
        'Custom KPI dashboards per team/department',
        'Automated weekly performance reports'
      ],
      benefit: 'Data-driven email optimization',
      price: '$89/mo',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      version: 'V1032',
      name: 'Email Backup & Recovery',
      icon: '💾',
      description: 'Automated enterprise-grade email backup with AES-256 encryption, integrity verification, and instant disaster recovery',
      features: [
        'Automated real-time email backup',
        'AES-256-GCM encryption at rest and in transit',
        'SHA-256 integrity hash verification',
        'One-click email recovery with full metadata',
        '365-day retention with configurable policies',
        'Compliance-ready (HIPAA, GDPR, SOC2, PCI-DSS)',
        'Reply-all metadata preservation in backups',
        'Cross-platform backup (Gmail, Outlook, Exchange)'
      ],
      benefit: 'Zero data loss guarantee',
      price: '$69/mo',
      color: 'from-green-500 to-emerald-500'
    },
    {
      version: 'V1033',
      name: 'Email Campaign Manager',
      icon: '📣',
      description: 'AI-powered email campaign creation with smart scheduling, A/B testing, personalization, and performance optimization',
      features: [
        'AI-generated subject lines by industry',
        'Smart send time optimization by timezone',
        'Built-in A/B testing with statistical significance',
        'Personalization tokens (name, company, industry)',
        'CAN-SPAM and GDPR compliance built-in',
        'Reply-all enforcement for multi-recipient campaigns',
        'Real-time campaign performance analytics',
        'Automated resend to non-openers'
      ],
      benefit: 'Higher engagement, lower effort',
      price: '$129/mo',
      color: 'from-purple-500 to-pink-500'
    },
    {
      version: 'V1034',
      name: 'Email Encryption Service',
      icon: '🔐',
      description: 'End-to-end email encryption with DLP scanning, automatic PII redaction, and multi-framework compliance enforcement',
      features: [
        'AES-256-GCM end-to-end encryption',
        'Real-time DLP scanning (SSN, credit cards, API keys)',
        'Automatic PII/PHI redaction before sending',
        'Per-recipient decryption key management',
        'HIPAA, GDPR, SOC2, PCI-DSS, CCPA compliance',
        'Reply-all enforcement with encryption maintained',
        'Email expiration/TTL (auto-delete after set time)',
        'Detailed audit trail for compliance reporting'
      ],
      benefit: 'Enterprise-grade email security',
      price: '$149/mo',
      color: 'from-red-500 to-orange-500'
    },
    {
      version: 'V1035',
      name: 'Email Collaboration Tools',
      icon: '👥',
      description: 'Shared team inboxes with smart assignments, internal notes, @mentions, SLA tracking, and intelligent email routing',
      features: [
        'Shared team inboxes with role-based permissions',
        'Smart auto-assignment (round-robin, skill-based)',
        'Internal notes with @mentions and threading',
        'Case-by-case intelligent action analysis',
        'Department-based auto-routing (support, sales, billing)',
        'SLA tracking with escalation alerts',
        'Mandatory reply-all enforcement for external emails',
        'Team performance analytics and workload balancing'
      ],
      benefit: 'Seamless team email workflows',
      price: '$99/mo',
      color: 'from-indigo-500 to-violet-500'
    }
  ];

  const engine = engines[activeEngine];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🚀 Email Intelligence Suite V1031-V1035
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Next-generation email intelligence engines with case-by-case AI analysis, 
            mandatory reply-all enforcement, and enterprise-grade security. 
            <strong> 1,035+ engines</strong> powering smarter business communication.
          </p>
        </div>

        {/* Engine Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {engines.map((e, i) => (
            <button
              key={i}
              onClick={() => setActiveEngine(i)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeEngine === i
                  ? `bg-gradient-to-r ${e.color} text-white shadow-lg scale-105`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {e.icon} {e.version}
            </button>
          ))}
        </div>

        {/* Active Engine Detail */}
        <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-8`}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{engine.icon}</span>
            <div>
              <h3 className="text-2xl font-bold text-white">{engine.name}</h3>
              <p className="text-blue-300">{engine.version} • {engine.price}</p>
            </div>
            <span className={`ml-auto px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${engine.color} text-white`}>
              {engine.benefit}
            </span>
          </div>
          
          <p className="text-gray-300 mb-6 text-lg">{engine.description}</p>

          <div className="grid md:grid-cols-2 gap-3">
            {engine.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-gray-200">{feat}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg">
            <p className="text-yellow-300 font-semibold">
              🔒 Reply-All Enforcement: All engines strictly enforce reply-all for multi-recipient emails. 
              Every response is verified to include all original recipients.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Email Intelligence?
          </h3>
          <p className="text-blue-100 mb-6">
            Join 10,000+ businesses using Zion Tech Group&apos;s AI email engines
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <a href="tel:+13024640950" className="flex items-center gap-2 hover:text-blue-200 transition">
              📱 +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 hover:text-blue-200 transition">
              ✉️ kleber@ziontechgroup.com
            </a>
            <span className="flex items-center gap-2">
              📍 364 E Main St STE 1008, Middletown DE 19709
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V1031V1035Showcase;
