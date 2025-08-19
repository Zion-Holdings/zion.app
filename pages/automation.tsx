import React from 'react';
import Head from 'next/head';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation | Zion Tech Group - Autonomous Systems</title>
        <meta name="description" content="Discover Zion Tech Group's cutting-edge autonomous automation systems and AI-powered solutions." />
        <meta property="og:title" content="Automation - Zion Tech Group" />
        <meta property="og:description" content="Cutting-edge autonomous automation systems and AI-powered solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Autonomous Automation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience the future of technology with our self-running, intelligent automation systems
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Home
              </a>
              <a href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                About
              </a>
              <a href="/services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Services
              </a>
              <a href="/blog" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Blog
              </a>
              <a href="/resources" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Resources
              </a>
              <a href="/contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Contact
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">Live Automation Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <div className="text-4xl mb-2">🤖</div>
                  <div className="text-2xl font-bold text-green-400">227</div>
                  <div className="text-sm text-white/70">Active Automations</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="text-2xl font-bold text-blue-400">99.9%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm text-white/70">Operation</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Self-Healing Systems</h2>
                <p className="text-lg text-white/80 mb-4">
                  Our autonomous systems continuously monitor themselves and automatically resolve issues without human intervention.
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Automatic error detection and resolution
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Performance optimization in real-time
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Predictive maintenance scheduling
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Intelligent resource allocation
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">AI-Powered Decision Making</h2>
                <p className="text-lg text-white/80 mb-4">
                  Advanced machine learning algorithms enable our systems to make intelligent decisions and continuously improve.
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Real-time data analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Adaptive learning algorithms
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Predictive analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Continuous optimization
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center text-green-400">Automation Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl mb-3">🔧</div>
                  <h3 className="text-lg font-semibold mb-2">Infrastructure</h3>
                  <p className="text-sm text-white/70">Cloud management, scaling, and optimization</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="text-lg font-semibold mb-2">Monitoring</h3>
                  <p className="text-sm text-white/70">Performance tracking and alerting</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="text-lg font-semibold mb-2">Deployment</h3>
                  <p className="text-sm text-white/70">CI/CD and release management</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-3">🔄</div>
                  <h3 className="text-lg font-semibold mb-2">Synchronization</h3>
                  <p className="text-sm text-white/70">Multi-environment coordination</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Ready to Experience Autonomous Technology?</h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Let us show you how our autonomous systems can transform your business operations and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Get Started
                </a>
                <a href="/services" className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all">
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