'use client';
import { useState } from 'react';

const engines = [
  { version: 'V1061', name: 'Fraud & Phishing Detector', icon: '🔍', color: 'from-red-500 to-orange-600',
    features: ['Real-time phishing detection', 'URL reputation analysis', 'Attachment scanning', 'Social engineering detection', 'SPF/DKIM/DMARC verification', 'Threat level scoring'],
    price: '$799/mo', useCase: 'Protect your organization from phishing, BEC attacks, and social engineering with AI-powered threat detection' },
  { version: 'V1062', name: 'Smart Archival & Search', icon: '🗄️', color: 'from-blue-500 to-indigo-600',
    features: ['Semantic search engine', 'Auto-categorization', 'Entity extraction', 'Compliance retention', 'Key point extraction', 'Importance scoring'],
    price: '$449/mo', useCase: 'Find any email by meaning, not just keywords. AI-powered archival with intelligent categorization and search' },
  { version: 'V1063', name: 'A/B Testing Platform', icon: '🧪', color: 'from-green-500 to-emerald-600',
    features: ['Auto variant generation', 'Statistical significance', 'Send time optimization', 'Content testing', 'Auto-winner selection', 'Performance analytics'],
    price: '$549/mo', useCase: 'Optimize every aspect of your emails with AI-powered A/B testing and automated winner selection' },
  { version: 'V1064', name: 'Calendar Intelligence', icon: '📅', color: 'from-purple-500 to-violet-600',
    features: ['Scheduling request parsing', 'Timezone conflict detection', 'Optimal time proposals', 'Calendar invite generation', 'Multi-timezone support', 'Availability checking'],
    price: '$399/mo', useCase: 'Automate meeting scheduling from emails with timezone awareness and conflict resolution' },
  { version: 'V1065', name: 'Signature Manager', icon: '✍️', color: 'from-amber-500 to-yellow-600',
    features: ['Role-based templates', 'Dynamic signatures', 'Link click tracking', 'A/B testing', 'Compliance checking', 'Brand consistency'],
    price: '$249/mo', useCase: 'Professional email signatures with analytics, A/B testing, and compliance enforcement' }
];

export default function V1061V1065Showcase() {
  const [active, setActive] = useState(0);
  const e = engines[active];
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full text-white text-sm font-semibold mb-4 animate-pulse">
            V1061-V1065 • 5 NEW ENGINES • 25 NEW SERVICES • 5,155 TOTAL
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">Security, Search & Optimization</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From phishing protection to semantic search, A/B testing to calendar intelligence,
            and dynamic signatures — every email analyzed case-by-case with mandatory reply-all enforcement.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {engines.map((eng, i) => (
            <button key={eng.version} onClick={() => setActive(i)}
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                active === i ? `bg-gradient-to-r ${eng.color} text-white shadow-lg scale-105` : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'}`}>
              <span className="text-2xl mr-2">{eng.icon}</span>
              <span className="hidden sm:inline">{eng.version}</span>
            </button>
          ))}
        </div>
        <div className="max-w-5xl mx-auto mb-12">
          <div className={`bg-gradient-to-r ${e.color} rounded-3xl p-[2px] shadow-2xl`}>
            <div className="bg-gray-950 rounded-3xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className={`w-20 h-20 bg-gradient-to-br ${e.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg mb-4`}>{e.icon}</div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-mono text-gray-500">{e.version}</span>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">LIVE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{e.name}</h3>
                  <p className="text-gray-400 mb-4">{e.useCase}</p>
                  <div className="text-3xl font-bold text-white mb-1">{e.price}</div>
                  <div className="text-sm text-gray-500 mb-4">per organization/month</div>
                  <a href="mailto:kleber@ziontechgroup.com?subject=Inquiry: ${e.name}"
                    className={`inline-block px-6 py-3 bg-gradient-to-r ${e.color} text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg`}>
                    Get Started →
                  </a>
                </div>
                <div className="lg:w-2/3">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {e.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-3 border border-white/5">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
          {engines.map((eng, i) => (
            <div key={eng.version} onClick={() => setActive(i)}
              className={`bg-white/5 backdrop-blur rounded-xl p-4 text-center border cursor-pointer transition-all ${active === i ? 'border-white/30 bg-white/10' : 'border-white/10 hover:border-white/20'}`}>
              <div className="text-3xl mb-2">{eng.icon}</div>
              <div className="text-sm font-bold text-white">{eng.version}</div>
              <div className="text-xs text-gray-500 mt-1">{eng.price}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="text-white font-semibold mb-2">Case-by-Case Analysis</h4>
            <p className="text-gray-400 text-sm">Every email individually analyzed for threats, context, and appropriate action.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-3">👥</div>
            <h4 className="text-white font-semibold mb-2">Reply-All Enforcement</h4>
            <p className="text-gray-400 text-sm">Mandatory reply-all for multi-recipient emails. Never leave stakeholders out.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-3">🔒</div>
            <h4 className="text-white font-semibold mb-2">Enterprise Security</h4>
            <p className="text-gray-400 text-sm">Phishing detection, DLP scanning, encrypted audit trails, and compliance monitoring.</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 text-center border border-gray-700 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Secure & Optimize Your Email?</h3>
          <p className="text-gray-400 mb-6">Contact Zion Tech Group for a personalized demo and enterprise pricing.</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <a href="tel:+13024640950" className="flex items-center gap-2 hover:text-white transition-colors">📱 +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 hover:text-white transition-colors">✉️ kleber@ziontechgroup.com</a>
            <span className="flex items-center gap-2">📍 364 E Main St STE 1008, Middletown DE 19709</span>
          </div>
        </div>
      </div>
    </section>
  );
}
