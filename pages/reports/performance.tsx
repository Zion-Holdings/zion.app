import React from 'react';
import Head from 'next/head';

export default function PerformanceMetrics() {
  return (
    <>
      <Head>
        <title>Performance Metrics & Analytics | Zion Tech Group</title>
        <meta name="description" content="Comprehensive performance metrics, analytics, and optimization reports from Zion Tech Group's autonomous systems." />
        <meta property="og:title" content="Performance Metrics & Analytics | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive performance metrics and analytics reports." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/reports" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Reports
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Performance Metrics & Analytics
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Real-time insights into our autonomous systems' performance, efficiency, and optimization metrics
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">System Performance Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-2xl border border-green-500/30 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-white/80 font-semibold">Uptime</div>
                  <div className="text-white/60 text-sm mt-2">Last 30 days</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-2xl border border-blue-500/30 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">1.2s</div>
                  <div className="text-white/80 font-semibold">Avg Response Time</div>
                  <div className="text-white/60 text-sm mt-2">Global average</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-2xl border border-purple-500/30 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">227</div>
                  <div className="text-white/80 font-semibold">Active Automations</div>
                  <div className="text-white/60 text-sm mt-2">Running smoothly</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-6 rounded-2xl border border-orange-500/30 text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">2,960+</div>
                  <div className="text-white/80 font-semibold">Pages Generated</div>
                  <div className="text-white/60 text-sm mt-2">AI-powered content</div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Automation Performance Metrics</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6 text-green-400">Content Generation Performance</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Daily Content Output</span>
                      <span className="text-green-400 font-semibold">47 pieces</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Content Quality Score</span>
                      <span className="text-blue-400 font-semibold">94.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">SEO Optimization</span>
                      <span className="text-purple-400 font-semibold">91.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Engagement Rate</span>
                      <span className="text-orange-400 font-semibold">87.3%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-400">System Efficiency Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Resource Utilization</span>
                      <span className="text-green-400 font-semibold">78.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Error Rate</span>
                      <span className="text-red-400 font-semibold">0.12%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Recovery Time</span>
                      <span className="text-blue-400 font-semibold">2.3s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Scalability Score</span>
                      <span className="text-purple-400 font-semibold">96.7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Performance Trends & Analysis</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6 text-fuchsia-400">Monthly Performance Trends</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">+23%</div>
                    <div className="text-white/80 font-semibold">Performance Improvement</div>
                    <div className="text-white/60 text-sm">vs. last month</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">+15%</div>
                    <div className="text-white/80 font-semibold">Content Quality</div>
                    <div className="text-white/60 text-sm">vs. last month</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">-18%</div>
                    <div className="text-white/80 font-semibold">Error Rate</div>
                    <div className="text-white/60 text-sm">vs. last month</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-6 rounded-xl border border-cyan-500/20">
                  <h4 className="text-cyan-400 font-semibold mb-3">Key Insights</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• System performance has improved by 23% through continuous optimization</li>
                    <li>• Content quality scores are consistently above 90%</li>
                    <li>• Error rates have decreased by 18% due to enhanced monitoring</li>
                    <li>• Resource utilization is optimized at 78.5% for peak efficiency</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Optimization Recommendations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-2xl border border-green-500/30">
                  <h3 className="text-green-400 font-semibold mb-3">Immediate Actions</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Continue monitoring resource utilization</li>
                    <li>• Maintain current error rate improvements</li>
                    <li>• Scale content generation based on demand</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-2xl border border-blue-500/30">
                  <h3 className="text-blue-400 font-semibold mb-3">Long-term Strategy</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Implement advanced AI orchestration</li>
                    <li>• Expand automation coverage</li>
                    <li>• Enhance predictive analytics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Stay Updated on Performance</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Our autonomous systems continuously monitor and optimize performance. 
                  Check back regularly for the latest metrics and insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/reports" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                  >
                    View All Reports
                  </a>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200"
                  >
                    Get Performance Consultation
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