import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub | 227+ Automations | AI & Cloud Solutions</title>
        <meta name="description" content="Leading-edge autonomous technology solutions with 227+ active automations. AI development, cloud infrastructure, automation systems, and self-healing applications." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub | 227+ Automations" />
        <meta property="og:description" content="Leading-edge autonomous technology solutions with 227+ active automations. AI development, cloud infrastructure, automation systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Autonomous innovation hub delivering cutting-edge technology solutions with <span className="text-cyan-400 font-bold">227+ active automations</span> and intelligent systems
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
              Pioneering the future where technology operates autonomously, continuously improving and innovating without human intervention
            </p>
            
            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Explore Our Services
              </Link>
              <Link href="/case-studies" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-fuchsia-500/25">
                View Case Studies
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-cyan-400/50 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
                Get Started
              </Link>
            </div>
          </section>

          {/* Key Statistics */}
          <section className="mx-auto max-w-7xl mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                <div className="text-white/80">Active Automations</div>
                <div className="text-sm text-white/60 mt-2">Self-running systems</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                <div className="text-white/80">Generated Pages</div>
                <div className="text-sm text-white/60 mt-2">AI-powered content</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-white/80">Uptime</div>
                <div className="text-sm text-white/60 mt-2">Redundancy systems</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-white/80">Monitoring</div>
                <div className="text-sm text-white/60 mt-2">Autonomous operation</div>
              </div>
            </div>
          </section>

          {/* Core Capabilities */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-16">Core Capabilities & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">AI & Machine Learning</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• Advanced ML Models & NLP</li>
                  <li>• Computer Vision Systems</li>
                  <li>• Predictive Analytics</li>
                  <li>• Autonomous Decision Making</li>
                  <li>• Generative AI Solutions</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/services" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-4 text-center">Automation Systems</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• Robotic Process Automation</li>
                  <li>• Smart Workflows</li>
                  <li>• Self-Healing Applications</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/services" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">Cloud Infrastructure</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• Cloud Migration & Setup</li>
                  <li>• Auto-scaling Solutions</li>
                  <li>• Performance Optimization</li>
                  <li>• Security Hardening</li>
                  <li>• Multi-cloud Management</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/services" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4 text-center">DevOps & CI/CD</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• CI/CD Pipeline Setup</li>
                  <li>• Automated Testing</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Monitoring & Alerting</li>
                  <li>• Deployment Automation</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/services" className="text-green-400 hover:text-green-300 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">Data Analytics</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• Data Visualization</li>
                  <li>• Predictive Analytics</li>
                  <li>• Business Intelligence</li>
                  <li>• Real-time Dashboards</li>
                  <li>• Data Pipeline Automation</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/services" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4 text-center">Technology Consulting</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• Digital Transformation</li>
                  <li>• Technology Strategy</li>
                  <li>• Architecture Design</li>
                  <li>• Innovation Workshops</li>
                  <li>• Performance Audits</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/services" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Features */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-16">Advanced Features & Advantages</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">🚀 Autonomous Systems</h3>
                  <p className="text-white/80 mb-4">Our systems operate independently with intelligent decision-making capabilities, continuously learning and improving without human intervention.</p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Self-healing applications</li>
                    <li>• Automated error recovery</li>
                    <li>• Intelligent resource management</li>
                    <li>• Predictive maintenance</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">🔄 Redundancy & Reliability</h3>
                  <p className="text-white/80 mb-4">Multi-layered redundancy systems ensure 99.9% uptime with automatic failover and recovery mechanisms.</p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Comprehensive redundancy</li>
                    <li>• Automatic failover</li>
                    <li>• Health monitoring</li>
                    <li>• Disaster recovery</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">🌐 Cloud-Native Architecture</h3>
                  <p className="text-white/80 mb-4">Built for the cloud with auto-scaling, load balancing, and distributed computing capabilities for optimal performance.</p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Auto-scaling infrastructure</li>
                    <li>• Load balancing</li>
                    <li>• Distributed computing</li>
                    <li>• Multi-region deployment</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">🔒 Security & Compliance</h3>
                  <p className="text-white/80 mb-4">Enterprise-grade security with automated threat detection, encryption, and compliance monitoring.</p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Automated threat detection</li>
                    <li>• End-to-end encryption</li>
                    <li>• Compliance monitoring</li>
                    <li>• Security audits</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Navigation */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-16">Explore Our Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">About Us</h3>
                <p className="text-white/70 text-sm">Our mission, vision, and core values</p>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Services</h3>
                <p className="text-white/70 text-sm">AI solutions & automation services</p>
              </Link>
              
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Resources</h3>
                <p className="text-white/70 text-sm">Tools, whitepapers & insights</p>
              </Link>
              
              <Link href="/case-studies" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Case Studies</h3>
                <p className="text-white/70 text-sm">Real success stories & results</p>
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
                  <span className="text-xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Contact</h3>
                <p className="text-white/70 text-sm">Get in touch & get started</p>
              </Link>
              
              <Link href="/reports" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-indigo-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">Reports</h3>
                <p className="text-white/70 text-sm">Performance & analytics data</p>
              </Link>
              
              <Link href="/automation" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-red-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">Automation</h3>
                <p className="text-white/70 text-sm">View our automation systems</p>
              </Link>
            </div>
          </section>

          {/* Latest Content Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Latest Autonomous Content</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          </section>

          {/* Call to Action */}
          <section className="mx-auto max-w-4xl text-center mb-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join the future of autonomous technology. Our AI-powered solutions are ready to revolutionize your operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Start Your Journey
                </Link>
                <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-fuchsia-400/50 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
                  See Results
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
