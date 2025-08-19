import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, cloud infrastructure, cybersecurity, and digital transformation." />
        <meta property="og:title" content="Our Services | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology services including AI, cloud infrastructure, cybersecurity, and digital transformation." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business through autonomous innovation and cutting-edge technology.
              </p>
            </header>

            {/* AI & Automation */}
            <section className="mb-16">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-6xl mb-4">🤖</div>
                    <h2 className="text-3xl font-bold mb-4 text-cyan-300">AI & Automation</h2>
                    <p className="text-white/80 mb-6">
                      Transform your business operations with intelligent automation systems that learn, adapt, and optimize continuously.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">✓</span>
                        <span>Machine Learning Model Development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">✓</span>
                        <span>Process Automation & Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">✓</span>
                        <span>Predictive Analytics & Insights</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">✓</span>
                        <span>Natural Language Processing</span>
                      </li>
                    </ul>
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all">
                      Learn More
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-cyan-300">Key Benefits</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="text-green-400 mr-3">🚀</span>
                        <span className="text-sm">50% increase in operational efficiency</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-400 mr-3">💰</span>
                        <span className="text-sm">30% reduction in operational costs</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-400 mr-3">⚡</span>
                        <span className="text-sm">24/7 autonomous operation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cloud Infrastructure */}
            <section className="mb-16">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4 text-blue-300">Infrastructure Features</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="text-blue-400 mr-3">☁️</span>
                          <span className="text-sm">Multi-cloud deployment</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-blue-400 mr-3">🔄</span>
                          <span className="text-sm">Auto-scaling capabilities</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-blue-400 mr-3">🛡️</span>
                          <span className="text-sm">Advanced security protocols</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="text-6xl mb-4">☁️</div>
                    <h2 className="text-3xl font-bold mb-4 text-blue-300">Cloud Infrastructure</h2>
                    <p className="text-white/80 mb-6">
                      Build robust, scalable cloud solutions with advanced redundancy and self-healing capabilities.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3">✓</span>
                        <span>Cloud Architecture Design</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3">✓</span>
                        <span>DevOps & CI/CD Implementation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3">✓</span>
                        <span>Performance Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3">✓</span>
                        <span>Disaster Recovery Planning</span>
                      </li>
                    </ul>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Cybersecurity */}
            <section className="mb-16">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-6xl mb-4">🔒</div>
                    <h2 className="text-3xl font-bold mb-4 text-green-300">Cybersecurity</h2>
                    <p className="text-white/80 mb-6">
                      Protect your digital assets with comprehensive security solutions powered by AI-driven threat detection.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3">✓</span>
                        <span>Threat Detection & Prevention</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3">✓</span>
                        <span>Security Audits & Assessments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3">✓</span>
                        <span>Incident Response Planning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3">✓</span>
                        <span>Compliance Management</span>
                      </li>
                    </ul>
                    <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all">
                      Learn More
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-green-300">Security Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="text-green-400 mr-3">🛡️</span>
                        <span className="text-sm">Real-time threat monitoring</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-400 mr-3">🔍</span>
                        <span className="text-sm">AI-powered analysis</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-400 mr-3">⚡</span>
                        <span className="text-sm">Instant response systems</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Analytics */}
            <section className="mb-16">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4 text-purple-300">Analytics Capabilities</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="text-purple-400 mr-3">📊</span>
                          <span className="text-sm">Real-time dashboards</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-purple-400 mr-3">🔮</span>
                          <span className="text-sm">Predictive modeling</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-purple-400 mr-3">📈</span>
                          <span className="text-sm">Trend analysis</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="text-6xl mb-4">📊</div>
                    <h2 className="text-3xl font-bold mb-4 text-purple-300">Data Analytics</h2>
                    <p className="text-white/80 mb-6">
                      Transform raw data into actionable insights with intelligent analytics and visualization tools.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-3">✓</span>
                        <span>Data Processing & ETL</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-3">✓</span>
                        <span>Business Intelligence</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-3">✓</span>
                        <span>Machine Learning Analytics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-3">✓</span>
                        <span>Custom Dashboard Development</span>
                      </li>
                    </ul>
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Digital Transformation */}
            <section className="mb-16">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-6xl mb-4">🚀</div>
                    <h2 className="text-3xl font-bold mb-4 text-yellow-300">Digital Transformation</h2>
                    <p className="text-white/80 mb-6">
                      Modernize your business operations with comprehensive digital transformation strategies and implementation.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>Digital Strategy Development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>Legacy System Modernization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>Change Management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>Technology Integration</span>
                      </li>
                    </ul>
                    <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all">
                      Learn More
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-yellow-300">Transformation Benefits</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-3">⚡</span>
                        <span className="text-sm">Improved efficiency</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-3">💰</span>
                        <span className="text-sm">Cost reduction</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-3">🎯</span>
                        <span className="text-sm">Better customer experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Research & Development */}
            <section className="mb-16">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4 text-indigo-300">Research Areas</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="text-indigo-400 mr-3">🔬</span>
                          <span className="text-sm">AI & Machine Learning</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-indigo-400 mr-3">⚛️</span>
                          <span className="text-sm">Quantum Computing</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-indigo-400 mr-3">🌱</span>
                          <span className="text-sm">Biotechnology</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="text-6xl mb-4">🔬</div>
                    <h2 className="text-3xl font-bold mb-4 text-indigo-300">Research & Development</h2>
                    <p className="text-white/80 mb-6">
                      Push the boundaries of technology with cutting-edge research in emerging technologies and innovative solutions.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-3">✓</span>
                        <span>Emerging Technology Research</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-3">✓</span>
                        <span>Prototype Development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-3">✓</span>
                        <span>Technology Transfer</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-3">✓</span>
                        <span>Innovation Consulting</span>
                      </li>
                    </ul>
                    <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-4 text-white/90">Ready to Transform Your Business?</h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Let our team of experts and AI agents help you implement cutting-edge technology solutions that drive growth and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all">
                    Get Started
                  </button>
                  <button className="px-8 py-3 border border-cyan-400/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}