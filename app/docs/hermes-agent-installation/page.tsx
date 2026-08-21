import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Hermes Agent Installation Guide | Zion Tech Group',
  description:
    'Step-by-step installation and setup guide for Hermes Agent by Nous Research — from 2-minute install to Telegram bot configuration.',
  keywords: [
    'Hermes Agent install',
    'Hermes setup',
    'AI agent installation',
    'Nous Research',
    'Telegram bot setup',
    'agent deployment',
  ],
  openGraph: {
    title: 'Hermes Agent Installation Guide',
    description: 'Step-by-step guide to installing and configuring Hermes Agent for autonomous AI operations.',
    url: 'https://ziontechgroup.com/docs/hermes-agent-installation/',
    type: 'website',
  },
  alternates: { canonical: '/docs/hermes-agent-installation/' },
};

const INSTALL_STEPS = [
  {
    step: 1,
    title: 'Prerequisites',
    desc: 'Linux, macOS, or Windows (WSL). Node.js 20+, Python 3.11+. An API key for your preferred provider (OpenRouter, Anthropic, OpenAI, Nous, Google, etc.).',
    code: '# No code needed — just have your API key ready',
  },
  {
    step: 2,
    title: 'Install Hermes',
    desc: 'Download and install Hermes using the official installer script. This sets up the binary, skills directory, and config.',
    code: 'curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash',
  },
  {
    step: 3,
    title: 'Run Setup Wizard',
    desc: 'The interactive setup wizard configures your model provider, terminal backend, and messaging platforms.',
    code: 'hermes setup',
  },
  {
    step: 4,
    title: 'Choose Your Model',
    desc: 'Select your AI provider and default model. Hermes supports 20+ providers with automatic failover.',
    code: 'hermes model',
  },
  {
    step: 5,
    title: 'Configure Telegram (Optional)',
    desc: 'Set up a Telegram bot for the multi-platform gateway. Get a bot token from @BotFather and configure it in the gateway.',
    code: 'hermes login  # or configure in setup wizard',
  },
  {
    step: 6,
    title: 'Install Skills',
    desc: 'Browse and install community skills to extend Hermes with pre-built workflows, or load your own.',
    code: 'hermes skills browse',
  },
  {
    step: 7,
    title: 'Start Building',
    desc: 'Run Hermes in interactive mode or send a single query. Start your first project!',
    code: 'hermes chat          # interactive mode\nhermes chat -q "Build a FastAPI auth service"',
  },
];

const TERMINAL_BACKENDS = [
  { name: 'Local', desc: 'Run commands directly on your machine. Default for most users.' },
  { name: 'Docker', desc: 'Run in an isolated container with nikolaik/python-nodejs image.' },
  { name: 'SSH', desc: 'Run commands on a remote server via SSH.' },
  { name: 'Modal', desc: 'Run in serverless containers via Modal.com.' },
  { name: 'Singularity', desc: 'Run in HPC/Research containers via Singularity.' },
  { name: 'Daytona', desc: 'Run in ephemeral dev containers via Daytona.' },
];

export default function InstallationGuide() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Hermes Agent Installation Guide',
        description: 'Step-by-step guide to installing and configuring Hermes Agent.',
        author: { '@type': 'Organization', name: 'Zion Tech Group' },
        publisher: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
      }} />
      <StandardPage
        title="Hermes Agent Installation Guide"
        subtitle="Step-by-step installation and setup for Hermes Agent by Nous Research."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Docs', href: '/docs/hermes-agent-skills/' },
          { label: 'Installation Guide' },
        ]}
        actions={[
          { label: 'View Skills Guide', href: '/docs/hermes-agent-skills/', style: 'secondary' },
          { label: 'Book Consultation', href: 'https://calendly.com/kleber-ziontechgroup/consultation', style: 'primary' },
        ]}
      >
        <div className="prose prose-invert prose-slate max-w-none">
          <p>
            Hermes Agent is an open-source AI agent by Nous Research. Follow this guide to install,
            configure, and start running your first autonomous agent.
          </p>

          <h2>Installation Steps</h2>
          {INSTALL_STEPS.map((step) => (
            <div key={step.step} className="mb-8">
              <h3>Step {step.step}: {step.title}</h3>
              <p>{step.desc}</p>
              <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono overflow-x-auto">
                <code className="text-slate-200">{step.code}</code>
              </pre>
            </div>
          ))}

          <h2>Terminal Backends</h2>
          <p>Hermes supports 6 terminal backends — choose based on your needs:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {TERMINAL_BACKENDS.map((b) => (
              <div key={b.name} className="border border-slate-800 rounded-xl p-4">
                <h3 className="text-white font-semibold">{b.name}</h3>
                <p className="text-slate-400 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>

          <h2>Quick Start</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Install: <code>curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash</code></li>
            <li>Setup: <code>hermes setup</code></li>
            <li>Run: <code>hermes chat</code> or <code>hermes chat -q "Hello, what can you do?"</code></li>
          </ol>

          <h2>Next Steps</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><Link href="/docs/hermes-agent-skills/">Learn about the skills system</Link></li>
            <li><Link href="/docs/hermes-agent-mcp-integration/">Connect MCP servers and plugins</Link></li>
            <li><Link href="/blog/hermes-agent-self-improving-ai-platform/">Read the in-depth platform overview</Link></li>
          </ul>
        </div>
      </StandardPage>
    </>
  );
}
