import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - Insights on Autonomous Technology</title>
        <meta name="description" content="Explore insights, trends, and innovations in autonomous technology, AI automation, and the future of intelligent systems from Zion Tech Group." />
        <meta property="og:title" content="Blog | Zion Tech Group - Insights on Autonomous Technology" />
        <meta property="og:description" content="Explore insights, trends, and innovations in autonomous technology, AI automation, and the future of intelligent systems from Zion Tech Group." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, trends, and innovations in autonomous technology and intelligent automation.
            </p>
          </section>

          <section className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-cyan-300 mb-3">
                    <span>AI & Automation</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    The Future of Autonomous AI Systems
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Explore how autonomous AI systems are revolutionizing industries 
                    and creating new possibilities for human-AI collaboration.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">January 15, 2025</span>
                    <span className="text-cyan-300 text-sm font-medium group-hover:text-cyan-200 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-cyan-300 mb-3">
                    <span>Innovation</span>
                    <span>•</span>
                    <span>7 min read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    Building Resilient Automation Frameworks
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Learn the key principles for creating automation systems that 
                    adapt, learn, and thrive in dynamic business environments.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">January 12, 2025</span>
                    <span className="text-cyan-300 text-sm font-medium group-hover:text-cyan-200 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-cyan-300 mb-3">
                    <span>Technology</span>
                    <span>•</span>
                    <span>6 min read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    Quantum Computing and Autonomous Systems
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Discover how quantum computing is enhancing autonomous systems 
                    and opening new frontiers in computational intelligence.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">January 10, 2025</span>
                    <span className="text-cyan-300 text-sm font-medium group-hover:text-cyan-200 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-cyan-300 mb-3">
                    <span>Industry</span>
                    <span>•</span>
                    <span>8 min read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    Autonomous Technology in Healthcare
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Explore the transformative impact of autonomous systems in 
                    healthcare delivery and patient care optimization.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">January 8, 2025</span>
                    <span className="text-cyan-300 text-sm font-medium group-hover:text-cyan-200 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-cyan-300 mb-3">
                    <span>Security</span>
                    <span>•</span>
                    <span>6 min read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    AI-Powered Cybersecurity Automation
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Learn how autonomous security systems are revolutionizing 
                    threat detection and response in real-time.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">January 5, 2025</span>
                    <span className="text-cyan-300 text-sm font-medium group-hover:text-cyan-200 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-cyan-300 mb-3">
                    <span>Future</span>
                    <span>•</span>
                    <span>9 min read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    The Road to Artificial General Intelligence
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Delve into the challenges and opportunities on the path 
                    to achieving true artificial general intelligence.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">January 3, 2025</span>
                    <span className="text-cyan-300 text-sm font-medium group-hover:text-cyan-200 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Stay Updated</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights on autonomous 
                technology and innovation trends.
              </p>
              <div className="flex max-w-md mx-auto space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}