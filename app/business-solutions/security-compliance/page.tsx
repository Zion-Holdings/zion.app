
import Link from 'next/link';
export const metadata = { title: 'Security & Compliance — Zion Tech Group', description: 'Security and compliance services from Zion Tech Group: monitoring, controls, incident readiness, audit evidence, and risk reduction.' , alternates: { canonical: 'https://ziontechgroup.com/business-solutions/security-compliance/' } };

const items = [
  { title: 'Security Controls', desc: 'Access controls, identity hygiene, logging, and prevention patterns that reduce incident severity.' },
  { title: 'Incident Readiness', desc: 'Runbooks, triage automation, and post-incident review loops for faster recovery.' },
  { title: 'Audit Evidence', desc: 'Collect, organize, and export compliance evidence without brittle manual reports.' },
  { title: 'Risk Reduction', desc: 'Assess priority risk by blast radius, likelihood, and detection coverage.' },
];

export default function SecurityCompliance() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Security & Compliance</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Security & Compliance</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Measured security programs with audit-ready evidence and faster incident recovery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://ziontechgroup.com" className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-500">Free security resources</Link>
            <Link href="/business-solutions" className="rounded-xl border border-purple-500/30 px-5 py-3 text-sm font-semibold text-purple-200 hover:bg-purple-500/10">All solutions</Link>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-white">What we deliver</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-purple-500/20 bg-slate-900/60 p-6">
            <p className="text-sm text-slate-300">Use our free tools and templates at <a href="https://ziontechgroup.com" className="text-purple-300 underline">ziontechgroup.com</a>, then request a focused implementation plan.</p>
            <div className="mt-4"><Link href="/contact" className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-500">Request proposal</Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
