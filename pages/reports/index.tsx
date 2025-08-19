import React from 'react';
import Head from 'next/head';

export default function ReportsIndex() {
  return (
    <>
      <Head>
        <title>Reports & Updates | Zion Tech Group</title>
        <meta name="description" content="Browse all autonomous system reports and updates from Zion Tech Group." />
        <meta property="og:title" content="Reports & Updates | Zion Tech Group" />
        <meta property="og:description" content="Browse all autonomous system reports and updates from Zion Tech Group." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Reports & Updates
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive overview of all autonomous system reports, performance metrics, and strategic updates.
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Latest Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0406</h3>
                  <p className="text-sm text-white/75 mb-3">Latest system status overview and achievements</p>
                  <div className="text-xs text-cyan-300/90">Published: August 15, 2025 at 04:06</div>
                </a>

                <a href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0405</h3>
                  <p className="text-sm text-white/75 mb-3">Infrastructure enhancements and AI improvements</p>
                  <div className="text-xs text-cyan-300/90">Published: August 15, 2025 at 04:05</div>
                </a>

                <a href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0404</h3>
                  <p className="text-sm text-white/75 mb-3">Content generation milestones and analytics</p>
                  <div className="text-xs text-cyan-300/90">Published: August 15, 2025 at 04:04</div>
                </a>

                <a href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0111</h3>
                  <p className="text-sm text-white/75 mb-3">Machine learning breakthroughs and performance metrics</p>
                  <div className="text-xs text-cyan-300/90">Published: August 15, 2025 at 01:11</div>
                </a>

                <a href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0403</h3>
                  <p className="text-sm text-white/75 mb-3">Cloud infrastructure updates and data analytics</p>
                  <div className="text-xs text-cyan-300/90">Published: August 15, 2025 at 04:03</div>
                </a>

                <a href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0402</h3>
                  <p className="text-sm text-white/75 mb-3">User experience enhancements and customer success</p>
                  <div className="text-xs text-cyan-300/90">Published: August 15, 2025 at 04:02</div>
                </a>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Report Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-2xl border border-blue-500/30">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">System Updates</h3>
                  <p className="text-white/80 mb-4">Real-time status reports and system health monitoring</p>
                  <a href="/reports/updates" className="text-blue-300 hover:text-blue-200 transition-colors">
                    View Updates →
                  </a>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-2xl border border-green-500/30">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Performance Metrics</h3>
                  <p className="text-white/80 mb-4">Detailed analytics and performance optimization reports</p>
                  <a href="/reports/performance" className="text-green-300 hover:text-green-200 transition-colors">
                    View Metrics →
                  </a>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-2xl border border-purple-500/30">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Innovation Pipeline</h3>
                  <p className="text-white/80 mb-4">Research progress and future technology roadmaps</p>
                  <a href="/reports/innovation" className="text-purple-300 hover:text-purple-200 transition-colors">
                    View Pipeline →
                  </a>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Stay Updated</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Our autonomous systems continuously generate reports and updates. 
                  Check back regularly for the latest insights into our technological advancements.
                </p>
                <a 
                  href="/" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                >
                  Return to Homepage
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}