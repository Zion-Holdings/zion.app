import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PerformancePage() {
  return (
    <>
      <Head>
        <title>Performance & Optimization — Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Advanced performance optimization with Lighthouse monitoring, automated optimization algorithms, and intelligent resource management for maximum efficiency." />
        <meta property="og:title" content="Performance & Optimization — Zion Tech Group" />
        <meta property="og:description" content="Advanced performance optimization with Lighthouse monitoring and automated optimization." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Performance & Optimization
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Experience lightning-fast performance with our autonomous optimization systems. 
              Continuous monitoring, intelligent resource management, and AI-driven performance enhancement.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-6 py-2 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-white/80">35+ Performance Automations Active</span>
            </div>
          </section>

          {/* Performance Features */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Advanced Performance Features
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Lighthouse Performance Monitoring */}
              <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-400">Lighthouse Performance Monitoring</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Continuous performance monitoring using Google Lighthouse with automated scoring, 
                  performance budgets, and real-time optimization recommendations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    <span className="text-white/70">Core Web Vitals Tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    <span className="text-white/70">Performance Budgets</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    <span className="text-white/70">Automated Scoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    <span className="text-white/70">Real-time Insights</span>
                  </div>
                </div>
              </div>

              {/* Intelligent Resource Management */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400">Intelligent Resource Management</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  AI-powered resource optimization that automatically scales, caches, and distributes 
                  resources for maximum efficiency and minimal latency.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-white/70">Dynamic Scaling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-white/70">Smart Caching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-white/70">Load Distribution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-white/70">Predictive Optimization</span>
                  </div>
                </div>
              </div>

              {/* Automated Optimization */}
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400">Automated Optimization</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Continuous performance optimization with automated code splitting, image optimization, 
                  and bundle analysis for optimal loading speeds.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-white/70">Code Splitting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-white/70">Image Optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-white/70">Bundle Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-white/70">Performance Audits</span>
                  </div>
                </div>
              </div>

              {/* Real-time Analytics */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-8 border border-green-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400">Real-time Analytics</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Comprehensive performance analytics with real-time monitoring, user experience metrics, 
                  and predictive performance modeling.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-white/70">User Experience Metrics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-white/70">Performance Trends</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-white/70">Predictive Modeling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-white/70">Alert Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Performance Metrics & Benchmarks
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">95+</div>
                <div className="text-white/70 mb-4">Lighthouse Score</div>
                <div className="text-sm text-white/50">Consistently high performance ratings</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">&lt;1s</div>
                <div className="text-white/70 mb-4">First Contentful Paint</div>
                <div className="text-sm text-white/50">Lightning-fast initial rendering</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">&lt;2s</div>
                <div className="text-white/70 mb-4">Largest Contentful Paint</div>
                <div className="text-sm text-white/50">Optimal content loading speed</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">100ms</div>
                <div className="text-white/70 mb-4">Cumulative Layout Shift</div>
                <div className="text-sm text-white/50">Stable visual experience</div>
              </div>
            </div>
          </section>

          {/* Optimization Technologies */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Performance Optimization Technologies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-indigo-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-indigo-400 mb-4 text-center">Next.js Optimization</h3>
                <p className="text-white/80 text-center mb-6">
                  Built-in performance optimizations with automatic code splitting and static generation
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🖼️</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4 text-center">Image Optimization</h3>
                <p className="text-white/80 text-center mb-6">
                  Automatic image compression, format conversion, and responsive sizing
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📦</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">Bundle Optimization</h3>
                <p className="text-white/80 text-center mb-6">
                  Tree shaking, minification, and intelligent chunking for optimal loading
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💾</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4 text-center">Smart Caching</h3>
                <p className="text-white/80 text-center mb-6">
                  Intelligent caching strategies with automatic invalidation
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">Performance Auditing</h3>
                <p className="text-white/80 text-center mb-6">
                  Continuous performance monitoring and automated optimization recommendations
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">CDN Optimization</h3>
                <p className="text-white/80 text-center mb-6">
                  Global content delivery with edge caching and intelligent routing
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mb-20">
            <div className="bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Optimize Your Performance Today
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Experience lightning-fast performance with our autonomous optimization systems. 
                Let our AI-driven performance enhancement transform your user experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/25">
                  Get Performance Audit
                </Link>
                <Link href="/automation" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
                  Learn About Automation
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}