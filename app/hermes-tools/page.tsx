import React from 'react';

export const metadata = {
  title: 'Hermes Agent Tools & Skills Marketplace | Zion Tech Group',
  description: 'Browse the Hermes agent tools catalog. 50+ specialized tools for messaging, DevOps, data, security, finance, and more. Deploy agents with pre-built skills.',
};

export default function HermesToolsPage() {
  const tools = [
    { name: 'Telegram Bot Builder', cat: 'Messaging', desc: 'Visual bot builder with menus, inline queries, and payment integration' },
    { name: 'Discord Command Builder', cat: 'Messaging', desc: 'Slash commands, modals, auto-moderation, and ticketing' },
    { name: 'CI/CD Pipeline Monitor', cat: 'DevOps', desc: 'Auto-detect failures, trigger rebuilds, self-heal deployments' },
    { name: 'Infrastructure Monitor', cat: 'DevOps', desc: 'Multi-cloud monitoring with predictive alerting' },
    { name: 'Security Incident Responder', cat: 'Security', desc: 'Auto-detect, isolate, forensicate, and notify' },
    { name: 'Data Pipeline Orchestrator', cat: 'Data', desc: 'Ingest, transform, validate, and monitor data pipelines' },
    { name: 'Lead Scoring Engine', cat: 'Sales', desc: 'Behavioral scoring and intent detection' },
    { name: 'Contract Analyzer', cat: 'Legal', desc: 'Clause analysis and risk scoring' },
    { name: 'Property Valuator', cat: 'Real Estate', desc: 'AI comparative market analysis' },
    { name: 'Fraud Detector', cat: 'Finance', desc: 'Real-time transaction anomaly detection' },
    { name: 'Clinical Trial Manager', cat: 'Healthcare', desc: 'Patient recruitment and compliance tracking' },
    { name: 'Content Generator', cat: 'Marketing', desc: 'SEO-optimized blog posts and social content' },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Hermes Agent Tools Marketplace</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">50+ pre-built tools and skills. Deploy agents with battle-tested capabilities in minutes.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((t) => (
              <div key={t.name} className="border border-slate-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-lg transition-all">
                <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{t.cat}</span>
                <h3 className="text-lg font-semibold text-slate-900 mt-3 mb-2">{t.name}</h3>
                <p className="text-slate-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
