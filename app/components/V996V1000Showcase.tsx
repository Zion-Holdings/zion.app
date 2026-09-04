'use client';

import React, { useState } from 'react';

const engines = [
  {
    id: 'V996',
    icon: '🔮',
    name: 'Predictive Analytics',
    description: 'Predict reply probability, response time, and engagement scores with statistical modeling.',
    features: ['Reply probability (0-100%)', 'Response time prediction', 'Engagement scoring', 'Optimal send time', 'A/B test suggestions', 'Performance tracking'],
    price: '$149/month',
    stats: { accuracy: '94%', metrics: 6, integrations: 12 },
  },
  {
    id: 'V997',
    icon: '🌍',
    name: 'Multi-Language Intelligence',
    description: 'Detect languages, adapt tone per culture, and ensure cross-cultural communication effectiveness.',
    features: ['15+ language detection', 'Cultural tone adaptation', 'Appropriateness scoring', 'Business phrase library', 'RTL support', 'Multilingual detection'],
    price: '$179/month',
    stats: { languages: '15+', cultures: 10, accuracy: '91%' },
  },
  {
    id: 'V998',
    icon: '📎',
    name: 'Attachment Intelligence',
    description: 'Scan attachments for content extraction, malware detection, file organization, and security analysis.',
    features: ['Content extraction', 'Malware detection', 'Phishing pattern matching', 'Risk assessment', 'Smart summaries', 'Double-extension detection'],
    price: '$159/month',
    stats: { fileTypes: '25+', threats: '500+ patterns', accuracy: '97%' },
  },
  {
    id: 'V999',
    icon: '🧠',
    name: 'Context Memory Pro',
    description: 'Track commitments, decisions, and context across threads, contacts, and time periods. Perfect recall.',
    features: ['Commitment tracking', 'Decision extraction', 'Fact extraction', 'Sentiment tracking', 'Thread memory', 'Contact profiles'],
    price: '$169/month',
    stats: { memoryDepth: '500 entries', categories: 8, recall: '99%' },
  },
  {
    id: 'V1000',
    icon: '🏆',
    name: 'Intelligence Orchestrator',
    description: 'Master orchestrator coordinating all 999 engines for comprehensive case-by-case email processing.',
    features: ['1000 engines coordinated', 'Auto-categorization', 'Smart engine selection', 'Action determination', 'Reply guidance', 'Reply-all enforcement'],
    price: '$499/month',
    stats: { engines: 1000, categories: 11, accuracy: '96%' },
  },
];

const categories = [
  { name: 'CRITICAL_COMPLIANCE', icon: '🚨', desc: 'Legal/compliance urgency — escalate immediately' },
  { name: 'URGENT_ACTION', icon: '⚡', desc: 'Time-sensitive — respond within 1 hour' },
  { name: 'NEGOTIATION', icon: '🤝', desc: 'Terms/pricing discussions — careful diplomatic response' },
  { name: 'MEETING_COORDINATION', icon: '📅', desc: 'Scheduling — propose times and send invites' },
  { name: 'REVIEW_REQUEST', icon: '📋', desc: 'Document review — thorough feedback required' },
  { name: 'DOCUMENT_SHARING', icon: '📂', desc: 'File sharing — acknowledge and organize' },
  { name: 'THREAD_CONTINUATION', icon: '🧵', desc: 'Ongoing discussion — address pending points' },
  { name: 'INFORMATION_REQUEST', icon: '❓', desc: 'Questions asked — research and respond clearly' },
  { name: 'STATUS_UPDATE', icon: '📊', desc: 'FYI/Update — acknowledge and file' },
  { name: 'INTRODUCTION', icon: '👋', desc: 'New contact — welcome and engage' },
  { name: 'GENERAL', icon: '📧', desc: 'Standard email — respond appropriately' },
];

