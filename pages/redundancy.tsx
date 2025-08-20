import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function RedundancyPage() {
  return (
    <>
      <Head>
        <title>Ultimate Redundancy Systems | Zion Tech Group - 99.9% Uptime</title>
        <meta name="description" content="Discover Zion Tech Group's ultimate redundancy systems featuring multi-layer failover, PM2 process management, GitHub Actions backup, and 99.9% uptime guarantee." />
        <meta property="og:title" content="Ultimate Redundancy Systems - Zion Tech Group" />
        <meta property="og:description" content="Multi-layer redundancy systems with 99.9% uptime guarantee and comprehensive failover protection." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Redundancy Systems
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Multi-layer failover protection ensuring 99.9% uptime and continuous operation
            </p>
          </section>

          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Redundancy Layers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">PM2 Process Management</h3>
                <p className="text-white/70 mb-6">
                  Advanced process management with automatic restart, load balancing, and health monitoring.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Auto-restart on failure</li>
                  <li>• Load balancing</li>
                  <li>• Health monitoring</li>
                  <li>• Performance metrics</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">GitHub Actions Redundancy</h3>
                <p className="text-white/70 mb-6">
                  Multiple CI/CD pipelines with automatic failover and parallel execution capabilities.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Parallel workflows</li>
                  <li>• Auto-failover</li>
                  <li>• Backup runners</li>
                  <li>• Health checks</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Netlify Functions Backup</h3>
                <p className="text-white/70 mb-6">
                  Edge function redundancy with multiple deployment regions and automatic failover.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Multi-region deployment</li>
                  <li>• Edge caching</li>
                  <li>• Auto-scaling</li>
                  <li>• Health monitoring</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Reliability Metrics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-fuchsia-400/30 text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">99.9%</div>
                <div className="text-white/70">Uptime Guarantee</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/30 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">5</div>
                <div className="text-white/70">Redundancy Layers</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-8 border border-green-400/30 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">&lt;1s</div>
                <div className="text-white/70">Failover Time</div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/30 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-white/70">Monitoring</div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">How It Works</h2>
            
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">1. Continuous Monitoring</h3>
                <p className="text-white/70 mb-4">
                  Our systems continuously monitor all components, detecting potential issues before they become problems.
                </p>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Real-time health checks
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Performance metrics tracking
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Automated alerting
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">2. Automatic Failover</h3>
                <p className="text-white/70 mb-4">
                  When an issue is detected, our systems automatically switch to backup components in under 1 second.
                </p>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                  Instant component switching
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                  Seamless user experience
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                  Zero downtime
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-400">3. Self-Healing Recovery</h3>
                <p className="text-white/70 mb-4">
                  Failed components are automatically repaired and restored to full functionality without manual intervention.
                </p>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Automatic repair processes
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Component restoration
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Performance optimization
                </div>
              </div>
            </div>
          </section>

          <section className="text-center mb-16">
            <div className="bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Experience Unmatched Reliability
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join the elite platforms that never go down. Our redundancy systems ensure your business runs 24/7 without interruption.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 border border-fuchsia-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/25">
                  Get Started
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-purple-400/50">
                  View Services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}