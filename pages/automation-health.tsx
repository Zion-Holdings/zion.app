import React from 'react';
import Head from 'next/head';

export default function AutomationHealthPage() {
  return (
    <>
      <Head>
        <title>Automation Health | Zion Tech Group</title>
        <meta name="description" content="Real-time monitoring and health status of Zion Tech Group's automation systems and redundancy management." />
        <meta property="og:title" content="Automation Health - Zion Tech Group" />
        <meta property="og:description" content="Live system health monitoring and status." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Automation Health
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-time monitoring and health status of our autonomous systems
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Home
              </a>
              <a href="/automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Automation
              </a>
              <a href="/live-dashboard" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Live Dashboard
              </a>
              <a href="/component-library" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Components
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">System Health Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-green-500/20 rounded-lg border border-green-500/30">
                  <div className="text-4xl mb-2">✅</div>
                  <div className="text-2xl font-bold text-green-400">Healthy</div>
                  <div className="text-sm text-white/70">Overall Status</div>
                </div>
                <div className="text-center p-6 bg-green-500/20 rounded-lg border border-green-500/30">
                  <div className="text-4xl mb-2">🤖</div>
                  <div className="text-2xl font-bold text-cyan-400">227</div>
                  <div className="text-sm text-white/70">Active Automations</div>
                </div>
                <div className="text-center p-6 bg-green-500/20 rounded-lg border border-green-500/30">
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="text-2xl font-bold text-fuchsia-400">99.99%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
                <div className="text-center p-6 bg-green-500/20 rounded-lg border border-green-500/30">
                  <div className="text-4xl mb-2">🔄</div>
                  <div className="text-2xl font-bold text-green-400">1min</div>
                  <div className="text-sm text-white/70">Sync Interval</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Component Health Status</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">✅</div>
                    <div>
                      <h4 className="font-semibold text-green-400">Content Generation System</h4>
                      <p className="text-white/70 text-sm">AI-powered content creation running smoothly</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-400 font-semibold">Operational</div>
                    <div className="text-xs text-white/50">Last check: 2 min ago</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">✅</div>
                    <div>
                      <h4 className="font-semibold text-green-400">Redundancy Management</h4>
                      <p className="text-white/70 text-sm">Multi-layer redundancy systems active</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-400 font-semibold">Operational</div>
                    <div className="text-xs text-white/50">Last check: 1 min ago</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">✅</div>
                    <div>
                      <h4 className="font-semibold text-green-400">Health Monitoring</h4>
                      <p className="text-white/70 text-sm">Continuous monitoring and self-healing active</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-400 font-semibold">Operational</div>
                    <div className="text-xs text-white/50">Last check: 30 sec ago</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">✅</div>
                    <div>
                      <h4 className="font-semibold text-green-400">Sync Orchestration</h4>
                      <p className="text-white/70 text-sm">Cross-system synchronization operational</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-400 font-semibold">Operational</div>
                    <div className="text-xs text-white/50">Last check: 45 sec ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Performance Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Response Times</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Content Generation</span>
                      <span className="text-green-400 font-mono">2.3s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Health Checks</span>
                      <span className="text-green-400 font-mono">0.8s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Sync Operations</span>
                      <span className="text-green-400 font-mono">1.2s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Error Resolution</span>
                      <span className="text-green-400 font-mono">5.1s</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Success Rates</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Content Creation</span>
                      <span className="text-green-400 font-mono">98.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Health Monitoring</span>
                      <span className="text-green-400 font-mono">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Sync Operations</span>
                      <span className="text-green-400 font-mono">99.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Error Recovery</span>
                      <span className="text-green-400 font-mono">97.3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Recent Activity</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                  <div className="text-green-400">✅</div>
                  <div className="flex-1">
                    <span className="text-white/90">Content generation completed successfully</span>
                    <div className="text-xs text-white/50">2 minutes ago</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                  <div className="text-blue-400">🔄</div>
                  <div className="flex-1">
                    <span className="text-white/90">Cross-branch synchronization completed</span>
                    <div className="text-xs text-white/50">1 minute ago</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                  <div className="text-green-400">✅</div>
                  <div className="flex-1">
                    <span className="text-white/90">Health check passed for all systems</span>
                    <div className="text-xs text-white/50">30 seconds ago</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                  <div className="text-purple-400">📊</div>
                  <div className="flex-1">
                    <span className="text-white/90">Performance metrics updated</span>
                    <div className="text-xs text-white/50">15 seconds ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">System Alerts</h2>
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">All Systems Operational</h3>
                <p className="text-white/70">No active alerts or issues detected</p>
                <p className="text-white/50 text-sm mt-2">Last alert: 3 days ago (resolved)</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}