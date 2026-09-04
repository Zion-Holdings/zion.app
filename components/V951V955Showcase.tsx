import React from 'react';
import Link from 'next/link';

export default function V951V955Showcase() {
  const engines = [
    {
      version: 'V951',
      name: 'Sentiment Evolution Tracker',
      icon: '📈',
      description: 'Track sentiment evolution across email threads over time. Detect relationship deterioration early and recommend intervention strategies.',
      features: [
        'Sentiment timeline visualization',
        'Trend detection (improving/deteriorating)',
        'Turning point identification',
        'Relationship health scoring',
        'Intervention recommendations'
      ],
      benefits: [
        'Preserve customer relationships',
        'Early warning for at-risk accounts',
        'Data-driven intervention strategies'
      ]
    },
    {
      version: 'V952',
      name: 'Context Memory Engine',
      icon: '🧠',
      description: 'Long-term memory system that remembers past conversations, commitments, and preferences. Prevents contradictory statements.',
      features: [
        'Commitment extraction and tracking',
        'Preference learning',
        'Contradiction detection',
        'Conversation history recall',
        'Fact extraction'
      ],
      benefits: [
        'Maintain credibility',
        'Personalized responses',
        'Never forget commitments'
      ]
    },
    {
      version: 'V953',
      name: 'Workflow Automation Builder',
      icon: '🔧',
      description: 'Visual workflow builder for complex email automation sequences with conditional logic, delays, triggers, and multi-step processes.',
      features: [
        'No-code visual builder',
        'Conditional logic support',
        'Delay and timing controls',
        'Trigger matching',
        'Workflow suggestions'
      ],
      benefits: [
        'Automate complex processes',
        'Reduce manual work by 80%',
        'No coding required'
      ]
    },
    {
      version: 'V954',
      name: 'Security Threat Intelligence',
      icon: '🛡️',
      description: 'Real-time threat detection using global intelligence feeds. Identifies phishing, BEC attacks, malware, and social engineering.',
      features: [
        'Real-time threat scanning',
        'Phishing detection',
        'BEC attack prevention',
        'Malware attachment scanning',
        'Social engineering defense'
      ],
      benefits: [
        'Block 99% of threats',
        'Prevent data breaches',
        'Protect against BEC fraud'
      ]
    },
    {
      version: 'V955',
      name: 'Performance Analytics Dashboard',
      icon: '📊',
      description: 'Comprehensive analytics tracking email productivity metrics, response times, engagement rates, team performance, and ROI.',
      features: [
        'Volume and response metrics',
        'Engagement scoring',
        'Team performance tracking',
        'ROI calculations',
        'Customizable dashboards'
      ],
      benefits: [
        'Measure email productivity',
        'Identify top performers',
        'Calculate ROI accurately'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/20 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-300 font-semibold">🚀 Advanced Intelligence Suite</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            V951-V955: Next-Gen Email Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five revolutionary engines that transform email management with sentiment tracking, 
            context memory, workflow automation, threat intelligence, and performance analytics.
            <strong className="text-yellow-300"> All engines enforce strict reply-all for multi-recipient emails.</strong>
          </p>
        </div>

        {/* Engine Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {engines.map((engine, index) => (
            <div
              key={engine.version}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all hover:transform hover:scale-105"
            >
              <div className="text-6xl mb-4">{engine.icon}</div>
              <div className="text-sm font-mono text-blue-300 mb-2">{engine.version}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{engine.name}</h3>
              <p className="text-gray-300 mb-6">{engine.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {engine.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {engine.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start">
                      <span className="text-yellow-400 mr-2">★</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Seamless Integration & Reply-All Enforcement
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">🔗 How They Work Together</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span><strong>V951</strong> detects sentiment deterioration → <strong>V952</strong> recalls past commitments to prevent contradictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span><strong>V953</strong> automates workflows → <strong>V954</strong> scans all automated emails for threats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span><strong>V955</strong> tracks performance → <strong>V951</strong> correlates sentiment with productivity metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>All engines share context for comprehensive email intelligence</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">✉️ Reply-All Enforcement</h4>
              <p className="text-gray-300 mb-4">
                Every engine in the V951-V955 suite strictly enforces reply-all for multi-recipient emails:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Automatically detects when reply-all is required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Prevents accidental exclusion of recipients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Ensures all stakeholders stay informed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Maintains transparency in team communications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">5</div>
            <div className="text-gray-300 text-sm">New Engines</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">32</div>
            <div className="text-gray-300 text-sm">New Services</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">955</div>
            <div className="text-gray-300 text-sm">Total Engines</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">4,601</div>
            <div className="text-gray-300 text-sm">Total Services</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300 text-sm">Reply-All Enforcement</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Email Intelligence?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join organizations using our V951-V955 suite to track sentiment, remember context, 
            automate workflows, block threats, and measure performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
            >
              Request Demo
            </Link>
            <Link
              href="/services"
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg transition-all border border-white/30"
            >
              View All Services
            </Link>
          </div>
          <div className="mt-8 text-gray-400 text-sm space-y-1">
            <p>📞 <strong>+1 302 464 0950</strong> | 📧 <strong>kleber@ziontechgroup.com</strong></p>
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </section>
  );
}
