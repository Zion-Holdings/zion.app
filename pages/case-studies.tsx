import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories & Implementations</title>
        <meta name="description" content="Explore real-world success stories and implementations of Zion Tech Group's autonomous technology solutions across various industries." />
        <meta property="og:title" content="Case Studies | Zion Tech Group" />
        <meta property="og:description" content="Success stories and implementations of our autonomous technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Real-world success stories showcasing how our autonomous technology solutions transform businesses and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Our Services
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Start Your Project
              </a>
            </div>
          </section>

          {/* Featured Case Studies */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Featured Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">AI-Powered Content Generation Platform</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Developed an autonomous content generation system that produces 2,960+ high-quality pages, reducing content creation time by 85% and improving SEO performance by 200%.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-cyan-400 font-semibold">Industry:</span>
                    <p className="text-white/70">Digital Marketing</p>
                  </div>
                  <div>
                    <span className="text-cyan-400 font-semibold">Timeline:</span>
                    <p className="text-white/70">6 months</p>
                  </div>
                  <div>
                    <span className="text-cyan-400 font-semibold">ROI:</span>
                    <p className="text-white/70">300%</p>
                  </div>
                  <div>
                    <span className="text-cyan-400 font-semibold">Uptime:</span>
                    <p className="text-white/70">99.9%</p>
                  </div>
                </div>
                <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn More →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">⚡</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">Autonomous Infrastructure Management</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Implemented a comprehensive automation system managing 227+ active automations, achieving 99.9% uptime and reducing manual intervention by 95%.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-fuchsia-400 font-semibold">Industry:</span>
                    <p className="text-white/70">Technology</p>
                  </div>
                  <div>
                    <span className="text-fuchsia-400 font-semibold">Timeline:</span>
                    <p className="text-white/70">12 months</p>
                  </div>
                  <div>
                    <span className="text-fuchsia-400 font-semibold">ROI:</span>
                    <p className="text-white/70">450%</p>
                  </div>
                  <div>
                    <span className="text-fuchsia-400 font-semibold">Automations:</span>
                    <p className="text-white/70">227+</p>
                  </div>
                </div>
                <a href="/automation" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                  Explore Automation →
                </a>
              </div>
            </div>
          </section>

          {/* Industry Solutions */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Industry Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-4 text-green-400">Healthcare</h3>
                <p className="text-white/70 mb-4">
                  AI-powered diagnostic systems and automated patient monitoring solutions improving accuracy and efficiency.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-green-400">Results:</span> 40% faster diagnosis, 30% cost reduction
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">Manufacturing</h3>
                <p className="text-white/70 mb-4">
                  Smart factory automation with predictive maintenance and quality control systems.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-blue-400">Results:</span> 25% productivity increase, 60% fewer defects
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Financial Services</h3>
                <p className="text-white/70 mb-4">
                  Automated fraud detection and risk assessment systems with real-time monitoring.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-purple-400">Results:</span> 90% fraud detection rate, 50% faster processing
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold mb-4 text-orange-400">Logistics</h3>
                <p className="text-white/70 mb-4">
                  Autonomous supply chain optimization and route planning systems.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-orange-400">Results:</span> 35% cost savings, 45% faster delivery
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-4 text-pink-400">Education</h3>
                <p className="text-white/70 mb-4">
                  Personalized learning platforms and automated assessment systems.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-pink-400">Results:</span> 50% improvement in engagement, 40% better outcomes
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Real Estate</h3>
                <p className="text-white/70 mb-4">
                  Smart building management and automated property valuation systems.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-cyan-400">Results:</span> 30% energy savings, 25% faster transactions
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Technology Stack</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">Frontend</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Progressive Web Apps</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-8 border border-fuchsia-400/30">
                <h3 className="text-xl font-bold mb-4 text-fuchsia-300">Backend</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Node.js & Express</li>
                  <li>• Python & FastAPI</li>
                  <li>• GraphQL APIs</li>
                  <li>• Microservices</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-8 border border-green-400/30">
                <h3 className="text-xl font-bold mb-4 text-green-300">AI & ML</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• TensorFlow & PyTorch</li>
                  <li>• OpenAI GPT Models</li>
                  <li>• Computer Vision</li>
                  <li>• NLP Processing</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-2xl p-8 border border-orange-400/30">
                <h3 className="text-xl font-bold mb-4 text-orange-300">Infrastructure</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• AWS & Azure</li>
                  <li>• Docker & Kubernetes</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• Monitoring & Logging</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Success Metrics */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Success Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">99.9%</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-cyan-300">Uptime</h3>
                <p className="text-white/70">System reliability across all deployments</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">227+</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-fuchsia-300">Active Automations</h3>
                <p className="text-white/70">Running autonomous systems</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">2,960+</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-300">Generated Pages</h3>
                <p className="text-white/70">AI-created content</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">95%</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-300">Client Satisfaction</h3>
                <p className="text-white/70">Exceeded expectations</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
              <h2 className="text-3xl font-bold mb-6 text-white/90">Ready to Create Your Success Story?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join the growing list of companies that have transformed their operations with our autonomous technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                  Start Your Project
                </a>
                <a href="/services" className="border border-white/30 hover:border-cyan-400/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                  Explore Services
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}