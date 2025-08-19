import React from 'react';
import Head from 'next/head';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Autonomous Automation Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's cutting-edge autonomous automation solutions that revolutionize business operations and drive innovation." />
        <meta property="og:title" content="Autonomous Automation Solutions | Zion Tech Group" />
        <meta property="og:description" content="Discover Zion Tech Group's cutting-edge autonomous automation solutions that revolutionize business operations and drive innovation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="max-w-6xl mx-auto">
            <div className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </div>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Autonomous Automation Solutions
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Transform your business with intelligent, self-managing systems that work 24/7 to optimize operations, 
                reduce costs, and drive innovation.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-6 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">AI-Powered Automation</h3>
                <p className="text-white/80 mb-4">
                  Intelligent systems that learn from data patterns and automatically optimize processes for maximum efficiency.
                </p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Machine learning optimization</li>
                  <li>• Predictive analytics</li>
                  <li>• Adaptive workflows</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Process Optimization</h3>
                <p className="text-white/80 mb-4">
                  Streamline operations with autonomous systems that identify bottlenecks and implement improvements in real-time.
                </p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Real-time monitoring</li>
                  <li>• Automated optimization</li>
                  <li>• Performance analytics</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-2xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-300">Self-Healing Systems</h3>
                <p className="text-white/80 mb-4">
                  Autonomous systems that detect issues before they impact operations and automatically resolve them.
                </p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Proactive monitoring</li>
                  <li>• Automatic recovery</li>
                  <li>• Health diagnostics</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-6 rounded-2xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-orange-300">Security Automation</h3>
                <p className="text-white/80 mb-4">
                  Advanced threat detection and response systems that protect your infrastructure around the clock.
                </p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Threat intelligence</li>
                  <li>• Automated response</li>
                  <li>• Compliance monitoring</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 p-6 rounded-2xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-pink-300">Data Analytics</h3>
                <p className="text-white/80 mb-4">
                  Autonomous data processing and insights generation that transforms raw information into actionable intelligence.
                </p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Real-time processing</li>
                  <li>• Predictive insights</li>
                  <li>• Automated reporting</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 p-6 rounded-2xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">Team Collaboration</h3>
                <p className="text-white/80 mb-4">
                  Intelligent systems that enhance team productivity through automated coordination and communication.
                </p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Workflow automation</li>
                  <li>• Smart scheduling</li>
                  <li>• Resource optimization</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Why Choose Autonomous Automation?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Operational Excellence</h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>24/7 continuous operation without human intervention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Real-time optimization and performance tuning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Predictive maintenance and issue prevention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Scalable solutions that grow with your business</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Cost Benefits</h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Reduce operational costs by up to 60%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Eliminate manual errors and rework</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Optimize resource allocation automatically</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Faster time-to-market for new initiatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Ready to Automate Your Future?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of organizations already transforming their operations with our autonomous automation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </a>
                <a href="/about" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Learn More
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}