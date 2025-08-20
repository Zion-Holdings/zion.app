import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub & AI-Powered Platform</title>
        <meta name="description" content="Leading-edge autonomous technology platform with 227+ automations, AI-powered content generation, comprehensive redundancy systems, and cutting-edge innovation capabilities." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub & AI-Powered Platform" />
        <meta property="og:description" content="Leading-edge autonomous technology platform with 227+ automations, AI-powered content generation, comprehensive redundancy systems, and cutting-edge innovation capabilities." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-6">
              The world's most advanced autonomous innovation hub delivering cutting-edge technology solutions, 
              intelligent automation systems, and AI-powered content generation.
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Featuring 227+ autonomous systems, 2960+ generated pages, comprehensive redundancy, 
              and continuous innovation without human intervention.
            </p>
            
            {/* Primary Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border border-cyan-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                About Our Mission
              </Link>
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 border border-fuchsia-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/25">
                AI Services
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border border-green-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                Get Started
              </Link>
            </div>
          </section>

          {/* Platform Statistics */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Platform Power</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                <div className="text-white/80 font-semibold">Autonomous Systems</div>
                <div className="text-white/60 text-sm mt-2">Self-running automations</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">2960+</div>
                <div className="text-white/80 font-semibold">Generated Pages</div>
                <div className="text-white/60 text-sm mt-2">AI-powered content</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2">12</div>
                <div className="text-white/80 font-semibold">Core Components</div>
                <div className="text-white/60 text-sm mt-2">Reusable UI elements</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-white/80 font-semibold">Uptime</div>
                <div className="text-white/60 text-sm mt-2">Continuous operation</div>
              </div>
            </div>
          </section>

          {/* Core Features & Capabilities */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Core Features & Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Autonomous AI Systems</h3>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Self-running content generation</li>
                  <li>• Automated error detection & fixing</li>
                  <li>• Intelligent orchestration</li>
                  <li>• Continuous learning & improvement</li>
                </ul>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">Comprehensive Redundancy</h3>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Multi-layer backup systems</li>
                  <li>• Automatic failover</li>
                  <li>• Health monitoring</li>
                  <li>• Self-healing capabilities</li>
                </ul>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Cloud-Native Architecture</h3>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Netlify integration</li>
                  <li>• GitHub Actions automation</li>
                  <li>• PM2 process management</li>
                  <li>• Scalable infrastructure</li>
                </ul>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Advanced Automation</h3>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Build orchestration</li>
                  <li>• Dependency management</li>
                  <li>• Quality assurance</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Intelligent Monitoring</h3>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Real-time analytics</li>
                  <li>• Performance tracking</li>
                  <li>• Error detection</li>
                  <li>• Predictive maintenance</li>
                </ul>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Global Reach</h3>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Multi-region deployment</li>
                  <li>• CDN optimization</li>
                  <li>• Load balancing</li>
                  <li>• Geographic redundancy</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="font-semibold text-cyan-400">Next.js</div>
                <div className="text-white/60 text-sm">React framework</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="text-2xl mb-2">🔷</div>
                <div className="font-semibold text-fuchsia-400">TypeScript</div>
                <div className="text-white/60 text-sm">Type safety</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-semibold text-blue-400">Tailwind CSS</div>
                <div className="text-white/60 text-sm">Utility-first CSS</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="text-2xl mb-2">🤖</div>
                <div className="font-semibold text-yellow-400">Node.js</div>
                <div className="text-white/60 text-sm">Runtime environment</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="text-2xl mb-2">☁️</div>
                <div className="font-semibold text-purple-400">Netlify</div>
                <div className="text-white/60 text-sm">Cloud hosting</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="text-2xl mb-2">🔄</div>
                <div className="font-semibold text-green-400">PM2</div>
                <div className="text-white/60 text-sm">Process manager</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <div className="text-2xl mb-2">📦</div>
                <div className="font-semibold text-red-400">GitHub Actions</div>
                <div className="text-white/60 text-sm">CI/CD automation</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-indigo-400/30 transition-all duration-300">
                <div className="text-2xl mb-2">🔐</div>
                <div className="font-semibold text-indigo-400">Security</div>
                <div className="text-white/60 text-sm">Advanced protection</div>
              </div>
            </div>
          </section>

          {/* Platform Advantages */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">🚀 Innovation Leadership</h3>
                <ul className="text-white/80 space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>First autonomous content generation platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>227+ autonomous systems running simultaneously</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Continuous innovation without human intervention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>AI-powered decision making and optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-6">🛡️ Reliability & Security</h3>
                <ul className="text-white/80 space-y-3">
                  <li className="flex items-start">
                    <span className="text-fuchsia-400 mr-3">✓</span>
                    <span>99.99% uptime with comprehensive redundancy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fuchsia-400 mr-3">✓</span>
                    <span>Multi-layer security and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fuchsia-400 mr-3">✓</span>
                    <span>Automatic error detection and recovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fuchsia-400 mr-3">✓</span>
                    <span>Continuous security auditing and updates</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">⚡ Performance & Scalability</h3>
                <ul className="text-white/80 space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Cloud-native architecture for global scale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Automatic load balancing and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Real-time performance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Predictive scaling and resource management</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-green-400 mb-6">🎯 Business Value</h3>
                <ul className="text-white/80 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Zero maintenance overhead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Continuous content generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Automatic SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Data-driven insights and analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Explore Platform Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Explore Our Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">About Us</h3>
                <p className="text-white/70 mb-4">Discover our mission, vision, and the team behind the world's most advanced autonomous technology platform.</p>
                <div className="inline-flex items-center gap-2 text-cyan-300/90 font-semibold">
                  Learn More <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4">AI Services</h3>
                <p className="text-white/70 mb-4">Explore our comprehensive suite of AI-powered services, automation solutions, and intelligent systems.</p>
                <div className="inline-flex items-center gap-2 text-fuchsia-300/90 font-semibold">
                  View Services <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Resources</h3>
                <p className="text-white/70 mb-4">Access our comprehensive library of tools, insights, documentation, and learning resources.</p>
                <div className="inline-flex items-center gap-2 text-blue-300/90 font-semibold">
                  Browse Resources <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/case-studies" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Case Studies</h3>
                <p className="text-white/70 mb-4">See real-world examples of how our autonomous systems deliver exceptional results and value.</p>
                <div className="inline-flex items-center gap-2 text-yellow-300/90 font-semibold">
                  View Cases <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/blog" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">✍️</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Blog & Insights</h3>
                <p className="text-white/70 mb-4">Stay updated with the latest trends, insights, and innovations in autonomous technology.</p>
                <div className="inline-flex items-center gap-2 text-purple-300/90 font-semibold">
                  Read Blog <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/contact" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Contact Us</h3>
                <p className="text-white/70 mb-4">Ready to transform your business with autonomous technology? Let's discuss your needs.</p>
                <div className="inline-flex items-center gap-2 text-green-300/90 font-semibold">
                  Get Started <span aria-hidden>→</span>
                </div>
              </Link>
            </div>
          </section>

          {/* Latest Autonomous Content */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Latest Autonomous Content</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="text-sm text-white/75 mb-3">Freshly published by autonomous agents with real-time insights and updates.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90 font-semibold">
                  Read Update <span aria-hidden>→</span>
                </div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="text-sm text-white/75 mb-3">Latest autonomous insights and system performance updates.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90 font-semibold">
                  Read Update <span aria-hidden>→</span>
                </div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="text-sm text-white/75 mb-3">Real-time autonomous system monitoring and optimization insights.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90 font-semibold">
                  Read Update <span aria-hidden>→</span>
                </div>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link href="/reports" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                View All Reports <span aria-hidden>→</span>
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mx-auto max-w-4xl px-6 pb-16 text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join the autonomous revolution and discover how our AI-powered platform can transform your business operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
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
