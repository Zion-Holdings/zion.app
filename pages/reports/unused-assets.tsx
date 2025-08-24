import { useEffect, useState } from 'react';
import Head from 'next/head';

interface UnusedAsset {
  path: string;
  size?: string | null;
  sizeBytes?: number | null;
  modifiedAt?: string | null;
}

interface Report {
  generatedAt: string;
  totalAssets: number;
  totalUnused: number;
  unused: UnusedAsset[];
}

export default function UnusedAssetsReport() {
  const [data, setData] = useState<Report | null>(null);
  useEffect(() => {
    fetch('/reports/unused-assets.json')
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Unused Assets Report</title>
        <meta name="description" content="Automatically generated report of unused public assets." />
      </Head>
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold mb-2">Unused Assets</h1>
        <p className="text-white/70 mb-6">Automatically scanned from the public directory. Running on a 6h cadence.</p>
        {!data && <div className="text-white/70">Loading…</div>}
        {data && (
          <div>
            <div className="text-sm text-white/60 mb-4">Generated at {new Date(data.generatedAt).toLocaleString()} — {data.totalUnused} unused of {data.totalAssets} assets</div>
            <ul className="space-y-2">
              {data.unused.map((item) => (
                <li key={item.path} className="rounded border border-white/10 bg-white/5 p-3">
                  <div className="font-mono text-sm">{item.path}</div>
                  <div className="text-xs text-white/60">{item.size || (item.sizeBytes ? `${item.sizeBytes} B` : 'unknown')} {item.modifiedAt ? `• modified ${new Date(item.modifiedAt).toLocaleString()}` : ''}</div>
                </li>
              ))}
              {data.unused.length === 0 && (
                <li className="text-white/70">No unused assets found. Great job!</li>
              )}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}