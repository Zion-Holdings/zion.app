import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's autonomous systems: redundancy orchestration, AI content automation, self-healing CI/CD, and continuous monitoring." />
        <meta property="og:title" content="Automation Systems | Zion Tech Group" />
        <meta property="og:description" content="Redundancy orchestration, AI automation, build & deploy systems, and monitoring." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">← Back to Home</Link>
          </nav>

          <header className="text-center mb-14">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">Automation Systems</h1>
            <p className="text-xl text-white/85 max-w-3xl mx-auto">A unified view of our autonomous platform: multi-layer redundancy, AI-powered content and operations, self-healing CI/CD, and proactive monitoring.</p>
          </header>

          {/* Systems Overview */}
          <section className="mx-auto max-w-7xl px-0 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-cyan-400 mb-3 text-center">🔄 Redundancy Orchestration</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Ultimate Redundancy V2</li>
                  <li>• Comprehensive Redundancy</li>
                  <li>• Automatic failover & self-healing</li>
                  <li>• Multi-region distribution</li>
                  <li>• Real-time health checks</li>
                </ul>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY_V2.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold">Ultimate Redundancy V2 →</a>
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/COMPREHENSIVE_REDUNDANCY_README.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold">Comprehensive →</a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-fuchsia-400 mb-3 text-center">🧠 AI Automation</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Autonomous content generation</li>
                  <li>• Intelligent scheduling & QA</li>
                  <li>• Predictive improvements</li>
                  <li>• Agent-driven operations</li>
                  <li>• Analytics & insights</li>
                </ul>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/ULTIMATE_REDUNDANCY_AUTOMATION_README.md" target="_blank" rel="noopener noreferrer" className="text-fuchsia-400 hover:text-fuchsia-300 font-semibold">Automation README →</a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-green-400 mb-3 text-center">⚡ Build & Deploy</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Smart build orchestration</li>
                  <li>• Continuous monitoring</li>
                  <li>• Error recovery</li>
                  <li>• Performance optimization</li>
                  <li>• Zero-downtime releases</li>
                </ul>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/automation/README-BUILD-AUTOMATION.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-semibold">Build Automation →</a>
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/automation/README-REDUNDANCY-SYSTEM.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-semibold">PM2 Redundancy →</a>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Navigation */}
          <section className="mx-auto max-w-7xl pb-8">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-8">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">AI Services</h3>
                <p className="text-white/70 text-sm">Intelligent solutions for your organization</p>
              </Link>

              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Resources</h3>
                <p className="text-white/70 text-sm">Case studies, tools, and whitepapers</p>
              </Link>

              <Link href="/contact" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Get in Touch</h3>
                <p className="text-white/70 text-sm">Start your automation journey</p>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

