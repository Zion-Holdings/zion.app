import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PM2RedundancyPage() {
  return (
    <>
      <Head>
        <title>PM2 Orchestration | Zion Tech Group</title>
        <meta name="description" content="Process management, auto-restarts, load balancing, and cluster management with PM2." />
        <meta property="og:title" content="PM2 Orchestration" />
        <meta property="og:description" content="Process management, auto-restarts, load balancing, and cluster management with PM2." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">PM2 Orchestration</h1>
            <p className="text-white/80 max-w-3xl mx-auto">Production-grade process management with monitoring, clustering, and graceful restarts.</p>
          </section>

          <section className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-yellow-300 mb-3">Highlights</h2>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Process management</li>
                <li>• Auto-restart systems</li>
                <li>• Load balancing</li>
                <li>• Performance monitoring</li>
                <li>• Cluster management</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-yellow-300 mb-3">Resources</h2>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>
                  <a className="text-yellow-300 hover:text-yellow-200" href="https://github.com/Zion-Holdings/zion.app/blob/main/README_PM2_REDUNDANCY_COMPLETE.md" target="_blank" rel="noreferrer">PM2 Redundancy Guide →</a>
                </li>
                <li>
                  <Link className="text-cyan-300 hover:text-cyan-200" href="/services">AI Services →</Link>
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

