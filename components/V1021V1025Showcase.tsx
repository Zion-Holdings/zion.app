import React from 'react';

const V1021V1025Showcase: React.FC = () => {
  const engines = [
    {
      id: 'V1021',
      name: 'Email Personalization Engine',
      icon: '🎯',
      description: 'AI personalizes every email based on recipient profile, past interactions, and preferences for maximum engagement.',
      features: ['Recipient profiling', 'Dynamic content', 'Tone adaptation', 'Interest-based personalization', 'Engagement scoring'],
      benefit: '+40% engagement rate',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'V1022',
      name: 'Email Sentiment Tracker',
      icon: '💭',
      description: 'Real-time sentiment analysis across email threads with trend detection and relationship health scoring.',
      features: ['Sentiment analysis', 'Trend detection', 'Relationship health', 'Alert system', 'Thread tracking'],
      benefit: 'Better relationship management',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'V1023',
      name: 'Email Workflow Automation',
      icon: '⚙️',
      description: 'Build custom email workflows with triggers, conditions, and automated actions to save 10+ hours/week.',
      features: ['Visual workflow builder', 'Custom triggers', 'Conditional logic', 'Multi-step actions', 'Integration hub'],
      benefit: 'Save 10+ hours/week',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'V1024',
      name: 'Email Template Library',
      icon: '📝',
      description: '500+ professional email templates with AI customization, A/B testing, and performance tracking.',
      features: ['500+ templates', 'AI customization', 'A/B testing', 'Performance tracking', 'Category filtering'],
      benefit: 'Professional emails in seconds',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'V1025',
      name: 'Email Performance Benchmarking',
      icon: '📈',
      description: 'Compare email metrics against industry benchmarks and competitors with actionable optimization insights.',
      features: ['Industry benchmarks', 'Competitive analysis', 'Performance scoring', 'Gap analysis', 'Optimization tips'],
      benefit: 'Data-driven optimization',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  const services = [
    { name: 'Email Personalization Engine', price: '$179/mo', icon: '🎯' },
    { name: 'Dynamic Email Content', price: '$149/mo', icon: '🔄' },
    { name: 'Recipient Profiling AI', price: '$199/mo', icon: '👤' },
    { name: 'Personalized Email Campaigns', price: '$249/mo', icon: '📧' },
    { name: 'Email Engagement Optimizer', price: '$169/mo', icon: '📈' },
    { name: 'Email Sentiment Tracker', price: '$159/mo', icon: '💭' },
    { name: 'Relationship Health Monitor', price: '$189/mo', icon: '❤️' },
    { name: 'Sentiment Trend Analyzer', price: '$139/mo', icon: '📊' },
    { name: 'Emotional Intelligence Email', price: '$179/mo', icon: '🧠' },
    { name: 'Customer Satisfaction Tracker', price: '$219/mo', icon: '😊' },
    { name: 'Email Workflow Automation', price: '$299/mo', icon: '⚙️' },
    { name: 'Smart Email Routing', price: '$199/mo', icon: '🔀' },
    { name: 'Email Auto-Responder Pro', price: '$149/mo', icon: '🤖' },
    { name: 'Workflow Template Library', price: '$129/mo', icon: '📚' },
    { name: 'Email Task Automation', price: '$229/mo', icon: '✅' },
    { name: 'Email Template Library', price: '$99/mo', icon: '📝' },
    { name: 'Custom Template Builder', price: '$149/mo', icon: '🎨' },
    { name: 'Template Performance Analytics', price: '$129/mo', icon: '📊' },
    { name: 'Industry Template Packs', price: '$79/mo', icon: '🏭' },
    { name: 'Template Personalization AI', price: '$169/mo', icon: '🎯' },
    { name: 'Email Performance Benchmarking', price: '$199/mo', icon: '📈' },
    { name: 'Email ROI Tracker', price: '$249/mo', icon: '💰' },
    { name: 'Email Analytics Dashboard', price: '$179/mo', icon: '📊' },
    { name: 'Email Deliverability Monitor', price: '$189/mo', icon: '📬' },
    { name: 'Email Optimization Consultant', price: '$299/mo', icon: '🎓' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            V1021-V1025: Intelligent Email Suite
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five breakthrough engines that personalize intelligently, track sentiment accurately, automate workflows efficiently, 
            provide professional templates instantly, and benchmark performance precisely.
          </p>
          <div className="mt-6 inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-green-400 font-semibold">✓ All engines enforce reply-all</span>
            <span className="text-white">|</span>
            <span className="text-blue-400 font-semibold">✓ Case-by-case analysis</span>
          </div>
        </div>

        {/* Engines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {engines.map((engine) => (
            <div
              key={engine.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${engine.color} mb-4`}>
                <span className="text-3xl">{engine.icon}</span>
              </div>
              <div className="text-sm font-mono text-gray-400 mb-2">{engine.id}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{engine.name}</h3>
              <p className="text-gray-300 mb-4">{engine.description}</p>
              <ul className="space-y-2 mb-4">
                {engine.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/20">
                <div className="text-sm text-gray-400 mb-1">Key Benefit</div>
                <div className="text-lg font-semibold text-white">{engine.benefit}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            25 New Professional Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all hover:scale-105"
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <div className="text-sm font-semibold text-white mb-1">{service.name}</div>
                <div className="text-xs text-gray-400">{service.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case-by-Case Analysis Demo */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🔍 Case-by-Case Analysis in Action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Example: Email Personalization</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <div className="text-white font-medium">Recipient Profile: Built</div>
                    <div className="text-sm text-gray-400">John Smith, CTO at TechCorp</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <div className="text-white font-medium">Tone Adaptation: Casual</div>
                    <div className="text-sm text-gray-400">Based on past interactions</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <div className="text-white font-medium">Interest Reference: AI Projects</div>
                    <div className="text-sm text-gray-400">From interaction history</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Example: Sentiment Tracking</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-xl">🚨</span>
                  <div>
                    <div className="text-white font-medium">Sentiment: Declining</div>
                    <div className="text-sm text-gray-400">Trend: -17.6 over 3 emails</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">⚠</span>
                  <div>
                    <div className="text-white font-medium">Relationship Health: At Risk</div>
                    <div className="text-sm text-gray-400">Score: 45/100</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <div className="text-white font-medium">Action: Schedule Resolution Meeting</div>
                    <div className="text-sm text-gray-400">Address concerns immediately</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Email Intelligence?
          </h3>
          <p className="text-xl text-gray-100 mb-6">
            Get V1021-V1025 engines and 25 professional services for your business
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📞</span>
              <a href="tel:+130****0950" className="text-lg hover:underline">+1 302 464 0950</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✉️</span>
              <a href="mailto:kleber@ziontechgroup.com" className="text-lg hover:underline">kleber@ziontechgroup.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span className="text-lg">364 E Main St STE 1008, Middletown, DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V1021V1025Showcase;
