import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'AI Agent Framework Comparison | Zion Tech Group',
  description:
    'Compare Hermes Agent, Claude Code, OpenClaw, and other autonomous AI agent frameworks across deployment, platforms, memory, and pricing.',
  openGraph: {
    title: 'AI Agent Framework Comparison | Zion Tech Group',
    description: 'Hermes vs Claude Code vs OpenClaw vs GPT Engineer — feature-by-feature comparison.',
    url: 'https://ziontechgroup.com/docs/agent-framework-comparison/',
    type: 'website',
  },
  alternates: { canonical: '/docs/agent-framework-comparison/' },
};

const COMPARISON = [
  { feature: 'Deployment', hermes: 'Self-hosted or $5 VPS', claudeCode: 'Local CLI (subscription)', openClaw: 'Local CLI (free + API)' },
  { feature: 'Platforms', hermes: '20+ (Telegram, Discord, Slack, WhatsApp, Email, Teams, etc.)', claudeCode: 'CLI only', openClaw: 'CLI only' },
  { feature: 'Automation', hermes: 'Built-in cron + gateway delivery', claudeCode: 'Manual', openClaw: 'Manual' },
  { feature: 'Memory', hermes: 'Persistent, cross-session, cross-platform', claudeCode: 'Per-session', openClaw: 'Declarative SOUL.md' },
  { feature: 'Skills', hermes: 'Self-improving, 350+ community, auto-curated', claudeCode: 'N/A', openClaw: 'Declarative SOUL.md' },
  { feature: 'MCP Support', hermes: 'Yes (6000+ servers)', claudeCode: 'Yes', openClaw: 'No' },
  { feature: 'Subagents', hermes: 'Yes (up to 10 concurrent)', claudeCode: 'Yes', openClaw: 'No' },
  { feature: 'Providers', hermes: '20+ (OpenRouter, Anthropic, OpenAI, Nous, Google, local)', claudeCode: 'Anthropic', openClaw: 'OpenAI + local' },
  { feature: 'Pricing', hermes: '$5 VPS / Docker / Serverless', claudeCode: 'Subscription', openClaw: 'Free + API fees' },
  { feature: 'Terminal Backends', hermes: '6 (local, Docker, SSH, Modal, Singularity, Daytona)', claudeCode: 'Local only', openClaw: 'Local only' },
  { feature: 'Voice Mode', hermes: 'Yes (CLI, Telegram, Discord VC)', claudeCode: 'No', openClaw: 'No' },
];

export default function AgentFrameworkComparisonPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'AI Agent Framework Comparison',
          description: 'Compare Hermes Agent, Claude Code, OpenClaw, and other agent frameworks.',
          author: { '@type': 'Organization', name: 'Zion Tech Group' },
        }}
      />
      <StandardPage
        title="AI Agent Framework Comparison"
        subtitle="Comparing Hermes Agent, Claude Code, and OpenClaw across deployment, platforms, memory, skills, and pricing."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Docs', href: '/docs/hermes-agent-skills/' },
          { label: 'Framework Comparison' },
        ]}
        actions={[{ label: 'Hermes Agent', href: '/services/hermes-agent/', style: 'primary' }]}
      >
        <div className="max-w-5xl mx-auto">
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
                {COMPARISON.map((row) => (
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

          <div className="mt-12 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">When to Choose Each</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-900/60 border border-purple-500/20 rounded-xl p-5">
                <div className="text-2xl mb-2">🚀</div>
                <h3 className="font-semibold text-white mb-2">Hermes Agent</h3>
                <p className="text-slate-400 text-sm">
                  24/7 autonomous operations, multi-platform deployment, self-improving workflows, and teams that
                  need continuous monitoring, SEO automation, and scheduled tasks.
                </p>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-2xl mb-2">💻</div>
                <h3 className="font-semibold text-white mb-2">Claude Code</h3>
                <p className="text-slate-400 text-sm">
                  Real-time coding feedback, human-in-the-loop development, interactive debugging, and rapid
                  prototyping with human judgment in the loop.
                </p>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-2xl mb-2">🔧</div>
                <h3 className="font-semibold text-white mb-2">OpenClaw</h3>
                <p className="text-slate-400 text-sm">
                  Team-standardized agents with audit trails, declarative SOUL.md personality, and compliance
                  requirements where reproducibility matters.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/services/hermes-agent/" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all">
              Deploy Hermes Agent →
            </Link>
          </div>
        </div>
      </StandardPage>
    </>
  );
}
