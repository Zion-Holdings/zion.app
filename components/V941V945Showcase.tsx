import React from 'react';

export default function V941V945Showcase() {
  const engines = [
    {
      id: 'V941',
      name: 'Blockchain Verifier',
      icon: '⛓️',
      description: 'Immutable email verification using blockchain. Legally-admissible proof of send/receive with tamper detection.',
      capabilities: ['Immutable timestamps', 'Tamper detection', 'Legal proof', 'Audit trails'],
      stats: { accuracy: '100%', tamper: 'Detected', legal: 'Admissible' }
    },
    {
      id: 'V942',
      name: 'AR/VR Preview Engine',
      icon: '👓',
      description: 'Preview emails in AR/VR across 20+ clients and devices. Test accessibility, dark mode, and responsive design.',
      capabilities: ['20+ client testing', 'AR visualization', 'Accessibility audit', 'Responsive testing'],
      stats: { clients: '20+', issues: 'Auto-detected', compatibility: '95%+' }
    },
    {
      id: 'V943',
      name: 'Quantum Encryption',
      icon: '🔐',
      description: 'Post-quantum cryptography using CRYSTALS-Kyber. Protects against future quantum computer attacks with NIST-approved algorithms.',
      capabilities: ['CRYSTALS-Kyber', 'NIST-approved', 'Forward secrecy', 'Quantum-safe'],
      stats: { security: '256-bit', quantum: 'Resistant', standard: 'NIST PQC' }
    },
    {
      id: 'V944',
      name: 'Negotiation Optimizer',
      icon: '🎯',
      description: 'AI-powered negotiation analysis. Tracks concessions, identifies BATNA, suggests counter-offers, and predicts deal outcomes.',
      capabilities: ['BATNA analysis', 'Counter-offers', 'Outcome prediction', 'Strategy coaching'],
      stats: { accuracy: '85%', insights: 'Real-time', strategies: 'AI-powered' }
    },
    {
      id: 'V945',
      name: 'Legacy Archive Engine',
      icon: '🗄️',
      description: 'Intelligent long-term archiving with AI retrieval. Compresses 80%+, deduplicates, and supports legal holds and e-discovery.',
      capabilities: ['AI retrieval', '80% compression', 'Legal holds', 'E-discovery'],
      stats: { compression: '80%+', retention: 'Decades', search: 'Instant' }
    }
  ];

  const features = [
    { icon: '⛓️', title: 'Blockchain Verification', desc: 'Immutable proof of email communications with legally-admissible timestamps and tamper detection.' },
    { icon: '👓', title: 'AR/VR Testing', desc: 'Preview emails across all clients and devices in immersive AR/VR environments before sending.' },
    { icon: '🔐', title: 'Quantum Security', desc: 'Post-quantum cryptography protecting against future quantum computer attacks with NIST standards.' },
    { icon: '🎯', title: 'Negotiation Intelligence', desc: 'AI-powered negotiation coaching with BATNA analysis, counter-offer suggestions, and outcome prediction.' },
    { icon: '🗄️', title: 'Smart Archiving', desc: 'Intelligent long-term storage with 80% compression, AI search, legal holds, and e-discovery support.' },
    { icon: '✉️', title: 'Reply-All Enforcement', desc: 'Every engine strictly enforces reply-all for multi-recipient emails ensuring transparency.' }
  ];

  const pricing = [
    { name: 'Starter', price: '$99', period: '/month', features: ['2 Engines', '5,000 emails/month', 'Basic features', 'Email support'], recommended: false },
    { name: 'Professional', price: '$249', period: '/month', features: ['All 5 Engines', '50,000 emails/month', 'Advanced features', 'Priority support', 'API access'], recommended: true },
    { name: 'Enterprise', price: '$699', period: '/month', features: ['All 5 Engines', 'Unlimited emails', 'Custom integrations', '24/7 support', 'Dedicated CSM'], recommended: false }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-slate-500/20 border border-slate-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-slate-300 font-semibold">🚀 Enterprise Email Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            V941-V945: Advanced Security & Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five enterprise-grade engines: blockchain verification, AR/VR preview, quantum encryption,
            negotiation optimization, and intelligent archiving.
            <strong className="text-yellow-300"> Case-by-case analysis with strict reply-all enforcement.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {engines.map((engine) => (
            <div key={engine.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-slate-400/50 transition-all hover:transform hover:scale-105">
              <div className="text-4xl mb-4">{engine.icon}</div>
              <div className="text-xs font-mono text-slate-300 mb-2">{engine.id}</div>
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
                    <span className="text-gray-400 capitalize">{key}</span>
                    <span className="text-slate-300 font-semibold">{val}</span>
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
              <div key={plan.name} className={`rounded-2xl p-8 border ${plan.recommended ? 'bg-slate-600/30 border-slate-400 scale-105' : 'bg-white/10 border-white/20'}`}>
                {plan.recommended && <div className="text-center mb-4"><span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span></div>}
                <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="mb-6"><span className="text-4xl font-bold text-white">{plan.price}</span><span className="text-gray-400">{plan.period}</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center"><span className="text-green-400 mr-2">✓</span>{f}</li>
                  ))}
                </ul>
                <a href="/contact" className={`block text-center py-3 rounded-lg font-semibold transition ${plan.recommended ? 'bg-slate-500 hover:bg-slate-600 text-white' : 'bg-white/20 hover:bg-white/30 text-white'}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Email Intelligence</h3>
          <p className="text-gray-300 mb-6">
            Join leading organizations using our advanced security, verification, and intelligence engines
            to protect communications, optimize negotiations, and preserve institutional knowledge.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="/contact" className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-lg transition">
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
