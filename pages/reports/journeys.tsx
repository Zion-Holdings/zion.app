import Head from 'next/head';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const dataPath = path.resolve(process.cwd(), 'data', 'journeys.json');
  let report: any = null;
  try {
    const raw = fs.readFileSync(dataPath, 'utf8');
    report = JSON.parse(raw);
  } catch {}
  return { props: { report } };
}

export default function JourneysReport({ report }: { report: any }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>User Journeys Report</title>
        <meta name="description" content="Simulated user journeys across the site." />
      </Head>
      <main className="mx-auto max-w-5xl p-6">
        <h1 className="text-2xl font-semibold">User Journeys Report</h1>
        {!report && <p className="mt-4 text-white/70">No data yet. Trigger the runner to generate journeys.</p>}
        {report && (
          <div className="mt-6 space-y-4">
            <div className="text-sm text-white/60">Generated at {report.generatedAt}</div>
            <div className="text-sm text-white/70">Start routes: {report.starts.join(', ')}</div>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
              {report.journeys.map((trail: string[], idx: number) => (
                <div key={idx} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm">
                  {trail.map((step, i) => (
                    <span key={i}>
                      {i > 0 && <span className="text-white/40"> → </span>}
                      <a className="underline hover:text-cyan-300" href={step}>{step}</a>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}