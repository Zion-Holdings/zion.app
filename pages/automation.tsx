import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems | Zion Tech Group - Advanced Redundancy & CI/CD</title>
        <meta name="description" content="Explore Zion Tech Group's revolutionary automation systems including Ultimate Redundancy V2, comprehensive CI/CD pipelines, and autonomous infrastructure management." />
        <meta property="og:title" content="Automation Systems - Zion Tech Group" />
        <meta property="og:description" content="Advanced automation and redundancy systems for zero-downtime operations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Automation Systems
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Revolutionary autonomous systems delivering unprecedented reliability, zero-downtime operations, and intelligent infrastructure management
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-amber-400 font-bold">12+</span> Redundancy Systems
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-orange-400 font-bold">99.99%</span> Uptime
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-red-400 font-bold">Auto</span> Self-Healing
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-green-400 font-bold">Zero</span> Manual Intervention
              </div>
            </div>
          </section>

          {/* Core Automation Systems */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🔄 Core Redundancy Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Ultimate Redundancy V2 */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-amber-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-4 text-center">Ultimate Redundancy V2</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Multi-layer redundancy architecture</li>
                  <li>• Automatic failover protection</li>
                  <li>• Self-healing infrastructure</li>
                  <li>• Geographic distribution</li>
                  <li>• Real-time health monitoring</li>
                </ul>
                <div className="text-center">
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_ULTIMATE_REDUNDANCY_V2.md" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm font-semibold">
                    View Documentation →
                  </a>
                </div>
              </div>

              {/* Comprehensive Redundancy */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Comprehensive Redundancy</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Full-stack redundancy coverage</li>
                  <li>• Automated backup systems</li>
                  <li>• Intelligent load balancing</li>
                  <li>• Performance optimization</li>
                  <li>• Continuous monitoring</li>
                </ul>
                <div className="text-center">
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_COMPREHENSIVE_REDUNDANCY.md" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                    View Documentation →
                  </a>
                </div>
              </div>

              {/* PM2 Process Management */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">PM2 Process Management</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Process monitoring & restart</li>
                  <li>• Load balancing</li>
                  <li>• Zero-downtime reloads</li>
                  <li>• Performance metrics</li>
                  <li>• Automatic recovery</li>
                </ul>
                <div className="text-center">
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_PM2_REDUNDANCY_COMPLETE.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                    View Documentation →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CI/CD & Deployment Automation */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🚀 CI/CD & Deployment Automation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* GitHub Actions */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🐙</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">GitHub Actions</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Automated testing & validation</li>
                  <li>• Smart build orchestration</li>
                  <li>• Dependency management</li>
                  <li>• Security scanning</li>
                  <li>• Deployment automation</li>
                </ul>
                <div className="text-center">
                  <a href="https://github.com/Zion-Holdings/zion.app/blob/main/README_GITHUB_ACTIONS.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                    View Documentation →
                  </a>
                </div>
              </div>

              {/* Netlify Functions */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Netlify Functions</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Serverless backend services</li>
                  <li>• Auto-scaling infrastructure</li>
                  <li>• Edge computing optimization</li>
                  <li>• Function redundancy</li>
                  <li>• Performance monitoring</li>
                </ul>
                <div className="text-center">
                  <span className="text-cyan-400 text-sm font-semibold">
                    Integrated System
                  </span>
                </div>
              </div>

              {/* Build Orchestration */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Build Orchestration</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Smart dependency resolution</li>
                  <li>• Parallel build optimization</li>
                  <li>• Cache management</li>
                  <li>• Error recovery</li>
                  <li>• Performance analytics</li>
                </ul>
                <div className="text-center">
                  <span className="text-yellow-400 text-sm font-semibold">
                    Self-Optimizing
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Features */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🌟 Advanced Automation Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-400 mb-2">Self-Healing Infrastructure</h3>
                    <p className="text-white/80">Automated detection and resolution of issues with intelligent recovery mechanisms.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">Predictive Maintenance</h3>
                    <p className="text-white/80">AI-powered analytics predict potential failures before they occur.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">Intelligent Scaling</h3>
                    <p className="text-white/80">Automatic resource allocation based on real-time demand and performance metrics.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">Zero-Downtime Deployments</h3>
                    <p className="text-white/80">Seamless updates with automatic rollback capabilities and health monitoring.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Continuous Monitoring</h3>
                    <p className="text-white/80">Real-time performance tracking with automated alerting and response systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">Security Automation</h3>
                    <p className="text-white/80">Automated threat detection, vulnerability scanning, and compliance monitoring.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Status & Monitoring */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📊 System Status & Monitoring</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">✅</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Ultimate Redundancy V2</h3>
                <p className="text-white/70 text-sm">Active & Monitoring</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">✅</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">GitHub Actions</h3>
                <p className="text-white/70 text-sm">Automated CI/CD</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">✅</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">PM2 Management</h3>
                <p className="text-white/70 text-sm">Process Monitoring</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">✅</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Netlify Functions</h3>
                <p className="text-white/70 text-sm">Serverless Active</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mx-auto max-w-4xl px-6 pb-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Revolutionary Automation?</h2>
              <p className="text-xl text-white/80 mb-8">
                Discover how our autonomous systems can transform your infrastructure with zero-downtime operations and intelligent automation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-amber-400/50">
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