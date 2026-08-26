import React from 'react';

export default function V926V930Showcase() {
  const engines = [
    {
      id: 'V926',
      name: 'Sentiment Evolution Tracker',
      icon: '📊',
      description: 'Track sentiment changes across email threads. Detect relationship health, predict churn risk, trigger proactive retention.',
      capabilities: ['Sentiment timeline', 'Relationship health scoring', 'Churn prediction', 'Proactive actions'],
      stats: { accuracy: '94%', churnDetection: '85%', relationships: 'Tracked' }
    },
    {
      id: 'V927',
      name: 'Priority Decay Engine',
      icon: '⚡',
      description: 'Dynamic email prioritization with time decay. Prevents priority inflation and ensures urgent items get attention first.',
      capabilities: ['Time-based decay', 'Sender importance', 'Urgency detection', 'Response deadlines'],
      stats: { accuracy: '96%', priorities: 'Dynamic', inflation: 'Prevented' }
    },
    {
      id: 'V928',
      name: 'Cross-Reference Intelligence',
      icon: '🔗',
      description: 'Automatically link related emails across threads, projects, and time. Unified view of all related communications.',
      capabilities: ['Thread linking', 'Project grouping', 'Similarity scoring', 'Timeline building'],
      stats: { accuracy: '92%', linksFound: 'Auto', context: 'Unified' }
    },
    {
      id: 'V929',
      name: 'Action Item Completeness',
      icon: '✅',
      description: 'Verify all action items are completed before accepting new requests. Prevents task abandonment and ensures follow-through.',
      capabilities: ['Task extraction', 'Completion tracking', 'Deadline monitoring', 'Accountability'],
      stats: { accuracy: '95%', followThrough: '100%', tasks: 'Tracked' }
    },
    {
      id: 'V930',
      name: 'Stakeholder Mapping',
      icon: '🗺️',
      description: 'Map organizational relationships, influence patterns, and decision hierarchies from email communications.',
      capabilities: ['Relationship mapping', 'Influence analysis', 'Decision makers', 'Communication paths'],
      stats: { accuracy: '93%', stakeholders: 'Mapped', decisions: 'Tracked' }
    }
  ];

  const features = [
    { icon: '📊', title: 'Sentiment Intelligence', desc: 'Track emotional evolution in conversations. Predict churn before it happens with relationship health monitoring.' },
    { icon: '⚡', title: 'Smart Prioritization', desc: 'Dynamic priorities that adapt to time, urgency, and sender importance. Never miss critical items again.' },
    { icon: '🔗', title: 'Context Unification', desc: 'Link related emails across time and projects. Get complete context without manual searching.' },
    { icon: '✅', title: 'Accountability Engine', desc: 'Ensure commitments are fulfilled before new requests. Track follow-through and prevent task abandonment.' },
    { icon: '🗺️', title: 'Org Intelligence', desc: 'Understand influence patterns, decision makers, and communication flows in your organization.' },
    { icon: '✉️', title: 'Reply-All Enforcement', desc: 'All engines strictly enforce reply-all for multi-recipient emails to ensure transparency and alignment.' }
  ];

  const pricing = [
    { name: 'Starter', price: '$69', period: '/month', features: ['2 Engines', '1,000 emails/month', 'Basic analytics', 'Email support'], recommended: false },
    { name: 'Professional', price: '$199', period: '/month', features: ['All 5 Engines', '20,000 emails/month', 'Advanced features', 'Priority support', 'Reply-all enforcement', 'API access'], recommended: true },
    { name: 'Enterprise', price: '$599', period: '/month', features: ['All 5 Engines', 'Unlimited emails', 'Custom integrations', 'Dedicated support', 'SLA guarantee', '24/7 support', 'On-premise option'], recommended: false }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-500/20 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-300 font-semibold">🎯 Advanced Email Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            V926-V930: Relationship & Priority AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five breakthrough AI engines that track sentiment, optimize priorities, unify context, 
            ensure accountability, and map organizational intelligence from every email.
            <strong className="text-yellow-300"> Case-by-case analysis with strict reply-all enforcement.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {engines.map((engine) => (
            <div key={engine.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all hover:transform hover:scale-105">
              <div className="text-4xl mb-4">{engine.icon}</div>
              <div className="text-xs font-mono text-purple-300 mb-2">{engine.id}</div>
              <h3 className="text-lg font-bold text-white mb-3">{engine.name}</h3>
              <p className="text-sm text-gray-300 mb-4">{engine.description}</p>
              <ul className="space-y-1 mb-4">
                {engine.capabilities.slice(0, 3).map((cap, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-start">
                    <span className="text-green-400 mr-2">✓</span>{cap}
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 pt-3">
                {Object.entries(engine.stats).map(([key, val]) => (
                  <div key={key} className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-purple-300 font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-10">Key Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{f.title}</h4>
                <p className="text-gray-300 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-10">Pricing Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 border ${plan.recommended ? 'bg-purple-600/30 border-purple-400 scale-105' : 'bg-white/10 border-white/20'}`}>
                {plan.recommended && <div className="text-center mb-4"><span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span></div>}
                <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="mb-6"><span className="text-4xl font-bold text-white">{plan.price}</span><span className="text-gray-400">{plan.period}</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center"><span className="text-green-400 mr-2">✓</span>{f}</li>
                  ))}
                </ul>
                <a href="/contact" className={`block text-center py-3 rounded-lg font-semibold transition ${plan.recommended ? 'bg-purple-500 hover:bg-purple-600 text-white' : 'bg-white/20 hover:bg-white/30 text-white'}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Transform Your Email Intelligence</h3>
          <p className="text-gray-300 mb-6">
            Join forward-thinking organizations using our advanced AI engines to understand relationships, 
            optimize priorities, and ensure accountability in every communication.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="/contact" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg transition">
              Start Free Trial
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
