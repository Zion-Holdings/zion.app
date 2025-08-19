import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - Autonomous Technology Insights</title>
        <meta name="description" content="Explore insights, updates, and innovations in autonomous technology, AI automation, and cloud computing from Zion Tech Group." />
        <meta property="og:title" content="Blog | Zion Tech Group - Autonomous Technology Insights" />
        <meta property="og:description" content="Explore insights, updates, and innovations in autonomous technology, AI automation, and cloud computing from Zion Tech Group." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Zion Tech Group Blog
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Insights, updates, and innovations in autonomous technology, AI automation, and cloud computing
              </p>
            </header>
            
            {/* Featured Article */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-500/20 rounded-2xl overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-white/60 text-sm">August 15, 2025</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    The Future of Autonomous AI: How Zion Tech Group is Revolutionizing Technology
                  </h3>
                  <p className="text-xl text-white/80 mb-6">
                    Discover how our autonomous AI systems are transforming industries and creating new possibilities 
                    for businesses worldwide. From intelligent automation to predictive analytics, explore the cutting-edge 
                    innovations that are shaping tomorrow's technology landscape.
                  </p>
                  <div className="flex items-center gap-4">
                    <a 
                      href="/blog/ai-automation-trends-2025" 
                      className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all"
                    >
                      Read Full Article
                    </a>
                    <span className="text-white/60 text-sm">5 min read</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Article Categories */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Browse by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="#ai-automation" className="group">
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/40 transition-all group-hover:scale-105">
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">AI & Automation</h3>
                    <p className="text-white/70">Latest developments in artificial intelligence and autonomous systems</p>
                  </div>
                </a>
                
                <a href="#cloud-computing" className="group">
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6 hover:border-green-400/40 transition-all group-hover:scale-105">
                    <div className="bg-green-500/20 border border-green-500/30 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cloud Computing</h3>
                    <p className="text-white/70">Cloud-native solutions and infrastructure innovations</p>
                  </div>
                </a>
                
                <a href="#innovation" className="group">
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/40 transition-all group-hover:scale-105">
                    <div className="bg-purple-500/20 border border-purple-500/30 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                    <p className="text-white/70">Emerging technologies and breakthrough innovations</p>
                  </div>
                </a>
              </div>
            </section>
            
            {/* Latest Articles */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400/30 transition-all">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium">
                        AI
                      </span>
                      <span className="text-white/60 text-sm">August 14, 2025</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Machine Learning in Autonomous Systems: A Deep Dive
                    </h3>
                    <p className="text-white/70 mb-4">
                      Explore how machine learning algorithms power our autonomous systems and enable intelligent decision-making.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">4 min read</span>
                      <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
                
                <article className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400/30 transition-all">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                        Cloud
                      </span>
                      <span className="text-white/60 text-sm">August 13, 2025</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Cloud-Native Architecture: Building for Scale
                    </h3>
                    <p className="text-white/70 mb-4">
                      Learn about our cloud-native approach and how it enables seamless scaling and global deployment.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">6 min read</span>
                      <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
                
                <article className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400/30 transition-all">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs font-medium">
                        Innovation
                      </span>
                      <span className="text-white/60 text-sm">August 12, 2025</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      The Rise of Autonomous Content Generation
                    </h3>
                    <p className="text-white/70 mb-4">
                      Discover how AI is revolutionizing content creation and what it means for the future of digital media.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">5 min read</span>
                      <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
                
                <article className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400/30 transition-all">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs font-medium">
                        Security
                      </span>
                      <span className="text-white/60 text-sm">August 11, 2025</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      AI-Powered Security: Protecting the Digital Future
                    </h3>
                    <p className="text-white/70 mb-4">
                      How artificial intelligence is enhancing cybersecurity and protecting autonomous systems from threats.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">7 min read</span>
                      <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
                
                <article className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400/30 transition-all">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-pink-500/20 text-pink-400 px-2 py-1 rounded text-xs font-medium">
                        Trends
                      </span>
                      <span className="text-white/60 text-sm">August 10, 2025</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      2025 Technology Trends: What's Next?
                    </h3>
                    <p className="text-white/70 mb-4">
                      A comprehensive look at the emerging technologies that will shape the industry in 2025 and beyond.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">8 min read</span>
                      <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
                
                <article className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400/30 transition-all">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-teal-500/20 text-teal-400 px-2 py-1 rounded text-xs font-medium">
                        Case Study
                      </span>
                      <span className="text-white/60 text-sm">August 9, 2025</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      How Company X Increased Efficiency by 300%
                    </h3>
                    <p className="text-white/70 mb-4">
                      A real-world example of how our autonomous systems transformed business operations and delivered results.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">6 min read</span>
                      <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </section>
            
            {/* Newsletter Signup */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
                <p className="text-xl text-white/80 mb-6">
                  Get the latest insights on autonomous technology and AI innovation delivered to your inbox.
                </p>
                <form className="max-w-md mx-auto flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-sm text-white/60 mt-4">
                  No spam, unsubscribe at any time. Read our <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}