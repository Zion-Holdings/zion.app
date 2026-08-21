import type { Metadata } from 'next';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hermes Agent MCP Integration: Connect 6,000+ Tools via the Model Context Protocol',
  description:
    'How to integrate MCP servers with Hermes Agent to unlock 6,000+ tools. Step-by-step guide covering setup, configuration, and production best practices.',
  keywords: [
    'Hermes Agent MCP',
    'Model Context Protocol',
    'MCP servers',
    'AI agent tools',
    'plugin integration',
    'Nous Research',
    '6000 tools',
  ],
  openGraph: {
    title: 'Hermes Agent MCP Integration: Connect 6,000+ Tools',
    description: 'Step-by-step MCP integration guide for Hermes Agent — unlock 6,000+ tools from the Model Context Protocol.',
    url: 'https://ziontechgroup.com/blog/hermes-agent-mcp-integration/',
    type: 'article',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: '/blog/hermes-agent-mcp-integration/' },
};

export default function HermesMcpIntegrationPost() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Hermes Agent MCP Integration: Connect 6,000+ Tools via the Model Context Protocol',
        description: 'How to integrate MCP servers with Hermes Agent to unlock 6,000+ tools.',
        author: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
        publisher: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
        datePublished: '2026-08-21T00:00:00Z',
        mainEntityOfPage: 'https://ziontechgroup.com/blog/hermes-agent-mcp-integration/',
      }} />
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SiteBreadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Hermes Agent MCP Integration' },
          ]}
          className="mb-8"
        />

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Hermes Agent MCP Integration: Connect 6,000+ Tools
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            The Model Context Protocol (MCP) is an open standard that lets AI agents connect to any tool
            that speaks the protocol. With Hermes Agent, you can unlock 6,000+ MCP servers — from
            Postgres databases to GitHub, Figma, Linear, and beyond — in minutes.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>By Zion Tech Group</span>
            <span>·</span>
            <span>August 21, 2026</span>
            <span>·</span>
            <span>10 min read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-300 leading-relaxed">
            Hermes Agent natively supports the <strong>Model Context Protocol</strong> (MCP), an open
            standard co-developed by Anthropic and adopted by 6,000+ server implementations. This means
            any tool that exposes an MCP server can be dropped into a Hermes agent with zero custom
            code — instantly extending the agent's capabilities.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What is MCP?</h2>
          <p className="text-slate-300 leading-relaxed">
            MCP (Model Context Protocol) is a universal interface for connecting AI agents to external
            tools and data sources. Instead of writing custom integrations for each service, MCP servers
            expose a standardized interface that any MCP-compatible agent can consume. The ecosystem has
            exploded in 2026, with 6,000+ servers covering databases, APIs, developer tools, SaaS
            platforms, and more.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Quick Setup: Add Your First MCP Server</h2>
          <p className="text-slate-300 leading-relaxed">Two commands and you're connected:</p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono my-4 overflow-x-auto">
            <code className="text-slate-200">
{`# 1. Add an MCP server (e.g., Brave Search)
hermes mcp add brave-search --command npx --args "-y,@modelcontextprotocol/server-brave-search"

# 2. Test the connection
hermes mcp test brave-search

# 3. Run Hermes — the tools are available immediately
hermes -s hermes-agent "Search for recent AI agent security research and summarize"</code>}
            </code>
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Adding Servers in Three Modes</h2>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Stdio Servers (Local Process)</h3>
          <p className="text-slate-300 leading-relaxed">
            For local tools or scripts — runs as a child process of the agent:
          </p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono my-4 overflow-x-auto">
            <code className="text-slate-200">
{`hermes mcp add my-postgres --command npx --args "-y,@modelcontextprotocol/server-postgres" --env "DATABASE_URL=postgresql://..."`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">HTTP Servers (Remote Service)</h3>
          <p className="text-slate-300 leading-relaxed">
            For remote MCP-compatible services:
          </p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono my-4 overflow-x-auto">
            <code className="text-slate-200">
{`hermes mcp add my-remote-server --url https://mcp.example.com/mcp`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Configuring Tool Selection</h3>
          <p className="text-slate-300 leading-relaxed">
            After adding a server, use <code>hermes mcp configure &lt;name&gt;</code> to toggle which
            tools from that server appear in the agent's toolset:
          </p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono my-4 overflow-x-auto">
            <code className="text-slate-200">
{`hermes mcp configure brave-search
# Interactive curses UI — toggle individual tools on/off`}
            </code>
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Production Best Practices</h2>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Manage MCP in config.yaml</h3>
          <p className="text-slate-300 leading-relaxed">
            For production deployments, configure MCP servers directly in <code>config.yaml</code>
            rather than using the CLI — ensures consistency across environments:
          </p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono my-4 overflow-x-auto">
            <code className="text-slate-200">
{`# ~/.hermes/config.yaml
mcp:
  servers:
    brave-search:
      command: npx
      args: ["-y", "@modelcontextprotocol/server-brave-search"]
      env:
        BRAVE_API_KEY: "${BRAVE_API_KEY}"
    postgres:
      command: npx
      args: ["-y", "@modelcontextprotocol/server-postgres"]
      env:
        DATABASE_URL: "${DATABASE_URL}"`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Tool Restrictions per Platform</h3>
          <p className="text-slate-300 leading-relaxed">
            Use <code>hermes mcp configure</code> to disable dangerous tools (database writes,
            destructive commands) on messaging platforms like Telegram while keeping them available
            in the CLI. This prevents abuse while preserving agent power.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. Credential Security</h3>
          <p className="text-slate-300 leading-relaxed">
            Never hardcode secrets in MCP config. Use <code>config.yaml </code>
            env-var interpolation (<code>${VAR_NAME}</code>) with secrets stored in{' '}
            <code>~/.hermes/.env</code>. The Curator skill
            (<code>api-key-auditor-organizer</code>) scans for leaked credentials in
            committed configs.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Popular MCP Servers for Hermes Agents</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-800 rounded-xl overflow-hidden my-6">
              <thead className="bg-slate-900/80">
                <tr>
                  <th className="text-left p-4 text-slate-300 font-medium">Server</th>
                  <th className="text-left p-4 text-slate-300 font-medium">Use Case</th>
                  <th className="text-left p-4 text-slate-300 font-medium">Key Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="p-4 text-purple-300 font-medium">@modelcontextprotocol/server-postgres</td>
                  <td className="p-4 text-slate-300">Query PostgreSQL databases</td>
                  <td className="p-4 text-slate-300">query, list_tables, get_schema</td>
                </tr>
                <tr>
                  <td className="p-4 text-purple-300 font-medium">server-github</td>
                  <td className="p-4 text-slate-300">GitHub issues, PRs, repos</td>
                  <td className="p-4 text-slate-300">get_issue, create_pr, list_repos</td>
                </tr>
                <tr>
                  <td className="p-4 text-purple-300 font-medium">server-brave-search</td>
                  <td className="p-4 text-slate-300">Web search via Brave API</td>
                  <td className="p-4 text-slate-300">brave_search, brave_local_search</td>
                </tr>
                <tr>
                  <td className="p-4 text-purple-300 font-medium">server-figma</td>
                  <td className="p-4 text-slate-300">Figma design tool integration</td>
                  <td className="p-4 text-slate-300">get_file, create_component</td>
                </tr>
                <tr>
                  <td className="p-4 text-purple-300 font-medium">server-linear</td>
                  <td className="p-4 text-slate-300">Linear issue tracking</td>
                  <td className="p-4 text-slate-300">create_issue, list_issues</td>
                </tr>
                <tr>
                  <td className="p-4 text-purple-300 font-medium">Composio MCP</td>
                  <td className="p-4 text-slate-300">1,000+ SaaS app integrations</td>
                  <td className="p-4 text-slate-300">action_get, action_run</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">MCP vs Hermes Plugins</h2>
          <p className="text-slate-300 leading-relaxed">
            When should you use MCP vs writing a Hermes plugin?
          </p>
          <ul className="text-slate-300 leading-relaxed list-disc list-inside space-y-2">
            <li>
              <strong>MCP servers</strong> — use when a community-maintained server already exists for
              your target tool. Zero code needed. Just add and configure.
            </li>
            <li>
              <strong>Hermes plugins</strong> — use when you need custom behavior, background hooks,
              CLI slash commands, or platform adapters. Plugins have deeper integration with the
              Hermes lifecycle (startup, shutdown, env injection).
            </li>
            <li>
              <strong>Python tools</strong> — use when you need a simple function registered in 3 files
              within the Hermes process. Best for compute-heavy or tightly-coupled logic.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Our Production MCP Stack</h2>
          <p className="text-slate-300 leading-relaxed">
            At Zion Tech Group, our Hermes fleet uses these MCP servers in production:
          </p>
          <ul className="text-slate-300 leading-relaxed list-disc list-inside space-y-2">
            <li><strong>server-github</strong> — Rocket agent reads CI/CD logs, creates PRs, manages issues</li>
            <li><strong>server-postgres</strong> — Tablet agent queries the services catalog (16,000+ services)</li>
            <li><strong>server-brave-search</strong> — Tablet agent discovers new AI/IT services daily</li>
            <li><strong>server-sequential-thinking</strong> — Kilo agent uses extended reasoning for complex planning</li>
            <li><strong>Composio MCP</strong> — Cloud agent integrates with Cloudflare, AWS, and Stripe</li>
          </ul>

          <div className="mt-12 p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-2">Ready to Integrate MCP?</h3>
            <p className="text-slate-300 text-sm mb-4">
              Zion Tech Group offers MCP server integration, custom plugin development, and managed
              Hermes Agent deployment. We'll connect your tools and set up production-grade
              observability.
            </p>
            <a
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-600 transition-all text-sm"
            >
              Book a free consultation →
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
