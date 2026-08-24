import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import HermesAdvertBanner from '@/components/HermesAdvertBanner';

export const metadata: Metadata = {
  title: 'Hermes CLI Reference — Complete Command Guide | Zion Tech Group',
  description:
    'Complete Hermes Agent CLI reference. All commands, flags, slash commands, and subcommands for installation, configuration, cron, skills, MCP, and Bot Mode.',
  keywords: [
    'Hermes CLI',
    'Hermes commands',
    'CLI reference',
    'hermes chat',
    'hermes setup',
    'hermes cron',
    'hermes skills',
    'hermes mcp',
    'slash commands',
    'agent CLI',
  ],
  openGraph: {
    title: 'Hermes CLI Reference — Complete Command Guide | Zion Tech Group',
    description:
      'Every Hermes CLI command and slash command in one reference. Install, configure, schedule, and deploy autonomous AI agents with the Hermes CLI.',
    url: 'https://ziontechgroup.com/hermes-cli/',
    type: 'website',
  },
  alternates: { canonical: '/hermes-cli/' },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Hermes CLI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Hermes CLI is the command-line interface for Hermes Agent. It lets you interact with AI agents, manage configuration, schedule cron jobs, install skills, add MCP servers, and more — all from your terminal.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I start a Hermes chat session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Run "hermes" for interactive chat, or "hermes chat -q \'your question\'" for a single query. Add -s skill-name to preload skills, --yolo to skip approval prompts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are slash commands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Slash commands are in-session commands typed during an interactive Hermes chat. Examples: /new (fresh session), /reset, /model, /yolo, /skills, /cron, /goal, /save, /exit.',
      },
    },
  ],
};

const GLOBAL_FLAGS = [
  { flag: '--version, -V', desc: 'Show version' },
  { flag: '--resume, -r SESSION', desc: 'Resume session by ID or title' },
  { flag: '--continue, -c [NAME]', desc: 'Resume by name, or most recent session' },
  { flag: '--worktree, -w', desc: 'Isolated git worktree mode (parallel agents)' },
  { flag: '--skills, -s SKILL', desc: 'Preload skills (comma-separate or repeat)' },
  { flag: '--profile, -p NAME', desc: 'Use a named profile' },
  { flag: '--yolo', desc: 'Skip dangerous command approval' },
  { flag: '--pass-session-id', desc: 'Include session ID in system prompt' },
];

const CHAT_COMMANDS = [
  { cmd: 'hermes', desc: 'Start interactive chat session (CLI)' },
  { cmd: 'hermes chat -q "..."', desc: 'Single query, non-interactive' },
  { cmd: 'hermes chat -m MODEL', desc: 'Change model (e.g. anthropic/claude-sonnet-4)' },
  { cmd: 'hermes chat -t TOOLSETS', desc: 'Comma-separated toolsets to enable' },
  { cmd: 'hermes chat --provider PROVIDER', desc: 'Force provider (openrouter, anthropic, nous, etc.)' },
  { cmd: 'hermes chat -v', desc: 'Verbose output' },
  { cmd: 'hermes chat --checkpoints', desc: 'Enable filesystem checkpoints (/rollback)' },
];

const CONFIG_COMMANDS = [
  { cmd: 'hermes setup [section]', desc: 'Interactive setup wizard (model|terminal|gateway|tools|agent)' },
  { cmd: 'hermes model', desc: 'Interactive model/provider picker' },
  { cmd: 'hermes config', desc: 'View current configuration' },
  { cmd: 'hermes config edit', desc: 'Open config.yaml in $EDITOR' },
  { cmd: 'hermes config set KEY VAL', desc: 'Set a config value' },
  { cmd: 'hermes config path', desc: 'Print config.yaml path' },
  { cmd: 'hermes config env-path', desc: 'Print .env path' },
  { cmd: 'hermes config check', desc: 'Check for missing/outdated config' },
  { cmd: 'hermes config migrate', desc: 'Update config with new options' },
  { cmd: 'hermes login [--provider P]', desc: 'OAuth login (nous, openai-codex, qwen-oauth)' },
  { cmd: 'hermes logout', desc: 'Clear stored auth tokens' },
  { cmd: 'hermes doctor [--fix]', desc: 'Check dependencies and config' },
  { cmd: 'hermes status [--all]', desc: 'Show component status' },
];

const TOOLS_COMMANDS = [
  { cmd: 'hermes tools', desc: 'Interactive tool enable/disable (curses UI)' },
  { cmd: 'hermes tools list', desc: 'Show all tools and status' },
  { cmd: 'hermes tools enable NAME', desc: 'Enable a toolset' },
  { cmd: 'hermes tools disable NAME', desc: 'Disable a toolset' },
];

