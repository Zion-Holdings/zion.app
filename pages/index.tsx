import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub & AI-Powered Cloud Platform</title>
        <meta
          name="description"
          content="Discover Zion Tech Group: advanced autonomous systems, AI-powered automation, comprehensive redundancy, zero-downtime ops, and enterprise-grade security."
        />
        <meta
          property="og:title"
          content="Zion Tech Group — Autonomous Innovation Hub & AI-Powered Cloud Platform"
        />
        <meta
          property="og:description"
          content="Advanced autonomous systems, AI automation, redundancy, monitoring, and security."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              The most advanced autonomous innovation hub delivering intelligent automation, cloud-native AI, and self-healing, zero‑downtime infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                About Our Mission
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                AI Services
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </section>

          {/* Capabilities */}
          <section className="mx-auto max-w-7xl px-2 pb-12">
            <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-white/90 mb-10">
              🚀 Platform Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-lg font-bold text-cyan-400 mb-3 text-center">Autonomous Cloud</h3>
                <ul className="text-white/80 text-sm space-y-1.5">
                  <li>• Self-healing CI/CD</li>
                  <li>• Intelligent build orchestration</li>
                  <li>• Automated dependency management</li>
                  <li>• Zero-downtime deployments</li>
                </ul>
              </div>
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-bold text-fuchsia-400 mb-3 text-center">AI Automation</h3>
                <ul className="text-white/80 text-sm space-y-1.5">
                  <li>• 200+ autonomous agents</li>
                  <li>• Intelligent content generation</li>
                  <li>• Predictive maintenance</li>
                  <li>• Smart error recovery</li>
                </ul>
              </div>
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-bold text-green-400 mb-3 text-center">Security & Reliability</h3>
                <ul className="text-white/80 text-sm space-y-1.5">
                  <li>• Multi-layer redundancy</li>
                  <li>• Automatic failover</li>
                  <li>• Continuous health monitoring</li>
                  <li>• Zero-trust security</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Explore */}
          <section className="mx-auto max-w-7xl px-2 pb-12">
            <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-white/90 mb-10">🔗 Explore the Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">About Us</h3>
                <p className="text-white/70 text-sm">Our mission & vision</p>
              </Link>
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">AI Services</h3>
                <p className="text-white/70 text-sm">Intelligent solutions</p>
              </Link>
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Resources</h3>
                <p className="text-white/70 text-sm">Tools & insights</p>
              </Link>
              <Link href="/case-studies" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Case Studies</h3>
                <p className="text-white/70 text-sm">Success stories</p>
              </Link>
              <Link href="/blog" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">✍️</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Blog</h3>
                <p className="text-white/70 text-sm">Latest insights</p>
              </Link>
              <Link href="/contact" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Contact</h3>
                <p className="text-white/70 text-sm">Get in touch</p>
              </Link>
              <Link href="/privacy" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-red-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚖️</span>
                </div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">Privacy</h3>
                <p className="text-white/70 text-sm">Policy & data use</p>
              </Link>
            </div>
          </section>

          {/* Documentation & Guides */}
          <section className="mx-auto max-w-7xl px-2 pb-12">
            <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide text-white/90 mb-10">📚 Documentation & Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-blue-400 mb-3 text-center">📖 Core Docs</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-2">
                  <li>• <a className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer" href="https://github.com/Zion-Holdings/zion.app">Repository Overview</a></li>
                  <li>• <a className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer" href="https://github.com/Zion-Holdings/zion.app/blob/main/ARCHITECTURE.md">Architecture</a></li>
                  <li>• <a className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer" href="https://github.com/Zion-Holdings/zion.app/blob/main/API.md">API</a></li>
                  <li>• <a className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer" href="https://github.com/Zion-Holdings/zion.app/blob/main/DEPLOYMENT.md">Deployment</a></li>
                  <li>• <a className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer" href="https://github.com/Zion-Holdings/zion.app/blob/main/CONTRIBUTING.md">Contributing</a></li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-purple-400 mb-3 text-center">🔧 Automation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-2">
                  <li>• <a className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer" href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY_V2.md">Ultimate Redundancy V2</a></li>
                  <li>• <a className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer" href="https://github.com/Zion-Holdings/zion.app/blob/main/README_PM2_REDUNDANCY_COMPLETE.md">PM2 Redundancy</a></li>
                  <li>• <a className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer" href="https://github.com/Zion-Holdings/zion.app/blob/main/GITHUB_ACTIONS_IMPROVEMENTS.md">GitHub Actions</a></li>
                  <li>• <a className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer" href="https://github.com/Zion-Holdings/zion.app/blob/main/ULTIMATE_REDUNDANCY_IMPLEMENTATION_SUMMARY.md">Continuous Operation</a></li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-3 text-center">🚀 Advanced</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-2">
                  <li>• <a className="text-green-400 hover:text-green-300" target="_blank" rel="noopener noreferrer" href="https://github.com/Zion-Holdings/zion.app/blob/main/SECURITY.md">Security</a></li>
                  <li>• <a className="text-green-400 hover:text-green-300" target="_blank" rel="noopener noreferrer" href="https://github.com/Zion-Holdings/zion.app/blob/main/TESTING.md">Testing</a></li>
                  <li>• <a className="text-green-400 hover:text-green-300" target="_blank" rel="noopener noreferrer" href="https://github.com/Zion-Holdings/zion.app/blob/main/PERFORMANCE.md">Performance</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Latest updates */}
          <section className="mx-auto max-w-7xl px-2 pb-10">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Updates</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center mx-auto max-w-4xl px-2 pb-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to experience autonomous operations?</h2>
              <p className="text-lg text-white/80 mb-6">
                Join teams leveraging our AI-powered platform for efficiency, reliability, and continuous innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Journey
                </Link>
                <Link href="/about" className="px-7 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

