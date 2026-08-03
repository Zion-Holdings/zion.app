import Link from 'next/link';

export const metadata = {
  title: 'Free Resources | Zion Tech Group',
  description: 'Download free AI, IT, and security resources: checklists, guides, and templates.',
};

export default function Page() {
  return (
    <div className="container-page py-20">
      <h1 className="text-4xl font-bold mb-4 text-white">Free Resources</h1>
      <p className="mb-6 text-slate-300">Practical guides and templates to help you evaluate and improve your operations.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Popular</h2>
          <ul className="list-disc pl-6 text-slate-300 space-y-2">
            <li>AI readiness checklist</li>
            <li>Security posture checklist</li>
            <li>Cloud cost optimization template</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Use cases</h2>
          <ul className="list-disc pl-6 text-slate-300 space-y-2">
            <li>IT operations</li>
            <li>Security teams</li>
            <li>Executive planning</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Get resources</Link>
        <Link href="/blog" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Read insights</Link>
      </div>
    </div>
  );
}
