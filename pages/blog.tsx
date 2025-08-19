import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog & Resources | Zion Tech Group - AI & Technology Insights</title>
        <meta name="description" content="Explore the latest insights in AI, automation, and technology innovation from Zion Tech Group's expert team and autonomous systems." />
        <meta property="og:title" content="Blog & Resources - Zion Tech Group" />
        <meta property="og:description" content="Latest insights in AI, automation, and technology innovation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Blog & Resources
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, tutorials, and thought leadership in autonomous technology and AI innovation
            </p>
          </section>

          <section className="mx-auto max-w-7xl">
            {/* Featured Article */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-sm text-cyan-400 mb-3">Featured Article</div>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    The Future of Autonomous AI Systems
                  </h2>
                  <p className="text-white/80 mb-6">
                    Explore how autonomous AI systems are revolutionizing industries and creating new possibilities for human-AI collaboration. Learn about the latest breakthroughs and what&apos;s coming next.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span>5 min read</span>
                    <span>•</span>
                    <span>AI & Automation</span>
                  </div>
                  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Read Full Article
                  </button>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <div className="text-2xl font-bold text-cyan-400">Autonomous AI</div>
                  <div className="text-white/70">The Next Frontier</div>
                </div>
              </div>
            </div>

            {/* Article Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
                <p className="text-white/70 text-sm">Latest developments in AI research and applications</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Automation</h3>
                <p className="text-white/70 text-sm">Process automation and workflow optimization</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
                <p className="text-white/70 text-sm">Infrastructure and deployment strategies</p>
              </div>
            </div>

            {/* Recent Articles Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Recent Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">🔒</div>
                  <h3 className="text-lg font-semibold mb-2">AI Security Best Practices</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Essential security measures for AI systems and autonomous applications.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-cyan-400">Security</span>
                    <span className="text-xs text-white/50">3 min read</span>
                  </div>
                </article>

                <article className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-lg font-semibold mb-2">Data Analytics Revolution</h3>
                  <p className="text-white/70 text-sm mb-4">
                    How AI is transforming business intelligence and decision-making.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-fuchsia-400">Analytics</span>
                    <span className="text-xs text-white/50">4 min read</span>
                  </div>
                </article>

                <article className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">🌐</div>
                  <h3 className="text-lg font-semibold mb-2">Edge Computing & AI</h3>
                  <p className="text-white/70 text-sm mb-4">
                    The future of distributed AI processing and real-time applications.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-green-400">Edge Computing</span>
                    <span className="text-xs text-white/50">5 min read</span>
                  </div>
                </article>

                <article className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-lg font-semibold mb-2">Startup AI Strategy</h3>
                  <p className="text-white/70 text-sm mb-4">
                    How startups can leverage AI to gain competitive advantages.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-400">Strategy</span>
                    <span className="text-xs text-white/50">6 min read</span>
                  </div>
                </article>

                <article className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">🔧</div>
                  <h3 className="text-lg font-semibold mb-2">DevOps Automation</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Streamlining development workflows with intelligent automation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-purple-400">DevOps</span>
                    <span className="text-xs text-white/50">4 min read</span>
                  </div>
                </article>

                <article className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">💡</div>
                  <h3 className="text-lg font-semibold mb-2">AI Ethics & Governance</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Building responsible AI systems for the future.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-yellow-400">Ethics</span>
                    <span className="text-xs text-white/50">7 min read</span>
                  </div>
                </article>
              </div>
            </div>

            {/* Resources Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Free Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">AI Implementation Guide</h3>
                  <p className="text-white/70 mb-4">
                    A comprehensive guide to implementing AI solutions in your organization.
                  </p>
                  <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
                    Download PDF
                  </button>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Automation Checklist</h3>
                  <p className="text-white/70 mb-4">
                    Essential checklist for successful automation projects.
                  </p>
                  <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
                    Download Checklist
                  </button>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">Stay Updated</h2>
              <p className="text-white/80 mb-6">
                Get the latest insights on AI, automation, and technology innovation delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}