import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Hermes Agent Architecture — System Design & Components',
  description:
    'Deep-dive into Hermes Agent architecture: the agent loop, tool dispatch, context compression, credential pools, profiles, gateway, cron, curator, and Bot Mode.',
  keywords: [
    'Hermes Agent architecture',
    'AI agent system design',
    'autonomous agent',
    'Nous Research',
    'agent loop',
    'context compression',
    'credential pooling',
    'multi-platform gateway',
    'cron scheduler',
    'skill curator',
  ],
  openGraph: {
    title: 'Hermes Agent Architecture — System Design & Components',
    description:
      'Deep-dive into Hermes Agent architecture: the agent loop, tool dispatch, context compression, credential pools, profiles, gateway, cron, curator, and Bot Mode.',
    url: 'https://ziontechgroup.com/docs/hermes-agent-architecture/',
    type: 'website',
  },
  alternates: { canonical: '/docs/hermes-agent-architecture/' },
};

const ARCHITECTURE_LAYERS = [
  {
    layer: 'Agent Loop',
    file: 'run_agent.py',
    desc:
      'The core conversation loop. Builds the system prompt, calls the LLM in OpenAI-format, dispatches tool_calls, appends results, and triggers context compression near the token limit.',
  },
  {
    layer: 'Tool Discovery',
    file: 'model_tools.py',
    desc:
      'Discovers, filters, and dispatches tools. Merges core tools, MCP server capabilities, custom Python tools, and shell-hook tools into a single dispatch surface.',
  },
  {
    layer: 'Toolset Definitions',
    file: 'toolsets.py',
    desc:
      'Defines the TOOLSETS dict and _HERMES_CORE_TOOLS bundle. Each toolset groups related tools; enable/disable via hermes tools or /tools.',
  },
  {
    layer: 'CLI Engine',
    file: 'cli.py',
    desc:
      'Interactive CLI (HermesCLI) powered by prompt_toolkit. Handles slash commands, session management, and gateway integration.',
  },
  {
    layer: 'Session Store',
    file: 'hermes_state.py',
    desc:
      'Canonical SQLite session store with FTS5 for full-text search. Persists conversations, checkpoints, and routing indices.',
  },
  {
    layer: 'Agent Module',
    file: 'agent/',
    desc:
      'Prompt builder, context compression, memory, model routing, credential pooling, skill dispatch, and environment probing.',
  },
  {
    layer: 'CLI Subcommands',
    file: 'hermes_cli/',
    desc:
      'Argparse-based CLI entry point and all subcommands (config, setup, model, profile, cron, webhook, etc.).',
  },
  {
    layer: 'Tool Registry',
    file: 'tools/registry.py',
    desc:
      'One file per tool. Auto-imports any tools/*.py with a top-level register() call. All handlers return JSON strings.',
  },
  {
    layer: 'Gateway',
    file: 'gateway/',
    desc:
      'Messaging gateway with platform adapters (Telegram, Discord, Slack, WhatsApp, Signal, Email, and 15+ more).',
  },
  {
    layer: 'Cron Scheduler',
    file: 'cron/',
    desc:
      'Durable scheduler. cron/jobs.py defines jobs, cron/scheduler.py runs them with 3-minute interrupt and .tick.lock deduplication.',
  },
];

const DURABLE_SYSTEMS = [
  {
    name: 'Delegation',
    file: 'delegate_task',
    desc:
      'Synchronous subagent spawn. Parent waits for child summary. Supports single + batch (parallel, capped by max_concurrent_children). Roles: leaf (no re-delegate) vs orchestrator (can spawn workers, bounded by max_spawn_depth). Not durable — child is cancelled if parent is interrupted.',
  },
  {
    name: 'Cron',
    file: 'cron/',
    desc:
      'Durable scheduler. Use the cronjob tool, hermes cron CLI, or /cron slash command. Schedules: duration, "every" phrase, 5-field cron, ISO timestamp. Per-job knobs: skills, model override, script, context chaining, workdir. 3-minute hard interrupt, .tick.lock prevents duplicates, cron sessions skip memory by default.',
  },
  {
    name: 'Curator',
    file: 'curator/',
    desc:
      'Background skill lifecycle manager. Tracks usage, marks idle skills stale, archives stale ones, keeps tar.gz backups. Only touches skills with created_by: "agent" provenance. Pinned skills are exempt from all auto-transitions. CLI: hermes curator <verb>.',
  },
  {
    name: 'Kanban',
    file: 'kanban/',
    desc:
      'Durable SQLite work board for multi-profile / multi-worker collaboration. Workers get a focused kanban_* toolset gated by HERMES_KANBAN_TASK. Dispatcher runs inside the gateway by default — reclaims stale claims, promotes ready tasks, atomically claims, spawns assigned profiles. Auto-blocks after failure_limit consecutive spawn failures.',
  },
];

