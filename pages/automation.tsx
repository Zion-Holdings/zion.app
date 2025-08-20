import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive automation systems including 227+ intelligent automations, redundancy systems, AI-powered agents, and autonomous infrastructure." />
        <meta property="og:title" content="Automation Systems — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive automation systems including 227+ intelligent automations, redundancy systems, AI-powered agents, and autonomous infrastructure." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Automation Systems
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Discover the world&apos;s most advanced autonomous automation infrastructure with 227+ intelligent systems, comprehensive redundancy, and AI-powered innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300">
                ← Back to Home
              </Link>
            </div>
          </section>

          {/* Core Automation Categories */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🚀 Core Automation Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Redundancy Systems */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Redundancy Systems</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-6">
                  <li>• Ultimate Redundancy V2</li>
                  <li>• Comprehensive Redundancy</li>
                  <li>• PM2 Process Management</li>
                  <li>• GitHub Actions Redundancy</li>
                  <li>• Netlify Functions Redundancy</li>
                  <li>• Multi-layer Failover</li>
                </ul>
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/20 text-cyan-400 mb-4">
                    Status: Active & Monitoring
                  </div>
                  <Link href="/README_ULTIMATE_REDUNDANCY.md" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                    View Documentation →
                  </Link>
                </div>
              </div>

              {/* AI Automation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">AI Automation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-6">
                  <li>• AI Trends Research</li>
                  <li>• Content Generation</li>
                  <li>• Intelligent Orchestration</li>
                  <li>• Autonomous Agents</li>
                  <li>• Innovation Systems</li>
                  <li>• Machine Learning</li>
                </ul>
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-fuchsia-400/20 text-fuchsia-400 mb-4">
                    Status: Continuously Learning
                  </div>
                  <Link href="/AI_CONTENT_FACTORY_README.md" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                    View Documentation →
                  </Link>
                </div>
              </div>

              {/* Build & Deploy */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Build & Deploy</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-6">
                  <li>• Smart Build Orchestration</li>
                  <li>• Continuous Monitoring</li>
                  <li>• Self-Healing Systems</li>
                  <li>• Performance Optimization</li>
                  <li>• Quality Assurance</li>
                  <li>• Automated Testing</li>
                </ul>
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400/20 text-green-400 mb-4">
                    Status: Self-Optimizing
                  </div>
                  <Link href="/README_GITHUB_ACTIONS.md" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                    View Documentation →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Automation Systems */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🔧 Advanced Automation Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Monitoring & Analytics */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">📊 Monitoring & Analytics</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Performance Monitoring</li>
                  <li>• Health Checks</li>
                  <li>• Real-time Analytics</li>
                  <li>• Predictive Maintenance</li>
                  <li>• Automated Reporting</li>
                  <li>• Alert Systems</li>
                </ul>
                <div className="text-yellow-400 text-sm font-semibold text-center">
                  Status: Real-time Active
                </div>
              </div>

              {/* Security & Compliance */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">🔒 Security & Compliance</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Automated Security Scanning</li>
                  <li>• Vulnerability Assessment</li>
                  <li>• Compliance Monitoring</li>
                  <li>• Threat Detection</li>
                  <li>• Security Automation</li>
                  <li>• Zero-trust Architecture</li>
                </ul>
                <div className="text-purple-400 text-sm font-semibold text-center">
                  Status: 24/7 Protection
                </div>
              </div>

              {/* Global Infrastructure */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-red-400 mb-4 text-center">🌐 Global Infrastructure</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• Multi-region Deployment</li>
                  <li>• Edge Computing</li>
                  <li>• Global CDN</li>
                  <li>• Geographic Redundancy</li>
                  <li>• Load Balancing</li>
                  <li>• Auto-scaling</li>
                </ul>
                <div className="text-red-400 text-sm font-semibold text-center">
                  Status: Global Active
                </div>
              </div>
            </div>
          </section>

          {/* Automation Statistics */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📈 Automation Statistics & Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">227+</div>
                <p className="text-white/70 text-sm">Total Automations</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <div className="text-3xl font-bold text-fuchsia-400 mb-2">15+</div>
                <p className="text-white/70 text-sm">Redundancy Systems</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
                <p className="text-white/70 text-sm">Uptime</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                <p className="text-white/70 text-sm">AI Agents</p>
              </div>
            </div>
          </section>

          {/* Documentation & Resources */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📚 Documentation & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">📖 Core Documentation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <Link href="/README.md" className="text-blue-400 hover:text-blue-300">Main README</Link> - Project overview</li>
                  <li>• <Link href="/ARCHITECTURE.md" className="text-blue-400 hover:text-blue-300">Architecture Guide</Link> - System design</li>
                  <li>• <Link href="/API.md" className="text-blue-400 hover:text-blue-300">API Documentation</Link> - Integration guide</li>
                  <li>• <Link href="/DEPLOYMENT.md" className="text-blue-400 hover:text-blue-300">Deployment Guide</Link> - Setup instructions</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">🔧 Automation Guides</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <Link href="/README_ULTIMATE_REDUNDANCY.md" className="text-purple-400 hover:text-purple-300">Ultimate Redundancy</Link> - System overview</li>
                  <li>• <Link href="/README_COMPREHENSIVE_REDUNDANCY.md" className="text-purple-400 hover:text-purple-300">Comprehensive Redundancy</Link> - Advanced features</li>
                  <li>• <Link href="/README_PM2_REDUNDANCY_COMPLETE.md" className="text-purple-400 hover:text-purple-300">PM2 Redundancy</Link> - Process management</li>
                  <li>• <Link href="/README_GITHUB_ACTIONS.md" className="text-purple-400 hover:text-purple-300">GitHub Actions</Link> - CI/CD automation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">🚀 Advanced Features</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-4">
                  <li>• <Link href="/SECURITY.md" className="text-green-400 hover:text-green-300">Security Guide</Link> - Protection measures</li>
                  <li>• <Link href="/TESTING.md" className="text-green-400 hover:text-green-300">Testing Guide</Link> - Quality assurance</li>
                  <li>• <Link href="/SERVICE_GENERATION_README.md" className="text-green-400 hover:text-green-300">Service Generation</Link> - Auto-creation</li>
                  <li>• <Link href="/ULTIMATE_REDUNDANCY_AUTOMATION_README.md" className="text-green-400 hover:text-green-300">Automation README</Link> - System details</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mx-auto max-w-4xl px-6 pb-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Explore Our Automation Systems?</h2>
              <p className="text-xl text-white/80 mb-8">
                Discover how our autonomous systems can revolutionize your infrastructure with zero-downtime operations and intelligent automation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started
                </Link>
                <Link href="/" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}