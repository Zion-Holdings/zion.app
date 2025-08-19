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

          {/* Key Features Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-wide text-white/90 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our autonomous systems work 24/7 to deliver exceptional results and drive innovation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Autonomous Innovation</h3>
                <p className="text-white/70">
                  227+ active automation workflows that continuously improve and optimize our systems without human intervention.
                </p>
              </div>
              <div className="text-center bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Proven Results</h3>
                <p className="text-white/70">
                  2,960+ content pages generated with 99.99% uptime and sub-second response times across all systems.
                </p>
              </div>
              <div className="text-center bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Future-Ready</h3>
                <p className="text-white/70">
                  Built on cutting-edge cloud-native infrastructure with AI-powered optimization and continuous learning.
                </p>
              </div>
            </div>
          </section>

          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-16">
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
              <a href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0111</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0403</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0402</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </div>
          </section>
          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}

          {/* Latest Blog Posts Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-wide text-white/90 mb-4">Latest Insights & Trends</h2>
              <a href="/blog" className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                View All Articles →
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a href="/blog/ai-automation-trends-2025" className="group bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                    AI & Automation
                  </span>
                  <span className="text-white/60 text-sm">Jan 17, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-fuchsia-400 transition-colors">
                  AI Automation Trends 2025: The Future of Autonomous Systems
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  Explore the cutting-edge trends shaping the future of AI automation and autonomous technology systems.
                </p>
                <div className="text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors font-semibold">
                  Read Article →
                </div>
              </a>
              
              <a href="/blog/autonomous-content-generation" className="group bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full border border-fuchsia-400/30">
                    Content & AI
                  </span>
                  <span className="text-white/60 text-sm">Jan 15, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-fuchsia-400 transition-colors">
                  Revolutionizing Content Creation with Autonomous AI Systems
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  How Zion Tech Group is transforming content generation through intelligent automation and machine learning.
                </p>
                <div className="text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors font-semibold">
                  Read Article →
                </div>
              </a>
              
              <a href="/blog/cloud-native-automation" className="group bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full border border-blue-400/30">
                    Infrastructure
                  </span>
                  <span className="text-white/60 text-sm">Jan 12, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-fuchsia-400 transition-colors">
                  Building Cloud-Native Automation Infrastructure
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  A deep dive into our cloud-native approach to building scalable, reliable automation systems.
                </p>
                <div className="text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors font-semibold">
                  Read Article →
                </div>
              </a>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mx-auto max-w-4xl px-6 pb-14 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Experience Autonomous Innovation?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group's autonomous systems. 
                Discover how AI-powered automation can transform your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:from-cyan-300 hover:to-fuchsia-300 text-black font-semibold rounded-lg transition-all transform hover:scale-105">
                  Get Started Today
                </a>
                <a href="/automation" className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all">
                  Explore Our Systems
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
