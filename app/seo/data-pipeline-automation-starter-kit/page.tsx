import type { Metadata } from "next";

export const metadata = {
  title: "Data Pipeline Automation Starter Kit | Zion Tech Group",
  description: "A practical starter kit for data pipeline automation: ingestion, quality, orchestration, and observability.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Data Pipeline Automation Starter Kit</h1>
        <p className="text-slate-400 mb-6">A practical starter kit for data pipeline automation: ingestion, quality, orchestration, and observability.</p>
        <ul className="list-disc pl-6 space-y-2 mb-8"><li>Ingestion and connector patterns</li><li>Schema and data quality checks</li><li>Orchestration with retry and backpressure</li><li>Operational dashboards and alerts</li></ul>
        <div className="flex flex-wrap gap-4">
          <a href="https://calendly.com/kleber-ziontechgroup" className="text-emerald-400 underline">Get the starter kit</a>
          <a href="https://ziontechgroup.com" className="text-purple-400 underline">Visit ziontechgroup.com</a>
        </div>
      </div>
    </main>
  );
}
