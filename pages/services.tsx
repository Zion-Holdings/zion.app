import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group - Autonomous Innovation Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive range of autonomous technology services including AI automation, system optimization, and intelligent infrastructure solutions." />
        <meta property="og:title" content="Services | Zion Tech Group - Autonomous Innovation Solutions" />
        <meta property="og:description" content="Discover Zion Tech Group's comprehensive range of autonomous technology services including AI automation, system optimization, and intelligent infrastructure solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive AI and automation solutions designed to transform your business and drive innovation
              </p>
              
              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                  About Us
                </a>
                <a href="/case-studies" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                  Case Studies
                </a>
                <a href="/team" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                  Our Team
                </a>
                <a href="/contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                  Contact Us
                </a>
              </div>
            </section>

            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Development</h3>
                  <p className="text-white/70 mb-6">
                    Custom AI solutions including machine learning models, natural language processing, and computer vision systems.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Machine Learning Models</li>
                    <li>• Natural Language Processing</li>
                    <li>• Computer Vision</li>
                    <li>• Predictive Analytics</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Automation Systems</h3>
                  <p className="text-white/70 mb-6">
                    End-to-end automation solutions that streamline operations and improve efficiency across your organization.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Process Automation</li>
                    <li>• Workflow Optimization</li>
                    <li>• Robotic Process Automation</li>
                    <li>• Smart Workflows</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Cloud Infrastructure</h3>
                  <p className="text-white/70 mb-6">
                    Scalable cloud solutions with automated deployment, monitoring, and optimization for peak performance.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Cloud Migration</li>
                    <li>• Auto-scaling</li>
                    <li>• Performance Optimization</li>
                    <li>• Security Hardening</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">DevOps & CI/CD</h3>
                  <p className="text-white/70 mb-6">
                    Streamlined development and deployment pipelines with automated testing, building, and deployment processes.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• CI/CD Pipeline Setup</li>
                    <li>• Automated Testing</li>
                    <li>• Infrastructure as Code</li>
                    <li>• Monitoring & Alerting</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Security & Compliance</h3>
                  <p className="text-white/70 mb-6">
                    Comprehensive security solutions with automated threat detection, response, and compliance monitoring.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Threat Detection</li>
                    <li>• Automated Response</li>
                    <li>• Compliance Monitoring</li>
                    <li>• Security Auditing</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Data Analytics</h3>
                  <p className="text-white/70 mb-6">
                    Advanced analytics and business intelligence solutions that turn data into actionable insights.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Business Intelligence</li>
                    <li>• Data Visualization</li>
                    <li>• Predictive Analytics</li>
                    <li>• Real-time Dashboards</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Why Choose Our Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">Lightning Fast</h3>
                  <p className="text-white/70">Sub-second response times and 99.9% uptime guarantee</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-fuchsia-300 mb-2">Enterprise Security</h3>
                  <p className="text-white/70">Bank-grade security with SOC 2 Type II compliance</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-300 mb-2">24/7 Support</h3>
                  <p className="text-white/70">Round-the-clock monitoring and support for your systems</p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Discovery</h3>
                  <p className="text-white/70 text-sm">Understanding your needs and objectives</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-300 mb-2">Design</h3>
                  <p className="text-white/70 text-sm">Creating the optimal solution architecture</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-300 mb-2">Development</h3>
                  <p className="text-white/70 text-sm">Building and testing your solution</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Deployment</h3>
                  <p className="text-white/70 text-sm">Launching and monitoring your system</p>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl p-12 border border-cyan-500/30">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our autonomous technology solutions can transform your business
                  and drive innovation across your organization.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/contact" 
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
                  >
                    Get a Free Consultation
                  </a>
                  <a 
                    href="/case-studies" 
                    className="px-8 py-4 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200"
                  >
                    View Case Studies
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