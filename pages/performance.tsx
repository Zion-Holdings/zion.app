import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PerformancePage() {
  return (
    <>
      <Head>
        <title>Performance | Zion Tech Group</title>
        <meta name="description" content="Performance budgets, monitoring, and optimization strategies." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300">← Back to Home</Link>
          </nav>
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Performance</h1>
          <p className="text-white/80 max-w-3xl mb-8">We set strict performance budgets and continuously optimize for speed, reliability, and efficiency.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h2 className="text-lg font-semibold text-green-400 mb-3">Focus Areas</h2>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Lighthouse budgets compliance</li>
                <li>• Core Web Vitals optimization</li>
                <li>• Image and asset optimization</li>
                <li>• Build and runtime profiling</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h2 className="text-lg font-semibold text-green-400 mb-3">Documentation</h2>
              <ul className="text-white/80 text-sm space-y-2">
                <li><Link href="/PERFORMANCE.md" className="text-green-300 hover:text-green-200">Performance Guide →</Link></li>
                <li><Link href="/lighthouse-live-report.md" className="text-green-300 hover:text-green-200">Lighthouse Live Report →</Link></li>
                <li><Link href="/lighthouse-budgets-report.md" className="text-green-300 hover:text-green-200">Lighthouse Budgets →</Link></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

