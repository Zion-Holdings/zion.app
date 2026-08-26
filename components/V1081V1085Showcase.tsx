import React, { useState } from 'react';

export default function V1081V1085Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);

  const engines = [
    {
      id: 'V1081',
      name: 'Fraud & Phishing Detector',
      icon: '🔍',
      description: 'Detect phishing attempts, analyze sender reputation, and flag suspicious emails with AI-powered threat detection.',
      features: [
        'Real-time phishing detection',
        'Sender reputation analysis',
        'URL inspection and validation',
        'Threat scoring (0-100)',
        'Brand impersonation detection',
        'Urgency tactic analysis'
      ],
      useCases: [
        'Security teams protecting against email-based attacks',
        'Compliance officers ensuring email security',
        'IT departments implementing fraud prevention',
        'Organizations requiring threat intelligence'
      ],
      price: '$799/month'
    },
    {
      id: 'V1082',
      name: 'Accessibility Checker',
      icon: '♿',
      description: 'Ensure emails meet WCAG 2.1 AA accessibility standards with readability analysis, color contrast validation, and plain language recommendations.',
      features: [
        'WCAG 2.1 AA compliance checking',
        'Flesch-Kincaid readability scoring',
        'Color contrast validation',
        'Plain language analysis',
        'Image alt-text verification',
        'Link accessibility checks'
      ],
      useCases: [
        'Organizations meeting accessibility requirements',
        'Marketing teams creating inclusive content',
        'Compliance officers ensuring ADA compliance',
        'Content creators improving readability'
      ],
      price: '$449/month'
    },
    {
      id: 'V1083',
      name: 'Signature Manager',
      icon: '✍️',
      description: 'Manage dynamic email signatures with role-based templates, brand compliance, and click tracking for professional communications.',
      features: [
        'Role-based signature templates',
        'Brand compliance enforcement',
        'Click tracking and analytics',
        'Dynamic signature updates',
        'A/B testing for signatures',
        'Multi-format support'
      ],
      useCases: [
        'Sales teams with professional signatures',
        'Marketing departments tracking engagement',
        'HR ensuring brand consistency',
        'Enterprises managing multiple signatures'
      ],
      price: '$299/month'
    },
    {
      id: 'V1084',
      name: 'Email Archive & Search',
      icon: '🗄️',
      description: 'Intelligent email archival with semantic search, auto-categorization, and compliance retention policies for efficient email management.',
      features: [
        'Semantic search capabilities',
        'Auto-categorization and tagging',
        'Compliance retention policies',
        'Key information extraction',
        'Importance scoring',
        'Advanced search filters'
      ],
      useCases: [
        'Legal teams with eDiscovery requirements',
        'Compliance officers managing retention',
        'Knowledge workers finding old emails',
        'Organizations with audit requirements'
      ],
      price: '$599/month'
    },
    {
      id: 'V1085',
      name: 'A/B Testing Platform',
      icon: '🧪',
      description: 'Comprehensive A/B testing platform for email campaigns with statistical significance calculations and automated winner selection.',
      features: [
        'Subject line testing',
        'Content variant testingin',
        'Send time optimization',
        'Statistical significance (95%)',
        'Automated winner selection',
        'Multi-variant support (4+)'
      ],
      useCases: [
        'Marketing teams optimizing campaigns',
        'Growth hackers testing strategies',
        'Email marketers improving performance',
        'Data-driven organizations'
      ],
      price: '$549/month'
    }
  ];

  const engine = engines[activeEngine];

  return (
    <div className="bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            V1081-V1085: Security & Optimization Suite
          </h2>
          <p className="text-xl text-red-200 max-w-3xl mx-auto">
            Five powerful engines for fraud detection, accessibility compliance, signature management,
            email archival, and A/B testing - all with reply-all enforcement.
          </p>
          <div className="mt-6 inline-block bg-gradient-to-r from-red-400 to-yellow-500 text-black font-bold px-6 py-2 rounded-full">
            5,255 Services • 1,085 Engines • Reply-All Enforced
          </div>
        </div>

        {/* Engine Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {engines.map((eng, idx) => (
            <button
              key={eng.id}
              onClick={() => setActiveEngine(idx)}
              className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeEngine === idx
                  ? 'bg-white text-red-900 shadow-2xl scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <div className="text-3xl mb-1">{eng.icon}</div>
              <div className="text-sm">{eng.id}</div>
            </button>
          ))}
        </div>

        {/* Active Engine Details */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl">{engine.icon}</div>
              <div>
                <div className="text-sm font-semibold opacity-80">{engine.id}</div>
                <h3 className="text-3xl font-bold">{engine.name}</h3>
              </div>
              <div className="ml-auto text-right">
                <div className="text-sm opacity-80">Starting at</div>
                <div className="text-3xl font-bold">{engine.price}</div>
              </div>
            </div>
            <p className="text-lg opacity-90">{engine.description}</p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span> Key Features
                </h4>
                <ul className="space-y-3">
                  {engine.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Use Cases
                </h4>
                <ul className="space-y-3">
                  {engine.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-orange-500 mt-1">→</span>
                      <span className="text-gray-700">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">👥</span> Reply-All Enforcement
                </h4>
                <p className="text-gray-700">
                  All engines automatically enforce reply-all for multi-recipient emails, ensuring all stakeholders
                  stay informed and no one is accidentally left out of important conversations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Enhance Your Email Security & Optimization?</h3>
            <p className="text-red-200 mb-6">
              Contact us today to learn how these engines can protect and optimize your email workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <a href="tel:+13024640950" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <span>📱</span> +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <span>✉️</span> kleber@ziontechgroup.com
              </a>
              <div className="flex items-center gap-2">
                <span>📍</span> 364 E Main St STE 1008, Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
