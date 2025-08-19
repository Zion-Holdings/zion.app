import React from 'react';
import Head from 'next/head';

export default function AIResearchPage() {
  return (
    <>
      <Head>
        <title>AI Research & Development | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's cutting-edge AI research, machine learning breakthroughs, and autonomous system development." />
        <meta property="og:title" content="AI Research & Development | Zion Tech Group" />
        <meta property="og:description" content="Cutting-edge AI research and autonomous system development." />
        <meta name="twitter:card" content="summary_large_image" />
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
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                AI Research & Development
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future of artificial intelligence through autonomous systems, machine learning breakthroughs, and cutting-edge research
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Research Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-2xl border border-blue-500/30">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Neural Networks</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Advanced neural network architectures for autonomous decision-making and pattern recognition
                  </p>
                  <div className="text-xs text-blue-300/90">Research Phase: 85% Complete</div>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-2xl border border-green-500/30">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Computer Vision</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Real-time image processing and visual understanding systems for autonomous applications
                  </p>
                  <div className="text-xs text-green-300/90">Research Phase: 72% Complete</div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-2xl border border-purple-500/30">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Natural Language Processing</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Advanced language understanding and generation models for human-AI interaction
                  </p>
                  <div className="text-xs text-purple-300/90">Research Phase: 78% Complete</div>
                </div>

                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-6 rounded-2xl border border-orange-500/30">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-3">Reinforcement Learning</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Self-improving algorithms that learn through interaction and experience
                  </p>
                  <div className="text-xs text-orange-300/90">Research Phase: 65% Complete</div>
                </div>

                <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 p-6 rounded-2xl border border-red-500/30">
                  <div className="text-4xl mb-4">🔐</div>
                  <h3 className="text-xl font-semibold text-red-400 mb-3">AI Security</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Robust security protocols and ethical AI development frameworks
                  </p>
                  <div className="text-xs text-red-300/90">Research Phase: 91% Complete</div>
                </div>

                <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 p-6 rounded-2xl border border-teal-500/30">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-xl font-semibold text-teal-400 mb-3">Edge AI</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Distributed AI systems for real-time processing and reduced latency
                  </p>
                  <div className="text-xs text-teal-300/90">Research Phase: 58% Complete</div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Recent Breakthroughs</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-6 rounded-xl border border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Autonomous Agent Orchestration</h3>
                  <p className="text-white/80 mb-4">
                    Successfully developed a system where multiple AI agents can coordinate and collaborate 
                    autonomously, achieving 40% better performance than individual agents working in isolation.
                  </p>
                  <div className="text-sm text-white/60">Published: August 2025</div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Quantum-Inspired Algorithms</h3>
                  <p className="text-white/80 mb-4">
                    Implemented quantum-inspired optimization algorithms that provide exponential speedup 
                    for complex computational problems in machine learning and data analysis.
                  </p>
                  <div className="text-sm text-white/60">Published: July 2025</div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Self-Healing Neural Networks</h3>
                  <p className="text-white/80 mb-4">
                    Developed neural networks capable of detecting and repairing their own structural 
                    issues, leading to 99.7% reliability in long-term autonomous operation.
                  </p>
                  <div className="text-sm text-white/60">Published: June 2025</div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Research Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">47</div>
                  <div className="text-sm text-white/70">AI Models</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400">156</div>
                  <div className="text-sm text-white/70">Research Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400">23</div>
                  <div className="text-sm text-white/70">Patents Filed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400">89%</div>
                  <div className="text-sm text-white/70">Success Rate</div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Join Our Research</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  We're always looking for talented researchers, engineers, and innovators to join our 
                  mission of advancing autonomous AI technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                  >
                    Get in Touch
                  </a>
                  <a 
                    href="/services" 
                    className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200"
                  >
                    View Services
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}