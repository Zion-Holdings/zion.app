import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import StandardPage from '@/components/StandardPage'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Hermes Agent Bot Mode — Specialist AI Bot Teams | Zion Tech Group',
  description: 'Deploy named specialist AI Bots with their own models, memory, skills, and routines. Bot Mode gives you a durable team of AI agents that collaborate via @mentions, group chats, and cross-machine DMs.',
  openGraph: {
    title: 'Hermes Agent Bot Mode — Specialist AI Bot Teams',
    description: 'Build a team of named specialist AI Bots with persistent memory, custom models, and cross-platform messaging.',
    url: 'https://ziontechgroup.com/services/hermes-agent-bot-mode',
    type: 'website',
  },
  alternates: { canonical: '/services/hermes-agent-bot-mode' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hermes Agent Bot Mode',
  description: 'Deploy named specialist AI Bots with their own models, memory, skills, and routines. Bot Mode gives you a durable team of AI agents that collaborate via @mentions, group chats, and cross-machine DMs.',
  serviceType: 'bot-mode',
  provider: {
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@ziontechgroup.com',
      telephone: '+1 302 464 0950',
      contactType: 'sales',
    },
  },
  areaServed: 'Global',
  offerMode: 'https://schema.org/OnlineBooking',
}

export default function HermesBotModePage() {
  return (
    <StandardPage
      title="Hermes Agent Bot Mode"
      subtitle="Specialist AI Bot teams that collaborate across platforms, remember everything, and run continuously."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Hermes Agent Bot Mode' },
      ]}
      actions={[
        { label: 'Talk to an engineer', href: '/contact/', style: 'primary' },
        { label: 'Explore all Hermes services', href: '/services/', style: 'secondary' },
      ]}
    >
      <JsonLd data={jsonLd} />
      <BreadcrumbSchema path="/services/hermes-agent-bot-mode" title="Hermes Agent Bot Mode" />

      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="bg-gradient-to-br from-purple-900/20 via-violet-800/15 to-fuchsia-900/20 rounded-3xl p-10 mb-10 border border-purple-500/20">
          <div className="flex items-start gap-4">
            <div className="text-5xl shrink-0">🤖</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-3">Bot Mode — Specialist AI Bot Teams</h1>
              <p className="text-xl text-slate-200 mb-6 max-w-3xl">
                Deploy named specialist AI Bots with their own models, memory, skills, and routines.
                Each Bot is a persistent Hermes profile that collaborates via @mentions, group chats, and
                cross-machine DMs. Built by Nous Research, managed by Zion Tech Group.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 text-center min-w-[140px]">
                  <div className="text-3xl font-bold text-purple-400">10+</div>
                  <div className="text-xs text-slate-400 mt-1">Bot Types</div>
                </div>
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 text-center min-w-[140px]">
                  <div className="text-3xl font-bold text-violet-400">24/7</div>
                  <div className="text-xs text-slate-400 mt-1">Persistence</div>
                </div>
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 text-center min-w-[140px]">
                  <div className="text-3xl font-bold text-fuchsia-400">15+</div>
                  <div className="text-xs text-slate-400 mt-1">Platform Bridge</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="prose prose-slate prose-invert max-w-none mb-12">
          <h2>Specialist Bots. One Team.</h2>
          <p>
            Bot Mode transforms Hermes Agent from a single assistant into a <strong>durable team of specialist
            Bots</strong>. Each Bot is a real, isolated Hermes profile with its own model pin, memory, skills,
            credentials, avatar, and persistent Bot Chat. Bots run recurring routines, deliberate together in
            group chats, and message each other directly.
          </p>

          <h3>What You Get</h3>
          <ul>
            <li><strong>Named Bot roster</strong> — Create Bots with custom personas, titles, and avatars. Each Bot has its own conversation history and standing instructions (SOUL.md).</li>
            <li><strong>Model pinning</strong> — Pin different Bots to different providers/models. Route complex tasks to Claude, fast responses to GPT, and budget-sensitive work to local models.</li>
            <li><strong>Bot-to-bot messaging</strong> — @mention any Bot to hand off work. Bots message each other directly via CLI or group rooms.</li>
            <li><strong>Cross-machine DMs</strong> — Bots on one machine can message Bots on another via the peer protocol (Tailscale, VPN, LAN).</li>
            <li><strong>Persistent routines</strong> — Each Bot runs scheduled cron jobs namespaced as <code>[bot:&lt;name&gt;]</code>, landing in the Bot's own chat history.</li>
            <li><strong>Group collaboration</strong> — Bring Bots together in shared group rooms for multi-agent deliberation.</li>
          </ul>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-xl font-bold text-white mb-2">SOUL.md Personas</h3>
            <p className="text-slate-300">Each Bot gets a SOUL.md defining its personality, standing instructions, and domain expertise. Bots only load the bot-to-bot messaging protocol in their canonical Bot Chat.</p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="text-xl font-bold text-white mb-2">Shared Credential Pools</h3>
            <p className="text-slate-300">By default, Bots share one OAuth/token pool with the main profile so credential refreshes don't invalidate each other.</p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-bold text-white mb-2">Bot Chat History</h3>
            <p className="text-slate-300">Every Bot has a canonical, persistent conversation. /new inside it reroutes to /compact (keeps history, flushes context).</p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="text-xl font-bold text-white mb-2">Per-Bot Tool Toggles</h3>
            <p className="text-slate-300">Enable exactly the skills, tools, and MCP servers each Bot needs. Nothing is shared unless you choose it.</p>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-slate-800/30 border border-slate-700/60 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Bot Team Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🔍</div>
              <h3 className="font-bold text-white mb-1">Researcher</h3>
              <p className="text-sm text-slate-300">Deep research, competitor analysis, and market intelligence gathering.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="font-bold text-white mb-1">Deployer</h3>
              <p className="text-sm text-slate-300">CI/CD pipeline management, deployment verification, and rollback.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📣</div>
              <h3 className="font-bold text-white mb-1">Outreach</h3>
              <p className="text-sm text-slate-300">Email campaigns, social scheduling, and engagement monitoring.</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Bot Mode Add-On</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-8 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">3 Bots</div>
              <div className="text-xl font-bold text-white mb-4">$999/mo</div>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>3 named specialist Bots</li>
                <li>Dedicated model pin per Bot</li>
                <li>Shared credential pools</li>
                <li>Basic routines</li>
              </ul>
            </div>
            <div className="bg-slate-800/40 border-2 border-fuchsia-500/40 rounded-xl p-8 text-center">
              <div className="text-3xl font-bold text-fuchsia-400 mb-2">10 Bots</div>
              <div className="text-xl font-bold text-white mb-4">$2,499/mo</div>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>10 named specialist Bots</li>
                <li>Per-Bot model pinning</li>
                <li>Group room collaboration</li>
                <li>Cross-machine DMs</li>
                <li>Advanced routines + monitoring</li>
              </ul>
            </div>
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-8 text-center">
              <div className="text-3xl font-bold text-violet-400 mb-2">Unlimited</div>
              <div className="text-xl font-bold text-white mb-4">Custom</div>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>Unlimited Bots</li>
                <li>Dedicated infrastructure</li>
                <li>Custom integrations</li>
                <li>SLA + 24/7 support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 bg-gradient-to-r from-purple-900/20 via-violet-800/15 to-fuchsia-900/20 rounded-3xl border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Your AI Bot Team?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Start with a 3-Bot starter pack and scale to an unlimited team. Each Bot gets its own model,
            memory, and platform connections.
          </p>
          <a
            href="/contact/"
            className="inline-block bg-fuchsia-500 hover:bg-fuchsia-600 text-black font-bold py-4 px-8 rounded-xl transition"
          >
            Build My Bot Team
          </a>
        </div>
      </div>
    </StandardPage>
  )
}
