import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ReportsIndex() {
  return (
    <>
      <Head>
        <title>Reports & Analytics | Zion Tech Group</title>
        <meta name="description" content="Comprehensive reports and analytics from Zion Tech Group's autonomous systems." />
        <meta property="og:title" content="Reports & Analytics" />
        <meta property="og:description" content="Comprehensive reports and analytics from Zion Tech Group's autonomous systems." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Reports & Analytics
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive insights and metrics from our autonomous AI systems, providing real-time visibility into performance, innovation, and operational excellence.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                <h2 className="text-2xl font-bold text-blue-300 mb-4">System Performance</h2>
                <p className="text-blue-200 mb-6">
                  Real-time metrics on system health, uptime, and performance optimization
                </p>
                <div className="space-y-3 text-sm text-blue-200/90">
                  <div className="flex justify-between">
                    <span>Uptime</span>
                    <span className="text-blue-300 font-semibold">99.97%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Time</span>
                    <span className="text-blue-300 font-semibold">127ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Throughput</span>
                    <span className="text-blue-300 font-semibold">2.3M req/min</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-8 rounded-2xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                <h2 className="text-2xl font-bold text-green-300 mb-4">AI Operations</h2>
                <p className="text-green-200 mb-6">
                  Autonomous agent performance and content generation metrics
                </p>
                <div className="space-y-3 text-sm text-green-200/90">
                  <div className="flex justify-between">
                    <span>Active Agents</span>
                    <span className="text-green-300 font-semibold">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Content Generated</span>
                    <span className="text-green-300 font-semibold">156 articles</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quality Score</span>
                    <span className="text-green-300 font-semibold">98.2%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <h2 className="text-2xl font-bold text-purple-300 mb-4">Security & Compliance</h2>
                <p className="text-purple-200 mb-6">
                  Threat detection, compliance status, and security metrics
                </p>
                <div className="space-y-3 text-sm text-purple-200/90">
                  <div className="flex justify-between">
                    <span>Threats Detected</span>
                    <span className="text-purple-300 font-semibold">0 critical</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Score</span>
                    <span className="text-purple-300 font-semibold">98.7/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compliance</span>
                    <span className="text-purple-300 font-semibold">100%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-8 rounded-2xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
                <h2 className="text-2xl font-bold text-orange-300 mb-4">User Engagement</h2>
                <p className="text-orange-200 mb-6">
                  Customer satisfaction, retention, and business impact metrics
                </p>
                <div className="space-y-3 text-sm text-orange-200/90">
                  <div className="flex justify-between">
                    <span>Monthly Visitors</span>
                    <span className="text-orange-300 font-semibold">2.4M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>NPS Score</span>
                    <span className="text-orange-300 font-semibold">87</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customer Retention</span>
                    <span className="text-orange-300 font-semibold">94.2%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <h2 className="text-2xl font-bold text-cyan-300 mb-4">Innovation Pipeline</h2>
                <p className="text-cyan-200 mb-6">
                  Research progress, patent portfolio, and emerging technology development
                </p>
                <div className="space-y-3 text-sm text-cyan-200/90">
                  <div className="flex justify-between">
                    <span>Active Patents</span>
                    <span className="text-cyan-300 font-semibold">234</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Research Projects</span>
                    <span className="text-cyan-300 font-semibold">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Innovation Index</span>
                    <span className="text-cyan-300 font-semibold">8.7/10</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 p-8 rounded-2xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
                <h2 className="text-2xl font-bold text-pink-300 mb-4">Global Operations</h2>
                <p className="text-pink-200 mb-6">
                  Geographic distribution, multi-language support, and infrastructure status
                </p>
                <div className="space-y-3 text-sm text-pink-200/90">
                  <div className="flex justify-between">
                    <span>Countries</span>
                    <span className="text-pink-300 font-semibold">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data Centers</span>
                    <span className="text-pink-300 font-semibold">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Languages</span>
                    <span className="text-pink-300 font-semibold">34</span>
                  </div>
                </div>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-white">Latest Autonomous Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/reports/updates/update-2025-08-15-0406" className="group">
                  <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-200">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      Update — 2025: 08: 15: 0406
                    </h3>
                    <p className="text-white/70 text-sm mt-2">System status, performance metrics, and autonomous activities</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors">
                      View Details <span aria-hidden>→</span>
                    </div>
                  </div>
                </Link>

                <Link href="/reports/updates/update-2025-08-15-0405" className="group">
                  <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-200">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      Update — 2025: 08: 15: 0405
                    </h3>
                    <p className="text-white/70 text-sm mt-2">Infrastructure updates, AI agent performance, and user metrics</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors">
                      View Details <span aria-hidden>→</span>
                    </div>
                  </div>
                </Link>

                <Link href="/reports/updates/update-2025-08-15-0404" className="group">
                  <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-200">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      Update — 2025: 08: 15: 0404
                    </h3>
                    <p className="text-white/70 text-sm mt-2">Innovation progress, market analysis, and future roadmap</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors">
                      View Details <span aria-hidden>→</span>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            <div className="text-center">
              <Link href="/" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200 text-lg">
                Return to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}