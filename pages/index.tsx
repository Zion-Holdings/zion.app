import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub | 227+ Automations | 2960+ Pages</title>
        <meta name="description" content="Leading-edge autonomous technology platform with 227+ automations, 2960+ pages, and comprehensive redundancy systems. Experience the future of intelligent automation." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub | 227+ Automations | 2960+ Pages" />
        <meta property="og:description" content="Leading-edge autonomous technology platform with 227+ automations, 2960+ pages, and comprehensive redundancy systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-20">
            <div className="mb-8">
              <div className="flex justify-center gap-4 mb-6">
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium">
                  227+ Automations
                </span>
                <span className="px-4 py-2 bg-fuchsia-500/20 border border-fuchsia-400/30 rounded-full text-fuchsia-300 text-sm font-medium">
                  2960+ Pages
                </span>
                <span className="px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium">
                  Autonomous
                </span>
              </div>
            </div>
            
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              The world's most advanced autonomous innovation hub delivering cutting-edge technology solutions, 
              intelligent automation systems, and comprehensive redundancy infrastructure.
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
              Experience the future of technology with our self-healing, self-optimizing, and continuously evolving platform.
            </p>
            
            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Explore Our Platform
              </Link>
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-fuchsia-500/25">
                View Services
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </Link>
            </div>
          </section>

          {/* Key Features Grid */}
          <section className="mx-auto max-w-7xl px-6 pb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">
              Revolutionary Autonomous Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Autonomous Systems */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Autonomous Systems</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Self-running automations (227+)</li>
                  <li>• Intelligent orchestration</li>
                  <li>• Self-healing infrastructure</li>
                  <li>• Continuous optimization</li>
                </ul>
              </div>

              {/* Redundancy & Reliability */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">Redundancy & Reliability</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Ultimate redundancy systems</li>
                  <li>• Multi-layer failover</li>
                  <li>• 99.99% uptime guarantee</li>
                  <li>• Self-recovery mechanisms</li>
                </ul>
              </div>

              {/* AI-Powered Content */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-emerald-400/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4 text-center">AI-Powered Content</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Autonomous content generation</li>
                  <li>• SEO optimization</li>
                  <li>• Dynamic updates</li>
                  <li>• Intelligent curation</li>
                </ul>
              </div>

              {/* Cloud-Native Architecture */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Cloud-Native Architecture</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Netlify integration</li>
                  <li>• Serverless functions</li>
                  <li>• Global CDN</li>
                  <li>• Auto-scaling</li>
                </ul>
              </div>

              {/* Continuous Integration */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Continuous Integration</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• GitHub Actions automation</li>
                  <li>• Self-healing CI/CD</li>
                  <li>• Automated testing</li>
                  <li>• Smart deployment</li>
                </ul>
              </div>

              {/* Advanced Monitoring */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Advanced Monitoring</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Real-time analytics</li>
                  <li>• Performance tracking</li>
                  <li>• Health monitoring</li>
                  <li>• Predictive alerts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mx-auto max-w-7xl px-6 pb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">
              Cutting-Edge Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚛️</span>
                </div>
                <p className="text-white/80 text-sm font-medium">React 18</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🟢</span>
                </div>
                <p className="text-white/80 text-sm font-medium">Node.js 20</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔷</span>
                </div>
                <p className="text-white/80 text-sm font-medium">TypeScript</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <p className="text-white/80 text-sm font-medium">Next.js 14</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🐳</span>
                </div>
                <p className="text-white/80 text-sm font-medium">Docker</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">☁️</span>
                </div>
                <p className="text-white/80 text-sm font-medium">Netlify</p>
              </div>
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="mx-auto max-w-7xl px-6 pb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">
              Impressive Performance Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                <p className="text-white/70">Automation Scripts</p>
                <p className="text-white/50 text-sm">Self-running processes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">2960+</div>
                <p className="text-white/70">Dynamic Pages</p>
                <p className="text-white/50 text-sm">Auto-generated content</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">99.99%</div>
                <p className="text-white/70">Uptime</p>
                <p className="text-white/50 text-sm">Redundancy guaranteed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <p className="text-white/70">Monitoring</p>
                <p className="text-white/50 text-sm">Continuous operation</p>
              </div>
            </div>
          </section>

          {/* Latest Content Section */}
          <section className="mx-auto max-w-7xl px-6 pb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">
              Latest Autonomous Updates
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold text-cyan-300">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-2 text-sm text-white/75">Freshly published by autonomous agents with intelligent content optimization.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-cyan-300/90 font-medium">
                  View Update <span aria-hidden>→</span>
                </div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold text-fuchsia-300">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-2 text-sm text-white/75">AI-powered content generation and SEO optimization in action.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-fuchsia-300/90 font-medium">
                  View Update <span aria-hidden>→</span>
                </div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-emerald-400/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-emerald-500/0 via-emerald-400/10 to-emerald-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold text-emerald-300">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-2 text-sm text-white/75">Continuous improvement and system optimization updates.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-emerald-300/90 font-medium">
                  View Update <span aria-hidden>→</span>
                </div>
              </Link>
            </div>
          </section>

          {/* Platform Features */}
          <section className="mx-auto max-w-7xl px-6 pb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">
              Explore Our Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/about" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">About Us</h3>
                <p className="text-white/70 mb-4">Discover our mission, vision, and the revolutionary approach to autonomous technology.</p>
                <div className="text-cyan-300 text-sm font-medium">Learn More →</div>
              </Link>
              
              <Link href="/services" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-fuchsia-400 mb-4">Our Services</h3>
                <p className="text-white/70 mb-4">Explore our comprehensive suite of AI-powered solutions and automation services.</p>
                <div className="text-fuchsia-300 text-sm font-medium">Explore Services →</div>
              </Link>
              
              <Link href="/resources" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Resources</h3>
                <p className="text-white/70 mb-4">Access our comprehensive library of tools, insights, and technical resources.</p>
                <div className="text-blue-300 text-sm font-medium">Browse Resources →</div>
              </Link>
              
              <Link href="/case-studies" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Case Studies</h3>
                <p className="text-white/70 mb-4">See real-world success stories and the impact of our autonomous solutions.</p>
                <div className="text-yellow-300 text-sm font-medium">View Cases →</div>
              </Link>
              
              <Link href="/blog" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">✍️</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Blog & Insights</h3>
                <p className="text-white/70 mb-4">Stay updated with the latest trends, insights, and technological breakthroughs.</p>
                <div className="text-purple-300 text-sm font-medium">Read Blog →</div>
              </Link>
              
              <Link href="/contact" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-emerald-400/30 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">Contact Us</h3>
                <p className="text-white/70 mb-4">Ready to experience the future? Get in touch with our team of experts.</p>
                <div className="text-emerald-300 text-sm font-medium">Get Started →</div>
              </Link>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="mx-auto max-w-4xl px-6 pb-20 text-center">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Experience the Future of Technology?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of organizations already leveraging our autonomous innovation platform 
                to transform their digital infrastructure and achieve unprecedented efficiency.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Start Your Journey
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105">
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
