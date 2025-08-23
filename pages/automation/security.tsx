import { useEffect, useState } from 'react';

type Section = { type: string; issues: any[] };

type Report = { generatedAt: string | null; score: number | null; sections: Section[] };

export default function SecurityAutomation() {
  const [report, setReport] = useState<Report>({ generatedAt: null, score: null, sections: [] });

  useEffect(() => {
    fetch('/api/reports/security').then(r => r.json()).then(setReport).catch(() => setReport({ generatedAt: null, score: null, sections: [] }));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Security Scanner</h1>
        <p className="text-gray-600 mt-2">Scans dependencies and code for common issues and updates this report automatically.</p>
      </div>
      {report.generatedAt ? (
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="border rounded p-4"><div className="text-gray-500">Generated</div><div className="font-semibold">{new Date(report.generatedAt).toLocaleString()}</div></div>
          <div className="border rounded p-4"><div className="text-gray-500">Score</div><div className="font-semibold">{report.score}</div></div>
          <div className="border rounded p-4"><div className="text-gray-500">Sections</div><div className="font-semibold">{report.sections.length}</div></div>
        </div>
      ) : <div className="text-sm text-gray-600">No security report yet.</div>}

      <div className="space-y-3">
        {report.sections.map((s, i) => (
          <div key={i} className="border rounded p-4 text-sm">
            <div className="font-medium mb-1">{s.type}</div>
            <ul className="space-y-1">
              {s.issues.map((iss, idx) => (
                <li key={idx}>• {iss.message || iss.description || JSON.stringify(iss)}</li>
              ))}
            </ul>
          </div>
        ))}
        {report.sections.every(s => s.issues.length === 0) && <div className="text-sm text-gray-500">No issues found.</div>}
      </div>
    </div>
  );
}