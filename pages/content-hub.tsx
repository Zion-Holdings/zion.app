import React from 'react';
import Head from 'next/head';

export default function ContentHub() {
  return (
    <>
      <Head>
        <title>Content Hub — Zion Tech Group</title>
        <meta name="description" content="Centralized content hub featuring articles, guides, and resources from Zion Tech Group's autonomous systems and automation expertise." />
        <meta property="og:title" content="Content Hub — Zion Tech Group" />
        <meta property="og:description" content="Centralized content hub featuring articles, guides, and resources from Zion Tech Group's autonomous systems and automation expertise." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Content Hub
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover insights, tutorials, and resources on autonomous systems, AI automation, and cutting-edge technology solutions.
            </p>
          </section>

          {/* Navigation */}
          <nav className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                ← Back to Home
              </a>
              <a href="/blog" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Blog
              </a>
              <a href="/services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Services
              </a>
            </div>
          </nav>

          {/* Featured Content */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-300 text-center">Automation Guides</h3>
                <p className="text-white/80 text-center mb-4">
                  Step-by-step guides for implementing autonomous systems and automation workflows.
                </p>
                <a href="/automation" className="block text-center text-cyan-300 hover:text-cyan-200 transition-colors">
                  Explore Guides →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-300 text-center">AI Insights</h3>
                <p className="text-white/80 text-center mb-4">
                  Latest insights on artificial intelligence, machine learning, and cognitive automation.
                </p>
                <a href="/blog" className="block text-center text-fuchsia-300 hover:text-fuchsia-200 transition-colors">
                  Read Insights →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-300 text-center">Technical Docs</h3>
                <p className="text-white/80 text-center mb-4">
                  Comprehensive technical documentation and API references for developers.
                </p>
                <a href="/api-documentation" className="block text-center text-green-300 hover:text-green-200 transition-colors">
                  View Docs →
                </a>
              </div>
            </div>
          </section>

          {/* Content Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Content Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6 text-white">Technology & Innovation</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <span className="text-white/90">Autonomous Systems Architecture</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-3 h-3 bg-fuchsia-400 rounded-full"></div>
                    <span className="text-white/90">AI-Powered Automation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white/90">Cloud-Native Solutions</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-white/90">Performance Optimization</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6 text-white">Industry Applications</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-white/90">Enterprise Automation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-white/90">Content Generation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span className="text-white/90">DevOps & CI/CD</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-white/90">Security & Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Articles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Building Autonomous Systems</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Learn how to design and implement self-running automation systems that operate independently.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60">5 min read</span>
                  <a href="/blog" className="text-cyan-300 hover:text-cyan-200 text-sm transition-colors">
                    Read More →
                  </a>
                </div>
              </article>

              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">AI Content Generation</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Discover how AI-powered systems can automatically generate high-quality content at scale.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60">7 min read</span>
                  <a href="/blog" className="text-fuchsia-300 hover:text-fuchsia-200 text-sm transition-colors">
                    Read More →
                  </a>
                </div>
              </article>

              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Performance Optimization</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Techniques for optimizing autonomous systems and achieving maximum efficiency.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60">6 min read</span>
                  <a href="/blog" className="text-green-300 hover:text-green-200 text-sm transition-colors">
                    Read More →
                  </a>
                </div>
              </article>
            </div>
          </section>

          {/* Resources & Tools */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Resources & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6 text-white">Developer Resources</h3>
                <div className="space-y-4">
                  <a href="/api-documentation" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <h4 className="text-lg font-semibold text-cyan-300 mb-2">API Documentation</h4>
                    <p className="text-white/80 text-sm">Complete API reference with examples and integration guides.</p>
                  </a>
                  <a href="/component-library" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <h4 className="text-lg font-semibold text-fuchsia-300 mb-2">Component Library</h4>
                    <p className="text-white/80 text-sm">Reusable UI components for building automation interfaces.</p>
                  </a>
                  <a href="/automation" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <h4 className="text-lg font-semibold text-green-300 mb-2">Automation Tools</h4>
                    <p className="text-white/80 text-sm">Tools and utilities for building autonomous systems.</p>
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6 text-white">Learning Paths</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-lg font-semibold text-yellow-300 mb-2">Beginner</h4>
                    <p className="text-white/80 text-sm mb-3">Start with automation fundamentals and basic concepts.</p>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <span>3 articles</span>
                      <span>•</span>
                      <span>2 hours</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-lg font-semibold text-orange-300 mb-2">Intermediate</h4>
                    <p className="text-white/80 text-sm mb-3">Advanced automation techniques and system design.</p>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <span>5 articles</span>
                      <span>•</span>
                      <span>4 hours</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-lg font-semibold text-red-300 mb-2">Advanced</h4>
                    <p className="text-white/80 text-sm mb-3">Expert-level automation and AI system implementation.</p>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <span>7 articles</span>
                      <span>•</span>
                      <span>6 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-white">Stay Updated</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Get the latest insights on autonomous systems, AI automation, and technology trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-all duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white font-semibold transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white/90">Ready to Explore?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Dive deeper into our content library and discover how autonomous systems can transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/blog" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white font-semibold transition-all duration-200">
                Browse All Articles
              </a>
              <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Explore Services
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Get in Touch
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}