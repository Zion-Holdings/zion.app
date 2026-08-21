import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Hermes Agent Profiles Guide — Isolation & Multi-Profile Orchestration | Zion Tech Group',
  description:
    'Guide to Hermes Agent profiles: filesystem isolation, multi-profile orchestration, use cases (client isolation, dev/staging/prod, bot teams), CLI commands, and config structure.',
  keywords: [
    'Hermes Agent profiles',
    'profile isolation',
    'multi-profile orchestration',
    'client isolation',
    'dev staging prod',
    'bot teams',
    'profile management',
    'Nous Research',
  ],
  openGraph: {
    title: 'Hermes Agent Profiles Guide — Isolation & Multi-Profile Orchestration',
    description:
      'Learn how Hermes Agent profiles provide isolated configs, skills, sessions, and memory — plus CLI commands for create, use, list, delete, export, import, and alias.',
    url: 'https://ziontechgroup.com/docs/hermes-agent-profiles/',
    type: 'website',
  },
  alternates: { canonical: '/docs/hermes-agent-profiles/' },
};

const PROFILE_LAYERS = [
  {
    surface: 'Skills',
    detail: '~/.hermes/profiles/<name>/skills/ — install skills per profile without cross-contamination.',
  },
  { surface: 'Sessions', detail: '~/.hermes/profiles/<name>/sessions/ — independent gateway routing and transcripts.' },
  { surface: 'Memory', detail: 'Profile-scoped memory/state.db — no cross-profile data leakage.' },
  { surface: 'Config', detail: 'config.yaml + .env per profile — separate keys, models, and tool enablement.' },
  { surface: 'Credentials', detail: 'auth.json pools per profile — isolated API keys and OAuth tokens.' },
];

const USE_CASES = [
  {
    name: 'Client Isolation',
    desc:
      'Give each client a dedicated profile so their API keys, skills, and conversation history never mix. Clone a base profile and swap credentials — no risk of a prompt/tool from one client surfacing in another client\'s session.',
  },
  {
    name: 'Dev / Staging / Prod',
    desc:
      'Maintain three profiles per environment. Dev uses experimental models and broad tool access; staging mirrors production with a vetted model; prod runs locked-down with approvals.mode auto and a reviewed toolset. Promote config changes with `hermes profile export` → import into the next environment.',
  },
  {
    name: 'Bot Teams',
    desc:
      'Deploy independent Telegram/Discord bots, each under its own profile, so one bot\'s skills, memory, and delivery credentials are fully isolated from another\'s. The dispatcher (cron / kanban) can spawn tasks against a named profile via `hermes profile use`.',
  },
  {
    name: 'Multi-Provider Key Rotation',
    desc:
      'Spin up profiles per provider when you want to test or migrate between OpenRouter, Anthropic, and OpenAI without touching your primary profile — each with its own credential pool and model override.',
  },
];

const CLI_COMMANDS = [
  { cmd: 'hermes profile create <name>', desc: 'Create a new profile. Use --clone, --clone-all, or --clone-from <src> to seed from an existing profile.' },
  { cmd: 'hermes profile use <name>', desc: 'Set the sticky default profile for subsequent invocations (persists across shell sessions).' },
  { cmd: 'hermes profile list', desc: 'List all profiles and mark the active sticky default.' },
  { cmd: 'hermes profile show <name>', desc: 'Show details: skills count, session count, memory store path, and env-var status.' },
  { cmd: 'hermes profile delete <name>', desc: 'Delete a profile (removes its isolated directory).' },
  { cmd: 'hermes profile export <name>', desc: 'Export the profile to a tar.gz archive for backup, handoff, or migration.' },
  { cmd: 'hermes profile import <file>', desc: 'Import a profile from a tar.gz archive.' },
  { cmd: 'hermes profile rename <A> <B>', desc: 'Rename a profile (updater rewrites internal path references).' },
  { cmd: 'hermes profile alias <name>', desc: 'Create or manage a wrapper script so the profile launches without -p.' },
  { cmd: 'hermes -p <name> …', desc: 'Invoke any command against a profile without changing the sticky default.' },
];

