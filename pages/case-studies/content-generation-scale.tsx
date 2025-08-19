import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudyPage() {
  return (
    <>
      <Head>
        <title>Scaling Content Generation 10x - Case Study | Zion Tech Group</title>
        <meta name="description" content="Discover how a Digital Marketing Agency achieved 10x increase in content output with autonomous content generation systems. Read our detailed case study." />
        <meta name="keywords" content="content generation, AI automation, marketing automation, content scaling, digital marketing" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <main className="container mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/60 mx-2">→</span>
            <Link href="/case-studies" className="text-white/60 hover:text-white transition-colors">
              Case Studies
            </Link>
            <span className="text-white/60 mx-2">→</span>
            <span className="text-white">Scaling Content Generation 10x</span>
          </nav>

          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full border border-fuchsia-400/30 mb-6">
              Marketing Industry
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Scaling Content Generation 10x
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              How a Digital Marketing Agency achieved 10x increase in content output with autonomous content generation systems
            </p>
          </header>

          {/* Case Study Content */}
          <div className="max-w-4xl mx-auto">
            {/* Company Overview */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Company Overview</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-4">Digital Marketing Agency</h3>
                <p className="text-white/90 text-lg mb-4">
                  A mid-sized digital marketing agency serving clients across multiple industries. 
                  The company struggled to meet growing client demand for high-quality content at scale.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-fuchsia-400">25+</div>
                    <div className="text-white/70">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-fuchsia-400">15</div>
                    <div className="text-white/70">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-fuchsia-400">$2M+</div>
                    <div className="text-white/70">Annual Revenue</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Challenge */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-red-400 mb-4">Critical Issues</h3>
                <ul className="space-y-3 text-white/90 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Unable to meet client demand for high-quality content at scale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Content creation bottlenecks limiting business growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>High costs associated with manual content creation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Inconsistent content quality across different writers</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Autonomous Content Generation Systems</h3>
                <p className="text-white/90 text-lg mb-6">
                  We implemented a comprehensive autonomous content generation platform with human oversight 
                  and quality control mechanisms to ensure consistent, high-quality output.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-fuchsia-400 mb-3">Natural Language Processing</h4>
                    <p className="text-white/80">
                      Advanced NLP models generate human-like content based on client requirements 
                      and brand guidelines.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-fuchsia-400 mb-3">Content Optimization</h4>
                    <p className="text-white/80">
                      AI-powered tools automatically optimize content for SEO, readability, 
                      and engagement metrics.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-fuchsia-400 mb-3">SEO Automation</h4>
                    <p className="text-white/80">
                      Automated keyword research, content optimization, and performance tracking 
                      for maximum visibility.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-fuchsia-400 mb-3">Analytics & Insights</h4>
                    <p className="text-white/80">
                      Comprehensive analytics dashboard providing real-time insights into 
                      content performance and audience engagement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Results */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-green-400 mb-6">Quantifiable Results</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Content Output</span>
                        <span className="text-2xl font-bold text-green-400">+1000%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Engagement Metrics</span>
                        <span className="text-2xl font-bold text-green-400">+85%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Creation Time</span>
                        <span className="text-2xl font-bold text-green-400">-70%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Client Satisfaction</span>
                        <span className="text-2xl font-bold text-green-400">95%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-green-400 mb-6">Additional Benefits</h3>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Scalable content production without quality degradation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Consistent brand voice across all content</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Reduced dependency on individual writers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Faster time-to-market for content campaigns</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Technologies */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Technologies Used</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Natural Language Processing', 'Content Optimization', 'SEO Automation', 'Analytics'].map((tech) => (
                    <div key={tech} className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                      <span className="text-fuchsia-400 font-semibold">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Implementation */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Implementation Timeline</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">System Design & Planning (Month 1)</h4>
                      <p className="text-white/70">Content strategy analysis and system architecture design</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">AI Model Training (Months 2-3)</h4>
                      <p className="text-white/70">Training content generation models on client-specific data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Integration & Testing (Month 4)</h4>
                      <p className="text-white/70">System integration and comprehensive testing with real content</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 rounded-2xl p-8 border border-fuchsia-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Scale Your Content Production?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  This case study demonstrates the real impact of AI automation in content generation. 
                  Let&apos;s discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-fuchsia-500 hover:to-cyan-500 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/case-studies"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-fuchsia-400/50 transition-all duration-300"
                  >
                    View All Case Studies
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