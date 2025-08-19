import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - AI & Technology Insights</title>
        <meta name="description" content="Explore the latest insights in AI automation, technology trends, and autonomous innovation from Zion Tech Group's experts and AI systems." />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights in AI automation and technology trends." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              AI & Technology Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, trends, and innovations from the forefront of autonomous technology and AI development
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            {/* Featured Article */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-sm text-cyan-400 mb-4">Featured Article</div>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    The Future of Autonomous AI: Beyond Human Supervision
                  </h2>
                  <p className="text-lg text-white/80 mb-6">
                    Explore how autonomous AI systems are evolving beyond traditional human oversight, creating self-improving networks that drive innovation at unprecedented speeds.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span>5 min read</span>
                    <span>•</span>
                    <span>AI & Automation</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <div className="text-2xl font-bold text-cyan-400">Coming Soon</div>
                </div>
              </div>
            </div>

            {/* Article Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">AI & Machine Learning</h3>
                <p className="text-white/70 mb-4">
                  Deep dives into neural networks, autonomous systems, and the future of artificial intelligence.
                </p>
                <div className="text-sm text-cyan-400">12 articles</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Automation & DevOps</h3>
                <p className="text-white/70 mb-4">
                  Best practices in process automation, CI/CD pipelines, and infrastructure as code.
                </p>
                <div className="text-sm text-fuchsia-400">18 articles</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Technology Trends</h3>
                <p className="text-white/70 mb-4">
                  Emerging technologies, industry insights, and future predictions in the tech landscape.
                </p>
                <div className="text-sm text-green-400">24 articles</div>
              </div>
            </div>

            {/* Latest Articles */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-sm text-cyan-400 mb-3">AI & Automation</div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Building Self-Healing Applications with AI
                  </h3>
                  <p className="text-white/70 mb-4">
                    Learn how to implement intelligent error detection and automatic recovery systems that keep your applications running smoothly 24/7.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">3 min read</span>
                    <span className="text-cyan-400">→</span>
                  </div>
                </article>

                <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-sm text-fuchsia-400 mb-3">DevOps</div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    The Evolution of CI/CD: From Manual to Autonomous
                  </h3>
                  <p className="text-white/70 mb-4">
                    Discover how autonomous CI/CD pipelines are revolutionizing software development and deployment processes.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">4 min read</span>
                    <span className="text-fuchsia-400">→</span>
                  </div>
                </article>

                <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-sm text-green-400 mb-3">Cloud Computing</div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Multi-Cloud Orchestration with AI Agents
                  </h3>
                  <p className="text-white/70 mb-4">
                    Explore how AI-powered orchestration systems manage complex multi-cloud environments automatically.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">5 min read</span>
                    <span className="text-green-400">→</span>
                  </div>
                </article>

                <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-sm text-purple-400 mb-3">Innovation</div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    The Rise of Autonomous Business Processes
                  </h3>
                  <p className="text-white/70 mb-4">
                    How autonomous systems are transforming business operations and creating new opportunities for growth.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">6 min read</span>
                    <span className="text-purple-400">→</span>
                  </div>
                </article>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
              <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
                Get the latest insights on AI automation, technology trends, and autonomous innovation delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
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