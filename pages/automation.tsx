import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems — Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Explore our comprehensive automation systems including 227+ active automations, ultimate redundancy systems, intelligent orchestration, and autonomous cloud operations." />
        <meta property="og:title" content="Automation Systems — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive automation systems including 227+ active automations and ultimate redundancy systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Automation Systems
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Discover the most advanced autonomous automation infrastructure ever built. 
              Our systems run independently, continuously improving and maintaining themselves.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-6 py-2 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-white/80">227+ Active Automations Running</span>
            </div>
          </section>

          {/* Core Automation Systems */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Core Automation Systems
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Ultimate Redundancy System */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-8 border border-green-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400">Ultimate Redundancy System</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Multi-layer redundancy architecture ensuring 99.9% uptime with automatic failover capabilities. 
                  Features PM2 process management, GitHub Actions backup, and Netlify Functions fallbacks.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-white/70">PM2 Process Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-white/70">GitHub Actions Redundancy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-white/70">Netlify Functions Backup</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-white/70">Automatic Failover</span>
                  </div>
                </div>
              </div>

              {/* Intelligent Orchestration */}
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-2xl p-8 border border-yellow-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400">Intelligent Orchestration</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Master automation orchestrators that coordinate hundreds of processes, monitor performance, 
                  and automatically optimize system resources in real-time.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="text-white/70">Process Coordination</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="text-white/70">Performance Monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="text-white/70">Resource Optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="text-white/70">Real-time Adaptation</span>
                  </div>
                </div>
              </div>

              {/* Autonomous Cloud Operations */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">Autonomous Cloud Operations</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Self-running GitHub Actions that maintain, audit, and improve the repository without human intervention. 
                  Features 1-minute cadence synchronization and automatic failure recovery.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="text-white/70">GitHub Actions Automation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="text-white/70">1-Minute Sync Cadence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="text-white/70">Automatic Failure Recovery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="text-white/70">Continuous Improvement</span>
                  </div>
                </div>
              </div>

              {/* Content Generation Factory */}
              <div className="bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-fuchsia-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-fuchsia-400">AI Content Factory</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Autonomous content generation with intelligent research, trend analysis, and dynamic content optimization. 
                  Generates thousands of pages with zero human input.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    <span className="text-white/70">Intelligent Research</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    <span className="text-white/70">Trend Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    <span className="text-white/70">Dynamic Optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    <span className="text-white/70">Zero Human Input</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Automation Categories */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Automation Categories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Build & Deployment</h3>
                <p className="text-white/80 text-center mb-6">
                  Automated build processes, deployment pipelines, and infrastructure management
                </p>
                <div className="text-center text-sm text-white/60">
                  45+ Active Automations
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-4 text-center">Monitoring & Analytics</h3>
                <p className="text-white/80 text-center mb-6">
                  Real-time system monitoring, performance analytics, and health checks
                </p>
                <div className="text-center text-sm text-white/60">
                  38+ Active Automations
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4 text-center">Security & Compliance</h3>
                <p className="text-white/80 text-center mb-6">
                  Automated security scanning, vulnerability assessment, and compliance monitoring
                </p>
                <div className="text-center text-sm text-white/60">
                  32+ Active Automations
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">Redundancy & Backup</h3>
                <p className="text-white/80 text-center mb-6">
                  Multi-layer redundancy systems, automated backups, and disaster recovery
                </p>
                <div className="text-center text-sm text-white/60">
                  28+ Active Automations
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">Content Generation</h3>
                <p className="text-white/80 text-center mb-6">
                  AI-powered content creation, research automation, and dynamic updates
                </p>
                <div className="text-center text-sm text-white/60">
                  42+ Active Automations
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-indigo-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-indigo-400 mb-4 text-center">Performance & Optimization</h3>
                <p className="text-white/80 text-center mb-6">
                  Performance monitoring, optimization algorithms, and resource management
                </p>
                <div className="text-center text-sm text-white/60">
                  35+ Active Automations
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mb-20">
            <div className="bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Ready to Experience Autonomous Automation?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Discover how our automation systems can transform your technology infrastructure 
                and eliminate manual maintenance forever.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Get Started
                </Link>
                <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
                  View Case Studies
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}