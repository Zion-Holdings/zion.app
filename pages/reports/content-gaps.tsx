import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function ContentGapsReport() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/reports/content-gaps/latest.json').then(r => r.json()).then(setData).catch(()=>{});
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Content Gap Finder — Reports</title>
        <meta name="description" content="Autonomous keyword analysis to suggest missing content topics." />
      </Head>
      <main className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-2xl font-bold">Content Gap Finder</h1>
        <p className="mt-1 text-sm text-white/70">Generated at {data?.generatedAt || '—'}</p>
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Suggested Topics</h2>
          <ol className="mt-2 list-decimal pl-5 text-white/80">
            {(data?.suggestedTopics || []).map((t: any, idx: number) => <li key={idx}><span className="font-semibold">{t.term}</span> <span className="text-white/60">({t.count})</span></li>)}
          </ol>
        </section>
      </main>
    </div>
  );
}