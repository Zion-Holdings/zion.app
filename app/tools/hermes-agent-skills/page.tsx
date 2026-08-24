import type { Metadata } from 'next'
import Link from 'next/link'
import StandardPage from '@/components/StandardPage'
import JsonLd from '@/components/JsonLd'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Hermes Agent Skills & Plugins Directory — Zion Tech Group',
  description: 'Browse Hermes Agent skills, plugins, and MCP servers curated by Zion Tech Group. From Bot Mode to A2A protocol, find the tools to extend your autonomous AI agents.',
  openGraph: {
    title: 'Hermes Agent Skills & Plugins Directory',
    description: 'Complete directory of Hermes Agent skills, plugins, and MCP integrations managed by Zion Tech Group.',
    url: 'https://ziontechgroup.com/tools/hermes-agent-skills',
    type: 'website',
  },
  alternates: { canonical: '/tools/hermes-agent-skills' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Hermes Agent Skills & Plugins Directory',
  description: 'Browse Hermes Agent skills, plugins, and MCP servers curated by Zion Tech Group.',
  publisher: {
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
  },
  mainEntityOfPage: 'https://ziontechgroup.com/tools/hermes-agent-skills',
}

const SKILL_CATEGORIES = [
  {
    category: 'Automation',
    skills: [
      { name: 'cron-job-maintenance', description: 'Manage, troubleshoot, and maintain cron jobs - cleanup orphaned jobs, stale fire_claims, failure streak resets.', tags: 'cron,maintenance,troubleshooting' },
      { name: 'cron-telegram-delivery', description: 'Automated delivery of cron job results to Telegram via Hermes Agent. Handles token rotation, formatting, and rate limiting.', tags: 'cron,telegram,delivery' },
      { name: 'email-automation-troubleshooting', description: 'Troubleshooting guide for email automation systems - common issues, SMTP/IMAP fixes, provider-specific guidance.', tags: 'email,troubleshooting,smtp' },
      { name: 'outreach-automation', description: 'Automated outbound email outreach system with multi-provider support, template generation, and hot lead detection.', tags: 'outreach,email,automation' },
    ],
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'nextjs-static-deploy', description: 'Build, audit, and deploy Next.js App Router static exports with memory optimization for 16K+ routes.', tags: 'nextjs,deployment,sstatic-export' },
      { name: 'github-pr-workflow', description: 'GitHub PR lifecycle: branch, commit, open, CI, merge. Follows standing git conventions with explicit add and rebase rules.', tags: 'github,pr,git,ci-cd' },
      { name: 'site-quality-autopilot', description: 'Static-site QA: repair, rebuild, deploy, and continuity for Next.js static sites on GitHub Pages.', tags: 'nextjs,qa,site-quality,github-pages' },
      { name: 'git-repo-cleanup', description: 'Diagnose and repair misbehaving git repositories. Handles rebase timeouts, detached HEAD, merge conflicts.', tags: 'git,cleanup,repair' },
    ],
  },
  {
    category: 'Development',
    skills: [
      { name: 'typescript-jsx-closures', description: 'Common JSX closure corruption patterns in Next.js App Router. Fixes component redefinition and state leakage.', tags: 'typescript,jsx,nextjs,closure' },
      { name: 'nextjs-dynamic-route-fix', description: 'Fix TypeScript errors in Next.js dynamic route pages. Handles generateStaticParams and routing issues.', tags: 'nextjs,routing,typescript' },
      { name: 'software-version-evaluation', description: 'Evaluate which version of a software component to promote. Risk assessment, compatibility check, rollback planning.', tags: 'versioning,evaluation,deployment' },
    ],
  },
  {
    category: 'AI Operations',
    skills: [
      { name: 'ai-agent-intelligence', description: 'Research, design patterns, and training methodology for autonomous AI agents. Self-improving, multi-agent coordination.', tags: 'ai-agents,autonomous,development' },
      { name: 'hermes-agent', description: 'Configure, extend, or contribute to Hermes Agent itself. CLI, config, models, providers, tools, skills, Bot Mode.', tags: 'hermes-agent,configuration,cli' },
      { name: 'autonomous-operations-preference', description: 'User-specific autonomous authority configuration: when to operate without confirmation, escalation thresholds.', tags: 'autonomous,permissions,operations' },
      { name: 'subagent-driven-development', description: 'Execute plans via delegate_task subagents with 2-stage review. Parallel workstream coordination.', tags: 'subagents,delegation,parallel' },
    ],
  },
  {
    category: 'Growth & Marketing',
    skills: [
      { name: 'hyper-velocity-growth-engine-v3', description: 'Maximum velocity service discovery, lead generation, and outreach. Generates landing pages and outreach emails for new services.', tags: 'growth,lead-generation,outreach' },
      { name: 'rapid-fire-outreach-engine', description: 'Generate 1000+ personalized outreach emails per cycle with Calendly integration and hot lead detection.', tags: 'outreach,email,growth' },
      { name: 'seo-content-creation-engine', description: 'Generate SEO blogs and case studies from service catalogs. Auto-deploy to Next.js static sites.', tags: 'seo,content,growth' },
    ],
  },
]

