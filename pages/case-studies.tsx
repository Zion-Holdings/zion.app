import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore real-world success stories and case studies from Zion Tech Group's autonomous AI and automation projects." />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories from our autonomous AI projects." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </a>
          </nav>
          
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-world success stories demonstrating the transformative power of autonomous AI and automation
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <div className="text-4xl mb-4">🏥</div>
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Healthcare Automation Platform</h2>
                <p className="text-white/70 mb-6">
                  Developed an autonomous system for a major healthcare provider that manages patient scheduling, 
                  resource allocation, and predictive analytics for patient outcomes.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-white/60">Client:</span>
                    <span className="text-white/80">Regional Healthcare Network</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Timeline:</span>
                    <span className="text-white/80">6 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Team Size:</span>
                    <span className="text-white/80">8 AI specialists</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-4 rounded-xl border border-green-500/30">
                  <h3 className="text-green-400 font-semibold mb-2">Results</h3>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• 40% reduction in patient wait times</li>
                    <li>• 25% improvement in resource utilization</li>
                    <li>• 99.7% system uptime</li>
                    <li>• $2.3M annual cost savings</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <div className="text-4xl mb-4">🏭</div>
                <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Manufacturing Intelligence System</h2>
                <p className="text-white/70 mb-6">
                  Implemented an AI-powered manufacturing system that autonomously monitors production quality, 
                  predicts maintenance needs, and optimizes workflow efficiency.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-white/60">Client:</span>
                    <span className="text-white/80">Global Manufacturing Corp</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Timeline:</span>
                    <span className="text-white/80">8 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Team Size:</span>
                    <span className="text-white/80">12 engineers</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-4 rounded-xl border border-blue-500/30">
                  <h3 className="text-blue-400 font-semibold mb-2">Results</h3>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• 35% increase in production efficiency</li>
                    <li>• 60% reduction in unplanned downtime</li>
                    <li>• 28% improvement in product quality</li>
                    <li>• $4.1M annual ROI</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <div className="text-4xl mb-4">💳</div>
                <h2 className="text-2xl font-bold mb-4 text-green-400">Financial Fraud Detection</h2>
                <p className="text-white/70 mb-6">
                  Built an autonomous fraud detection system for a major financial institution that continuously 
                  learns from new threats and adapts its detection algorithms in real-time.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-white/60">Client:</span>
                    <span className="text-white/80">International Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Timeline:</span>
                    <span className="text-white/80">10 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Team Size:</span>
                    <span className="text-white/80">15 specialists</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-4 rounded-xl border border-purple-500/30">
                  <h3 className="text-purple-400 font-semibold mb-2">Results</h3>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• 95% fraud detection accuracy</li>
                    <li>• 80% reduction in false positives</li>
                    <li>• Real-time threat response</li>
                    <li>• $8.7M fraud prevention</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <div className="text-4xl mb-4">🚚</div>
                <h2 className="text-2xl font-bold mb-4 text-orange-400">Logistics Optimization Platform</h2>
                <p className="text-white/70 mb-6">
                  Created an autonomous logistics system that optimizes delivery routes, manages fleet operations, 
                  and predicts supply chain disruptions using AI and machine learning.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-white/60">Client:</span>
                    <span className="text-white/80">E-commerce Giant</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Timeline:</span>
                    <span className="text-white/80">7 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Team Size:</span>
                    <span className="text-white/80">10 developers</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-4 rounded-xl border border-orange-500/30">
                  <h3 className="text-orange-400 font-semibold mb-2">Results</h3>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• 45% reduction in delivery times</li>
                    <li>• 30% decrease in fuel costs</li>
                    <li>• 99.5% on-time delivery rate</li>
                    <li>• $6.2M annual savings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Project Success Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                  <div className="text-sm text-white/70">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">$21.3M</div>
                  <div className="text-sm text-white/70">Total Value Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.8%</div>
                  <div className="text-sm text-white/70">Project Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">45</div>
                  <div className="text-sm text-white/70">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">Discovery & Analysis</h3>
                  <p className="text-white/70">Deep dive into client needs, existing systems, and optimization opportunities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-2">Agile Development</h3>
                  <p className="text-white/70">Iterative development with continuous feedback and rapid prototyping</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Optimization</h3>
                  <p className="text-white/70">Ongoing monitoring and improvement of deployed systems</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Ready to Transform Your Business?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Join the ranks of successful organizations that have transformed their operations with 
                  autonomous AI and automation. Let's discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                  >
                    Start Your Project
                  </a>
                  <a 
                    href="/services" 
                    className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-200"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}