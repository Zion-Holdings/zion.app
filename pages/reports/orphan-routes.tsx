import { useEffect, useState } from 'react';
import Head from 'next/head';

interface Report {
  generatedAt: string;
  totalRoutes: number;
  seeds: string[];
  reachableCount: number;
  orphanCount: number;
  orphans: string[];
}

export default function OrphanRoutesReport() {
  const [data, setData] = useState<Report | null>(null);
  useEffect(() => {
    fetch('/reports/orphan-routes.json')
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Orphan Routes Report</title>
        <meta name="description" content="Automatically generated report of pages not linked from key routes." />
      </Head>
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold mb-2">Orphan Routes</h1>
        <p className="text-white/70 mb-6">Pages not reachable from seed routes via internal links. Running on a 6h cadence.</p>
        {!data && <div className="text-white/70">Loading…</div>}
        {data && (
          <div>
            <div className="text-sm text-white/60 mb-4">Generated at {new Date(data.generatedAt).toLocaleString()} — {data.orphanCount} orphans of {data.totalRoutes} routes</div>
            <div className="text-xs text-white/60 mb-3">Seeds: {data.seeds.join(', ')}</div>
            <ul className="space-y-2">
              {data.orphans.map((r) => (
                <li key={r} className="rounded border border-white/10 bg-white/5 p-3 font-mono text-sm">{r}</li>
              ))}
              {data.orphans.length === 0 && (
                <li className="text-white/70">No orphan routes detected.</li>
              )}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}