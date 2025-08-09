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
        <p className="text-sm text-gray-600 dark:text-gray-400">Runs in GitHub Actions on a schedule. Generates insights and commits updates without human intervention.</p>
      </div>

      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
        <h2 className="font-semibold mb-3">Recent Automation Logs</h2>
        <ul className="space-y-2 text-sm">
          {logs.length === 0 && <li className="text-gray-500">No logs yet. The workflow will generate logs on schedule.</li>}
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