import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Hermes Multi-Agent Orchestration | Zion Tech Group',
  description:
    'Coordinate fleets of Hermes agents across projects with shared skills, cross-agent context relay, kanban board task management, and group chat collaboration with @mentions.',
  keywords: [
    'multi-agent orchestration',
    'Hermes Agent',
    'agent fleets',
    'agent collaboration',
    'kanban board',
    'task management',
    'bot mode',
    'agent handoff',
    'shared memory',
  ],
  openGraph: {
    title: 'Hermes Multi-Agent Orchestration | Zion Tech Group',
    description:
      'Coordinate fleets of Hermes agents across projects with shared skills, kanban board task management, and group chat collaboration.',
    url: 'https://ziontechgroup.com/services/hermes-multi-agent-orchestration/',
    type: 'website',
  },
  alternates: { canonical: '/services/hermes-multi-agent-orchestration/' },
};

const BOT_TEAM = [
  { emoji: '🦉', name: 'OWL', role: 'Wave integration, dashboard monitoring, site health' },
  { emoji: '🧠', name: 'Kilo', role: 'Fleet orchestration, quality audits, strategic planning' },
  { emoji: '📱', name: 'Tablet', role: 'Service research, content writing, SEO generation' },
  { emoji: '🔧', name: 'Quel', role: 'Frontend code, TypeScript, accessibility, component design' },
  { emoji: '🚀', name: 'Rocket', role: 'CI/CD, build optimization, deployment pipeline' },
  { emoji: '🖥️', name: 'Carol', role: 'GitHub Actions, infrastructure, workflow design' },
  { emoji: '🌊', name: 'Swell', role: 'Performance, SEO, A/B testing, image optimization' },
  { emoji: '🤖', name: 'Kilo AI', role: 'AI benchmarking, client proposals, predictive analytics' },
  { emoji: '🛡️', name: 'Kiloclaw', role: 'Security, pen testing, compliance, vulnerability scans' },
  { emoji: '☁️', name: 'Cloud', role: 'Cloud cost optimization, CDN, multi-cloud failover' },
];

export default function HermesOrchestrationPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Hermes Multi-Agent Orchestration',
          description:
            'Coordinate fleets of Hermes agents across projects with shared skills, kanban board task management, and group chat collaboration.',
          serviceType: 'Multi-Agent Orchestration',
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
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Hermes Orchestration Pricing',
            itemListElement: [
              { '@type': 'Offer', name: 'Starter', price: '999', priceCurrency: 'USD' },
              { '@type': 'Offer', name: 'Professional', price: '2499', priceCurrency: 'USD' },
              { '@type': 'Offer', name: 'Enterprise', price: '9999', priceCurrency: 'USD' },
            ],
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is multi-agent orchestration?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Multi-agent orchestration coordinates fleets of specialized AI agents that collaborate, share memory, and hand off tasks within a shared execution graph. Each agent handles a specific domain while the system maintains overall workflow continuity.',
              },
            },
            {
              '@type': 'Question',
              name: 'How does Bot Mode work?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Bot Mode lets you build durable teams of specialist bots with their own models, memory, skills, and routines. Bots collaborate in group chats and respond to @mentions — like a real ops team on autopilot.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can agents hand off tasks between each other?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Agents can @mention other agents in group chats, relay context and shared memory, and hand off tasks with full execution state. The receiving agent picks up with complete context — no re-instruction needed.',
              },
            },
          ],
        }}
      />
      <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbSchema
            path="/services/hermes-multi-agent-orchestration"
            title="Hermes Multi-Agent Orchestration"
          />
          <h1 className="text-4xl font-bold mb-6">
            🔗 Hermes Multi-Agent Orchestration
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Coordinate fleets of Hermes agents across projects with shared skills, cross-agent
            context relay, kanban board task management, and group chat collaboration with
            @mentions.
          </p>

          <div className="bg-slate-900 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>Fleet orchestration across projects with isolated worktrees</li>
              <li>Shared skills and cross-agent context relay</li>
              <li>Kanban board task management with multi-profile collaboration</li>
              <li>Bot Mode protocol for specialist agent teams</li>
              <li>Group chat agent handoffs with @mentions</li>
              <li>Per-agent model and memory isolation</li>
              <li>Quality gates and review loops</li>
              <li>Delegation with zero context cost (subagents)</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Agent Fleet</h2>
            <p className="text-slate-400 text-sm mb-4">
              At Zion Tech Group, our 10-agent Hermes fleet operates 24/7:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {BOT_TEAM.map((bot) => (
                <div key={bot.name} className="border border-slate-800 rounded-lg p-4">
                  <span className="text-2xl mr-2">{bot.emoji}</span>
                  <strong className="text-white">{bot.name}</strong>
                  <p className="text-slate-500 text-xs mt-1">{bot.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-purple-500 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Starter</h3>
                <p className="text-2xl font-bold mb-2">$999/month</p>
                <p className="text-slate-400 text-sm">Up to 5 agents, basic orchestration</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
                <h3 className="font-semibold mb-2">Professional</h3>
                <p className="text-2xl font-bold mb-2">$2,499/month</p>
                <p className="text-slate-400 text-sm">Unlimited agents, full orchestration + kanban</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Enterprise</h3>
                <p className="text-2xl font-bold mb-2">Custom</p>
                <p className="text-slate-400 text-sm">Multi-profile, custom bot teams, SLA</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <Link href="/services/" className="text-purple-300 hover:text-purple-200">
              ← Back to All Services
            </Link>
            <Link href="/agents-monitoring/" className="text-slate-400 hover:text-slate-300">
              Live Agent Dashboard →
            </Link>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg shadow-purple-500/25"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
