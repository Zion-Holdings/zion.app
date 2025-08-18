import Head from 'next/head';

export default function InnovationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Checklist — Edge AI & IoT</title>
        <meta name="description" content="Autonomously generated innovations content." />
        <meta property="og:title" content="Checklist — Edge AI & IoT" />
        <meta property="og:description" content="Innovative, useful guidance to improve retrieval quality." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="container mx-auto px-6 py-12 prose prose-invert">
        <h1 className="text-3xl font-extrabold">Checklist — Edge AI & IoT</h1>
        <p className="text-white/70">Innovative, useful guidance to improve retrieval quality.</p>
        <ul className="mt-6 list-disc pl-6 space-y-2">
          <li>Scope and objectives: Checklist for Edge AI & IoT.</li>
          <li>Key components: ingestion, processing, models, evaluation, and governance.</li>
          <li>Design notes informed by: RAG Patterns.</li>
          <li>Expected impact: improve retrieval quality.</li>
          <li>Next steps: pilot, measure, and harden for production.</li>
        </ul>
        <p className="mt-6">Learn more at <a className="text-cyan-300 underline" href="https://ziontechgroup.com" target="_blank" rel="noopener">https://ziontechgroup.com</a>.</p>
      </main>
    </div>
  );
}



