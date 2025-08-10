import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '../components/layout/EnhancedLayout';

const WORKFLOWS = [
  { name: 'Autonomous Cloud Bot', file: 'autonomous-cloud-bot.yml' },
  { name: 'Fast Bot', file: 'autonomous-cloud-bot-fast.yml' },
  { name: 'Dependencies Bot', file: 'autonomous-cloud-bot-deps.yml' },
  { name: 'Security Bot', file: 'autonomous-cloud-bot-security.yml' },
  { name: 'Content Bot', file: 'autonomous-cloud-bot-content.yml' },
  { name: 'Links Bot', file: 'autonomous-cloud-bot-links.yml' },
  { name: 'Changelog Bot', file: 'autonomous-cloud-bot-changelog.yml' },
  { name: 'Images Bot', file: 'autonomous-cloud-bot-images.yml' },
];

export default function Home() {
  return (
    <EnhancedLayout>
      <Head>
        <title>Zion AI Marketplace — Autonomous Cloud Automations</title>
        <meta name="description" content="Intelligent, innovative, and useful automations running autonomously in the cloud." />
      </Head>

      <section className="mb-10">
        <h1 className="text-3xl font-extrabold">Autonomous Cloud Automations</h1>
        <p className="mt-2 text-gray-700">
          These intelligent automations run 100% in the cloud with no human or physical machine required.
          They continuously improve the repository and sync changes at high speed.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WORKFLOWS.map((wf) => (
          <a
            key={wf.file}
            className="block border rounded-lg p-4 hover:shadow-md transition"
            href={`https://github.com/Zion-Holdings/zion.app/blob/main/.github/workflows/${wf.file}`}
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="text-lg font-semibold">{wf.name}</h2>
            <p className="text-sm text-gray-600">View workflow: {wf.file}</p>
          </a>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Recent Reports</h2>
        <ul className="mt-2 list-disc ml-6 text-sm text-gray-700 space-y-1">
          <li>
            <Link href="/data/reports/security">
              <span className="underline">Security Reports</span>
            </Link>
          </li>
          <li>
            <Link href="/data/reports/images">
              <span className="underline">Image Audits</span>
            </Link>
          </li>
          <li>
            <a className="underline" href="/CHANGELOG.md">Changelog</a>
          </li>
        </ul>
      </section>

      <section className="mt-10 text-xs text-gray-500">
        All automations use the integrated orchestrator and the GitHub token to commit and push changes or open PRs.
        Schedules are optimized for fast sync, rebasing on the latest changes to reduce conflicts.
      </section>
    </EnhancedLayout>
  );
}