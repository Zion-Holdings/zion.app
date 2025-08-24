import { useEffect, useState } from 'react';

type StaleReport = { generatedAt: string | null; staleCount: number; items: { file: string; lastModified: string }[] };

export default function StaleAutomation() {
  const [report, setReport] = useState<StaleReport>({ generatedAt: null, staleCount: 0, items: [] });

  useEffect(() => {
    fetch('/api/reports/stale').then(r => r.json()).then(setReport).catch(() => setReport({ generatedAt: null, staleCount: 0, items: [] }));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Stale Content Detector</h1>
        <p className="text-gray-600 mt-2">Flags content older than 30 days. Use it to refresh the site.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div className="border rounded p-4"><div className="text-gray-500">Generated</div><div className="font-semibold">{report.generatedAt ? new Date(report.generatedAt).toLocaleString() : '—'}</div></div>
        <div className="border rounded p-4"><div className="text-gray-500">Stale items</div><div className="font-semibold">{report.staleCount}</div></div>
        <div className="border rounded p-4"><div className="text-gray-500">Total listed</div><div className="font-semibold">{report.items.length}</div></div>
      </div>
      <ul className="space-y-2 text-sm">
        {report.items.map((it, idx) => (
          <li key={idx} className="border rounded p-3 flex items-center justify-between"><span className="truncate">{it.file}</span><span className="text-gray-600">{new Date(it.lastModified).toLocaleDateString()}</span></li>
        ))}
        {report.items.length === 0 && <div className="text-gray-500">No stale content.</div>}
      </ul>
    </div>
  );
}