const SKILLS_COMMANDS = [
  { cmd: 'hermes skills list', desc: 'List installed skills' },
  { cmd: 'hermes skills search QUERY', desc: 'Search the skills hub' },
  { cmd: 'hermes skills install ID', desc: 'Install a skill (hub ID or URL)' },
  { cmd: 'hermes skills inspect ID', desc: 'Preview skill without installing' },
  { cmd: 'hermes skills config', desc: 'Enable/disable skills per platform' },
  { cmd: 'hermes skills check', desc: 'Check for skill updates' },
  { cmd: 'hermes skills update', desc: 'Update outdated skills' },
  { cmd: 'hermes skills uninstall N', desc: 'Remove a hub skill' },
  { cmd: 'hermes skills browse', desc: 'Browse all available skills' },
  { cmd: 'hermes skills tap add REPO', desc: 'Add a GitHub repo as skill source' },
];

const MCP_COMMANDS = [
  { cmd: 'hermes mcp serve', desc: 'Run Hermes as an MCP server' },
  { cmd: 'hermes mcp add NAME', desc: 'Add an MCP server (--url or --command)' },
  { cmd: 'hermes mcp remove NAME', desc: 'Remove an MCP server' },
  { cmd: 'hermes mcp list', desc: 'List configured MCP servers' },
  { cmd: 'hermes mcp test NAME', desc: 'Test MCP server connection' },
  { cmd: 'hermes mcp configure NAME', desc: 'Toggle tool selection for MCP server' },
];

const CRON_COMMANDS = [
  { cmd: 'hermes cron list', desc: 'List jobs (--all for disabled)' },
  { cmd: 'hermes cron create SCHED', desc: 'Create: "30m", "every 2h", "0 9 * * *", or ISO timestamp' },
  { cmd: 'hermes cron edit ID', desc: 'Edit schedule, prompt, delivery' },
  { cmd: 'hermes cron pause/resume ID', desc: 'Control job state' },
  { cmd: 'hermes cron run ID', desc: 'Trigger job on next tick' },
  { cmd: 'hermes cron remove ID', desc: 'Delete a job' },
  { cmd: 'hermes cron status', desc: 'Scheduler status' },
];

const PROFILE_COMMANDS = [
  { cmd: 'hermes profile list', desc: 'List all profiles' },
  { cmd: 'hermes profile create NAME', desc: 'Create (--clone, --clone-all, --clone-from)' },
  { cmd: 'hermes profile use NAME', desc: 'Set sticky default' },
  { cmd: 'hermes profile delete NAME', desc: 'Delete a profile' },
  { cmd: 'hermes profile show NAME', desc: 'Show profile details' },
  { cmd: 'hermes profile alias NAME', desc: 'Manage wrapper scripts' },
  { cmd: 'hermes profile rename A B', desc: 'Rename a profile' },
  { cmd: 'hermes profile export NAME', desc: 'Export to tar.gz' },
  { cmd: 'hermes profile import FILE', desc: 'Import from archive' },
];

const SESSION_COMMANDS = [
  { cmd: 'hermes sessions list', desc: 'List recent sessions' },
  { cmd: 'hermes sessions browse', desc: 'Interactive picker' },
  { cmd: 'hermes sessions export OUT', desc: 'Export to JSONL' },
  { cmd: 'hermes sessions rename ID T', desc: 'Rename a session' },
  { cmd: 'hermes sessions delete ID', desc: 'Delete a session' },
  { cmd: 'hermes sessions prune', desc: 'Clean up old sessions (--older-than N days)' },
  { cmd: 'hermes sessions stats', desc: 'Session store statistics' },
];

