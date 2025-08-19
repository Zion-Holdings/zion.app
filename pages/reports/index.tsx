import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ReportsPage() {
  return (
    <>
      <Head>
        <title>Reports & Analytics | Zion Tech Group</title>
        <meta name="description" content="Comprehensive reports and analytics from Zion Tech Group's autonomous systems and automation workflows." />
        <meta property="og:title" content="Reports & Analytics | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive reports and analytics from Zion Tech Group's autonomous systems and automation workflows." />
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
                  Reports & Analytics
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Comprehensive insights from our autonomous systems, automation workflows, and performance metrics.
                </p>
              </header>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Latest Updates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link href="/reports/updates/update-2025-08-15-0406" className="group bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all">
                    <h3 className="text-lg font-semibold text-cyan-300 mb-3 group-hover:text-cyan-200">System Status Update</h3>
                    <p className="text-white/80 mb-4">
                      Latest autonomous system update with performance metrics and achievements.
                    </p>
                    <div className="text-sm text-white/60">August 15, 2025 at 04:06</div>
                    <div className="text-cyan-400 group-hover:text-cyan-300 mt-3">Read Report →</div>
                  </Link>
                  
                  <Link href="/reports/updates/update-2025-08-15-0405" className="group bg-gradient-to-br from-fuchsia-400/10 to-purple-400/10 rounded-lg p-6 border border-fuchsia-400/30 hover:border-fuchsia-400/50 transition-all">
                    <h3 className="text-lg font-semibold text-fuchsia-300 mb-3 group-hover:text-fuchsia-200">Content Generation Report</h3>
                    <p className="text-white/80 mb-4">
                      AI-powered content generation milestones and technology stack updates.
                    </p>
                    <div className="text-sm text-white/60">August 15, 2025 at 04:05</div>
                    <div className="text-fuchsia-400 group-hover:text-fuchsia-300 mt-3">Read Report →</div>
                  </Link>
                  
                  <Link href="/reports/updates/update-2025-08-15-0404" className="group bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-lg p-6 border border-green-400/30 hover:border-green-400/50 transition-all">
                    <h3 className="text-lg font-semibold text-green-300 mb-3 group-hover:text-green-200">Automation Workflow Status</h3>
                    <p className="text-white/80 mb-4">
                      Comprehensive overview of automation workflows and redundancy systems.
                    </p>
                    <div className="text-sm text-white/60">August 15, 2025 at 04:04</div>
                    <div className="text-green-400 group-hover:text-green-300 mt-3">Read Report →</div>
                  </Link>
                  
                  <Link href="/reports/updates/update-2025-08-15-0111" className="group bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-lg p-6 border border-blue-400/30 hover:border-blue-400/50 transition-all">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3 group-hover:text-blue-200">Security & Monitoring</h3>
                    <p className="text-white/80 mb-4">
                      Security status update and monitoring system overview.
                    </p>
                    <div className="text-sm text-white/60">August 15, 2025 at 01:11</div>
                    <div className="text-blue-400 group-hover:text-blue-300 mt-3">Read Report →</div>
                  </Link>
                  
                  <Link href="/reports/updates/update-2025-08-15-0403" className="group bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-lg p-6 border border-purple-400/30 hover:border-purple-400/50 transition-all">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3 group-hover:text-purple-200">CI/CD Pipeline Report</h3>
                    <p className="text-white/80 mb-4">
                      Deployment status and CI/CD pipeline performance metrics.
                    </p>
                    <div className="text-sm text-white/60">August 15, 2025 at 04:03</div>
                    <div className="text-purple-400 group-hover:text-purple-300 mt-3">Read Report →</div>
                  </Link>
                  
                  <Link href="/reports/updates/update-2025-08-15-0402" className="group bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-lg p-6 border border-yellow-400/30 hover:border-yellow-400/50 transition-all">
                    <h3 className="text-lg font-semibold text-yellow-300 mb-3 group-hover:text-yellow-200">Performance Optimization</h3>
                    <p className="text-white/80 mb-4">
                      Performance metrics and optimization results from our systems.
                    </p>
                    <div className="text-sm text-white/60">August 15, 2025 at 04:02</div>
                    <div className="text-yellow-400 group-hover:text-yellow-300 mt-3">Read Report →</div>
                  </Link>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Report Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3">System Updates</h3>
                    <p className="text-white/80 mb-4">
                      Real-time updates from our autonomous systems covering performance, security, and operations.
                    </p>
                    <div className="text-sm text-cyan-300">
                      <span className="font-semibold">6</span> Recent Reports
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">Performance Analytics</h3>
                    <p className="text-white/80 mb-4">
                      Detailed performance metrics, response times, and optimization results from our systems.
                    </p>
                    <div className="text-sm text-fuchsia-300">
                      <span className="font-semibold">Continuous</span> Monitoring
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-green-300 mb-3">Automation Insights</h3>
                    <p className="text-white/80 mb-4">
                      Comprehensive analysis of our automation workflows, success rates, and system health.
                    </p>
                    <div className="text-sm text-green-300">
                      <span className="font-semibold">227</span> Active Workflows
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">Security Reports</h3>
                    <p className="text-white/80 mb-4">
                      Security status updates, threat detection results, and vulnerability assessment reports.
                    </p>
                    <div className="text-sm text-blue-300">
                      <span className="font-semibold">24/7</span> Monitoring
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">Content Generation</h3>
                    <p className="text-white/80 mb-4">
                      Reports on AI-powered content creation, page generation statistics, and quality metrics.
                    </p>
                    <div className="text-sm text-purple-300">
                      <span className="font-semibold">2,960+</span> Pages Generated
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-3">Infrastructure Health</h3>
                    <p className="text-white/80 mb-4">
                      System infrastructure status, redundancy systems, and operational health metrics.
                    </p>
                    <div className="text-sm text-yellow-300">
                      <span className="font-semibold">99.99%</span> Uptime
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Key Metrics Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-lg p-6 border border-cyan-400/30">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">227</div>
                    <div className="text-white/80">Active Workflows</div>
                    <div className="text-sm text-cyan-300 mt-2">Automation Systems</div>
                  </div>
                  
                  <div className="text-center bg-gradient-to-br from-fuchsia-400/10 to-purple-400/10 rounded-lg p-6 border border-fuchsia-400/30">
                    <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                    <div className="text-white/80">Content Pages</div>
                    <div className="text-sm text-fuchsia-300 mt-2">AI Generated</div>
                  </div>
                  
                  <div className="text-center bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-lg p-6 border border-green-400/30">
                    <div className="text-4xl font-bold text-green-400 mb-2">99.7%</div>
                    <div className="text-white/80">Success Rate</div>
                    <div className="text-sm text-green-300 mt-2">Workflow Execution</div>
                  </div>
                  
                  <div className="text-center bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-lg p-6 border border-blue-400/30">
                    <div className="text-4xl font-bold text-blue-400 mb-2">99.99%</div>
                    <div className="text-white/80">System Uptime</div>
                    <div className="text-sm text-blue-300 mt-2">Continuous Operation</div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Explore More</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/automation-health" className="group bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3 group-hover:text-cyan-200">Live Dashboard</h3>
                    <p className="text-white/80 mb-4">
                      Real-time monitoring dashboard for all our automation systems and workflows.
                    </p>
                    <div className="text-cyan-400 group-hover:text-cyan-300">View Dashboard →</div>
                  </Link>
                  
                  <Link href="/automation" className="group bg-gradient-to-r from-fuchsia-400/10 to-purple-400/10 rounded-lg p-6 border border-fuchsia-400/30 hover:border-fuchsia-400/50 transition-all">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3 group-hover:text-fuchsia-200">Automation Hub</h3>
                    <p className="text-white/80 mb-4">
                      Learn more about our automation systems and how they work together.
                    </p>
                    <div className="text-fuchsia-400 group-hover:text-fuchsia-300">Explore Automation →</div>
                  </Link>
                </div>
              </section>

              <footer className="border-t border-white/20 pt-8 text-center">
                <p className="text-white/60">
                  All reports are generated autonomously by our intelligent systems.
                  <br />
                  Last updated: {new Date().toLocaleString()}
                </p>
              </footer>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}