const TOOLSETS = [
  { name: 'web', desc: 'Web search and content extraction' },
  { name: 'browser', desc: 'Browser automation (Browserbase, Camofox, local Chromium)' },
  { name: 'terminal', desc: 'Shell commands and process management' },
  { name: 'file', desc: 'File read/write/search/patch' },
  { name: 'code_execution', desc: 'Sandboxed Python execution' },
  { name: 'vision', desc: 'Image analysis' },
  { name: 'mcp', desc: 'MCP server tools (6000+ servers available)' },
  { name: 'skills', desc: 'Skill browsing and management' },
  { name: 'memory', desc: 'Persistent cross-session memory' },
  { name: 'delegation', desc: 'Subagent task delegation' },
  { name: 'cronjob', desc: 'Scheduled task management' },
  { name: 'kanban', desc: 'Multi-agent work-queue tools' },
  { name: 'homeassistant', desc: 'Smart home control (off by default)' },
  { name: 'discord', desc: 'Discord integration' },
  { name: 'yuanbao', desc: 'Yuanbao integration tools' },
];

const SECURITY_TOGGLES = [
  {
    name: 'Secret Redaction',
    desc: 'Auto-mask API keys, tokens, and secrets in tool output. Off by default — toggle with hermes config set security.redact_secrets true (restart required).',
  },
  {
    name: 'PII Redaction',
    desc: 'Hashes user IDs and strips phone numbers before they reach the model. Enable with hermes config set privacy.redact_pii true.',
  },
  {
    name: 'Command Approval',
    desc: 'manual (default), smart (LLM auto-approves low-risk), off (--yolo equivalent), auto (full autonomy). Per-invocation bypass with --yolo or HERMES_YOLO_MODE=1.',
  },
  {
    name: 'Shell Hooks Allowlist',
    desc: 'Shell-hook integrations require explicit allowlisting via ~/.hermes/shell-hooks-allowlist.json. Prompted interactively on first use.',
  },
];

export default function HermesAgentArchitecturePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: 'Hermes Agent Architecture — System Design & Components',
          description:
            'Deep-dive into Hermes Agent architecture: agent loop, tool dispatch, context compression, credential pools, profiles, gateway, cron, curator, and Bot Mode.',
          author: { '@type': 'Organization', name: 'Zion Tech Group' },
          publisher: {
            '@type': 'Organization',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com',
          },
        }}
      />
      <StandardPage
        title="Hermes Agent Architecture"
        subtitle="From the core agent loop to durable background systems — a complete look at how Hermes works."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Docs', href: '/docs/hermes-agent-skills/' },
          { label: 'Architecture' },
        ]}
        actions={[
          { label: 'Skills Guide', href: '/docs/hermes-agent-skills/', style: 'secondary' },
          { label: 'Profiles', href: '/docs/hermes-agent-profiles/', style: 'secondary' },
          { label: 'Book Consultation', href: 'https://calendly.com/kleber-ziontechgroup/consultation', style: 'primary' },
        ]}
      >
        <div className="prose prose-invert prose-slate max-w-none">
          <p>
            Hermes Agent is an open-source AI agent framework by <a href="https://nousresearch.com">Nous Research</a>. It
            runs as an agent loop — a system where an LLM receives a system prompt plus conversation history, decides
            what action to take (tool call or reply), executes that action, and repeats until the task is complete or
            the turn/cap is reached.
          </p>

          <h2>The Agent Loop</h2>
          <p>
            The core loop in <code>run_agent.py</code> works in three phases per iteration:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Call the LLM</strong> — The model receives OpenAI-format messages + registered tool schemas. It can return text, tool calls, or both.
            </li>
            <li>
              <strong>Dispatch tools</strong> — If the LLM emitted tool_calls, each is dispatched via <code>model_tools.py</code> → tool handler. Results are appended back to the message history.
            </li>
            <li>
              <strong>Continue or return</strong> — If text + no pending tool_calls, the turn ends. Otherwise the loop repeats, bounded by <code>agent.max_turns</code> (default 90).
            </li>
          </ol>

          <h3>Context Compression</h3>
          <p>
            When the conversation approaches the model's context length, Hermes automatically compresses the message history — distilling earlier exchanges into a condensed summary while preserving key facts and state. The threshold (default 50%) and target ratio (default 20%) are configurable:
          </p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono overflow-x-auto">
            <code className="text-slate-200 block whitespace-pre"># ~/.hermes/config.yaml
