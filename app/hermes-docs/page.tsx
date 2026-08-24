import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import HermesAdvertBanner from '@/components/HermesAdvertBanner';

export const metadata: Metadata = {
  title: 'Hermes Agent Documentation — Installation, Skills, CLI Guides | Zion Tech Group',
  description:
    'Complete Hermes Agent documentation: installation guide, CLI reference, skills system, cron automation, MCP integration, Bot Mode, and deployment guides from Nous Research.',
  keywords: [
    'Hermes Agent',
    'Nous Research',
    'AI agent documentation',
    'installation guide',
    'CLI reference',
    'skills system',
    'cron automation',
    'MCP integration',
    'Bot Mode',
    'agent deployment',
    'multi-agent systems',
  ],
  openGraph: {
    title: 'Hermes Agent Documentation — Installation, Skills, CLI Guides | Zion Tech Group',
    description:
      'Complete documentation for Hermes Agent by Nous Research: install, configure, and deploy autonomous AI agents with persistent memory, skills, and 20+ platform gateway.',
    url: 'https://ziontechgroup.com/hermes-docs/',
    type: 'website',
  },
  alternates: { canonical: '/hermes-docs/' },
};

const DOC_SECTIONS = [
  {
    icon: '📥',
    title: 'Installation Guide',
    href: '/docs/hermes-agent-installation/',
    desc: 'Install Hermes Agent on macOS, Linux, Windows, or Docker in under 2 minutes. Includes system requirements and troubleshooting.',
  },
  {
    icon: '⚙️',
    title: 'Configuration',
    href: '/docs/hermes-agent-configuration/',
    desc: 'Configure models, providers, API keys, approvals mode, memory backends, and platform-specific settings.',
  },
  {
    icon: '🧠',
    title: 'Skills System',
    href: '/docs/hermes-agent-skills/',
    desc: 'Understand how skills work, browse 350+ built-in skills, write custom skills, and manage their lifecycle with the Curator.',
  },
  {
    icon: '⏰',
    title: 'Cron Automation',
    href: '/docs/hermes-agent-cron/',
    desc: 'Schedule agents and workflows with built-in cron. Delivery to Telegram, Discord, Slack, and other platforms.',
  },
  {
    icon: '🔌',
    title: 'MCP Integration',
    href: '/docs/hermes-agent-mcp-integration/',
    desc: 'Connect Hermes to 6,000+ MCP servers. Add custom Python tools, desktop plugins, and webhook triggers.',
  },
  {
    icon: '🤖',
    title: 'Bot Mode',
    href: '/docs/hermes-agent-bot-mode/',
    desc: 'Create named specialist bots with their own models, memory, and routines. Group chat collaboration with @mentions.',
  },
  {
    icon: '🌐',
    title: 'Multi-Platform Gateway',
    desc: 'Deploy agents across 20+ messaging platforms with full tool access on every channel.',
    href: '/docs/hermes-agent-gateway/',
  },
  {
    icon: '🔄',
    title: 'Deployment Models',
    href: '/docs/hermes-agent-deployment/',
    desc: 'Self-hosted, cloud-managed, or hybrid deployment strategies for production agent fleets.',
  },
  {
    icon: '🛠️',
    title: 'CLI Reference',
    href: '/hermes-cli/',
    desc: 'Complete reference for hermes CLI commands, slash commands, global flags, and subcommands.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I install Hermes Agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Run curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash and then hermes setup. Full step-by-step guide in our installation documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Hermes Agent open source?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hermes Agent is open-source software by Nous Research. You can install it for free on your own infrastructure. Our paid plans cover managed deployment, monitoring, and ongoing optimization.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many skills are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hermes ships with 350+ built-in skills across 30+ categories. You can also write custom skills or install community skills via hermes skills browse.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I run Hermes on my own hardware?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Hermes supports self-hosted deployment with full data sovereignty. For organizations with compliance requirements, we offer air-gapped, on-prem, and hybrid deployment options.',
      },
    },
  ],
};

