import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Innovations: NextPage = () => {
  const functions = [
    {
      name: 'Repository Sync (Auto Pages)',
      id: 'auto_repo_sync',
      desc: 'Periodically commits a timestamped auto-update page to the repo to verify pipeline health and trigger deploys.'
    },
    {
      name: 'Link Health Monitor',
      id: 'link_health',
      desc: 'Checks key routes and commits a JSON report with availability and status codes.'
    },
    {
      name: 'Homepage Promo Rotator',
      id: 'promo_rotator',
      desc: 'Rotates highlighted content and commits data for the homepage to use.'
    }
  ];

  return (
    <div>
      <Head>
        <title>Autonomous Innovations - Zion</title>
        <meta name="description" content="Autonomous cloud automations running on schedule with Netlify Functions." />
      </Head>
      <main>
        <h1 className="text-3xl font-bold mb-4">Autonomous Cloud Automations</h1>
        <p className="text-gray-700 mb-8">These automations run in the cloud on a schedule, without human interaction. You can also invoke them manually:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {functions.map(f => (
            <div key={f.id} className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-2">{f.name}</h2>
              <p className="text-gray-600 mb-4">{f.desc}</p>
              <a href={`/.netlify/functions/${f.id}`} className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Run now</a>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/">
            <a className="text-indigo-700 font-semibold hover:underline">← Back to Home</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Innovations;