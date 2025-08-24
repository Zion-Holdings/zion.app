import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudyPage() {
  return (
    <>
      <Head>
        <title>Cloud Infrastructure Optimization - Case Study | Zion Tech Group</title>
        <meta name="description" content="Discover how an E-commerce Platform achieved 50% reduction in cloud costs with self-healing, auto-scaling infrastructure. Read our detailed case study." />
        <meta name="keywords" content="cloud optimization, auto-scaling, infrastructure automation, cost reduction, DevOps" />
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
            <span className="text-white">Cloud Infrastructure Optimization</span>
          </nav>

          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-400/20 text-blue-400 text-sm rounded-full border border-blue-400/30 mb-6">
              Technology Industry
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cloud Infrastructure Optimization
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              How an E-commerce Platform achieved 50% reduction in cloud costs with self-healing, auto-scaling infrastructure
            </p>
          </header>

          {/* Case Study Content */}
          <div className="max-w-4xl mx-auto">
            {/* Company Overview */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Company Overview</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">E-commerce Platform</h3>
                <p className="text-white/90 text-lg mb-4">
                  A growing e-commerce platform serving thousands of customers daily. 
                  The company faced challenges with high cloud costs, performance issues, and manual scaling requirements.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">10K+</div>
                    <div className="text-white/70">Daily Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">100K+</div>
                    <div className="text-white/70">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">$5M+</div>
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
                    <span>High cloud costs consuming 40% of operational budget</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Performance issues during peak traffic periods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Manual scaling requirements causing service disruptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Lack of monitoring and alerting systems</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Self-Healing, Auto-Scaling Infrastructure</h3>
                <p className="text-white/90 text-lg mb-6">
                  We built a comprehensive cloud infrastructure solution that automatically scales, 
                  monitors, and heals itself while optimizing costs and performance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-blue-400 mb-3">Auto-scaling</h4>
                    <p className="text-white/80">
                      Intelligent scaling algorithms automatically adjust resources based on 
                      real-time demand and performance metrics.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-blue-400 mb-3">Load Balancing</h4>
                    <p className="text-white/80">
                      Advanced load balancing distributes traffic efficiently across multiple 
                      instances for optimal performance.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-blue-400 mb-3">Monitoring</h4>
                    <p className="text-white/80">
                      Comprehensive monitoring and alerting systems provide real-time visibility 
                      into infrastructure health and performance.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-blue-400 mb-3">Cost Optimization</h4>
                    <p className="text-white/80">
                      AI-powered cost optimization algorithms automatically identify and 
                      implement cost-saving opportunities.
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
                        <span className="text-white/90">Cloud Costs</span>
                        <span className="text-2xl font-bold text-green-400">-50%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Uptime</span>
                        <span className="text-2xl font-bold text-green-400">99.9%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Response Times</span>
                        <span className="text-2xl font-bold text-green-400">+300%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Manual Intervention</span>
                        <span className="text-2xl font-bold text-green-400">0%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-green-400 mb-6">Additional Benefits</h3>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Automatic failover and disaster recovery</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Predictive scaling based on historical patterns</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Real-time performance optimization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Reduced DevOps team workload</span>
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
                  {['Auto-scaling', 'Load Balancing', 'Monitoring', 'Cost Optimization'].map((tech) => (
                    <div key={tech} className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                      <span className="text-blue-400 font-semibold">{tech}</span>
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
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Infrastructure Analysis (Months 1-2)</h4>
                      <p className="text-white/70">Comprehensive analysis of current infrastructure and performance bottlenecks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">System Design & Development (Months 3-6)</h4>
                      <p className="text-white/70">Design and development of auto-scaling and monitoring systems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Testing & Deployment (Months 7-8)</h4>
                      <p className="text-white/70">Comprehensive testing and gradual deployment to production</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Optimize Your Cloud Infrastructure?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  This case study demonstrates the real impact of infrastructure automation. 
                  Let&apos;s discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/case-studies"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-blue-400/50 transition-all duration-300"
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