import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationDemoPage() {
  return (
    <>
      <Head>
        <title>Automation Demo | Zion Tech Group - See Our Systems in Action</title>
        <meta name="description" content="Experience Zion Tech Group's autonomous automation systems in action. See real-time demonstrations of our AI-powered solutions." />
        <meta property="og:title" content="Automation Demo | Zion Tech Group - See Our Systems in Action" />
        <meta property="og:description" content="Experience Zion Tech Group's autonomous automation systems in action. See real-time demonstrations of our AI-powered solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
              ← Back to Home
            </Link>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Automation Demo
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Experience our autonomous automation systems in action. See real-time demonstrations of our AI-powered solutions.
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Live System Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/10 rounded-lg p-6 border border-green-400/30 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-green-300">Content Generation</h3>
                  <div className="text-2xl font-bold text-green-400 mb-2">Active</div>
                  <div className="text-sm text-white/60">2,960+ pages created</div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-cyan-400/30 text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-300">Workflow Automation</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">227 Active</div>
                  <div className="text-sm text-white/60">99.99% uptime</div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-fuchsia-400/30 text-center">
                  <div className="w-16 h-16 bg-fuchsia-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-fuchsia-300">System Monitoring</h3>
                  <div className="text-2xl font-bold text-fuchsia-400 mb-2">24/7</div>
                  <div className="text-sm text-white/60">Real-time alerts</div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-blue-400/30 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-300">Performance</h3>
                  <div className="text-2xl font-bold text-blue-400 mb-2">Optimal</div>
                  <div className="text-sm text-white/60">Auto-optimized</div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Interactive Demonstrations</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-2xl p-8 border border-cyan-400/30">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-300">Content Generation Demo</h3>
                  <p className="text-white/80 mb-6">
                    Watch our AI system generate high-quality content in real-time. See how it adapts to different 
                    topics and maintains consistent quality across various formats.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <div className="text-sm text-white/60 mb-2">Generated Content Preview:</div>
                    <div className="text-white/80 text-sm">
                      "Autonomous systems represent the next evolution in technology infrastructure, 
                      enabling businesses to achieve unprecedented levels of efficiency and reliability..."
                    </div>
                  </div>
                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-colors">
                    Start Content Demo
                  </button>
                </div>

                <div className="bg-gradient-to-br from-fuchsia-400/10 to-purple-400/10 rounded-2xl p-8 border border-fuchsia-400/30">
                  <h3 className="text-2xl font-bold mb-6 text-fuchsia-300">Workflow Automation Demo</h3>
                  <p className="text-white/80 mb-6">
                    Experience our workflow automation system in action. See how it processes tasks, 
                    makes decisions, and optimizes processes automatically.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <div className="text-sm text-white/60 mb-2">Current Workflow Status:</div>
                    <div className="text-white/80 text-sm">
                      ✓ Task 1: Content Analysis (Completed)<br/>
                      ✓ Task 2: SEO Optimization (Completed)<br/>
                      🔄 Task 3: Quality Assurance (In Progress)<br/>
                      ⏳ Task 4: Publication (Pending)
                    </div>
                  </div>
                  <button className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold py-3 rounded-lg transition-colors">
                    Start Workflow Demo
                  </button>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">System Metrics</h2>
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">99.99%</div>
                    <div className="text-white/80">System Uptime</div>
                    <div className="text-sm text-cyan-300 mt-2">Last 30 days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-fuchsia-400 mb-2">2.3s</div>
                    <div className="text-white/80">Average Response Time</div>
                    <div className="text-sm text-fuchsia-300 mt-2">Real-time processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
                    <div className="text-white/80">Efficiency Improvement</div>
                    <div className="text-sm text-green-300 mt-2">vs. manual processes</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">Frontend Technologies</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Next.js 14</span>
                      <span className="text-green-400">✓ Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">React 18</span>
                      <span className="text-green-400">✓ Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">TypeScript</span>
                      <span className="text-green-400">✓ Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Tailwind CSS</span>
                      <span className="text-green-400">✓ Active</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Backend & Infrastructure</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Node.js</span>
                      <span className="text-green-400">✓ Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">PM2 Process Manager</span>
                      <span className="text-green-400">✓ Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">GitHub Actions</span>
                      <span className="text-green-400">✓ Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Netlify Deployment</span>
                      <span className="text-green-400">✓ Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-6 text-white/90">Ready to Experience Automation?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  See how our autonomous systems can transform your business operations. 
                  Schedule a personalized demo today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                    Schedule Demo
                  </Link>
                  <Link href="/services" className="border border-white/30 hover:border-cyan-400/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                    Explore Services
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