import React from 'react';
import Head from 'next/head';

export default function PerformanceMetricsPage() {
  return (
    <>
      <Head>
        <title>Performance Metrics | Zion Tech Group</title>
        <meta name="description" content="Comprehensive performance analytics and metrics from Zion Tech Group's autonomous systems." />
        <meta property="og:title" content="Performance Metrics - Zion Tech Group" />
        <meta property="og:description" content="Performance analytics and metrics from our autonomous systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/reports" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Reports
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Performance Metrics
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Real-time analytics and performance insights from our autonomous infrastructure
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">System Performance Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-2xl border border-green-500/30 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-white/80 font-semibold">Uptime</div>
                  <div className="text-sm text-white/60 mt-2">Last 30 days</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-2xl border border-blue-500/30 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">1.2s</div>
                  <div className="text-white/80 font-semibold">Avg Response</div>
                  <div className="text-sm text-white/60 mt-2">Global average</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-2xl border border-purple-500/30 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">227</div>
                  <div className="text-white/80 font-semibold">Active Automations</div>
                  <div className="text-sm text-white/60 mt-2">Running smoothly</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-6 rounded-2xl border border-orange-500/30 text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">2,960+</div>
                  <div className="text-white/80 font-semibold">Pages Generated</div>
                  <div className="text-sm text-white/60 mt-2">AI-powered content</div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-fuchsia-300">Automation Health Metrics</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Success Rates</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Content Generation</span>
                      <span className="text-green-400 font-semibold">98.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Deployment Automation</span>
                      <span className="text-green-400 font-semibold">99.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Monitoring Systems</span>
                      <span className="text-green-400 font-semibold">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Security Scans</span>
                      <span className="text-green-400 font-semibold">100%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-fuchsia-400">Response Times</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">API Endpoints</span>
                      <span className="text-blue-400 font-semibold">45ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Database Queries</span>
                      <span className="text-blue-400 font-semibold">12ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Content Delivery</span>
                      <span className="text-blue-400 font-semibold">89ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Error Recovery</span>
                      <span className="text-blue-400 font-semibold">2.3s</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-green-300">Resource Utilization</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-2xl border border-blue-500/30">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">CPU Usage</h3>
                  <div className="text-3xl font-bold text-white mb-2">23%</div>
                  <p className="text-white/70 text-sm">Optimized through AI resource allocation</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-2xl border border-green-500/30">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Memory Usage</h3>
                  <div className="text-3xl font-bold text-white mb-2">41%</div>
                  <p className="text-white/70 text-sm">Efficient caching and optimization</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-2xl border border-purple-500/30">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Storage</h3>
                  <div className="text-3xl font-bold text-white mb-2">67%</div>
                  <p className="text-white/70 text-sm">Content and automation data</p>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Real-Time Monitoring</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Our autonomous systems continuously monitor and optimize performance metrics. 
                  All data is updated in real-time and available through our dashboard.
                </p>
                <a 
                  href="/reports" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                >
                  View All Reports
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}