import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [report, setReport] = useState<{ runAt: string; successCount: number; total: number } | null>(null);
  useEffect(() => {
    fetch('/data/reports/autonomous/last-run.json').then(async (r) => {
      if (r.ok) setReport(await r.json());
    }).catch(()=>{});
  }, []);

  return (
    <div className="py-10 space-y-6">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 text-white shadow">
        <h1 className="text-2xl font-semibold">Zion AI Marketplace</h1>
        <p className="opacity-90">AI-first services, automations, and insights.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <h3 className="font-medium">Cloud Autonomous Automations</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Self-running agents keep your site healthy, optimized, and current.</p>
          <ul className="mt-2 text-sm list-disc pl-5 space-y-1">
            <li>Link scanner & fixer</li>
            <li>Responsive & design analyzer</li>
            <li>Spec-dev chat fetcher</li>
            <li>Self-healing error scanner</li>
          </ul>
          <div className="mt-3 text-xs text-gray-500">
            {report ? (
              <span>Last run: {new Date(report.runAt).toLocaleString()} • {report.successCount}/{report.total} tasks OK</span>
            ) : (
              <span>Cloud agents run on a schedule and sync changes automatically.</span>
            )}
          </div>
          <div className="mt-3 flex gap-2">
            <Link href="/admin"><a className="rounded bg-indigo-600 text-white px-3 py-2 text-sm">View Admin</a></Link>
            <Link href="/salary-insights"><a className="rounded border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm">Salary Insights</a></Link>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <h3 className="font-medium">Talent Benchmarks</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Benchmark rates and set competitive offers.</p>
          <Link href="/salary-insights"><a className="mt-2 inline-block rounded bg-emerald-600 text-white px-3 py-2 text-sm">Open Salary Insights</a></Link>
        </div>

        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <h3 className="font-medium">Operate</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Manage content, verify users, download CSVs.</p>
          <Link href="/admin"><a className="mt-2 inline-block rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm">Open Admin</a></Link>
        </div>
      </div>
    </div>
  );
}