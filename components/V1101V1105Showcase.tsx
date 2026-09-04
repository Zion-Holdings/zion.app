'use client';

import { useState } from 'react';

const engines = [
  {
    id: 'v1101',
    name: 'Context Memory Engine',
    icon: '🧠',
    price: '$579/mo',
    description: 'Remember every conversation. AI builds rich relationship profiles across months of emails - topics, preferences, sentiment history, and key facts.',
    features: ['Cross-conversation memory', 'Relationship stage tracking', 'Topic history indexing', 'Sentiment evolution', 'Key fact extraction', 'Contextual recommendations'],
    color: 'from-violet-500 to-purple-600'
  },
  {
    id: 'v1102',
    name: 'CRM Sync Engine',
    icon: '🔗',
    price: '$649/mo',
    description: 'Auto-sync emails to CRM. AI extracts deal signals, revenue mentions, decision makers, pain points, and updates pipeline stages in real-time.',
    features: ['Deal signal detection', 'Revenue mention extraction', 'Decision maker identification', 'Pipeline stage automation', 'Pain point tracking', 'Bi-directional CRM sync'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'v1103',
    name: 'Task Converter Engine',
    icon: '✅',
    price: '$449/mo',
    description: 'Auto-extract action items from emails. AI detects tasks, deadlines, priorities, and assignees with confidence scoring.',
    features: ['Action item extraction', 'Deadline detection', 'Priority scoring', 'Assignee detection', 'PM tool integration', 'Confidence-based filtering'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'v1104',
    name: 'Translation Hub Engine',
    icon: '🌍',
    price: '$549/mo',
    description: 'Real-time translation in 40+ languages with cultural adaptation. Detect language, adjust formality, and respond with culturally appropriate style.',
    features: ['40+ language support', 'Auto language detection', 'Cultural adaptation', 'Formality matching', 'Greeting/closing localization', 'Cultural tips'],
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'v1105',
    name: 'Phishing Shield Engine',
    icon: '🛡️',
    price: '$699/mo',
    description: 'Advanced AI phishing detection. Analyze sender reputation, scan URLs, detect spoofing, identify social engineering tactics, and block threats.',
    features: ['ML phishing scoring', 'Sender reputation', 'URL threat analysis', 'Spoofing detection', 'Social engineering detection', 'Attachment scanning'],
    color: 'from-red-500 to-rose-600'
  }
];

export default function V1101V1105Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);
  const [demoInput, setDemoInput] = useState('');
  const [demoResult, setDemoResult] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const runDemo = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const engine = engines[activeEngine];
      const results: Record<string, any> = {
        v1101: {
          context_brief: {
            relationship_stage: demoInput.length > 100 ? 'established' : 'developing',
            total_interactions: 12,
            topics_discussed: ['project', 'budget', 'timeline'],
            average_sentiment: 0.42,
            days_since_last_contact: 3,
            pending_actions: ['Send proposal update', 'Schedule review call']
          },
          recommendation: 'Established relationship - personalize with shared context',
          reply_all: true
        },
        v1102: {
          deal_signals: demoInput.toLowerCase().includes('budget') ? [{ type: 'budget_confirmed', strength: 'high' }] : [],
          revenue_mentions: demoInput.match(/\$[\d,]+/) ? [{ amount: 75000 }] : [],
          crm_stage: demoInput.toLowerCase().includes('approved') ? 'negotiation' : 'proposal',
          tags: ['hot_lead', 'revenue_discussed'],
          next_action: 'Send contract for signature',
          reply_all: true
        },
        v1103: {
          tasks_extracted: [
            { id: 'TASK-1001', description: 'Review project timeline', priority: 'high', deadline: 'Friday', assignee: 'team' },
            { id: 'TASK-1002', description: 'Update documentation', priority: 'medium', deadline: 'end of month', assignee: 'unassigned' }
          ],
          total_tasks: 2,
          critical_count: 0,
          reply_all: true
        },
        v1104: {
          detected_language: { language: 'es', name: 'Spanish', confidence: 0.92 },
          needs_translation: true,
          cultural_guidance: {
            formality: 'high',
            greeting: 'Estimado/a',
            closing: 'Saludos cordiales',
            tips: ['Personal relationships are important', 'Expect longer greetings']
          },
          reply_all: true
        },
        v1105: {
          phishing_score: demoInput.toLowerCase().includes('urgent') ? 65 : 8,
          risk_level: demoInput.toLowerCase().includes('urgent') ? 'high' : 'safe',
          sender_reputation: demoInput.toLowerCase().includes('urgent') ? 25 : 87,
          url_analysis: [{ suspicious: demoInput.includes('http') && demoInput.includes('click') }],
          social_engineering: demoInput.toLowerCase().includes('urgent') ? { tactics: ['urgency', 'fear'] } : { tactics: [] },
          recommendation: demoInput.toLowerCase().includes('urgent') ? 'QUARANTINE - Verify sender through alternate channel' : 'CLEAR - No phishing indicators',
          reply_all: false
        }
      };
      setDemoResult(results[engine.id]);
      setIsProcessing(false);
    }, 1200);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🚀 Email Intelligence Suite V1101-V1105
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Five breakthrough AI engines: Context Memory, CRM Sync, Task Converter, Translation Hub, and Phishing Shield.
            Making emails smarter, safer, and more productive than ever.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 bg-indigo-600/30 rounded-full text-indigo-200 text-sm">
              ✉️ Reply-All Enforcement Built-in
            </span>
            <span className="px-4 py-2 bg-green-600/30 rounded-full text-green-200 text-sm">
              🧠 Case-by-Case AI Analysis
            </span>
            <span className="px-4 py-2 bg-red-600/30 rounded-full text-red-200 text-sm">
              🛡️ Enterprise Security
            </span>
          </div>
        </div>

        {/* Engine Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {engines.map((engine, idx) => (
            <button
              key={engine.id}
              onClick={() => { setActiveEngine(idx); setDemoResult(null); }}
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeEngine === idx
                  ? `bg-gradient-to-r ${engine.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="text-xl mr-2">{engine.icon}</span>
              {engine.name}
            </button>
          ))}
        </div>

        {/* Active Engine Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{engines[activeEngine].icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-white">{engines[activeEngine].name}</h3>
                <p className="text-2xl font-bold text-green-400">{engines[activeEngine].price}</p>
              </div>
            </div>
            <p className="text-indigo-200 mb-6">{engines[activeEngine].description}</p>
            <ul className="space-y-3">
              {engines[activeEngine].features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/90">
                  <span className="text-green-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Demo */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h4 className="text-xl font-bold text-white mb-4">🧪 Live Demo</h4>
            <textarea
              value={demoInput}
              onChange={(e) => setDemoInput(e.target.value)}
              placeholder={`Try: "${
                activeEngine === 0 ? 'We discussed the budget last month and agreed on $500K for the project.' :
                activeEngine === 1 ? 'Budget approved for $75,000. Ready to proceed with the contract.' :
                activeEngine === 2 ? 'Please review the timeline by Friday. John needs to fix the login bug ASAP.' :
                activeEngine === 3 ? 'Hola, buenos días. Nos gustaría discutir una posible colaboración.' :
                activeEngine === 4 ? 'URGENT: Your account has been suspended. Click here immediately to verify.' : ''
              }"`}
              className="w-full h-32 bg-white/5 border border-white/20 rounded-xl p-4 text-white placeholder-white/40 mb-4 resize-none"
            />
            <button
              onClick={runDemo}
              disabled={isProcessing || !demoInput}
              className={`w-full py-3 rounded-xl font-bold text-white transition-all ${
                isProcessing ? 'bg-gray-600' : `bg-gradient-to-r ${engines[activeEngine].color} hover:scale-105`
              }`}
            >
              {isProcessing ? '⏳ Analyzing...' : `🔍 Run ${engines[activeEngine].name}`}
            </button>

            {demoResult && (
              <div className="mt-6 bg-black/30 rounded-xl p-4 border border-green-500/30">
                <h5 className="text-green-400 font-bold mb-2">✅ Analysis Results:</h5>
                <pre className="text-sm text-white/80 whitespace-pre-wrap font-mono">
                  {JSON.stringify(demoResult, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Enterprise Integration */}
        <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🏢 Enterprise Integration</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: '🧠', label: 'Context Memory' },
              { icon: '🔗', label: 'CRM Integration' },
              { icon: '✅', label: 'Task Management' },
              { icon: '🌍', label: '40+ Languages' },
              { icon: '🛡️', label: 'Phishing Protection' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4 bg-white/5 rounded-xl">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <span className="text-white/80 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-8 border border-indigo-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Email Intelligence?</h3>
          <p className="text-indigo-200 mb-6">Contact our team for a personalized demo and pricing.</p>
          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            <span>📱 +1 302 464 0950</span>
            <span>📧 kleber@ziontechgroup.com</span>
            <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
          </div>
        </div>
      </div>
    </section>
  );
}
