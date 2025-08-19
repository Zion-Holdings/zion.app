import React from 'react';
import Head from 'next/head';

export default function ReportsPage() {
  return (
    <>
      <Head>
        <title>Reports | Zion Tech Group</title>
        <meta name="description" content="View detailed reports and system status updates from Zion Tech Group's autonomous systems." />
        <meta property="og:title" content="Reports | Zion Tech Group" />
        <meta property="og:description" content="View detailed reports and system status updates from Zion Tech Group's autonomous systems." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                System Reports
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Comprehensive insights into our autonomous systems' performance, health, and operations
              </p>
            </header>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">System Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">227</div>
                  <div className="text-white/80">Active Automations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960</div>
                  <div className="text-white/80">Pages Maintained</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-white/80">System Uptime</div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-cyan-300">Latest Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-200">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold mb-2">Update 2025-08-15 0406</h3>
                  <p className="text-sm text-white/75 mb-3">Latest autonomous system status and performance metrics.</p>
                  <div className="text-xs text-cyan-300/90">View Details →</div>
                </a>
                
                <a href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-200">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold mb-2">Update 2025-08-15 0405</h3>
                  <p className="text-sm text-white/75 mb-3">Performance metrics and content analytics overview.</p>
                  <div className="text-xs text-cyan-300/90">View Details →</div>
                </a>
                
                <a href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-200">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold mb-2">Update 2025-08-15 0404</h3>
                  <p className="text-sm text-white/75 mb-3">Security status and infrastructure health report.</p>
                  <div className="text-xs text-cyan-300/90">View Details →</div>
                </a>
                
                <a href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-200">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold mb-2">Update 2025-08-15 0111</h3>
                  <p className="text-sm text-white/75 mb-3">Content strategy and user experience insights.</p>
                  <div className="text-xs text-cyan-300/90">View Details →</div>
                </a>
                
                <a href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-200">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold mb-2">Update 2025-08-15 0403</h3>
                  <p className="text-sm text-white/75 mb-3">Innovation metrics and technology stack overview.</p>
                  <div className="text-xs text-cyan-300/90">View Details →</div>
                </a>
                
                <a href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-200">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold mb-2">Update 2025-08-15 0402</h3>
                  <p className="text-sm text-white/75 mb-3">Global operations and quality assurance report.</p>
                  <div className="text-xs text-cyan-300/90">View Details →</div>
                </a>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Report Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">System Health</h3>
                  <p className="text-white/70 mb-4">Comprehensive monitoring of all autonomous systems, performance metrics, and operational status.</p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Performance monitoring</li>
                    <li>• Error tracking</li>
                    <li>• Resource utilization</li>
                    <li>• Uptime statistics</li>
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">Content Analytics</h3>
                  <p className="text-white/70 mb-4">Detailed insights into content performance, user engagement, and optimization opportunities.</p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• User behavior analysis</li>
                    <li>• Content performance metrics</li>
                    <li>• SEO optimization data</li>
                    <li>• Engagement statistics</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="text-center">
              <a 
                href="/" 
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}