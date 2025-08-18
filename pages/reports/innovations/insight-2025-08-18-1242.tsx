import Head from 'next/head';

export default function InsightPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Pilot Plan: LLM Apps</title>
        <meta name="description" content="Patterns to enhance security." />
        <meta property="og:title" content="Pilot Plan: LLM Apps" />
        <meta property="og:description" content="Patterns to enhance security." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="container mx-auto px-6 py-12 prose prose-invert">
        <h1 className="text-3xl font-extrabold">Pilot Plan: LLM Apps</h1>
        <p className="text-white/70">Patterns to enhance security.</p>
        <ul className="mt-6 list-disc pl-6 space-y-2">
          <li>Scope: Pilot Plan: LLM Apps.</li>
          <li>Signals: AI Services.</li>
          <li>Architecture: ingestion → retrieval → reasoning → evaluation.</li>
          <li>Ops: observability, rollback, SLOs, security.</li>
        </ul>
        <p className="mt-6">More at <a className="text-cyan-300 underline" href="https://ziontechgroup.com" target="_blank" rel="noopener">ziontechgroup.com</a>.</p>
      </main>
    </div>
  );
}



