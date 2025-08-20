import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's advanced automation systems: redundancy, AI content, build orchestration, monitoring, and security." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Advanced Automation Systems
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A unified view of our redundancy architecture, AI automation, build orchestration, monitoring, and security capabilities.
            </p>
          </header>

          <section className="mx-auto max-w-7xl px-0 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 text-center">🔄 Redundancy Systems</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Ultimate Redundancy V2</li>
                  <li>• Comprehensive Redundancy</li>
                  <li>• PM2 Process Management</li>
                  <li>• GitHub Actions Redundancy</li>
                  <li>• Netlify Functions Redundancy</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY_V2.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">Read V2 Overview →</a>
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_COMPREHENSIVE_REDUNDANCY.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">Comprehensive Guide →</a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🧠 AI Automation</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• AI Trends Research</li>
                  <li>• Content Generation</li>
                  <li>• Intelligent Orchestration</li>
                  <li>• Autonomous Agents</li>
                  <li>• Innovation Systems</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link href="/blog" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">Read Insights →</Link>
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/EXPONENTIAL_GROWTH_AUTOMATION.md" target="_blank" rel="noopener noreferrer" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">Growth Automation →</a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-green-400 mb-4 text-center">⚡ Build & Deploy</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Smart Build Orchestration</li>
                  <li>• Continuous Monitoring</li>
                  <li>• Self-Healing Systems</li>
                  <li>• Performance Optimization</li>
                  <li>• Quality Assurance</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_GITHUB_ACTIONS.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm font-semibold">CI/CD Guide →</a>
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/PERFORMANCE.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm font-semibold">Performance Guide →</a>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center mx-auto max-w-4xl px-0 pb-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Explore Services and Resources</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300">AI Services</Link>
                <Link href="/resources" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300">Resources</Link>
                <Link href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300">Contact</Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

