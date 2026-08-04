import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Consultation | Zion Tech Group',
  description: 'Schedule a consultation for AI, automation, and IT strategy.',
  alternates: { canonical: '/consultation/' },
};

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Consultation</h1>
        <p className="mt-4 text-slate-400">Reserve time with our team to map priorities, risks, and opportunities.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link href="/contact/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">Request a meeting</h2>
            <p className="mt-2 text-sm text-slate-400">Share availability and goals.</p>
          </Link>
          <Link href="/configurator/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">Use the configurator</h2>
            <p className="mt-2 text-sm text-slate-400">Prepare context before your call.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
