import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Hermes Agent — Autonomous AI Agent Platform | Zion Tech Group',
  description:
    'Deploy autonomous AI agents that work 24/7 across messaging platforms, IDE, and CLI. Built by Nous Research. Self-improving skills, persistent memory, multi-model providers, and a 20+ platform gateway.',
  keywords: [
    'Hermes Agent',
    'AI agents',
    'autonomous agents',
    'Nous Research',
    'agentic AI',
    'AI automation',
    'Telegram bots',
    'Discord bots',
    'MCP integration',
    'skills system',
    'persistent memory',
    'multi-model',
    'CI/CD automation',
    'SEO content automation',
  ],
  openGraph: {
    title: 'Hermes Agent — Autonomous AI Agent Platform | Zion Tech Group',
    description:
      'Deploy autonomous AI agents that work 24/7 across messaging platforms, IDE, and CLI. Self-improving skills, persistent memory, and multi-model providers.',
    url: 'https://ziontechgroup.com/services/hermes-agent/',
    type: 'website',
    images: [{ url: 'https://ziontechgroup.com/og-hermes-agent.png' }],
  },
  alternates: { canonical: '/services/hermes-agent/' },
};

const FEATURES = [
  {
    icon: '🧠',
    title: 'Self-Improving Skills',
    desc:
      'Hermes learns from every task. Complex workflows, corrections, and optimizations are saved as reusable skills that load into future sessions — your agent gets better over time, not just at your task but at your specific environment.',
  },
  {
    icon: '💾',
    title: 'Persistent Memory',
    desc:
      'Memory survives across sessions and platforms. Conversations on Telegram carry over to Discord. User profiles remember your preferences, environment details, and workflow conventions — no re-instruction needed.',
  },
  {
    icon: '🌐',
    title: '20+ Platform Gateway',
    desc:
      'One agent, every channel. Telegram, Discord, Slack, WhatsApp, Signal, Matrix, Mattermost, Email, SMS, Microsoft Teams, Google Chat, BlueBubbles, WeChat, and more — full tool access on every platform.',
  },
  {
    icon: '🔄',
    title: 'Multi-Model Providers',
    desc:
      'Switch between 20+ providers mid-workflow with no code changes. OpenRouter, Anthropic, OpenAI, Nous Portal, Google Gemini, DeepSeek, xAI, and local models — with automatic credential pooling and failover.',
  },
  {
    icon: '🔌',
    title: 'MCP & Plugin Ecosystem',
    desc:
      'Connect to 6,000+ MCP servers. Write custom desktop plugins with UI panes. Extend with Python plugins, webhook triggers, and custom tools registered via a 3-file pattern.',
  },
  {
    icon: '⏰',
    title: 'Scheduled Automations',
    desc:
      'Built-in cron with delivery to any platform. Run SEO content loops, growth pipelines, service discovery, and email outreach on schedules from 30m to weekly — results delivered straight to your chat.',
  },
];

const CAPABILITIES = [
  {
    icon: '🖥️',
    title: 'Terminal Operations',
    desc:
      'Full shell access with 6 backends: local, Docker, SSH, Singularity, Modal, and Daytona. Background processes, persistent sessions, and tmux-based interactive agents for long-running missions.',
  },
  {
    icon: '🌍',
    title: 'Web Control',
    desc:
      'Web search, browser automation, vision analysis, image generation, text-to-speech, speech-to-text, and multi-model reasoning — all bundled in a single Nous Portal subscription.',
  },
  {
    icon: '📋',
    title: 'Workflow Orchestration',
    desc:
      'Spawn isolated subagents for parallel workstreams, delegate complex tasks with zero context cost, and use kanban boards for multi-agent coordination across profiles.',
  },
  {
    icon: '🛠️',
    title: 'Software Development',
    desc:
      'Code editing across 20+ languages, test-driven development, PR review with quality gates, subagent-driven development, and integration with Claude Code, Codex, and OpenCode.',
  },
  {
    icon: '📊',
    title: 'AI/ML Operations',
    desc:
      'Local GGUF inference via llama.cpp, vLLM serving, HuggingFace hub, DSPy pipelines, model evaluation harnesses, and experiment tracking with Weights & Biases.',
  },
  {
    icon: '🏠',
    title: 'Smart Home & IoT',
    desc:
      'Philips Hue control, Home Assistant integration, and home automation orchestration — your agent can manage your environment alongside your code.',
  },
];

