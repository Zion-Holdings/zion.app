import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type Entry = { slug: string; createdAt: string; items: number };

type Props = { auto: Entry[]; trends: Entry[] };

const Home: NextPage<Props> = ({ auto, trends }) => {
  const latestAuto = auto.slice(0, 5);
  const latestTrends = trends.slice(0, 5);
  return (
    <>
      <Head>
        <title>Home - Zion Tech Solutions</title>
        <meta name="description" content="Welcome to Zion Tech Solutions" />
      </Head>
      <div className="container mx-auto px-4 py-8 space-y-10">
        <section>
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p>Building intelligent, autonomous systems that run entirely in the cloud.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Autonomous Cloud Automations</h2>
          <p className="mb-4">These automations run with no human intervention and sync results directly to this repository.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold">Automated Tech Brief</h3>
              <p className="mb-2">Autonomous curation of tech headlines. Latest:</p>
              {latestAuto.length === 0 ? (
                <p>No updates yet.</p>
              ) : (
                <ul className="list-disc pl-6 space-y-1">
                  {latestAuto.map(entry => (
                    <li key={entry.slug}>
                      <Link className="text-blue-600 underline" href={`/auto/${entry.slug}`}>
                        {entry.slug}
                      </Link>
                      <span className="text-sm text-gray-500 ml-2">({new Date(entry.createdAt).toLocaleString()})</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold">Tech Trends (HN Algolia)</h3>
              <p className="mb-2">Daily trending tech stories. Latest:</p>
              {latestTrends.length === 0 ? (
                <p>No trends yet.</p>
              ) : (
                <ul className="list-disc pl-6 space-y-1">
                  {latestTrends.map(entry => (
                    <li key={entry.slug}>
                      <Link className="text-blue-600 underline" href={`/trends/${entry.slug}`}>
                        {entry.slug}
                      </Link>
                      <span className="text-sm text-gray-500 ml-2">({new Date(entry.createdAt).toLocaleString()})</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold">Repository Pulse</h3>
              <p className="mb-2">24h summary of issues and PRs.</p>
              <Link className="text-blue-600 underline" href="/github-pulse.json">View GitHub Pulse</Link>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Link Health</h3>
              <p className="mb-2">Automated link checks from our sitemap.</p>
              <Link className="text-blue-600 underline" href="/link-health.json">View Link Health Report</Link>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Rolling Changelog</h3>
              <p className="mb-2">Daily entries of recent commits.</p>
              <Link className="text-blue-600 underline" href="/docs/CHANGELOG.md">View Changelog</Link>
            </div>
          </div>

          <div className="mt-6">
            <Link className="text-blue-600 underline" href="/automation">See all automation outputs</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  function loadIndex(base: string): Entry[] {
    try {
      const file = path.join(process.cwd(), 'pages', base, 'index.json');
      return JSON.parse(fs.readFileSync(file, 'utf8')) as Entry[];
    } catch {
      return [];
    }
  }
  return {
    props: {
      auto: loadIndex('auto'),
      trends: loadIndex('trends'),
    },
  };
};

export default Home;