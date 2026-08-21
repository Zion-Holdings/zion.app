import type { Metadata } from 'next';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hermes Agent Skills Deep Dive: The Self-Improving AI System',
  description:
    'How Hermes Agent skills work as procedural memory — a closed learning loop that accumulates across sessions.',
  keywords: [
    'Hermes Agent skills',
    'self-improving AI',
    'procedural memory',
    'autonomous agents',
    'skill authoring',
    'Nous Research',
  ],
  openGraph: {
    title: 'Hermes Agent Skills Deep Dive: The Self-Improving AI System',
    description:
      'How Hermes Agent skills work as procedural memory — a closed learning loop that accumulates across sessions.',
    url: 'https://ziontechgroup.com/blog/hermes-agent-skills-system-deep-dive/',
    type: 'article',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: '/blog/hermes-agent-skills-system-deep-dive/' },
};

const SKILL_LIFECYCLE = [
  { step: 1, title: 'Problem Solved', desc: 'An agent solves a complex problem and gets it right — or gets corrected.' },
  { step: 2, title: 'Skill Saved', desc: "The workflow is compressed into a portable SKILL.md file under ~/.hermes/skills/ or committed in-repo." },
  { step: 3, title: 'Curator Reviews', desc: 'The background Curator tracks usage, marks idle skills stale, and keeps tar.gz backups.' },
  { step: 4, title: 'Future Sessions', desc: 'The skill loads automatically via /skill name or hermes -s name — the agent starts already knowing the procedure.' },
  { step: 5, title: 'Patched & Improved', desc: 'Outdated skills are patched with skill_manage(action=patch) — maintaining skills is a continuous workflow.' },
];

const KEY_SKILLS = [
  { name: 'hermes-agent', category: 'autonomous-ai-agents', desc: 'Configure, extend, or contribute to Hermes Agent itself.' },
  { name: 'cron-job-maintenance', category: 'devops', desc: 'Managing, troubleshooting, and maintaining scheduled cron jobs.' },
  { name: 'nextjs-static-deploy', category: 'devops', desc: 'Build, audit, and deploy Next.js App Router static-export sites.' },
  { name: 'agent-ops-dashboard', category: 'agent-behavior', desc: 'Build and maintain a real-time monitoring dashboard for AI agent fleets.' },
  { name: 'ai-agent-intelligence', category: 'autonomous-ai-agents', desc: 'Make agents more intelligent, proactive, and autonomous.' },
  { name: 'self-evolving-ai-agents', category: 'autonomous-ai-agents', desc: 'Reflexion loops, tree-of-thought, three-tier memory for production agents.' },
  { name: 'coding-agents', category: 'autonomous-ai-agents', desc: 'Unified reference for Codex, Claude Code, and OpenCode.' },
  { name: 'site-quality-autopilot', category: 'devops', desc: 'Static-site QA, repair, rebuild, deploy, and continuity loop.' },
  { name: 'ultra-fast-micro-growth-engine', category: 'outreach', desc: 'Maximum velocity service discovery and outreach for AI/IT services.' },
  { name: 'intelligent-email-responder', category: 'email', desc: 'LLM-powered email responder with OpenRouter integration.' },
  { name: 'dynamic-workflow', category: 'autonomous-ai-agents', desc: 'Orchestrate large fan-out work as plan-in-code workflows.' },
  { name: 'gate-execution', category: 'devops', desc: 'Multi-instance gate workflow for cross-environment code verification.' },
];

const SKILL_CATEGORIES = [
  'AI Agent Intelligence',
  'Growth Automation',
  'DevOps & CI/CD',
  'Research & Analysis',
  'Email & Communication',
  'Development',
  'ML Ops',
  'Smart Home',
  'Media & Creative',
  'Social & Messaging',
  'Sales & Outreach',
  'Site Quality',
];

