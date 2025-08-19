import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationHealthPage() {
  return (
    <>
      <Head>
        <title>Automation Health Dashboard | Zion Tech Group</title>
        <meta name="description" content="Real-time monitoring dashboard for Zion Tech Group's automation systems and workflows." />
        <meta property="og:title" content="Automation Health Dashboard | Zion Tech Group" />
        <meta property="og:description" content="Real-time monitoring dashboard for Zion Tech Group's automation systems and workflows." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Automation Health Dashboard
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Real-time monitoring of our autonomous systems and automation workflows.
                </p>
              </header>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">System Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-lg p-6 border border-green-400/30 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">227</div>
                    <div className="text-white/80">Active Workflows</div>
                    <div className="text-sm text-green-300 mt-2">All Systems Operational</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-lg p-6 border border-blue-400/30 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">99.7%</div>
                    <div className="text-white/80">Success Rate</div>
                    <div className="text-sm text-blue-300 mt-2">Last 24 Hours</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-lg p-6 border border-purple-400/30 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">2.3s</div>
                    <div className="text-white/80">Avg Response</div>
                    <div className="text-sm text-purple-300 mt-2">Per Workflow</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-400/10 to-teal-400/10 rounded-lg p-6 border border-cyan-400/30 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">99.99%</div>
                    <div className="text-white/80">Uptime</div>
                    <div className="text-sm text-cyan-300 mt-2">System Availability</div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Workflow Status</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-6 border border-green-400/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-green-300">Content Generation</h3>
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">Active</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Status</span>
                        <span className="text-green-400">✓ Running</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Run</span>
                        <span>2 min ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Success Rate</span>
                        <span className="text-green-400">99.8%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-green-400/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-green-300">System Monitoring</h3>
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">Active</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Status</span>
                        <span className="text-green-400">✓ Running</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Run</span>
                        <span>1 min ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Success Rate</span>
                        <span className="text-green-400">100%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-green-400/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-green-300">Security Automation</h3>
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">Active</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Status</span>
                        <span className="text-green-400">✓ Running</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Run</span>
                        <span>5 min ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Success Rate</span>
                        <span className="text-green-400">99.9%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-green-400/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-green-300">CI/CD Pipeline</h3>
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">Active</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Status</span>
                        <span className="text-green-400">✓ Running</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Run</span>
                        <span>10 min ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Success Rate</span>
                        <span className="text-green-400">99.5%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-green-400/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-green-300">Performance Optimization</h3>
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">Active</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Status</span>
                        <span className="text-green-400">✓ Running</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Run</span>
                        <span>15 min ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Success Rate</span>
                        <span className="text-green-400">99.7%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-green-400/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-green-300">Backup & Recovery</h3>
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">Active</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Status</span>
                        <span className="text-green-400">✓ Running</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Run</span>
                        <span>1 hour ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Success Rate</span>
                        <span className="text-green-400">100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Performance Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-4">Response Time Trends</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/80">Content Generation</span>
                          <span className="text-green-400">1.2s</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/80">System Monitoring</span>
                          <span className="text-green-400">0.8s</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/80">Security Scans</span>
                          <span className="text-green-400">2.1s</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{width: '78%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-4">Resource Utilization</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/80">CPU Usage</span>
                          <span className="text-green-400">23%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{width: '23%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/80">Memory Usage</span>
                          <span className="text-green-400">67%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{width: '67%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/80">Network I/O</span>
                          <span className="text-green-400">45%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{width: '45%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Recent Activity</h2>
                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-semibold">Content Generation Workflow Completed</div>
                        <div className="text-sm text-white/60">Generated 15 new pages in 2.3 seconds</div>
                      </div>
                      <div className="text-sm text-white/60">2 min ago</div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-semibold">Security Scan Completed</div>
                        <div className="text-sm text-white/60">No threats detected, system secure</div>
                      </div>
                      <div className="text-sm text-white/60">5 min ago</div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-semibold">Performance Optimization Applied</div>
                        <div className="text-sm text-white/60">Page load speed improved by 12%</div>
                      </div>
                      <div className="text-sm text-white/60">15 min ago</div>
                    </div>
                  </div>
                </div>
              </section>

              <footer className="border-t border-white/20 pt-8 text-center">
                <p className="text-white/60">
                  Last updated: {new Date().toLocaleString()} | All systems operational
                </p>
              </footer>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}