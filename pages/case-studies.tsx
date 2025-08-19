import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore real-world success stories and case studies showcasing how Zion Tech Group's autonomous technology solutions have transformed businesses." />
        <meta property="og:title" content="Case Studies | Zion Tech Group - Success Stories" />
        <meta property="og:description" content="Explore real-world success stories and case studies showcasing how Zion Tech Group's autonomous technology solutions have transformed businesses." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
              ← Back to Home
            </Link>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Case Studies
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Real-world success stories showcasing how our autonomous technology solutions have transformed businesses
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Featured Success Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-2xl p-8 border border-cyan-400/30">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">E</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-300">E-Commerce Platform</h3>
                      <p className="text-white/60">Retail Technology</p>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6">
                    A major e-commerce platform was struggling with content management and customer engagement. 
                    Our autonomous content generation system created 500+ product descriptions, blog posts, and 
                    marketing materials in just 30 days.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">500+</div>
                      <div className="text-sm text-white/60">Content Pieces</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">40%</div>
                      <div className="text-sm text-white/60">Traffic Increase</div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-300 mb-2">Key Results:</h4>
                    <ul className="text-sm text-white/80 space-y-1">
                      <li>• 40% increase in organic traffic</li>
                      <li>• 25% improvement in conversion rates</li>
                      <li>• 60% reduction in content creation time</li>
                      <li>• 99.9% content accuracy rate</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-fuchsia-400/10 to-purple-400/10 rounded-2xl p-8 border border-fuchsia-400/30">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-fuchsia-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">F</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-fuchsia-300">Financial Services</h3>
                      <p className="text-white/60">Banking & Finance</p>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6">
                    A financial services company needed to automate their compliance reporting and risk assessment processes. 
                    Our autonomous systems now handle 95% of routine compliance tasks, reducing manual work by 80%.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-fuchsia-400">95%</div>
                      <div className="text-sm text-white/60">Tasks Automated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-fuchsia-400">80%</div>
                      <div className="text-sm text-white/60">Time Saved</div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-fuchsia-300 mb-2">Key Results:</h4>
                    <ul className="text-sm text-white/80 space-y-1">
                      <li>• 95% automation of compliance tasks</li>
                      <li>• 80% reduction in manual processing time</li>
                      <li>• 100% compliance accuracy rate</li>
                      <li>• 24/7 automated monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Industry Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-green-300 text-center">Healthcare</h3>
                  <p className="text-white/80 text-center mb-4">
                    Automated patient data processing and medical record management systems
                  </p>
                  <div className="text-sm text-green-300 text-center">
                    <span className="font-semibold">99.99%</span> Accuracy Rate
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-300 text-center">Manufacturing</h3>
                  <p className="text-white/80 text-center mb-4">
                    Predictive maintenance and quality control automation systems
                  </p>
                  <div className="text-sm text-blue-300 text-center">
                    <span className="font-semibold">30%</span> Cost Reduction
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-300 text-center">Education</h3>
                  <p className="text-white/80 text-center mb-4">
                    AI-powered content generation and personalized learning systems
                  </p>
                  <div className="text-sm text-purple-300 text-center">
                    <span className="font-semibold">50%</span> Learning Improvement
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Client Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">J</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-300">John Smith</h4>
                      <p className="text-sm text-white/60">CTO, TechCorp</p>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    "Zion Tech Group's autonomous systems have revolutionized our operations. 
                    We've seen a 40% increase in efficiency and our team can now focus on strategic initiatives 
                    instead of routine tasks."
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-fuchsia-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">S</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-fuchsia-300">Sarah Johnson</h4>
                      <p className="text-sm text-white/60">VP Operations, InnovateCo</p>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    "The content generation system has been a game-changer. We're producing 10x more content 
                    with better quality and SEO performance. It's like having an entire content team working 24/7."
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Success Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-white/80">Projects Completed</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">99.9%</div>
                  <div className="text-white/80">Client Satisfaction</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
                  <div className="text-white/80">Average Efficiency Gain</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-white/80">System Operation</div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-6 text-white/90">Ready to Join Our Success Stories?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our autonomous technology solutions can transform your business and create your own success story.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                    Start Your Project
                  </Link>
                  <Link href="/services" className="border border-white/30 hover:border-cyan-400/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                    Explore Services
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