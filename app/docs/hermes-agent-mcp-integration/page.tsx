import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hermes Agent MCP Integration Guide | Zion Tech Group',
  description:
    'Connect 6,000+ MCP servers to Hermes Agent, write custom Python tools, and build desktop plugins.',
  keywords: [
    'MCP',
    'Model Context Protocol',
    'Hermes Agent plugins',
    'custom tools',
    'Python plugins',
    'tool integration',
    'Nous Research',
  ],
  openGraph: {
    title: 'Hermes Agent MCP Integration Guide',
    description: 'Connect 6,000+ MCP servers, write custom tools, and build desktop plugins for Hermes Agent.',
    url: 'https://ziontechgroup.com/docs/hermes-agent-mcp-integration/',
    type: 'website',
  },
  alternates: { canonical: '/docs/hermes-agent-mcp-integration/' },
};

const MCP_SERVERS = [
  { name: 'Filesystem', desc: 'Read, write, and search files in a sandboxed directory.', category: 'File Operations' },
  { name: 'Git', desc: 'Execute git commands, manage branches, commits, and pull requests.', category: 'DevOps' },
  { name: 'SQLite', desc: 'Query SQLite databases with natural language or SQL.', category: 'Database' },
  { name: 'PostgreSQL', desc: 'Full PostgreSQL integration with query and schema operations.', category: 'Database' },
  { name: 'Redis', desc: 'Redis client for cache operations and pub/sub.', category: 'Database' },
  { name: 'GitHub', desc: 'GitHub API: issues, PRs, repos, and webhooks.', category: 'Development' },
  { name: 'Slack', desc: 'Send messages, manage channels, list users and apps.', category: 'Communication' },
  { name: 'Discord', desc: 'Discord bot integration: channels, messages, roles.', category: 'Communication' },
  { name: 'Google Sheets', desc: 'Read, write, and update Google Sheets data.', category: 'Productivity' },
  { name: 'Notion', desc: 'Create, read, update Notion pages and databases.', category: 'Productivity' },
  { name: 'Airtable', desc: 'Airtable REST API integration with filters and upserts.', category: 'Productivity' },
  { name: 'Linear', desc: 'Linear GraphQL API for issue and project management.', category: 'Productivity' },
];

const PLUGIN_TYPES = [
  { name: 'MCP Servers', desc: '6,000+ servers available. Connect via `hermes mcp add NAME --url or --command`.' },
  { name: 'Python Tools', desc: 'Register custom tools in 3 files: tools/your_tool.py + registry.py + toolsets.py.' },
  { name: 'Desktop Plugins', desc: 'Add UI panes and commands to the Hermes Desktop app with plugin manifests.' },
  { name: 'Webhooks', desc: 'Trigger agent runs on HTTP events: `hermes webhook subscribe NAME`.' },
  { name: 'Shell Hooks', desc: 'Run custom scripts on Hermes lifecycle events. Managed via allowlist JSON.' },
];

export default function McpIntegrationGuide() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Hermes Agent MCP Integration Guide',
        description: 'Connect 6,000+ MCP servers, write custom tools, and build desktop plugins.',
        author: { '@type': 'Organization', name: 'Zion Tech Group' },
        publisher: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
      }} />
      <StandardPage
        title="MCP & Plugin Integration"
        subtitle="Connect 6,000+ MCP servers, write custom Python tools, and build desktop plugins for Hermes Agent."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Docs', href: '/docs/hermes-agent-skills/' },
          { label: 'MCP Integration' },
        ]}
        actions={[
          { label: 'Installation Guide', href: '/docs/hermes-agent-installation/', style: 'secondary' },
          { label: 'Book Consultation', href: 'https://calendly.com/kleber-ziontechgroup/consultation', style: 'primary' },
        ]}
      >
        <div className="prose prose-invert prose-slate max-w-none">
          <p>
            Hermes Agent integrates with the <strong>Model Context Protocol (MCP)</strong> — an open
            standard for connecting AI agents to tools and data sources. With 6,000+ MCP servers
            available, extend your agent instantly with database queries, API calls, file operations,
            and more.
          </p>

          <h2>Connecting MCP Servers</h2>
          <p>Three ways to connect an MCP server:</p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono overflow-x-auto">
            <code className="text-slate-200">
{`# Stdio (local process)
hermes mcp add my-server --command "python -m mcp_server"

# HTTP (remote server)
hermes mcp add my-server --url http://localhost:8080

# Test connection
hermes mcp test my-server

# Toggle tool selection
hermes mcp configure my-server
}
            </code>
          </pre>

          <h2>Popular MCP Servers</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {MCP_SERVERS.map((s) => (
              <div key={s.name} className="border border-slate-800 rounded-xl p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-white font-semibold">{s.name}</h3>
                  <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{s.category}</span>
                </div>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2>Plugin Types</h2>
          <div className="space-y-4">
            {PLUGIN_TYPES.map((p) => (
              <div key={p.name} className="border border-slate-800 rounded-xl p-4">
                <h3 className="text-white font-semibold">{p.name}</h3>
                <p className="text-slate-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>

          <h2>Writing Custom Python Tools</h2>
          <p>Hermes uses a 3-file pattern for custom tools:</p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono overflow-x-auto">
            <code className="text-slate-200">
{`# 1. tools/your_tool.py
from tools.registry import registry

def my_tool(param: str):
    return json.dumps({"result": f"Got: {param}"})

registry.register(
    name="my_tool", toolset="custom",
    schema={...},
    handler=lambda args, **kw: my_tool(param=args.get("param")),
    check_fn=lambda: True,
)

# 2. Add to toolsets.py → TOOLSETS dict
# 3. (Optional) Add to config.yaml disabled_toolsets
`}
            </code>
          </pre>

          <h2>Desktop Plugins</h2>
          <p>
            Extend the Hermes Desktop app with custom UI panes and commands. Plugins are
            registered via <code>~/.hermes/plugins/</code> with a manifest.json that declares
            available tools and UI components.
          </p>

          <h2>Webhook Triggers</h2>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono overflow-x-auto">
            <code className="text-slate-200">
{`hermes webhook subscribe github-events
# Creates route at /webhooks/github-events
# Agent runs automatically on each POST
`}
            </code>
          </pre>

          <h2>Next Steps</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><Link href="/docs/hermes-agent-installation/">Installation guide</Link></li>
            <li><Link href="/docs/hermes-agent-skills/">Skills system overview</Link></li>
            <li><Link href="/blog/hermes-agent-skills-system-deep-dive/">Skills deep dive</Link></li>
          </ul>
        </div>
      </StandardPage>
    </>
  );
}
