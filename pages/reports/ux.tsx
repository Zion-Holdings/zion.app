import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function UxReport() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/reports/ux/latest.json').then(r => r.json()).then(setData).catch(()=>{});
  }, []);
  const items = data?.results || [];
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>UX Heuristics Audit — Reports</title>
        <meta name="description" content="Autonomous UX audit of titles, meta descriptions, and H1 usage." />
      </Head>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-2xl font-bold">UX Heuristics Audit</h1>
        <p className="mt-1 text-sm text-white/70">Generated at {data?.summary?.generatedAt || '—'}</p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-white/10">
          <table className="w-full text-sm">
            <thead className="bg-white/5">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Route</th>
                <th className="px-3 py-2 text-left font-semibold">Score</th>
                <th className="px-3 py-2 text-left font-semibold">Title</th>
                <th className="px-3 py-2 text-left font-semibold">Meta</th>
                <th className="px-3 py-2 text-left font-semibold">H1s</th>
              </tr>
            </thead>
            <tbody>
              {items.map((r: any) => (
                <tr key={r.file} className="border-t border-white/10">
                  <td className="px-3 py-2 text-white/80">{r.route}</td>
                  <td className="px-3 py-2 font-semibold">{r.score}</td>
                  <td className="px-3 py-2 text-white/70">{r.title || '—'}</td>
                  <td className="px-3 py-2">{r.hasDescription ? 'yes' : 'no'}</td>
                  <td className="px-3 py-2">{r.h1Count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}