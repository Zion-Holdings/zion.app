import Head from 'next/head';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const dataPath = path.resolve(process.cwd(), 'data', 'related-links.json');
  let report: any = null;
  try {
    const raw = fs.readFileSync(dataPath, 'utf8');
    report = JSON.parse(raw);
  } catch {}
  return { props: { report } };
}

export default function InternalLinksReport({ report }: { report: any }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Internal Links Report</title>
        <meta name="description" content="Auto-generated related links across the site." />
      </Head>
      <main className="mx-auto max-w-5xl p-6">
        <h1 className="text-2xl font-semibold">Internal Links Report</h1>
        {!report && <p className="mt-4 text-white/70">No data yet. Trigger the runner to generate related links.</p>}
        {report && (
          <div className="mt-6 space-y-4">
            <div className="text-sm text-white/60">Generated at {report.generatedAt}</div>
            {report.pages.slice(0, 200).map((p: any) => (
              <div key={p.route} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-white font-medium">{p.title || p.route}</div>
                <div className="mt-2 text-sm text-white/70">{p.route}</div>
                <ul className="mt-2 list-disc pl-5 text-sm text-white/80">
                  {p.related.map((r: any) => (
                    <li key={r.route}>
                      <a className="underline hover:text-cyan-300" href={r.route}>{r.title || r.route}</a>
                      <span className="text-white/50"> — score {r.score}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}