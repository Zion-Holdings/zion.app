import { useEffect, useState } from 'react';

export default function ReportsPage() {
  const [reports, setReports] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/reports').then((r) => r.json()).then((d) => setReports(d.data || []));
  }, []);
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold">Autonomous Reports</h1>
        <p className="text-gray-400 mt-2">Generated continuously by cloud automations.</p>
        <div className="mt-6 space-y-3">
          {reports.map((r) => (
            <div key={r.name} className="bg-gray-900 border border-gray-800 rounded p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-gray-400">Updated {new Date(r.mtime).toLocaleString()} • {Math.round(r.size/1024)} KB</div>
                  {r.summary && <pre className="text-xs text-gray-500 mt-2 whitespace-pre-wrap break-words">{r.summary}</pre>}
                </div>
                <a className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded" href={`/api/reports/${encodeURIComponent(r.name)}`} target="_blank" rel="noreferrer">View</a>
              </div>
            </div>
          ))}
          {reports.length === 0 && <div className="text-gray-400 text-sm">No reports yet. Check back soon.</div>}
        </div>
      </div>
    </div>
  );
}