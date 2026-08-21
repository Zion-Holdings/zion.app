import Link from 'next/link';
import StandardPage from '@/components/StandardPage';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Hermes Agents — AI Automation Platform | Zion Tech Group',
  description:
    'Hermes Agents is an open, extensible AI agent platform for building, deploying, and managing autonomous agents that automate complex workflows. Built by Zion Tech Group.',
  keywords:
    'Hermes Agent, AI agents, autonomous agents, AI automation, agent deployment, multi-agent systems, AI platform, autonomous workflows',
  openGraph: {
    title: 'Hermes Agents — AI Automation Platform | Zion Tech Group',
    description:
      'Build, deploy, and manage autonomous AI agents with Hermes Agent — the open platform for multi-agent systems and agentic automation.',
    url: 'https://ziontechgroup.com/hermes-agents/',
    type: 'website',
  },
  alternates: { canonical: '/hermes-agents/' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Hermes Agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Hermes Agents is an open, extensible platform for building, deploying, and managing autonomous AI agents that automate complex business and IT workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Hermes Agents compare to Claude Code or Codex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Claude Code and Codex are single-agent coding assistants. Hermes Agents orchestrates multi-agent systems with shared memory, tool use, and observability — designed for end-to-end autonomous automation across business and IT processes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What deployment models are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Hermes Agents supports cloud-hosted, self-hosted, and hybrid deployment models so teams can match compliance, latency, and data-sovereignty requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Zion Tech Group deploy and manage Hermes Agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Zion Tech Group deploys Hermes Agents with containerized runtimes, CI/CD for agent updates, centralized logging, and policy-based guardrails. We handle provisioning, monitoring, and continuous improvement so you focus on outcomes.',
      },
    },
  ],
};

