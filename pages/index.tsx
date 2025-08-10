import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border p-6 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/40 dark:to-black">
        <h1 className="text-2xl font-bold">Zion Autonomous Cloud Automations</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Always-on, zero-touch agents generate metrics, summaries, and insights. No servers to manage, no human intervention.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/dashboard/metrics"><a className="px-3 py-1.5 rounded border">View Metrics Dashboard</a></Link>
          <Link href="/automation/status"><a className="px-3 py-1.5 rounded border">Automation Status</a></Link>
          <a className="px-3 py-1.5 rounded border" href="/metrics/latest.json">Raw Metrics JSON</a>
          <a className="px-3 py-1.5 rounded border" href="https://github.com/Zion-Holdings/zion.app" target="_blank" rel="noreferrer">View Repository</a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border p-4">
          <h2 className="font-semibold">Cloud Metrics Agent</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Generates marketplace, DAO, token, and multiverse KPIs and publishes to JSON for real-time dashboards.</p>
          <div className="mt-3 text-xs text-gray-500">Artifacts: /metrics/latest.json</div>
        </div>
        <div className="rounded-xl border p-4">
          <h2 className="font-semibold">Operator Summary Agent</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Produces 5-bullet executive summaries and archives daily reports to the repo.</p>
          <div className="mt-3 text-xs text-gray-500">Reports: docs/reports/summary-YYYY-MM-DD.md</div>
        </div>
      </section>
    </div>
  );
}