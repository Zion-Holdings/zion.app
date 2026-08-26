export const metadata = {
  title: 'AI Data Pipeline — Zion Tech Group',
  description: 'AI data pipeline services: ingestion, transformation, vectorization, and governed data products.',
  alternates: { canonical: '/services/ai-data-pipeline/' },
};

export default function AiDataPipelinePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-white">AI Data Pipeline</h1>
      <p className="mt-2 text-slate-300">
        Build production data pipelines for AI workloads with governance, quality, and latency controls.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Ingestion</h2>
          <p className="mt-2 text-sm text-slate-300">
            Batch, streaming, and change-data-capture ingestion with schema enforcement and retries.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Transformation</h2>
          <p className="mt-2 text-sm text-slate-300">
            Cleaning, enrichment, normalization, and feature engineering for downstream models.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Vectorization</h2>
          <p className="mt-2 text-sm text-slate-300">
            Embedding generation, chunking strategies, and indexing for retrieval and RAG systems.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Governed Data Products</h2>
          <p className="mt-2 text-sm text-slate-300">
            Publish datasets with contracts, freshness SLAs, and ownership for internal and external consumers.
          </p>
        </div>
      </div>
    </div>
  );
}
