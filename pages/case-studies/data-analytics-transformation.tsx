import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudyPage() {
  return (
    <>
      <Head>
        <title>Data Analytics Transformation - Case Study | Zion Tech Group</title>
        <meta name="description" content="Discover how a Healthcare Provider achieved 30% improvement in patient outcomes with comprehensive data analytics platform. Read our detailed case study." />
        <meta name="keywords" content="data analytics, healthcare analytics, predictive modeling, big data, machine learning" />
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
            <span className="text-white">Data Analytics Transformation</span>
          </nav>

          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-400/20 text-purple-400 text-sm rounded-full border border-purple-400/30 mb-6">
              Healthcare Industry
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Data Analytics Transformation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              How a Healthcare Provider achieved 30% improvement in patient outcomes with comprehensive data analytics platform
            </p>
          </header>

          {/* Case Study Content */}
          <div className="max-w-4xl mx-auto">
            {/* Company Overview */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Company Overview</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">Healthcare Provider</h3>
                <p className="text-white/90 text-lg mb-4">
                  A large healthcare network serving multiple communities with hospitals, 
                  clinics, and specialized medical services. The organization struggled to leverage data for patient care improvements.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">5+</div>
                    <div className="text-white/70">Hospitals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">50+</div>
                    <div className="text-white/70">Clinics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">$200M+</div>
                    <div className="text-white/70">Annual Budget</div>
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
                    <span>Inability to leverage data for patient care improvements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Operational inefficiencies due to lack of data insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Manual data collection and analysis processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>No predictive capabilities for patient care planning</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Comprehensive Data Analytics Platform</h3>
                <p className="text-white/90 text-lg mb-6">
                  We built a comprehensive data analytics platform that provides real-time insights, 
                  predictive modeling, and automated reporting for improved patient care and operational efficiency.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-purple-400 mb-3">Big Data Processing</h4>
                    <p className="text-white/80">
                      Advanced big data infrastructure processes millions of patient records, 
                      lab results, and operational data points in real-time.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-purple-400 mb-3">Machine Learning</h4>
                    <p className="text-white/80">
                      ML algorithms identify patterns, predict outcomes, and provide 
                      personalized treatment recommendations.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-purple-400 mb-3">Real-time Analytics</h4>
                    <p className="text-white/80">
                      Live dashboards provide instant insights into patient conditions, 
                      resource utilization, and operational metrics.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-purple-400 mb-3">Predictive Modeling</h4>
                    <p className="text-white/80">
                      Advanced predictive models forecast patient outcomes, readmission risks, 
                      and resource requirements.
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
                        <span className="text-white/90">Patient Outcomes</span>
                        <span className="text-2xl font-bold text-green-400">+30%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Operational Costs</span>
                        <span className="text-2xl font-bold text-green-400">-40%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Data Processing</span>
                        <span className="text-2xl font-bold text-green-400">Real-time</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90">Predictive Accuracy</span>
                        <span className="text-2xl font-bold text-green-400">85%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-green-400 mb-6">Additional Benefits</h3>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Improved clinical decision-making with data-driven insights</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Reduced readmission rates through predictive interventions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Optimized resource allocation and staffing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Enhanced patient engagement and satisfaction</span>
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
                  {['Big Data', 'Machine Learning', 'Real-time Analytics', 'Predictive Modeling'].map((tech) => (
                    <div key={tech} className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                      <span className="text-purple-400 font-semibold">{tech}</span>
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
                    <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Data Assessment & Planning (Months 1-2)</h4>
                      <p className="text-white/70">Comprehensive data audit and system architecture design</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Infrastructure Development (Months 3-6)</h4>
                      <p className="text-white/70">Building big data infrastructure and ML model development</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Integration & Testing (Months 7-9)</h4>
                      <p className="text-white/70">System integration and comprehensive testing with real data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Deployment & Training (Month 10)</h4>
                      <p className="text-white/70">Full deployment and staff training on new analytics platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Data Analytics?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  This case study demonstrates the real impact of data analytics transformation. 
                  Let&apos;s discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-purple-400 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/case-studies"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-purple-400/50 transition-all duration-300"
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