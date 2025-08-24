import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const REPO_URL = 'https://github.com/Zion-Holdings/zion.app';

const automations = [
  {
    name: 'Rapid Auto-Fixes (every 10m)',
    description: 'Runs quick fixers for empty files, syntax and import issues, and syncs changes fast.',
    action: 'Autonomous Rapid Automation',
    reports: [
      { label: 'Automation Workflows', href: `${REPO_URL}/actions?query=workflow:%22Autonomous+Rapid+Automation%22` },
    ],
  },
  {
    name: 'Hourly Analyzers',
    description: 'Syntax checks, UI beautify, responsive and link scans with auto-commit.',
    action: 'Autonomous Hourly Automation',
    reports: [
      { label: 'Actions', href: `${REPO_URL}/actions?query=workflow:%22Autonomous+Hourly+Automation%22` },
    ],
  },
  {
    name: 'Daily Suite',
    description: 'Comprehensive automations across UI, content, and alignment with commits.',
    action: 'Autonomous Daily Automation',
    reports: [
      { label: 'Actions', href: `${REPO_URL}/actions?query=workflow:%22Autonomous+Daily+Automation%22` },
      { label: 'Changelog', href: `${REPO_URL}/blob/main/CHANGELOG.md` },
    ],
  },
  {
    name: 'Security Maintenance',
    description: 'Daily npm audit fix and non-fatal type checks.',
    action: 'Autonomous Security Maintenance',
    reports: [
      { label: 'Actions', href: `${REPO_URL}/actions?query=workflow:%22Autonomous+Security+Maintenance%22` },
    ],
  },
  {
    name: 'Dependency Updater',
    description: 'Twice-weekly minor/patch bumps with build verification.',
    action: 'Autonomous Dependency Updater',
    reports: [
      { label: 'Actions', href: `${REPO_URL}/actions?query=workflow:%22Autonomous+Dependency+Updater%22` },
      { label: 'package.json', href: `${REPO_URL}/blob/main/package.json` },
    ],
  },
  {
    name: 'Lighthouse Performance',
    description: 'Exports the site and generates Lighthouse HTML/JSON reports.',
    action: 'Autonomous Lighthouse Report',
    reports: [
      { label: 'Actions', href: `${REPO_URL}/actions?query=workflow:%22Autonomous+Lighthouse+Report%22` },
      { label: 'Reports', href: `${REPO_URL}/tree/main/data/reports/lighthouse` },
    ],
  },
  {
    name: 'Sitemap Generator',
    description: 'Keeps sitemap.xml fresh for better SEO and crawling.',
    action: 'Autonomous Sitemap Generator',
    reports: [
      { label: 'Actions', href: `${REPO_URL}/actions?query=workflow:%22Autonomous+Sitemap+Generator%22` },
      { label: 'public/sitemap.xml', href: `${REPO_URL}/blob/main/public/sitemap.xml` },
    ],
  },
  {
    name: 'Git Health',
    description: 'Runs git health diagnostics and commits summary logs.',
    action: 'Autonomous Git Health',
    reports: [
      { label: 'Actions', href: `${REPO_URL}/actions?query=workflow:%22Autonomous+Git+Health%22` },
      { label: 'Summary Logs', href: `${REPO_URL}/blob/main/automation_logs/git-health-summary.json` },
    ],
  },
  {
    name: 'PR Labeler & Checks',
    description: 'Labels PRs automatically and runs non-destructive analyzers with optional auto-fixes.',
    action: 'Autonomous PR Checks',
    reports: [
      { label: 'Label Rules', href: `${REPO_URL}/blob/main/.github/labeler.yml` },
      { label: 'Actions', href: `${REPO_URL}/actions?query=workflow:%22Autonomous+PR+Checks%22` },
    ],
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zion AI Marketplace — Autonomous Cloud Automations</title>
        <meta name="description" content="Self-running, cloud-native automations that improve, secure, and evolve the product—no human interaction required." />
      </Head>

      <section className="py-8">
        <h1 className="text-3xl font-bold mb-3">Autonomous Cloud Automations</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          These intelligent workflows run in the cloud on a frequent cadence to continuously improve the
          codebase, content, performance, and security—then sync changes back to the repository automatically.
        </p>
        <div className="mt-4 text-sm">
          <a className="underline" href={`${REPO_URL}/actions`} target="_blank" rel="noreferrer">View all Actions</a>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {automations.map((a) => (
          <div key={a.name} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-semibold text-lg">{a.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{a.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {a.reports.map((r) => (
                <a key={r.label} href={r.href} target="_blank" rel="noreferrer" className="text-xs underline">
                  {r.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Try our AI Assistants</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/talent/resume-builder"><a className="underline">Resume Assistant</a></Link>
          <Link href="/jobs/new"><a className="underline">Job Post Assistant</a></Link>
          <Link href="/proposals/new"><a className="underline">Proposal Assistant</a></Link>
        </div>
      </section>
    </div>
  );
};

export default Home;