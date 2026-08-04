import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies | Zion Tech Group',
  description: 'Customer outcomes in AI, cybersecurity, and IT operations.',
  alternates: { canonical: '/case-studies/' },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Case Studies</h1>
        <p className="mt-4 text-slate-400">Real implementations with measurable results.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link href="/services/ai-cybersecurity/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">Cybersecurity response reduction</h2>
            <p className="mt-2 text-sm text-slate-400">Faster detection and automated containment.</p>
          </Link>
          <Link href="/services/ai-email-intelligence/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">Email operations recovery</h2>
            <p className="mt-2 text-sm text-slate-400">Coach, triage, and automate support workflows.</p>
          </Link>
          <Link href="/services/cloud-cost-optimization-platform/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">Cloud spend optimization</h2>
            <p className="mt-2 text-sm text-slate-400">Cut waste and improve forecasting.</p>
          </Link>
          <Link href="/services/ai-development-acceleration/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">Delivery acceleration</h2>
            <p className="mt-2 text-sm text-slate-400">Ship faster with AI-assisted engineering.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
