import Head from 'next/head';

export default function InsightPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Guide: RAG Platforms</title>
        <meta name="description" content="Patterns to improve reliability." />
        <meta property="og:title" content="Guide: RAG Platforms" />
        <meta property="og:description" content="Patterns to improve reliability." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="container mx-auto px-6 py-12 prose prose-invert">
        <h1 className="text-3xl font-extrabold">Guide: RAG Platforms</h1>
        <p className="text-white/70">Patterns to improve reliability.</p>
        <ul className="mt-6 list-disc pl-6 space-y-2">
          <li>Scope: Guide: RAG Platforms.</li>
          <li>Signals: AI Services.</li>
          <li>Architecture: ingestion → retrieval → reasoning → evaluation.</li>
          <li>Ops: observability, rollback, SLOs, security.</li>
        </ul>
        <p className="mt-6">More at <a className="text-cyan-300 underline" href="https://ziontechgroup.com" target="_blank" rel="noopener">ziontechgroup.com</a>.</p>
      </main>
    </div>
  );
}

<Link href="/reports/blueprints/blueprint-2025-08-18-122901" className="internal-link">Related Content</Link>

<Link href="/reports/blueprints/blueprint-2025-08-18-122931" className="internal-link">Related Content</Link>

<Link href="/reports/blueprints/blueprint-2025-08-18-122952" className="internal-link">Related Content</Link>
