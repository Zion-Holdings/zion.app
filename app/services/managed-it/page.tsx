import Link from 'next/link';

export const metadata = {
  title: 'Managed IT Services | Zion Tech Group',
  description: 'Managed IT services, help desk, endpoint management, monitoring, and support automation.',
};

export default function ManagedITPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-sky-950/20 to-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h1 className="text-4xl font-bold">Managed IT Services</h1>
          <p className="mt-4 text-lg text-slate-300">Proactive support, endpoint management, monitoring, and on-call coverage.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-500 transition-colors">Request quote</Link>
            <Link href="/free-tools" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-sky-500 transition-colors">Free tools</Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-6 md:grid-cols-3">
          {['24/7 help desk','Endpoint management','Patch automation','Backup & recovery','Network monitoring','Incident response'].map(item => (
            <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-slate-400">Included in managed service tiers with SLA-backed response times.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
