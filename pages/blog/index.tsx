import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog — Zion Tech Group</title>
        <meta name="description" content="Latest insights, trends, and updates from Zion Tech Group's autonomous technology experts." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Blog & Insights
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Stay ahead of the curve with the latest insights on autonomous technology, 
                automation trends, and industry developments.
              </p>
            </section>

            {/* Featured Article */}
            <section className="mb-16">
              <div className="bg-white/10 rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      Featured Article
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-cyan-400">
                      The Future of Autonomous Technology in 2025
                    </h2>
                    <p className="text-lg text-white/80 mb-6">
                      Explore how autonomous systems are revolutionizing industries and what 
                      to expect in the coming year. From AI-powered automation to self-healing 
                      infrastructure, discover the technologies that will shape our future.
                    </p>
                    <div className="flex items-center gap-4 text-white/70 mb-6">
                      <span>January 15, 2025</span>
                      <span>•</span>
                      <span>8 min read</span>
                      <span>•</span>
                      <span>Technology</span>
                    </div>
                    <Link href="/blog/ai-automation-trends-2025" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
                      Read Full Article →
                    </Link>
                  </div>
                  <div className="text-center">
                    <div className="text-8xl">🚀</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Article Categories */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-400">Browse by Category</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/category/automation" className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all group">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">Automation</h3>
                  <p className="text-white/70 mb-4">
                    Insights on autonomous systems and intelligent automation
                  </p>
                  <span className="text-cyan-400 group-hover:text-cyan-300">Explore →</span>
                </Link>
                
                <Link href="/blog/category/technology" className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all group">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-xl font-bold mb-2 text-fuchsia-400">Technology</h3>
                  <p className="text-white/70 mb-4">
                    Latest developments in AI, cloud computing, and infrastructure
                  </p>
                  <span className="text-fuchsia-400 group-hover:text-fuchsia-300">Explore →</span>
                </Link>
                
                <Link href="/blog/category/industry" className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-green-400/30 transition-all group">
                  <div className="text-4xl mb-4">🏭</div>
                  <h3 className="text-xl font-bold mb-2 text-green-400">Industry</h3>
                  <p className="text-white/70 mb-4">
                    Industry trends and business insights
                  </p>
                  <span className="text-green-400 group-hover:text-green-300">Explore →</span>
                </Link>
              </div>
            </section>

            {/* Latest Articles */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Latest Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all">
                  <div className="text-3xl mb-4">🔒</div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">
                    <Link href="/blog/security-automation-2025" className="hover:text-cyan-300">
                      Security Automation in 2025: What's New?
                    </Link>
                  </h3>
                  <p className="text-white/70 mb-4">
                    Discover the latest advancements in automated security systems and 
                    how they're protecting digital infrastructure.
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/50">
                    <span>January 12, 2025</span>
                    <span>5 min read</span>
                  </div>
                </article>
                
                <article className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-3 text-fuchsia-400">
                    <Link href="/blog/performance-optimization" className="hover:text-fuchsia-300">
                      Performance Optimization Through AI
                    </Link>
                  </h3>
                  <p className="text-white/70 mb-4">
                    Learn how artificial intelligence is revolutionizing performance 
                    optimization and system efficiency.
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/50">
                    <span>January 10, 2025</span>
                    <span>6 min read</span>
                  </div>
                </article>
                
                <article className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-green-400/30 transition-all">
                  <div className="text-3xl mb-4">🌐</div>
                  <h3 className="text-xl font-bold mb-3 text-green-400">
                    <Link href="/blog/cloud-native-automation" className="hover:text-green-300">
                      Cloud-Native Automation Strategies
                    </Link>
                  </h3>
                  <p className="text-white/70 mb-4">
                    Explore best practices for implementing automation in cloud-native 
                    environments and microservices architectures.
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/50">
                    <span>January 8, 2025</span>
                    <span>7 min read</span>
                  </div>
                </article>
                
                <article className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">
                    <Link href="/blog/ci-cd-automation" className="hover:text-yellow-300">
                      CI/CD Automation Best Practices
                    </Link>
                  </h3>
                  <p className="text-white/70 mb-4">
                    Master the art of continuous integration and deployment automation 
                    for faster, more reliable software delivery.
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/50">
                    <span>January 5, 2025</span>
                    <span>9 min read</span>
                  </div>
                </article>
                
                <article className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-blue-400/30 transition-all">
                  <div className="text-3xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">
                    <Link href="/blog/monitoring-automation" className="hover:text-blue-300">
                      Intelligent Monitoring Systems
                    </Link>
                  </h3>
                  <p className="text-white/70 mb-4">
                    Discover how AI-powered monitoring is transforming system observability 
                    and proactive issue resolution.
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/50">
                    <span>January 3, 2025</span>
                    <span>6 min read</span>
                  </div>
                </article>
                
                <article className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-purple-400/30 transition-all">
                  <div className="text-3xl mb-4">📈</div>
                  <h3 className="text-xl font-bold mb-3 text-purple-400">
                    <Link href="/blog/scaling-automation" className="hover:text-purple-300">
                      Scaling Automation for Growth
                    </Link>
                  </h3>
                  <p className="text-white/70 mb-4">
                    Learn strategies for scaling automation systems as your organization 
                    and infrastructure grow.
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/50">
                    <span>January 1, 2025</span>
                    <span>8 min read</span>
                  </div>
                </article>
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-3xl p-8 border border-white/20 text-center">
                <h2 className="text-3xl font-bold mb-4 text-cyan-400">Stay Updated</h2>
                <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
                  Get the latest insights on autonomous technology delivered to your inbox. 
                  No spam, just valuable content.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Have a Story to Share?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                We're always looking for guest contributors and industry experts to share 
                their insights on autonomous technology and automation.
              </p>
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all">
                Contribute an Article
              </Link>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}