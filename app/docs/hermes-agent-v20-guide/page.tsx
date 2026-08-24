import type { Metadata } from 'next'
import StandardPage from '@/components/StandardPage'
import JsonLd from '@/components/JsonLd'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Hermes Agent v0.20 Guide — Bot Mode, A2A, Plugins, v2.1 Features',
  description: 'Complete guide to Hermes Agent v0.20+ features: Bot Mode specialist teams, Agent-to-Agent (A2A) protocol, custom plugin SDK, Mixture-of-Agents virtual models, and keyless web tier.',
  openGraph: {
    title: 'Hermes Agent v0.20 Guide — Bot Mode, A2A, Plugins',
    description: 'Complete guide to Hermes Agent v0.20+ features from Nous Research.',
    url: 'https://ziontechgroup.com/docs/hermes-agent-v20-guide',
    type: 'article',
  },
  alternates: { canonical: '/docs/hermes-agent-v20-guide' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Hermes Agent v0.20 Guide — Bot Mode, A2A, Plugins, and v2.1 Features',
  description: 'Complete guide to Hermes Agent v0.20+ features.',
  author: { '@type': 'Organization', name: 'Zion Tech Group' },
  publisher: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
  mainEntityOfPage: 'https://ziontechgroup.com/docs/hermes-agent-v20-guide',
}

