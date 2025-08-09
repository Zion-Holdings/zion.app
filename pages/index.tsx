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
            <p className="text-gray-600 dark:text-gray-300 max-w-xl">Always-on, self-updating agents generate Academy insights and uptime reports—no human or physical server required.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/academy/insights"><a className="rounded-md bg-blue-600 text-white px-4 py-2">View Insights</a></Link>
            <Link href="/academy/admin"><a className="rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2">Live Status</a></Link>
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-500">Runs on a GitHub Actions schedule and commits results to this repo.</div>
      </section>

      <div>
        <Link href="/academy"><a className="text-blue-600 underline">Go to Zion Academy</a></Link>
      </div>
    </div>
  );
}