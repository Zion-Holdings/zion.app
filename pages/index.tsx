import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub | AI-Powered Automation & Cloud Solutions</title>
        <meta name="description" content="Leading-edge autonomous technology solutions with 227+ automations, AI-powered content generation, comprehensive redundancy systems, and cloud-native innovation. Experience the future of autonomous development." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge autonomous technology solutions with 227+ automations, AI-powered content generation, and comprehensive redundancy systems." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="autonomous automation, AI-powered development, cloud-native solutions, redundancy systems, GitHub Actions automation, PM2 process management, Netlify functions, intelligent orchestration" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-6 py-2 border border-white/20 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-white/80">227+ Active Automations</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              The world's most advanced <span className="text-cyan-400 font-semibold">autonomous innovation hub</span> delivering cutting-edge technology solutions, 
              intelligent automation systems, and revolutionary cloud-native architectures.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Explore Our Mission
              </Link>
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-fuchsia-500/25">
                View Services
              </Link>
              <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
                Case Studies
              </Link>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">227+</div>
                <div className="text-sm text-white/70">Active Automations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fuchsia-400">2,960+</div>
                <div className="text-sm text-white/70">Generated Pages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">12</div>
                <div className="text-sm text-white/70">UI Components</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-sm text-white/70">Uptime</div>
              </div>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Revolutionary Core Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Autonomous Cloud Automations */}
              <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Autonomous Cloud Automations</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Self-running GitHub Actions that maintain, audit, and improve the repository without human intervention. 
                  Features 1-minute cadence synchronization and automatic failure recovery.
                </p>
                <Link href="/automation" className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  Explore Automations <span className="ml-2">→</span>
                </Link>
              </div>

              {/* AI-Powered Content Generation */}
              <div className="group bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-fuchsia-500/20 hover:border-fuchsia-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">AI-Powered Content Factory</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Autonomous content generation with intelligent research, trend analysis, and dynamic content optimization. 
                  Generates thousands of pages with zero human input.
                </p>
                <Link href="/resources" className="inline-flex items-center text-fuchsia-300 hover:text-fuchsia-200 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  View Content <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Comprehensive Redundancy Systems */}
              <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Ultimate Redundancy Systems</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Multi-layer redundancy with PM2 process management, GitHub Actions backup, and Netlify Functions fallbacks. 
                  Ensures 99.9% uptime with automatic failover.
                </p>
                <Link href="/automation" className="inline-flex items-center text-green-300 hover:text-green-200 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Intelligent Orchestration */}
              <div className="group bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Intelligent Orchestration</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Master automation orchestrators that coordinate hundreds of processes, monitor performance, and 
                  automatically optimize system resources in real-time.
                </p>
                <Link href="/automation" className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  Discover <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Advanced Security & Monitoring */}
              <div className="group bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-red-400 mb-4">Advanced Security & Monitoring</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Continuous security scanning, vulnerability assessment, and automated threat response. 
                  Real-time monitoring with intelligent alerting and recovery systems.
                </p>
                <Link href="/security" className="inline-flex items-center text-red-300 hover:text-red-200 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  Security Details <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Performance Optimization */}
              <div className="group bg-gradient-to-br from-indigo-500/10 to-violet-500/10 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">Performance Optimization</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Lighthouse performance monitoring, automated optimization, and intelligent resource management. 
                  Continuous performance improvement with AI-driven insights.
                </p>
                <Link href="/performance" className="inline-flex items-center text-indigo-300 hover:text-indigo-200 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  Performance <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Cutting-Edge Technology Stack
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚛️</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Next.js 14</h3>
                <p className="text-white/70 text-sm">React-based full-stack framework</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-fuchsia-400/30 transition-all duration-300 text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">PM2 Process Manager</h3>
                <p className="text-white/70 text-sm">Advanced process orchestration</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Netlify Functions</h3>
                <p className="text-white/70 text-sm">Serverless edge computing</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">GitHub Actions</h3>
                <p className="text-white/70 text-sm">CI/CD automation pipeline</p>
              </div>
            </div>
          </section>

          {/* Platform Features Grid */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Platform Features & Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4 text-center">About Our Mission</h3>
                <p className="text-white/80 text-center leading-relaxed">
                  Discover our vision for autonomous innovation and the future of technology development. 
                  Learn about our team, values, and commitment to pushing technological boundaries.
                </p>
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center text-cyan-300 group-hover:text-cyan-200 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Learn More <span className="ml-2">→</span>
                  </span>
                </div>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-4 text-center">AI-Powered Services</h3>
                <p className="text-white/80 text-center leading-relaxed">
                  Explore our comprehensive suite of autonomous services including content generation, 
                  automation orchestration, and intelligent system management.
                </p>
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center text-fuchsia-300 group-hover:text-fuchsia-200 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    View Services <span className="ml-2">→</span>
                  </span>
                </div>
              </Link>
              
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-2xl font-semibold text-blue-400 mb-4 text-center">Knowledge Hub</h3>
                <p className="text-white/80 text-center leading-relaxed">
                  Access our extensive library of resources, tools, and insights. 
                  From technical documentation to industry trends and best practices.
                </p>
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center text-blue-300 group-hover:text-blue-200 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Browse Resources <span className="ml-2">→</span>
                  </span>
                </div>
              </Link>
              
              <Link href="/case-studies" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4 text-center">Success Stories</h3>
                <p className="text-white/80 text-center leading-relaxed">
                  Discover real-world applications and success stories showcasing our autonomous systems 
                  in action across various industries and use cases.
                </p>
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center text-yellow-300 group-hover:text-yellow-200 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    View Cases <span className="ml-2">→</span>
                  </span>
                </div>
              </Link>
              
              <Link href="/blog" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">✍️</span>
                </div>
                <h3 className="text-2xl font-semibold text-purple-400 mb-4 text-center">Latest Insights</h3>
                <p className="text-white/80 text-center leading-relaxed">
                  Stay updated with our latest thoughts, industry analysis, and technological insights. 
                  AI-generated content that keeps you ahead of the curve.
                </p>
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center text-purple-300 group-hover:text-purple-200 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Read Blog <span className="ml-2">→</span>
                  </span>
                </div>
              </Link>
              
              <Link href="/contact" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-2xl font-semibold text-green-400 mb-4 text-center">Get In Touch</h3>
                <p className="text-white/80 text-center leading-relaxed">
                  Ready to explore autonomous innovation? Connect with our team to discuss 
                  how our systems can transform your technology infrastructure.
                </p>
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center text-green-300 group-hover:text-green-200 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Contact Us <span className="ml-2">→</span>
                  </span>
                </div>
              </Link>
            </div>
          </section>

          {/* Latest Autonomous Content */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-8">Latest Autonomous Content</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mb-20">
            <div className="bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Ready to Experience the Future of Autonomous Technology?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join us in revolutionizing how technology is developed, deployed, and maintained. 
                Experience the power of truly autonomous systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Start Your Journey
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
