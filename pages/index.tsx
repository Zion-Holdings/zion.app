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
        {/* Navigation */}
        <nav className="border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-white hover:text-cyan-400 transition-colors">Home</a>
                <a href="/about" className="text-white/80 hover:text-cyan-400 transition-colors">About</a>
                <a href="/blog" className="text-white/80 hover:text-cyan-400 transition-colors">Blog</a>
                <a href="/contact" className="text-white/80 hover:text-cyan-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/about" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                Learn More
              </a>
              <a href="/contact" className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Get in Touch
              </a>
            </div>
          </section>

                      {/* Features Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Autonomous Systems</h3>
                  <p className="text-white/80">
                    Our AI-powered systems operate independently, continuously learning and improving 
                    without human intervention.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Lightning Fast</h3>
                  <p className="text-white/80">
                    Experience blazing-fast performance with our optimized algorithms and 
                    cloud-native infrastructure.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Enterprise Security</h3>
                  <p className="text-white/80">
                    Bank-grade security with advanced encryption, authentication, and 
                    continuous threat monitoring.
                  </p>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="mb-20">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                    <div className="text-white/80">Active Automations</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                    <div className="text-white/80">Generated Pages</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                    <div className="text-white/80">Uptime</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-white/80">Monitoring</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Latest Content Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Latest Autonomous Content</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="/reports/updates/update-2025-08-15-0406" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                      Update
                    </span>
                    <span className="text-white/60 text-sm">2025-08-15</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    Autonomous Update — 2025: 08: 15: 0406
                  </h3>
                  <p className="text-white/75 text-sm mb-4">Latest system improvements and performance enhancements.</p>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    Read More <span aria-hidden>→</span>
                  </div>
                </a>
                
                <a href="/reports/updates/update-2025-08-15-0405" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full border border-fuchsia-400/30">
                      Update
                    </span>
                    <span className="text-white/60 text-sm">2025-08-15</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    Autonomous Update — 2025: 08: 15: 0405
                  </h3>
                  <p className="text-white/75 text-sm mb-4">Performance optimization and monitoring improvements.</p>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    Read More <span aria-hidden>→</span>
                  </div>
                </a>
                
                <a href="/blog" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                      Blog
                    </span>
                    <span className="text-white/60 text-sm">Latest</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    AI Automation Trends 2025
                  </h3>
                  <p className="text-white/75 text-sm mb-4">Explore the cutting-edge trends shaping autonomous technology.</p>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    Read More <span aria-hidden>→</span>
                  </div>
                </a>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl font-bold mb-6 text-white">Ready to Experience the Future?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Join thousands of organizations already leveraging our autonomous technology 
                  to transform their operations and drive innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 text-lg">
                    Get Started Today
                  </a>
                  <a href="/about" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-lg">
                    Learn More
                  </a>
                </div>
              </div>
            </section>
        </main>
      </div>
    </>
  );
}
