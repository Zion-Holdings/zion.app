import { useEffect, useState } from 'react';

type Issue = { type: string; message: string; snippet?: string };

type Entry = { file: string; issues: Issue[] };

type Audit = { summary: { generatedAt: string; filesScanned: number; filesWithIssues: number; totalIssues: number } | null; results: Entry[] };

export default function SeoAutomation() {
  const [audit, setAudit] = useState<Audit>({ summary: null, results: [] });

  useEffect(() => {
    fetch('/api/reports/seo').then(r => r.json()).then(setAudit).catch(() => setAudit({ summary: null, results: [] }));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">SEO Auditor</h1>
        <p className="text-gray-600 mt-2">Scans pages for missing alt attributes, missing H1, and thin content. Runs automatically and updates this report.</p>
      </div>
      {audit.summary ? (
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div className="border rounded p-4"><div className="text-gray-500">Generated</div><div className="font-semibold">{new Date(audit.summary.generatedAt).toLocaleString()}</div></div>
          <div className="border rounded p-4"><div className="text-gray-500">Files scanned</div><div className="font-semibold">{audit.summary.filesScanned}</div></div>
          <div className="border rounded p-4"><div className="text-gray-500">Files with issues</div><div className="font-semibold">{audit.summary.filesWithIssues}</div></div>
          <div className="border rounded p-4"><div className="text-gray-500">Total issues</div><div className="font-semibold">{audit.summary.totalIssues}</div></div>
        </div>
      ) : (
        <div className="text-sm text-gray-600">No audit yet.</div>
      )}
      <div className="space-y-3">
        {audit.results.map((r) => (
          <div key={r.file} className="border rounded p-4">
            <div className="font-medium text-sm">{r.file}</div>
            <ul className="mt-2 space-y-1 text-sm">
              {r.issues.map((i, idx) => (
                <li key={idx} className="text-gray-700">• <span className="uppercase text-xs">{i.type}</span>: {i.message}</li>
              ))}
            </ul>
          </div>
        ))}
        {audit.results.length === 0 && <div className="text-gray-500 text-sm">No issues found.</div>}
      </div>
    </div>
  );
}