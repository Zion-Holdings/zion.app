import React from 'react';
import Head from 'next/head';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's autonomous automation systems, redundancy management, and intelligent orchestration capabilities." />
        <meta property="og:title" content="Automation Systems - Zion Tech Group" />
        <meta property="og:description" content="Advanced automation and redundancy systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Automation Systems
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Autonomous systems that operate continuously, ensuring reliability and innovation without human intervention
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Home
              </a>
              <a href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                About
              </a>
              <a href="/automation-health" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Health Status
              </a>
              <a href="/live-dashboard" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Live Dashboard
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">System Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <div className="text-3xl font-bold text-cyan-400">227</div>
                  <div className="text-sm text-white/70">Active Automations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔄</div>
                  <div className="text-3xl font-bold text-fuchsia-400">24/7</div>
                  <div className="text-sm text-white/70">Continuous Operation</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <div className="text-3xl font-bold text-green-400">1min</div>
                  <div className="text-sm text-white/70">Sync Cadence</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Core Automation Systems</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Content Generation</h3>
                  <p className="text-white/70 mb-4">
                    AI-powered content creation that continuously generates fresh, relevant content for the platform.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-white/80">Autonomous article writing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-white/80">SEO optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-white/80">Multi-language support</span>
                    </div>
                  </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Redundancy Management</h3>
                  <p className="text-white/70 mb-4">
                    Multi-layered redundancy systems ensuring 99.99% uptime and seamless failover capabilities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-white/80">PM2 process management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-white/80">GitHub Actions backup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-white/80">Netlify functions</span>
                    </div>
                  </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Health Monitoring</h3>
                  <p className="text-white/70 mb-4">
                    Continuous monitoring and self-healing capabilities that detect and resolve issues automatically.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-white/80">Real-time health checks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-white/80">Automatic error detection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-white/80">Self-healing workflows</span>
                    </div>
                  </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Sync Orchestration</h3>
                  <p className="text-white/70 mb-4">
                    Intelligent synchronization across multiple systems and repositories for seamless operation.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-white/80">Cross-branch synchronization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-white/80">Multi-repository sync</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-white/80">Conflict resolution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Automation Workflows</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl">🔄</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-cyan-400">Continuous Integration</h4>
                    <p className="text-white/70 text-sm">Automated testing, building, and deployment on every commit</p>
                  </div>
                  <div className="text-sm text-white/50">Every commit</div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl">📊</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-fuchsia-400">Performance Monitoring</h4>
                    <p className="text-white/70 text-sm">Lighthouse audits and performance optimization</p>
                  </div>
                  <div className="text-sm text-white/50">Every 6 hours</div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl">🔍</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-green-400">Security Scanning</h4>
                    <p className="text-white/70 text-sm">Vulnerability detection and security audits</p>
                  </div>
                  <div className="text-sm text-white/50">Daily</div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl">📝</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-400">Content Generation</h4>
                    <p className="text-white/70 text-sm">AI-powered content creation and optimization</p>
                  </div>
                  <div className="text-sm text-white/50">Every 4 hours</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">System Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-green-500/20 rounded-lg border border-green-500/30">
                  <div className="text-2xl mb-2">✅</div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2">All Systems Operational</h3>
                  <p className="text-white/70 text-sm">227 automations running smoothly</p>
                </div>
                <div className="text-center p-6 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <div className="text-2xl mb-2">📈</div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Performance Optimal</h3>
                  <p className="text-white/70 text-sm">99.99% uptime maintained</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}