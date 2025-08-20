import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems — Zion Tech Group</title>
        <meta name="description" content="Explore Zion's redundancy systems, AI automation, and build orchestration capabilities with quick links to docs and latest updates." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">Automation Systems</h1>
            <p className="mt-4 text-white/85 max-w-3xl mx-auto">Discover our redundancy platforms, AI-driven content and orchestration engines, and continuous build systems.</p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-cyan-400 mb-3">Redundancy Systems</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>• Ultimate Redundancy V2</li>
                <li>• Comprehensive Redundancy</li>
                <li>• PM2 Process Management</li>
              </ul>
              <div className="flex gap-4 text-sm">
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY_V2.md" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">V2 Guide ↗</a>
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_COMPREHENSIVE_REDUNDANCY.md" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Comprehensive ↗</a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-fuchsia-400 mb-3">AI Automation</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>• AI Trends Research</li>
                <li>• Content Generation</li>
                <li>• Intelligent Orchestration</li>
              </ul>
              <div className="flex gap-4 text-sm">
                <Link href="/blog/ai-automation-trends-2025" className="text-fuchsia-300 hover:text-fuchsia-200">Trends →</Link>
                <Link href="/blog/autonomous-content-generation" className="text-fuchsia-300 hover:text-fuchsia-200">Content Factory →</Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-green-400 mb-3">Build & Deploy</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>• Smart Build Orchestration</li>
                <li>• Self-Healing CI/CD</li>
                <li>• Performance Optimization</li>
              </ul>
              <div className="flex gap-4 text-sm">
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_GITHUB_ACTIONS.md" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200">CI/CD ↗</a>
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/PERFORMANCE.md" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200">Performance ↗</a>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              </Link>
            </div>
          </section>

          <section className="text-center mt-14">
            <Link href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all">← Back to Home</Link>
          </section>
        </main>
      </div>
    </>
  );
}

