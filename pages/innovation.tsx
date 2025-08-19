import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function InnovationPage() {
  return (
    <>
      <Head>
        <title>Innovation Hub | Zion Tech Group - Autonomous Technology Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's latest innovations in autonomous technology, AI automation, and intelligent systems that are shaping the future." />
        <meta property="og:title" content="Innovation Hub | Zion Tech Group" />
        <meta property="og:description" content="Discover our latest innovations in autonomous technology and AI automation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Innovation Hub
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future through autonomous technology and intelligent innovation
              </p>
            </header>

            {/* Latest Innovations */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Latest Innovations</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-300 text-center">Autonomous System Orchestration</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Our latest breakthrough in autonomous technology enables intelligent coordination across multiple cloud environments, 
                    creating a self-managing ecosystem that continuously optimizes performance and resource allocation.
                  </p>
                  <div className="space-y-2 text-sm text-cyan-300/80">
                    <div>• Cross-platform automation coordination</div>
                    <div>• Intelligent resource management</div>
                    <div>• Self-healing infrastructure</div>
                    <div>• Predictive optimization</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-8 border border-fuchsia-400/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-300 text-center">AI-Powered Content Intelligence</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Revolutionary content generation system that creates contextually relevant, SEO-optimized content 
                    while continuously learning and improving based on user engagement and performance metrics.
                  </p>
                  <div className="space-y-2 text-sm text-fuchsia-300/80">
                    <div>• Context-aware content creation</div>
                    <div>• Real-time SEO optimization</div>
                    <div>• Multi-language support</div>
                    <div>• Performance-driven learning</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Innovation Categories */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Innovation Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Autonomous Systems</h3>
                  <p className="text-white/70 mb-6">
                    Self-managing technology systems that operate independently, continuously improving and adapting to changing requirements.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Self-healing infrastructure</li>
                    <li>• Predictive maintenance</li>
                    <li>• Intelligent resource allocation</li>
                    <li>• Automated optimization</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">AI & Machine Learning</h3>
                  <p className="text-white/70 mb-6">
                    Advanced artificial intelligence systems that learn, adapt, and make intelligent decisions to drive innovation.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Deep learning networks</li>
                    <li>• Natural language processing</li>
                    <li>• Computer vision</li>
                    <li>• Predictive analytics</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Automation & Efficiency</h3>
                  <p className="text-white/70 mb-6">
                    Intelligent automation solutions that streamline processes and maximize efficiency across all operations.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Process automation</li>
                    <li>• Workflow optimization</li>
                    <li>• Smart decision making</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Security & Compliance</h3>
                  <p className="text-white/70 mb-6">
                    Next-generation security solutions with autonomous threat detection and intelligent response systems.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Zero-trust architecture</li>
                    <li>• Automated threat detection</li>
                    <li>• Compliance monitoring</li>
                    <li>• Intelligent response</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Data & Analytics</h3>
                  <p className="text-white/70 mb-6">
                    Advanced analytics platforms that transform data into actionable insights and predictive intelligence.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Real-time analytics</li>
                    <li>• Predictive modeling</li>
                    <li>• Data visualization</li>
                    <li>• Business intelligence</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Cloud & Infrastructure</h3>
                  <p className="text-white/70 mb-6">
                    Scalable cloud solutions with intelligent automation and autonomous management capabilities.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Multi-cloud architecture</li>
                    <li>• Auto-scaling systems</li>
                    <li>• Load balancing</li>
                    <li>• Disaster recovery</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Innovation Metrics */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Innovation Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-400/30">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                  <div className="text-white/80">Active Automations</div>
                  <div className="text-sm text-cyan-300/80 mt-2">Continuous Innovation</div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-2xl p-8 border border-fuchsia-400/30">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                  <div className="text-white/80">Content Pages</div>
                  <div className="text-sm text-fuchsia-300/80 mt-2">AI-Generated</div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-400/30">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.99%</div>
                  <div className="text-white/80">System Reliability</div>
                  <div className="text-sm text-green-300/80 mt-2">Autonomous Operation</div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-8 border border-blue-400/30">
                  <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-white/80">Innovation Cycle</div>
                  <div className="text-sm text-blue-300/80 mt-2">Continuous Learning</div>
                </div>
              </div>
            </section>

            {/* Innovation Process */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Our Innovation Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-300">Research & Discovery</h3>
                  <p className="text-white/70 text-sm">
                    Continuous exploration of emerging technologies and market opportunities
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-fuchsia-300">Prototype & Test</h3>
                  <p className="text-white/70 text-sm">
                    Rapid prototyping and iterative testing of innovative solutions
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-green-300">Deploy & Monitor</h3>
                  <p className="text-white/70 text-sm">
                    Intelligent deployment with continuous monitoring and optimization
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-300">Evolve & Improve</h3>
                  <p className="text-white/70 text-sm">
                    Continuous evolution through autonomous learning and adaptation
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-6 text-white/90">Join the Innovation Revolution</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Experience the future of autonomous technology and discover how our innovations can transform your business.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/services" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                    Explore Services
                  </Link>
                  <Link href="/contact" className="border border-white/30 hover:border-cyan-400/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                    Start Innovating
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}