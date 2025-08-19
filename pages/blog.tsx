import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - AI & Automation Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI development, automation trends, and technology innovation from Zion Tech Group." />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI and automation technology." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              AI & Automation Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, trends, and expert analysis on the future of autonomous technology
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">The Future of Autonomous AI</h3>
                <p className="text-white/70 mb-4">
                  Explore how autonomous AI systems are revolutionizing industries and creating new possibilities for human-AI collaboration.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">5 min read</span>
                  <a href="/blog/ai-automation-trends-2025" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Read More →
                  </a>
                </div>
              </article>

              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Automation Best Practices</h3>
                <p className="text-white/70 mb-4">
                  Learn the essential strategies for implementing successful automation systems that drive business growth and efficiency.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">7 min read</span>
                  <a href="/blog/automation-best-practices" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                    Read More →
                  </a>
                </div>
              </article>

              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Cloud-Native Development</h3>
                <p className="text-white/70 mb-4">
                  Discover how cloud-native architectures are enabling scalable, resilient, and autonomous applications.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">6 min read</span>
                  <a href="/blog/cloud-native-development" className="text-green-400 hover:text-green-300 transition-colors">
                    Read More →
                  </a>
                </div>
              </article>

              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">AI Security & Ethics</h3>
                <p className="text-white/70 mb-4">
                  Understanding the critical importance of security and ethical considerations in AI development and deployment.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">8 min read</span>
                  <a href="/blog/ai-security-ethics" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Read More →
                  </a>
                </div>
              </article>

              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Data-Driven Decision Making</h3>
                <p className="text-white/70 mb-4">
                  How AI-powered analytics are transforming business intelligence and strategic decision-making processes.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">6 min read</span>
                  <a href="/blog/data-driven-decisions" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Read More →
                  </a>
                </div>
              </article>

              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">AI Implementation Guide</h3>
                <p className="text-white/70 mb-4">
                  A comprehensive roadmap for successfully implementing AI solutions in your organization.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">10 min read</span>
                  <a href="/blog/ai-implementation-guide" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    Read More →
                  </a>
                </div>
              </article>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Featured Content</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">AI Automation Trends 2025</h3>
                  <p className="text-white/70 mb-4">
                    Our comprehensive analysis of the most significant AI and automation trends that will shape the technology landscape in 2025.
                  </p>
                  <a href="/blog/ai-automation-trends-2025" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    Read Full Article →
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Building Autonomous Systems</h3>
                  <p className="text-white/70 mb-4">
                    A deep dive into the architecture and principles behind building truly autonomous AI systems that can operate independently.
                  </p>
                  <a href="/blog/building-autonomous-systems" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    Read Full Article →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Stay Updated</h2>
              <p className="text-white/70 mb-6">
                Subscribe to our newsletter for the latest insights on AI, automation, and technology innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105">
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