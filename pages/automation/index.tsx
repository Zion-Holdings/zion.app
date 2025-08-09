import Link from 'next/link';
import Head from 'next/head';

export default function AutomationHubPage() {
  return (
    <div>
      <Head>
        <title>Automation Hub — Zion</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-2">Automation Hub</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Autonomous cloud agents continuously gather insights and refresh site content.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
          <h2 className="font-medium">Market Intelligence</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Pulls public signals (HN, GitHub Trending) and derives actionable insights.</p>
          <div className="mt-3"><Link href="/automation/insights"><a className="text-indigo-600 hover:underline">View Insights</a></Link></div>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
          <h2 className="font-medium">Talent Highlights</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Auto-curated highlights from the marketplace talent pool.</p>
          <div className="mt-3"><Link href="/automation/insights#talent"><a className="text-indigo-600 hover:underline">See Highlights</a></Link></div>
        </div>
      </div>
    </div>
  );
}