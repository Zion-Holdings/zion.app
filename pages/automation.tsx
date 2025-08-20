import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation | Zion Tech Group — Autonomous Systems & Redundancy</title>
        <meta
          name="description"
          content="Explore Zion Tech Group's autonomous systems: redundancy, AI content, build orchestration, monitoring, and zero-downtime operations."
        />
        <meta property="og:title" content="Automation | Zion Tech Group" />
        <meta
          property="og:description"
          content="Autonomous redundancy, AI content factory, build orchestration, monitoring, and security."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Autonomous Automation Systems
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A unified suite of 227+ intelligent automations that deliver zero‑downtime, self‑healing operations, and
              continuous improvement across your stack.
            </p>
          </header>

          <section className="mx-auto max-w-7xl mb-16">
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
                <a
                  href="https://github.com/Zion-Holdings/zion.app/search?q=redundancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
                >
                  View Redundancy Docs →
                </a>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">🧠 AI Content Factory</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Autonomous content generation</li>
                  <li>• AI-powered optimization</li>
                  <li>• Intelligent scheduling</li>
                  <li>• Quality assurance</li>
                  <li>• Performance analytics</li>
                </ul>
                <a
                  href="https://github.com/Zion-Holdings/zion.app/search?q=content+factory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold"
                >
                  View Content Systems →
                </a>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-green-400 mb-4 text-center">⚡ Build Orchestration</h2>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Smart dependency management</li>
                  <li>• Automated testing</li>
                  <li>• Performance optimization</li>
                  <li>• Error recovery</li>
                  <li>• Deployment automation</li>
                </ul>
                <a
                  href="https://github.com/Zion-Holdings/zion.app/search?q=build+orchestrator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 text-sm font-semibold"
                >
                  View Build Systems →
                </a>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl mb-16">
            <h2 className="text-3xl font-bold tracking-wide text-white/90 mb-8 text-center">Operational Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Monitoring</h3>
                <p className="text-white/70 text-sm">Real-time performance, health, and predictive analytics.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">Security</h3>
                <p className="text-white/70 text-sm">Automated scanning, compliance monitoring, and threat response.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">CI/CD</h3>
                <p className="text-white/70 text-sm">Self-healing pipelines, zero-downtime deployments, smart retries.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Global Infra</h3>
                <p className="text-white/70 text-sm">Multi-region, edge-optimized, geo-redundant infrastructure.</p>
              </div>
            </div>
          </section>

          <section className="text-center mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to automate everything?</h2>
              <p className="text-xl text-white/80 mb-8">
                Speak with our team to design, implement, and scale autonomous systems tailored to your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get in Touch
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                  View Services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

