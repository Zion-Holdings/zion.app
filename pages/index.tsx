import Link from 'next/link';
import { githubFileUrl, githubActionsUrl, githubRepoUrl } from '../utils/repoLinks';

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

export default function HomePage() {
  const repo = githubRepoUrl();
  const actions = githubActionsUrl();
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-2">Zion OS — Autonomous Cloud Automations</h1>
      <p className="text-gray-600 mb-6">Zero-touch, cloud-only workflows that continuously improve, document, and synchronize this repository.</p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {sections.map((s) => (
          <div key={s.workflows} className="rounded border p-4 bg-white/70">
            <div className="font-semibold mb-1">{s.title}</div>
            <div className="text-sm text-gray-600">Workflow: {s.workflows}</div>
            <div className="mt-2 text-sm">
              {actions ? (
                <a className="text-blue-600 underline" href={actions} target="_blank" rel="noreferrer">View runs</a>
              ) : (
                <span className="text-gray-500">Actions not available</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-3">Live Reports</h2>
      <ul className="space-y-2 mb-8">
        {reports.map((r) => {
          const url = githubFileUrl(r.path);
          return (
            <li key={r.path}>
              {url ? (
                <a className="text-blue-700 underline" href={url} target="_blank" rel="noreferrer">{r.name}</a>
              ) : (
                <span className="text-gray-500">{r.name}</span>
              )}
              <span className="text-gray-500 ml-2 text-sm">({r.path})</span>
            </li>
          );
        })}
      </ul>

      <h2 className="text-xl font-semibold mb-3">Developer Tools</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/dev/tree"><a className="text-blue-700 underline">Source Tree Explorer</a></Link>
          <span className="text-gray-500 ml-2 text-sm">(/dev/tree)</span>
        </li>
        <li>
          <Link href="/admin/source-map"><a className="text-blue-700 underline">Admin Source Map</a></Link>
          <span className="text-gray-500 ml-2 text-sm">(/admin/source-map)</span>
        </li>
      </ul>

      <div className="mt-8 text-sm text-gray-500">
        {repo ? (
          <a className="underline" href={repo} target="_blank" rel="noreferrer">Repository</a>
        ) : (
          <span>Repository</span>
        )}
        <span> • </span>
        {actions ? (
          <a className="underline" href={actions} target="_blank" rel="noreferrer">Actions</a>
        ) : (
          <span>Actions</span>
        )}
      </div>
    </div>
  );
}