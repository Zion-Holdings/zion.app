'use client';

import { useState } from 'react';

const engines = [
  {
    version: 'V966',
    name: 'Thread Summarizer',
    icon: '📝',
    color: 'from-violet-600 to-violet-800',
    description: 'Auto-summarizes long email threads into concise executive summaries with action items, decisions, open questions, and key topics. Saves 30+ minutes per day.',
    features: [
      'Action Item Extraction — Detects requests, tasks, and deadlines with regex pattern matching',
      'Decision Logging — Captures decisions made with context and rationale for audit trails',
      'Open Question Tracking — Identifies unanswered questions that need resolution',
      'Key Topic Extraction — Surfaces main discussion topics from email content',
      'Executive Summary Generation — Structured bullet-point summaries for quick review',
      'Thread Complexity Scoring — 0-100 score from length, depth, participants, and questions',
    ],
    metrics: { timeSaved: '30+ min/day', actionItems: 'Auto', summaries: 'Instant' },
    useCases: ['Executive inboxes', 'Project management', 'Long threads', 'Busy professionals'],
  },
  {
    version: 'V967',
    name: 'Priority Queue',
    icon: '⚡',
    color: 'from-yellow-600 to-yellow-800',
    description: 'Multi-signal intelligent email prioritization using 5 weighted signals: sender importance, content urgency, business value, thread context, and time sensitivity.',
    features: [
      'Sender Importance (0-25) — VIP detection for CEOs, CTOs, board members, and executives',
      'Content Urgency (0-25) — Critical keywords, deadlines, negative sentiment, escalation markers',
      'Business Value (0-25) — Monetary amounts, contracts, revenue signals, partnership opportunities',
      'Thread Context (0-15) — Thread depth, word count, attachment presence scoring',
      'Time Sensitivity (0-10) — Today/tomorrow/immediate deadline detection',
      'P0-P4 Priority Levels — From CRITICAL (15min) to LOW (24hr) response targets',
    ],
    metrics: { signals: '5', levels: 'P0-P4', scoring: '0-100' },
    useCases: ['Executive assistants', 'Sales teams', 'Support desks', 'Any busy inbox'],
  },
  {
    version: 'V968',
    name: 'Attachment Intelligence',
    icon: '📎',
    color: 'from-teal-600 to-teal-800',
    description: 'Intelligent attachment analysis with document type classification, data extraction from filenames, coherence checking, missing attachment detection, and sensitive data risk assessment.',
    features: [
      'Document Type Classification — 6 types: contracts, invoices, proposals, reports, specs, spreadsheets',
      'Data Extraction — Pulls dates, amounts, versions, and project IDs from filenames',
      'Coherence Checking — Verifies attachments are referenced in email body',
      'Missing Attachment Detection — Catches "forgot the attachment" errors before sending',
      'Sensitive Data Risk Assessment — Flags confidential, financial, and personal data risks',
      'Smart Routing — Auto-routes invoices to finance, contracts to legal, proposals to sales',
    ],
    metrics: { docTypes: '6+', riskLevels: '3', routing: 'Auto' },
    useCases: ['Legal teams', 'Finance departments', 'Project managers', 'Compliance officers'],
  },
  {
    version: 'V969',
    name: 'Response Quality Analyzer',
    icon: '✨',
    color: 'from-pink-600 to-pink-800',
    description: 'Evaluates email response quality across 8 dimensions with A+ to F grading, improvement suggestions, and strength identification for continuous improvement.',
    features: [
      'Completeness Scoring — Checks if all questions and points are addressed',
      'Clarity Analysis — Sentence length, jargon detection, and clarity indicator scanning',
      'Tone Assessment — Professional phrases, empathy indicators, and negative tone detection',
      'Professionalism Check — Slang, excessive punctuation, and informal abbreviation detection',
      'Accuracy Heuristics — Specificity scoring from numbers, dates, and references',
      'Actionability Scoring — Next steps, deadlines, and clear deliverable detection',
    ],
    metrics: { dimensions: '8', grades: 'A+ to F', coaching: 'Real-time' },
    useCases: ['Customer support', 'Sales teams', 'Executive communication', 'Training programs'],
  },
  {
    version: 'V970',
    name: 'Thread Continuity Manager',
    icon: '🔗',
    color: 'from-blue-600 to-blue-800',
    description: 'Detects fragmented conversations across multiple threads, generates thread fingerprints for matching, tracks conversation state, and recommends consolidation.',
    features: [
      'Topic Identification — 6+ topic categories with keyword pattern matching',
      'Thread Fingerprinting — Unique hashes from participants + topics for instant matching',
      'Related Thread Discovery — Finds conversations with 50%+ participant and topic overlap',
      'Fragmentation Detection — 5 patterns for detecting cross-references and split discussions',
      'Conversation State Tracking — 6 states: awaiting response, info shared, decision needed, etc.',
      'Missing Participant Detection — Identifies stakeholders from related threads not in current',
    ],
    metrics: { topics: '6+', states: '6', fingerprinting: 'MD5' },
    useCases: ['Large organizations', 'Cross-team projects', 'Complex negotiations', 'Account management'],
  },
];

