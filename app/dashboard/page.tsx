// app/dashboard/page.tsx — AI Agent Monitoring Dashboard
'use client';

import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';

export const metadata = {
  title: 'AI Agent Dashboard | Zion Tech Group',
  description: 'Monitor and manage your AI agents from a centralized dashboard. Track performance, monitor autonomous workflows, and optimize your AI investments.',
};

export default function DashboardPage() {
  return (
    <PageWrapper>
      <div className="container-page">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">AI Agent Dashboard</span>
        </nav>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-5xl mb-4 block">📊</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">AI Agent Dashboard</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            Monitor and manage your AI agents from a centralized dashboard.
            Track performance, monitor autonomous workflows, and optimize
            your AI investments.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {[
            { value: '200+', label: 'Active Agents' },
            { value: '99.9%', label: 'Uptime' },
            { value: '42', label: 'Today Tasks' },
            { value: '1.2s', label: 'Avg Response' },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-slate-900/60 rounded-xl p-5 border border-slate-700/50 text-center hover:border-purple-500/30 transition-colors"
            >
              <div className="text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Dashboard Features */}
        <div className="glass-card p-8 max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Dashboard Features
          </h2>
          <ul className="text-slate-300 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-0.5">▸</span>
              <span>
                <strong className="text-white">Real-time agent status</strong> —
                Live monitoring of every deployed AI agent across your
                infrastructure
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-0.5">▸</span>
              <span>
                <strong className="text-white">Performance analytics</strong> —
                Execution time, success rates, and throughput tracking
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-0.5">▸</span>
              <span>
                <strong className="text-white">Alert notifications</strong> —
                Automatic alerts when agents fail or degrade
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-0.5">▸</span>
              <span>
                <strong className="text-white">Historical trends</strong> —
                Performance graphs and trend analysis over time
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-0.5">▸</span>
              <span>
                <strong className="text-white">Multi-agent orchestration</strong>{' '}
                — Coordinate complex workflows across multiple agents
              </span>
            </li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <Link
            href="/portal"
            className="glass-card p-6 flex flex-col items-center text-center group hover:border-purple-500/40 transition-all"
          >
            <span className="text-3xl mb-3">🔐</span>
            <h3 className="font-semibold text-white mb-2 group-hover:text-purple-300">
              Access Portal
            </h3>
            <p className="text-sm text-slate-400 mb-2">
              Login to your agent portal
            </p>
            <span className="text-purple-400 text-sm font-medium">
              Open portal →
            </span>
          </Link>
          <Link
            href="/services/"
            className="glass-card p-6 flex flex-col items-center text-center group hover:border-purple-500/40 transition-all"
          >
            <span className="text-3xl mb-3">⚙️</span>
            <h3 className="font-semibold text-white mb-2 group-hover:text-purple-300">
              View Services
            </h3>
            <p className="text-sm text-slate-400 mb-2">
              AI Services catalog
            </p>
            <span className="text-purple-400 text-sm font-medium">
              Browse services →
            </span>
          </Link>
          <Link
            href="/configurator/"
            className="glass-card p-6 flex flex-col items-center text-center group hover:border-purple-500/40 transition-all"
          >
            <span className="text-3xl mb-3">⚡</span>
            <h3 className="font-semibold text-white mb-2 group-hover:text-purple-300">
              Get Started
            </h3>
            <p className="text-sm text-slate-400 mb-2">
              Custom AI proposal
            </p>
            <span className="text-purple-400 text-sm font-medium">
              Launch →
            </span>
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center glass-card p-10 max-w-3xl mx-auto">
          <span className="text-5xl block mb-4">🚀</span>
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Deploy AI Agents?
          </h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            The dashboard showcases what's possible with Zion Tech Group's
            autonomous AI infrastructure. When you're ready to deploy your own
            agents, we build the full production stack with monitoring,
            alerting, and governance baked in.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/configurator/"
              className="btn-primary text-lg px-10 py-4"
            >
              ⚡ Get Your Custom Proposal
            </Link>
            <Link
              href="/contact/"
              className="btn-secondary text-lg px-10 py-4"
            >
              ✉️ Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
