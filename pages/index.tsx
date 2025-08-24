import Link from 'next/link';
import { githubFileUrl, githubActionsUrl, githubRepoUrl } from '../utils/repoLinks';
import FuturisticBackground from '../components/ui/FuturisticBackground';
import GlowCard from '../components/ui/GlowCard';

const sections = [
  { title: 'Fast AutoSync (5 min)', workflows: 'fast-autosync.yml' },
  { title: 'Insight Bots (daily)', workflows: 'insight-bots.yml' },
  { title: 'Cloud Automations (30 min)', workflows: 'cloud-automations.yml' },
  { title: 'Matrix Automations (hourly)', workflows: 'cloud-automation-matrix.yml' },
];

const reports = [
  { name: 'Source Tree', path: 'docs/source-tree.md' },
  { name: 'Routes Index', path: 'docs/routes-index.md' },
  { name: 'API Index', path: 'docs/api-index.md' },
  { name: 'Dependencies Report', path: 'docs/dependencies-report.md' },
  { name: 'ESLint Report', path: 'docs/eslint-report.md' },
  { name: 'Type Check Report', path: 'docs/type-check-report.md' },
  { name: 'Bundle Size', path: 'docs/bundle-size.md' },
  { name: 'Link Report', path: 'docs/link-report.md' },
  { name: 'Env Usage', path: 'docs/env-usage.md' },
  { name: 'Secrets Scan', path: 'docs/secrets-scan.md' },
  { name: 'Git Heatmap', path: 'docs/git-heatmap.md' },
  { name: 'Repo Size', path: 'docs/repo-size.md' },
  { name: 'Changelog', path: 'CHANGELOG.md' },
  { name: 'TODO Index', path: 'docs/TODO_INDEX.md' },
];

const featureList = [
  { title: 'Autonomous Cloud', desc: 'All workflows run in the cloud, zero local machines, zero human ops.' },
  { title: 'Self-Healing', desc: 'Auto-fix, lint, type-check, dependency audits and healing routines.' },
  { title: 'Continuous Insights', desc: 'Live docs for routes, APIs, source tree, changelog and more.' },
  { title: 'Governance Ready', desc: 'CODEOWNERS, env usage, secrets scanning and heatmaps for ownership.' },
  { title: 'Developer Tools', desc: 'Source tree explorer and admin tools for rapid module bootstrap.' },
  { title: 'Rapid Sync', desc: 'Every five minutes with immediate commit and push on changes.' },
];

export default function HomePage() {
  const repo = githubRepoUrl();
  const actions = githubActionsUrl();
  return (
    <div className="relative min-h-screen">
      <FuturisticBackground />
      <div className="relative">
        {/* Hero */}
        <section className="pt-20 pb-16 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400">
              Zion OS
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Autonomous, self-improving, cloud-native system with futuristic design and relentless automation.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href="/dev/tree"><a className="px-4 py-2 rounded-md bg-cyan-500/80 hover:bg-cyan-500 text-black font-medium">Explore Source Tree</a></Link>
              {actions ? (
                <a href={actions} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-white/20 hover:bg-white/10">View Automations</a>
              ) : null}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-5">
            {featureList.map((f) => (
              <GlowCard key={f.title} title={f.title}>{f.desc}</GlowCard>
            ))}
          </div>
        </section>

        {/* Automations */}
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Automations</h2>
              {repo ? <a className="text-sm underline" href={repo} target="_blank" rel="noreferrer">Repository</a> : null}
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {sections.map((s) => (
                <div key={s.workflows} className="rounded-xl border border-white/10 p-4 bg-white/5">
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-gray-400">Workflow: {s.workflows}</div>
                </div>
              ))}
            </div>
            <h3 className="text-lg font-semibold mb-2">Live Reports</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {reports.map((r) => {
                const url = githubFileUrl(r.path);
                return (
                  <li key={r.path} className="rounded border border-white/10 p-3 bg-white/5 hover:bg-white/10 transition-colors">
                    {url ? (
                      <a className="text-blue-300 underline" href={url} target="_blank" rel="noreferrer">{r.name}</a>
                    ) : (
                      <span className="text-gray-400">{r.name}</span>
                    )}
                    <span className="text-gray-500 ml-2 text-xs">({r.path})</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur">
              <span className="text-sm text-gray-300">Zero-touch cloud ops • Futuristic DX • Modular architecture</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}