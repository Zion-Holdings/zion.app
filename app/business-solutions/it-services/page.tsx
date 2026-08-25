
import Link from 'next/link';
export const metadata = { title: 'IT Services — Zion Tech Group', description: 'Managed IT services from Zion Tech Group: cloud, cybersecurity, platform engineering, support, and infrastructure modernization.' , alternates: { canonical: 'https://ziontechgroup.com/business-solutions/it-services/' } };

const items = [
  { title: 'Managed IT', desc: 'Support and operations with clear SLAs, incident response, and cost predictability.' },
  { title: 'Cloud & Infrastructure', desc: 'Migration, landing zones, FinOps, and multi-cloud operations with guardrails.' },
  { title: 'Cybersecurity', desc: 'Security controls, monitoring, incident readiness, and audit evidence automation.' },
  { title: 'Platform Engineering', desc: 'Internal developer platforms, CI/CD at scale, and reusable infrastructure patterns.' },
  { title: 'Support Optimization', desc: 'Tiered support, ticket intelligence, and self-service tooling to reduce load.' },
];

export default function ITServices() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">IT Services</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">IT Services</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Reliable IT operations and modernization services with predictable cost, measurable outcomes, and clear governance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://ziontechgroup.com" className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-500">Free services and tools</Link>
            <Link href="/business-solutions" className="rounded-xl border border-purple-500/30 px-5 py-3 text-sm font-semibold text-purple-200 hover:bg-purple-500/10">All solutions</Link>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-white">Service areas</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-purple-500/20 bg-slate-900/60 p-6">
            <p className="text-sm text-slate-300">Evaluate our tools and service patterns for free at <a href="https://ziontechgroup.com" className="text-purple-300 underline">ziontechgroup.com</a>. If useful, we can propose a concrete implementation roadmap instead of a generic pitch.</p>
            <div className="mt-4"><Link href="/contact" className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-500">Request proposal</Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
