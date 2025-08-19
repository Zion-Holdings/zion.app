import React from 'react';
import Head from 'next/head';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group - Autonomous AI Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive range of autonomous AI services, cloud automation, and intelligent technology solutions." />
        <meta property="og:title" content="Services | Zion Tech Group - Autonomous AI Solutions" />
        <meta property="og:description" content="Discover Zion Tech Group's comprehensive range of autonomous AI services, cloud automation, and intelligent technology solutions." />
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
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive autonomous AI solutions designed to transform your business operations and drive innovation.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">AI Agent Development</h3>
                <p className="text-white/80 mb-6">
                  Custom autonomous AI agents that learn, adapt, and execute complex tasks without human intervention.
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Intelligent automation systems</li>
                  <li>• Machine learning integration</li>
                  <li>• Natural language processing</li>
                  <li>• Predictive analytics</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">Cloud Automation</h3>
                <p className="text-white/80 mb-6">
                  End-to-end cloud infrastructure automation with self-healing capabilities and intelligent scaling.
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Infrastructure as Code</li>
                  <li>• Auto-scaling systems</li>
                  <li>• Performance monitoring</li>
                  <li>• Disaster recovery</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Continuous Deployment</h3>
                <p className="text-white/80 mb-6">
                  Automated CI/CD pipelines with intelligent testing, deployment, and rollback capabilities.
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Automated testing</li>
                  <li>• Zero-downtime deployments</li>
                  <li>• Rollback automation</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold mb-4 text-green-300">Security & Compliance</h3>
                <p className="text-white/80 mb-6">
                  Advanced security monitoring and automated threat response systems with compliance automation.
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Threat detection</li>
                  <li>• Automated response</li>
                  <li>• Compliance monitoring</li>
                  <li>• Security audits</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Data Analytics</h3>
                <p className="text-white/80 mb-6">
                  Intelligent data processing and analytics with automated insights and predictive modeling.
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Real-time analytics</li>
                  <li>• Predictive modeling</li>
                  <li>• Data visualization</li>
                  <li>• Automated reporting</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Innovation Consulting</h3>
                <p className="text-white/80 mb-6">
                  Strategic guidance on implementing autonomous systems and AI-driven transformation.
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Technology strategy</li>
                  <li>• Implementation planning</li>
                  <li>• Change management</li>
                  <li>• ROI optimization</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Ready to Transform Your Business?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let our autonomous AI systems revolutionize your operations. Contact us to discover how we can help you achieve unprecedented efficiency and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300">
                  Get Started
                </a>
                <a href="/about" className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
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