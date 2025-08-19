import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Hub | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's autonomous automation systems, workflows, and intelligent processes." />
        <meta property="og:title" content="Automation Hub | Zion Tech Group" />
        <meta property="og:description" content="Explore Zion Tech Group's autonomous automation systems, workflows, and intelligent processes." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Automation Hub
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Discover our autonomous systems that work 24/7 to maintain, optimize, and evolve our technology infrastructure.
                </p>
              </header>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Active Automation Systems</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-lg p-6 border border-cyan-400/30">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3">Content Generation</h3>
                    <p className="text-white/80 mb-4">
                      AI-powered systems that continuously create and optimize content across multiple domains.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-cyan-300">Status: Active</span>
                      <span className="text-green-400">✓ Running</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-fuchsia-400/10 to-purple-400/10 rounded-lg p-6 border border-fuchsia-400/30">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">System Monitoring</h3>
                    <p className="text-white/80 mb-4">
                      Continuous health monitoring with automated alerting and self-healing capabilities.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-fuchsia-300">Status: Active</span>
                      <span className="text-green-400">✓ Running</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-lg p-6 border border-green-400/30">
                    <h3 className="text-xl font-semibold text-green-300 mb-3">Security Automation</h3>
                    <p className="text-white/80 mb-4">
                      Automated threat detection, vulnerability scanning, and security response systems.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-300">Status: Active</span>
                      <span className="text-green-400">✓ Running</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-lg p-6 border border-blue-400/30">
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">CI/CD Pipeline</h3>
                    <p className="text-white/80 mb-4">
                      Automated testing, building, and deployment with intelligent rollback capabilities.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-300">Status: Active</span>
                      <span className="text-green-400">✓ Running</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-lg p-6 border border-purple-400/30">
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">Performance Optimization</h3>
                    <p className="text-white/80 mb-4">
                      Continuous performance monitoring and automated optimization recommendations.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-purple-300">Status: Active</span>
                      <span className="text-green-400">✓ Running</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-lg p-6 border border-yellow-400/30">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-3">Backup & Recovery</h3>
                    <p className="text-white/80 mb-4">
                      Automated backup systems with intelligent recovery and redundancy management.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-yellow-300">Status: Active</span>
                      <span className="text-green-400">✓ Running</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Automation Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">227</div>
                    <div className="text-white/80">Active Workflows</div>
                    <div className="text-sm text-cyan-300 mt-2">24/7 Operation</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-4xl font-bold text-fuchsia-400 mb-2">99.7%</div>
                    <div className="text-white/80">Success Rate</div>
                    <div className="text-sm text-fuchsia-300 mt-2">Last 24 Hours</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-4xl font-bold text-green-400 mb-2">2.3s</div>
                    <div className="text-white/80">Avg Execution</div>
                    <div className="text-sm text-green-300 mt-2">Per Workflow</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-4xl font-bold text-blue-400 mb-2">99.99%</div>
                    <div className="text-white/80">Uptime</div>
                    <div className="text-sm text-blue-300 mt-2">System Availability</div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-cyan-400">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3">Intelligent Detection</h3>
                    <p className="text-white/80">
                      Our systems continuously monitor and detect opportunities for improvement,
                      optimization, and maintenance.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-fuchsia-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-fuchsia-400">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">Autonomous Action</h3>
                    <p className="text-white/80">
                      Systems automatically execute appropriate actions based on learned patterns
                      and predefined optimization strategies.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-green-400">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-green-300 mb-3">Continuous Learning</h3>
                    <p className="text-white/80">
                      Each action provides feedback that improves future decision-making,
                      creating a self-improving system.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Explore Further</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/automation-health" className="group bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3 group-hover:text-cyan-200">Automation Health Dashboard</h3>
                    <p className="text-white/80 mb-4">
                      Monitor the real-time status and performance of all our automation systems.
                    </p>
                    <div className="text-cyan-400 group-hover:text-cyan-300">View Dashboard →</div>
                  </Link>
                  
                  <Link href="/reports" className="group bg-gradient-to-r from-fuchsia-400/10 to-purple-400/10 rounded-lg p-6 border border-fuchsia-400/30 hover:border-fuchsia-400/50 transition-all">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3 group-hover:text-fuchsia-200">Automation Reports</h3>
                    <p className="text-white/80 mb-4">
                      Detailed reports and analytics from our autonomous systems and workflows.
                    </p>
                    <div className="text-fuchsia-400 group-hover:text-fuchsia-300">View Reports →</div>
                  </Link>
                </div>
              </section>

              <footer className="border-t border-white/20 pt-8 text-center">
                <p className="text-white/60">
                  Our automation systems never sleep, ensuring continuous innovation and optimization.
                </p>
              </footer>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}