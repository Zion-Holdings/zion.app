import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub & AI-Powered Technology Solutions</title>
        <meta name="description" content="Leading-edge autonomous technology solutions with 227+ automations, AI-powered content generation, comprehensive redundancy systems, and enterprise-grade reliability. Discover our cutting-edge innovation capabilities." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub & AI-Powered Technology Solutions" />
        <meta property="og:description" content="Leading-edge autonomous technology solutions with 227+ automations, AI-powered content generation, comprehensive redundancy systems, and enterprise-grade reliability." />
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
              Autonomous Innovation Hub delivering cutting-edge technology solutions with 
              <span className="text-cyan-400 font-semibold"> 227+ automations</span>, 
              <span className="text-fuchsia-400 font-semibold"> AI-powered systems</span>, and 
              <span className="text-blue-400 font-semibold"> enterprise-grade reliability</span>
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Self-running cloud automations, intelligent content generation, comprehensive redundancy systems, 
              and autonomous innovation that never sleeps.
            </p>
            
            {/* Primary Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border border-cyan-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                About Our Mission
              </Link>
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 border border-fuchsia-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/25">
                Explore Services
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 border border-green-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                Get Started
              </Link>
            </div>
          </section>

          {/* Core Capabilities Grid */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">🚀 Core Innovation Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Autonomous Systems */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Autonomous Systems</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• 227+ Self-Running Automations</li>
                  <li>• AI-Powered Content Generation</li>
                  <li>• Intelligent Orchestration</li>
                  <li>• Self-Healing Infrastructure</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/automation" className="text-cyan-300 hover:text-cyan-200 text-sm font-medium">
                    Explore Automation → 
                  </Link>
                </div>
              </div>

              {/* Redundancy & Reliability */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/40 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">Redundancy & Reliability</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Ultimate Redundancy Systems</li>
                  <li>• Auto-Failover & Recovery</li>
                  <li>• 99.9% Uptime Guarantee</li>
                  <li>• Multi-Cloud Resilience</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/reports" className="text-fuchsia-300 hover:text-fuchsia-200 text-sm font-medium">
                    View Systems → 
                  </Link>
                </div>
              </div>

              {/* AI & Machine Learning */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">AI & Machine Learning</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Content Factory Automation</li>
                  <li>• Intelligent Research Systems</li>
                  <li>• Trend Analysis & Prediction</li>
                  <li>• Autonomous Decision Making</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/resources" className="text-blue-300 hover:text-blue-200 text-sm font-medium">
                    Discover AI Tools → 
                  </Link>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Cloud & DevOps</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• GitHub Actions Automation</li>
                  <li>• Netlify Functions</li>
                  <li>• PM2 Process Management</li>
                  <li>• Continuous Deployment</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/case-studies" className="text-green-300 hover:text-green-200 text-sm font-medium">
                    See Examples → 
                  </Link>
                </div>
              </div>

              {/* Security & Compliance */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/40 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Security & Compliance</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Automated Security Scanning</li>
                  <li>• Dependency Vulnerability Checks</li>
                  <li>• Code Quality Assurance</li>
                  <li>• Compliance Monitoring</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/security" className="text-yellow-300 hover:text-yellow-200 text-sm font-medium">
                    Security Details → 
                  </Link>
                </div>
              </div>

              {/* Performance & Monitoring */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Performance & Monitoring</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Real-Time Health Monitoring</li>
                  <li>• Performance Analytics</li>
                  <li>• Automated Optimization</li>
                  <li>• Predictive Maintenance</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/performance" className="text-purple-300 hover:text-purple-200 text-sm font-medium">
                    View Metrics → 
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Key Advantages Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">🌟 Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">🚀 Autonomous Innovation</h3>
                <p className="text-white/80 mb-4">
                  Our systems never sleep. With 227+ automations running continuously, we deliver innovation 
                  around the clock without human intervention.
                </p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• 24/7 Autonomous Operation</li>
                  <li>• Self-Healing Infrastructure</li>
                  <li>• Intelligent Content Generation</li>
                  <li>• Automated Quality Assurance</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-fuchsia-400/20">
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">🔄 Ultimate Reliability</h3>
                <p className="text-white/80 mb-4">
                  Enterprise-grade redundancy systems ensure your operations never stop. Multiple failover 
                  mechanisms guarantee continuous service delivery.
                </p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Multi-Layer Redundancy</li>
                  <li>• Automatic Failover</li>
                  <li>• 99.9% Uptime Guarantee</li>
                  <li>• Real-Time Monitoring</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-8 border border-green-400/20">
                <h3 className="text-2xl font-bold text-green-400 mb-4">⚡ Rapid Development</h3>
                <p className="text-white/80 mb-4">
                  Accelerate your development with our comprehensive automation suite. From CI/CD to 
                  deployment, everything is optimized for speed and efficiency.
                </p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Automated CI/CD Pipelines</li>
                  <li>• Smart Build Optimization</li>
                  <li>• Instant Deployment</li>
                  <li>• Performance Monitoring</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/20">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">🔒 Enterprise Security</h3>
                <p className="text-white/80 mb-4">
                  Security is built into every layer. Automated scanning, vulnerability detection, and 
                  compliance monitoring ensure your systems remain protected.
                </p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Automated Security Scanning</li>
                  <li>• Dependency Vulnerability Checks</li>
                  <li>• Compliance Monitoring</li>
                  <li>• Real-Time Threat Detection</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Platform Navigation */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">🔗 Explore Our Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">About Us</h3>
                <p className="text-white/70 text-sm">Our mission, vision, and team</p>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Services</h3>
                <p className="text-white/70 text-sm">AI solutions & automation</p>
              </Link>
              
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Resources</h3>
                <p className="text-white/70 text-sm">Tools, insights & guides</p>
              </Link>
              
              <Link href="/case-studies" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Case Studies</h3>
                <p className="text-white/70 text-sm">Success stories & results</p>
              </Link>
              
              <Link href="/blog" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">✍️</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Blog</h3>
                <p className="text-white/70 text-sm">Latest insights & trends</p>
              </Link>
              
              <Link href="/contact" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Contact</h3>
                <p className="text-white/70 text-sm">Get in touch with us</p>
              </Link>
              
              <Link href="/reports" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-indigo-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">Reports</h3>
                <p className="text-white/70 text-sm">System status & analytics</p>
              </Link>
              
              <Link href="/automation" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-teal-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-teal-400 mb-2">Automation</h3>
                <p className="text-white/70 text-sm">227+ autonomous systems</p>
              </Link>
            </div>
          </section>

          {/* Latest Autonomous Content */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">🤖 Latest Autonomous Content</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
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
            <div className="bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Autonomous Innovation?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join the future of technology with our autonomous systems that never sleep, 
                self-healing infrastructure, and AI-powered innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
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
