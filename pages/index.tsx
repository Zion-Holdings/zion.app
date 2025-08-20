import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub | AI & Automation Solutions</title>
        <meta name="description" content="Leading-edge autonomous technology solutions with 227+ automations, AI development, cloud infrastructure, and intelligent automation systems. Transform your business with cutting-edge innovation." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge autonomous technology solutions with 227+ automations, AI development, cloud infrastructure, and intelligent automation systems." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI automation, autonomous systems, cloud infrastructure, machine learning, DevOps, CI/CD, technology consulting, Zion Tech Group" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              The world's most advanced autonomous innovation hub delivering cutting-edge AI solutions, 
              intelligent automation systems, and self-evolving technology infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-cyan-400/30">
                <span className="text-cyan-400 font-semibold">🚀 227+ Active Automations</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-fuchsia-400/30">
                <span className="text-fuchsia-400 font-semibold">🤖 AI-Powered Systems</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-400/30">
                <span className="text-purple-400 font-semibold">☁️ Cloud-Native Architecture</span>
              </div>
            </div>
            
            {/* Primary Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-400/25">
                Discover Our Mission
              </Link>
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-fuchsia-400 to-purple-500 hover:from-fuchsia-500 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-fuchsia-400/25">
                Explore Services
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-cyan-400/50 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                Get Started
              </Link>
            </div>
          </section>

          {/* Key Statistics Section */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Platform Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                <div className="text-white/80 font-semibold">Active Automations</div>
                <div className="text-white/60 text-sm mt-2">Self-running systems</div>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-400/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-8 border border-fuchsia-400/30 text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                <div className="text-white/80 font-semibold">Generated Pages</div>
                <div className="text-white/60 text-sm mt-2">AI-created content</div>
              </div>
              <div className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/30 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">12</div>
                <div className="text-white/80 font-semibold">Core Components</div>
                <div className="text-white/60 text-sm mt-2">Reusable modules</div>
              </div>
              <div className="bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-8 border border-green-400/30 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-white/80 font-semibold">Uptime</div>
                <div className="text-white/60 text-sm mt-2">Reliability guarantee</div>
              </div>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Core Capabilities</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">🤖 Autonomous AI Systems</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Our AI systems operate independently, continuously learning and improving without human intervention. 
                  From content generation to decision-making, our autonomous agents handle complex tasks 24/7.
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Self-evolving machine learning models
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Natural language processing & generation
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Computer vision & image recognition
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Predictive analytics & forecasting
                  </li>
                </ul>
                <Link href="/services" className="inline-block mt-6 px-6 py-3 bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-400/50 rounded-lg text-cyan-400 transition-all duration-300">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-fuchsia-400">⚡ Intelligent Automation</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  End-to-end automation solutions that streamline operations across your entire organization. 
                  Our systems adapt, optimize, and self-heal for maximum efficiency and reliability.
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <span className="text-fuchsia-400 mr-3">✓</span>
                    Process automation & workflow optimization
                  </li>
                  <li className="flex items-center">
                    <span className="text-fuchsia-400 mr-3">✓</span>
                    Self-healing applications & infrastructure
                  </li>
                  <li className="flex items-center">
                    <span className="text-fuchsia-400 mr-3">✓</span>
                    Robotic process automation (RPA)
                  </li>
                  <li className="flex items-center">
                    <span className="text-fuchsia-400 mr-3">✓</span>
                    Smart workflow orchestration
                  </li>
                </ul>
                <Link href="/case-studies" className="inline-block mt-6 px-6 py-3 bg-fuchsia-400/20 hover:bg-fuchsia-400/30 border border-fuchsia-400/50 rounded-lg text-fuchsia-400 transition-all duration-300">
                  View Case Studies →
                </Link>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Advanced Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-400/20 to-indigo-500/20 backdrop-blur-xl rounded-xl p-6 border border-blue-400/30 text-center">
                <div className="text-3xl mb-3">☁️</div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Cloud Infrastructure</h3>
                <p className="text-white/70 text-sm">Auto-scaling, self-healing cloud platforms with 99.9% uptime guarantee</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-xl rounded-xl p-6 border border-green-400/30 text-center">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">DevOps & CI/CD</h3>
                <p className="text-white/70 text-sm">Automated pipelines, testing, and deployment with intelligent monitoring</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 backdrop-blur-xl rounded-xl p-6 border border-purple-400/30 text-center">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Data Analytics</h3>
                <p className="text-white/70 text-sm">Real-time insights, predictive analytics, and intelligent reporting</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 backdrop-blur-xl rounded-xl p-6 border border-yellow-400/30 text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Security & Compliance</h3>
                <p className="text-white/70 text-sm">Enterprise-grade security with automated threat detection</p>
              </div>
            </div>
          </section>

          {/* Latest Content Section */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-8">Latest Autonomous Content</h2>
            <p className="text-center text-white/70 mb-12 max-w-3xl mx-auto">
              Our AI systems continuously generate fresh content, insights, and updates. 
              Stay current with the latest autonomous innovations.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-2 text-sm text-white/75">Freshly published by autonomous agents with latest insights and improvements.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-cyan-300/90 font-medium">
                  Read More <span aria-hidden>→</span>
                </div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-2 text-sm text-white/75">Latest system optimizations and performance enhancements.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-cyan-300/90 font-medium">
                  Read More <span aria-hidden>→</span>
                </div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-2 text-sm text-white/75">New automation features and AI model improvements.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-cyan-300/90 font-medium">
                  Read More <span aria-hidden>→</span>
                </div>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link href="/reports" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                View All Reports →
              </Link>
            </div>
          </section>
          
          {/* Platform Features Grid */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/about" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center">About Our Mission</h3>
                <p className="text-white/70 text-center leading-relaxed">
                  Learn about our vision to revolutionize technology through autonomous innovation and AI-powered solutions.
                </p>
                <div className="mt-6 text-center text-cyan-400 font-medium">Learn More →</div>
              </Link>
              
              <Link href="/services" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-fuchsia-400 mb-4 text-center">Comprehensive Services</h3>
                <p className="text-white/70 text-center leading-relaxed">
                  Explore our full range of AI development, automation, cloud infrastructure, and consulting services.
                </p>
                <div className="mt-6 text-center text-fuchsia-400 font-medium">Explore Services →</div>
              </Link>
              
              <Link href="/resources" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">Resources & Tools</h3>
                <p className="text-white/70 text-center leading-relaxed">
                  Access case studies, whitepapers, assessment tools, and frameworks to accelerate your AI journey.
                </p>
                <div className="mt-6 text-center text-blue-400 font-medium">Access Resources →</div>
              </Link>
              
              <Link href="/case-studies" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4 text-center">Success Stories</h3>
                <p className="text-white/70 text-center leading-relaxed">
                  Discover real-world case studies showing how our solutions transform businesses and drive results.
                </p>
                <div className="mt-6 text-center text-yellow-400 font-medium">View Case Studies →</div>
              </Link>
              
              <Link href="/blog" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">✍️</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">Latest Insights</h3>
                <p className="text-white/70 text-center leading-relaxed">
                  Stay updated with our latest thoughts on AI trends, automation strategies, and technology insights.
                </p>
                <div className="mt-6 text-center text-purple-400 font-medium">Read Blog →</div>
              </Link>

              <Link href="/contact" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-4 text-center">Get Started</h3>
                <p className="text-white/70 text-center leading-relaxed">
                  Ready to transform your business? Contact us to discuss your AI and automation needs.
                </p>
                <div className="mt-6 text-center text-green-400 font-medium">Contact Us →</div>
              </Link>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mx-auto max-w-4xl text-center mb-20">
            <div className="bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/20 to-purple-400/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future of Technology?</h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Join the autonomous revolution and discover how our AI-powered solutions can transform your business, 
                streamline operations, and unlock new possibilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-400/25">
                  Start Your Journey
                </Link>
                <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-fuchsia-400/50 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105">
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