export default function HermesV20Guide() {
  return (
    <StandardPage
      title="Hermes Agent v0.20+ Feature Guide"
      subtitle="Bot Mode • A2A Protocol • Plugin SDK • MoA Virtual Models • Keyless Web Tier"
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Docs', href: '/docs/' },
        { label: 'Hermes Agent v0.20 Guide' },
      ]}
    >
      <JsonLd data={jsonLd} />
      <BreadcrumbSchema path="/docs/hermes-agent-v20-guide" title="Hermes Agent v0.20 Guide" />

      <div className="max-w-4xl mx-auto">
        <div className="prose prose-slate prose-invert max-w-none">
          <p>
            This guide covers <strong>Hermes Agent v0.20+</strong> (latest tag: v2026.8.19) — the most
            feature-rich release of Nous Research's open-source AI agent framework. Updated for the 0.20.5
            patch window with 746 commits across 1,250 files.
          </p>

          <h2>Latest: v0.20.5 (v2026.8.19)</h2>
          <p>
            <strong>746 commits</strong> across <strong>1,250 files</strong> (~323 merged PRs) since v0.20.4,
            including:
          </p>
          <ul>
            <li><strong>Bot Mode group-room threads</strong> — Bots collaborate in persistent group rooms with thread-aware messaging</li>
            <li><strong>Foldable conversation summaries</strong> — Auto-collapse long Bot Chat histories into digestible summaries</li>
            <li><strong>PDF/file attachments with drag &amp; drop</strong> — Bots can receive and process file uploads</li>
            <li><strong>Keyless web tier</strong> — 5-vendor free rotation with ring failover; web search works on fresh installs with zero API keys</li>
            <li><strong>CLI polish wave</strong> — Fuzzy /model picker, Ctrl+P command palette, richer /status</li>
            <li><strong>Cron persistent memory + per-job reasoning effort</strong> — Jobs carry state across runs and can set reasoning levels independently</li>
            <li><strong>Desktop perf</strong> — Paint-first Bot Mode hydration, compositor spinners, React Compiler in both renderers</li>
          </ul>

          <h2>v0.20.0 Highlights</h2>

          <h3>🤖 The Desktop App Becomes a Platform</h3>
          <p>
            Hermes desktop now renders <strong>artifacts</strong> — versioned cards with sandboxed live preview
            in a right-rail viewer. A real <strong>Plugin SDK</strong> landed with Kanban as its founding plugin,
            <code>ctx.download</code> for handing users files, floating pane placement, and multiple GUI windows.
            A global-hotkey <strong>quick-entry window</strong> captures thoughts into any session from anywhere.
          </p>

          <h3>🔗 Agent-to-Agent (A2A) Protocol v1.0</h3>
          <p>
            A bundled plugin implements the <strong>Agent-to-Agent protocol</strong>, so Hermes can discover,
            talk to, and be driven by other A2A-compatible agents. This closes one of the oldest feature
            requests in the repo — heterogeneous multi-agent systems can now use Hermes as a standard participant.
          </p>
          <p>
            <a href="/services/hermes-agent-a2a-protocol/" className="text-purple-400">→ A2A Protocol Integration Service</a>
          </p>

          <h3>🛠 Tools That Fix Themselves</h3>
          <p>
            Truncated terminal output spills to a file the agent can read back. <code>patch</code> detects
            already-applied edits and diagnoses whitespace mismatches. <code>write_file</code> verifies content
            on disk. Searches that match nothing probe for near-misses. The default tool-calling iteration
            limit jumped <strong>90 → 500</strong> — long autonomous runs no longer hit artificial walls.
          </p>

          <h3>🧠 Mixtuture-of-Agents (MoA) Virtual Models</h3>
          <p>
            Hermes exposes Mixture-of-Agents presets as virtual models — benchmarks 8% higher than Opus 4.8
            and 11% higher than GPT 5.5 on upcoming benchmarks. Access via <code>/model</code> → MoA presets.
          </p>

          <h2>Plugin System — v0.20 API Reference</h2>

          <h3>Creating a Plugin</h3>
          <pre>{`~/​.hermes/plugins/my-plugin/
├── plugin.yaml      # manifest (name, version, description, requires_env)
├── __init__.py      # register(ctx) — wires schemas to handlers
├── schemas.py       # tool JSON schemas
└── tools.py         # handler functions`}</pre>

          <h3>Plugin Registration API</h3>
          <table className="w-full border border-slate-700/60 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-slate-800/60">
                <th className="text-left p-4 text-white">Method</th>
                <th className="text-left p-4 text-white">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-t border-slate-700/60">
                <td className="p-4"><code>ctx.register_tool()</code></td>
                <td className="p-4">Add callable tools with JSON schema</td>
              </tr>
              <tr className="border-t border-slate-700/60">
                <td className="p-4"><code>ctx.register_hook()</code></td>
                <td className="p-4">Register hooks (post_tool_call, pre_llm_call, session_start/end)</td>
              </tr>
              <tr className="border-t border-slate-700/60">
                <td className="p-4"><code>ctx.register_command()</code></td>
                <td className="p-4">Add slash commands (/command) in CLI and gateway</td>
              </tr>
              <tr className="border-t border-slate-700/60">
                <td className="p-4"><code>ctx.register_cli_command()</code></td>
                <td className="p-4">Add <code>hermes &lt;cmd&gt;</code> subcommands</td>
              </tr>
              <tr className="border-t border-slate-700/60">
                <td className="p-4"><code>ctx.register_platform()</code></td>
                <td className="p-4">Add gateway platform adapters (Discord, Telegram, IRC...)</td>
              </tr>
              <tr className="border-t border-slate-700/60">
                <td className="p-4"><code>ctx.call_mcp()</code></td>
                <td className="p-4">Call MCP tools from within plugin handlers (capability-gated)</td>
              </tr>
            </tbody>
          </table>

          <h3>Built-in Plugins (v0.20+)</h3>
          <ul>
            <li><strong>disk-cleanup</strong> — Clears agent-generated temp files safely (<code>hermes plugins enable disk-cleanup</code>)</li>
            <li><strong>observability/langfuse</strong> — Traces every turn, tool call, latency, and cost (<code>hermes plugins enable observability/langfuse</code>)</li>
            <li><strong>google_meet</strong> — Joins calls, transcribes, writes notes (<code>hermes plugins enable google_meet</code>)</li>
            <li><strong>browser/browser_use</strong> — Browser automation (<code>hermes plugins enable browser/browser_use</code>)</li>
            <li><strong>browser/firecrawl</strong> — Web scraping, crawling, browser rendering (<code>hermes plugins enable browser/firecrawl</code>)</li>
            <li><strong>cron_providers/chronos</strong> — Cron scheduler (<code>hermes plugins enable cron_providers/chronos</code>)</li>
            <li><strong>image_gen/fal</strong> — FLUX image generation (<code>hermes plugins enable image_gen/fal</code>)</li>
            <li><strong>image_gen/openai</strong> — DALL·E 3 (<code>hermes plugins enable image_gen/openai</code>)</li>
            <li><strong>image_gen/openrouter</strong> — OpenRouter image models (<code>hermes plugins enable image_gen/openrouter</code>)</li>
          </ul>

          <h2>CLI Commands Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-slate-700/60 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800/60">
                  <th className="text-left p-4 text-white">Command</th>
                  <th className="text-left p-4 text-white">Description</th>
                </tr>
              </thead>
              <tbody className="text-slate-300 text-sm">
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>hermes setup --portal</code></td><td className="p-4">One-command OAuth setup (model + Tool Gateway)</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>hermes model</code></td><td className="p-4">Interactive model/provider picker</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>hermes cron list</code></td><td className="p-4">List scheduled jobs</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>hermes cron create "30m"</code></td><td className="p-4">Create a job (supports "30m", "0 9 * * *", ISO timestamps)</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>hermes mcp add NAME --url URL</code></td><td className="p-4">Add an MCP server</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>hermes plugins enable &lt;name&gt;</code></td><td className="p-4">Enable a built-in plugin</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>hermes skills install ID</code></td><td className="p-4">Install a skill from the hub (auto-scanned for security)</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>hermes profile create &lt;name&gt;</code></td><td className="p-4">Create an isolated profile</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>hermes doctor</code></td><td className="p-4">Diagnose issues</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>hermes dashboard</code></td><td className="p-4">Open monitoring dashboard</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Slash Commands</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-slate-700/60 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800/60">
                  <th className="text-left p-4 text-white">Command</th>
                  <th className="text-left p-4 text-white">Description</th>
                </tr>
              </thead>
              <tbody className="text-slate-300 text-sm">
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>/new</code></td><td className="p-4">Fresh session</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>/agents</code></td><td className="p-4">Show active agents and running tasks</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>/cron</code></td><td className="p-4">Manage cron jobs (CLI/gateway)</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>/model &lt;name&gt;</code></td><td className="p-4">Switch models interactively</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>/reasoning &lt;level&gt;</code></td><td className="p-4">Set reasoning effort (none|minimal|low|medium|high|xhigh)</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>/skills</code></td><td className="p-4">Search/install skills</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>/bot &lt;name&gt;</code></td><td className="p-4">Chat with a named Bot (Bot Mode)</td></tr>
                <tr className="border-t border-slate-700/60"><td className="p-4"><code>/kanban</code></td><td className="p-4">Multi-profile work queue</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Related Services</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <a href="/services/hermes-agent-bot-mode/" className="block bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 hover:border-purple-500/30 transition">
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="font-bold text-white">Bot Mode</h3>
              <p className="text-sm text-slate-300">Specialist AI Bot teams</p>
            </a>
            <a href="/services/hermes-agent-plugin-development/" className="block bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 hover:border-purple-500/30 transition">
              <div className="text-2xl mb-2">🔌</div>
              <h3 className="font-bold text-white">Plugin Dev</h3>
              <p className="text-sm text-slate-300">Custom plugins & integrations</p>
            </a>
            <a href="/services/hermes-agent-a2a-protocol/" className="block bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 hover:border-purple-500/30 transition">
              <div className="text-2xl mb-2">🔗</div>
              <h3 className="font-bold text-white">A2A Protocol</h3>
              <p className="text-sm text-slate-300">Agent-to-Agent integration</p>
            </a>
          </div>
        </div>
      </div>
    </StandardPage>
  )
}