export default function HermesSkillsDeepDive() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Hermes Agent Skills: The Self-Improving AI System That Gets Smarter Over Time',
        description: 'How Hermes Agent skills work as procedural memory — a closed learning loop.',
        author: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
        publisher: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
        datePublished: '2026-08-21T00:00:00Z',
        mainEntityOfPage: 'https://ziontechgroup.com/blog/hermes-agent-skills-system-deep-dive/',
      }} />
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SiteBreadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Hermes Agent Skills Deep Dive' },
        ]} className="mb-8" />

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Hermes Agent Skills: The Self-Improving AI System</h1>
          <p className="mt-4 text-lg text-slate-300">How procedural memory makes Hermes agents smarter every day — and how to write your own.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>By Zion Tech Group</span><span>·</span>
            <span>August 21, 2026</span><span>·</span>
            <span>8 min read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-300 leading-relaxed">
            The secret sauce behind Hermes Agent is its skills system — a procedural memory layer that
            turns one-off solutions into reusable, shareable, continuously improving procedures. Every
            time a Hermes agent solves a complex problem, gets corrected, or discovers a better approach,
            that knowledge doesn't disappear with the session. It's saved as a <strong>SKILL.md</strong> file.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Skill Lifecycle</h2>
          <p className="text-slate-300 leading-relaxed">A skill goes through five stages:</p>
          <ol className="list-decimal list-inside space-y-3 text-slate-300">
            {SKILL_LIFECYCLE.map((s) => (
              <li key={s.step}>
                <strong className="text-white">{s.step}. {s.title}</strong> — {s.desc}
              </li>
            ))}
          </ol>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Two Types of Skills</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>
              <strong className="text-white">User-local skills</strong> — in <code>~/.hermes/skills/</code>. Personal to your machine/profile.
            </li>
            <li>
              <strong className="text-white">In-repo skills</strong> — committed to the project (e.g., the hermes-agent repo itself ships skills in <code>skills/</code>).
            </li>
            <li>
              <strong className="text-white">Community skills</strong> — installed via <code>hermes skills browse</code> from the Skills Hub.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">350+ Skills Across 30+ Categories</h2>
          <p className="text-slate-300 leading-relaxed">Hermes ships with 350+ skills. Here are some that matter most:</p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            {KEY_SKILLS.map((s) => (
              <div key={s.name} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <code className="text-purple-300 text-sm block mb-1">{s.name}</code>
                <p className="text-slate-500 text-xs">{s.category} — {s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Skill Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
            {SKILL_CATEGORIES.map((c) => (
              <span key={c} className="text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded">
                {c}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Writing Your Own Skills</h2>
          <p className="text-slate-300 leading-relaxed">A skill is just a markdown file with YAML frontmatter:</p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono my-4 overflow-x-auto">
            <code className="text-slate-200">
{`---
name: my-custom-skill
description: Automate my specific workflow in 3 steps.
author: Your Name
license: MIT
---

# My Custom Skill

## Trigger
When: I need to deploy a new service landing page

## Steps
1. Read servicesData.json to find the service by slug
2. Generate page.tsx using the template pattern
3. Run npm run generate-sitemap to update the sitemap

## Pitfalls
- Never modify servicesData.json directly — always use the API
- Run tsc --noEmit after writing the page
`}
            </code>
          </pre>
          <p className="text-slate-300 leading-relaxed">
            Key rules: description ≤ 1024 chars, full file ≤ 100,000 chars (split into <code>references/</code> if larger).
            Use <code>skill_manage(action='patch')</code> to keep outdated skills current.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Curator</h2>
          <p className="text-slate-300 leading-relaxed">
            Hermes runs a background <strong>Curator</strong> that tracks skill usage, marks idle skills
            as stale after 30 days, archives them after 90 days, and keeps tar.gz backups. Pin critical
            skills with <code>hermes curator pin &lt;name&gt;</code> to exempt them from auto-archive.
          </p>

          <div className="mt-12 p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-2">Browse All 350+ Skills</h3>
            <p className="text-slate-300 text-sm mb-4">Explore the full skills catalog and learn more about skill authoring.</p>
            <Link href="/docs/hermes-agent-skills/" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all text-sm">
              Browse Skills →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
