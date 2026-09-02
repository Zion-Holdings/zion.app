export const metadata = {
  title: 'Cloud Cost Optimization — Zion Tech Group',
  description: 'Cloud cost optimization services: FinOps, resource rightsizing, commitment strategy, and spend governance.',
  alternates: { canonical: '/services/cloud-cost-optimization/' },
};

export default function CloudCostOptimizationPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-white">Cloud Cost Optimization</h1>
      <p className="mt-2 text-slate-300">
        Reduce cloud waste without sacrificing performance or reliability.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">FinOps Practice</h2>
          <p className="mt-2 text-sm text-slate-300">
            Budgeting, forecasting, accountability models, and executive reporting for cloud spend.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Rightsizing</h2>
          <p className="mt-2 text-sm text-slate-300">
            Analyze utilization and resize workloads to match real demand and SLA requirements.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Commitment Strategy</h2>
          <p className="mt-2 text-sm text-slate-300">
            Reserved instances, savings plans, and workload placement for maximum return.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Spend Governance</h2>
          <p className="mt-2 text-sm text-slate-300">
            Policies, alerts, and anomaly detection to prevent budget overruns and surprise bills.
          </p>
        </div>
      </div>
    </div>
  );
}
