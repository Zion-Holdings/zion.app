import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub | AI & Automation Solutions</title>
        <meta name="description" content="Leading-edge AI technology solutions, autonomous innovation systems, and comprehensive automation services. 227+ active automations, 2960+ pages, and cutting-edge technology." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge AI technology solutions and autonomous innovation systems with 227+ active automations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Autonomous innovation hub delivering cutting-edge AI technology solutions and intelligent automation systems
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-cyan-400/30">
                <span className="text-cyan-400 font-semibold">227+ Active Automations</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-fuchsia-400/30">
                <span className="text-fuchsia-400 font-semibold">2960+ Pages</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-blue-400/30">
                <span className="text-blue-400 font-semibold">Cloud-Native</span>
              </div>
            </div>
            
            {/* Primary Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 border border-cyan-400/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-400/25">
                About Us
              </Link>
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-fuchsia-400 to-purple-500 hover:from-fuchsia-500 hover:to-purple-600 border border-fuchsia-400/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-fuchsia-400/25">
                Our Services
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 border border-green-400/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-400/25">
                Get Started
              </Link>
            </div>
          </section>

          {/* Key Features & Capabilities */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Core Capabilities & Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">AI Development</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision Systems</li>
                  <li>• Predictive Analytics</li>
                  <li>• Autonomous Decision Making</li>
                </ul>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">Automation Systems</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• Self-Healing Applications</li>
                  <li>• Smart Workflows</li>
                  <li>• 227+ Active Automations</li>
                </ul>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Cloud Infrastructure</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Cloud Migration</li>
                  <li>• Auto-scaling Solutions</li>
                  <li>• Performance Optimization</li>
                  <li>• Security Hardening</li>
                  <li>• Netlify Integration</li>
                </ul>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">DevOps & CI/CD</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• CI/CD Pipeline Setup</li>
                  <li>• Automated Testing</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Monitoring & Alerting</li>
                  <li>• GitHub Actions Integration</li>
                </ul>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Data Analytics</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Data Visualization</li>
                  <li>• Predictive Analytics</li>
                  <li>• Business Intelligence</li>
                  <li>• Real-time Dashboards</li>
                  <li>• Performance Monitoring</li>
                </ul>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Technology Consulting</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Strategic Planning</li>
                  <li>• Technology Assessment</li>
                  <li>• Implementation Guidance</li>
                  <li>• Performance Optimization</li>
                  <li>• Innovation Strategy</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technology Stack & Advantages */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Technology Stack & Advantages</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Modern Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-lg font-semibold text-cyan-300 mb-2">Frontend</div>
                    <div className="text-sm text-white/70">Next.js, React, TypeScript</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-lg font-semibold text-fuchsia-300 mb-2">Backend</div>
                    <div className="text-sm text-white/70">Node.js, PM2, Netlify Functions</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-lg font-semibold text-green-300 mb-2">Cloud</div>
                    <div className="text-sm text-white/70">Netlify, GitHub Actions, PM2</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-lg font-semibold text-blue-300 mb-2">Automation</div>
                    <div className="text-sm text-white/70">227+ Scripts, Cron Jobs, AI Agents</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-6">Key Advantages</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-fuchsia-400 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <div className="font-semibold text-white">Autonomous Operation</div>
                      <div className="text-sm text-white/70">Self-running systems with minimal human intervention</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <div className="font-semibold text-white">Rapid Development</div>
                      <div className="text-sm text-white/70">1-minute sync cadence and automated CI/CD</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <div className="font-semibold text-white">Self-Healing</div>
                      <div className="text-sm text-white/70">Automatic failure detection and recovery</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <div className="font-semibold text-white">Scalable Architecture</div>
                      <div className="text-sm text-white/70">Cloud-native with auto-scaling capabilities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Explore Our Platform */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Explore Our Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">About Us</h3>
                <p className="text-white/70 text-sm">Learn about our mission, vision, and core values</p>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Services</h3>
                <p className="text-white/70 text-sm">Discover our comprehensive AI solutions</p>
              </Link>
              
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Resources</h3>
                <p className="text-white/70 text-sm">Access tools, case studies, and insights</p>
              </Link>
              
              <Link href="/case-studies" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Case Studies</h3>
                <p className="text-white/70 text-sm">See real success stories and results</p>
              </Link>
              
              <Link href="/blog" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">✍️</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Blog</h3>
                <p className="text-white/70 text-sm">Read our latest insights and trends</p>
              </Link>
              
              <Link href="/contact" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Contact</h3>
                <p className="text-white/70 text-sm">Get in touch and start your journey</p>
              </Link>
              
              <Link href="/reports" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-indigo-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">Reports</h3>
                <p className="text-white/70 text-sm">View detailed analytics and insights</p>
              </Link>
              
              <Link href="/automation" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-red-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">Automation</h3>
                <p className="text-white/70 text-sm">Explore our automation systems</p>
              </Link>
            </div>
          </section>

          {/* Latest Autonomous Content */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Latest Autonomous Content</h2>
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
          <section className="mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join the future of autonomous technology and AI-driven innovation. Let's build something extraordinary together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Started Today
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-300 hover:scale-105">
                  Explore Services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
