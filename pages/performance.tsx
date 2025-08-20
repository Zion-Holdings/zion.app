import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PerformancePage() {
  return (
    <>
      <Head>
        <title>Performance & Monitoring — Zion Tech Group</title>
        <meta name="description" content="Real‑time monitoring, performance optimization, and predictive maintenance across autonomous systems." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Performance & Monitoring</h1>
            <p className="mt-4 text-white/85 max-w-3xl mx-auto">We track, optimize, and predict system behavior to deliver consistently fast and reliable experiences worldwide.</p>
          </section>

          <section className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <h2 className="text-green-400 font-semibold mb-3">Foundations</h2>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Edge delivery & CDN</li>
                <li>• Code splitting & caching</li>
                <li>• Image optimization</li>
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <h2 className="text-green-400 font-semibold mb-3">Monitoring</h2>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Real‑time health checks</li>
                <li>• Synthetic tests & budgets</li>
                <li>• Error & latency alerts</li>
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <h2 className="text-green-400 font-semibold mb-3">Optimization</h2>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Automatic regressions catcher</li>
                <li>• Predictive scaling</li>
                <li>• Continuous tuning</li>
              </ul>
            </div>
          </section>

          <section className="mx-auto max-w-5xl mt-10 text-center">
            <Link href="https://github.com/Zion-Holdings/zion.app/blob/main/PERFORMANCE.md" className="text-green-300 hover:text-green-200 font-semibold">
              Explore Performance practices →
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}

