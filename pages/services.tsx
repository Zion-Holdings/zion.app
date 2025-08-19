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
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive autonomous technology solutions designed to transform your business and drive innovation
              </p>
            </header>

            <section className="mb-20">
              <h2 className="text-3xl font-bold text-cyan-300 mb-8 text-center">AI & Automation Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-300">Intelligent Process Automation</h3>
                  <p className="text-white/70 mb-6">
                    Advanced automation systems that learn from your processes and continuously optimize workflows for maximum efficiency.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>Machine Learning Models</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>Natural Language Processing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>Predictive Analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>Adaptive Workflows</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-fuchsia-400/10 to-purple-400/10 rounded-2xl p-8 border border-fuchsia-400/30 hover:border-fuchsia-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">Machine Learning Solutions</h3>
                  <p className="text-white/70 mb-6">
                    Custom ML models and AI systems that adapt to your specific business needs and data patterns.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center gap-2">
                      <span className="text-fuchsia-400">✓</span>
                      <span>Custom Model Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-fuchsia-400">✓</span>
                      <span>Data Pipeline Automation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-fuchsia-400">✓</span>
                      <span>Real-time Learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-fuchsia-400">✓</span>
                      <span>Performance Optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-300">Autonomous Infrastructure</h3>
                  <p className="text-white/70 mb-6">
                    Self-managing infrastructure systems that automatically scale, optimize, and maintain your technology stack.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Auto-scaling Systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Self-healing Networks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Performance Monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Proactive Maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold text-cyan-300 mb-8 text-center">Cybersecurity & Protection</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-red-400/10 to-pink-400/10 rounded-2xl p-8 border border-red-400/30 hover:border-red-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-red-300">Threat Detection & Response</h3>
                  <p className="text-white/70 mb-6">
                    AI-powered security systems that continuously monitor for threats and automatically respond to security incidents.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✓</span>
                      <span>Real-time Monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✓</span>
                      <span>Automated Response</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✓</span>
                      <span>Behavioral Analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✓</span>
                      <span>Incident Management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-300">Data Protection</h3>
                  <p className="text-white/70 mb-6">
                    Comprehensive data security solutions including encryption, access control, and compliance management.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span>
                      <span>End-to-end Encryption</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span>
                      <span>Access Control Systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span>
                      <span>Compliance Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span>
                      <span>Data Loss Prevention</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-2xl p-8 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-300">Security Analytics</h3>
                  <p className="text-white/70 mb-6">
                    Advanced analytics and reporting that provide deep insights into your security posture and threat landscape.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span>
                      <span>Security Intelligence</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span>
                      <span>Risk Assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span>
                      <span>Compliance Reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span>
                      <span>Threat Intelligence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold text-cyan-300 mb-8 text-center">Cloud & DevOps Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">Cloud Migration</h3>
                  <p className="text-white/70 mb-6">
                    Seamless migration to cloud platforms with automated optimization and cost management.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">✓</span>
                      <span>Multi-cloud Strategy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">✓</span>
                      <span>Cost Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">✓</span>
                      <span>Performance Tuning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">✓</span>
                      <span>Disaster Recovery</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-2xl p-8 border border-indigo-400/30 hover:border-indigo-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-indigo-300">DevOps Automation</h3>
                  <p className="text-white/70 mb-6">
                    Streamlined development and deployment pipelines with automated testing and continuous integration.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-400">✓</span>
                      <span>CI/CD Pipelines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-400">✓</span>
                      <span>Automated Testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-400">✓</span>
                      <span>Infrastructure as Code</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-400">✓</span>
                      <span>Monitoring & Alerting</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-400/10 to-green-400/10 rounded-2xl p-8 border border-teal-400/30 hover:border-teal-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-green-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-teal-300">Performance Optimization</h3>
                  <p className="text-white/70 mb-6">
                    Continuous performance monitoring and optimization to ensure your systems run at peak efficiency.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Performance Monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Load Balancing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Resource Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Scalability Planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-8 border border-cyan-400/30">
                <h2 className="text-2xl font-bold text-cyan-300 mb-4">Ready to Transform Your Business?</h2>
                <p className="text-white/80 mb-6">
                  Let our autonomous technology solutions drive innovation and efficiency in your organization.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200">
                    Get Started Today
                  </Link>
                  <Link href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-all duration-200">
                    Learn More About Us
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