import React from 'react';
import Head from 'next/head';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Comprehensive technology services including AI automation, infrastructure optimization, and autonomous systems from Zion Tech Group." />
        <meta property="og:title" content="Services | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology services including AI automation, infrastructure optimization, and autonomous systems from Zion Tech Group." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive technology solutions powered by autonomous AI systems and cutting-edge innovation.
              </p>
            </header>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-cyan-300">Core Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">AI Automation</h3>
                  <p className="text-white/80 mb-6">
                    Intelligent automation systems that streamline operations, reduce costs, and enhance productivity across all business processes.
                  </p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Process automation</li>
                    <li>• Intelligent workflows</li>
                    <li>• Predictive analytics</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Infrastructure Optimization</h3>
                  <p className="text-white/80 mb-6">
                    Advanced infrastructure solutions that maximize performance, reliability, and scalability for modern applications.
                  </p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Cloud architecture</li>
                    <li>• Performance tuning</li>
                    <li>• Scalability solutions</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Security Solutions</h3>
                  <p className="text-white/80 mb-6">
                    Comprehensive security frameworks that protect against evolving threats with AI-powered detection and response.
                  </p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Threat detection</li>
                    <li>• Zero trust architecture</li>
                    <li>• Incident response</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Performance Monitoring</h3>
                  <p className="text-white/80 mb-6">
                    24/7 monitoring and analytics that provide real-time insights and proactive optimization recommendations.
                  </p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Real-time monitoring</li>
                    <li>• Predictive analytics</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Mobile Solutions</h3>
                  <p className="text-white/80 mb-6">
                    Cutting-edge mobile applications and responsive web solutions that deliver exceptional user experiences.
                  </p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Native mobile apps</li>
                    <li>• Progressive web apps</li>
                    <li>• Cross-platform solutions</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Innovation Consulting</h3>
                  <p className="text-white/80 mb-6">
                    Strategic guidance and expertise to help organizations embrace emerging technologies and drive digital transformation.
                  </p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Technology strategy</li>
                    <li>• Digital transformation</li>
                    <li>• Innovation workshops</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-cyan-300">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Autonomous Innovation</h3>
                      <p className="text-white/80">Our AI-powered systems continuously innovate and optimize, ensuring you always have access to cutting-edge solutions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">24/7 Operation</h3>
                      <p className="text-white/80">Our autonomous systems operate continuously, providing round-the-clock monitoring, maintenance, and optimization.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Scalable Solutions</h3>
                      <p className="text-white/80">Our infrastructure automatically scales to meet your needs, ensuring optimal performance regardless of demand.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Future-Ready Technology</h3>
                      <p className="text-white/80">We stay ahead of the curve, implementing emerging technologies before they become mainstream.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-8 text-cyan-300">Ready to Get Started?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Let our autonomous systems transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </a>
                <a href="/about" className="border border-white/20 hover:border-cyan-400/50 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-white/10">
                  Learn More
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}