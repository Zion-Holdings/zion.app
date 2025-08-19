import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Leading-edge technology solutions and autonomous innovation systems." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge technology solutions and autonomous innovation systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
            
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
            </div>
          </section>

          {/* Featured Services */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">AI Development</h3>
                <p className="text-white/70 text-sm mb-4">Custom AI solutions including machine learning models, natural language processing, and computer vision systems.</p>
                <a href="/services" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Learn More →</a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Automation Systems</h3>
                <p className="text-white/70 text-sm mb-4">End-to-end automation solutions that streamline operations and improve efficiency across your organization.</p>
                <a href="/services" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium">Learn More →</a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Cloud Infrastructure</h3>
                <p className="text-white/70 text-sm mb-4">Scalable cloud solutions with automated deployment, monitoring, and optimization for peak performance.</p>
                <a href="/services" className="text-green-400 hover:text-green-300 text-sm font-medium">Learn More →</a>
              </div>
            </div>
          </section>

          {/* Latest Autonomous Content */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Latest Autonomous Content</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </div>
            <div className="text-center mt-8">
              <a href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                View All Content
              </a>
            </div>
          </section>

          {/* Why Choose Zion */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Innovation First</h3>
                <p className="text-white/70 text-sm">Pioneering the future of autonomous technology with cutting-edge AI solutions.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold mb-2 text-fuchsia-400">Lightning Fast</h3>
                <p className="text-white/70 text-sm">Rapid deployment and 24/7 autonomous operation for maximum efficiency.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold mb-2 text-green-400">Enterprise Security</h3>
                <p className="text-white/70 text-sm">Bank-grade security with autonomous threat detection and response.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Global Scale</h3>
                <p className="text-white/70 text-sm">Deploy anywhere with our distributed autonomous infrastructure.</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mx-auto max-w-4xl px-6 pb-14">
            <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Go Autonomous?</h2>
              <p className="text-white/70 mb-6">
                Join the future of technology with Zion Tech Group's autonomous AI solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105">
                  Get Started Today
                </a>
                <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                  Explore Services
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
