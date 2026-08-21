import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';
import JsonLd from '@/components/JsonLd';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Hermes Agent Fleet Manager — Manage Your AI Agent Swarms | Zion Tech Group',
  description:
    'Hermes Agent Fleet Manager. Real-time dashboard to monitor, scale, and optimize your fleet of autonomous AI agents. 24/7 observability across CI/CD, SEO, security, and growth automation.',
  keywords: [
    'Hermes Agent',
    'fleet manager',
    'agent swarm',
    'AI agent monitoring',
    'multi-agent orchestration',
    'autonomous automation',
    'CI/CD automation',
    'SEO automation',
    'security automation',
    'growth automation',
  ],
  openGraph: {
    title: 'Hermes Agent Fleet Manager — Manage Your AI Agent Swarms | Zion Tech Group',
    description:
      'Real-time dashboard to monitor, scale, and optimize your fleet of autonomous AI agents. 24/7 observability across CI/CD, SEO, security, and growth automation.',
    url: 'https://ziontechgroup.com/tools/hermes-agent-fleet-manager/',
    type: 'website',
  },
  alternates: { canonical: '/tools/hermes-agent-fleet-manager/' },
};

const TOOL_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Hermes Agent Fleet Manager',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  applicationSuite: 'Hermes Agent',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Real-time dashboard to monitor, scale, and optimize your fleet of autonomous AI agents.',
};

export default function FleetManagerPage() {
  return (
    <>
      <JsonLd data={TOOL_SCHEMA} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'AI Tools', href: '/tools/' },
          { name: 'Hermes Agent Fleet Manager' },
        ]}
      />
      <StandardPage
        title="Hermes Agent Fleet Manager"
        subtitle="Real-time dashboard to monitor, scale, and optimize your fleet of autonomous AI agents. 24/7 observability across CI/CD, SEO, security, and growth automation."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'AI Tools', href: '/tools/' },
          { label: 'Hermes Agent Fleet Manager' },
        ]}
        actions={[
          {
            label: 'Book a Consultation',
            href: 'https://calendly.com/kleber-ziontechgroup/consultation',
            style: 'primary',
          },
          { label: 'View All Tools', href: '/tools/', style: 'secondary' },
        ]}
        features={[
          {
            icon: '📊',
            title: 'Live Agent Status',
            description: 'Real-time monitoring of all 10 production agents with uptime, task queue depth, and health metrics.',
          },
          {
            icon: '📈',
            title: 'Performance Analytics',
            description: 'Track task completion rates, skill accuracy, and cost-per-execution across your entire fleet.',
          },
          {
            icon: '🔄',
            title: 'Auto-Scaling',
            description: 'Dynamically scale agent instances based on workload demand with configurable thresholds.',
          },
          {
            icon: '🛡️',
            title: 'Security Auditing',
            description: 'Continuous vulnerability scanning, compliance checks, and automated incident response.',
          },
        ]}
      >
        {/* Fleet Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Production Fleet in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">10</div>
              <div className="text-sm text-slate-400">Active Agents</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">350+</div>
              <div className="text-sm text-slate-400">Skills Installed</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">50K+</div>
              <div className="text-sm text-slate-400">Tasks Completed</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">16,600+</div>
              <div className="text-sm text-slate-400">Services Cataloged</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">99.99%</div>
              <div className="text-sm text-slate-400">Fleet Uptime</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">20+</div>
              <div className="text-sm text-slate-400">Integrations</div>
            </div>
          </div>
        </section>

        {/* Agent Roster */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Production Agent Roster</h2>
          <div className="space-y-4">
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-xl font-semibold text-white mb-1">OWL</h3>
              <p className="text-sm text-slate-500 mb-2">Role: Security & Compliance Automation</p>
              <p className="text-slate-300">Continuous vulnerability scanning, OWASP compliance checks, penetration testing assistance, and automated incident response playbooks.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-xl font-semibold text-white mb-1">Kilo</h3>
              <p className="text-sm text-slate-500 mb-2">Role: CI/CD & Infrastructure Automation</p>
              <p className="text-slate-300">GitHub Actions workflow design, build failure detection and auto-remediation, infrastructure monitoring with Telegram alerts, and automated rollback on regression.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-xl font-semibold text-white mb-1">Tablet</h3>
              <p className="text-sm text-slate-500 mb-2">Role: SEO Content & Growth Automation</p>
              <p className="text-slate-300">Service discovery across 100+ sources, SEO-optimized landing page generation at scale, automated sitemap regeneration, and personalized outreach email campaigns.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-xl font-semibold text-white mb-1">Quel</h3>
              <p className="text-sm text-slate-500 mb-2">Role: Customer Support Automation</p>
              <p className="text-slate-300">24/7 autonomous ticket resolution across email, chat, SMS, and Telegram. SLA-based human escalation with knowledge base integration and sentiment analysis.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-xl font-semibold text-white mb-1">Rocket</h3>
              <p className="text-sm text-slate-500 mb-2">Role: Growth & Outreach Engine</p>
              <p className="text-slate-300">Multi-agent system for prospect discovery, personalized email generation, follow-up cadence management, and hot lead detection with real-time response routing.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-xl font-semibold text-white mb-1">Swell</h3>
              <p className="text-sm text-slate-500 mb-2">Role: Email Intelligence & Responder</p>
              <p className="text-slate-300">LLM-powered email responder for Zion Tech Group with autonomous classification, drafting, and sending. Manages inbound inquiries and outbound follow-ups.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-xl font-semibold text-white mb-1">Kilo AI</h3>
              <p className="text-sm text-slate-500 mb-2">Role: Knowledge Base Management</p>
              <p className="text-slate-300">Content ingestion, indexing, and semantic search across documentation, blog posts, and service catalogs. Powers the AI service recommender tool.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-xl font-semibold text-white mb-1">Kiloclaw</h3>
              <p className="text-sm text-slate-500 mb-2">Role: Quality Assurance & Testing</p>
              <p className="text-slate-300">Automated testing, build validation, and quality gate enforcement across all CI/CD pipelines. Detects and prevents broken builds from reaching production.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-xl font-semibold text-white mb-1">Cloud</h3>
              <p className="text-sm text-slate-500 mb-2">Role: Infrastructure & Cost Optimization</p>
              <p className="text-slate-300">Cloud cost monitoring, resource optimization, dependency vulnerability scanning, and automated infrastructure scaling.</p>
            </div>
          </div>
        </section>

        {/* Live Dashboard CTA */}
        <section className="text-center bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-indigo-900/30 border border-purple-500/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Watch the Fleet Live</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            See all 10 agents operating 24/7 in real-time. Live task logs, deployment
            history, and agent health metrics updated every 15 seconds.
          </p>
          <Link
            href="/agents-monitoring/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
          >
            View Live Dashboard →
          </Link>
        </section>
      </StandardPage>
    </>
  );
}
