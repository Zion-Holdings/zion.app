import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems — Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's autonomous systems: redundancy, AI content, build orchestration, monitoring, and security." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Autonomous Systems
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto">
              A unified suite of intelligent, self-healing automation layers that power zero-downtime operations, continuous improvement, and enterprise-grade reliability.
            </p>
          </section>

          <section className="mx-auto max-w-7xl px-0 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-cyan-400 mb-3">🔄 Redundancy Systems</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Ultimate Redundancy V2</li>
                  <li>• Comprehensive Redundancy</li>
                  <li>• GitHub Actions & Netlify Redundancy</li>
                  <li>• PM2 Process Management</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a className="text-cyan-300 hover:text-cyan-200 text-sm" href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY_V2.md" target="_blank" rel="noopener noreferrer">Ultimate Redundancy V2 →</a>
                  <a className="text-cyan-300 hover:text-cyan-200 text-sm" href="https://github.com/Zion-Holdings/zion.app/blob/main/README_COMPREHENSIVE_REDUNDANCY.md" target="_blank" rel="noopener noreferrer">Comprehensive →</a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-fuchsia-400 mb-3">🧠 AI Content & Orchestration</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Autonomous content generation</li>
                  <li>• Intelligent scheduling</li>
                  <li>• Continuous optimization</li>
                  <li>• Innovation agents</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a className="text-fuchsia-300 hover:text-fuchsia-200 text-sm" href="https://github.com/Zion-Holdings/zion.app/blob/main/EXPONENTIAL_GROWTH_AUTOMATION.md" target="_blank" rel="noopener noreferrer">Growth Automation →</a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-green-400 mb-3">⚡ Build & Delivery</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Smart build orchestration</li>
                  <li>• Self-healing CI/CD</li>
                  <li>• Performance optimization</li>
                  <li>• Quality assurance</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a className="text-green-300 hover:text-green-200 text-sm" href="https://github.com/Zion-Holdings/zion.app/blob/main/README_GITHUB_ACTIONS.md" target="_blank" rel="noopener noreferrer">GitHub Actions →</a>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center mt-10">
            <div className="inline-flex flex-wrap justify-center gap-3">
              <Link href="/" className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all">Back to Home</Link>
              <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all">Talk to Us</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

