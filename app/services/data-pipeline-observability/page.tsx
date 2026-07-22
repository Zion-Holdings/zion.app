import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Pipeline Observability | Zion Tech Group',
  description: 'End-to-end observability for data pipelines: lineage tracking, data quality alerts, SLO/error budgets, and anomaly detection.',
};

export default function DataPipelineObservabilityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Data Pipeline Observability</h1>
        <p className="mt-4 text-slate-300">
          Monitor, trace, and improve your data pipelines with production-grade observability.
          Detect schema drift, late data, SLA violations, and upstream anomalies before they impact users.
        </p>
        <ul className="mt-6 list-disc list-inside text-slate-400 space-y-2">
          <li>Automated lineage and data quality checks</li>
          <li>SLOs and error budgets for freshness/volume/quality</li>
          <li>Anomaly detection and noise reduction</li>
          <li>Incident postmortem automation</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/services" className="rounded bg-white/10 px-4 py-2 text-sm hover:bg-white/20">All services</a>
          <a href="/tools" className="rounded bg-purple-500 hover:bg-purple-600 px-4 py-2 text-sm">Free tools</a>
        </div>
      </div>
    </main>
  );
}
