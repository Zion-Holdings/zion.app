import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems | Zion Tech Group</title>
        <meta name="description" content="Explore Zion's autonomous systems: redundancy, AI content factory, and build orchestration." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Autonomous Automation Systems
            </h1>
            <p className="text-white/80 max-w-3xl mx-auto">
              Discover our redundancy frameworks, AI-powered content factory, and self-optimizing build orchestration.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-cyan-400 mb-2">🔄 Redundancy Systems</h2>
              <p className="text-white/70 mb-4">Ultimate Redundancy V2, comprehensive failover, and real-time monitoring.</p>
              <div className="space-x-4 text-sm">
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Docs</a>
                <Link href="/reports" className="text-cyan-400 hover:text-cyan-300">Reports</Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-fuchsia-400 mb-2">🧠 AI Content Factory</h2>
              <p className="text-white/70 mb-4">Autonomous content generation, QA, and scheduling.</p>
              <div className="space-x-4 text-sm">
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/EXPONENTIAL_GROWTH_AUTOMATION.md" target="_blank" rel="noopener noreferrer" className="text-fuchsia-400 hover:text-fuchsia-300">Docs</a>
                <Link href="/blog" className="text-fuchsia-400 hover:text-fuchsia-300">Blog</Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-green-400 mb-2">⚡ Build Orchestration</h2>
              <p className="text-white/70 mb-4">Smart dependency management, error recovery, and deployment automation.</p>
              <div className="space-x-4 text-sm">
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_GITHUB_ACTIONS.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">CI/CD</a>
                <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_CONTINUOUS_OPERATION.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Continuous Operation</a>
              </div>
            </div>
          </section>

          <section className="text-center mt-12">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300">
              Talk to an Expert
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}

