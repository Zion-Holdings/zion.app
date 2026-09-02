
import Link from 'next/link';
export const metadata = { title: 'Data Analytics — Zion Tech Group', description: 'Data analytics and AI services from Zion Tech Group: dashboards, forecasting, governed pipelines, and revenue-driving insight.' , alternates: { canonical: 'https://ziontechgroup.com/business-solutions/data-analytics/' } };

const items = [
  { title: 'Analytics Dashboards', desc: 'Operational dashboards with KPI tracking, drilldowns, and anomaly highlights for faster decisions.' },
  { title: 'Demand Forecasting', desc: 'Inventory, revenue, and resource planning models with explainability and action hooks.' },
  { title: 'Data Pipelines', desc: 'ELT/CDC pipelines, lineage, retries, and governance checks for reliable analytics.' },
  { title: 'Customer Analytics', desc: 'Segment behavior, churn signals, and retention playbooks with measurable uplift.' },
];

export default function DataAnalytics() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Data & Analytics</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Data & Analytics</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Turn operational data into revenue with trusted dashboards, forecasting, and governed pipelines.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://ziontechgroup.com" className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-500">Free analytics tools</Link>
            <Link href="/business-solutions" className="rounded-xl border border-purple-500/30 px-5 py-3 text-sm font-semibold text-purple-200 hover:bg-purple-500/10">All solutions</Link>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-white">Focus areas</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-purple-500/20 bg-slate-900/60 p-6">
            <p className="text-sm text-slate-300">Try our tools at <a href="https://ziontechgroup.com" className="text-purple-300 underline">ziontechgroup.com</a> while we design a short analytics roadmap for your business goals.</p>
            <div className="mt-4"><Link href="/contact" className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-500">Request proposal</Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