export default function HermesDocsPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <StandardPage
        title="Hermes Agent Documentation"
        subtitle="Complete guides for installation, configuration, skills, cron automation, MCP integration, Bot Mode, and deployment — from Nous Research."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Hermes Agents', href: '/hermes-agents/' },
          { label: 'Documentation' },
        ]}
        actions={[
          { label: 'Book a Consultation', href: 'https://calendly.com/kleber-ziontechgroup/consultation', style: 'primary' },
          { label: 'Live Dashboard', href: '/agents-monitoring/', style: 'secondary' },
        ]}
      >
        <div className="space-y-16">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Complete Documentation</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Hermes Agent by Nous Research is an open, extensible platform for building and operating
              autonomous AI agents. This documentation covers everything you need to install, configure,
              and deploy Hermes agents — from your first terminal command to running a 10-agent fleet
              across 20+ platforms.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Built and refined by Zion Tech Group, the platform powers automation across software
              development, customer support, data pipelines, infrastructure, and growth marketing —
              handling thousands of autonomous tasks every day.
            </p>
          </section>

          {/* Quick Start */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Start</h2>
            <p className="text-slate-300 mb-4">Get Hermes Agent running in under 2 minutes:</p>
            <pre className="bg-slate-800/60 border border-slate-700 rounded-lg p-4 text-sm font-mono text-slate-200 overflow-x-auto">
              <code>curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash</code>
            </pre>
            <p className="text-slate-300 mt-4 mb-6">
              Then run <code className="bg-slate-800/60 px-2 py-1 rounded text-purple-300">hermes setup</code> to configure your model provider, Telegram bots, and first skills.
            </p>
            <Link
              href="/docs/hermes-agent-installation/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all text-sm"
            >
              Read the Full Installation Guide →
            </Link>
          </section>

          {/* Documentation Sections */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8">Documentation Sections</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DOC_SECTIONS.map((doc) => (
                <Link
                  key={doc.title}
                  href={doc.href}
                  className="group block border border-slate-800 rounded-xl p-6 bg-slate-900/40 hover:border-purple-500/30 hover:bg-slate-900/60 transition-all"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{doc.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{doc.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{doc.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CLI Reference Quick Access */}
          <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">CLI Reference</h2>
            <p className="text-slate-300 mb-6">
              Quick reference for the most-used Hermes commands:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-3 font-mono">
                <code className="text-purple-300 block text-sm mb-1">hermes chat -q "..."</code>
                <p className="text-xs text-slate-500">Single query mode</p>
              </div>
              <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-3 font-mono">
                <code className="text-purple-300 block text-sm mb-1">hermes setup</code>
                <p className="text-xs text-slate-500">Interactive wizard</p>
              </div>
              <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-3 font-mono">
                <code className="text-purple-300 block text-sm mb-1">hermes cron list</code>
                <p className="text-xs text-slate-500">List scheduled jobs</p>
              </div>
              <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-3 font-mono">
                <code className="text-purple-300 block text-sm mb-1">hermes skills browse</code>
                <p className="text-xs text-slate-500">Browse skills</p>
              </div>
              <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-3 font-mono">
                <code className="text-purple-300 block text-sm mb-1">hermes profile create</code>
                <p className="text-xs text-slate-500">Create isolated profile</p>
              </div>
              <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-3 font-mono">
                <code className="text-purple-300 block text-sm mb-1">hermes doctor</code>
                <p className="text-xs text-slate-500">Health check</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/hermes-cli/"
                className="inline-block text-purple-300 hover:text-purple-200 underline text-sm font-medium"
              >
                Full CLI Reference →
              </Link>
            </div>
          </section>

          {/* Need Help CTA */}
          <section className="text-center bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-indigo-900/30 border border-purple-500/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Need Help Deploying Hermes?</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Zion Tech Group offers managed Hermes Agent deployment, custom skill development,
              and 24/7 fleet monitoring. Book a free consultation to get started.
            </p>
            <Link
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
            >
              Book a Free Consultation →
            </Link>
          </section>
        </div>
      </StandardPage>
      <HermesAdvertBanner />
    </>
  );
}
