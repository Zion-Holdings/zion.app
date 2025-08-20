import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub | AI & Automation Solutions</title>
        <meta name="description" content="Leading-edge autonomous technology solutions with 227+ automations, AI development, cloud infrastructure, and self-healing systems. Transform your business with cutting-edge innovation." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge autonomous technology solutions with 227+ automations, AI development, cloud infrastructure, and self-healing systems." />
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
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Pioneering the future with 227+ active automations, self-healing systems, and AI-powered innovation
            </p>
            
            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Explore Our Services
              </Link>
              <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/20 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:border-cyan-400/50">
                Learn About Us
              </Link>
            </div>
          </section>

          {/* Key Statistics */}
          <section className="mx-auto max-w-7xl mb-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                <div className="text-white/80">Active Automations</div>
                <div className="text-sm text-white/60 mt-2">Self-running systems</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                <div className="text-white/80">Generated Pages</div>
                <div className="text-sm text-white/60 mt-2">Dynamic content</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-white/80">Uptime</div>
                <div className="text-sm text-white/60 mt-2">Self-healing systems</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-white/80">Autonomous Operation</div>
                <div className="text-sm text-white/60 mt-2">Zero human intervention</div>
              </div>
            </div>
          </section>

          {/* Core Capabilities */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Core Capabilities & Advantages</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">🤖 Autonomous AI Systems</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span>Self-learning machine learning models that continuously improve</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span>Natural language processing for intelligent content generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span>Computer vision systems for automated analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span>Predictive analytics and autonomous decision making</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-fuchsia-400">⚡ Intelligent Automation</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-fuchsia-400 mr-3">•</span>
                    <span>End-to-end process automation with self-optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fuchsia-400 mr-3">•</span>
                    <span>Workflow orchestration and intelligent routing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fuchsia-400 mr-3">•</span>
                    <span>Robotic process automation (RPA) solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fuchsia-400 mr-3">•</span>
                    <span>Smart workflows that adapt to changing conditions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">☁️ Cloud-Native Infrastructure</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Auto-scaling cloud solutions with intelligent resource management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Self-healing applications with automatic failure recovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Performance optimization and security hardening</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Zero-downtime deployments and updates</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-green-400">🔄 Self-Healing Systems</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">•</span>
                    <span>Automatic error detection and recovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">•</span>
                    <span>Continuous monitoring and health checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">•</span>
                    <span>Intelligent load balancing and failover</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">•</span>
                    <span>Proactive maintenance and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Our Comprehensive Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">AI Development</h3>
                <p className="text-white/70 mb-4">Custom AI solutions including machine learning models, NLP, and computer vision systems.</p>
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">Learn More →</div>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Automation Systems</h3>
                <p className="text-white/70 mb-4">End-to-end automation solutions that streamline operations and improve efficiency.</p>
                <div className="text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors">Learn More →</div>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">Cloud Infrastructure</h3>
                <p className="text-white/70 mb-4">Scalable cloud solutions with automated deployment, monitoring, and optimization.</p>
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors">Learn More →</div>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-4 text-green-400">DevOps & CI/CD</h3>
                <p className="text-white/70 mb-4">Streamlined development and deployment pipelines with automated testing and building.</p>
                <div className="text-green-400 group-hover:text-green-300 transition-colors">Learn More →</div>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Data Analytics</h3>
                <p className="text-white/70 mb-4">Advanced analytics and business intelligence solutions for actionable insights.</p>
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors">Learn More →</div>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Technology Consulting</h3>
                <p className="text-white/70 mb-4">Strategic guidance for digital transformation and technology adoption.</p>
                <div className="text-yellow-400 group-hover:text-yellow-300 transition-colors">Learn More →</div>
              </Link>
            </div>
          </section>

          {/* Platform Features */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Platform Features & Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">🚀 Advanced Automation Engine</h3>
                <div className="space-y-4 text-white/80">
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">227+ Active Automations</h4>
                    <p className="text-sm text-white/70">Self-running systems that maintain, audit, and improve the platform continuously</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">1-Minute Sync Cadence</h4>
                    <p className="text-sm text-white/70">Rapid synchronization keeps all systems and branches perfectly aligned</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">Self-Healing CI/CD</h4>
                    <p className="text-sm text-white/70">Automatic detection and resolution of build failures with intelligent recovery</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-fuchsia-400">🧠 Intelligent Content Generation</h3>
                <div className="space-y-4 text-white/80">
                  <div>
                    <h4 className="font-semibold text-fuchsia-300 mb-2">2,960+ Dynamic Pages</h4>
                    <p className="text-sm text-white/70">Automatically generated content that stays fresh and relevant</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-fuchsia-300 mb-2">AI-Powered Updates</h4>
                    <p className="text-sm text-white/70">Content that evolves and improves based on user interaction and trends</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-fuchsia-300 mb-2">SEO Optimization</h4>
                    <p className="text-sm text-white/70">Automatic search engine optimization and performance monitoring</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">🛡️ Enterprise-Grade Security</h3>
                <div className="space-y-4 text-white/80">
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-2">Continuous Security Scanning</h4>
                    <p className="text-sm text-white/70">Automated vulnerability detection and security hardening</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-2">Compliance Monitoring</h4>
                    <p className="text-sm text-white/70">Real-time compliance checking and automated reporting</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-2">Threat Intelligence</h4>
                    <p className="text-sm text-white/70">AI-powered threat detection and response systems</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-green-400">📈 Performance & Monitoring</h3>
                <div className="space-y-4 text-white/80">
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">Real-Time Analytics</h4>
                    <p className="text-sm text-white/70">Live performance monitoring and intelligent alerting</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">Auto-Optimization</h4>
                    <p className="text-sm text-white/70">Systems that automatically optimize performance and resource usage</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">Predictive Maintenance</h4>
                    <p className="text-sm text-white/70">AI-driven maintenance scheduling and issue prevention</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Navigation */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">Quick Navigation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">About Us</h3>
                <p className="text-white/70 text-sm">Learn about our mission, vision, and core values</p>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Services</h3>
                <p className="text-white/70 text-sm">Explore our comprehensive AI and automation solutions</p>
              </Link>
              
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Resources</h3>
                <p className="text-white/70 text-sm">Access case studies, whitepapers, and tools</p>
              </Link>
              
              <Link href="/case-studies" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Case Studies</h3>
                <p className="text-white/70 text-sm">See real success stories and implementations</p>
              </Link>
              
              <Link href="/blog" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">✍️</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Blog</h3>
                <p className="text-white/70 text-sm">Read our latest insights and industry trends</p>
              </Link>
              
              <Link href="/contact" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Contact</h3>
                <p className="text-white/70 text-sm">Get in touch to discuss your project</p>
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
              <Link href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0111</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0403</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0402</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join the future of autonomous technology with Zion Tech Group
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Get Started Today
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/20 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:border-cyan-400/50">
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
