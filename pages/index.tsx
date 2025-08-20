import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub & AI Automation Platform</title>
        <meta name="description" content="Leading-edge autonomous technology platform with 227+ automations, AI-powered content generation, comprehensive redundancy systems, and cloud-native solutions." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub & AI Automation Platform" />
        <meta property="og:description" content="Leading-edge autonomous technology platform with 227+ automations, AI-powered content generation, comprehensive redundancy systems, and cloud-native solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-green-400">227+ Active Automations</span>
              </div>
            </div>
            
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              The world's most advanced <span className="text-cyan-400 font-semibold">autonomous innovation hub</span> delivering cutting-edge AI automation, 
              intelligent content generation, and enterprise-grade redundancy systems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Explore Platform
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-xl">
                View Services
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">227+</div>
                <div className="text-sm text-white/70">Automations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fuchsia-400">2,960+</div>
                <div className="text-sm text-white/70">Pages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">12</div>
                <div className="text-sm text-white/70">Components</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">100%</div>
                <div className="text-sm text-white/70">Autonomous</div>
              </div>
            </div>
          </section>

          {/* Core Features Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Revolutionary AI-Powered Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Content Generation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">AI Content Factory</h3>
                <p className="text-white/80 mb-4">Autonomous content generation with intelligent research, trend analysis, and continuous optimization.</p>
                <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2">
                  Explore Content <span>→</span>
                </Link>
              </div>

              {/* Redundancy Systems */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4">Ultimate Redundancy</h3>
                <p className="text-white/80 mb-4">Multi-layer redundancy systems ensuring 99.99% uptime with automatic failover and recovery.</p>
                <Link href="/resources" className="text-fuchsia-400 hover:text-fuchsia-300 font-semibold flex items-center gap-2">
                  Learn More <span>→</span>
                </Link>
              </div>

              {/* Automation Orchestration */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Smart Automation</h3>
                <p className="text-white/80 mb-4">Intelligent orchestration of 227+ automations with self-healing, monitoring, and optimization.</p>
                <Link href="/services" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2">
                  View Services <span>→</span>
                </Link>
              </div>

              {/* Cloud Native */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Cloud Native</h3>
                <p className="text-white/80 mb-4">Built for the cloud with Netlify integration, serverless functions, and global CDN distribution.</p>
                <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2">
                  See Examples <span>→</span>
                </Link>
              </div>

              {/* Self-Healing */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🩹</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Self-Healing</h3>
                <p className="text-white/80 mb-4">Automatic error detection, recovery, and continuous improvement without human intervention.</p>
                <Link href="/resources" className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2">
                  Discover <span>→</span>
                </Link>
              </div>

              {/* Performance */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Performance First</h3>
                <p className="text-white/80 mb-4">Optimized for speed with Lighthouse scores, automated testing, and continuous performance monitoring.</p>
                <Link href="/about" className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2">
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Cutting-Edge Technology Stack
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div className="text-sm font-semibold text-white/90">React 18</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-sm font-semibold text-white/90">Next.js 14</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="text-sm font-semibold text-white/90">Tailwind CSS</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔧</span>
                </div>
                <div className="text-sm font-semibold text-white/90">TypeScript</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">☁️</span>
                </div>
                <div className="text-sm font-semibold text-white/90">Netlify</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🤖</span>
                </div>
                <div className="text-sm font-semibold text-white/90">AI/ML</div>
              </div>
            </div>
          </section>

          {/* Platform Navigation */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Explore Our Platform
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/about" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">About Zion Tech</h3>
                <p className="text-white/80 mb-4">Discover our mission, vision, and the revolutionary technology that powers autonomous innovation.</p>
                <div className="text-cyan-400 group-hover:text-cyan-300 font-semibold flex items-center gap-2">
                  Learn About Us <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
              
              <Link href="/services" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4">AI Services</h3>
                <p className="text-white/80 mb-4">Explore our comprehensive suite of AI-powered automation services and intelligent solutions.</p>
                <div className="text-fuchsia-400 group-hover:text-fuchsia-300 font-semibold flex items-center gap-2">
                  View Services <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
              
              <Link href="/resources" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Resources Hub</h3>
                <p className="text-white/80 mb-4">Access our comprehensive library of tools, insights, and technical documentation.</p>
                <div className="text-blue-400 group-hover:text-blue-300 font-semibold flex items-center gap-2">
                  Browse Resources <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
              
              <Link href="/case-studies" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Case Studies</h3>
                <p className="text-white/80 mb-4">Real-world examples of how our autonomous systems deliver exceptional results.</p>
                <div className="text-yellow-400 group-hover:text-yellow-300 font-semibold flex items-center gap-2">
                  View Success Stories <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
              
              <Link href="/blog" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">✍️</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">AI Insights Blog</h3>
                <p className="text-white/80 mb-4">Stay updated with the latest trends in AI automation and autonomous technology.</p>
                <div className="text-purple-400 group-hover:text-purple-300 font-semibold flex items-center gap-2">
                  Read Insights <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
              
              <Link href="/contact" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Get In Touch</h3>
                <p className="text-white/80 mb-4">Ready to revolutionize your business? Connect with our team of AI experts.</p>
                <div className="text-green-400 group-hover:text-green-300 font-semibold flex items-center gap-2">
                  Contact Us <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </div>
          </section>

          {/* Latest Autonomous Content */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Latest Autonomous Updates
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0406</h3>
                <p className="text-sm text-white/75 mb-3">Freshly published by autonomous agents with intelligent content optimization.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90 font-semibold">
                  Read Update <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0405</h3>
                <p className="text-sm text-white/75 mb-3">AI-powered content generation and system optimization reports.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90 font-semibold">
                  Read Update <span aria-hidden>→</span>
                </div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0404</h3>
                <p className="text-sm text-white/75 mb-3">Continuous improvement and redundancy system status updates.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90 font-semibold">
                  Read Update <span aria-hidden>→</span>
                </div>
              </Link>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/reports" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                View All Updates <span>→</span>
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mb-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Join the autonomous revolution. Our AI-powered platform is already running, learning, and improving every minute.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Start Your Journey
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-xl">
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
