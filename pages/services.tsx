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
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
              ← Back to Home
            </Link>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive autonomous technology solutions designed to transform your business and drive innovation
              </p>
            </header>

            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
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

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
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

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
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

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
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

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Data Analytics</h3>
                  <p className="text-white/70 mb-6">
                    Advanced analytics and business intelligence solutions that turn your data into actionable insights.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Data Visualization</li>
                    <li>• Predictive Analytics</li>
                    <li>• Business Intelligence</li>
                    <li>• Real-time Dashboards</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Security & Compliance</h3>
                  <p className="text-white/70 mb-6">
                    Comprehensive security solutions ensuring your systems are protected and compliant with industry standards.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Security Audits</li>
                    <li>• Compliance Management</li>
                    <li>• Threat Detection</li>
                    <li>• Incident Response</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Specialized Solutions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-2xl p-8 border border-cyan-400/30">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-300">Autonomous Content Generation</h3>
                  <p className="text-white/80 mb-6">
                    Our AI-powered systems create intelligent, contextually relevant content across multiple domains, 
                    ensuring your business always has fresh, engaging material that resonates with your audience.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>Blog Posts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>Technical Docs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>Marketing Copy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>Social Media</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-fuchsia-400/10 to-purple-400/10 rounded-2xl p-8 border border-fuchsia-400/30">
                  <h3 className="text-2xl font-bold mb-6 text-fuchsia-300">System Redundancy & Reliability</h3>
                  <p className="text-white/80 mb-6">
                    We implement comprehensive redundancy systems ensuring 99.99% uptime and continuous operation, 
                    giving you peace of mind that your critical systems will always be available.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-fuchsia-400">✓</span>
                      <span>Failover Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-fuchsia-400">✓</span>
                      <span>Load Balancing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-fuchsia-400">✓</span>
                      <span>Backup Solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-fuchsia-400">✓</span>
                      <span>Monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300">Proven Track Record</h3>
                  <p className="text-white/80">
                    With 227+ active automation workflows and 2,960+ generated content pages, we've demonstrated our ability to deliver results at scale.
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-green-300">99.99% Uptime</h3>
                  <p className="text-white/80">
                    Our redundant systems ensure your business operations continue uninterrupted, even during maintenance or unexpected issues.
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">Innovation First</h3>
                  <p className="text-white/80">
                    We stay at the cutting edge of technology, continuously innovating and improving our solutions to meet evolving business needs.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
                  <h3 className="text-lg font-semibold mb-3 text-cyan-300">Discovery</h3>
                  <p className="text-white/80 text-sm">
                    We analyze your current systems and identify opportunities for automation and improvement.
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="w-12 h-12 bg-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
                  <h3 className="text-lg font-semibold mb-3 text-fuchsia-300">Design</h3>
                  <p className="text-white/80 text-sm">
                    We create a comprehensive solution architecture tailored to your specific needs and requirements.
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
                  <h3 className="text-lg font-semibold mb-3 text-green-300">Development</h3>
                  <p className="text-white/80 text-sm">
                    Our team builds and deploys the solution with rigorous testing and quality assurance.
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">4</div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-300">Optimization</h3>
                  <p className="text-white/80 text-sm">
                    We continuously monitor and optimize the system for peak performance and efficiency.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-6 text-white/90">Ready to Get Started?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our autonomous technology solutions can transform your business operations and drive innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                    Get a Quote
                  </Link>
                  <Link href="/about" className="border border-white/30 hover:border-cyan-400/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                    Learn More
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