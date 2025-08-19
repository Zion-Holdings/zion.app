import React from 'react';
import Head from 'next/head';

export default function LiveDashboardPage() {
  return (
    <>
      <Head>
        <title>Live Dashboard | Zion Tech Group</title>
        <meta name="description" content="Real-time dashboard monitoring Zion Tech Group's automation systems, performance metrics, and system health." />
        <meta property="og:title" content="Live Dashboard - Zion Tech Group" />
        <meta property="og:description" content="Real-time system monitoring and analytics." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Live Dashboard
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-time monitoring and analytics of our autonomous systems
            </p>
            <div className="mt-4 text-sm text-white/60">
              Last updated: <span className="text-cyan-400">Just now</span> • Auto-refresh: <span className="text-green-400">Enabled</span>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Home
              </a>
              <a href="/automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Automation
              </a>
              <a href="/automation-health" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Health Status
              </a>
              <a href="/component-library" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Components
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Active Automations</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">227</div>
                <div className="text-sm text-white/70">+12 from yesterday</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">System Uptime</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-fuchsia-400 mb-2">99.99%</div>
                <div className="text-sm text-white/70">Last 30 days</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Response Time</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">1.2s</div>
                <div className="text-sm text-white/70">Average</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Error Rate</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">0.01%</div>
                <div className="text-sm text-white/70">Last 24h</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">System Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">CPU Usage</span>
                      <span className="text-cyan-400">23%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-cyan-400 h-2 rounded-full" style={{width: '23%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">Memory Usage</span>
                      <span className="text-fuchsia-400">67%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-fuchsia-400 h-2 rounded-full" style={{width: '67%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">Disk Usage</span>
                      <span className="text-green-400">45%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">Network I/O</span>
                      <span className="text-blue-400">12%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '12%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Automation Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-white/90">Content Generator</span>
                    </div>
                    <span className="text-green-400 text-sm">Running</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-white/90">Health Monitor</span>
                    </div>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-white/90">Sync Orchestrator</span>
                    </div>
                    <span className="text-green-400 text-sm">Online</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-white/90">Redundancy Manager</span>
                    </div>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Recent Activity Feed</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="text-green-400">✅</div>
                  <div className="flex-1">
                    <span className="text-white/90">Content generation completed successfully</span>
                    <div className="text-xs text-white/50">2 minutes ago</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="text-blue-400">🔄</div>
                  <div className="flex-1">
                    <span className="text-white/90">Cross-branch synchronization completed</span>
                    <div className="text-xs text-white/50">1 minute ago</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="text-green-400">✅</div>
                  <div className="flex-1">
                    <span className="text-white/90">Health check passed for all systems</span>
                    <div className="text-xs text-white/50">30 seconds ago</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="text-purple-400">📊</div>
                  <div className="flex-1">
                    <span className="text-white/90">Performance metrics updated</span>
                    <div className="text-xs text-white/50">15 seconds ago</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="text-cyan-400">🤖</div>
                  <div className="flex-1">
                    <span className="text-white/90">New automation agent deployed</span>
                    <div className="text-xs text-white/50">10 seconds ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">Content Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70">Articles Generated</span>
                    <span className="text-cyan-400">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">SEO Score</span>
                    <span className="text-green-400">94/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Languages</span>
                    <span className="text-fuchsia-400">12</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4 text-fuchsia-400">Security Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70">Vulnerabilities</span>
                    <span className="text-green-400">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Security Score</span>
                    <span className="text-green-400">A+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Last Scan</span>
                    <span className="text-blue-400">2h ago</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4 text-green-400">Network Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70">Latency</span>
                    <span className="text-green-400">12ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Throughput</span>
                    <span className="text-cyan-400">2.1GB/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Connections</span>
                    <span className="text-fuchsia-400">1,847</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}