import React from 'react';
import Head from 'next/head';

export default function TechnologyInsightsPage() {
  return (
    <>
      <Head>
        <title>Technology Insights | Zion Tech Group - Autonomous Innovation Hub</title>
        <meta name="description" content="Explore cutting-edge technology insights, trends, and innovations from Zion Tech Group's autonomous research systems." />
        <meta property="og:title" content="Technology Insights | Zion Tech Group" />
        <meta property="og:description" content="Latest technology trends and innovations from our autonomous research systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Technology Insights
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover the latest trends, innovations, and breakthroughs in autonomous technology, AI, and digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/reports" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                View Reports
              </a>
              <a href="/automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Automation Hub
              </a>
            </div>
          </section>

          {/* Featured Insights */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Featured Insights</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">AI-Powered Content Generation</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Our autonomous systems have generated over 2,960 pages of high-quality content, demonstrating the power of AI-driven content creation.
                </p>
                <a href="/reports" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn More →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Autonomous System Redundancy</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Advanced redundancy systems ensure 99.9% uptime across 227+ active automations, providing unparalleled reliability.
                </p>
                <a href="/automation" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                  Explore Automation →
                </a>
              </div>
            </div>
          </section>

          {/* Technology Trends */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Emerging Technology Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-4 text-green-400">Edge Computing</h3>
                <p className="text-white/70 mb-4">
                  Distributed computing at the edge enables faster processing and reduced latency for autonomous systems.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-green-400">Trending:</span> IoT Integration, Real-time Processing
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">Zero Trust Security</h3>
                <p className="text-white/70 mb-4">
                  Advanced security frameworks that verify every access request, regardless of location or device.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-blue-400">Trending:</span> Identity Verification, Micro-segmentation
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Quantum Computing</h3>
                <p className="text-white/70 mb-4">
                  Revolutionary computing paradigm that leverages quantum mechanics for unprecedented processing power.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-purple-400">Trending:</span> Cryptography, Optimization
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Autonomous AI Agents</h3>
                <p className="text-white/70 mb-4">
                  Self-learning AI systems that can operate independently and make complex decisions autonomously.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-cyan-400">Trending:</span> Multi-agent Systems, Self-optimization
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold mb-4 text-orange-400">Serverless Architecture</h3>
                <p className="text-white/70 mb-4">
                  Event-driven computing model that automatically scales and manages infrastructure resources.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-orange-400">Trending:</span> Event-driven, Auto-scaling
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-4 text-pink-400">5G & IoT Integration</h3>
                <p className="text-white/70 mb-4">
                  Ultra-fast connectivity enabling seamless integration of billions of IoT devices and autonomous systems.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-pink-400">Trending:</span> Smart Cities, Connected Vehicles
                </div>
              </div>
            </div>
          </section>

          {/* Research Areas */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Research Focus Areas</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Machine Learning & AI</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Neural Network Optimization</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision Systems</li>
                  <li>• Reinforcement Learning</li>
                  <li>• Federated Learning</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-8 border border-fuchsia-400/30">
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">Autonomous Systems</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Self-healing Infrastructure</li>
                  <li>• Predictive Maintenance</li>
                  <li>• Automated Decision Making</li>
                  <li>• System Optimization</li>
                  <li>• Fault Tolerance</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-8 border border-green-400/30">
                <h3 className="text-2xl font-bold mb-4 text-green-300">Digital Transformation</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Cloud Migration Strategies</li>
                  <li>• DevOps Automation</li>
                  <li>• Microservices Architecture</li>
                  <li>• API-First Design</li>
                  <li>• Data Pipeline Optimization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
              <h2 className="text-3xl font-bold mb-6 text-white/90">Stay Ahead of the Curve</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Get the latest technology insights and stay informed about emerging trends in autonomous innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                  Get in Touch
                </a>
                <a href="/reports" className="border border-white/30 hover:border-cyan-400/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                  View Reports
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}