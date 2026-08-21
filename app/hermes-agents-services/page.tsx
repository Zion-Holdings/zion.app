import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import HermesAdvertBanner from '@/components/HermesAdvertBanner';

export const metadata: Metadata = {
  title: 'Hermes Agent Services — Build & Manage AI Agent Fleets | Zion Tech Group',
  description:
    'Zion Tech Group builds, deploys, and manages production Hermes AI agent fleets. Services include custom agent development, swarm orchestration, CI/CD automation, SEO content factories, security auditing, and 24/7 monitoring.',
  keywords: [
    'Hermes Agent',
    'AI agent services',
    'agent fleet management',
    'multi-agent systems',
    'autonomous automation',
    'CI/CD automation',
    'SEO content generation',
    'security automation',
    'customer support AI',
    'growth automation',
  ],
  openGraph: {
    title: 'Hermes Agent Services — Build & Manage AI Agent Fleets | Zion Tech Group',
    description:
      'Full lifecycle Hermes Agent services: design, deploy, monitor, and optimize autonomous AI agent fleets for your business.',
    url: 'https://ziontechgroup.com/hermes-agents-services/',
    type: 'website',
  },
  alternates: { canonical: '/hermes-agents-services/' },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Hermes Agent services does Zion Tech Group offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'We offer full-lifecycle services: custom agent development, multi-agent swarm orchestration, CI/CD automation, SEO content generation, security auditing, customer support automation, growth & outreach automation, and 24/7 monitoring with Telegram/Discord alerts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to deploy a Hermes agent fleet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A single-purpose agent (e.g., SEO monitoring or support triage) can be deployed in 1–2 weeks. A full swarm (5–10 agents coordinating across DevOps, SEO, security, and growth) typically takes 4–6 weeks, including CI/CD integration and observability setup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide ongoing management after deployment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Our Managed Hermes service includes 24/7 monitoring, performance optimization, skill updates, and on-demand agent expansion. We also offer self-serve training packages for teams who want to take operations in-house.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Hermes agents integrate with our existing tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Hermes supports 100+ integrations across CRM, messaging, cloud platforms, databases, marketing, finance, project management, and security tools. We also build custom connectors for proprietary internal systems via the plugin SDK.',
      },
    },
  ],
};

const SERVICES = [
  {
    id: 'custom-agent-development',
    title: 'Custom Agent Development',
    icon: '🧠',
    description:
      'Design and build specialized Hermes agents tailored to your unique workflows. We handle skill architecture, tool integration, prompt engineering, and testing to ensure your agents deliver measurable outcomes.',
    features: [
      'Workflow analysis and agent design',
      'Custom skill development and optimization',
      'Tool and API integration (100+ platforms)',
      'Multi-model provider configuration',
      'Human-in-the-loop approval gates',
    ],
    cta: 'Book a Consultation',
    href: '/contact/?service=hermes-custom-agent',
  },
  {
    id: 'swarm-orchestration',
    title: 'Multi-Agent Swarm Orchestration',
    icon: '🐝',
    description:
      'Deploy fleets of 5–50+ Hermes agents that collaborate, share memory, and hand off tasks across complex workflows. We build the communication bus, task routing, and escalation chains so your agents work as one cohesive workforce.',
    features: [
      'Orchestrator and leaf agent architecture',
      'Priority-aware task queues',
      'Cross-agent state synchronization',
      'Automatic escalation and approval routing',
      'Kanban-based task distribution',
    ],
    cta: 'Learn More',
    href: '/hermes-swarm/',
  },
  {
    id: 'ci-cd-automation',
    title: 'CI/CD & Infrastructure Automation',
    icon: '🔄',
    description:
      'Hermes agents that monitor, build, test, deploy, and self-heal your infrastructure. We automate GitHub Actions, container deployments, K8s scaling, and incident response — with 24/7 observability.',
    features: [
      'GitHub Actions workflow design and optimization',
      'Build failure detection and auto-remediation',
      'Infrastructure monitoring with Telegram alerts',
      'Automated rollback on regression',
      'Performance optimization and cost reduction',
    ],
    cta: 'View Live Dashboard',
    href: '/agents-monitoring/',
  },
  {
    id: 'seo-content-factory',
    title: 'SEO Content & Growth Automation',
    icon: '📈',
    description:
      'Autonomous content pipelines that discover AI/IT services, generate SEO-optimized landing pages, maintain sitemaps, and run continuous outreach campaigns with personalized email sequences.',
    features: [
      '30,000+ SEO landing pages generated and deployed',
      'Automated sitemap regeneration with validation',
      'Personalized email outreach with Calendly integration',
      'Hot lead detection and follow-up routing',
      'A/B testing and performance analytics',
    ],
    cta: 'Read Case Study',
    href: '/blog/hermes-agent-self-improving-ai-platform/',
  },
  {
    id: 'security-auditing',
    title: 'Security & Compliance Automation',
    icon: '🛡️',
    description:
      'Hermes agents that continuously scan for vulnerabilities, verify security headers, audit dependencies, and run compliance checks. Automated remediation on safe findings with human review for critical issues.',
    features: [
      'Automated security header analysis',
      'Dependency vulnerability scanning',
      'OWASP compliance checks',
      'Penetration testing assistance',
      'Incident response playbooks',
    ],
    cta: 'Learn More',
    href: '/hermes-security/',
  },
  {
    id: 'customer-support',
    title: 'AI Customer Support Agents',
    icon: '📞',
    description:
      'Deploy autonomous support agents that resolve tickets end-to-end across email, chat, and messaging channels. Human escalation on edge cases with full audit trails and SLA tracking.',
    features: [
      '24/7 autonomous ticket resolution',
      'Multi-channel support (email, chat, SMS, Telegram)',
      'SLA-based human escalation',
      'Knowledge base integration',
      'Sentiment analysis and intelligent routing',
    ],
    cta: 'Get Started',
    href: '/contact/?service=hermes-support',
  },
  {
    id: 'growth-outreach',
    title: 'Growth & Outreach Automation',
    icon: '🚀',
    description:
      'Multi-agent system that discovers prospects, generates personalized outreach emails, manages follow-up cadences, and tracks hot leads. We handle the entire outbound pipeline autonomously.',
    features: [
      'Service discovery across 100+ sources',
      'Personalized email generation at scale',
      'Calendly integration for meeting booking',
      'Hot lead detection and real-time response',
      'Delivery tracking and analytics',
    ],
    cta: 'Read Use Cases',
    href: '/solutions/hermes-ai-agents/',
  },
  {
    id: 'managed-monitoring',
    title: 'Managed Monitoring & Optimization',
    icon: '📊',
    description:
      'We take full operational responsibility for your Hermes agent fleet. 24/7 monitoring, performance optimization, skill updates, and on-demand expansion — so you focus on outcomes, not infrastructure.',
    features: [
      '24/7 monitoring with automated alerting',
      'Performance optimization and cost reduction',
      'Skill updates and continuous improvement',
      'On-demand agent expansion and retraining',
      'Weekly performance reports and recommendations',
    ],
    cta: 'Contact Sales',
    href: '/contact/?service=hermes-managed',
  },
];

