import { useEffect, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export default function AutomationReports() {
  const [files, setFiles] = useState<{ name: string; path: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/automation/reports')
      .then((r) => r.json())
      .then((d) => setFiles(d.files || []))
      .catch(() => setFiles([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <EnhancedLayout>
      <div className="py-8">
        <h1 className="text-2xl font-semibold">Autonomous Cloud Reports</h1>
        <p className="opacity-70 text-sm mb-4">Latest artifacts produced by the autonomous cloud suite.</p>
        {loading ? (
          <div>Loading…</div>
        ) : files.length === 0 ? (
          <div className="text-sm opacity-70">No reports yet. The cloud suite runs every 12 hours.</div>
        ) : (
          <ul className="space-y-2">
            {files.map((f) => (
              <li key={f.name} className="p-3 border rounded-md flex items-center justify-between">
                <span>{f.name}</span>
                <a className="underline" href={`https://github.com/Zion-Holdings/zion.app/blob/main/data/autonomy/${encodeURIComponent(f.name)}`} target="_blank" rel="noreferrer">View</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </EnhancedLayout>
  );
}