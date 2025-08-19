import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - AI & Automation Insights</title>
        <meta name="description" content="Explore insights, trends, and innovations in AI, automation, and autonomous technology from Zion Tech Group experts." />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="AI and automation insights from Zion Tech Group." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              AI & Automation Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Deep insights into the future of autonomous technology, AI innovation, and digital transformation
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                About Us
              </a>
              <a href="/services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Our Services
              </a>
              <a href="/case-studies" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Case Studies
              </a>
              <a href="/team" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Our Team
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            {/* Featured Article */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-sm text-cyan-400 mb-4">Featured Article</div>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    The Future of Autonomous AI Systems
                  </h2>
                  <p className="text-white/80 mb-6">
                    Explore how autonomous AI systems are revolutionizing industries and creating new possibilities for human-AI collaboration.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span>5 min read</span>
                    <span>•</span>
                    <span>AI & Automation</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <div className="text-cyan-400 font-semibold">Coming Soon</div>
                </div>
              </div>
            </div>

            {/* Article Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">AI Development</h3>
                <p className="text-white/70 mb-4">
                  Latest developments in machine learning, neural networks, and AI algorithms.
                </p>
                <div className="text-sm text-cyan-400">5 articles</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Automation</h3>
                <p className="text-white/70 mb-4">
                  Insights into process automation, workflow optimization, and intelligent systems.
                </p>
                <div className="text-sm text-fuchsia-400">8 articles</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold mb-4 text-green-400">Cloud & DevOps</h3>
                <p className="text-white/70 mb-4">
                  Cloud infrastructure, CI/CD pipelines, and deployment automation strategies.
                </p>
                <div className="text-sm text-green-400">6 articles</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Data & Analytics</h3>
                <p className="text-white/70 mb-4">
                  Data science, business intelligence, and predictive analytics insights.
                </p>
                <div className="text-sm text-purple-400">4 articles</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Security & Privacy</h3>
                <p className="text-white/70 mb-4">
                  AI security, privacy protection, and ethical considerations in technology.
                </p>
                <div className="text-sm text-yellow-400">3 articles</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">Innovation</h3>
                <p className="text-white/70 mb-4">
                  Emerging technologies, industry trends, and future predictions.
                </p>
                <div className="text-sm text-blue-400">7 articles</div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Get the latest insights on AI, automation, and autonomous technology delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Latest Articles Preview */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-white">Latest Articles</h2>
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-6 last:border-b-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-lg p-3">
                      <div className="text-2xl">🤖</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        Building Self-Healing Applications with AI
                      </h3>
                      <p className="text-white/70 mb-3">
                        Learn how to create applications that automatically detect and fix issues using AI-powered monitoring and remediation.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <span>AI & Automation</span>
                        <span>•</span>
                        <span>8 min read</span>
                        <span>•</span>
                        <span>Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-6 last:border-b-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg p-3">
                      <div className="text-2xl">☁️</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        Cloud-Native AI Deployment Strategies
                      </h3>
                      <p className="text-white/70 mb-3">
                        Discover best practices for deploying AI models in cloud environments with automated scaling and monitoring.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <span>Cloud & DevOps</span>
                        <span>•</span>
                        <span>6 min read</span>
                        <span>•</span>
                        <span>Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-6 last:border-b-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-3">
                      <div className="text-2xl">📊</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        Real-Time Data Analytics with AI
                      </h3>
                      <p className="text-white/70 mb-3">
                        Explore how AI-powered analytics can provide real-time insights and drive data-driven decision making.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <span>Data & Analytics</span>
                        <span>•</span>
                        <span>7 min read</span>
                        <span>•</span>
                        <span>Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}