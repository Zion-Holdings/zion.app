import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Zion Tech Group',
  description:
    'Answers to the most common questions about our AI services, IT solutions, consulting, and micro-SaaS products.',
  alternates: {
    canonical: '/about/',
  },
};

export default function FaqAlias() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-slate-300 mb-6">Common questions are collected on our About page.</p>
        <a href="/about/" className="text-purple-400 hover:text-purple-300">View FAQ on About →</a>
      </div>
    </main>
  );
}
