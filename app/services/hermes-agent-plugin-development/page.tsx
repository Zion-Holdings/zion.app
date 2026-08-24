import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import StandardPage from '@/components/StandardPage'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Hermes Agent Plugin Development — Custom Tools & Integrations | Zion Tech Group',
  description: 'Build custom Hermes Agent plugins that add tools, hooks, slash commands, CLI subcommands, and platform adapters. Extend Hermes without modifying core code.',
  openGraph: {
    title: 'Hermes Agent Plugin Development',
    description: 'Custom plugin development for Hermes Agent — add tools, hooks, commands, MCP servers, and platform integrations.',
    url: 'https://ziontechgroup.com/services/hermes-agent-plugin-development',
    type: 'website',
  },
  alternates: { canonical: '/services/hermes-agent-plugin-development' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hermes Agent Plugin Development',
  description: 'Build custom Hermes Agent plugins that add tools, hooks, slash commands, CLI subcommands, and platform adapters.',
  serviceType: 'plugin-development',
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

export default function HermesPluginDevelopmentPage() {
  return (
    <StandardPage
      title="Hermes Agent Plugin Development"
      subtitle="Build custom plugins that add tools, hooks, slash commands, and platform integrations to Hermes Agent without touching core code."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Hermes Agent Plugin Development' },
      ]}
      actions={[
        { label: 'Talk to an engineer', href: '/contact/', style: 'primary' },
        { label: 'Explore all Hermes services', href: '/services/', style: 'secondary' },
      ]}
    >
      <JsonLd data={jsonLd} />
      <BreadcrumbSchema path="/services/hermes-agent-plugin-development" title="Hermes Agent Plugin Development" />

      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="bg-gradient-to-br from-emerald-900/20 via-teal-800/15 to-cyan-900/20 rounded-3xl p-10 mb-10 border border-emerald-500/20">
          <div className="flex items-start gap-4">
            <div className="text-5xl shrink-0">🔌</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-3">Hermes Agent Plugin Development</h1>
              <p className="text-xl text-slate-200 mb-6 max-w-3xl">
                Extend Hermes Agent with custom plugins that add tools, hooks, slash commands, CLI
                subcommands, MCP servers, memory providers, and entire platform adapters — all without
                modifying core code.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 text-center min-w-[140px]">
                  <div className="text-3xl font-bold text-emerald-400">6</div>
                  <div className="text-xs text-slate-400 mt-1">Plugin Types</div>
                </div>
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 text-center min-w-[140px]">
                  <div className="text-3xl font-bold text-teal-400">1K+</div>
                  <div className="text-xs text-slate-400 mt-1">SaaS Integrations</div>
                </div>
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 text-center min-w-[140px]">
                  <div className="text-3xl font-bold text-cyan-400">Zero</div>
                  <div className="text-xs text-slate-400 mt-1">Core Modifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="prose prose-slate prose-invert max-w-none mb-12">
          <h2>Extend Hermes Without Touching Core Code</h2>
          <p>
            Hermes Agent's plugin system lets you add new capabilities through a simple <code>register(ctx)</code>
            function. Drop a directory with <code>plugin.yaml</code> and <code>__init__.py</code> into
            <code>~/.hermes/plugins/</code>, restart Hermes, and your tools appear alongside built-in tools.
          </p>
        </div>

        {/* Plugin Types */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6">
            <div className="text-3xl mb-3">🛠️</div>
            <h3 className="text-xl font-bold text-white mb-2">General Plugins</h3>
            <p className="text-slate-300 mb-3">Add tools, hooks, slash commands, CLI subcommands, and inject messages into sessions.</p>
            <ul className="text-sm text-slate-400 space-y-1">
              <li><code>ctx.register_tool()</code> — Add callable tools</li>
              <li><code>ctx.register_hook()</code> — Pre/post LLM, tool, session hooks</li>
              <li><code>ctx.register_command()</code> — Slash commands in CLI/gateway</li>
              <li><code>ctx.register_cli_command()</code> — <code>hermes &lt;cmd&gt;</code> subcommands</li>
            </ul>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6">
            <div className="text-3xl mb-3">📦</div>
            <h3 className="text-xl font-bold text-white mb-2">Specialized Plugins</h3>
            <p className="text-slate-300 mb-3">Memory providers, context engines, image/video backends, platform adapters, and MCP integrations.</p>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>Memory providers (Honcho, Mem0, Hindsight)</li>
              <li>Context compression engines</li>
              <li>Image & video generation backends</li>
              <li>Gateway platform adapters</li>
              <li>MCP server wrappers</li>
            </ul>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6">
            <div className="text-3xl mb-3">🔑</div>
            <h3 className="text-xl font-bold text-white mb-2">Composio Integration</h3>
            <p className="text-slate-300 mb-3">Connect Hermes to 1,000+ SaaS apps via OAuth — Salesforce, HubSpot, Notion, Airtable, and more through a single MCP endpoint.</p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-white mb-2">Approval Transports</h3>
            <p className="text-slate-300 mb-3">Route human approval prompts for destructive commands through custom transports — Slack, email, PagerDuty, or your own UI.</p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="prose prose-slate prose-invert max-w-none mb-12">
          <h2>What Your Plugin Can Do</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-slate-700/60 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-800/60">
                  <th className="text-left p-4 text-white">Capability</th>
                  <th className="text-left p-4 text-white">API</th>
                  <th className="text-left p-4 text-white">Use Case</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-t border-slate-700/60">
                  <td className="p-4">Add tools</td>
                  <td className="p-4"><code>ctx.register_tool()</code></td>
                  <td className="p-4">Domain-specific APIs, data queries, write operations</td>
                </tr>
                <tr className="border-t border-slate-700/60">
                  <td className="p-4">Add hooks</td>
                  <td className="p-4"><code>ctx.register_hook()</code></td>
                  <td className="p-4">Logging, telemetry, pre/post processing</td>
                </tr>
                <tr className="border-t border-slate-700/60">
                  <td className="p-4">Slash commands</td>
                  <td className="p-4"><code>ctx.register_command()</code></td>
                  <td className="p-4">In-chat quick actions, triggers, shortcuts</td>
                </tr>
                <tr className="border-t border-slate-700/60">
                  <td className="p-4">CLI subcommands</td>
                  <td className="p-4"><code>ctx.register_cli_command()</code></td>
                  <td className="p-4">Setup wizards, config commands, admin tools</td>
                </tr>
                <tr className="border-t border-slate-700/60">
                  <td className="p-4">Memory backend</td>
                  <td className="p-4">Subclass <code>MemoryProvider</code></td>
                  <td className="p-4">Persist knowledge across sessions</td>
                </tr>
                <tr className="border-t border-slate-700/60">
                  <td className="p-4">Platform adapter</td>
                  <td className="p-4"><code>ctx.register_platform()</code></td>
                  <td className="p-4">Bring Hermes to new messaging channels</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Plugin Development Packages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-8">
              <div className="text-3xl font-bold text-emerald-400 mb-2">Starter Plugin</div>
              <div className="text-xl font-bold text-white mb-4">$499</div>
              <ul className="text-sm text-slate-300 space-y-3">
                <li>Single custom plugin with 1-3 tools</li>
                <li>Basic hooks for logging/telemetry</li>
                <li>Slash command integration</li>
                <li>Security scan + testing</li>
                <li>Documentation included</li>
              </ul>
            </div>
            <div className="bg-slate-800/40 border-2 border-cyan-500/40 rounded-xl p-8">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Enterprise Plugin Suite</div>
              <div className="text-xl font-bold text-white mb-4">$2,999</div>
              <ul className="text-sm text-slate-300 space-y-3">
                <li>Up to 5 custom plugins with 15+ tools</li>
                <li>Memory provider + context engine plugins</li>
                <li>Platform adapter for custom channels</li>
                <li>Composio/SaaS integration (1,000+ apps)</li>
                <li>Approval transport + security hardening</li>
                <li>Full CI/CD pipeline + monitoring</li>
                <li>Ongoing maintenance included</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 bg-gradient-to-r from-emerald-900/20 via-teal-800/15 to-cyan-900/20 rounded-3xl border border-emerald-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Hermes Plugin?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our plugin developers build custom integrations that connect Hermes Agent to your existing
            tools, APIs, and workflows. Zero core modifications, full security scanning.
          </p>
          <a
            href="/contact/"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-4 px-8 rounded-xl transition"
          >
            Build My Plugin
          </a>
        </div>
      </div>
    </StandardPage>
  )
}