const PLUGIN_CATEGORIES = [
  {
    category: 'Built-in Plugins',
    plugins: [
      { name: 'Disk Cleanup', description: 'Clears agent-generated temp files safely', enable: 'hermes plugins enable disk-cleanup' },
      { name: 'Langfuse Observability', description: 'Traces every turn, tool call, latency, and cost', enable: 'hermes plugins enable observability/langfuse' },
      { name: 'Google Meet', description: 'Joins calls, transcribes, and writes notes', enable: 'hermes plugins enable google_meet' },
    ],
  },
  {
    category: 'Browser & Scraping',
    plugins: [
      { name: 'Browser Use', description: 'Browser automation via Browser Use CLI', enable: 'hermes plugins enable browser/browser_use' },
      { name: 'Firecrawl', description: 'Live web context: search, scrape, crawl, browser rendering', enable: 'hermes plugins enable browser/firecrawl' },
    ],
  },
  {
    category: 'Image Generation',
    plugins: [
      { name: 'FAL', description: 'Image generation via FAL.ai', enable: 'hermes plugins enable image_gen/fal' },
      { name: 'OpenAI', description: 'DALL·E 3 image generation', enable: 'hermes plugins enable image_gen/openai' },
      { name: 'OpenRouter', description: 'Image generation via OpenRouter models', enable: 'hermes plugins enable image_gen/openrouter' },
    ],
  },
  {
    category: 'Cron & Scheduling',
    plugins: [
      { name: 'Chronos', description: 'Cron scheduler with multi-platform delivery', enable: 'hermes plugins enable cron_providers/chronos' },
    ],
  },
  {
    category: 'Zion Tech Custom',
    plugins: [
      { name: 'Zion Tech Platform', description: 'Site service lookup, blog search, route verification tools', enable: 'hermes plugins enable hermes-agent-site-operations' },
    ],
  },
]

export default function HermesSkillsDirectoryPage() {
  return (
    <StandardPage
      title="Hermes Agent Skills & Plugins Directory"
      subtitle="Browse skills, plugins, and MCP integrations curated by Zion Tech Group."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Hermes Agent Skills' },
      ]}
    >
      <JsonLd data={jsonLd} />
      <BreadcrumbSchema path="/tools/hermes-agent-skills" title="Hermes Agent Skills & Plugins Directory" />

      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900/40 via-gray-800/30 to-slate-900/40 rounded-3xl p-8 mb-10 border border-slate-700/60">
          <div className="flex items-start gap-4">
            <div className="text-5xl shrink-0">🧠</div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-3">Hermes Agent Skills & Plugins</h1>
              <p className="text-slate-300 mb-4">
                Curated directory of skills, plugins, and MCP integrations for the Hermes Agent platform —
                managed by Zion Tech Group engineering.
              </p>
              <div className="flex gap-4">
                <Link href="/services/hermes-agent-bot-mode/" className="text-purple-400 hover:text-purple-200 text-sm font-medium">
                  Bot Mode →
                </Link>
                <Link href="/services/hermes-agent-plugin-development/" className="text-purple-400 hover:text-purple-200 text-sm font-medium">
                  Custom Plugins →
                </Link>
                <Link href="/services/hermes-agent-a2a-protocol/" className="text-purple-400 hover:text-purple-200 text-sm font-medium">
                  A2A Protocol →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <h2 className="text-2xl font-bold text-white mb-6">Installed Skills</h2>
        <div className="space-y-8 mb-12">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-xl font-semibold text-slate-200 mb-4">{cat.category}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">📄</span>
                      <div>
                        <code className="text-purple-400 font-mono text-sm">{skill.name}</code>
                        <p className="text-sm text-slate-300 mt-1">{skill.description}</p>
                        <span className="inline-block text-xs bg-slate-700/60 text-slate-400 px-2 py-0.5 rounded mt-1">
                          {skill.tags}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Plugins */}
        <h2 className="text-2xl font-bold text-white mb-6">Available Plugins</h2>
        <div className="space-y-8 mb-12">
          {PLUGIN_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-xl font-semibold text-slate-200 mb-4">{cat.category}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {cat.plugins.map((plugin) => (
                  <div key={plugin.name} className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">🔌</span>
                      <div className="flex-1">
                        <h4 className="font-bold text-white">{plugin.name}</h4>
                        <p className="text-sm text-slate-300 mt-1">{plugin.description}</p>
                        <code className="text-xs bg-slate-900/60 text-cyan-400 px-2 py-1 rounded mt-2 block">
                          {plugin.enable}
                        </code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center py-12 bg-gradient-to-r from-purple-900/20 via-violet-800/15 to-fuchsia-900/20 rounded-3xl border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">Need a Custom Hermes Skill or Plugin?</h2>
          <p className="text-slate-300 mb-6">Our team builds custom plugins and skills for your specific workflows.</p>
          <Link
            href="/services/hermes-agent-plugin-development/"
            className="inline-block bg-fuchsia-500 hover:bg-fuchsia-600 text-black font-bold py-3 px-6 rounded-xl transition"
          >
            Get Custom Development
          </Link>
        </div>
      </div>
    </StandardPage>
  )
}
