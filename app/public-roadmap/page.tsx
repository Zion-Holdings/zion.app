import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Public Roadmap | Zion Tech Group',
  description: 'Zion Tech Group public roadmap, planned releases, and platform direction.',
  alternates: { canonical: '/public-roadmap/' },
};

export default function PublicRoadmapPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Public Roadmap</h1>
      <p className="text-slate-300 text-lg leading-relaxed mb-8">
        See what we’re building next and share feedback so we can prioritize the right improvements.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Platform</h3>
          <p className="text-slate-400 text-sm">Core reliability, observability, and developer experience improvements.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">AI services</h3>
          <p className="text-slate-400 text-sm">New assistants, evaluation tooling, and governed rollout patterns.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Customer experience</h3>
          <p className="text-slate-400 text-sm">Faster onboarding, clearer reporting, and easier procurement flows.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <Link href="/contact" className="btn-primary text-center">Share feedback</Link>
        <Link href="/services" className="btn-secondary text-center">Explore services</Link>
      </div>
    </div>
  );
}
