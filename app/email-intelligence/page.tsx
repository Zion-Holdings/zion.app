'use client';

import React from 'react';
import Link from 'next/link';

const engines = [
  { version: 'V996', icon: '🔮', name: 'Predictive Analytics', desc: 'Predict reply probability, response time, and engagement scores.' },
  { version: 'V997', icon: '🌍', name: 'Multi-Language Intelligence', desc: 'Detect languages, adapt tone per culture, cross-cultural communication.' },
  { version: 'V998', icon: '📎', name: 'Attachment Intelligence', desc: 'Scan attachments for content, malware, phishing, and risk assessment.' },
  { version: 'V999', icon: '🧠', name: 'Context Memory Pro', desc: 'Track commitments, decisions, and context across all conversations.' },
  { version: 'V1000', icon: '🏆', name: 'Intelligence Orchestrator', desc: 'Master orchestrator coordinating all 1000 engines case-by-case.' },
];

export default function EmailIntelligencePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-950 via-gray-950 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🏆 1,000 Email Intelligence Engines
          </div>
          <h1 className="text-5xl font-bold mb-6">AI Email Intelligence Suite</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            The world&apos;s most advanced email processing system. 1,000 AI engines analyze every email
            case-by-case, enforce reply-all, and take the most appropriate action automatically.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-yellow-400">
              Get Started
            </Link>
            <Link href="/services" className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-bold hover:bg-yellow-400/10">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Engines */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Breakthrough Engines (V996-V1000)</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {engines.map((e) => (
              <div key={e.version} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all">
                <div className="text-4xl mb-3">{e.icon}</div>
                <div className="text-xs text-gray-400 font-mono mb-1">{e.version}</div>
                <h3 className="text-lg font-bold text-white mb-2">{e.name}</h3>
                <p className="text-gray-400 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Case-by-Case Analysis</h3>
              <p className="text-gray-400">Every email is categorized into one of 11 types: Urgent, Negotiation, Meeting, Review, and more — each with tailored response strategies.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">📬</div>
              <h3 className="text-xl font-bold mb-3">Reply-All Enforcement</h3>
              <p className="text-gray-400">Strict enforcement of reply-all for multi-recipient emails. Never accidentally exclude someone from the conversation again.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Security & Compliance</h3>
              <p className="text-gray-400">Phishing detection, malware scanning, GDPR/HIPAA compliance monitoring, and data loss prevention built into every email.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-yellow-400">1,000</div>
              <div className="text-gray-400">AI Engines</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-yellow-400">4,861</div>
              <div className="text-gray-400">Services</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-yellow-400">11</div>
              <div className="text-gray-400">Email Categories</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-yellow-400">96%</div>
              <div className="text-gray-400">Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Email Workflow?</h2>
          <p className="text-gray-300 mb-8">Contact us today to get started with the world&apos;s most advanced AI email intelligence system.</p>
          <div className="text-gray-400 space-y-2">
            <p>📞 <a href="tel:+13024640950" className="text-yellow-400 hover:underline">+1 302 464 0950</a></p>
            <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-yellow-400 hover:underline">kleber@ziontechgroup.com</a></p>
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </main>
  );
}
