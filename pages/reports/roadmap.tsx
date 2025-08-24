import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function RoadmapReport() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/reports/roadmap/latest.json').then(r => r.json()).then(setData).catch(()=>{});
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Roadmap (auto) — Reports</title>
        <meta name="description" content="Autonomous roadmap synthesized from TODO reports and changelog." />
      </Head>
      <main className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="text-2xl font-bold">Roadmap (auto)</h1>
        <p className="mt-1 text-sm text-white/70">Generated at {data?.generatedAt || '—'}</p>
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Near-term</h2>
          <ul className="mt-2 list-disc pl-5 text-white/80">
            {(data?.nearTerm || []).map((i: string, idx: number) => <li key={idx}>{i}</li>)}
          </ul>
        </section>
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Next</h2>
          <ul className="mt-2 list-disc pl-5 text-white/80">
            {(data?.next || []).map((i: string, idx: number) => <li key={idx}>{i}</li>)}
          </ul>
        </section>
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Later</h2>
          <ul className="mt-2 list-disc pl-5 text-white/80">
            {(data?.later || []).map((i: string, idx: number) => <li key={idx}>{i}</li>)}
          </ul>
        </section>
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Highlights</h2>
          <ul className="mt-2 list-disc pl-5 text-white/80">
            {(data?.highlights || []).map((i: string, idx: number) => <li key={idx}>{i}</li>)}
          </ul>
        </section>
      </main>
    </div>
  );
}