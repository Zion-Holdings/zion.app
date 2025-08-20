import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's autonomous systems: redundancy, AI content factory, build orchestration, and reliability engineering." />
        <meta property="og:title" content="Automation Systems | Zion Tech Group" />
        <meta property="og:description" content="Autonomous redundancy, AI content factory, build orchestration, and reliability engineering." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">← Back to Home</Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Automation Systems</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A unified suite of self-optimizing automations that build, monitor, secure, and scale your platform with zero-downtime.
            </p>
          </header>

          <section className="mx-auto max-w-7xl mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">🔄 Redundancy Systems</h2>
                <p className="text-white/70 mb-4">Multi-layer failover with health checks, process supervision, and geo redundancy.</p>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Ultimate Redundancy V2</li>
                  <li>• PM2 process guardians</li>
                  <li>• Netlify functions redundancy</li>
                  <li>• GitHub Actions backups</li>
                </ul>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a className="text-cyan-400 hover:text-cyan-300" href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY_V2.md" target="_blank" rel="noopener noreferrer">Ultimate Redundancy V2 →</a>
                  <a className="text-cyan-400 hover:text-cyan-300" href="https://github.com/Zion-Holdings/zion.app/blob/main/README_PM2_REDUNDANCY_COMPLETE.md" target="_blank" rel="noopener noreferrer">PM2 Guide →</a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-fuchsia-400 mb-3">🧠 AI Content Factory</h2>
                <p className="text-white/70 mb-4">Autonomous content generation, continuous optimization, and publishing pipelines.</p>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• AI trends research</li>
                  <li>• Intelligent orchestration</li>
                  <li>• Quality assurance loops</li>
                </ul>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a className="text-fuchsia-400 hover:text-fuchsia-300" href="https://github.com/Zion-Holdings/zion.app/blob/main/ai-content-factory-report.md" target="_blank" rel="noopener noreferrer">Content Factory Report →</a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-green-400 mb-3">⚡ Build Orchestration</h2>
                <p className="text-white/70 mb-4">Smart builds with dependency maintenance, recovery flows, and self-healing.</p>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Pre-build health checks</li>
                  <li>• Auto lint/type fixes</li>
                  <li>• Failure recovery</li>
                  <li>• Continuous build monitor</li>
                </ul>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a className="text-green-400 hover:text-green-300" href="https://github.com/Zion-Holdings/zion.app/blob/main/COMPREHENSIVE_REDUNDANCY_README.md" target="_blank" rel="noopener noreferrer">Redundancy Overview →</a>
                  <a className="text-green-400 hover:text-green-300" href="https://github.com/Zion-Holdings/zion.app/blob/main/README_GITHUB_ACTIONS.md" target="_blank" rel="noopener noreferrer">CI/CD Guide →</a>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-white">Helpful Documentation</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-2">Core</h3>
                  <ul className="space-y-2">
                    <a className="block text-white/80 hover:text-white" href="https://github.com/Zion-Holdings/zion.app/blob/main/README.md" target="_blank" rel="noopener noreferrer">Main README</a>
                    <a className="block text-white/80 hover:text-white" href="https://github.com/Zion-Holdings/zion.app/blob/main/ARCHITECTURE.md" target="_blank" rel="noopener noreferrer">Architecture</a>
                    <a className="block text-white/80 hover:text-white" href="https://github.com/Zion-Holdings/zion.app/blob/main/API.md" target="_blank" rel="noopener noreferrer">API Docs</a>
                  </ul>
                </div>
                <div>
                  <h3 className="text-fuchsia-400 font-semibold mb-2">Operations</h3>
                  <ul className="space-y-2">
                    <a className="block text-white/80 hover:text-white" href="https://github.com/Zion-Holdings/zion.app/blob/main/DEPLOYMENT.md" target="_blank" rel="noopener noreferrer">Deployment</a>
                    <a className="block text-white/80 hover:text-white" href="https://github.com/Zion-Holdings/zion.app/blob/main/PERFORMANCE.md" target="_blank" rel="noopener noreferrer">Performance</a>
                    <a className="block text-white/80 hover:text-white" href="https://github.com/Zion-Holdings/zion.app/blob/main/README_CONTINUOUS_OPERATION.md" target="_blank" rel="noopener noreferrer">Continuous Operation</a>
                  </ul>
                </div>
                <div>
                  <h3 className="text-green-400 font-semibold mb-2">Security & QA</h3>
                  <ul className="space-y-2">
                    <a className="block text-white/80 hover:text-white" href="https://github.com/Zion-Holdings/zion.app/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer">Security</a>
                    <a className="block text-white/80 hover:text-white" href="https://github.com/Zion-Holdings/zion.app/blob/main/TESTING.md" target="_blank" rel="noopener noreferrer">Testing</a>
                    <a className="block text-white/80 hover:text-white" href="https://github.com/Zion-Holdings/zion.app/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contributing</a>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

