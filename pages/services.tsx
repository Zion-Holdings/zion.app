import React from 'react';
import Head from 'next/head';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of autonomous technology services, from AI automation to cloud infrastructure solutions." />
        <meta property="og:title" content="Services | Zion Tech Group" />
        <meta property="og:description" content="Explore Zion Tech Group's comprehensive range of autonomous technology services, from AI automation to cloud infrastructure solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Comprehensive autonomous technology solutions designed to transform your business operations
              </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-300">AI Automation</h3>
                <p className="text-white/70 mb-4">
                  Intelligent automation systems that learn, adapt, and optimize your business processes without human intervention.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Process automation</li>
                  <li>• Decision making systems</li>
                  <li>• Predictive analytics</li>
                  <li>• Self-optimizing workflows</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-fuchsia-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-fuchsia-300">Cloud Infrastructure</h3>
                <p className="text-white/70 mb-4">
                  Scalable, resilient cloud solutions built with autonomous monitoring and self-healing capabilities.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Auto-scaling systems</li>
                  <li>• Load balancing</li>
                  <li>• Disaster recovery</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-300">Data Analytics</h3>
                <p className="text-white/70 mb-4">
                  Advanced analytics platforms that automatically discover insights and generate actionable intelligence.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Real-time processing</li>
                  <li>• Pattern recognition</li>
                  <li>• Automated reporting</li>
                  <li>• Business intelligence</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-300">Cybersecurity</h3>
                <p className="text-white/70 mb-4">
                  Autonomous security systems that continuously monitor, detect, and respond to threats in real-time.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Threat detection</li>
                  <li>• Automated response</li>
                  <li>• Vulnerability scanning</li>
                  <li>• Compliance monitoring</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-300">Performance Optimization</h3>
                <p className="text-white/70 mb-4">
                  Self-optimizing systems that continuously improve performance and user experience.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Load testing</li>
                  <li>• Performance monitoring</li>
                  <li>• Auto-scaling</li>
                  <li>• Resource optimization</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-orange-300">Custom Solutions</h3>
                <p className="text-white/70 mb-4">
                  Tailored autonomous systems designed specifically for your unique business requirements.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Custom development</li>
                  <li>• Integration services</li>
                  <li>• Training & support</li>
                  <li>• Ongoing optimization</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Why Choose Autonomous Technology?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">24/7 Operation</h3>
                  <p className="text-white/80">
                    Our autonomous systems never sleep, ensuring continuous operation and monitoring around the clock.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">Self-Learning</h3>
                  <p className="text-white/80">
                    Systems that continuously improve and adapt based on real-world usage and performance data.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">Cost Efficiency</h3>
                  <p className="text-white/80">
                    Reduce operational costs through automation while improving accuracy and consistency.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">Scalability</h3>
                  <p className="text-white/80">
                    Systems that automatically scale to meet demand without manual intervention or configuration.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Ready to Get Started?</h2>
              <p className="text-lg text-white/80 mb-8">
                Let's discuss how autonomous technology can transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                >
                  Get a Quote
                </a>
                <a 
                  href="/about" 
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-200"
                >
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