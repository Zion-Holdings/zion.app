'use client';

import { useState } from 'react';

const engines = [
  {
    id: 'v1096',
    name: 'Sentiment Trend Analyzer',
    icon: '📊',
    price: '$529/mo',
    description: 'Track sentiment evolution across conversations. Predict customer satisfaction and detect relationship deterioration before it\'s too late.',
    features: ['Real-time sentiment tracking', 'Trend prediction algorithms', 'Sudden drop alerts', 'Customer satisfaction forecasting', 'Relationship health scoring'],
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'v1097',
    name: 'Response Time Optimizer',
    icon: '⏱️',
    price: '$479/mo',
    description: 'AI-powered response timing that learns from engagement patterns. Maximize reply impact with data-driven send time optimization.',
    features: ['SLA compliance tracking', 'Optimal send time prediction', 'Engagement pattern analysis', 'Bottleneck detection', 'Response time analytics dashboard'],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'v1098',
    name: 'Thread Summarizer Pro',
    icon: '📝',
    price: '$549/mo',
    description: 'Transform lengthy email threads into executive briefs. Auto-extract decisions, action items, and key milestones from complex conversations.',
    features: ['Executive brief generation', 'Decision extraction', 'Action item tracking', 'Sentiment shift detection', 'Thread timeline visualization'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'v1099',
    name: 'Attachment Intelligence',
    icon: '📎',
    price: '$599/mo',
    description: 'Deep analysis of email attachments. Detect sensitive data, track versions, and generate smart summaries of documents, spreadsheets, and code.',
    features: ['Sensitive data detection (PII/PCI)', 'File version tracking', 'Auto-categorization', 'Content extraction & summary', 'Risk level assessment'],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'v1100',
    name: 'Meeting Scheduler AI',
    icon: '📅',
    price: '$649/mo',
    description: 'Automatically detect meeting intent, find optimal time slots, and generate calendar invites. Handle rescheduling and cancellations intelligently.',
    features: ['Meeting intent detection', 'Smart slot finding', 'Calendar invite generation', 'Timezone handling', 'Reschedule & cancel management'],
    color: 'from-pink-500 to-rose-600'
  }
];

export default function V1096V1100Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);
  const [demoInput, setDemoInput] = useState('');
  const [demoResult, setDemoResult] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const runDemo = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const engine = engines[activeEngine];
      const results: Record<string, any> = {
        v1096: {
          sentiment: demoInput.includes('great') || demoInput.includes('happy') ? 0.7 : demoInput.includes('bad') || demoInput.includes('angry') ? -0.6 : 0.1,
          trend: demoInput.includes('great') ? 'improving' : demoInput.includes('bad') ? 'deteriorating' : 'stable',
          alert: demoInput.includes('terrible') || demoInput.includes('angry'),
          prediction: demoInput.includes('great') ? 'High satisfaction' : demoInput.includes('bad') ? 'At risk - churn likely' : 'Neutral',
          reply_all: true
        },
        v1097: {
          optimal_time: '10:30 AM (Tuesday)',
          engagement_rate: '87%',
          sla_status: 'Within SLA (3.2 hours remaining)',
          recommendation: 'Send now - optimal engagement window',
          reply_all: demoInput.includes('team') || demoInput.includes('all')
        },
        v1098: {
          key_points: ['Budget discussion', 'Action items identified', 'Decision pending'],
          decisions: demoInput.includes('approved') ? ['Budget approved'] : [],
          actions: demoInput.includes('please') ? ['Follow up required'] : [],
          participants: 4,
          reading_time: '2 min summary (from 15 min thread)',
          reply_all: true
        },
        v1099: {
          files_analyzed: 3,
          sensitive_data: demoInput.includes('ssn') || demoInput.includes('password') ? 'ALERT: PII detected' : 'No sensitive data found',
          risk_level: demoInput.includes('password') ? 'HIGH' : 'LOW',
          categories: ['Document', 'Spreadsheet', 'Code'],
          reply_all: true
        },
        v1100: {
          meeting_intent: demoInput.includes('meet') || demoInput.includes('call') || demoInput.includes('schedule'),
          suggested_time: 'Tomorrow 2:00 PM - 3:00 PM',
          available_slots: 5,
          participants: 4,
          calendar_invite: 'Generated',
          reply_all: true
        }
      };
      setDemoResult(results[engine.id]);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🚀 Email Intelligence Suite V1096-V1100
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Five breakthrough AI engines that transform email from a communication tool into an intelligent business platform. 
            Sentiment analysis, response optimization, thread summarization, attachment intelligence, and meeting scheduling.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 bg-purple-600/30 rounded-full text-purple-200 text-sm">
              ✉️ Reply-All Enforcement Built-in
            </span>
            <span className="px-4 py-2 bg-blue-600/30 rounded-full text-blue-200 text-sm">
              🧠 Case-by-Case AI Analysis
            </span>
            <span className="px-4 py-2 bg-green-600/30 rounded-full text-green-200 text-sm">
              🔒 Enterprise-Grade Security
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
            <p className="text-purple-200 mb-6">{engines[activeEngine].description}</p>
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
                activeEngine === 0 ? 'I am very happy with your excellent service!' :
                activeEngine === 1 ? 'Urgent: Need response on the project ASAP' :
                activeEngine === 2 ? 'We approved the budget. Please send the contracts by Wednesday.' :
                activeEngine === 3 ? 'Attached: project docs with password=secret123' :
                activeEngine === 4 ? "Let's schedule a meeting to discuss the project timeline." : ''
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

        {/* Enterprise Features */}
        <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🏢 Enterprise Integration</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: '📊', label: 'Real-time Analytics' },
              { icon: '🔗', label: 'CRM Integration' },
              { icon: '📅', label: 'Calendar Sync' },
              { icon: '🔒', label: 'SOC 2 Compliant' },
              { icon: '🌐', label: '40+ Languages' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4 bg-white/5 rounded-xl">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <span className="text-white/80 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Email Intelligence?</h3>
          <p className="text-purple-200 mb-6">Contact our team for a personalized demo and pricing.</p>
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
