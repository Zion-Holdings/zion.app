import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories & Results</title>
        <meta name="description" content="Explore real-world success stories of AI and automation implementations that delivered measurable results for our clients." />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories of AI and automation implementations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-world success stories showcasing the transformative power of AI and automation
            </p>
          </section>

          <section className="mx-auto max-w-7xl">
            {/* Featured Case Study */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-sm text-cyan-400 mb-3">Featured Success Story</div>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Financial Services Automation
                  </h2>
                  <p className="text-white/80 mb-6">
                    A major financial institution achieved 85% reduction in manual processing time and 99.9% accuracy through our AI-powered document processing system.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">85%</div>
                      <div className="text-sm text-white/70">Time Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-fuchsia-400">99.9%</div>
                      <div className="text-sm text-white/70">Accuracy</div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Read Full Case Study
                  </button>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">🏦</div>
                  <div className="text-2xl font-bold text-cyan-400">Financial Services</div>
                  <div className="text-white/70">Document Processing AI</div>
                </div>
              </div>
            </div>

            {/* Case Study Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
                <p className="text-white/70 text-sm">AI-powered diagnostics and patient care</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
                <p className="text-white/70 text-sm">Smart factories and predictive maintenance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
                <p className="text-white/70 text-sm">Personalization and inventory optimization</p>
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">🏥</div>
                  <h3 className="text-lg font-semibold mb-2">Healthcare AI Diagnostics</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Implemented AI-powered diagnostic tools that improved detection accuracy by 40% and reduced diagnosis time by 60%.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400">40%</div>
                      <div className="text-xs text-white/70">Accuracy Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-fuchsia-400">60%</div>
                      <div className="text-xs text-white/70">Time Reduction</div>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
                    View Details
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">🏭</div>
                  <h3 className="text-lg font-semibold mb-2">Smart Manufacturing</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Automated production lines with predictive maintenance, reducing downtime by 75% and increasing efficiency by 45%.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">75%</div>
                      <div className="text-xs text-white/70">Downtime Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">45%</div>
                      <div className="text-xs text-white/70">Efficiency Increase</div>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
                    View Details
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">🛒</div>
                  <h3 className="text-lg font-semibold mb-2">E-commerce Optimization</h3>
                  <p className="text-white/70 text-sm mb-4">
                    AI-powered recommendation engine increased conversion rates by 35% and average order value by 28%.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">35%</div>
                      <div className="text-xs text-white/70">Conversion Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-400">28%</div>
                      <div className="text-xs text-white/70">Order Value Increase</div>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
                    View Details
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-lg font-semibold mb-2">Data Analytics Platform</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Built real-time analytics dashboard that provided insights leading to 25% cost savings and improved decision-making.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400">25%</div>
                      <div className="text-xs text-white/70">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-fuchsia-400">Real-time</div>
                      <div className="text-xs text-white/70">Insights</div>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Client Testimonials */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Client Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">⭐</div>
                    <div>
                      <div className="font-semibold text-white">Sarah Johnson</div>
                      <div className="text-sm text-white/70">CTO, TechCorp</div>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    &ldquo;Zion Tech Group&apos;s AI automation transformed our operations. We&apos;ve seen incredible efficiency gains and our team can now focus on strategic initiatives.&rdquo;
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">⭐</div>
                    <div>
                      <div className="font-semibold text-white">Michael Chen</div>
                      <div className="text-sm text-white/70">CEO, InnovateLab</div>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    &ldquo;The autonomous systems they built for us are game-changing. Our productivity has increased dramatically while reducing operational costs.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
              <p className="text-white/80 mb-6">
                Let&apos;s discuss how AI and automation can drive results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                  Get Started
                </a>
                <a href="/services" className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200">
                  View Services
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}