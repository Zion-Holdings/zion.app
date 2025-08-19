import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore real-world success stories and case studies of AI and automation implementations by Zion Tech Group." />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="AI and automation success stories from Zion Tech Group." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-world examples of how our AI and automation solutions have transformed businesses and delivered measurable results
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                About Us
              </a>
              <a href="/services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Our Services
              </a>
              <a href="/blog" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Blog
              </a>
              <a href="/team" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Our Team
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            {/* Featured Case Study */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-sm text-cyan-400 mb-4">Featured Case Study</div>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Autonomous E-commerce Platform
                  </h2>
                  <p className="text-white/80 mb-6">
                    How we helped a major retailer build a self-optimizing e-commerce platform that increased conversion rates by 40% and reduced operational costs by 60%.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">AI Optimization</span>
                    <span className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-400 rounded-full text-sm">Automation</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">E-commerce</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">40%</div>
                      <div className="text-sm text-white/70">Conversion Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-fuchsia-400">60%</div>
                      <div className="text-sm text-white/70">Cost Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">24/7</div>
                      <div className="text-sm text-white/70">Autonomous Operation</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">🛒</div>
                  <div className="text-cyan-400 font-semibold">Full Case Study</div>
                  <div className="text-white/70 text-sm mt-2">Coming Soon</div>
                </div>
              </div>
            </div>

            {/* Case Study Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Manufacturing</h3>
                <p className="text-white/70 mb-4">
                  Smart factory automation and predictive maintenance solutions.
                </p>
                <div className="text-sm text-cyan-400">3 case studies</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Healthcare</h3>
                <p className="text-white/70 mb-4">
                  AI-powered diagnostics and automated patient care systems.
                </p>
                <div className="text-sm text-fuchsia-400">2 case studies</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold mb-4 text-green-400">Finance</h3>
                <p className="text-white/70 mb-4">
                  Fraud detection and automated trading systems.
                </p>
                <div className="text-sm text-green-400">4 case studies</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Logistics</h3>
                <p className="text-white/70 mb-4">
                  Supply chain optimization and autonomous delivery systems.
                </p>
                <div className="text-sm text-purple-400">2 case studies</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Education</h3>
                <p className="text-white/70 mb-4">
                  Personalized learning platforms and automated assessment systems.
                </p>
                <div className="text-sm text-yellow-400">1 case study</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">Enterprise</h3>
                <p className="text-white/70 mb-4">
                  Large-scale automation and digital transformation projects.
                </p>
                <div className="text-sm text-blue-400">5 case studies</div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Impact Across Industries</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-white/80">Successful Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">$2.5M+</div>
                  <div className="text-white/80">Cost Savings Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
                  <div className="text-white/80">Average Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-white/80">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Case Study List */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-white">All Case Studies</h2>
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-6 last:border-b-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-lg p-3">
                      <div className="text-2xl">🏭</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        Smart Factory Automation for Automotive Manufacturer
                      </h3>
                      <p className="text-white/70 mb-3">
                        Implemented AI-powered quality control and predictive maintenance, reducing defects by 75% and downtime by 60%.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <span>Manufacturing</span>
                        <span>•</span>
                        <span>6 months</span>
                        <span>•</span>
                        <span>Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-6 last:border-b-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg p-3">
                      <div className="text-2xl">🏦</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        AI-Powered Fraud Detection System
                      </h3>
                      <p className="text-white/70 mb-3">
                        Built real-time fraud detection that identified 95% of fraudulent transactions while reducing false positives by 80%.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <span>Finance</span>
                        <span>•</span>
                        <span>4 months</span>
                        <span>•</span>
                        <span>Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-6 last:border-b-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-3">
                      <div className="text-2xl">🚚</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        Autonomous Supply Chain Optimization
                      </h3>
                      <p className="text-white/70 mb-3">
                        Created intelligent routing and inventory management that reduced delivery times by 30% and costs by 25%.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <span>Logistics</span>
                        <span>•</span>
                        <span>8 months</span>
                        <span>•</span>
                        <span>Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-6 last:border-b-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-3">
                      <div className="text-2xl">🎓</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        Personalized Learning Platform
                      </h3>
                      <p className="text-white/70 mb-3">
                        Developed adaptive learning system that improved student engagement by 65% and test scores by 40%.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <span>Education</span>
                        <span>•</span>
                        <span>5 months</span>
                        <span>•</span>
                        <span>Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8 mt-16">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Create Your Success Story?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Let's discuss how our AI and automation solutions can transform your business and deliver measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold py-3 px-8 rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Get Started
                  </a>
                  <a href="/services" className="border border-white/20 text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-200">
                    View Services
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}