export default function V966V970Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);
  const engine = engines[activeEngine];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-indigo-950/20 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-4">
            🚀 V966-V970 • Summarize • Prioritize • Attachments • Quality • Continuity
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Intelligent Email Processing Suite
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            5 advanced engines that transform email chaos into organized, prioritized, and actionable intelligence — 
            with <span className="text-violet-400 font-semibold">thread summarization</span>, 
            <span className="text-yellow-400 font-semibold"> smart prioritization</span>, and
            <span className="text-pink-400 font-semibold"> quality assurance</span>.
          </p>
        </div>

        {/* Engine Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {engines.map((e, i) => (
            <button
              key={e.version}
              onClick={() => setActiveEngine(i)}
              className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeEngine === i
                  ? `bg-gradient-to-r ${e.color} text-white shadow-lg scale-105`
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <span className="mr-2">{e.icon}</span>
              {e.version}: {e.name}
            </button>
          ))}
        </div>

        {/* Active Engine Detail */}
        <div className={`bg-gradient-to-br ${engine.color} rounded-2xl p-1 mb-10`}>
          <div className="bg-gray-900 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{engine.icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-white">{engine.version}: {engine.name}</h3>
                <p className="text-gray-400 mt-1">{engine.description}</p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {engine.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-800/50 rounded-lg p-4">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {Object.entries(engine.metrics).map(([key, value]) => (
                <div key={key} className="text-center bg-gray-800/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* Use Cases */}
            <div className="flex flex-wrap gap-2">
              {engine.useCases.map((useCase, i) => (
                <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400 border border-gray-700">
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Reply-All + Quality Banners */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl">📬</span>
              <div>
                <h4 className="text-lg font-bold text-amber-400">Strict Reply-All Enforcement</h4>
                <p className="text-gray-400 text-sm mt-1">
                  All V966-V970 engines enforce reply-all for multi-recipient emails. 
                  Every stakeholder stays informed with zero communication gaps.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-pink-500/10 to-violet-500/10 border border-pink-500/20 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl">✨</span>
              <div>
                <h4 className="text-lg font-bold text-pink-400">Quality-First Design</h4>
                <p className="text-gray-400 text-sm mt-1">
                  V969 Response Quality Analyzer scores every response across 8 dimensions.
                  Real-time coaching ensures professional, complete, and actionable emails.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-violet-900/30 to-indigo-900/30 rounded-xl p-8 border border-violet-500/20">
          <h4 className="text-2xl font-bold text-white mb-2">Transform Your Email Productivity</h4>
          <p className="text-gray-400 mb-6">Deploy V966-V970 for intelligent summarization, prioritization, and quality assurance.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <span>📞 +1 302 464 0950</span>
            <span>✉️ kleber@ziontechgroup.com</span>
            <span>📍 364 E Main St STE 1008, Middletown, DE 19709</span>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/contact" className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors">
              Get Started
            </a>
            <a href="/services" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors">
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
