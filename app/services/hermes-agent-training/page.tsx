import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Hermes Agent Training & Customization | Zion Tech Group',
  description:
    'Custom Hermes Agent deployment, skill development, and team training. We build specialized agents tailored to your workflows and teach your team to operate them.',
  keywords: [
    'Hermes Agent training',
    'AI agent customization',
    'agent development',
    'AI upskilling',
    'custom AI agents',
    'agentic automation training',
    'Nous Research',
    'Zion Tech Group',
  ],
  openGraph: {
    title: 'Hermes Agent Training & Customization | Zion Tech Group',
    description:
      'Custom skill development, team training, and managed agent fleets for your specific business workflows.',
    url: 'https://ziontechgroup.com/services/hermes-agent-training/',
    type: 'website',
  },
  alternates: { canonical: '/services/hermes-agent-training/' },
};

const SERVICES = [
  {
    icon: '🎯',
    title: 'Custom Skill Development',
    desc:
      'We write and maintain Hermes skills specific to your codebase, APIs, and workflows. Each skill is a reusable procedure document that loads into future sessions — your agents get better over time.',
  },
  {
    icon: '👥',
    title: 'Team Training Workshop',
    desc:
      '2-day intensive workshop covering Hermes CLI, gateway deployment, skill authoring, cron automation, subagent orchestration, and MCP integration. Hands-on labs with your actual infrastructure.',
  },
  {
    icon: '⚙️',
    title: 'Agent Fleet Architecture',
    desc:
      'Design and deploy a multi-agent system with specialized bots for different roles — ops, security, content, outreach, research. Includes bot-mode configuration with group-chat collaboration.',
  },
  {
    icon: '🔧',
    title: 'Integration & Tooling',
    desc:
      'Connect Hermes to your existing stack: CI/CD pipelines, monitoring tools, CRMs, databases, and internal APIs. We build custom MCP servers and Python tool plugins.',
  },
  {
    icon: '📊',
    title: 'Observability & Alerting',
    desc:
      'Set up real-time monitoring dashboards, Telegram/Discord alerting, agent action traces, and distributed logging. Track task success rates, skill usage, and cost attribution.',
  },
  {
    icon: '🛡️',
    title: 'Ongoing Management',
    desc:
      '24/7 agent operations with weekly skill reviews, monthly performance reports, and continuous optimization. We handle provider failover, credential rotation, and model updates.',
  },
];

const TRAINING_MODULES = [
  {
    title: 'Module 1: Installation & Setup',
    topics: ['CLI installation', 'Model/provider configuration', 'Telegram bot setup', 'First agent session'],
    duration: '2 hours',
  },
  {
    title: 'Module 2: Skills & Memory Systems',
    topics: ['Skill reading/writing', 'Skill patching with skill_manage', 'Memory management', 'User profiles'],
    duration: '3 hours',
  },
  {
    title: 'Module 3: Gateway & Multi-Platform',
    topics: ['Discord/Slack/WhatsApp setup', 'Channel routing', 'Telegram group bots', 'Approval workflows'],
    duration: '2 hours',
  },
  {
    title: 'Module 4: Cron & Automation',
    topics: ['Scheduled tasks', 'Telegram delivery', 'monitor_script patterns', 'no_agent mode'],
    duration: '3 hours',
  },
  {
    title: 'Module 5: Subagents & Orchestration',
    topics: ['delegate_task', 'Batch subagents', 'Orchestrator patterns', 'Kanban boards'],
    duration: '2 hours',
  },
  {
    title: 'Module 6: MCP & Plugin Ecosystem',
    topics: ['MCP server connection', 'Custom tool creation', 'Desktop plugins', 'Webhook triggers'],
    duration: '2 hours',
  },
];

export default function HermesAgentTrainingPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Hermes Agent Training & Customization',
          description:
            'Custom skill development, team training, and managed agent fleets for your specific business workflows.',
          serviceType: 'AI Agent Training & Customization',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com',
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'hello@ziontechgroup.com',
              telephone: '+1 (302) 464-0950',
              contactType: 'sales',
            },
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: '0',
            url: 'https://ziontechgroup.com/services/hermes-agent-training/',
            availability: 'https://schema.org/InStock',
          },
        }}
      />
      <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbSchema path="/services/hermes-agent-training" title="Hermes Agent Training & Customization" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              Hermes Agent Training &amp; Custom Deployment
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            From strategy to production deployment, we design, build, and teach your team to operate
            autonomous AI agent fleets powered by Hermes Agent from Nous Research.
          </p>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Approach</h2>
            <ol className="list-decimal list-inside space-y-3 text-slate-300">
              <li>
                <strong className="text-white">Discovery</strong> — Map your workflows, APIs, and pain points for automation opportunities.
              </li>
              <li>
                <strong className="text-white">Design</strong> — Architect a multi-agent system with specialized bots for your use cases.
              </li>
              <li>
                <strong className="text-white">Build</strong> — Deploy Hermes agents, write custom skills, integrate with your stack.
              </li>
              <li>
                <strong className="text-white">Train</strong> — 2-day workshop to bring your team up to speed on operations.
              </li>
              <li>
                <strong className="text-white">Operate</strong> — 24/7 monitoring, weekly reviews, and continuous improvement.
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">What We Deliver</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-purple-500/30 transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Training Curriculum</h2>
          <div className="space-y-4 mb-8">
            {TRAINING_MODULES.map((m) => (
              <div key={m.title} className="border border-slate-800 rounded-xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white">{m.title}</h3>
                  <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{m.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {m.topics.map((t) => (
                    <span key={t} className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-slate-300 mb-6">
              Book a free 30-minute consultation to discuss your automation goals and how Hermes Agent
              can transform your workflows.
            </p>
            <Link
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
