import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AutonomyPage() {
  const [status, setStatus] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/autonomy/status.json', { cache: 'no-store' })
      .then((r) => r.ok ? r.json() : Promise.reject('Not available'))
      .then(setStatus)
      .catch(() => setError('Status not available yet. Check back soon.'));
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Autonomous Cloud Agents</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Our intelligent automations run continuously in the cloud—no servers to manage, no manual steps. They analyze, optimize, and ship updates back into this repo.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="font-semibold">Hourly Maintenance</div>
          <div className="text-sm opacity-80">Sitemap, link integrity, routine fixes</div>
        </div>
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="font-semibold">Daily Content & Design</div>
          <div className="text-sm opacity-80">Marketing content, UI evolution, responsive checks</div>
        </div>
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="font-semibold">Security & Performance</div>
          <div className="text-sm opacity-80">Scans and audits with actionable fixes</div>
        </div>
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="font-semibold">Venture Intelligence</div>
          <div className="text-sm opacity-80">Service ideas and factory updates</div>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <Link href="/docs/AUTONOMY.md"><a className="text-blue-600 hover:underline text-sm">Read full reports</a></Link>
        <Link href="/autonomy/status.json"><a className="text-blue-600 hover:underline text-sm">Raw status JSON</a></Link>
        <a href="https://github.com/Zion-Holdings/zion.app/actions" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noreferrer">Actions</a>
      </div>

      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">
        <div className="font-semibold mb-2">Latest Run</div>
        {!status && !error && <div className="text-sm opacity-70">Loading status…</div>}
        {error && <div className="text-sm text-red-600">{error}</div>}
        {status && (
          <div className="space-y-2">
            <div className="text-sm opacity-70">Generated at: {new Date(status.generatedAt).toLocaleString()}</div>
            <div className="text-sm">Summary: {status.totals.passed}/{status.totals.tasks} passed, {status.totals.failed} failed</div>
            <div className="text-sm">Duration: {(status.totals.durationMs/1000).toFixed(1)}s</div>
            <details className="mt-2">
              <summary className="cursor-pointer text-sm">Details</summary>
              <div className="mt-2 space-y-2">
                {status.results.map((r: any) => (
                  <div key={r.id} className="p-2 rounded border border-gray-200 dark:border-gray-800">
                    <div className="text-sm font-medium flex items-center justify-between">
                      <span>{r.id}</span>
                      <span className={r.success ? 'text-emerald-600' : 'text-red-600'}>{r.success ? 'OK' : 'Failed'}</span>
                    </div>
                    <div className="mt-1 text-xs opacity-70">{r.command}</div>
                  </div>
                ))}
              </div>
            </details>
          </div>
        )}
      </div>
    </div>
  );
}