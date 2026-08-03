import Link from 'next/link';

export const metadata = {
  title: 'Configurator | Zion Tech Group',
  description: 'Configure your AI, IT, or security solution stack and get a tailored recommendation.',
};

export default function Page() {
  return (
    <div className="container-page py-20">
      <h1 className="text-4xl font-bold mb-4 text-white">Solution Configurator</h1>
      <p className="mb-6 text-slate-300">Answer a few questions and get a recommended service and tooling stack.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Inputs</h2>
          <ul className="list-disc pl-6 text-slate-300 space-y-2">
            <li>Primary goal</li>
            <li>Environment</li>
            <li>Team size and skills</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Outputs</h2>
          <ul className="list-disc pl-6 text-slate-300 space-y-2">
            <li>Recommended services</li>
            <li>Tooling checklist</li>
            <li>Estimated timeline</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Start configurator</Link>
        <Link href="/services" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Browse services</Link>
      </div>
    </div>
  );
}
