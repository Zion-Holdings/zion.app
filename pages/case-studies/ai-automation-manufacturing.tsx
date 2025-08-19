import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudyPage() {
  return (
    <>
      <Head>
        <title>AI-Powered Manufacturing Automation - Case Study | Zion Tech Group</title>
        <meta name="description" content="Discover how Global Manufacturing Corp achieved 40% increase in production efficiency with AI-powered automation. Read our detailed case study." />
        <meta name="keywords" content="AI automation, manufacturing, predictive maintenance, quality control, production optimization" />
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
            <span className="text-white">AI-Powered Manufacturing Automation</span>
          </nav>

          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30 mb-6">
              Manufacturing Industry
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Manufacturing Automation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              How Global Manufacturing Corp achieved 40% increase in production efficiency with autonomous AI systems
            </p>
          </header>

          {/* Case Study Content */}
          <div className="max-w-4xl mx-auto">
            {/* Company Overview */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Company Overview</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Global Manufacturing Corp</h3>
                <p className="text-white/90 text-lg mb-4">
                  A leading manufacturer of automotive components with operations across three continents. 
                  The company faced significant challenges with production inefficiencies and quality control issues.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">500+</div>
                    <div className="text-white/70">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">3</div>
                    <div className="text-white/70">Continents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">$50M+</div>
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
                    <span>Inefficient production processes leading to 30% waste</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>High downtime due to unplanned equipment failures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Quality control issues resulting in 15% defect rate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Manual processes causing delays and human errors</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">AI-Powered Autonomous Systems</h3>
                <p className="text-white/90 text-lg mb-6">
                  We implemented a comprehensive suite of autonomous AI systems designed to address each 
                  challenge systematically while maintaining human oversight and control.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Predictive Maintenance</h4>
                    <p className="text-white/80">
                      IoT sensors and ML algorithms predict equipment failures before they occur, 
                      enabling proactive maintenance scheduling.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Quality Control</h4>
                    <p className="text-white/80">
                      Computer vision systems automatically inspect products in real-time, 
                      detecting defects with 99.5% accuracy.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Production Optimization</h4>
                    <p className="text-white/80">
                      AI algorithms continuously optimize production schedules, resource allocation, 
                      and workflow efficiency.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Real-time Monitoring</h4>
                    <p className="text-white/80">
                      Comprehensive dashboard providing real-time insights into all production metrics 
                      and system performance.
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
                        <span className="text-white/90">Production Efficiency</span>
                        <span className="text-2xl font-bold text-green-400">+40%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Unplanned Downtime</span>
                        <span className="text-2xl font-bold text-green-400">-60%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Product Quality</span>
                        <span className="text-2xl font-bold text-green-400">+35%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Operational Costs</span>
                        <span className="text-2xl font-bold text-green-400">-25%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-green-400 mb-6">Additional Benefits</h3>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>24/7 autonomous operation with minimal human intervention</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Real-time quality assurance and compliance monitoring</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Scalable solution that grows with business needs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Improved employee satisfaction and safety</span>
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
                  {['Machine Learning', 'Computer Vision', 'IoT Sensors', 'Predictive Analytics'].map((tech) => (
                    <div key={tech} className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                      <span className="text-cyan-400 font-semibold">{tech}</span>
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
                    <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Discovery & Planning (Month 1)</h4>
                      <p className="text-white/70">Comprehensive analysis of current processes and system design</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Infrastructure Setup (Months 2-3)</h4>
                      <p className="text-white/70">Installation of IoT sensors and deployment of cloud infrastructure</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">AI Model Training (Months 4-5)</h4>
                      <p className="text-white/70">Training and validation of machine learning models</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Deployment & Testing (Month 6)</h4>
                      <p className="text-white/70">Full system deployment and comprehensive testing</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Manufacturing?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  This case study demonstrates the real impact of AI automation in manufacturing. 
                  Let&apos;s discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/case-studies"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"
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