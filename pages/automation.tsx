import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems | Zion Tech Group</title>
        <meta name="description" content="Explore our autonomous redundancy, AI content, and build orchestration systems, with links to guides and case studies." />
        <meta property="og:title" content="Automation Systems | Zion Tech Group" />
        <meta property="og:description" content="Autonomous redundancy, AI content, and build orchestration systems." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-14">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Autonomous Automation Systems
            </h1>
            <p className="text-xl text-white/85 max-w-3xl mx-auto">
              A unified hub for redundancy, AI content generation, and build orchestration. Discover capabilities, benefits, and how to get started.
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-cyan-400 mb-3 text-center">🔄 Redundancy Systems</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>• Ultimate Redundancy V2</li>
                <li>• Comprehensive Redundancy</li>
                <li>• GitHub Actions & Netlify Redundancy</li>
                <li>• PM2 Process Management</li>
              </ul>
              <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY_V2.md" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                View Redundancy Guide →
              </a>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-fuchsia-400 mb-3 text-center">🧠 AI Content Factory</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>• Autonomous content generation</li>
                <li>• Intelligent scheduling</li>
                <li>• Quality assurance</li>
                <li>• Performance analytics</li>
              </ul>
              <a href="https://github.com/Zion-Holdings/zion.app/blob/main/ai-content-autonomy-report.md" target="_blank" rel="noreferrer" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                Learn About AI Systems →
              </a>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-green-400 mb-3 text-center">⚡ Build Orchestration</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>• Smart dependency management</li>
                <li>• Automated testing</li>
                <li>• Error recovery</li>
                <li>• Deployment automation</li>
              </ul>
              <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README-BUILD-AUTOMATION.md" target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                Build Automation Docs →
              </a>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-1">See Our Services</h3>
              <p className="text-white/70 text-sm">How we deliver automation outcomes</p>
            </Link>

            <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-fuchsia-400 mb-1">Explore Resources</h3>
              <p className="text-white/70 text-sm">Case studies, whitepapers and tools</p>
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}