const SLASH_COMMANDS = [
  { cmd: '/new (/reset)', desc: 'Fresh session' },
  { cmd: '/clear', desc: 'Clear screen + new session (CLI)' },
  { cmd: '/retry', desc: 'Resend last message' },
  { cmd: '/undo', desc: 'Remove last exchange' },
  { cmd: '/title [name]', desc: 'Name the session' },
  { cmd: '/compress', desc: 'Manually compress context' },
  { cmd: '/stop', desc: 'Kill background processes' },
  { cmd: '/rollback [N]', desc: 'Restore filesystem checkpoint' },
  { cmd: '/background <prompt>', desc: 'Run prompt in background' },
  { cmd: '/queue <prompt>', desc: 'Queue for next turn' },
  { cmd: '/steer <prompt>', desc: 'Inject message after next tool call' },
  { cmd: '/agents (/tasks)', desc: 'Show active agents and running tasks' },
  { cmd: '/resume [name]', desc: 'Resume a named session' },
  { cmd: '/goal [text]', desc: 'Set a standing goal' },
  { cmd: '/model [name]', desc: 'Show or change model' },
  { cmd: '/personality [name]', desc: 'Set personality' },
  { cmd: '/reasoning [level]', desc: 'Set reasoning level' },
  { cmd: '/verbose', desc: 'Cycle output verbosity' },
  { cmd: '/voice [on|off|tts]', desc: 'Voice mode' },
  { cmd: '/yolo', desc: 'Toggle approval bypass' },
  { cmd: '/tools', desc: 'Manage tools (CLI)' },
  { cmd: '/toolsets', desc: 'List toolsets (CLI)' },
  { cmd: '/skills', desc: 'Search/install skills (CLI)' },
  { cmd: '/skill <name>', desc: 'Load a skill into session' },
  { cmd: '/reload-skills', desc: 'Re-scan ~/.hermes/skills/' },
  { cmd: '/cron', desc: 'Manage cron jobs (CLI)' },
  { cmd: '/help', desc: 'Show all commands' },
  { cmd: '/usage', desc: 'Token usage' },
  { cmd: '/config', desc: 'Show config (CLI)' },
  { cmd: '/quit (/exit, /q)', desc: 'Exit CLI' },
];

export default function HermesCliReferencePage() {
  const renderCommandGrid = (commands: typeof CHAT_COMMANDS, title: string) => (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="grid md:grid-cols-2 gap-3">
        {commands.map((cmd) => (
          <div key={cmd.cmd} className="bg-slate-900/60 border border-slate-700 rounded-lg p-3 font-mono">
            <code className="text-purple-300 text-sm block mb-1">{cmd.cmd}</code>
            <p className="text-xs text-slate-500">{cmd.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <StandardPage
        title="Hermes CLI Reference"
        subtitle="Complete reference for all Hermes Agent CLI commands, global flags, slash commands, and subcommands."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Hermes Agents', href: '/hermes-agents/' },
          { label: 'Documentation', href: '/hermes-docs/' },
          { label: 'CLI Reference' },
        ]}
        actions={[
          { label: 'Book a Consultation', href: 'https://calendly.com/kleber-ziontechgroup/consultation', style: 'primary' },
          { label: 'Live Dashboard', href: '/agents-monitoring/', style: 'secondary' },
        ]}
      >
        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Hermes CLI Commands</h2>
            <p className="text-slate-300 leading-relaxed">
              Every Hermes command from installation to advanced operations. Built by Nous Research and
              managed by Zion Tech Group in production.
            </p>
          </section>

          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Global Flags</h2>
            <p className="text-slate-400 text-sm mb-4">Use these with any Hermes command:</p>
            <div className="space-y-2">
              {GLOBAL_FLAGS.map((f) => (
                <div key={f.flag} className="flex items-start gap-3">
                  <code className="text-purple-300 text-sm font-mono bg-slate-800/60 px-2 py-1 rounded whitespace-nowrap">{f.flag}</code>
                  <span className="text-slate-300 text-sm">{f.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {renderCommandGrid(CHAT_COMMANDS, 'Chat & Execution')}
          {renderCommandGrid(CONFIG_COMMANDS, 'Configuration')}
          {renderCommandGrid(TOOLS_COMMANDS, 'Tools & Toolsets')}
          {renderCommandGrid(SKILLS_COMMANDS, 'Skills Management')}
          {renderCommandGrid(MCP_COMMANDS, 'MCP Servers')}
          {renderCommandGrid(CRON_COMMANDS, 'Cron Jobs')}
          {renderCommandGrid(PROFILE_COMMANDS, 'Profiles')}
          {renderCommandGrid(SESSION_COMMANDS, 'Sessions')}

          {/* Slash Commands */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Slash Commands (In-Session)</h2>
            <p className="text-slate-300 mb-6">
              Type these during an interactive Hermes chat session. Run <code className="bg-slate-800/60 px-2 py-1 rounded text-purple-300">/help</code> in-session for the authoritative list.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {SLASH_COMMANDS.map((cmd) => (
                <div key={cmd.cmd} className="bg-slate-900/60 border border-slate-700 rounded-lg p-3 font-mono">
                  <code className="text-purple-300 text-sm block mb-1">{cmd.cmd}</code>
                  <p className="text-xs text-slate-500">{cmd.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </StandardPage>
      <HermesAdvertBanner />
    </>
  );
}
