import Link from 'next/link';

export default function Home() {
  return (
    <div className="py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome to Zion</h1>
        <p className="text-gray-600 dark:text-gray-300">Explore products, services, and our learning platform.</p>
      </div>

      <section className="rounded-lg border border-gray-200 dark:border-gray-800 p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
          <div>
            <div className="text-xl font-semibold mb-1">Autonomous Cloud Agents</div>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl">Always-on, self-updating agents generate insights, monitor uptime, optimize SEO, scan links, tune courses, track freshness, summarize changes, and publish RSS feeds—no human or physical server required.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/academy/insights"><a className="rounded-md bg-blue-600 text-white px-4 py-2">View Insights</a></Link>
            <Link href="/academy/admin"><a className="rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2">Live Status</a></Link>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          <Link href="/admin/seo-suggestions"><a className="rounded border border-gray-200 dark:border-gray-800 p-3 hover:bg-gray-50 dark:hover:bg-gray-900">SEO Suggestions</a></Link>
          <Link href="/admin/broken-links"><a className="rounded border border-gray-200 dark:border-gray-800 p-3 hover:bg-gray-50 dark:hover:bg-gray-900">Broken Links</a></Link>
          <Link href="/admin/changelog"><a className="rounded border border-gray-200 dark:border-gray-800 p-3 hover:bg-gray-50 dark:hover:bg-gray-900">Recent Changes</a></Link>
          <Link href="/admin/content-freshness"><a className="rounded border border-gray-200 dark:border-gray-800 p-3 hover:bg-gray-50 dark:hover:bg-gray-900">Content Freshness</a></Link>
          <a href="/academy-insights.xml" className="rounded border border-gray-200 dark:border-gray-800 p-3 hover:bg-gray-50 dark:hover:bg-gray-900">Insights RSS</a>
          <a href="/changelog.xml" className="rounded border border-gray-200 dark:border-gray-800 p-3 hover:bg-gray-50 dark:hover:bg-gray-900">Changelog RSS</a>
        </div>
        <div className="mt-3 text-xs text-gray-500">Runs on GitHub Actions (5–30 min cadence) and commits results to this repo.</div>
      </section>

      <div>
        <Link href="/academy"><a className="text-blue-600 underline">Go to Zion Academy</a></Link>
      </div>
    </div>
  );
}