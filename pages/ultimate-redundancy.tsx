import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function UltimateRedundancyPage() {
  return (
    <>
      <Head>
        <title>Ultimate Redundancy | Zion Tech Group</title>
        <meta name="description" content="Multi-layer failover, geographic distribution, and self-healing infrastructure." />
        <meta property="og:title" content="Ultimate Redundancy" />
        <meta property="og:description" content="Multi-layer failover, geographic distribution, and self-healing infrastructure." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Ultimate Redundancy</h1>
            <p className="text-white/80 max-w-3xl mx-auto">Engineered for zero-downtime operations with automatic failover and proactive recovery.</p>
          </section>

          <section className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-cyan-300 mb-3">Highlights</h2>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Multi-layer failover systems</li>
                <li>• Geographic distribution</li>
                <li>• Automatic recovery</li>
                <li>• Health monitoring</li>
                <li>• Self-healing infrastructure</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-cyan-300 mb-3">Resources</h2>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>
                  <a className="text-cyan-300 hover:text-cyan-200" href="https://github.com/Zion-Holdings/zion.app/blob/main/README_REDUNDANCY_AUTOMATION.md" target="_blank" rel="noreferrer">Redundancy Automation Guide →</a>
                </li>
                <li>
                  <a className="text-cyan-300 hover:text-cyan-200" href="https://github.com/Zion-Holdings/zion.app/blob/main/ULTIMATE_REDUNDANCY_IMPLEMENTATION_SUMMARY.md" target="_blank" rel="noreferrer">Implementation Summary →</a>
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

