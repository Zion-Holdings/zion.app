import React from 'react';

export const metadata = {
  title: 'Hermes Multi-Agent AI Platform | Swarm Orchestration | Zion Tech Group',
  description: 'Deploy, coordinate and scale fleets of Hermes AI agents. Enterprise swarm orchestration for exponential automation — Telegram, Discord, Slack, WhatsApp, Signal bots, DevOps, security, data pipelines, CRM, and 20+ specialized agent categories.',
  openGraph: {
    title: 'Hermes Multi-Agent AI Platform | Zion Tech Group',
    description: 'Enterprise agent swarm orchestration. 20+ specialized AI agent categories. Zero-downtime scaling, collision avoidance, cross-platform coordination.',
    type: 'website',
  },
};

export default function HermesAgentsPage() {
  const categories = [
    { name: 'Agent Orchestration & Swarms', icon: '🐝', desc: 'Fleet management, delegation matrix, communication bus' },
    { name: 'Messaging Agents', icon: '✈️', desc: 'Telegram, Discord, Slack, WhatsApp, Signal' },
    { name: 'DevOps Agents', icon: '🔄', desc: 'CI/CD, infrastructure monitoring, K8s, security' },
    { name: 'Data & Analytics Agents', icon: '📊', desc: 'Pipelines, BI dashboards, ML monitoring, vector search' },
    { name: 'CRM & Sales Agents', icon: '💰', desc: 'Lead scoring, engagement, customer success' },
    { name: 'Healthcare Agents', icon: '🏥', desc: 'Clinical trials, medical coding, telehealth' },
    { name: 'Finance Agents', icon: '💳', desc: 'Fraud detection, treasury, regtech, payments' },
    { name: 'Education Agents', icon: '📚', desc: 'EdTech content, student success, research' },
    { name: 'Real Estate Agents', icon: '🏠', desc: 'Valuation, property management, construction' },
    { name: 'Legal Agents', icon: '⚖️', desc: 'Research, contract review, eDiscovery, IP' },
    { name: 'Manufacturing Agents', icon: '🏭', desc: 'Predictive maintenance, quality control, supply chain' },
    { name: 'Retail Agents', icon: '🛍️', desc: 'Recommendations, inventory, pricing, returns' },
    { name: 'HR Agents', icon: '👥', desc: 'Recruiting, onboarding, performance, payroll' },
    { name: 'Energy Agents', icon: '⚡', desc: 'Trading, grid optimization, ESG reporting' },
  ];

  const features = [
    { title: 'Swarm Intelligence', desc: 'Agents coordinate autonomously using pub/sub messaging, shared state, and priority-aware task queues. Collision detection prevents duplicate work.' },
    { title: 'Cross-Platform', desc: 'Deploy agents across Telegram, Discord, Slack, WhatsApp, Signal, and email with unified management and consistent UX.' },
    { title: 'Zero-Downtime Scaling', desc: 'Auto-scaling worker pools with health monitoring, auto-restart, and seamless handoff between agent instances.' },
    { title: 'Role-Based Delegation', desc: 'Orchestrator and leaf agents collaborate with automatic escalation, approval gates, and audit trails.' },
    { title: 'Compliance Built-In', desc: 'Audit logging, data residency controls, and regulatory reporting for HIPAA, GDPR, SOC2, and industry-specific requirements.' },
    { title: 'Cost Transparency', desc: 'Per-task cost analytics, budget alerts, and optimization recommendations. Know exactly what each agent hour costs.' },
  ];

  const stats = [
    { value: '20+', label: 'Agent Categories' },
    { value: '1000+', label: 'Agents Per Fleet' },
    { value: '<100ms', label: 'Dispatch Latency' },
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '10x', label: 'Throughput Scaling' },
    { value: '24/7', label: 'Autonomous Ops' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-8">
              <span className="text-indigo-400 text-sm font-medium">Hermes Agent Platform</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Multi-Agent AI Swarm<br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Orchestration at Scale</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Deploy fleets of specialized AI agents that coordinate autonomously. From messaging bots to DevOps, security, finance, healthcare — exponential growth through agent collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </a>
              <a href="#categories" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold transition-colors">
                Explore Categories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">20+ Specialized Agent Categories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Every industry, every function — deploy agents that know your domain inside and out.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all group">
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{cat.name}</h3>
                <p className="text-sm text-slate-600">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Enterprise-Grade Agent Infrastructure</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Built for organizations that cannot afford downtime, security gaps, or compliance failures.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Deploy Your Agent Fleet?</h2>
          <p className="text-xl text-indigo-100 mb-8">Start with a single agent. Scale to thousands. All coordinated, all compliant, all autonomous.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-700 hover:bg-indigo-50 rounded-lg font-semibold transition-colors">
              Get Started
            </a>
            <a href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg font-semibold transition-colors">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
