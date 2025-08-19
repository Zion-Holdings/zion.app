import React from 'react';
import Head from 'next/head';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation — Zion Tech Group Autonomous Systems</title>
        <meta name="description" content="Explore Zion Tech Group's autonomous automation systems, self-managing AI agents, and intelligent cloud automation solutions." />
        <meta property="og:title" content="Automation — Zion Tech Group Autonomous Systems" />
        <meta property="og:description" content="Explore Zion Tech Group's autonomous automation systems, self-managing AI agents, and intelligent cloud automation solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Autonomous Automation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience the future of technology with self-managing, self-improving systems 
              that operate autonomously 24/7.
            </p>
          </section>

          {/* Hero Section */}
          <section className="max-w-6xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-white/10 to-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-xl text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">
                The Future is Autonomous
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
                Our autonomous automation systems continuously monitor, optimize, and improve 
                themselves without human intervention. They learn from every interaction, 
                adapt to changing conditions, and evolve to meet your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                >
                  Get Started
                </a>
                <a 
                  href="#capabilities" 
                  className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </section>

          {/* Core Capabilities */}
          <section id="capabilities" className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Core Automation Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Autonomous Innovation</h3>
                <p className="text-white/70">
                  AI agents that continuously generate new ideas, optimize processes, and 
                  discover innovative solutions without human guidance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Self-Healing Systems</h3>
                <p className="text-white/70">
                  Intelligent systems that automatically detect, diagnose, and resolve issues 
                  before they impact performance or user experience.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Performance Optimization</h3>
                <p className="text-white/70">
                  Continuous monitoring and optimization of system performance, resource usage, 
                  and user experience metrics.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Content Generation</h3>
                <p className="text-white/70">
                  AI-powered content creation that automatically generates, optimizes, and 
                  distributes engaging content across multiple platforms.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Security & Compliance</h3>
                <p className="text-white/70">
                  Automated security monitoring, threat detection, and compliance management 
                  that adapts to evolving security landscapes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Quality Assurance</h3>
                <p className="text-white/70">
                  Continuous testing, validation, and quality monitoring that ensures 
                  systems meet the highest standards of reliability and performance.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              How Autonomous Automation Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Monitor</h3>
                <p className="text-white/70">
                  Continuous monitoring of systems, performance, and user behavior
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2 text-fuchsia-400">Analyze</h3>
                <p className="text-white/70">
                  AI-powered analysis of data to identify patterns and opportunities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Optimize</h3>
                <p className="text-white/70">
                  Automatic implementation of improvements and optimizations
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2 text-fuchsia-400">Learn</h3>
                <p className="text-white/70">
                  Continuous learning and adaptation for future improvements
                </p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Benefits of Autonomous Automation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">24/7 Operation</h3>
                <p className="text-white/70 mb-4">
                  Your systems never sleep. Autonomous automation works around the clock, 
                  continuously monitoring and optimizing without breaks or human limitations.
                </p>
                <ul className="space-y-2 text-white/60">
                  <li>• Continuous monitoring and optimization</li>
                  <li>• No downtime for maintenance</li>
                  <li>• Instant response to issues</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Cost Efficiency</h3>
                <p className="text-white/70 mb-4">
                  Reduce operational costs through automated processes, optimized resource usage, 
                  and elimination of manual intervention requirements.
                </p>
                <ul className="space-y-2 text-white/60">
                  <li>• Reduced manual labor costs</li>
                  <li>• Optimized resource allocation</li>
                  <li>• Prevented costly downtime</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Scalability</h3>
                <p className="text-white/70 mb-4">
                  Systems that automatically scale with your business growth, handling 
                  increased loads and complexity without manual configuration.
                </p>
                <ul className="space-y-2 text-white/60">
                  <li>• Automatic resource scaling</li>
                  <li>• Load balancing optimization</li>
                  <li>• Seamless growth handling</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Innovation Acceleration</h3>
                <p className="text-white/70 mb-4">
                  AI agents continuously discover new opportunities, generate innovative 
                  solutions, and implement improvements faster than human teams.
                </p>
                <ul className="space-y-2 text-white/60">
                  <li>• Continuous innovation</li>
                  <li>• Rapid implementation</li>
                  <li>• Data-driven insights</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">
              Ready to Experience Autonomous Automation?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Transform your technology infrastructure with self-managing, intelligent systems 
              that work tirelessly to optimize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
              >
                Start Your Journey
              </a>
              <a 
                href="/about" 
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                Learn More About Us
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}