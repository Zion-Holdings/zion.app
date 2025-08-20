import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationLandingPage() {
  return (
    <>
      <Head>
        <title>Autonomous Automation Systems — Zion Tech Group</title>
        <meta name="description" content="Explore our autonomous automation systems: redundancy, AI content factory, smart build orchestration, proactive monitoring, and more." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Autonomous Automation Systems
            </h1>
            <p className="text-white/85 max-w-3xl mx-auto text-lg">
              A unified hub for our redundancy, AI, build, and monitoring automations. Discover how we achieve 99.99% uptime, self-heal failures, and continuously improve.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-cyan-400 mb-3">🔄 Redundancy Suite</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>• Ultimate Redundancy V2</li>
                <li>• Comprehensive Redundancy</li>
                <li>• PM2 Process Resilience</li>
                <li>• GitHub Actions Redundancy</li>
              </ul>
              <div className="flex flex-wrap gap-3 text-sm">
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY.md" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Guide</a>
                <Link href="/case-studies" className="text-cyan-300 hover:text-cyan-200">Case studies</Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-fuchsia-400 mb-3">🧠 AI Content & Insights</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>• Autonomous content generation</li>
                <li>• Trends research & analysis</li>
                <li>• Intelligent scheduling</li>
                <li>• Quality assurance</li>
              </ul>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link href="/blog" className="text-fuchsia-300 hover:text-fuchsia-200">Latest posts</Link>
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/ai-trends-radar-report.md" target="_blank" rel="noopener noreferrer" className="text-fuchsia-300 hover:text-fuchsia-200">AI Radar</a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-green-400 mb-3">⚡ Build & Delivery</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>• Smart build orchestration</li>
                <li>• Automated dependency care</li>
                <li>• Continuous validation</li>
                <li>• Zero-downtime releases</li>
              </ul>
              <div className="flex flex-wrap gap-3 text-sm">
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/GITHUB_ACTIONS_IMPROVEMENTS.md" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200">CI/CD</a>
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/PERFORMANCE.md" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200">Performance</a>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="inline-flex flex-wrap justify-center gap-4">
              <Link href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all">Back to Home</Link>
              <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all">Talk to us</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

