import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free AI Tools',
  description:
    'Free online AI tools: ROI Calculator, Port Scanner, SSL Checker, Service Comparison, AI Service Router, and Service Recommender — no sign-up required.',
  alternates: { canonical: '/tools' },
};

export default function FreeAIToolsPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute right-[-10rem] top-32 h-[26rem] w-[26rem] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <header className="mb-16 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
            Free Online Tools
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Free AI Tools
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore our free tools and calculators. No sign-up required.
          </p>
        </header>

        <div className="mb-10 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-opacity"
          >
            View All Tools →
          </Link>
        </div>
      </div>
    </div>
  );
}
