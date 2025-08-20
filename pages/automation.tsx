import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's autonomous systems: redundancy, AI automation, smart builds, and continuous operations." />
        <meta property="og:title" content="Automation Systems | Zion Tech Group" />
        <meta property="og:description" content="Autonomous redundancy, AI content, build orchestration, and reliability." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Autonomous Systems
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A unified view of our redundancy, AI automation, and build orchestration capabilities.
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Redundancy Systems</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Ultimate Redundancy V2</li>
                  <li>• Comprehensive Redundancy</li>
                  <li>• PM2 Process Management</li>
                  <li>• GitHub Actions Redundancy</li>
                  <li>• Netlify Functions Redundancy</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY_V2.md" className="text-cyan-300 hover:text-cyan-200 text-sm font-semibold" target="_blank" rel="noopener noreferrer">Ultimate Redundancy V2 →</a>
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_COMPREHENSIVE_REDUNDANCY.md" className="text-cyan-300 hover:text-cyan-200 text-sm font-semibold" target="_blank" rel="noopener noreferrer">Comprehensive Redundancy →</a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">AI Automation</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• AI Trends Research</li>
                  <li>• Content Generation</li>
                  <li>• Intelligent Orchestration</li>
                  <li>• Autonomous Agents</li>
                  <li>• Innovation Systems</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link href="/blog" className="text-fuchsia-300 hover:text-fuchsia-200 text-sm font-semibold">Read Blog →</Link>
                  <Link href="/resources" className="text-fuchsia-300 hover:text-fuchsia-200 text-sm font-semibold">Explore Resources →</Link>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-green-400">Build & Deploy</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Smart Build Orchestration</li>
                  <li>• Continuous Monitoring</li>
                  <li>• Self-Healing Systems</li>
                  <li>• Performance Optimization</li>
                  <li>• Quality Assurance</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_GITHUB_ACTIONS.md" className="text-green-300 hover:text-green-200 text-sm font-semibold" target="_blank" rel="noopener noreferrer">CI/CD Guide →</a>
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/PERFORMANCE.md" className="text-green-300 hover:text-green-200 text-sm font-semibold" target="_blank" rel="noopener noreferrer">Performance →</a>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-6 text-white/90 text-center">Recent Autonomous Updates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