const CONFIG_STRUCTURE = [
  { key: 'top-level', example: '~/.hermes/profiles/<name>/config.yaml', desc: 'Each profile mirrors the base layout with its own config.yaml.' },
  { key: 'model', example: 'profile: my-client', desc: 'Set provider, default model, base_url, api_key (override per profile).' },
  { key: 'memory', example: 'memory:\n  provider: mem0', desc: 'Pick a memory backend scoped to this profile.' },
  { key: 'gateway', example: 'gateway:\n  telegram:\n    bot_token: <per-profile-token>', desc: 'Per-profile platform tokens — isolate bot credentials by profile.' },
  { key: 'cron', example: 'cron:\n  workdir: /profiles/<name>/work', desc: 'Schedule runs land in the profile directory and inherit its AGENTS.md.' },
  { key: 'auth', example: '~/.hermes/profiles/<name>/auth.json', desc: 'Credential pools are NOT shared — pools rotate keys only within the profile.' },
];

const FAQ_ITEMS = [
  {
    q: 'Do profiles share sessions or memory?',
    a: 'No. Each profile has its own state.db, skills/, sessions/, config.yaml, .env, and auth.json. The only shared surface is the installed Hermes binary itself. Use profiles when you need hard isolation.',
  },
  {
    q: 'How do I run a command against a profile without making it the default?',
    a: 'Pass -p inline: hermes -p client-b chat -q "Summarize last week". This targets the profile for that single invocation only.',
  },
  {
    q: 'Can I clone an existing profile?',
    a: 'Yes. hermes profile create new-name --clone-from old-name duplicates skills, config, and memory layout (secrets are copied as-is; review before shipping a clone to another machine). Add --clone-all to also copy sessions and telemetry.',
  },
  {
    q: 'What do aliases do?',
    a: 'aliases create a thin wrapper script (e.g. hermes-client-a) that always launches with -p client-a baked in. It is the cleanest way to run a dedicated bot team profile from cron or systemd without editing every invocation.',
  },
  {
    q: 'Are cron jobs profile-scoped?',
    a: 'Yes. A cron job runs in the profile that created it (or a workdir you specify) and inherits that profile\'s config, skills, and memory. Use --profile when creating to be explicit.',
  },
  {
    q: 'Can profiles inherit config from a base?',
    a: 'Profiles are fully independent — there is no inheritance chain. To share settings, export a base profile to tar.gz, import it into a new name, then edit the clone. The `profile alias` wrapper can also point several names at one profile if read-only sharing is acceptable.',
  },
];

