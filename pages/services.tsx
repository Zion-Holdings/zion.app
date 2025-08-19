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
            
            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive autonomous technology solutions designed to transform your business and drive innovation
              </p>
            </section>

            <section className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
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
                    <li>• AI-Powered Automation</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Autonomous Systems</h3>
                  <p className="text-white/70 mb-6">
                    End-to-end autonomous solutions that operate independently, continuously improving and adapting.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Process Automation</li>
                    <li>• Intelligent Workflows</li>
                    <li>• Self-Healing Systems</li>
                    <li>• Adaptive Learning</li>
                    <li>• Autonomous Orchestration</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
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
                    <li>• Multi-cloud Management</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
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
                    <li>• GitOps Implementation</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
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
                    <li>• AI-Powered Insights</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Technology Consulting</h3>
                  <p className="text-white/70 mb-6">
                    Strategic technology consulting to help you navigate digital transformation and innovation challenges.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Digital Strategy</li>
                    <li>• Technology Roadmap</li>
                    <li>• Innovation Workshops</li>
                    <li>• Performance Audits</li>
                    <li>• Transformation Planning</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Why Choose Our Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">AI-Powered Excellence</h3>
                    <p className="text-white/70">
                      Our services leverage cutting-edge AI technology to deliver superior results, faster implementation, and continuous improvement.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">Proven Track Record</h3>
                    <p className="text-white/70">
                      With over 227 active automation workflows and 2,960+ generated content pages, we've demonstrated our ability to deliver results at scale.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-green-400">Continuous Innovation</h3>
                    <p className="text-white/70">
                      Our autonomous systems continuously evolve and improve, ensuring your solutions stay ahead of the curve.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-purple-400">Global Expertise</h3>
                    <p className="text-white/70">
                      We bring together expertise from across the technology spectrum to deliver comprehensive solutions that address your unique challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-8 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">Ready to Transform Your Business?</h2>
                <p className="text-lg text-white/80 text-center mb-8 max-w-3xl mx-auto">
                  Let's discuss how our autonomous technology solutions can revolutionize your operations and drive unprecedented growth.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-lg transition-colors">
                    Get Started Today
                  </Link>
                  <Link href="/about" className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-colors">
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