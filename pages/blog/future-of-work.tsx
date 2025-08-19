import React from 'react';
import Head from 'next/head';

export default function FutureOfWork() {
  return (
    <>
      <Head>
        <title>The Future of Work: Human-AI Collaboration | Zion Tech Group</title>
        <meta name="description" content="How autonomous systems are reshaping the workplace and enhancing human capabilities." />
        <meta property="og:title" content="The Future of Work: Human-AI Collaboration" />
        <meta property="og:description" content="How autonomous systems are reshaping the workplace and enhancing human capabilities." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <a href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Blog
              </a>
            </nav>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm rounded-full border border-yellow-400/30">
                    Future of Work
                  </span>
                  <span className="text-white/60 text-sm">January 5, 2025</span>
                  <span className="text-white/60 text-sm">•</span>
                  <span className="text-white/60 text-sm">5 min read</span>
                </div>
                
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  The Future of Work: Human-AI Collaboration
                </h1>
                
                <p className="text-xl text-white/80 leading-relaxed">
                  The workplace is evolving rapidly, and autonomous systems are playing a central role in 
                  this transformation. Rather than replacing humans, these systems are enhancing our 
                  capabilities and enabling new forms of collaboration.
                </p>
              </header>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Collaborative Intelligence</h2>
                <p className="text-white/90 mb-4">
                  The future of work isn't about humans vs. machines—it's about humans and machines working 
                  together to achieve more than either could accomplish alone.
                </p>
                
                <div className="bg-white/10 rounded-lg p-6 border border-white/20 mb-6">
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-3">Benefits of Human-AI Collaboration</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Enhanced creativity and innovation</li>
                    <li>• Improved decision-making with data insights</li>
                    <li>• Increased productivity through automation</li>
                    <li>• Better focus on high-value strategic work</li>
                  </ul>
                </div>
              </section>
              
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-lg p-6 border border-cyan-500/20 mt-12">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Shape the Future of Work</h3>
                <p className="text-white/80 mb-4">
                  Discover how Zion Tech Group can help you implement autonomous systems that enhance 
                  human capabilities and drive workplace innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 text-center">
                    Get Started
                  </a>
                  <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50 text-center">
                    Learn More
                  </a>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}