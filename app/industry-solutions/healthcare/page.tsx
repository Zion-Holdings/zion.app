import Link from 'next/link';

export const metadata = {
  title: 'Healthcare Solutions | Zion Tech Group',
  description: 'AI and IT solutions for healthcare organizations: automation, security, and operations.',
};

export default function Page() {
  return (
    <div className="container-page py-20">
      <h1 className="text-4xl font-bold mb-4 text-white">Healthcare Solutions</h1>
      <p className="mb-6 text-slate-300">Practical AI and IT solutions for healthcare operations, compliance, and patient experience.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Capabilities</h2>
          <ul className="list-disc pl-6 text-slate-300 space-y-2">
            <li>Document automation</li>
            <li>Compliance support</li>
            <li>Operational visibility</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Outcomes</h2>
          <ul className="list-disc pl-6 text-slate-300 space-y-2">
            <li>Reduced manual work</li>
            <li>Faster intake</li>
            <li>Lower risk</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Talk to us</Link>
        <Link href="/services" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Our services</Link>
      </div>
    </div>
  );
}
