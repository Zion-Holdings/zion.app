export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Studies</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Real-world examples of how our AI-powered solutions have transformed businesses and delivered measurable results across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Case Study
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Healthcare AI Diagnostic Platform
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  Revolutionized medical diagnostics for a major healthcare network using AI-powered image analysis and predictive modeling.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">95%</div>
                    <div className="text-white/70 text-sm">Accuracy Improvement</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">60%</div>
                    <div className="text-white/70 text-sm">Faster Diagnosis</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">$2M+</div>
                    <div className="text-white/70 text-sm">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">50K+</div>
                    <div className="text-white/70 text-sm">Patients Served</div>
                  </div>
                </div>
                <a
                  href="/case-studies/healthcare-ai-diagnostics"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                >
                  Read Full Case Study →
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Key Technologies Used</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80">Computer Vision AI</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-white/80">Predictive Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/80">Machine Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-white/80">Natural Language Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Financial Services */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Trading System</h3>
              <p className="text-white/70 mb-4">
                Developed an autonomous trading platform for a hedge fund that increased returns by 40% while reducing risk.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-cyan-400 text-sm font-medium">Financial Services</span>
                <span className="text-white/60 text-sm">2024</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-white font-semibold">40%</div>
                  <div className="text-white/60">Return Increase</div>
                </div>
                <div>
                  <div className="text-white font-semibold">30%</div>
                  <div className="text-white/60">Risk Reduction</div>
                </div>
              </div>
              <a href="/case-studies/ai-trading-system" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                Read More →
              </a>
            </div>

            {/* Manufacturing */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Factory Automation</h3>
              <p className="text-white/70 mb-4">
                Implemented autonomous robotics and predictive maintenance for a manufacturing company, reducing downtime by 70%.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-green-400 text-sm font-medium">Manufacturing</span>
                <span className="text-white/60 text-sm">2024</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-white font-semibold">70%</div>
                  <div className="text-white/60">Downtime Reduction</div>
                </div>
                <div>
                  <div className="text-white font-semibold">45%</div>
                  <div className="text-white/60">Efficiency Gain</div>
                </div>
              </div>
              <a href="/case-studies/smart-factory-automation" className="text-green-400 hover:text-green-300 font-medium text-sm">
                Read More →
              </a>
            </div>

            {/* Retail */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Personalized Shopping Experience</h3>
              <p className="text-white/70 mb-4">
                Created an AI-powered recommendation engine for an e-commerce platform, increasing sales by 35%.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-yellow-400 text-sm font-medium">Retail</span>
                <span className="text-white/60 text-sm">2024</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-white font-semibold">35%</div>
                  <div className="text-white/60">Sales Increase</div>
                </div>
                <div>
                  <div className="text-white font-semibold">50%</div>
                  <div className="text-white/60">Customer Engagement</div>
                </div>
              </div>
              <a href="/case-studies/personalized-shopping" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                Read More →
              </a>
            </div>

            {/* Transportation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Autonomous Fleet Management</h3>
              <p className="text-white/70 mb-4">
                Developed an AI system for a logistics company that optimized routes and reduced fuel costs by 25%.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-red-400 text-sm font-medium">Transportation</span>
                <span className="text-white/60 text-sm">2024</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-white font-semibold">25%</div>
                  <div className="text-white/60">Fuel Cost Reduction</div>
                </div>
                <div>
                  <div className="text-white font-semibold">20%</div>
                  <div className="text-white/60">Delivery Time</div>
                </div>
              </div>
              <a href="/case-studies/autonomous-fleet" className="text-red-400 hover:text-red-300 font-medium text-sm">
                Read More →
              </a>
            </div>

            {/* Energy */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Grid Optimization</h3>
              <p className="text-white/70 mb-4">
                Implemented AI-powered energy management for a utility company, reducing energy waste by 30%.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-indigo-400 text-sm font-medium">Energy</span>
                <span className="text-white/60 text-sm">2024</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-white font-semibold">30%</div>
                  <div className="text-white/60">Energy Waste Reduction</div>
                </div>
                <div>
                  <div className="text-white font-semibold">15%</div>
                  <div className="text-white/60">Cost Savings</div>
                </div>
              </div>
              <a href="/case-studies/smart-grid-optimization" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                Read More →
              </a>
            </div>

            {/* Cybersecurity */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Threat Detection</h3>
              <p className="text-white/70 mb-4">
                Built an intelligent security system for a financial institution that detected 99.9% of cyber threats.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-purple-400 text-sm font-medium">Cybersecurity</span>
                <span className="text-white/60 text-sm">2024</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-white font-semibold">99.9%</div>
                  <div className="text-white/60">Threat Detection</div>
                </div>
                <div>
                  <div className="text-white font-semibold">90%</div>
                  <div className="text-white/60">False Positive Reduction</div>
                </div>
              </div>
              <a href="/case-studies/ai-threat-detection" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <div className="text-white font-semibold">John Smith</div>
                  <div className="text-white/60 text-sm">CTO, HealthTech Inc.</div>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                "Zion Tech Group's AI diagnostic platform has transformed our healthcare delivery. The accuracy and speed improvements are remarkable."
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Johnson</div>
                  <div className="text-white/60 text-sm">CEO, FinTech Solutions</div>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                "The AI trading system has given us a competitive edge. Returns are up 40% while risk has decreased significantly."
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Mike Chen</div>
                  <div className="text-white/60 text-sm">Operations Director, AutoCorp</div>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                "Smart factory automation has revolutionized our production line. Downtime is down 70% and efficiency is through the roof."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-white/70 mb-8">
            Let's discuss how our AI solutions can transform your business and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-200"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}