const USE_CASES = [
  {
    title: '24/7 AI Operations Center',
    desc: 'Deploy an autonomous agent fleet that monitors, repairs, and optimizes your infrastructure without human intervention. Cron-driven monitoring with Telegram delivery for alerts.',
    icon: '🦉',
  },
  {
    title: 'SEO Content Automation',
    desc: 'Generate thousands of SEO-optimized landing pages for AI/IT services, auto-deploy to GitHub Pages, and run continuous outreach campaigns with Calendly integration.',
    icon: '📝',
  },
  {
    title: 'CI/CD & Code Quality',
    desc: 'Automated code review with security scans, test execution, type-checking, and PR merging — all orchestrated across multiple agent instances in isolated worktrees.',
    icon: '🚀',
  },
  {
    title: 'Lead Generation & Outreach',
    desc: 'Autonomous outbound growth engine that discovers new AI/IT services, generates personalized outreach emails with Calendly links, and tracks hot leads via Gmail monitoring.',
    icon: '📧',
  },
  {
    title: 'Research & Intelligence',
    desc: 'Deep web research, arXiv paper analysis, competitor monitoring, and market intelligence gathering — grounded in cited, verifiable sources.',
    icon: '🔍',
  },
  {
    title: 'Developer Copilot',
    desc: 'An AI pair programmer that runs in your terminal with full file, terminal, and browser access. Switch models mid-conversation, spawn subagents for parallel tasks.',
    icon: '👨‍💻',
  },
];

const CLI_COMMANDS = [
  { cmd: 'hermes', desc: 'Start interactive chat session (CLI)' },
  { cmd: 'hermes setup', desc: 'Run interactive setup wizard' },
  { cmd: 'hermes model', desc: 'Pick/change model and provider' },
  { cmd: 'hermes tools', desc: 'Interactive tool enable/disable UI' },
  { cmd: 'hermes skills browse', desc: 'Browse and install community skills' },
  { cmd: 'hermes cron create "30m"', desc: 'Schedule recurring automation' },
  { cmd: 'hermes gateway run', desc: 'Start the multi-platform messaging gateway' },
  { cmd: 'hermes mcp add NAME', desc: 'Connect an MCP server' },
  { cmd: 'hermes profile create work', desc: 'Create an isolated profile' },
  { cmd: 'hermes doctor', desc: 'Check health and dependencies' },
];

const SKILL_CATEGORIES = [
  { name: 'AI Agent Intelligence', desc: 'Self-evolving, multi-agent orchestration, coding agents' },
  { name: 'Growth Automation', desc: 'SEO content, outreach, lead generation, pipeline orchestration' },
  { name: 'DevOps & CI/CD', desc: 'Build optimization, deployment, site quality, git workflows' },
  { name: 'Research & Analysis', desc: 'Market intelligence, competitor monitoring, deep research' },
  { name: 'Email & Communication', desc: 'Autonomous email responder, hot followup, outreach' },
  { name: 'Development', desc: 'TDD, code review, TypeScript, Next.js build troubleshooting' },
  { name: 'ML Ops', desc: 'Model serving, evaluation, HuggingFace, llama.cpp, vLLM' },
];

const BOT_MODE_FEATURES = [
  'Named specialist bots with own model, memory, skills, and routines',
  'Group chat collaboration — bots @mention and hand off tasks',
  'Bot Mode protocol for multi-agent team orchestration',
  'Telegram DM topics for threaded conversations',
  'Custom personalities via SOUL.md',
];

const DIFF_TABLE = [
  { feature: 'Deployment', hermes: 'Self-hosted or 5$ VPS', claudeCode: 'Local CLI (subscription)', openClaw: 'Local CLI (free + API)' },
  { feature: 'Platforms', hermes: '20+ (Telegram, Discord, Slack, etc.)', claudeCode: 'CLI only', openClaw: 'CLI only' },
  { feature: 'Automation', hermes: 'Cron + gateway delivery', claudeCode: 'Manual', openClaw: 'Manual' },
  { feature: 'Memory', hermes: 'Persistent, cross-session, cross-platform', claudeCode: 'Per-session', openClaw: 'Per-session' },
  { feature: 'Skills', hermes: 'Self-improving, community-shared', claudeCode: 'N/A', openClaw: 'Declarative SOUL.md' },
  { feature: 'Pricing', hermes: '$5 VPS / Docker / Serverless', claudeCode: 'Subscription', openClaw: 'Free + API fees' },
];

