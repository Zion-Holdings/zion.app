import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type AutoEntry = { slug: string; createdAt: string; items: number };

type Props = { auto: AutoEntry[] };

const Home: NextPage<Props> = ({ auto }) => {
  const latest = auto.slice(0, 5);
  return (
    <>
      <Head>
        <title>Home - Zion Tech Solutions</title>
        <meta name="description" content="Welcome to Zion Tech Solutions" />
      </Head>
      <div className="container mx-auto px-4 py-8 space-y-8">
        <section>
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p>Home page content coming soon.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Autonomous Cloud Automations</h2>
          <p className="mb-4">
            Our cloud-native automation runs continuously, curating fresh tech insights and publishing new pages automatically. No servers to manage. No humans required.
          </p>
          {latest.length === 0 ? (
            <p>No updates yet. Check back soon.</p>
          ) : (
            <ul className="list-disc pl-6 space-y-1">
              {latest.map(entry => (
                <li key={entry.slug}>
                  <Link className="text-blue-600 underline" href={`/auto/${entry.slug}`}>
                    {entry.slug}
                  </Link>
                  <span className="text-sm text-gray-500 ml-2">({new Date(entry.createdAt).toLocaleString()})</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-3">
            <Link className="text-blue-600 underline" href="/automation">Learn more about our automation</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const indexPath = path.join(process.cwd(), 'pages', 'auto', 'index.json');
    const raw = fs.readFileSync(indexPath, 'utf8');
    const auto = JSON.parse(raw) as AutoEntry[];
    return { props: { auto } };
  } catch {
    return { props: { auto: [] } };
  }
};

export default Home;