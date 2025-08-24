import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudyPage() {
  return (
    <>
      <Head>
        <title>Intelligent Customer Service Automation - Case Study | Zion Tech Group</title>
        <meta name="description" content="Discover how a Financial Services Provider achieved 80% reduction in response time with AI-powered chatbots and automated ticket routing. Read our detailed case study." />
        <meta name="keywords" content="customer service automation, chatbots, AI automation, ticket routing, sentiment analysis" />
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
            <span className="text-white">Intelligent Customer Service Automation</span>
          </nav>

          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30 mb-6">
              Financial Services Industry
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Intelligent Customer Service Automation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              How a Financial Services Provider achieved 80% reduction in response time with AI-powered chatbots and automated ticket routing
            </p>
          </header>

          {/* Case Study Content */}
          <div className="max-w-4xl mx-auto">
            {/* Company Overview */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Company Overview</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Financial Services Provider</h3>
                <p className="text-white/90 text-lg mb-4">
                  A leading financial services company serving millions of customers with banking, 
                  investment, and insurance products. The company faced challenges with high customer service costs and long response times.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">1M+</div>
                    <div className="text-white/70">Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">500+</div>
                    <div className="text-white/70">Support Agents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">$100M+</div>
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
                    <span>High customer service costs consuming 25% of operational budget</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Long response times averaging 4-6 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Inefficient ticket routing causing delays and customer frustration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Limited 24/7 support coverage</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">AI-Powered Customer Service Platform</h3>
                <p className="text-white/90 text-lg mb-6">
                  We implemented a comprehensive customer service automation platform that combines 
                  intelligent chatbots, automated ticket routing, and sentiment analysis for optimal customer experience.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-green-400 mb-3">Intelligent Chatbots</h4>
                    <p className="text-white/80">
                      AI-powered chatbots handle 70% of customer inquiries automatically with 
                      natural language understanding and context awareness.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-green-400 mb-3">Automated Ticket Routing</h4>
                    <p className="text-white/80">
                      Smart routing algorithms automatically assign tickets to the most 
                      qualified agents based on expertise and workload.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-green-400 mb-3">Sentiment Analysis</h4>
                    <p className="text-white/80">
                      Real-time sentiment analysis identifies customer emotions and 
                      prioritizes urgent cases automatically.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-green-400 mb-3">24/7 Support</h4>
                    <p className="text-white/80">
                      Round-the-clock automated support with seamless escalation 
                      to human agents when needed.
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
                        <span className="text-white/90">Response Time</span>
                        <span className="text-2xl font-bold text-green-400">-80%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Service Costs</span>
                        <span className="text-2xl font-bold text-green-400">-60%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Customer Satisfaction</span>
                        <span className="text-2xl font-bold text-green-400">90%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Support Coverage</span>
                        <span className="text-2xl font-bold text-green-400">24/7</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-green-400 mb-6">Additional Benefits</h3>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Improved agent productivity and job satisfaction</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Consistent service quality across all interactions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Real-time performance monitoring and optimization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Scalable solution for business growth</span>
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
                  {['Chatbots', 'Natural Language Processing', 'Ticket Routing', 'Sentiment Analysis'].map((tech) => (
                    <div key={tech} className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                      <span className="text-green-400 font-semibold">{tech}</span>
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
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">System Design & Planning (Month 1)</h4>
                      <p className="text-white/70">Customer service workflow analysis and system architecture design</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">AI Model Training (Months 2-3)</h4>
                      <p className="text-white/70">Training chatbots and routing algorithms on historical customer data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Integration & Testing (Month 4)</h4>
                      <p className="text-white/70">System integration and comprehensive testing with live customer interactions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Deployment & Training (Month 5)</h4>
                      <p className="text-white/70">Full deployment and staff training on new systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl p-8 border border-green-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Customer Service?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  This case study demonstrates the real impact of customer service automation. 
                  Let&apos;s discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-500 hover:to-cyan-500 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/case-studies"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-green-400/50 transition-all duration-300"
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