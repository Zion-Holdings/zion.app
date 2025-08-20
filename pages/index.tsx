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
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-20">
            <div className="mb-8">
              <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-6">
                The world's most advanced autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium">
                  227+ Automations
                </span>
                <span className="px-4 py-2 bg-fuchsia-500/20 border border-fuchsia-400/30 rounded-full text-fuchsia-300 text-sm font-medium">
                  2,960+ Pages
                </span>
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                  AI-Powered
                </span>
                <span className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium">
                  Self-Healing
                </span>
              </div>
            </div>
            
            {/* Primary Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border border-cyan-400/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                About Us
              </Link>
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 border border-fuchsia-400/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/25">
                Our Services
              </Link>
              <Link href="/resources" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 border border-blue-400/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Resources
              </Link>
              <Link href="/case-studies" className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 border border-yellow-400/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25">
                Case Studies
              </Link>
              <Link href="/blog" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 border border-purple-400/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Blog
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 border border-green-400/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                Contact
              </Link>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Revolutionary Autonomous Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Content Factory */}
              <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">AI Content Factory</h3>
                <p className="text-white/80 text-center mb-6">Autonomous content generation with 2,960+ pages created by intelligent agents</p>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>Autonomous blog generation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>SEO optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>Content quality assurance</span>
                  </div>
                </div>
              </div>

              {/* Ultimate Redundancy System */}
              <div className="group bg-gradient-to-br from-fuchsia-500/10 to-purple-500/5 backdrop-blur-xl rounded-2xl p-8 border border-fuchsia-400/20 hover:border-fuchsia-400/40 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-4 text-center">Ultimate Redundancy</h3>
                <p className="text-white/80 text-center mb-6">Multi-layered redundancy systems ensuring 99.99% uptime</p>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    <span>PM2 process management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    <span>GitHub Actions backup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                    <span>Netlify functions redundancy</span>
                  </div>
                </div>
              </div>

              {/* Self-Healing Infrastructure */}
              <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/5 backdrop-blur-xl rounded-2xl p-8 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🛠️</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4 text-center">Self-Healing</h3>
                <p className="text-white/80 text-center mb-6">Automatic failure detection and recovery systems</p>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Build failure recovery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Dependency management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Performance monitoring</span>
                  </div>
                </div>
              </div>

              {/* Cloud Automation */}
              <div className="group bg-gradient-to-br from-blue-500/10 to-indigo-500/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">Cloud Automation</h3>
                <p className="text-white/80 text-center mb-6">227+ automated workflows running continuously</p>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>GitHub Actions orchestration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Netlify deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Content synchronization</span>
                  </div>
                </div>
              </div>

              {/* Advanced Monitoring */}
              <div className="group bg-gradient-to-br from-yellow-500/10 to-orange-500/5 backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">Advanced Monitoring</h3>
                <p className="text-white/80 text-center mb-6">Comprehensive health monitoring and analytics</p>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span>Performance metrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span>Security scanning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span>Real-time alerts</span>
                  </div>
                </div>
              </div>

              {/* Innovation Hub */}
              <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4 text-center">Innovation Hub</h3>
                <p className="text-white/80 text-center mb-6">Cutting-edge technology research and development</p>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>AI research</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Emerging tech</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Future solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Cutting-Edge Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 text-center hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚛️</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Next.js 14</h3>
                <p className="text-white/70 text-sm">React framework with App Router</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 text-center hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">TypeScript</h3>
                <p className="text-white/70 text-sm">Type-safe development</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 text-center hover:border-blue-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Netlify</h3>
                <p className="text-white/70 text-sm">Edge functions & deployment</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 text-center hover:border-green-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">PM2</h3>
                <p className="text-white/70 text-sm">Process management</p>
              </div>
            </div>
          </section>

          {/* Latest Autonomous Content */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Latest Autonomous Content
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold text-cyan-300">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-2 text-sm text-white/75">Freshly published by autonomous agents with AI-powered content generation.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-cyan-300/90 font-medium">
                  Open <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold text-fuchsia-300">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-2 text-sm text-white/75">AI-generated insights and automated system updates.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-fuchsia-300/90 font-medium">
                  Open <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold text-blue-300">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-2 text-sm text-white/75">Performance optimization and redundancy system enhancements.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-blue-300/90 font-medium">
                  Open <span aria-hidden>→</span>
                </div>
              </Link>
            </div>
          </section>

          {/* Platform Features Grid */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Platform Features & Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/about" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">About Us</h3>
                <p className="text-white/80 mb-6">Discover our mission, vision, and the innovative team behind Zion Tech Group</p>
                <div className="inline-flex items-center gap-2 text-cyan-300 font-medium">
                  Learn More <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/services" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-500 hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">Services</h3>
                <p className="text-white/80 mb-6">Explore our comprehensive AI solutions and technology services</p>
                <div className="inline-flex items-center gap-2 text-fuchsia-300 font-medium">
                  Explore Services <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/resources" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-500 hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Resources</h3>
                <p className="text-white/80 mb-6">Access our comprehensive tools, insights, and knowledge base</p>
                <div className="inline-flex items-center gap-2 text-blue-300 font-medium">
                  Browse Resources <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/case-studies" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-500 hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Case Studies</h3>
                <p className="text-white/80 mb-6">Real success stories and implementation examples</p>
                <div className="inline-flex items-center gap-2 text-yellow-300 font-medium">
                  View Cases <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/blog" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">✍️</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Blog</h3>
                <p className="text-white/80 mb-6">Latest insights, trends, and AI research from our experts</p>
                <div className="inline-flex items-center gap-2 text-purple-300 font-medium">
                  Read Blog <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/contact" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-500 hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Contact</h3>
                <p className="text-white/80 mb-6">Get in touch with our team for collaboration and support</p>
                <div className="inline-flex items-center gap-2 text-green-300 font-medium">
                  Contact Us <span aria-hidden>→</span>
                </div>
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mb-20">
            <div className="bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Join us in revolutionizing technology with autonomous innovation, AI-powered solutions, and cutting-edge automation systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border border-cyan-400/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                  Get Started Today
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-cyan-400/50">
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
