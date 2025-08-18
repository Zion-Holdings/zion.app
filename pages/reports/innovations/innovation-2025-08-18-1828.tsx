import Head from 'next/head';

export default function InnovationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Playbook — Evaluation & Safety</title>
        <meta name="description" content="Autonomously generated innovations content." />
        <meta property="og:title" content="Playbook — Evaluation & Safety" />
        <meta property="og:description" content="Innovative, useful guidance to reduce latency and cost." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="container mx-auto px-6 py-12 prose prose-invert">
        <h1 className="text-3xl font-extrabold">Playbook — Evaluation & Safety</h1>
        <p className="text-white/70">Innovative, useful guidance to reduce latency and cost.</p>
        <ul className="mt-6 list-disc pl-6 space-y-2">
          <li>Scope and objectives: Playbook for Evaluation & Safety.</li>
          <li>Key components: ingestion, processing, models, evaluation, and governance.</li>
          <li>Design notes informed by: AI Services.</li>
          <li>Expected impact: reduce latency and cost.</li>
          <li>Next steps: pilot, measure, and harden for production.</li>
        </ul>
        <p className="mt-6">Learn more at <a className="text-cyan-300 underline" href="https://ziontechgroup.com" target="_blank" rel="noopener">https://ziontechgroup.com</a>.</p>
      </main>
    </div>
  );
}

<Link href="/reports/blueprints/blueprint-2025-08-18-122901" className="internal-link">Related Content</Link>

<Link href="/reports/blueprints/blueprint-2025-08-18-122931" className="internal-link">Related Content</Link>

<Link href="/reports/blueprints/blueprint-2025-08-18-122952" className="internal-link">Related Content</Link>