const FLEET_STATS = [
  { value: '10', label: 'Active Agents' },
  { value: '350+', label: 'Skills Installed' },
  { value: '20+', label: 'Platform Integrations' },
  { value: '50K+', label: 'Tasks Completed' },
  { value: '16,600+', label: 'Services Cataloged' },
  { value: '99.99%', label: 'Fleet Uptime' },
];

export default function HermesAgentServicesPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <StandardPage
        title="Hermes Agent Services"
        subtitle="Full-lifecycle services to build, deploy, and manage production Hermes AI agent fleets. From single-purpose agents to enterprise swarms — we handle the entire lifecycle."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Hermes Agents', href: '/hermes-agents/' },
          { label: 'Services' },
        ]}
        actions={[
          { label: 'Book a Consultation', href: 'https://calendly.com/kleber-ziontechgroup/consultation', style: 'primary' },
          { label: 'View Pricing', href: '/hermes-pricing/', style: 'secondary' },
        ]}
        features={[
          {
            icon: '🎯',
            title: 'Outcome-First',
            description: 'We define success metrics before writing a single line of agent code.',
          },
          {
            icon: '🔧',
            title: 'Full Lifecycle',
            description: 'Design, deploy, monitor, and optimize — we manage every phase of your agent fleet.',
          },
          {
            icon: '☁️',
            title: '20+ Platform Gateway',
            description: 'One agent, every channel — Telegram, Discord, Slack, WhatsApp, Signal, Email, and more.',
          },
          {
            icon: '📊',
            title: 'Observability Built-In',
            description: 'Structured logs, metrics, and replayable execution graphs on every agent deployment.',
          },
        ]}
      >
        {/* Fleet Stats */}
        <section className="mb-16">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Production Fleet in Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {FLEET_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <div className="space-y-8">
          {SERVICES.map((service) => (
            <section
              key={service.id}
              className="border border-slate-800 rounded-2xl p-8 bg-slate-900/40 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="text-4xl shrink-0">{service.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">{service.description}</p>
                  <ul className="grid md:grid-cols-2 gap-2 mb-4">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-purple-400 mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-block text-purple-300 hover:text-purple-200 text-sm font-medium"
                  >
                    {service.cta} →
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* How We Work */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Deployment Process</h2>
          <div className="space-y-4">
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-xl font-semibold text-white mb-2">1. Discovery & Design</h3>
              <p className="text-slate-400">
                We map your workflows to agent architectures, define success metrics, and design the skill
                and tool integration plan. Deliverable: Agent design document with task decomposition.
              </p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-xl font-semibold text-white mb-2">2. Build & Test</h3>
              <p className="text-slate-400">
                We develop agents, write skills, integrate tools, and run extensive testing with real-world
                scenarios. Deliverable: Production-ready agent fleet with CI/CD pipeline.
              </p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-xl font-semibold text-white mb-2">3. Deploy & Monitor</h3>
              <p className="text-slate-400">
                We deploy to your environment or our managed cloud, set up 24/7 monitoring with Telegram
                alerts, and establish observability dashboards. Deliverable: Live agent fleet with alerts.
              </p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-xl font-semibold text-white mb-2">4. Optimize & Scale</h3>
              <p className="text-slate-400">
                We continuously optimize performance, update skills based on execution feedback, and scale
                the fleet as your needs grow. Deliverable: Quarterly performance reports and roadmap.
              </p>
            </div>
          </div>
        </section>

        {/* Live Dashboard CTA */}
        <section className="mt-16 text-center bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-indigo-900/30 border border-purple-500/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Watch Our Agent Fleet Live</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            See our 10-agent fleet operating 24/7 across CI/CD, SEO, security, and growth automation.
            Real-time dashboard with live agent status, task logs, and deployment history.
          </p>
          <Link
            href="/agents-monitoring/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
          >
            View Live Dashboard →
          </Link>
        </section>
      </StandardPage>
      <HermesAdvertBanner />
    </>
  );
}
