import React from 'react';
import Head from 'next/head';

export default function PerformanceMetrics() {
  return (
    <>
      <Head>
        <title>Performance Metrics | Zion Tech Group</title>
        <meta name="description" content="Real-time performance metrics, uptime statistics, and system health indicators from Zion Tech Group's autonomous systems." />
        <meta property="og:title" content="Performance Metrics" />
        <meta property="og:description" content="Real-time performance metrics and system health indicators." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Performance Metrics
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-time performance data and system health indicators
            </p>
            <div className="mt-4 text-sm text-white/60">
              Last updated: {new Date().toLocaleString('en-US')}
            </div>
          </section>

          {/* Key Performance Indicators */}
          <section className="mx-auto max-w-6xl mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Key Performance Indicators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-lg font-semibold mb-2">System Uptime</div>
                <div className="text-sm text-white/70">Last 30 days</div>
                <div className="mt-3 text-xs text-green-300">✓ Excellent</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">1.2s</div>
                <div className="text-lg font-semibold mb-2">Avg Response Time</div>
                <div className="text-sm text-white/70">Global average</div>
                <div className="mt-3 text-xs text-cyan-300">✓ Fast</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">227</div>
                <div className="text-lg font-semibold mb-2">Active Automations</div>
                <div className="text-sm text-white/70">Running smoothly</div>
                <div className="mt-3 text-xs text-fuchsia-300">✓ Optimal</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">2,960</div>
                <div className="text-lg font-semibold mb-2">Pages Generated</div>
                <div className="text-sm text-white/70">AI-powered content</div>
                <div className="mt-3 text-xs text-blue-300">✓ Growing</div>
              </div>
            </div>
          </section>

          {/* System Health Dashboard */}
          <section className="mx-auto max-w-6xl mb-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">System Health Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Infrastructure Status</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Web Servers</span>
                      <span className="text-green-400">✓ Operational</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Database</span>
                      <span className="text-green-400">✓ Operational</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">CDN</span>
                      <span className="text-green-400">✓ Operational</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Monitoring</span>
                      <span className="text-green-400">✓ Operational</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Security Status</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Firewall</span>
                      <span className="text-green-400">✓ Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">SSL/TLS</span>
                      <span className="text-green-400">✓ Valid</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">DDoS Protection</span>
                      <span className="text-green-400">✓ Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Vulnerability Scan</span>
                      <span className="text-green-400">✓ Clean</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Trends */}
          <section className="mx-auto max-w-6xl mb-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Performance Trends</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">Response Time</h3>
                  <div className="text-2xl font-bold text-white mb-2">1.2s</div>
                  <div className="text-sm text-green-400">↓ 15% improvement</div>
                  <div className="text-xs text-white/60 mt-1">vs last month</div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-fuchsia-400">Uptime</h3>
                  <div className="text-2xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-sm text-green-400">↑ 0.1% improvement</div>
                  <div className="text-xs text-white/60 mt-1">vs last month</div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Page Load</h3>
                  <div className="text-2xl font-bold text-white mb-2">2.1s</div>
                  <div className="text-sm text-green-400">↓ 25% improvement</div>
                  <div className="text-xs text-white/60 mt-1">vs last month</div>
                </div>
              </div>
            </div>
          </section>

          {/* Automation Performance */}
          <section className="mx-auto max-w-6xl mb-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Automation Performance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Top Performing Automations</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Content Generation</span>
                      <span className="text-green-400">98.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">SEO Optimization</span>
                      <span className="text-green-400">97.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Security Scanning</span>
                      <span className="text-green-400">99.1%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Performance Monitoring</span>
                      <span className="text-green-400">99.8%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Automation Efficiency</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Tasks Completed</span>
                      <span className="text-cyan-400">15,847</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Success Rate</span>
                      <span className="text-green-400">98.7%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Time Saved</span>
                      <span className="text-fuchsia-400">2,847 hrs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Cost Reduction</span>
                      <span className="text-blue-400">$45,230</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Global Performance Map */}
          <section className="mx-auto max-w-6xl mb-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Global Performance Map</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">🌍</div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-400">North America</h3>
                  <div className="text-2xl font-bold text-white mb-1">0.8s</div>
                  <div className="text-sm text-green-400">Excellent</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl mb-2">🌏</div>
                  <h3 className="text-lg font-semibold mb-2 text-fuchsia-400">Europe</h3>
                  <div className="text-2xl font-bold text-white mb-1">1.1s</div>
                  <div className="text-sm text-green-400">Good</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl mb-2">🌏</div>
                  <h3 className="text-lg font-semibold mb-2 text-green-400">Asia Pacific</h3>
                  <div className="text-2xl font-bold text-white mb-1">1.5s</div>
                  <div className="text-sm text-yellow-400">Acceptable</div>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="mx-auto max-w-4xl text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/reports" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                ← Back to Reports
              </a>
              <a href="/reports/automation-overview-2025" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Automation Overview
              </a>
              <a href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Home
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}