import Head from 'next/head';

export default function RoadmapReport() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Autonomous Roadmap</title>
        <meta name="description" content="Auto-generated roadmap of cloud automations." />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold mb-2">Autonomous Roadmap</h1>
        <p className="text-white/70 mb-4">Generated from live schedules and functions. Updated continuously by cloud automations.</p>
        <div className="space-x-3 mb-8">
          <a className="rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 font-semibold" href="/.netlify/functions/roadmap-curator">Run Curator</a>
          <a className="rounded-md border border-white/15 bg-white/5 px-4 py-2" href="/docs/ROADMAP.md">View Markdown</a>
        </div>
        <div className="text-white/70">
          If the markdown is not yet generated, use “Run Curator” and refresh.
        </div>
      </main>
    </div>
  );
}