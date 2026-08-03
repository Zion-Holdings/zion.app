import Link from 'next/link';

export const metadata = {
  title: 'Free AI Readiness Audit | Zion Tech Group',
  description: 'Get a free AI readiness audit for your business. Discover automation opportunities, gaps, and a practical 90-day roadmap.',
};

export default function Page() {
  return (
    <div className="container-page py-20">
      <h1 className="text-4xl font-bold mb-4 text-white">Free AI Readiness Audit</h1>
      <p className="mb-6 text-slate-300">Assess your current stack, data readiness, and automation potential in 24 hours.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">What you get</h2>
          <ul className="list-disc pl-6 text-slate-300 space-y-2">
            <li>Workflow and data gap analysis</li>
            <li>Priority roadmap with quick wins</li>
            <li>Tooling and integration recommendations</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Who it is for</h2>
          <p className="text-slate-300">IT leaders, operations executives, and founders evaluating AI adoption in 2026.</p>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Request audit</Link>
        <Link href="/services" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">View services</Link>
      </div>
    </div>
  );
}
