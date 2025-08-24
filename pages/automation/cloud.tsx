import { useEffect, useState } from 'react';

export default function CloudAutomationHub() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/automation/cloud-logs')
      .then((r) => r.json())
      .then((d) => setLogs(d.logs || []))
      .catch(() => setLogs([]));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Autonomous Cloud Automation</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Runs scheduled workflows: roadmap synthesis, link health checks, market intelligence, sitemap refresh, and logging.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="/docs/ROADMAP.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
          <h3 className="font-semibold">Roadmap (Autonomous)</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/ROADMAP.md</p>
        </a>
        <a href="/docs/LINK_HEALTH.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
          <h3 className="font-semibold">Link Health</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/LINK_HEALTH.md</p>
        </a>
        <a href="/docs/INTELLIGENCE_DIGEST.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
          <h3 className="font-semibold">Intelligence Digest</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/INTELLIGENCE_DIGEST.md</p>
        </a>
      </div>

      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
        <h2 className="font-semibold mb-3">Recent Automation Logs</h2>
        <ul className="space-y-2 text-sm">
          {logs.length === 0 && <li className="text-gray-500">No logs yet. The workflows will generate logs on schedule.</li>}
          {logs.map((log) => (
            <li key={log.id} className="flex items-center justify-between">
              <span>{log.generatedAt || log.file}</span>
              <span className="text-gray-600">{log.insights?.theme}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">View Workflow</a>
        <a href="/api/automation/cloud-logs" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Refresh Logs</a>
      </div>
    </div>
  );
}