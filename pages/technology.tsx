import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TechnologyPage() {
  return (
    <>
      <Head>
        <title>Technology Stack | Zion Tech Group - Autonomous Innovation Hub</title>
        <meta name="description" content="Explore Zion Tech Group's cutting-edge technology stack, including AI/ML, automation systems, cloud infrastructure, and development tools." />
        <meta property="og:title" content="Technology Stack | Zion Tech Group" />
        <meta property="og:description" content="Explore our cutting-edge technology stack and innovation capabilities." />
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
                Our Technology Stack
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Cutting-edge technologies powering autonomous innovation and intelligent automation
              </p>
            </header>

            {/* Core Technologies */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Core Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">AI</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400 text-center">Artificial Intelligence</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Machine Learning Models</li>
                    <li>• Natural Language Processing</li>
                    <li>• Computer Vision Systems</li>
                    <li>• Predictive Analytics</li>
                    <li>• Autonomous Decision Making</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">ML</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400 text-center">Machine Learning</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Deep Learning Networks</li>
                    <li>• Reinforcement Learning</li>
                    <li>• Neural Architecture Search</li>
                    <li>• Automated Model Training</li>
                    <li>• Continuous Learning Systems</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">☁️</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-400 text-center">Cloud Infrastructure</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Multi-Cloud Architecture</li>
                    <li>• Auto-scaling Systems</li>
                    <li>• Load Balancing</li>
                    <li>• Disaster Recovery</li>
                    <li>• Edge Computing</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">🔧</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400 text-center">DevOps & CI/CD</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• GitHub Actions</li>
                    <li>• Automated Testing</li>
                    <li>• Infrastructure as Code</li>
                    <li>• Monitoring & Alerting</li>
                    <li>• Blue-Green Deployments</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-400 text-center">Data & Analytics</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Big Data Processing</li>
                    <li>• Real-time Analytics</li>
                    <li>• Data Visualization</li>
                    <li>• Business Intelligence</li>
                    <li>• Predictive Modeling</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">🔒</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400 text-center">Security & Compliance</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Zero-Trust Architecture</li>
                    <li>• End-to-End Encryption</li>
                    <li>• Automated Security Scanning</li>
                    <li>• Compliance Monitoring</li>
                    <li>• Threat Intelligence</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Development Stack */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Development Stack</h2>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-sm">Next.js</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-300">Frontend Framework</h3>
                    <p className="text-white/70 text-sm">React-based framework with SSR and static generation</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-sm">Node.js</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-green-300">Runtime Environment</h3>
                    <p className="text-white/70 text-sm">JavaScript runtime for server-side development</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-sm">TypeScript</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-purple-300">Programming Language</h3>
                    <p className="text-white/70 text-sm">Typed JavaScript for robust development</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-sm">Tailwind</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-cyan-300">CSS Framework</h3>
                    <p className="text-white/70 text-sm">Utility-first CSS framework for rapid UI development</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Automation Infrastructure */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Automation Infrastructure</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-300">GitHub Actions Ecosystem</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-white/80">227+ Active Workflows</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-white/80">Automated Testing & Deployment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-white/80">Intelligent Error Handling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-white/80">Performance Monitoring</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-8 border border-fuchsia-400/30">
                  <h3 className="text-2xl font-bold mb-6 text-fuchsia-300">PM2 Process Management</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-white/80">Cluster Mode Operations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-white/80">Auto-Restart on Failure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-white/80">Load Balancing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-white/80">Performance Monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Innovation Metrics */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Innovation Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-400/30">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                  <div className="text-white/80">Active Automations</div>
                  <div className="text-sm text-cyan-300/80 mt-2">GitHub Actions Workflows</div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-2xl p-8 border border-fuchsia-400/30">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                  <div className="text-white/80">Content Pages</div>
                  <div className="text-sm text-fuchsia-300/80 mt-2">AI-Generated Content</div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-400/30">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.99%</div>
                  <div className="text-white/80">System Uptime</div>
                  <div className="text-sm text-green-300/80 mt-2">Redundancy Ensured</div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-8 border border-blue-400/30">
                  <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-white/80">Operation</div>
                  <div className="text-sm text-blue-300/80 mt-2">Autonomous Monitoring</div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-6 text-white/90">Ready to Explore Our Technology?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Discover how our cutting-edge technology stack can transform your business and drive innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/services" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                    Explore Services
                  </Link>
                  <Link href="/contact" className="border border-white/30 hover:border-cyan-400/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                    Get in Touch
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