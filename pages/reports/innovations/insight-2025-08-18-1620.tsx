import Head from 'next/head';

export default function InsightPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Guide: Edge AI</title>
        <meta name="description" content="Patterns to improve reliability." />
        <meta property="og:title" content="Guide: Edge AI" />
        <meta property="og:description" content="Patterns to improve reliability." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="container mx-auto px-6 py-12 prose prose-invert">
        <h1 className="text-3xl font-extrabold">Guide: Edge AI</h1>
        <p className="text-white/70">Patterns to improve reliability.</p>
        <ul className="mt-6 list-disc pl-6 space-y-2">
          <li>Scope: Guide: Edge AI.</li>
          <li>Signals: AI Services.</li>
          <li>Architecture: ingestion → retrieval → reasoning → evaluation.</li>
          <li>Ops: observability, rollback, SLOs, security.</li>
        </ul>
        <p className="mt-6">More at <a className="text-cyan-300 underline" href="https://ziontechgroup.com" target="_blank" rel="noopener">ziontechgroup.com</a>.</p>
      </main>
    </div>
  );
}