export default function HermesAgentsPage() {
  return (
    <StandardPage
      title="Hermes Agents"
      subtitle="An open, extensible platform for building, deploying, and managing autonomous AI agents that automate complex workflows."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Hermes Agents' },
      ]}
      actions={[
        { label: 'Book a Consultation', href: 'https://calendly.com/kleber-ziontechgroup/consultation', style: 'primary' },
        { label: 'View Services', href: '/services/', style: 'secondary' },
      ]}
      features={[
        {
          icon: '🤖',
          title: 'Multi-Agent Orchestration',
          description:
            'Deploy fleets of specialized agents that collaborate, share memory, and hand off tasks across complex workflows.',
        },
        {
          icon: '🔧',
          title: 'Extensible Tool Framework',
          description:
            'Connect agents to databases, APIs, CRMs, and internal tools with a pluggable plugin architecture.',
        },
        {
          icon: '🔒',
          title: 'Enterprise Guardrails',
          description:
            'Built-in policy enforcement, rate limiting, and human-in-the-loop checkpoints for safe autonomous operation.',
        },
        {
          icon: '📊',
          title: 'Full Observability',
          description:
            'Trace every agent action with structured logs, metrics, and replayable execution graphs.',
        },
        {
          icon: '☁️',
          title: 'Flexible Deployment',
          description:
            'Run in the cloud, on-prem, or hybrid — containerized runtimes built for Kubernetes and bare metal.',
        },
        {
          icon: '🔄',
          title: 'Self-Evolving',
          description:
            'Agents continuously refine prompts, tools, and strategies based on execution feedback and metrics.',
        },
      ]}
      benefits={[
        {
          icon: '💰',
          title: 'Cut operational costs',
          description: 'Automate repetitive workflows across support, DevOps, and data pipelines.',
        },
        {
          icon: '⚡',
          title: 'Accelerate delivery',
          description: 'Reduce time-to-market for automation from weeks to hours with reusable agents.',
        },
        {
          icon: '🎯',
          title: 'Scalable intelligence',
          description: 'One agent fleet handles thousands of concurrent tasks with consistent reliability.',
        },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '$499/mo',
          description: 'For small teams building their first agents.',
          features: ['Up to 5 agents', '500 tasks/day', 'Basic observability'],
        },
        {
          name: 'Professional',
          price: '$1,999/mo',
          description: 'For production workloads and multi-agent systems.',
          features: ['Unlimited agents', '50,000 tasks/day', 'Full observability', 'Human review'],
          popular: true,
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'Self-hosted or hybrid deployment with dedicated support.',
          features: ['SLA support', 'Custom integrations', 'Policy engine', 'Training'],
        },
      ]}
    >
      <JsonLd data={faqSchema} />
      <div className="space-y-16">
        {/* What are Hermes Agents */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">What are Hermes Agents?</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            Hermes Agents is an open, extensible platform for building and operating autonomous{' '}
            <strong className="text-white">AI agents</strong> that automate complex business and IT
            workflows. Unlike single-purpose chatbots, Hermes agents reason across tools, maintain
            shared memory, and collaborate as{' '}
            <strong className="text-white">multi-agent systems</strong> to deliver end-to-end
            outcomes.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Developed and refined by Zion Tech Group, the platform powers automation across
            software development, customer support, data pipelines, and infrastructure operations —
            deployed for clients ranging from startups to enterprise.
          </p>
        </section>

        {/* Capabilities */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Capabilities</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Agent Orchestration</h3>
              <p className="text-slate-400">
                Deploy specialized agents that discover tools, plan actions, and hand off tasks
                within a shared execution graph.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Tool Integration</h3>
              <p className="text-slate-400">
                Connect to APIs, databases, CRMs, cloud consoles, and custom internal systems via a
                unified plugin framework.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Memory & Context</h3>
              <p className="text-slate-400">
                Long-term and short-term memory stores let agents retain context across sessions
                and improve over time.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Human Review</h3>
              <p className="text-slate-400">
                Critical decisions route to human reviewers with Slack/email approvals and audit
                trails.
              </p>
            </div>
          </div>
        </section>

        {/* Deployment Models */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Deployment Models</h2>
          <div className="space-y-4">
            <div className="border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white">Cloud-Hosted</h3>
              <p className="text-slate-400 mt-2">
                Fully managed platform with automatic scaling, updates, and 24/7 monitoring.
                Best for teams that want zero operational overhead.
              </p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white">Self-Hosted</h3>
              <p className="text-slate-400 mt-2">
                Run on your infrastructure for full data sovereignty and compliance control.
              </p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white">Hybrid</h3>
              <p className="text-slate-400 mt-2">
                Combine cloud orchestration with on-prem agent runtimes for sensitive workloads.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Use Cases</h2>
          <ul className="list-disc list-inside space-y-3 text-slate-300">
            <li>
              <strong className="text-white">AI-powered customer support</strong> — autonomous agents
              resolve tickets end-to-end with human escalation on edge cases.
            </li>
            <li>
              <strong className="text-white">DevOps automation</strong> — multi-agent systems
              monitor, diagnose, and remediate infrastructure issues.
            </li>
            <li>
              <strong className="text-white">Data pipeline orchestration</strong> — agents schedule,
              validate, and re-run pipelines with automatic failure recovery.
            </li>
            <li>
              <strong className="text-white">Sales & outreach engines</strong> — agents research
              prospects, write personalized emails, and manage follow-up cadences.
            </li>
            <li>
              <strong className="text-white">Security monitoring</strong> — autonomous agents scan,
              triage, and remediate vulnerabilities in real time.
            </li>
          </ul>
        </section>

        {/* Comparison */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            Hermes Agents vs. Claude Code / Codex
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-slate-800 rounded-xl overflow-hidden">
              <thead className="bg-slate-900/60">
                <tr>
                  <th className="p-4 text-white">Capability</th>
                  <th className="p-4 text-white">Claude Code</th>
                  <th className="p-4 text-white">Codex</th>
                  <th className="p-4 text-white">Hermes Agents</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="p-4 text-slate-300">Multi-agent orchestration</td>
                  <td className="p-4 text-slate-500">No</td>
                  <td className="p-4 text-slate-500">No</td>
                  <td className="p-4 text-purple-300">Yes</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Tool plug-in framework</td>
                  <td className="p-4 text-slate-500">Limited</td>
                  <td className="p-4 text-slate-500">Limited</td>
                  <td className="p-4 text-purple-300">Yes</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Long-term memory</td>
                  <td className="p-4 text-slate-500">Session-only</td>
                  <td className="p-4 text-slate-500">Session-only</td>
                  <td className="p-4 text-purple-300">Yes</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Human-in-the-loop review</td>
                  <td className="p-4 text-slate-500">Manual</td>
                  <td className="p-4 text-slate-500">Manual</td>
                  <td className="p-4 text-purple-300">Built-in</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Production observability</td>
                  <td className="p-4 text-slate-500">No</td>
                  <td className="p-4 text-slate-500">No</td>
                  <td className="p-4 text-purple-300">Yes</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Non-coding workflows</td>
                  <td className="p-4 text-slate-500">No</td>
                  <td className="p-4 text-slate-500">No</td>
                  <td className="p-4 text-purple-300">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Zion Tech Group Deployment */}
        <section className="border border-purple-500/30 rounded-xl p-8 bg-slate-900/40">
          <h2 className="text-3xl font-bold text-white mb-4">
            How Zion Tech Group Deploys &amp; Manages Hermes Agents
          </h2>
          <p className="text-slate-300 mb-4">
            Our managed deployment service handles the full lifecycle of your agent fleet — from
            initial design through production monitoring and continuous improvement.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Containerized agent runtimes on Kubernetes or bare metal</li>
            <li>CI/CD pipelines for agent prompt, tool, and plugin updates</li>
            <li>Centralized logging, metrics, and distributed tracing</li>
            <li>Policy-based guardrails and compliance controls</li>
            <li>24/7 monitoring with automated alerting</li>
            <li>Ongoing optimization based on execution feedback</li>
          </ul>
        </section>

        {/* Related Links */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Learn More</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/hermes-agent-self-improving-ai-platform/"
              className="block p-4 border border-slate-800 rounded-xl hover:border-purple-500/40"
            >
              <h3 className="font-semibold text-white">Read: Hermes Agents — Autonomous AI for Business & IT</h3>
              <p className="text-sm text-slate-400">Our deep-dive blog post on agent architecture and use cases.</p>
            </Link>
            <Link
              href="/services/hermes-ai-agent-platform/"
              className="block p-4 border border-slate-800 rounded-xl hover:border-purple-500/40"
            >
              <h3 className="font-semibold text-white">Service: Hermes AI Agent Platform</h3>
              <p className="text-sm text-slate-400">Managed platform for building and deploying AI agent fleets.</p>
            </Link>
          </div>
        </section>
      </div>
    </StandardPage>
  );
}
