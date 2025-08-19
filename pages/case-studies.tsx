import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies & Success Stories | Zion Tech Group</title>
        <meta name="description" content="Discover how Zion Tech Group has transformed businesses through AI automation, autonomous systems, and cutting-edge technology solutions." />
        <meta property="og:title" content="Case Studies & Success Stories | Zion Tech Group" />
        <meta property="og:description" content="Real-world examples of AI automation success stories." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Case Studies & Success Stories
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Real-world examples of how our autonomous technology solutions have transformed businesses and driven innovation
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Featured Success Stories</h2>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-8 rounded-2xl border border-blue-500/20">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">🏭</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-blue-400 mb-3">Manufacturing Automation Revolution</h3>
                      <p className="text-white/80 mb-4">
                        A leading manufacturing company achieved 300% productivity increase through our autonomous 
                        production line optimization system. The AI-powered solution reduced defects by 85% and 
                        cut operational costs by 40%.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-400">300%</div>
                          <div className="text-white/60">Productivity Increase</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">85%</div>
                          <div className="text-white/60">Defect Reduction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">40%</div>
                          <div className="text-white/60">Cost Reduction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border border-green-500/20">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">🏥</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-green-400 mb-3">Healthcare AI Diagnostics</h3>
                      <p className="text-white/80 mb-4">
                        Our autonomous medical imaging analysis system helped a major hospital network achieve 
                        95% diagnostic accuracy, reducing patient wait times by 60% and improving treatment 
                        outcomes significantly.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">95%</div>
                          <div className="text-white/60">Diagnostic Accuracy</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-400">60%</div>
                          <div className="text-white/60">Wait Time Reduction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-400">3x</div>
                          <div className="text-white/60">Faster Processing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-500/20">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">🏦</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-purple-400 mb-3">Financial Services Automation</h3>
                      <p className="text-white/80 mb-4">
                        A global financial institution implemented our autonomous fraud detection system, 
                        resulting in 99.9% fraud detection rate, $50M in prevented losses, and 70% 
                        reduction in manual review processes.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">99.9%</div>
                          <div className="text-white/60">Fraud Detection Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-pink-400">$50M</div>
                          <div className="text-white/60">Losses Prevented</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">70%</div>
                          <div className="text-white/60">Process Reduction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Industry Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">🚗</div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Automotive</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Autonomous vehicle systems, predictive maintenance, and smart manufacturing solutions
                  </p>
                  <div className="text-xs text-cyan-300/90">15+ Projects Completed</div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">🏗️</div>
                  <h3 className="text-xl font-semibold text-fuchsia-400 mb-3">Construction</h3>
                  <p className="text-white/70 text-sm mb-4">
                    AI-powered project management, safety monitoring, and resource optimization
                  </p>
                  <div className="text-xs text-fuchsia-300/90">12+ Projects Completed</div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">🛒</div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Retail</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Inventory management, customer analytics, and personalized shopping experiences
                  </p>
                  <div className="text-xs text-green-300/90">28+ Projects Completed</div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Education</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Adaptive learning platforms, student performance analytics, and administrative automation
                  </p>
                  <div className="text-xs text-blue-300/90">22+ Projects Completed</div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-orange-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-3">Energy</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Smart grid optimization, predictive maintenance, and renewable energy management
                  </p>
                  <div className="text-xs text-orange-300/90">18+ Projects Completed</div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-semibold text-red-400 mb-3">Cybersecurity</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Threat detection, automated response systems, and security analytics
                  </p>
                  <div className="text-xs text-red-300/90">31+ Projects Completed</div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Client Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">JD</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">John Davis</div>
                      <div className="text-white/60 text-sm">CTO, TechCorp Industries</div>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    "Zion Tech Group's autonomous systems have transformed our operations. The AI-powered 
                    automation has increased our efficiency by 300% while reducing costs significantly."
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">SM</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Sarah Martinez</div>
                      <div className="text-white/60 text-sm">VP Operations, HealthTech Solutions</div>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    "The autonomous diagnostic system has revolutionized our patient care. We've seen 
                    dramatic improvements in accuracy and turnaround times."
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Ready to Transform Your Business?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Join the hundreds of companies that have already revolutionized their operations 
                  with our autonomous technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                  >
                    Start Your Project
                  </a>
                  <a 
                    href="/services" 
                    className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}