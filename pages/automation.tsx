import React from 'react';
import Head from 'next/head';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's autonomous automation systems that power our intelligent infrastructure and content generation." />
        <meta property="og:title" content="Automation Systems | Zion Tech Group" />
        <meta property="og:description" content="Explore Zion Tech Group's autonomous automation systems that power our intelligent infrastructure and content generation." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <nav className="mb-6 text-left">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ← Back to Home
                </a>
              </nav>
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Autonomous Automation Systems
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Discover how our AI-powered automation systems work 24/7 to maintain, 
                optimize, and enhance our technology infrastructure
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">System Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Content Generation</h3>
                  <p className="text-white/80">
                    AI systems automatically create, optimize, and publish content across all platforms
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-fuchsia-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Quality Assurance</h3>
                  <p className="text-white/80">
                    Continuous monitoring and testing ensure optimal performance and reliability
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-indigo-400">Self-Healing</h3>
                  <p className="text-white/80">
                    Systems automatically detect and resolve issues without human intervention
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Analytics & Insights</h3>
                  <p className="text-white/80">
                    Real-time data analysis provides actionable insights for continuous improvement
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">Security Monitoring</h3>
                  <p className="text-white/80">
                    24/7 threat detection and automated security response systems
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Global Sync</h3>
                  <p className="text-white/80">
                    Multi-region synchronization ensures consistent performance worldwide
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Automation Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-6 rounded-xl border border-cyan-400/30">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">227</div>
                  <div className="text-white/80">Active Automations</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-6 rounded-xl border border-cyan-400/30">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-white/80">Uptime</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-6 rounded-xl border border-cyan-400/30">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-white/80">Operation</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-6 rounded-xl border border-cyan-400/30">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">47s</div>
                  <div className="text-white/80">Avg Response Time</div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">How It Works</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">Continuous Monitoring</h3>
                    <p className="text-white/80">
                      Our autonomous systems continuously monitor all aspects of our infrastructure, 
                      from performance metrics to security threats, ensuring nothing goes unnoticed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Intelligent Analysis</h3>
                    <p className="text-white/80">
                      AI algorithms analyze data in real-time, identifying patterns, anomalies, 
                      and opportunities for optimization across all systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-indigo-400">Automated Action</h3>
                    <p className="text-white/80">
                      Systems automatically execute optimized actions, from content generation 
                      to infrastructure scaling, without requiring human intervention.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-green-400">Learning & Evolution</h3>
                    <p className="text-white/80">
                      Every action and outcome is analyzed to improve future performance, 
                      creating a continuously evolving and more intelligent system.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Experience the Future</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Our autonomous automation systems are just the beginning. Discover how 
                AI-powered automation can transform your business and operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all"
                >
                  Get Started
                </a>
                <a 
                  href="/reports/updates/update-2025-08-15-0406" 
                  className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all"
                >
                  View Latest Report
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}