import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, automation, and technology innovation from Zion Tech Group." />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI, automation, and technology innovation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, updates, and thought leadership on the future of autonomous technology
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Home
              </a>
              <a href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                About
              </a>
              <a href="/services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Services
              </a>
              <a href="/automation" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Automation
              </a>
              <a href="/resources" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Resources
              </a>
              <a href="/contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Contact
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">The Future of Autonomous AI</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Exploring how autonomous AI systems are reshaping industries and creating new possibilities for human-machine collaboration.
                </p>
                <div className="text-xs text-cyan-300/90">Published: January 2025</div>
              </article>

              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Automation in Modern DevOps</h3>
                <p className="text-white/70 mb-4 text-sm">
                  How automated CI/CD pipelines and infrastructure management are accelerating software delivery and improving reliability.
                </p>
                <div className="text-xs text-cyan-300/90">Published: January 2025</div>
              </article>

              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Machine Learning in Production</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Best practices for deploying and maintaining machine learning models in production environments with automated monitoring.
                </p>
                <div className="text-xs text-cyan-300/90">Published: January 2025</div>
              </article>

              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Cloud-Native Architecture</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Building scalable, resilient applications using cloud-native principles and automated infrastructure management.
                </p>
                <div className="text-xs text-cyan-300/90">Published: January 2025</div>
              </article>

              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">AI Security & Ethics</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Ensuring responsible AI development with robust security measures and ethical considerations for autonomous systems.
                </p>
                <div className="text-xs text-cyan-300/90">Published: January 2025</div>
              </article>

              <article className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Data-Driven Decision Making</h3>
                <p className="text-white/70 mb-4 text-sm">
                  How autonomous analytics systems are transforming business intelligence and enabling real-time decision making.
                </p>
                <div className="text-xs text-cyan-300/90">Published: January 2025</div>
              </article>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Stay Updated</h2>
              <p className="text-white/70 mb-6">
                Subscribe to our newsletter for the latest insights on autonomous technology and AI innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
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