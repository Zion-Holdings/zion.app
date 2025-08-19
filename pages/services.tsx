import React from 'react';
import Head from 'next/head';

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
<<<<<<< HEAD
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
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Automation Systems</h3>
                <p className="text-white/70 mb-6">
                  End-to-end automation solutions that streamline operations and improve efficiency across your organization.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• Robotic Process Automation</li>
                  <li>• Smart Workflows</li>
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
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Proven Results</h3>
                  <p className="text-white/70">
                    With 227 active automations and 2,960+ pages generated, we have a track record of delivering measurable business value.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Service Delivery Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">1</div>
                  <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                  <p className="text-sm text-white/70">Understanding your needs and objectives</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fuchsia-400 mb-2">2</div>
                  <h3 className="text-lg font-semibold mb-2">Planning</h3>
                  <p className="text-sm text-white/70">Creating detailed roadmap and strategy</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">3</div>
                  <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                  <p className="text-sm text-white/70">Building and deploying solutions</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                  <h3 className="text-lg font-semibold mb-2">Optimization</h3>
                  <p className="text-sm text-white/70">Continuous improvement and support</p>
                </div>
              </div>
            </div>
          </section>
=======
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive autonomous technology solutions designed to revolutionize your digital infrastructure
              </p>
            </header>

            {/* Core Services */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Core Services</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-300">Autonomous System Development</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Build intelligent, self-managing systems that operate independently and continuously improve performance. Our autonomous agents handle complex tasks without human intervention.
                  </p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Self-healing infrastructure</li>
                    <li>• Predictive maintenance systems</li>
                    <li>• Automated optimization workflows</li>
                    <li>• Intelligent resource management</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">AI-Powered Content Generation</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Leverage advanced AI systems to create, optimize, and manage content at scale. Our intelligent content engines generate high-quality, SEO-optimized material automatically.
                  </p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Automated content creation</li>
                    <li>• SEO optimization engines</li>
                    <li>• Multi-language support</li>
                    <li>• Content quality assurance</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-300">Infrastructure Optimization</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Transform your existing infrastructure with intelligent automation and optimization systems. Achieve unprecedented performance and reliability through autonomous management.
                  </p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Performance monitoring</li>
                    <li>• Automated scaling</li>
                    <li>• Load balancing optimization</li>
                    <li>• Resource utilization management</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-300">Security & Compliance</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Comprehensive security solutions with autonomous threat detection and response. Our systems continuously monitor and protect your infrastructure from emerging threats.
                  </p>
                  <ul className="text-white/70 space-y-2">
                    <li>• Automated threat detection</li>
                    <li>• Vulnerability scanning</li>
                    <li>• Compliance monitoring</li>
                    <li>• Incident response automation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Specialized Solutions */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Specialized Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/30">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">GitHub Actions Automation</h3>
                  <p className="text-white/80 mb-4">
                    Comprehensive CI/CD automation with intelligent workflow management and autonomous optimization.
                  </p>
                  <div className="text-sm text-cyan-300/80">
                    • 227+ Active Workflows<br/>
                    • Automated Testing<br/>
                    • Intelligent Deployment<br/>
                    • Performance Monitoring
                  </div>
                </div>

                <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-6 border border-fuchsia-400/30">
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Content Management Systems</h3>
                  <p className="text-white/80 mb-4">
                    AI-powered content generation and management with automated optimization and quality control.
                  </p>
                  <div className="text-sm text-fuchsia-300/80">
                    • 2,960+ Generated Pages<br/>
                    • SEO Optimization<br/>
                    • Multi-format Support<br/>
                    • Quality Assurance
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30">
                  <h3 className="text-xl font-semibold mb-4 text-green-300">Performance Optimization</h3>
                  <p className="text-white/80 mb-4">
                    Continuous performance monitoring and optimization with predictive analytics and automated improvements.
                  </p>
                  <div className="text-sm text-green-300/80">
                    • Real-time Monitoring<br/>
                    • Predictive Analytics<br/>
                    • Automated Optimization<br/>
                    • Performance Reporting
                  </div>
                </div>
              </div>
            </section>

            {/* Service Process */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Our Service Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-300">Discovery</h3>
                  <p className="text-white/80 text-sm">
                    We analyze your current infrastructure and identify optimization opportunities.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-fuchsia-300">Design</h3>
                  <p className="text-white/80 text-sm">
                    Custom autonomous solutions designed specifically for your needs and goals.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-green-300">Implementation</h3>
                  <p className="text-white/80 text-sm">
                    Seamless deployment with minimal disruption to your existing operations.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-300">Optimization</h3>
                  <p className="text-white/80 text-sm">
                    Continuous monitoring and autonomous optimization for ongoing improvement.
                  </p>
                </div>
              </div>
            </section>

            {/* Technology Stack */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Technology Stack</h2>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">Next.js</span>
                    </div>
                    <p className="text-white/80 text-sm">React Framework</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">GitHub</span>
                    </div>
                    <p className="text-white/80 text-sm">Actions & CI/CD</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">AI/ML</span>
                    </div>
                    <p className="text-white/80 text-sm">Machine Learning</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">Cloud</span>
                    </div>
                    <p className="text-white/80 text-sm">Native Architecture</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-6 text-white/90">Ready to Transform Your Infrastructure?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our autonomous technology solutions can revolutionize your digital operations and drive unprecedented efficiency.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/about" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                    Learn More About Us
                  </a>
                  <button className="border border-white/30 hover:border-cyan-400/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </section>

            {/* Additional Services */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Specialized Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Content Automation</h3>
                  <p className="text-white/70 mb-6">
                    AI-powered content generation systems that create high-quality, engaging content automatically.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Blog Post Generation</li>
                    <li>• Social Media Content</li>
                    <li>• Marketing Copy</li>
                    <li>• Technical Documentation</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-orange-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-400">Security Automation</h3>
                  <p className="text-white/70 mb-6">
                    Intelligent security systems that automatically detect and respond to threats in real-time.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Threat Detection</li>
                    <li>• Automated Response</li>
                    <li>• Compliance Monitoring</li>
                    <li>• Security Auditing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Success Metrics */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Success Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Uptime</h3>
                  <p className="text-white/80 text-sm">
                    Guaranteed system availability with autonomous monitoring and recovery.
                  </p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">10x</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Efficiency Gain</h3>
                  <p className="text-white/80 text-sm">
                    Average improvement in operational efficiency for our clients.
                  </p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Autonomous Operation</h3>
                  <p className="text-white/80 text-sm">
                    Continuous operation without human intervention required.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}