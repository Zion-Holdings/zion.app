
import Link from 'next/link';
export const metadata = { title: 'AI Solutions — Zion Tech Group', description: 'AI solutions from Zion Tech Group: automation, copilots, document intelligence, anomaly detection, and generative AI implementations.' , alternates: { canonical: 'https://ziontechgroup.com/business-solutions/ai-solutions/' } };

const items = [
  { title: 'AI Automation', desc: 'Reduce manual work with document processing, approval flows, workflow copilots, and scheduled AI actions.' },
  { title: 'Document Intelligence', desc: 'Extract meaning from invoices, contracts, reports, and tickets with grounded retrieval augmented generation.' },
  { title: 'AI Copilots', desc: 'Internal assistants trained on company data with guardrails, usage controls, and measurable success metrics.' },
  { title: 'Anomaly Detection', desc: 'Operational alerts that learn normal patterns and reduce false positives.' },
  { title: 'Predictive Models', desc: 'Demand, churn, failure, and lead scoring models with business action hooks.' },
];

export default function AISolutions() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">AI Solutions</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">AI Solutions</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Practical AI systems that reduce cost, speed up delivery, and create new revenue. Every solution includes a pilot with success criteria and a managed handoff path.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://ziontechgroup.com" className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-500">Free tools and guides</Link>
            <Link href="/business-solutions" className="rounded-xl border border-purple-500/30 px-5 py-3 text-sm font-semibold text-purple-200 hover:bg-purple-500/10">All solutions</Link>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-white">Common AI engagements</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-purple-500/20 bg-slate-900/60 p-6">
            <p className="text-sm text-slate-300">Relevant services and tools are available for free evaluation at <a href="https://ziontechgroup.com" className="text-purple-300 underline">ziontechgroup.com</a>. If useful, we can propose a short implementation plan instead of a generic pitch.</p>
            <div className="mt-4"><Link href="/contact" className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-500">Request proposal</Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
