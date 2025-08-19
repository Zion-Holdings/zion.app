import React from 'react';
import Head from 'next/head';

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
              <a href="/features" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Features
              </a>
              <a href="/docs" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Documentation
              </a>
              <a href="/automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Automations
              </a>
              <a href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                About Us
              </a>
              <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Our Services
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-red-400/50">
                Contact
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-wide text-white/90 mb-4">Key Features</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Discover what makes Zion App the future of autonomous web applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-3">Autonomous Automations</h3>
                <p className="text-white/70 mb-4">227+ automated workflows that run continuously to maintain and optimize your application.</p>
                <a href="/features" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="text-3xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Content</h3>
                <p className="text-white/70 mb-4">Advanced AI systems that create, optimize, and manage content automatically.</p>
                <a href="/features" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">Learn More →</a>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-white mb-3">Advanced Monitoring</h3>
                <p className="text-white/70 mb-4">Real-time performance metrics, security scanning, and automated health checks.</p>
                <a href="/automation-health" className="text-blue-400 hover:text-blue-300 transition-colors">Learn More →</a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                  <div className="text-white/70">Automations</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                  <div className="text-white/70">Pages</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                  <div className="text-white/70">Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">95+</div>
                  <div className="text-white/70">Lighthouse Score</div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Content Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-wide text-white/90 mb-4">Latest Autonomous Content</h2>
              <a href="/reports" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                View All Reports →
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
