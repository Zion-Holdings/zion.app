import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI | Zion Tech Group',
  description: 'Zion Tech Group AI services and solutions.',
  openGraph: {
    title: 'Page',
    description: 'Zion Tech Group AI services and solutions.' /* FIXME */,
    url: 'https://ziontechgroup.com',
    type: 'website',
  },
  alternates: { canonical: '/ai/' },
};

export default function AiPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI</h1>
      <p className="text-slate-300 text-lg leading-relaxed mb-8">
        Production AI services: assistants, automation, evaluation, and governed rollout.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">AI assistants</h3>
          <p className="text-slate-400 text-sm">Support, ops, and internal tooling assistants grounded in your data.</p>
          <Link href="/ai-services" className="text-purple-300 text-xs font-semibold mt-3 inline-block">AI Services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Autonomous operations</h3>
          <p className="text-slate-400 text-sm">Workflows, triage, and routing with measurable deflection and faster resolution.</p>
          <Link href="/services" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Evaluation & safety</h3>
          <p className="text-slate-400 text-sm">Prompt testing, guardrails, and production review loops.</p>
          <Link href="/contact" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Talk to us →</Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <Link href="/contact" className="btn-primary text-center">Start an AI project</Link>
        <Link href="/services" className="btn-secondary text-center">Browse Services</Link>
      </div>
    </div>
  );
}
