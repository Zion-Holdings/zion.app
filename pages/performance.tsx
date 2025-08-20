import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PerformancePage() {
  return (
    <>
      <Head>
        <title>Performance & Monitoring — Zion Tech Group</title>
        <meta name="description" content="Real-time monitoring, predictive maintenance, and analytics at Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Performance & Monitoring</h1>
          <p className="text-white/80 max-w-3xl">From Lighthouse budgets to production observability, our platform is optimized for speed and stability.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/PERFORMANCE.md" className="text-green-400 hover:text-green-300 font-semibold">Open PERFORMANCE.md →</Link>
            <Link href="/lighthouse-live-report.md" className="text-cyan-400 hover:text-cyan-300 font-semibold">Lighthouse Live Report →</Link>
          </div>
          <div className="mt-10">
            <Link href="/" className="text-white/80 hover:text-white">← Back to Home</Link>
          </div>
        </main>
      </div>
    </>
  );
}

