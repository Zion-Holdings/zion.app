import React from 'react';

export default function V916V920Showcase() {
  const engines = [
    {
      id: 'V916',
      name: 'Smart Meeting Scheduler',
      icon: '📅',
      description: 'Detect meeting requests in emails, suggest optimal times across timezones, and auto-create calendar invites',
      capabilities: ['Meeting intent detection', 'Optimal time suggestions', 'Urgency classification', 'Calendar invite generation', 'Multi-timezone support'],
      stats: { accuracy: '96%', timeSaved: '15min/email', scheduling: '5 options' }
    },
    {
      id: 'V917',
      name: 'Collaboration Coordinator',
      icon: '🤝',
      description: 'Coordinate multi-party email threads, extract action items, assign owners, and track consensus',
      capabilities: ['Action item extraction', 'Participant assignment', 'Consensus analysis', 'Decision tracking', 'Thread health monitoring'],
      stats: { accuracy: '94%', actionsDetected: '8-12/email', consensus: '67%+' }
    },
    {
      id: 'V918',
      name: 'Follow-Up Automation',
      icon: '🔔',
      description: 'Track emails needing follow-up, detect deadlines, schedule smart reminders, and auto-escalate',
      capabilities: ['Deadline extraction', 'Priority-based reminders', 'Smart escalation', 'Follow-up scheduling', 'Overdue tracking'],
      stats: { accuracy: '97%', deadlinesMissed: '0%', reminders: '4 per task' }
    },
    {
      id: 'V919',
      name: 'Learning & Adaptation Engine',
      icon: '🧠',
      description: 'Learn from every email interaction to improve response quality, tone matching, and effectiveness',
      capabilities: ['Communication style learning', 'Response optimization', 'Sender profiling', 'Effectiveness tracking', 'Continuous improvement'],
      stats: { accuracy: '100%', patternsLearned: '3+/email', improvement: '15%/week' }
    },
    {
      id: 'V920',
      name: 'Voice & Video Integration',
      icon: '🎥',
      description: 'Detect when voice/video is better than email, generate meeting links, and coordinate multimedia calls',
      capabilities: ['Medium recommendation', 'Complexity analysis', 'Meeting link generation', 'Screen share detection', 'Multi-participant coordination'],
      stats: { accuracy: '85%', miscomReduced: '70%', meetings: 'Auto-scheduled' }
    }
  ];

  const features = [
    { icon: '📅', title: 'Intelligent Scheduling', desc: 'Auto-detect meeting requests and suggest optimal times based on participant availability and urgency' },
    { icon: '🤝', title: 'Team Coordination', desc: 'Extract action items from emails, assign owners, track consensus, and keep all participants aligned' },
    { icon: '🔔', title: 'Never Miss Follow-Ups', desc: 'Automatic deadline detection with smart reminders that escalate based on priority and urgency' },
    { icon: '🧠', title: 'Continuous Learning', desc: 'AI learns your communication style and improves responses with every interaction' },
    { icon: '🎥', title: 'Smart Medium Selection', desc: 'AI recommends when voice or video calls are more efficient than email' },
    { icon: '✉️', title: 'Reply-All Enforcement', desc: 'Every engine strictly enforces reply-all for multi-recipient emails to prevent communication gaps' }
  ];

  const pricing = [
    { name: 'Starter', price: '$49', period: '/month', features: ['1 Email Engine', '500 emails/month', 'Basic scheduling', 'Email support'], recommended: false },
    { name: 'Professional', price: '$149', period: '/month', features: ['All 5 Engines', '5,000 emails/month', 'Advanced features', 'Priority support', 'Reply-all enforcement'], recommended: true },
    { name: 'Enterprise', price: '$399', period: '/month', features: ['All 5 Engines', 'Unlimited emails', 'Custom integrations', 'Dedicated support', 'SLA guarantee', '24/7 support'], recommended: false }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/20 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-300 font-semibold">🚀 Next-Gen Email Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            V916-V920: The Future of Smart Email
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five revolutionary AI engines that schedule meetings, coordinate teams, automate follow-ups, 
            learn from every interaction, and intelligently choose between email, voice, and video.
            <strong className="text-yellow-300"> Case-by-case analysis with strict reply-all enforcement.</strong>
          </p>
        </div>

        {/* Engine Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {engines.map((engine) => (
            <div key={engine.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all hover:transform hover:scale-105">
              <div className="text-4xl mb-4">{engine.icon}</div>
              <div className="text-xs font-mono text-blue-300 mb-2">{engine.id}</div>
              <h3 className="text-lg font-bold text-white mb-3">{engine.name}</h3>
              <p className="text-sm text-gray-300 mb-4">{engine.description}</p>
              <ul className="space-y-1 mb-4">
                {engine.capabilities.slice(0, 3).map((cap, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-start">
                    <span className="text-green-400 mr-2">✓</span>{cap}
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 pt-3 mt-auto">
                {Object.entries(engine.stats).map(([key, val]) => (
                  <div key={key} className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-blue-300 font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
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

        {/* Pricing */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-10">Pricing Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 border ${plan.recommended ? 'bg-blue-600/30 border-blue-400 scale-105' : 'bg-white/10 border-white/20'}`}>
                {plan.recommended && <div className="text-center mb-4"><span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span></div>}
                <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="mb-6"><span className="text-4xl font-bold text-white">{plan.price}</span><span className="text-gray-400">{plan.period}</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center"><span className="text-green-400 mr-2">✓</span>{f}</li>
                  ))}
                </ul>
                <a href="/contact" className={`block text-center py-3 rounded-lg font-semibold transition ${plan.recommended ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-white/20 hover:bg-white/30 text-white'}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & CTA */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Email Intelligence?</h3>
          <p className="text-gray-300 mb-6">
            Join thousands of businesses using our next-gen AI email engines to schedule smarter, 
            collaborate better, and never miss a follow-up.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition">
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
