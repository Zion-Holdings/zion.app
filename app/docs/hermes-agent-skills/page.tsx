import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Hermes Agent Skills — Self-Improving Autonomous Agent Platform',
  description:
    'How Hermes Agent skills work: procedural memory that accumulates across sessions. Browse 350+ community skills and learn to write your own.',
  openGraph: {
    title: 'Hermes Agent Skills — Self-Improving Autonomous Agent Platform',
    description: 'Procedural memory system for Hermes Agent — skills learn, improve, and persist across sessions.',
    url: 'https://ziontechgroup.com/docs/hermes-agent-skills/',
    type: 'website',
  },
  alternates: { canonical: '/docs/hermes-agent-skills/' },
};

const SKILLS_GUIDE = [
  {
    step: 1,
    title: 'Skills are procedural memory',
    desc:
      'When Hermes solves a complex problem, it saves the workflow as a SKILL.md document. That skill loads into future sessions, so the agent starts already knowing how to do that class of task for you.',
  },
  {
    step: 2,
    title: 'Two types of skills',
    desc:
      'User-local skills (in ~/.hermes/skills/) are personal. In-repo skills (committed to the project) are shared with the team. Community skills are installed from the Skills Hub via hermes skills browse.',
  },
  {
    step: 3,
    title: 'Skills self-maintain',
    desc:
      'The background Curator tracks usage, marks idle skills stale, archives old ones, and keeps tar.gz backups. Pin critical skills to exempt them from auto-archive.',
  },
  {
    step: 4,
    title: 'Write your own',
    desc:
      'Use hermes-agent-skill-authoring conventions: frontmatter with name + description (≤1024 chars), ≤100K chars total, split into references/ for large content.',
  },
];

const BUNDLED_SKILLS = [
  { name: 'hermes-agent', category: 'autonomous-ai-agents', desc: 'Configure, extend, or contribute to Hermes Agent itself.' },
  { name: 'cron-job-maintenance', category: 'devops', desc: 'Managing, troubleshooting, and maintaining scheduled cron jobs.' },
  { name: 'nextjs-static-deploy', category: 'devops', desc: 'Build, audit, and deploy Next.js App Router static-export sites.' },
  { name: 'autonomous-ai-agents', category: 'autonomous-ai-agents', desc: 'Umbrella for autonomous AI agent techniques and self-evolving agents.' },
  { name: 'coding-agents', category: 'autonomous-ai-agents', desc: 'Unified reference for Codex, Claude Code, and OpenCode.' },
  { name: 'service-pipeline-optimizer', category: 'devops', desc: 'Automates creation of Next.js landing pages for AI/IT services.' },
  { name: 'intelligent-email-responder', category: 'email', desc: 'Autonomous email responder with Gmail API, LLM-tailored replies.' },
  { name: 'ultra-fast-micro-growth-engine', category: 'outreach', desc: 'Maximum velocity autonomous growth system for service discovery.' },
  { name: 'dynamic-workflow', category: 'autonomous-ai-agents', desc: 'Orchestrate large fan-out work as plan-in-code workflows.' },
  { name: 'debug-and-observability', category: 'software-development', desc: 'Unified debugging framework with language-specific debugger tooling.' },
  { name: 'github-pr-workflow', category: 'github', desc: 'GitHub PR lifecycle: branch, commit, open, CI, merge.' },
  { name: 'site-quality-autopilot', category: 'site-quality', desc: 'Static-site QA, repair, rebuild, deploy, and continuity loop.' },
  { name: 'humanizer', category: 'creative', desc: 'Humanize text: strip AI-isms and add real voice.' },
  { name: 'youtube-content', category: 'media', desc: 'YouTube transcripts to summaries, threads, blogs.' },
  { name: 'homeassistant', category: 'apple', desc: 'Control smart home devices via Home Assistant.' },
];

export default function HermesAgentSkillsDocPage() {
  return (
    <StandardPage
      title="Hermes Agent Skills"
      subtitle="Procedural memory that makes your agent smarter over time."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Hermes Agent', href: '/services/hermes-agent/' },
        { label: 'Skills' },
      ]}
      actions={[{ label: 'Browse skills', href: '/services/hermes-agent/', style: 'secondary' }]}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">The Skills System</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Hermes Agent's most distinctive feature is its self-improving skills system. Unlike static prompt libraries,
            skills are persistent procedural knowledge — they accumulate across sessions, self-maintain via background
            curation, and are shareable across the community. When you load a skill, the agent starts already knowing
            how to do that class of task in your specific environment.
          </p>
        </div>

        <div className="space-y-6">
          {SKILLS_GUIDE.map((s) => (
            <div key={s.step} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-purple-400">{s.step}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Key Bundled Skills</h2>
          <p className="text-slate-400 text-sm mb-6">Hermes ships with 350+ skills across 30+ categories:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {BUNDLED_SKILLS.map((s) => (
              <div key={s.name} className="border border-slate-800 rounded-lg p-4">
                <div className="flex items-baseline justify-between mb-1">
                  <code className="text-purple-300 font-mono text-sm">{s.name}</code>
                  <span className="text-[9px] text-slate-600 font-mono uppercase">{s.category}</span>
                </div>
                <p className="text-slate-500 text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Want to contribute?</h3>
          <p className="text-slate-400 text-sm mb-4">
            Found a pitfall? Discovered a better workflow? Update the applicable skill immediately with
            <code className="text-purple-300"> skill_manage(action='patch') </code>
            — don't wait to be asked. Skills that aren't maintained become liabilities.
          </p>
          <p className="text-slate-400 text-sm">
            View full guidance: <a href="https://hermes-agent.nousresearch.com/docs" className="text-purple-300 underline">Hermes Agent Documentation</a>
          </p>
        </div>
      </div>
    </StandardPage>
  );
}
