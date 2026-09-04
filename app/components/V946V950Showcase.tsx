import React from 'react';
import { Shield, RefreshCw, Volume2, Network, Zap } from 'lucide-react';

export default function V946V950Showcase() {
  const engines = [
    {
      version: 'V946',
      name: 'Compliance Auto-Filer',
      icon: Shield,
      description: 'Automatically detects GDPR, HIPAA, SOX, and PCI-DSS requirements and applies appropriate controls',
      features: [
        'Multi-framework compliance detection',
        'Automatic retention policies (1-7 years)',
        'Encryption and access controls',
        'Comprehensive audit trails',
        'Reply-all enforcement for compliance'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      version: 'V947',
      name: 'Content Repurposer',
      icon: RefreshCw,
      description: 'Transforms email content into blog posts, social media, presentations, and marketing materials',
      features: [
        'Blog post generation with SEO',
        'Social media content with hashtags',
        'Presentation slide creation',
        'Technical documentation builder',
        'Marketing landing pages'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      version: 'V948',
      name: 'Voice Synthesis Engine',
      icon: Volume2,
      description: 'Converts emails to natural voice messages with emotion detection and 50+ language support',
      features: [
        'Natural text-to-speech synthesis',
        'Emotion-aware voice adaptation',
        '50+ language support',
        'Podcast-style summaries',
        'Accessibility voice assistant'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      version: 'V949',
      name: 'Relationship Graph Builder',
      icon: Network,
      description: 'Maps communication networks, identifies key stakeholders, and detects bottlenecks',
      features: [
        'Dynamic relationship graphs',
        'Centrality and influence scoring',
        'Bottleneck detection',
        'Stakeholder identification',
        'Network density optimization'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      version: 'V950',
      name: 'Predictive Response Engine',
      icon: Zap,
      description: 'ML-powered prediction of optimal response timing, tone, and content for maximum engagement',
      features: [
        'Optimal timing prediction',
        'Tone and style optimization',
        'Response length prediction',
        'Engagement scoring',
        'A/B testing suggestions'
      ],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-cyan-500/20 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-cyan-300 font-semibold">🔒 Compliance & Intelligence Suite</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            V946-V950: Advanced Email Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five enterprise-grade engines delivering compliance automation, content repurposing, 
            voice synthesis, network analysis, and predictive response optimization.
            <strong className="text-yellow-300"> Case-by-case analysis with strict reply-all enforcement.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {engines.map((engine) => {
            const Icon = engine.icon;
            return (
              <div key={engine.version} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all hover:transform hover:scale-105">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${engine.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-mono text-cyan-300 mb-2">{engine.version}</div>
                <h3 className="text-lg font-bold text-white mb-3">{engine.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{engine.description}</p>
                <ul className="space-y-2">
                  {engine.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="text-xs text-gray-400 flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Shield className="w-8 h-8 text-blue-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Multi-Framework Compliance</h4>
              <p className="text-gray-300 text-sm">Automatically detect and apply GDPR, HIPAA, SOX, and PCI-DSS controls with audit trails</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <RefreshCw className="w-8 h-8 text-green-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Content Repurposing</h4>
              <p className="text-gray-300 text-sm">Transform emails into blog posts, social media, presentations, and marketing materials</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Volume2 className="w-8 h-8 text-purple-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Voice Synthesis</h4>
              <p className="text-gray-300 text-sm">Convert emails to natural voice messages with emotion detection and 50+ languages</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Network className="w-8 h-8 text-orange-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Network Analysis</h4>
              <p className="text-gray-300 text-sm">Map relationships, identify stakeholders, and detect communication bottlenecks</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Zap className="w-8 h-8 text-yellow-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Predictive Response</h4>
              <p className="text-gray-300 text-sm">ML-powered prediction of optimal timing, tone, and content for maximum engagement</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="w-8 h-8 text-cyan-400 mb-3 flex items-center justify-center text-2xl">✉️</div>
              <h4 className="text-lg font-bold text-white mb-2">Reply-All Enforcement</h4>
              <p className="text-gray-300 text-sm">All engines enforce strict reply-all for multi-recipient emails ensuring transparency</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Email Intelligence</h3>
          <p className="text-gray-300 mb-6">
            Join leading organizations using our compliance, repurposing, voice, network, and predictive engines
            to automate compliance, maximize content value, and optimize communication strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition">
              Request Demo
            </a>
            <a href="/services" className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-lg transition">
              View All Services
            </a>
          </div>
          <div className="text-gray-400 text-sm space-y-1">
            <p>📞 <strong>+1 302 464 0950</strong> | 📧 <strong>kleber@ziontechgroup.com</strong></p>
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </section>
  );
}
