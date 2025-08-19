import React from 'react';
import Head from 'next/head';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group - Autonomous Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of autonomous technology services, from AI automation to intelligent system development." />
        <meta property="og:title" content="Services | Zion Tech Group - Autonomous Technology Solutions" />
        <meta property="og:description" content="Explore Zion Tech Group's comprehensive range of autonomous technology services, from AI automation to intelligent system development." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive autonomous technology solutions designed for the future.
            </p>
          </section>

          <section className="mx-auto max-w-7xl space-y-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Autonomous AI Systems</h3>
                <p className="text-white/70 leading-relaxed">
                  Self-learning artificial intelligence systems that continuously 
                  improve and adapt to new challenges and requirements.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  <li>• Machine Learning Models</li>
                  <li>• Neural Network Optimization</li>
                  <li>• Predictive Analytics</li>
                  <li>• Natural Language Processing</li>
                </ul>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Automation Solutions</h3>
                <p className="text-white/70 leading-relaxed">
                  End-to-end automation frameworks that streamline operations 
                  and eliminate manual processes across your organization.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  <li>• Workflow Automation</li>
                  <li>• Process Optimization</li>
                  <li>• Robotic Process Automation</li>
                  <li>• Smart Scheduling Systems</li>
                </ul>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Cybersecurity & Compliance</h3>
                <p className="text-white/70 leading-relaxed">
                  Advanced security systems with autonomous threat detection 
                  and compliance monitoring for regulatory requirements.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  <li>• Threat Intelligence</li>
                  <li>• Automated Security Response</li>
                  <li>• Compliance Monitoring</li>
                  <li>• Vulnerability Assessment</li>
                </ul>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Cloud Infrastructure</h3>
                <p className="text-white/70 leading-relaxed">
                  Scalable cloud solutions with autonomous management and 
                  optimization for maximum performance and cost efficiency.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  <li>• Auto-scaling Systems</li>
                  <li>• Performance Optimization</li>
                  <li>• Cost Management</li>
                  <li>• Disaster Recovery</li>
                </ul>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Data Analytics</h3>
                <p className="text-white/70 leading-relaxed">
                  Intelligent data processing and analysis systems that 
                  provide actionable insights and predictive capabilities.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  <li>• Real-time Analytics</li>
                  <li>• Predictive Modeling</li>
                  <li>• Data Visualization</li>
                  <li>• Business Intelligence</li>
                </ul>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Innovation Consulting</h3>
                <p className="text-white/70 leading-relaxed">
                  Strategic guidance for implementing autonomous technologies 
                  and transforming your business operations for the future.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  <li>• Technology Strategy</li>
                  <li>• Digital Transformation</li>
                  <li>• Innovation Roadmaps</li>
                  <li>• Change Management</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Ready to Get Started?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our autonomous technology solutions can transform 
                your business and drive innovation across your organization.
              </p>
              <button className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 transform hover:scale-105">
                Contact Our Team
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}