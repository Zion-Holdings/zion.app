import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Zion AI Marketplace</h1>
        <p className="text-gray-600 dark:text-gray-300">Discover and hire top AI talent.</p>
        <Link href="/talent" className="enhanced-button enhanced-button-primary inline-block">Browse Talent</Link>
      </div>

      <section className="rounded-2xl border border-blue-200 dark:border-blue-900/50 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/30 dark:via-gray-900 dark:to-purple-950/30 p-6">
        <h2 className="text-xl font-semibold mb-2">Autonomous Cloud Automations</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Always-on agents generate insights and pulse reports with zero human intervention.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium">Autonomous Talent Insights</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Trending skills, top-rated, most-booked talent — refreshed automatically.</p>
            <div className="mt-3 flex gap-3">
              <Link href="/automations" className="text-blue-600 hover:underline text-sm">View dashboard</Link>
              <a href="/automations/talent-insights/latest.json" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noreferrer">Latest JSON</a>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium">Marketplace Pulse</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Live pulse of average rates, availability mix, and regions across the marketplace.</p>
            <div className="mt-3 flex gap-3">
              <Link href="/automations" className="text-blue-600 hover:underline text-sm">View dashboard</Link>
              <a href="/automations/pulse/latest.json" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noreferrer">Latest JSON</a>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium">Role Intelligence</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Top candidates per high-demand roles based on skills and performance signals.</p>
            <div className="mt-3 flex gap-3">
              <Link href="/automations" className="text-blue-600 hover:underline text-sm">View dashboard</Link>
              <a href="/automations/role-intel/latest.json" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noreferrer">Latest JSON</a>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium">Rate Distribution</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Visualize rate buckets to quickly align budgets with talent bands.</p>
            <div className="mt-3 flex gap-3">
              <Link href="/automations" className="text-blue-600 hover:underline text-sm">View dashboard</Link>
              <a href="/automations/rate-distribution/latest.json" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noreferrer">Latest JSON</a>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium">Trends (Delta)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Track changes in rates, availability, and regions between runs.</p>
            <div className="mt-3 flex gap-3">
              <Link href="/automations" className="text-blue-600 hover:underline text-sm">View dashboard</Link>
              <a href="/automations/trends/latest.json" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noreferrer">Latest JSON</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}