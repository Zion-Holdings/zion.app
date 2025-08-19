import React from 'react';
import Head from 'next/head';

export default function LiveDashboard() {
  return (
    <>
      <Head>
        <title>Live Dashboard — Zion Tech Group</title>
        <meta name="description" content="Real-time monitoring dashboard for Zion Tech Group's autonomous systems, automation workflows, and system performance metrics." />
        <meta property="og:title" content="Live Dashboard — Zion Tech Group" />
        <meta property="og:description" content="Real-time monitoring dashboard for Zion Tech Group's autonomous systems, automation workflows, and system performance metrics." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Live Dashboard
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Real-time monitoring of our autonomous systems, automation workflows, and infrastructure performance.
            </p>
          </section>

          {/* Navigation */}
          <nav className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                ← Back to Home
              </a>
              <a href="/automation-health" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Automation Health
              </a>
              <a href="/reports" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Reports
              </a>
            </div>
          </nav>

          {/* System Status Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">System Status Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Overall Status</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">Healthy</div>
                <p className="text-white/80 text-sm">All systems operational</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Uptime</h3>
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <p className="text-white/80 text-sm">Last 30 days</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-fuchsia-400/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Active Automations</h3>
                  <div className="w-3 h-3 bg-fuchsia-400 rounded-full"></div>
                </div>
                <div className="text-3xl font-bold text-fuchsia-400 mb-2">227</div>
                <p className="text-white/80 text-sm">Currently running</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Pages Generated</h3>
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">2,960+</div>
                <p className="text-white/80 text-sm">Total generated</p>
              </div>
            </div>
          </section>

          {/* Real-time Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Real-time Metrics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Automation Performance</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Content Generation</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-cyan-300 font-semibold">85%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">System Monitoring</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" style={{width: '98%'}}></div>
                      </div>
                      <span className="text-green-300 font-semibold">98%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Security Scanning</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-fuchsia-400 to-purple-500 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <span className="text-fuchsia-300 font-semibold">92%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6 text-fuchsia-300">System Resources</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">CPU Usage</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" style={{width: '67%'}}></div>
                      </div>
                      <span className="text-blue-300 font-semibold">67%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Memory Usage</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{width: '73%'}}></div>
                      </div>
                      <span className="text-yellow-300 font-semibold">73%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Storage Usage</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="text-green-300 font-semibold">45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Recent Activity</h2>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-white font-medium">Content generation workflow completed successfully</p>
                    <p className="text-white/60 text-sm">2 minutes ago</p>
                  </div>
                  <span className="text-green-300 text-sm">Success</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-white font-medium">System health check performed</p>
                    <p className="text-white/60 text-sm">5 minutes ago</p>
                  </div>
                  <span className="text-blue-300 text-sm">Info</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-white font-medium">Performance optimization in progress</p>
                    <p className="text-white/60 text-sm">12 minutes ago</p>
                  </div>
                  <span className="text-yellow-300 text-sm">Warning</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-white font-medium">Security scan completed - no threats detected</p>
                    <p className="text-white/60 text-sm">18 minutes ago</p>
                  </div>
                  <span className="text-green-300 text-sm">Success</span>
                </div>
              </div>
            </div>
          </section>

          {/* Automation Workflows */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Active Automation Workflows</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Content Generation</h3>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-white/80 text-sm mb-4">AI-powered content creation and optimization</p>
                <div className="text-xs text-white/60">
                  <div>Status: Running</div>
                  <div>Last Run: 2 min ago</div>
                  <div>Success Rate: 98.5%</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">System Monitoring</h3>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-white/80 text-sm mb-4">Continuous infrastructure monitoring and alerting</p>
                <div className="text-xs text-white/60">
                  <div>Status: Running</div>
                  <div>Last Run: 1 min ago</div>
                  <div>Success Rate: 99.9%</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Security Scanning</h3>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-white/80 text-sm mb-4">Automated security assessment and threat detection</p>
                <div className="text-xs text-white/60">
                  <div>Status: Running</div>
                  <div>Last Run: 18 min ago</div>
                  <div>Success Rate: 100%</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Performance Optimization</h3>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-white/80 text-sm mb-4">System performance tuning and optimization</p>
                <div className="text-xs text-white/60">
                  <div>Status: Processing</div>
                  <div>Last Run: 12 min ago</div>
                  <div>Success Rate: 95.2%</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Backup & Recovery</h3>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-white/80 text-sm mb-4">Automated data backup and disaster recovery</p>
                <div className="text-xs text-white/60">
                  <div>Status: Running</div>
                  <div>Last Run: 45 min ago</div>
                  <div>Success Rate: 99.8%</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Quality Assurance</h3>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-white/80 text-sm mb-4">Automated testing and quality checks</p>
                <div className="text-xs text-white/60">
                  <div>Status: Running</div>
                  <div>Last Run: 8 min ago</div>
                  <div>Success Rate: 97.3%</div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white/90">Need More Details?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Explore our detailed reports, automation health metrics, and system analytics for comprehensive insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/reports" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white font-semibold transition-all duration-200">
                View Reports
              </a>
              <a href="/automation-health" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Automation Health
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Contact Support
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}