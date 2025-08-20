import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub | 227+ Automations</title>
        <meta name="description" content="Leading-edge autonomous technology solutions with 227+ automations, comprehensive redundancy systems, and intelligent innovation platforms. Experience the future of autonomous development." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub | 227+ Automations" />
        <meta property="og:description" content="Leading-edge autonomous technology solutions with 227+ automations, comprehensive redundancy systems, and intelligent innovation platforms." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="autonomous systems, AI automation, cloud-native, redundancy systems, intelligent orchestration, self-healing systems, continuous deployment" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-cyan-300 mb-6">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                Autonomous Innovation Hub
              </div>
            </div>
            
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              Zion Tech Group
            </h1>
            
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              The world's most advanced autonomous innovation platform with{' '}
              <span className="text-cyan-400 font-semibold">227+ automations</span>,{' '}
              <span className="text-fuchsia-400 font-semibold">intelligent redundancy systems</span>, and{' '}
              <span className="text-blue-400 font-semibold">self-healing capabilities</span>
            </p>
            
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
              Experience the future of autonomous development with cloud-native solutions that maintain, audit, and improve themselves without human intervention.
            </p>
            
            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Explore Our Platform
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-fuchsia-400/50 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
                View Services
              </Link>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="mx-auto max-w-7xl px-6 pb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-16">
              Revolutionary Autonomous Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Automation Power */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">227+ Automations</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Self-running cloud automations that maintain, audit, and improve the platform continuously without human intervention.
                </p>
                <div className="mt-6">
                  <Link href="/automation" className="text-cyan-300 hover:text-cyan-200 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Explore Automations <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>

              {/* Intelligent Redundancy */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">Intelligent Redundancy</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Multi-layered redundancy systems with automatic failover, self-healing, and intelligent orchestration for 99.99% uptime.
                </p>
                <div className="mt-6">
                  <Link href="/redundancy" className="text-fuchsia-300 hover:text-fuchsia-200 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>

              {/* Self-Healing Systems */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Self-Healing Systems</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Advanced monitoring and automatic recovery systems that detect and resolve issues before they impact users.
                </p>
                <div className="mt-6">
                  <Link href="/monitoring" className="text-blue-300 hover:text-blue-200 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    View Monitoring <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>

              {/* Continuous Deployment */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Continuous Deployment</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Automated CI/CD pipelines with intelligent testing, security scanning, and seamless deployment across multiple environments.
                </p>
                <div className="mt-6">
                  <Link href="/deployment" className="text-yellow-300 hover:text-yellow-200 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Deployment Info <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>

              {/* AI-Powered Content */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">AI Content Generation</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Autonomous content creation, optimization, and management systems that generate high-quality content 24/7.
                </p>
                <div className="mt-6">
                  <Link href="/content-hub" className="text-purple-300 hover:text-purple-200 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Content Hub <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>

              {/* Enterprise Security */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Enterprise Security</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Advanced security scanning, vulnerability detection, and automated threat response systems for enterprise-grade protection.
                </p>
                <div className="mt-6">
                  <Link href="/security" className="text-green-300 hover:text-green-200 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Security Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mx-auto max-w-7xl px-6 pb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-16">
              Cutting-Edge Technology Stack
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚛️</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Next.js 14</h3>
                <p className="text-white/70 text-sm">React framework with App Router</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🟢</span>
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">Node.js 20+</h3>
                <p className="text-white/70 text-sm">Latest LTS with ES modules</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">PM2 Ecosystem</h3>
                <p className="text-white/70 text-sm">Process management & monitoring</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold text-orange-400 mb-2">Netlify</h3>
                <p className="text-white/70 text-sm">Edge functions & hosting</p>
              </div>
            </div>
          </section>

          {/* Automation Capabilities Section */}
          <section className="mx-auto max-w-7xl px-6 pb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-16">
              Comprehensive Automation Systems
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Infrastructure & Operations</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">GitHub Actions Redundancy</h4>
                      <p className="text-white/70 text-sm">Automated workflow management with backup systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">PM2 Process Management</h4>
                      <p className="text-white/70 text-sm">Advanced process orchestration and monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Netlify Functions</h4>
                      <p className="text-white/70 text-sm">Serverless automation and edge computing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Build Orchestration</h4>
                      <p className="text-white/70 text-sm">Intelligent build management and optimization</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-6">Content & Intelligence</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">AI Content Factory</h4>
                      <p className="text-white/70 text-sm">Autonomous content generation and optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Marketing Automation</h4>
                      <p className="text-white/70 text-sm">LinkedIn, Instagram, and social media automation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">SEO & Analytics</h4>
                      <p className="text-white/70 text-sm">Automated SEO optimization and performance tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Intelligent Orchestration</h4>
                      <p className="text-white/70 text-sm">AI-powered system coordination and optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Performance & Reliability Section */}
          <section className="mx-auto max-w-7xl px-6 pb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-16">
              Performance & Reliability
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">99.99% Uptime</h3>
                <p className="text-white/80 text-lg">
                  Multi-layered redundancy systems ensure continuous operation with automatic failover and recovery.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">1-Minute Sync</h3>
                <p className="text-white/80 text-lg">
                  Rapid synchronization keeps all systems updated and synchronized in real-time for optimal performance.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Self-Healing</h3>
                <p className="text-white/80 text-lg">
                  Automatic detection and resolution of issues ensures systems maintain optimal performance without intervention.
                </p>
              </div>
            </div>
          </section>

          {/* Latest Updates Section */}
          <section className="mx-auto max-w-7xl px-6 pb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-16">
              Latest Autonomous Updates
            </h2>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                  <span className="text-xs text-cyan-300 font-medium">Latest</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="text-sm text-white/75 mb-3">Freshly published by autonomous agents with enhanced content optimization.</p>
                <div className="flex items-center gap-2 text-xs text-cyan-300/90">
                  <span>View Update</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse"></span>
                  <span className="text-xs text-fuchsia-300 font-medium">Recent</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="text-sm text-white/75 mb-3">System optimization and performance improvements deployed automatically.</p>
                <div className="flex items-center gap-2 text-xs text-fuchsia-300/90">
                  <span>View Update</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  <span className="text-xs text-blue-300 font-medium">Update</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="text-sm text-white/75 mb-3">Security enhancements and dependency updates applied seamlessly.</p>
                <div className="flex items-center gap-2 text-xs text-blue-300/90">
                  <span>View Update</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/reports" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                View All Updates <span>→</span>
              </Link>
            </div>
          </section>

          {/* Getting Started Section */}
          <section className="mx-auto max-w-7xl px-6 pb-20">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold tracking-wide text-white/90 mb-6">
                  Ready to Experience the Future?
                </h2>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Join thousands of developers and organizations who are already leveraging the power of autonomous innovation. 
                  Explore our platform, discover our capabilities, and see how we can transform your development workflow.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                    Learn About Us
                  </Link>
                  <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-fuchsia-400/50 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
                    Explore Services
                  </Link>
                  <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-green-400/50 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Navigation Section */}
          <section className="mx-auto max-w-7xl px-6 pb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">
              Quick Navigation
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🏢</span>
                </div>
                <h3 className="text-sm font-semibold text-cyan-400">About</h3>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-sm font-semibold text-fuchsia-400">Services</h3>
              </Link>
              
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-sm font-semibold text-blue-400">Resources</h3>
              </Link>
              
              <Link href="/case-studies" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-sm font-semibold text-yellow-400">Case Studies</h3>
              </Link>
              
              <Link href="/blog" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">✍️</span>
                </div>
                <h3 className="text-sm font-semibold text-purple-400">Blog</h3>
              </Link>
              
              <Link href="/contact" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📧</span>
                </div>
                <h3 className="text-sm font-semibold text-green-400">Contact</h3>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
