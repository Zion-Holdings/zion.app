import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of autonomous technology services including AI, cloud infrastructure, cybersecurity, and more." />
        <meta property="og:title" content="Our Services | Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Explore Zion Tech Group's comprehensive range of autonomous technology services including AI, cloud infrastructure, cybersecurity, and more." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Our Services
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Comprehensive autonomous technology solutions designed to transform your business and accelerate innovation.
                </p>
              </header>

              {/* AI & Machine Learning */}
              <section className="mb-20">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                      AI & Machine Learning
                    </h2>
                    <p className="text-white/80 mb-6 text-lg leading-relaxed">
                      Our advanced AI and machine learning solutions go beyond traditional automation. We create intelligent systems 
                      that learn, adapt, and make autonomous decisions to optimize your operations.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-cyan-300">Neural Network Optimization</h4>
                          <p className="text-white/70 text-sm">Custom neural architectures optimized for your specific use cases</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-fuchsia-300">Predictive Analytics</h4>
                          <p className="text-white/70 text-sm">AI-powered forecasting and trend analysis</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-indigo-300">Autonomous Decision Making</h4>
                          <p className="text-white/70 text-sm">Systems that make intelligent decisions without human intervention</p>
                        </div>
                      </div>
                    </div>
                    <Link href="/services/ai-ml" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
                      Learn More About AI Services →
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-2xl border border-white/20 flex items-center justify-center">
                      <div className="text-8xl">🤖</div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-fuchsia-500/30 to-cyan-500/30 rounded-full blur-xl"></div>
                  </div>
                </div>
              </section>

              {/* Cloud Infrastructure */}
              <section className="mb-20">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <div className="order-2 lg:order-1 relative">
                    <div className="aspect-square bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 rounded-2xl border border-white/20 flex items-center justify-center">
                      <div className="text-8xl">☁️</div>
                    </div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/30 rounded-full blur-xl"></div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                      Cloud Infrastructure
                    </h2>
                    <p className="text-white/80 mb-6 text-lg leading-relaxed">
                      Build scalable, resilient cloud infrastructure that manages itself. Our autonomous cloud solutions 
                      automatically scale, optimize, and maintain your systems for peak performance.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-cyan-300">Auto-scaling Systems</h4>
                          <p className="text-white/70 text-sm">Intelligent resource allocation based on real-time demand</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-fuchsia-300">Load Balancing</h4>
                          <p className="text-white/70 text-sm">Advanced traffic distribution and optimization</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-indigo-300">Disaster Recovery</h4>
                          <p className="text-white/70 text-sm">Automated backup and recovery systems</p>
                        </div>
                      </div>
                    </div>
                    <Link href="/services/cloud" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
                      Learn More About Cloud Services →
                    </Link>
                  </div>
                </div>
              </section>

              {/* Cybersecurity */}
              <section className="mb-20">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                      Cybersecurity
                    </h2>
                    <p className="text-white/80 mb-6 text-lg leading-relaxed">
                      Protect your systems with AI-powered security that never sleeps. Our autonomous cybersecurity solutions 
                      detect threats in real-time and respond automatically to protect your assets.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-cyan-300">Threat Detection</h4>
                          <p className="text-white/70 text-sm">AI-powered identification of security threats</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-fuchsia-300">Automated Response</h4>
                          <p className="text-white/70 text-sm">Instant threat neutralization without human intervention</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-indigo-300">Compliance Monitoring</h4>
                          <p className="text-white/70 text-sm">Continuous compliance checking and reporting</p>
                        </div>
                      </div>
                    </div>
                    <Link href="/services/security" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
                      Learn More About Security Services →
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl border border-white/20 flex items-center justify-center">
                      <div className="text-8xl">🔒</div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-fuchsia-500/30 to-cyan-500/30 rounded-full blur-xl"></div>
                  </div>
                </div>
              </section>

              {/* Data Analytics */}
              <section className="mb-20">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <div className="order-2 lg:order-1 relative">
                    <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-2xl border border-white/20 flex items-center justify-center">
                      <div className="text-8xl">📊</div>
                    </div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 rounded-full blur-xl"></div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                      Data Analytics
                    </h2>
                    <p className="text-white/80 mb-6 text-lg leading-relaxed">
                      Transform raw data into actionable insights with our autonomous analytics platform. 
                      Get real-time dashboards, predictive insights, and automated reporting that drives better decisions.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-cyan-300">Real-time Processing</h4>
                          <p className="text-white/70 text-sm">Instant data analysis and insights delivery</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-fuchsia-300">Predictive Insights</h4>
                          <p className="text-white/70 text-sm">AI-powered forecasting and trend analysis</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-indigo-300">Automated Reporting</h4>
                          <p className="text-white/70 text-sm">Self-generating reports and dashboards</p>
                        </div>
                      </div>
                    </div>
                    <Link href="/services/analytics" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
                      Learn More About Analytics Services →
                    </Link>
                  </div>
                </div>
              </section>

              {/* Digital Transformation */}
              <section className="mb-20">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                      Digital Transformation
                    </h2>
                    <p className="text-white/80 mb-6 text-lg leading-relaxed">
                      Navigate your digital transformation journey with confidence. We provide end-to-end guidance 
                      and implementation of autonomous technologies that revolutionize your business processes.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-cyan-300">Strategy Development</h4>
                          <p className="text-white/70 text-sm">Comprehensive transformation roadmaps</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-fuchsia-300">Process Automation</h4>
                          <p className="text-white/70 text-sm">Intelligent workflow optimization</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-indigo-300">Change Management</h4>
                          <p className="text-white/70 text-sm">Smooth transition and adoption support</p>
                        </div>
                      </div>
                    </div>
                    <Link href="/services/transformation" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
                      Learn More About Transformation Services →
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 rounded-2xl border border-white/20 flex items-center justify-center">
                      <div className="text-8xl">🚀</div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500/30 to-indigo-500/30 rounded-full blur-xl"></div>
                  </div>
                </div>
              </section>

              {/* System Integration */}
              <section className="mb-20">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <div className="order-2 lg:order-1 relative">
                    <div className="aspect-square bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl border border-white/20 flex items-center justify-center">
                      <div className="text-8xl">🔧</div>
                    </div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-fuchsia-500/30 to-cyan-500/30 rounded-full blur-xl"></div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                      System Integration
                    </h2>
                    <p className="text-white/80 mb-6 text-lg leading-relaxed">
                      Seamlessly integrate autonomous systems with your existing infrastructure. Our integration experts 
                      ensure smooth connectivity and optimal performance across all your systems.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-cyan-300">API Development</h4>
                          <p className="text-white/70 text-sm">Custom APIs for seamless system communication</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-fuchsia-300">Legacy Integration</h4>
                          <p className="text-white/70 text-sm">Connect new autonomous systems with existing infrastructure</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-indigo-300">Performance Optimization</h4>
                          <p className="text-white/70 text-sm">Ensure optimal performance across integrated systems</p>
                        </div>
                      </div>
                    </div>
                    <Link href="/services/integration" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
                      Learn More About Integration Services →
                    </Link>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="text-center">
                <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl border border-cyan-400/30 p-12">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
                    Let's discuss how our autonomous technology services can revolutionize your operations and drive innovation.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105">
                      Get Started Today
                    </Link>
                    <Link href="/about" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
                      Learn More About Us
                    </Link>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}