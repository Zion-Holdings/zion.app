import React from 'react';
import Head from 'next/head';

export default function ReportsIndex() {
  return (
    <>
      <Head>
        <title>Reports & Analytics | Zion Tech Group</title>
        <meta name="description" content="Comprehensive reports and analytics from Zion Tech Group's autonomous systems covering automation, performance, and innovation metrics." />
        <meta property="og:title" content="Reports & Analytics" />
        <meta property="og:description" content="Comprehensive reports and analytics from Zion Tech Group's autonomous systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Reports & Analytics
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive insights from Zion Tech Group's autonomous automation systems
            </p>
            <div className="mt-4 text-sm text-white/60">
              Real-time data from 227 active automations
            </div>
          </section>

          {/* Featured Reports */}
          <section className="mx-auto max-w-6xl mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Featured Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/reports/automation-overview-2025" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-xl font-semibold text-cyan-400">Automation Overview 2025</h3>
                <p className="mt-2 text-sm text-white/75">
                  Comprehensive analysis of our autonomous automation ecosystem, achievements, and future roadmap
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-cyan-300/90">
                  View Report <span aria-hidden>→</span>
                </div>
              </a>

              <a href="/reports/performance-metrics" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-xl font-semibold text-fuchsia-400">Performance Metrics</h3>
                <p className="mt-2 text-sm text-white/75">
                  Real-time performance data, uptime statistics, and system health indicators
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-fuchsia-300/90">
                  View Report <span aria-hidden>→</span>
                </div>
              </a>

              <a href="/reports/innovation-tracker" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-green-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-xl font-semibold text-green-400">Innovation Tracker</h3>
                <p className="mt-2 text-sm text-white/75">
                  Track emerging technologies, R&D progress, and breakthrough innovations
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-green-300/90">
                  View Report <span aria-hidden>→</span>
                </div>
              </a>
            </div>
          </section>

          {/* Latest Updates */}
          <section className="mx-auto max-w-6xl mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-400">Latest Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-cyan-400">Update 2025-08-15-0406</h3>
                <p className="mt-2 text-sm text-white/75">
                  Latest autonomous system update with performance improvements and new features
                </p>
                <div className="mt-3 text-xs text-cyan-300/90">2 hours ago</div>
              </a>

              <a href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-fuchsia-400">Update 2025-08-15-0405</h3>
                <p className="mt-2 text-sm text-white/75">
                  Infrastructure optimization and security enhancements deployed
                </p>
                <div className="mt-3 text-xs text-fuchsia-300/90">4 hours ago</div>
              </a>

              <a href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-green-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-green-400">Update 2025-08-15-0404</h3>
                <p className="mt-2 text-sm text-white/75">
                  Content generation improvements and SEO optimization updates
                </p>
                <div className="mt-3 text-xs text-green-300/90">6 hours ago</div>
              </a>

              <a href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-blue-400">Update 2025-08-15-0403</h3>
                <p className="mt-2 text-sm text-white/75">
                  New automation workflows and monitoring enhancements
                </p>
                <div className="mt-3 text-xs text-blue-300/90">8 hours ago</div>
              </a>
            </div>
          </section>

          {/* Report Categories */}
          <section className="mx-auto max-w-6xl mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Report Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-lg font-semibold mb-2">Performance</h3>
                <p className="text-sm text-white/70">System metrics and optimization</p>
                <div className="mt-3 text-xs text-cyan-300">15 reports</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="text-lg font-semibold mb-2">Automation</h3>
                <p className="text-sm text-white/70">AI and workflow insights</p>
                <div className="mt-3 text-xs text-fuchsia-300">23 reports</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-lg font-semibold mb-2">Security</h3>
                <p className="text-sm text-white/70">Threat analysis and protection</p>
                <div className="mt-3 text-xs text-green-300">8 reports</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-white/70">Business intelligence and trends</p>
                <div className="mt-3 text-xs text-blue-300">12 reports</div>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="mx-auto max-w-4xl mb-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-purple-400">Quick Stats</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">227</div>
                  <div className="text-sm text-white/70">Active Automations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fuchsia-400">2,960</div>
                  <div className="text-sm text-white/70">Pages Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-white/70">Monitoring</div>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="mx-auto max-w-4xl text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                ← Back to Home
              </a>
              <a href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                About Zion Tech
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Contact Us
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}