export default function HermesAgentServicePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Hermes Agent',
          description:
            'Autonomous AI agent platform by Nous Research — self-improving skills, persistent memory, 20+ platform gateway, and multi-model providers.',
          brand: { '@type': 'Brand', name: 'Zion Tech Group' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: '0',
            availability: 'https://schema.org/InStock',
            url: 'https://ziontechgroup.com/services/hermes-agent/',
          },
          keywords: 'AI agents, autonomous agents, Nous Research, agentic AI, Telegram bots, MCP integration',
        }}
      />

      {/* Hero Section */}
      <section className="section-standard">
        <div className="container-standard text-center">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-300 text-xs font-mono rounded-full border border-purple-500/20">
              Powered by Nous Research
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              Hermes Agent
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Deploy autonomous AI agents that work 24/7 across your terminal, messaging platforms, and IDE.
            Built by Nous Research with self-improving skills, persistent memory, and multi-model providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/?service=hermes-agent"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
            >
              Start a Hermes Deployment
            </Link>
            <Link
              href="/agents-monitoring/"
              className="px-8 py-4 border border-slate-700 text-slate-200 font-semibold rounded-full hover:border-purple-500/40 hover:bg-slate-900/60 transition-all"
            >
              Live Agent Dashboard →
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Hermes Different */}
      <section className="section-standard bg-slate-950/50">
        <div className="container-standard">
          <h2 className="text-3xl font-bold text-center mb-2">What Makes Hermes Different</h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Unlike single-purpose coding agents, Hermes is a general-purpose autonomous agent
            that grows smarter over time — learning your environment, preferences, and workflows.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-purple-500/30 transition-all">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-standard">
        <div className="container-standard">
          <h2 className="text-3xl font-bold text-center mb-2">Built-In Capabilities</h2>
          <p className="text-center text-slate-400 mb-12">Everything your autonomous agents need — in one platform.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="flex gap-4 p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="text-2xl shrink-0">{c.icon}</div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{c.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills System */}
      <section className="section-standard bg-slate-950/50">
        <div className="container-standard">
          <h2 className="text-3xl font-bold text-center mb-2">The Skills System</h2>
          <p className="text-center text-slate-400 mb-12 max-w-3xl mx-auto">
            Hermes doesn't just execute tasks — it remembers how to do them. Complex workflows
            are saved as portable, shareable skill documents that accumulate across sessions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {SKILL_CATEGORIES.map((s) => (
              <div key={s.name} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-1">{s.name}</h3>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/docs/hermes-agent-skills/"
              className="text-purple-300 hover:text-purple-200 underline text-sm font-medium"
            >
              Browse 350+ community skills →
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-standard">
        <div className="container-standard">
          <h2 className="text-3xl font-bold text-center mb-2">Use Cases at Zion Tech Group</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-purple-500/30 transition-all">
                <div className="text-2xl mb-3">{uc.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{uc.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Dashboard CTA */}
      <section className="section-standard bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900">
        <div className="container-standard text-center">
          <h2 className="text-3xl font-bold mb-4">Watch Our Agent Fleet in Real Time</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our 10-agent fleet (Carol, Kilo, Tablet, Quel, Rocket, OWL, Swell, Kilo AI, Kiloclaw, Cloud)
            works 24/7 on CI/CD, content generation, security, SEO, and growth automation.
          </p>
          <Link
            href="/agents-monitoring/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
          >
            ⚡ Live Agent Dashboard
          </Link>
        </div>
      </section>

      {/* CLI Reference */}
      <section className="section-standard">
        <div className="container-standard">
          <h2 className="text-3xl font-bold text-center mb-2">CLI Reference</h2>
          <p className="text-center text-slate-400 mb-12">Quick reference for the most-used commands.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {CLI_COMMANDS.map((c) => (
              <div key={c.cmd} className="bg-slate-900/80 border border-slate-800 rounded-lg p-4 font-mono">
                <code className="text-purple-300 text-sm block mb-1">{c.cmd}</code>
                <p className="text-slate-500 text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bot Mode */}
      <section className="section-standard bg-slate-950/50">
        <div className="container-standard">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">Bot Mode — Specialist Agent Teams</h2>
            <p className="text-center text-slate-400 mb-8">
              Build durable teams of specialist bots with their own models, memory, skills, and routines.
              Bots collaborate in group chats and respond to @mentions — like a real ops team, on autopilot.
            </p>
            <ul className="space-y-3 text-sm">
              {BOT_MODE_FEATURES.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <span className="text-slate-300">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-standard">
        <div className="container-standard">
          <h2 className="text-3xl font-bold text-center mb-2">Hermes vs. Other Agents</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-800 rounded-xl overflow-hidden">
              <thead className="bg-slate-900/80">
                <tr>
                  <th className="text-left p-4 text-slate-300 font-medium">Feature</th>
                  <th className="text-center p-4 text-purple-300 font-medium">Hermes Agent</th>
                  <th className="text-center p-4 text-slate-400 font-medium">Claude Code</th>
                  <th className="text-center p-4 text-slate-400 font-medium">OpenClaw</th>
                </tr>
              </thead>
              <tbody>
                {DIFF_TABLE.map((row) => (
                  <tr key={row.feature} className="border-t border-slate-800">
                    <td className="p-4 text-slate-300">{row.feature}</td>
                    <td className="p-4 text-center text-purple-300 font-medium">{row.hermes}</td>
                    <td className="p-4 text-center text-slate-400">{row.claudeCode}</td>
                    <td className="p-4 text-center text-slate-400">{row.openClaw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-standard bg-slate-950/50">
        <div className="container-standard text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Deploy Autonomous AI Agents?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a demonstration of our live agent fleet in action, or start a Hermes deployment for your organization.
          </p>
          <Link
            href="/contact/?service=hermes-agent&source=service-page"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
