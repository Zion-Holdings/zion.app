import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PerformancePage() {
  return (
    <>
      <Head>
        <title>Performance & Monitoring | Zion Tech Group</title>
        <meta name="description" content="Real-time monitoring, performance optimization, and predictive maintenance." />
        <meta property="og:title" content="Performance & Monitoring" />
        <meta property="og:description" content="Real-time monitoring, performance optimization, and predictive maintenance." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Performance & Monitoring</h1>
            <p className="text-white/80 max-w-3xl mx-auto">Real-time metrics, analytics dashboards, and proactive health monitoring.
            </p>
          </section>

          <section className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-green-300 mb-3">Key Features</h2>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Real-time monitoring</li>
                <li>• Performance optimization</li>
                <li>• Alerting & incident response</li>
                <li>• Predictive maintenance</li>
                <li>• Analytics dashboards</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-green-300 mb-3">Resources</h2>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>
                  <a className="text-green-300 hover:text-green-200" href="https://github.com/Zion-Holdings/zion.app/blob/main/PERFORMANCE.md" target="_blank" rel="noreferrer">Performance Guide on GitHub →</a>
                </li>
                <li>
                  <Link className="text-cyan-300 hover:text-cyan-200" href="/reports">Reports & Analytics →</Link>
                </li>
              </ul>
            </div>
          </section>

          <div className="text-center mt-10">
            <Link href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all">Back to Home</Link>
          </div>
        </main>
      </div>
    </>
  );
}