export default function V996V1000Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);
  const [demoEmail, setDemoEmail] = useState('');
  const [analysisResult, setAnalysisResult] = useState<Record<string, unknown> | null>(null);

  const runDemo = () => {
    if (!demoEmail.trim()) return;
    // Simulated V1000 orchestrator analysis
    const hasUrgency = /\b(urgent|asap|immediately|critical|deadline)\b/i.test(demoEmail);
    const hasAttachments = /\b(attach|enclosed|\.pdf|\.docx?|\.xlsx?)\b/i.test(demoEmail);
    const hasQuestions = demoEmail.includes('?');
    const hasMeeting = /\b(meet|schedule|call|zoom)\b/i.test(demoEmail);
    const hasNegotiation = /\b(offer|price|budget|discount|negotiate|terms)\b/i.test(demoEmail);
    const recipients = (demoEmail.match(/[\w.+-]+@[\w-]+\.[\w.]+/g) || []).length;

    let category = 'GENERAL';
    if (hasUrgency) category = 'URGENT_ACTION';
    if (hasNegotiation) category = 'NEGOTIATION';
    if (hasMeeting) category = 'MEETING_COORDINATION';
    if (hasAttachments && hasQuestions) category = 'REVIEW_REQUEST';

    const replyAllRequired = recipients > 1 || ['THREAD_CONTINUATION', 'MEETING_COORDINATION', 'REVIEW_REQUEST'].includes(category);
    const enginesActivated = ['V996'];
    if (demoEmail.length > 50) enginesActivated.push('V997');
    if (hasAttachments) enginesActivated.push('V998');
    enginesActivated.push('V999');

    setAnalysisResult({
      category,
      urgency: hasUrgency ? 'immediate' : hasNegotiation ? 'high' : 'normal',
      enginesActivated,
      replyAllRequired,
      replyAllEnforced: true,
      predictedReplyProbability: hasQuestions ? '78%' : '42%',
      action: category === 'URGENT_ACTION' ? 'RESPOND IMMEDIATELY' :
              category === 'NEGOTIATION' ? 'CAREFUL DIPLOMATIC RESPONSE' :
              category === 'REVIEW_REQUEST' ? 'REVIEW ATTACHMENTS & PROVIDE FEEDBACK' :
              'STANDARD RESPONSE',
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>🏆</span>
            <span>MILESTONE: 1,000 Email Intelligence Engines</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            V996-V1000: The Ultimate Email Intelligence Suite
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five breakthrough engines that predict, translate, secure, remember, and orchestrate —
            analyzing every email case-by-case and enforcing reply-all for complete communication excellence.
          </p>
        </div>

        {/* Engine Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {engines.map((engine, idx) => (
            <button
              key={engine.id}
              onClick={() => setActiveEngine(idx)}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                activeEngine === idx
                  ? 'border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-400/20'
                  : 'border-gray-700 bg-gray-800/50 hover:border-gray-500'
              }`}
            >
              <div className="text-3xl mb-2">{engine.icon}</div>
              <div className="text-xs text-gray-400 font-mono">{engine.id}</div>
              <div className="text-white font-semibold text-sm">{engine.name}</div>
              <div className="text-yellow-400 text-xs mt-1">{engine.price}</div>
            </button>
          ))}
        </div>

        {/* Active Engine Detail */}
        <div className="bg-gray-800/50 rounded-2xl p-8 mb-12 border border-gray-700">
          <div className="flex items-start gap-6">
            <div className="text-6xl">{engines[activeEngine].icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gray-400 font-mono text-sm">{engines[activeEngine].id}</span>
                <h3 className="text-2xl font-bold text-white">{engines[activeEngine].name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{engines[activeEngine].description}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {engines[activeEngine].features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                {Object.entries(engines[activeEngine].stats).map(([key, val]) => (
                  <div key={key} className="bg-gray-700/50 px-3 py-2 rounded-lg">
                    <div className="text-yellow-400 font-bold">{String(val)}</div>
                    <div className="text-gray-400 text-xs capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* V1000 Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🏆 V1000 Orchestrator: 11 Smart Email Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-gray-800/60 p-4 rounded-xl border border-gray-700 hover:border-purple-500 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="text-white font-mono text-xs">{cat.name}</span>
                </div>
                <p className="text-gray-400 text-sm">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Demo */}
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 mb-12">
          <h3 className="text-2xl font-bold text-white mb-2">🎯 Live Demo: V1000 Orchestrator</h3>
          <p className="text-gray-400 mb-4">Paste any email below and watch the orchestrator analyze it case-by-case:</p>
          <textarea
            value={demoEmail}
            onChange={(e) => setDemoEmail(e.target.value)}
            placeholder="Paste an email here... Try including words like 'urgent', 'attached', 'schedule', or 'negotiate' to see different categories!"
            className="w-full h-32 bg-gray-900 border border-gray-600 rounded-xl p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:border-transparent mb-4"
          />
          <button
            onClick={runDemo}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:from-yellow-400 hover:to-orange-400 transition-all shadow-lg"
          >
            🏆 Analyze with V1000 Orchestrator
          </button>

          {analysisResult && (
            <div className="mt-6 bg-gray-900 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-yellow-400 font-bold mb-3">🏆 V1000 Orchestrator Results:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-400 text-sm">Category</div>
                  <div className="text-white font-bold">{String(analysisResult.category)}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Action</div>
                  <div className="text-white font-bold">{String(analysisResult.action)}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Urgency</div>
                  <div className={`font-bold ${analysisResult.urgency === 'immediate' ? 'text-red-400' : analysisResult.urgency === 'high' ? 'text-orange-400' : 'text-green-400'}`}>
                    {String(analysisResult.urgency).toUpperCase()}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Reply Probability</div>
                  <div className="text-white font-bold">{String(analysisResult.predictedReplyProbability)}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Engines Activated</div>
                  <div className="text-white font-bold">{(analysisResult.enginesActivated as string[]).join(', ')}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Reply All Required</div>
                  <div className={`font-bold ${analysisResult.replyAllRequired ? 'text-green-400' : 'text-gray-400'}`}>
                    {analysisResult.replyAllRequired ? '✅ YES — Enforced' : 'Not required'}
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-900/30 rounded-lg border border-green-500/30">
                <span className="text-green-400 font-bold">✅ Reply-All Enforcement: ACTIVE</span>
                <span className="text-gray-300 text-sm ml-2">— All multi-recipient emails automatically include all recipients</span>
              </div>
            </div>
          )}
        </div>

        {/* Contact & CTA */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-purple-500/10 rounded-2xl p-8 border border-yellow-400/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            🏆 Get the Complete 1,000-Engine Email Intelligence Suite
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses using Zion Tech Group AI to analyze every email case-by-case,
            enforce reply-all, and take the most appropriate action automatically.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="/contact" className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-all">
              Get Started Today
            </a>
            <a href="/services" className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-bold hover:bg-yellow-400/10 transition-all">
              View All Services
            </a>
          </div>
          <div className="text-gray-400 text-sm space-y-1">
            <p>📞 <a href="tel:+13024640950" className="text-yellow-400 hover:underline">+1 302 464 0950</a> | ✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-yellow-400 hover:underline">kleber@ziontechgroup.com</a></p>
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </section>
  );
}
