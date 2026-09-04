export const metadata = {
  title: 'Data Analytics & AI — Zion Tech Group',
  description: 'Data analytics and AI services from Zion Tech Group: dashboards, forecasting, governed pipelines, and revenue-driving insight.',
  alternates: { canonical: '/services/data-analytics-ai/' },
};

export default function DataAnalyticsAiPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-white">Data Analytics & AI</h1>
      <p className="mt-2 text-slate-300">
        Turn raw data into decisions with analytics pipelines, forecasting models, and governed insight delivery.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Analytics Pipelines</h2>
          <p className="mt-2 text-sm text-slate-300">
            Ingestion, transformation, and semantic layers that make analytics reliable at scale.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Forecasting</h2>
          <p className="mt-2 text-sm text-slate-300">
            Demand, revenue, and churn forecasting with interpretable models and scenario planning.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Governance</h2>
          <p className="mt-2 text-sm text-slate-300">
            Data contracts, lineage, quality rules, and access controls for trustworthy analytics.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Decision Delivery</h2>
          <p className="mt-2 text-sm text-slate-300">
            Dashboards, alerts, and embedded insights in the tools teams already use.
          </p>
        </div>
      </div>
    </div>
  );
}
