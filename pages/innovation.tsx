import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function InnovationPage() {
  return (
    <>
      <Head>
        <title>Innovation | Zion Tech Group - Future Technology & Breakthroughs</title>
        <meta name="description" content="Discover Zion Tech Group's latest technological breakthroughs, AI innovations, and future vision for autonomous technology." />
        <meta property="og:title" content="Innovation - Zion Tech Group" />
        <meta property="og:description" content="Latest technological breakthroughs and AI innovations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Innovation Hub
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pushing the boundaries of what's possible with autonomous AI and next-generation technology
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            {/* Innovation Stats */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Innovation Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400">50+</div>
                  <div className="text-sm text-white/70">AI Models</div>
                  <div className="text-xs text-cyan-400 mt-2">Active Development</div>
                </div>
                <div className="bg-gradient-to-br from-fuchsia-400/20 to-purple-400/20 border border-fuchsia-400/30 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-fuchsia-400">99.9%</div>
                  <div className="text-sm text-white/70">Accuracy</div>
                  <div className="text-xs text-fuchsia-400 mt-2">AI Predictions</div>
                </div>
                <div className="bg-gradient-to-br from-green-400/20 to-emerald-400/20 border border-green-400/30 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-white/70">Learning</div>
                  <div className="text-xs text-green-400 mt-2">Continuous</div>
                </div>
                <div className="bg-gradient-to-br from-orange-400/20 to-red-400/20 border border-orange-400/30 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-orange-400">100+</div>
                  <div className="text-sm text-white/70">Patents</div>
                  <div className="text-xs text-orange-400 mt-2">Filed</div>
                </div>
              </div>
            </div>

            {/* Breakthrough Technologies */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Breakthrough Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Neural Architecture Search</h3>
                  <p className="text-white/70 mb-6">
                    Our AI systems automatically design and optimize neural network architectures, discovering novel solutions that outperform human-designed models.
                  </p>
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• Automated model discovery</div>
                    <div>• Performance optimization</div>
                    <div>• Resource efficiency</div>
                    <div>• Continuous improvement</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🔮</div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Predictive Analytics Engine</h3>
                  <p className="text-white/70 mb-6">
                    Advanced forecasting systems that predict market trends, system failures, and optimization opportunities with unprecedented accuracy.
                  </p>
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• Real-time predictions</div>
                    <div>• Multi-dimensional analysis</div>
                    <div>• Risk assessment</div>
                    <div>• Trend identification</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Quantum-Classical Hybrid AI</h3>
                  <p className="text-white/70 mb-6">
                    Pioneering the integration of quantum computing with classical AI to solve previously intractable problems in optimization and simulation.
                  </p>
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• Quantum advantage</div>
                    <div>• Hybrid algorithms</div>
                    <div>• Optimization breakthroughs</div>
                    <div>• Future-ready architecture</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Autonomous DevOps</h3>
                  <p className="text-white/70 mb-6">
                    Self-managing development pipelines that automatically detect issues, optimize performance, and deploy updates with zero human intervention.
                  </p>
                  <div className="space-y-2 text-sm text-white/60">
                    <div>• Self-healing pipelines</div>
                    <div>• Performance optimization</div>
                    <div>• Security automation</div>
                    <div>• Continuous deployment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Areas */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Active Research Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">General AI</h3>
                  <p className="text-white/70">Developing AI systems that can understand, learn, and apply knowledge across diverse domains.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔬</div>
                  <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">Bio-Inspired Computing</h3>
                  <p className="text-white/70">Creating computational systems inspired by biological processes and neural networks.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Sustainable Tech</h3>
                  <p className="text-white/70">Developing technologies that promote environmental sustainability and reduce carbon footprints.</p>
                </div>
              </div>
            </div>

            {/* Innovation Pipeline */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Innovation Pipeline</h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-green-400">Phase 1</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Research & Development</h3>
                      <p className="text-white/70">Exploring new concepts and validating breakthrough technologies</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-blue-400">Phase 2</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Prototyping</h3>
                      <p className="text-white/70">Building working prototypes and testing core functionality</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-purple-400">Phase 3</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Production</h3>
                      <p className="text-white/70">Scaling successful innovations for commercial deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Join the Innovation Journey</h2>
              <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
                Be part of the future of technology. Partner with us to explore the next generation of autonomous AI and breakthrough innovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                  Partner With Us
                </a>
                <a href="/blog" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-200">
                  Read Our Research
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}