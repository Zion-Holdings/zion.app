import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationOverviewPage() {
  return (
    <>
      <Head>
        <title>Automation Systems Overview — Zion Tech Group</title>
        <meta name="description" content="Explore our redundancy, AI automation, build orchestration, and monitoring systems." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">Automation Systems</h1>
            <p className="text-white/85 max-w-3xl mx-auto">A unified overview of our autonomous redundancy, AI content systems, build orchestration, and monitoring capabilities.</p>
          </section>

          <section className="mx-auto max-w-7xl px-6 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-cyan-400 mb-4">🔄 Redundancy Systems</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Ultimate Redundancy V2</li>
                  <li>• Comprehensive Redundancy</li>
                  <li>• GitHub Actions Redundancy</li>
                  <li>• Netlify Functions Redundancy</li>
                </ul>
                <div className="text-white/70 text-sm">Designed for 99.99% uptime with self-healing and automatic failover.</div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-fuchsia-400 mb-4">🧠 AI Automation</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• AI Trends Research</li>
                  <li>• Content Generation</li>
                  <li>• Intelligent Orchestration</li>
                  <li>• Autonomous Agents</li>
                </ul>
                <div className="text-white/70 text-sm">Autonomous content and optimization across the platform.</div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-green-400 mb-4">⚡ Build Orchestration</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Smart dependency management</li>
                  <li>• Automated testing</li>
                  <li>• Performance optimization</li>
                  <li>• Deployment automation</li>
                </ul>
                <div className="text-white/70 text-sm">End-to-end build health with recovery and optimization.</div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300">Back to Home</Link>
              <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300">Talk to Us</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

