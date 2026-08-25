export const metadata = {
  title: 'AI Process Automation — Zion Tech Group',
  description: 'AI process automation services from Zion Tech Group: workflow digitization, routing, verification, and operational AI.',
  alternates: { canonical: '/services/ai-process-automation/' },
};

export default function AiProcessAutomationPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-white">AI Process Automation</h1>
      <p className="mt-2 text-slate-300">
        Automate repetitive workflows with deterministic AI pipelines, validation gates, and operational guardrails.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Workflow Digitization</h2>
          <p className="mt-2 text-sm text-slate-300">
            Convert paper and ad-hoc processes into auditable digital workflows with routing, SLAs, and accountability.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Operational Guardrails</h2>
          <p className="mt-2 text-sm text-slate-300">
            Add retries, fallbacks, and verification steps so automation stays safe under real-world failures.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">AI Routing</h2>
          <p className="mt-2 text-sm text-slate-300">
            Classify inputs, assign owners, and route requests with model-backed decisioning and human escalation.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Verification & QA</h2>
          <p className="mt-2 text-sm text-slate-300">
            Continuous validation of outputs, schema checks, and anomaly detection for automated pipelines.
          </p>
        </div>
      </div>
    </div>
  );
}
