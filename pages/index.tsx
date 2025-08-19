import React from 'react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Leading-edge technology solutions and autonomous innovation systems. Discover our cutting-edge automation, AI-powered content generation, and comprehensive technology solutions." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge technology solutions and autonomous innovation systems with 227+ active automations and 2,960+ generated pages." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="autonomous systems, AI automation, technology solutions, innovation hub, GitHub Actions, content generation" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems that revolutionize digital infrastructure.
            </p>
<<<<<<< HEAD
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                About Us
              </a>
              <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Our Services
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Contact
              </a>
=======
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-cyan-300 font-semibold">227+</span> Active Automations
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-blue-300 font-semibold">2,960+</span> Generated Pages
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-green-300 font-semibold">99.9%</span> Uptime
              </div>
>>>>>>> cursor/update-content-and-fix-links-74fc
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">Autonomous Systems</h3>
                <p className="text-white/80 leading-relaxed">
                  Self-running automation workflows that maintain, optimize, and improve systems without human intervention.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">AI-Powered Innovation</h3>
                <p className="text-white/80 leading-relaxed">
                  Advanced artificial intelligence systems that generate content, optimize performance, and drive continuous improvement.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-300">Scalable Infrastructure</h3>
                <p className="text-white/80 leading-relaxed">
                  Cloud-native architecture designed for high availability, performance, and seamless scaling across global deployments.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Enterprise Security</h3>
                <p className="text-white/80 leading-relaxed">
                  Comprehensive security protocols with automated threat detection, vulnerability scanning, and compliance management.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Performance Optimization</h3>
                <p className="text-white/80 leading-relaxed">
                  Continuous performance monitoring and optimization with real-time analytics and predictive maintenance systems.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-300">Intelligent Automation</h3>
                <p className="text-white/80 leading-relaxed">
                  Smart automation systems that learn, adapt, and optimize processes for maximum efficiency and reliability.
                </p>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Technology Stack</h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">Next.js</span>
                  </div>
                  <p className="text-white/80">React Framework</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">GitHub</span>
                  </div>
                  <p className="text-white/80">Actions & CI/CD</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">AI/ML</span>
                  </div>
                  <p className="text-white/80">Machine Learning</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">Cloud</span>
                  </div>
                  <p className="text-white/80">Native Architecture</p>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Updates Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Latest Autonomous Updates</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="text-sm text-white/75 mb-3">Latest system status and performance metrics from our autonomous agents.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">View Report <span aria-hidden>→</span></div>
              </a>
              
              <a href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="text-sm text-white/75 mb-3">System enhancements and performance improvements overview.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">View Report <span aria-hidden>→</span></div>
              </a>
              
              <a href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="text-sm text-white/75 mb-3">Recent developments in AI content generation and security.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">View Report <span aria-hidden>→</span></div>
              </a>
              
              <a href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0111</h3>
                <p className="text-sm text-white/75 mb-3">Infrastructure scaling and content management improvements.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">View Report <span aria-hidden>→</span></div>
              </a>
              
              <a href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0403</h3>
                <p className="text-sm text-white/75 mb-3">Automation efficiency and content quality enhancements.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">View Report <span aria-hidden>→</span></div>
              </a>
              
              <a href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0402</h3>
                <p className="text-sm text-white/75 mb-3">Redundancy systems and AI integration updates.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">View Report <span aria-hidden>→</span></div>
              </a>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
              <h2 className="text-3xl font-bold mb-6 text-white/90">Ready to Experience the Future?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join us in revolutionizing technology through autonomous innovation and intelligent automation systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/about" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                  Learn More
                </a>
                <a href="/services" className="border border-white/30 hover:border-cyan-400/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                  Our Services
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