compression:
  enabled: true
  threshold: 0.50
  target_ratio: 0.20</code>
          </pre>

          <h2>Key Paths &amp; Config</h2>
          <table className="w-full text-sm border border-slate-800 rounded-xl overflow-hidden">
            <thead className="bg-slate-900/80">
              <tr>
                <th className="text-left p-4 text-slate-300 font-medium">Path</th>
                <th className="text-left p-4 text-slate-300 font-medium">What it is</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-800">
                <td className="p-4"><code className="text-slate-300">~/.hermes/config.yaml</code></td>
                <td className="p-4 text-slate-300">Main configuration</td>
              </tr>
              <tr className="border-t border-slate-800">
                <td className="p-4"><code className="text-slate-300">~/.hermes/.env</code></td>
                <td className="p-4 text-slate-300">API keys and secrets</td>
              </tr>
              <tr className="border-t border-slate-800">
                <td className="p-4"><code className="text-slate-300">~/.hermes/sessions/</code></td>
                <td className="p-4 text-slate-300">Gateway routing index, request dumps, transcripts</td>
              </tr>
              <tr className="border-t border-slate-800">
                <td className="p-4"><code className="text-slate-300">~/.hermes/state.db</code></td>
                <td className="p-4 text-slate-300">Canonical session store (SQLite + FTS5)</td>
              </tr>
              <tr className="border-t border-slate-800">
                <td className="p-4"><code className="text-slate-300">~/.hermes/logs/</code></td>
                <td className="p-4 text-slate-300">Gateway and error logs</td>
              </tr>
              <tr className="border-t border-slate-800">
                <td className="p-4"><code className="text-slate-300">~/.hermes/auth.json</code></td>
                <td className="p-4 text-slate-300">OAuth tokens and credential pools</td>
              </tr>
            </tbody>
          </table>

          <h2>Project Layout</h2>
          <p>The Hermes Agent source tree and what each directory owns:</p>
          <table className="w-full text-sm border border-slate-800 rounded-xl overflow-hidden">
            <thead className="bg-slate-900/80">
              <tr>
                <th className="text-left p-4 text-slate-300 font-medium">Directory / File</th>
                <th className="text-left p-4 text-slate-300 font-medium">Responsibility</th>
              </tr>
            </thead>
            <tbody>
              {ARCHITECTURE_LAYERS.map((item) => (
                <tr key={item.file} className="border-t border-slate-800">
                  <td className="p-4"><code className="text-purple-300">{item.file}</code></td>
                  <td className="p-4 text-slate-300">{item.desc}</td>
                </tr>
              ))}
              <tr className="border-t border-slate-800">
                <td className="p-4"><code className="text-purple-300">~/.hermes/profiles/&lt;name&gt;/</code></td>
                <td className="p-4 text-slate-300">Per-profile isolated instance (same layout as main profile)</td>
              </tr>
            </tbody>
          </table>

          <h2>Tool Discovery &amp; Dispatch</h2>
          <p>
            Tools come from four sources and are merged into a single dispatch surface:<br />
            <strong>Core tools</strong> (built into the binary), <strong>MCP servers</strong> (6,000+ available), <strong>custom Python tools</strong> (tools/*.py with a <code>register()</code> call), and <strong>shell-hook tools</strong>.
          </p>
          <p>Each tool is registered with a name, toolset, JSON schema, a handler lambda, and a <code>check_fn</code> that gates whether the tool appears (e.g. requires an env var). Toolset changes take effect on <code>/reset</code> — they don't apply mid-conversation to preserve prompt caching.</p>

          <h3>Toolsets</h3>
          <p>Hermes ships with 30+ toolsets. Enable/disable via <code>hermes tools</code> (interactive curses UI) or <code>hermes tools enable/disable NAME</code>:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {TOOLSETS.map((t) => (
              <div key={t.name} className="border border-slate-800 rounded-xl p-4">
                <code className="text-purple-300 font-mono text-sm">{t.name}</code>
                <p className="text-slate-400 text-sm mt-1">{t.desc}</p>
              </div>
            ))}
          </div>

          <h2>Durable &amp; Background Systems</h2>
          <p>Four systems run alongside or independent of the main conversation loop:</p>
          <div className="space-y-4">
            {DURABLE_SYSTEMS.map((s) => (
              <div key={s.name} className="border border-slate-800 rounded-xl p-5">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-white font-semibold">{s.name}</h3>
                  <code className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{s.file}</code>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2>Credential Pooling</h2>
          <p>
            For providers that support it, Hermes can pool multiple API keys per provider and rotate across them automatically when one hits a rate limit or error. Manage with:
          </p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono overflow-x-auto">
            <code className="text-slate-200 block whitespace-pre">hermes auth add             # Interactive credential wizard
hermes auth list [PROVIDER] # List pooled credentials
hermes auth remove P INDEX  # Remove by provider + index
hermes auth reset PROVIDER  # Clear exhaustion status</code>
          </pre>

          <h2>Security &amp; Privacy</h2>
          <p>Most security toggles are read once at startup — they require a fresh session (<code>/reset</code> in chat, or relaunch) after changing:</p>
          <div className="space-y-4">
            {SECURITY_TOGGLES.map((s) => (
              <div key={s.name} className="border border-slate-800 rounded-xl p-4">
                <h3 className="text-white font-semibold">{s.name}</h3>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2>Multi-Platform Gateway</h2>
          <p>
            The same agent runs on Telegram, Discord, Slack, WhatsApp, Signal, Email, SMS, Matrix, Mattermost, Home Assistant,
            DingTalk, Feishu, WeCom, BlueBubbles (iMessage), Weixin (WeChat), and an API Server — with full tool access, not just chat.
          </p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono overflow-x-auto">
            <code className="text-slate-200 block whitespace-pre">hermes gateway run          # Start gateway foreground
hermes gateway install      # Install as background service
hermes gateway start/stop   # Control the service
hermes gateway setup        # Configure platforms</code>
          </pre>

          <h2>Spawning Additional Instances</h2>
          <p>
            Run additional Hermes processes as fully independent subprocesses — separate sessions, tools, and environments. Use{' '}
            <code>delegate_task</code> for quick parallel subtasks (synchronous subagent, shared process, minutes), or spawn a full{' '}
            <code>hermes</code> process for long autonomous missions (hours/days, full tool access).
          </p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono overflow-x-auto">
            <code className="text-slate-200 block whitespace-pre"># One-shot (fire-and-forget, no PTY needed)
hermes chat -q "Set up CI/CD for ~/myapp"

# Interactive PTY via tmux (prompt_toolkit needs a real terminal)
tmux new-session -d -s agent1 -x 120 -y 40 'hermes'
sleep 8 &amp;&amp; tmux send-keys -t agent1 'Build a FastAPI auth service' Enter

# Worktree mode prevents git conflicts
tmux new-session -d -s backend -x 120 -y 80 'hermes -w'</code>
          </pre>

          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Bot Mode</h3>
            <p className="text-slate-400 text-sm mb-2">
              Bot Mode turns Hermes <strong>profiles</strong> into a roster of named <strong>Bots</strong> — each an isolated profile with its own role,
              model, memory, skills, credentials, avatar, and persistent Bot Chat. Bots run recurring routines, deliberate together, and message each other.
            </p>
            <p className="text-slate-400 text-sm">
              See the{' '}
              <Link href="/docs/hermes-agent-profiles/" className="text-purple-300 underline">Profiles guide</Link> for the full breakdown of how
              profiles and Bot Mode enable multi-agent specialization and isolation.
            </p>
          </div>
        </div>
      </StandardPage>
    </>
  );
}
