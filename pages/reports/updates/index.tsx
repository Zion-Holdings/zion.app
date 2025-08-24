import React from 'react';
import Head from 'next/head';

export default function UpdatesIndex() {
  return (
    <>
      <Head>
        <title>Autonomous Updates | Zion Tech Group</title>
        <meta name="description" content="Browse all autonomous system updates from Zion Tech Group's intelligent automation infrastructure." />
        <meta property="og:title" content="Autonomous Updates | Zion Tech Group" />
        <meta property="og:description" content="Browse all autonomous system updates from Zion Tech Group's intelligent automation infrastructure." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/reports" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Reports
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Autonomous Updates
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Real-time updates from our autonomous systems, showcasing the latest achievements, 
                performance metrics, and technological breakthroughs.
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Recent Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded-full">Latest</span>
                    <span className="text-xs text-white/60">04:06</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">System Status Overview</h3>
                  <p className="text-sm text-white/75 mb-3">Core systems, content generation, monitoring, and security updates</p>
                  <div className="text-xs text-cyan-300/90">August 15, 2025</div>
                </a>

                <a href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">Infrastructure</span>
                    <span className="text-xs text-white/60">04:05</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Infrastructure Enhancements</h3>
                  <p className="text-sm text-white/75 mb-3">Cloud scaling, database optimization, and AI model improvements</p>
                  <div className="text-xs text-cyan-300/90">August 15, 2025</div>
                </a>

                <a href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-purple-400 bg-purple-400/20 px-2 py-1 rounded-full">Content</span>
                    <span className="text-xs text-white/60">04:04</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Content Generation Milestones</h3>
                  <p className="text-sm text-white/75 mb-3">Blog posts, social media, video content, and email campaigns</p>
                  <div className="text-xs text-cyan-300/90">August 15, 2025</div>
                </a>

                <a href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-yellow-400 bg-yellow-400/20 px-2 py-1 rounded-full">AI/ML</span>
                    <span className="text-xs text-white/60">01:11</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Machine Learning Breakthroughs</h3>
                  <p className="text-sm text-white/75 mb-3">Neural networks, deep learning, NLP models, and performance metrics</p>
                  <div className="text-xs text-cyan-300/90">August 15, 2025</div>
                </a>

                <a href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-sky-400 bg-sky-400/20 px-2 py-1 rounded-full">Cloud</span>
                    <span className="text-xs text-white/60">04:03</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cloud Infrastructure Updates</h3>
                  <p className="text-sm text-white/75 mb-3">Kubernetes, Docker, Terraform, and monitoring enhancements</p>
                  <div className="text-xs text-cyan-300/90">August 15, 2025</div>
                </a>

                <a href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-rose-400 bg-rose-400/20 px-2 py-1 rounded-full">UX</span>
                    <span className="text-xs text-white/60">04:02</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">User Experience Enhancements</h3>
                  <p className="text-sm text-white/75 mb-3">UI/UX design, accessibility, mobile optimization, and performance</p>
                  <div className="text-xs text-cyan-300/90">August 15, 2025</div>
                </a>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Update Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400 mb-2">6</div>
                  <div className="text-white/60 text-sm">Total Updates</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400 mb-2">4</div>
                  <div className="text-white/60 text-sm">Categories</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-400 mb-2">24h</div>
                  <div className="text-white/60 text-sm">Update Cycle</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl border border-cyan-500/30">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-white/60 text-sm">System Uptime</div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 p-8 rounded-2xl border border-fuchsia-500/20">
                <h2 className="text-2xl font-semibold mb-4 text-fuchsia-300">Autonomous Intelligence</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Our systems continuously learn, adapt, and improve. Each update represents 
                  a step forward in our mission to create truly autonomous technology solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/reports" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                  >
                    All Reports
                  </a>
                  <a 
                    href="/" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-slate-600 text-white font-semibold rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all duration-200"
                  >
                    Homepage
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}