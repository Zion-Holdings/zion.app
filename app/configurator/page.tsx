import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Configurator | Zion Tech Group',
  description: 'Configure your IT and AI stack with Zion Tech Group.',
  alternates: { canonical: '/configurator/' },
};

export default function ConfiguratorPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Configurator</h1>
        <p className="mt-4 text-slate-400">Answer a few questions and we will design a recommended stack for your environment.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link href="/consultation/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">Start configuration</h2>
            <p className="mt-2 text-sm text-slate-400">Continue with guided recommendations.</p>
          </Link>
          <Link href="/contact/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">Talk to an engineer</h2>
            <p className="mt-2 text-sm text-slate-400">Request a tailored architecture review.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