export default function HermesAgentProfilesDocPage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Hermes Agent Profiles Guide — Isolation & Multi-Profile Orchestration',
        description:
          'Guide to Hermes Agent profiles: filesystem isolation, multi-profile orchestration, use cases, CLI commands, and config structure.',
        author: { '@type': 'Organization', name: 'Zion Tech Group' },
        publisher: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
      }} />
      <StandardPage
        title="Hermes Agent Profiles"
        subtitle="Isolation, multi-profile orchestration, and the CLI to manage independent agent instances."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Docs', href: '/docs/hermes-agent-skills/' },
          { label: 'Profiles Guide' },
        ]}
        actions={[
          { label: 'Skills Guide', href: '/docs/hermes-agent-skills/', style: 'secondary' },
          { label: 'Architecture', href: '/docs/hermes-agent-architecture/', style: 'secondary' },
          { label: 'Book Consultation', href: 'https://calendly.com/kleber-ziontechgroup/consultation', style: 'primary' },
        ]}
      >
        <div className="prose prose-invert prose-slate max-w-none">
          <p>
            A Hermes <em>profile</em> is a fully isolated agent instance: its own config, API keys,
            skills, sessions, memory, and credentials. Profiles let you run independent Hermes agents
            from the same install — each with its own identity, model, tools, and history — with zero
            cross-contamination. This is the mechanism behind client separation, environment
            promotion (dev/staging/prod), and multi-bot deployments.
          </p>

          <h2>Isolation Model</h2>
          <p>
            Profiles live under <code>~/.hermes/profiles/&lt;name&gt;/</code> and mirror the base
            layout, each a hard isolation boundary:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {PROFILE_LAYERS.map((p) => (
              <div key={p.surface} className="border border-slate-800 rounded-xl p-5 bg-slate-900/40">
                <h3 className="text-white font-semibold mb-1">{p.surface}</h3>
                <p className="text-sm text-slate-400">{p.detail}</p>
              </div>
            ))}
          </div>

          <h2>Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {USE_CASES.map((uc) => (
              <div key={uc.name} className="border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">{uc.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>

          <h2>CLI Reference</h2>
          <p>Profiles are managed through the <code>hermes profile</code> command group:</p>
          <div className="space-y-3">
            {CLI_COMMANDS.map((c) => (
              <div key={c.cmd} className="border border-slate-800 rounded-lg p-4 bg-slate-900/40">
                <code className="text-purple-300 font-mono text-sm">{c.cmd}</code>
                <p className="text-sm text-slate-400 mt-1">{c.desc}</p>
              </div>
            ))}
          </div>

          <h2>Config Structure</h2>
          <p>
            Each profile keeps a full <code>config.yaml</code> and <code>.env</code>. The table below
            shows the surface area that typically differs per profile:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left text-slate-300 py-2">Config key</th>
                  <th className="text-left text-slate-300 py-2">Example / location</th>
                  <th className="text-left text-slate-300 py-2">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {CONFIG_STRUCTURE.map((row) => (
                  <tr key={row.key} className="border-t border-slate-800">
                    <td className="py-2 text-white font-mono text-xs">{row.key}</td>
                    <td className="py-2 text-slate-400">
                      <pre className="whitespace-pre text-xs text-slate-400">{row.example}</pre>
                    </td>
                    <td className="py-2 text-slate-400">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-400">
            The global sticky default is set with <code>hermes profile use &lt;name&gt;</code> and
            overrides <code>--profile</code> / <code>-p</code> on every subsequent call. Passing{' '}
            <code>-p &lt;name&gt;</code> inline still targets that profile for one invocation
            without touching the sticky default.
          </p>

          <h2>Multi-Profile Orchestration</h2>
          <p>
            Profiles compose with Hermes' durable systems. Cron jobs, kanban tasks, and the gateway
            dispatcher can all target a named profile — which is how a single deployment runs an
            entire fleet of independent bots. The canonical pattern:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-300">
            <li>
              Create a profile per bot/team (<code>hermes profile create bot-sales --clone-from base</code>).
            </li>
            <li>
              Add that profile's bot token (<code>hermes gateway setup</code> inside the profile).
            </li>
            <li>
              Pin skills and set <code>approvals.mode: auto</code> via{' '}
              <code>hermes config set</code>.
            </li>
            <li>
              Add an alias wrapper (<code>hermes profile alias bot-sales</code>) so the bot is
              launchable standalone.
            </li>
            <li>
              Schedule work via cron with <code>--profile bot-sales</code>, or let the kanban
              dispatcher spawn against it.
            </li>
          </ol>

          <h2>FAQ</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div key={item.q} className="border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Related guides</h3>
            <p className="text-slate-400 text-sm">
              For how a single profile's agent loop, memory, and tooling work end-to-end, see the{' '}
              <Link href="/docs/hermes-agent-architecture/">Architecture</Link> page. To get started
              from scratch, read the{' '}
              <Link href="/docs/hermes-agent-installation/">Installation Guide</Link>. For the
              self-improving skills system, see the{' '}
              <Link href="/docs/hermes-agent-skills/">Skills Guide</Link>.
            </p>
          </div>
        </div>
      </StandardPage>
    </>
  );
}
