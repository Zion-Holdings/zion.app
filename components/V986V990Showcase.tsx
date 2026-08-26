import React from 'react';

export default function V986V990Showcase() {
  const engines = [
    {
      version: 'V986',
      name: 'Voice-to-Email Intelligence',
      icon: '🎙️',
      description: 'Convert voice messages and audio attachments into searchable text with automatic transcription, intent extraction, and sentiment analysis.',
      features: [
        'Multi-language voice transcription',
        'Intent and action item extraction',
        'Sentiment and emotion analysis',
        'Speaker identification',
        'Timestamp markers',
        'Searchable voice archive'
      ],
      color: 'from-purple-600 to-blue-600'
    },
    {
      version: 'V987',
      name: 'Email Signature Enrichment',
      icon: '✍️',
      description: 'Automatically extract and enrich contact information from email signatures to build comprehensive contact profiles.',
      features: [
        'Contact information extraction',
        'Social media profile detection',
        'Company and role identification',
        'Phone number validation',
        'CRM auto-enrichment',
        'Signature completeness scoring'
      ],
      color: 'from-green-600 to-teal-600'
    },
    {
      version: 'V988',
      name: 'Email Search Intelligence',
      icon: '🔍',
      description: 'Advanced semantic search across all emails with natural language queries, entity extraction, and intelligent ranking.',
      features: [
        'Semantic search engine',
        'Natural language queries',
        'Entity extraction and indexing',
        'Topic classification',
        'Importance-based ranking',
        'Search analytics'
      ],
      color: 'from-orange-600 to-red-600'
    },
    {
      version: 'V989',
      name: 'Email Productivity Dashboard',
      icon: '📊',
      description: 'Comprehensive productivity metrics and insights including response times, engagement scores, and performance trends.',
      features: [
        'Real-time productivity metrics',
        'Response time tracking',
        'Engagement scoring',
        'Trend analysis',
        'Performance benchmarking',
        'Actionable insights'
      ],
      color: 'from-indigo-600 to-purple-600'
    },
    {
      version: 'V990',
      name: 'Email Collaboration Hub',
      icon: '👥',
      description: 'Team collaboration features including shared inboxes, task assignments, @mentions, and internal commenting.',
      features: [
        'Shared inbox management',
        'Task assignment and tracking',
        '@mention system',
        'Internal comments',
        'Collaboration workflows',
        'Team coordination signals'
      ],
      color: 'from-pink-600 to-rose-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            V986-V990: Advanced Email Intelligence Suite
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five breakthrough engines that transform email management with voice processing, 
            contact enrichment, intelligent search, productivity analytics, and team collaboration.
          </p>
        </div>

        {/* Engines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {engines.map((engine) => (
            <div
              key={engine.version}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all hover:transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${engine.color} mb-4`}>
                <span className="text-3xl">{engine.icon}</span>
              </div>
              <div className="text-sm font-semibold text-gray-400 mb-2">{engine.version}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{engine.name}</h3>
              <p className="text-gray-300 mb-4">{engine.description}</p>
              <ul className="space-y-2">
                {engine.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-400">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
                {engine.features.length > 4 && (
                  <li className="text-sm text-gray-500">
                    +{engine.features.length - 4} more features
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-gray-400">New Engines</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">27</div>
              <div className="text-gray-400">New Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4,808</div>
              <div className="text-gray-400">Total Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Reply-All Enforced</div>
            </div>
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Key Capabilities
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center mr-4">
                <span className="text-xl">🎙️</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Voice Processing</h4>
                <p className="text-gray-300 text-sm">
                  Transcribe voice messages, extract intents, and analyze sentiment for hands-free email management.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center mr-4">
                <span className="text-xl">✍️</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Contact Enrichment</h4>
                <p className="text-gray-300 text-sm">
                  Automatically extract and enrich contact profiles from email signatures with social media and company data.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center mr-4">
                <span className="text-xl">🔍</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Intelligent Search</h4>
                <p className="text-gray-300 text-sm">
                  Semantic search with natural language queries, entity extraction, and importance-based ranking.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center mr-4">
                <span className="text-xl">📊</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Productivity Analytics</h4>
                <p className="text-gray-300 text-sm">
                  Track response times, engagement scores, and productivity trends with actionable insights.
                </p>
              </div>
            </div>
            <div className="flex items-start md:col-span-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-pink-600 flex items-center justify-center mr-4">
                <span className="text-xl">👥</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Team Collaboration</h4>
                <p className="text-gray-300 text-sm">
                  Shared inboxes, task assignments, @mentions, and internal comments for seamless team coordination.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Email Workflow?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Deploy V986-V990 to unlock advanced voice processing, contact enrichment, intelligent search, 
            productivity analytics, and team collaboration capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Get Started Today
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all"
            >
              Explore All Services
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
            <p className="mt-2">📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}
