import type { NextPage, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type AutoEntry = { slug: string; createdAt: string; items: number };

type Props = {
  auto: AutoEntry[];
  trends: AutoEntry[];
};

const AutomationIndex: NextPage<Props> = ({ auto, trends }) => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-bold">Automation</h1>
      <p>These automations run in the cloud on a schedule and commit results directly to this repository.</p>

      <section>
        <h2 className="text-xl font-semibold mb-2">Automated Tech Brief</h2>
        <p className="mb-2">Curated tech headlines sourced autonomously from public feeds.</p>
        <ul className="list-disc pl-6 space-y-1">
          {auto.slice(0, 10).map(entry => (
            <li key={entry.slug}>
              <Link className="text-blue-600 underline" href={`/auto/${entry.slug}`}>{entry.slug}</Link>
              <span className="text-sm text-gray-500 ml-2">({new Date(entry.createdAt).toLocaleString()})</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Tech Trends (HN Algolia)</h2>
        <p className="mb-2">Daily trending tech stories from the last 24 hours.</p>
        <ul className="list-disc pl-6 space-y-1">
          {trends.slice(0, 10).map(entry => (
            <li key={entry.slug}>
              <Link className="text-blue-600 underline" href={`/trends/${entry.slug}`}>{entry.slug}</Link>
              <span className="text-sm text-gray-500 ml-2">({new Date(entry.createdAt).toLocaleString()})</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Health</h2>
        <p className="mb-2">Link health checks are saved to <code>/public/link-health.json</code>.</p>
        <Link className="text-blue-600 underline" href="/link-health.json">View latest link health report</Link>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  function loadIndex(base) {
    try {
      const p = path.join(process.cwd(), 'pages', base, 'index.json');
      return JSON.parse(fs.readFileSync(p, 'utf8')) as AutoEntry[];
    } catch {
      return [] as AutoEntry[];
    }
  }
  return {
    props: {
      auto: loadIndex('auto'),
      trends: loadIndex('trends'),
    },
  };
};

export default AutomationIndex;