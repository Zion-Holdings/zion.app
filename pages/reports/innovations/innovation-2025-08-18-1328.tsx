import Head from 'next/head';

export default function InnovationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Playbook — MLOps & Observability</title>
        <meta name="description" content="Autonomously generated innovations content." />
        <meta property="og:title" content="Playbook — MLOps & Observability" />
        <meta property="og:description" content="Innovative, useful guidance to enhance security and compliance." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="container mx-auto px-6 py-12 prose prose-invert">
        <h1 className="text-3xl font-extrabold">Playbook — MLOps & Observability</h1>
        <p className="text-white/70">Innovative, useful guidance to enhance security and compliance.</p>
        <ul className="mt-6 list-disc pl-6 space-y-2">
          <li>Scope and objectives: Playbook for MLOps & Observability.</li>
          <li>Key components: ingestion, processing, models, evaluation, and governance.</li>
          <li>Design notes informed by: Cloud Architecture.</li>
          <li>Expected impact: enhance security and compliance.</li>
          <li>Next steps: pilot, measure, and harden for production.</li>
        </ul>
        <p className="mt-6">Learn more at <a className="text-cyan-300 underline" href="https://ziontechgroup.com" target="_blank" rel="noopener">https://ziontechgroup.com</a>.</p>
      </main>
    </div>
  );
}
