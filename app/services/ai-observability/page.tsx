export const metadata = {
  title: 'AI Observability — Zion Tech Group',
  description: 'AI observability services: monitoring, tracing, anomaly detection, and reliability insights for production AI systems.',
  alternates: { canonical: '/services/ai-observability/' },
};

export default function AiObservabilityPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-white">AI Observability</h1>
      <p className="mt-2 text-slate-300">
        Monitor production AI systems with traces, metrics, logs, and anomaly detection built for model-driven workloads.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Tracing</h2>
          <p className="mt-2 text-sm text-slate-300">
            End-to-end request tracing across agents, tools, and models for root-cause debugging.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Metrics</h2>
          <p className="mt-2 text-sm text-slate-300">
            Latency, throughput, error-rate, and cost metrics for AI pipelines and endpoints.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Anomaly Detection</h2>
          <p className="mt-2 text-sm text-slate-300">
            Drift detection, prompt-injection signals, and performance regressions with alerting.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Reliability Insights</h2>
          <p className="mt-2 text-sm text-slate-300">
            SLOs, failure budgets, and incident postmortems tailored to AI and automation workloads.
          </p>
        </div>
      </div>
    </div>
  );
}
