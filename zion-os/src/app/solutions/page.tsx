export default function SolutionsPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Innovative AI-powered solutions designed to solve complex business challenges and drive digital transformation across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industry Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Healthcare</h3>
              <p className="text-white/70 mb-4">
                AI-powered diagnostic tools, patient monitoring systems, and drug discovery platforms that revolutionize healthcare delivery.
              </p>
              <ul className="text-sm text-white/60 space-y-1 mb-4">
                <li>• Medical imaging analysis</li>
                <li>• Predictive diagnostics</li>
                <li>• Drug discovery automation</li>
                <li>• Patient care optimization</li>
              </ul>
              <a href="/healthcare-solutions" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                Learn More →
              </a>
            </div>

            {/* Finance */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Financial Services</h3>
              <p className="text-white/70 mb-4">
                Advanced trading algorithms, risk assessment systems, and fraud detection powered by AI and quantum computing.
              </p>
              <ul className="text-sm text-white/60 space-y-1 mb-4">
                <li>• Algorithmic trading</li>
                <li>• Risk management</li>
                <li>• Fraud detection</li>
                <li>• Portfolio optimization</li>
              </ul>
              <a href="/financial-solutions" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                Learn More →
              </a>
            </div>

            {/* Manufacturing */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Manufacturing</h3>
              <p className="text-white/70 mb-4">
                Smart factory solutions with autonomous robots, predictive maintenance, and quality control automation.
              </p>
              <ul className="text-sm text-white/60 space-y-1 mb-4">
                <li>• Autonomous robotics</li>
                <li>• Predictive maintenance</li>
                <li>• Quality control</li>
                <li>• Supply chain optimization</li>
              </ul>
              <a href="/manufacturing-solutions" className="text-green-400 hover:text-green-300 font-medium text-sm">
                Learn More →
              </a>
            </div>

            {/* Retail */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Retail & E-commerce</h3>
              <p className="text-white/70 mb-4">
                Personalized shopping experiences, inventory management, and customer service automation.
              </p>
              <ul className="text-sm text-white/60 space-y-1 mb-4">
                <li>• Personalized recommendations</li>
                <li>• Inventory optimization</li>
                <li>• Customer service bots</li>
                <li>• Demand forecasting</li>
              </ul>
              <a href="/retail-solutions" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                Learn More →
              </a>
            </div>

            {/* Transportation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Transportation & Logistics</h3>
              <p className="text-white/70 mb-4">
                Autonomous vehicles, route optimization, and smart logistics solutions for efficient transportation.
              </p>
              <ul className="text-sm text-white/60 space-y-1 mb-4">
                <li>• Autonomous vehicles</li>
                <li>• Route optimization</li>
                <li>• Fleet management</li>
                <li>• Last-mile delivery</li>
              </ul>
              <a href="/transportation-solutions" className="text-red-400 hover:text-red-300 font-medium text-sm">
                Learn More →
              </a>
            </div>

            {/* Energy */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Energy & Utilities</h3>
              <p className="text-white/70 mb-4">
                Smart grid management, renewable energy optimization, and predictive maintenance for energy systems.
              </p>
              <ul className="text-sm text-white/60 space-y-1 mb-4">
                <li>• Smart grid management</li>
                <li>• Renewable energy optimization</li>
                <li>• Predictive maintenance</li>
                <li>• Energy consumption analytics</li>
              </ul>
              <a href="/energy-solutions" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Machine Learning</h3>
              <p className="text-white/70 text-sm">Advanced ML algorithms and neural networks</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
              <p className="text-white/70 text-sm">Quantum algorithms and quantum machine learning</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cloud Infrastructure</h3>
              <p className="text-white/70 text-sm">Scalable cloud solutions and microservices</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
              <p className="text-white/70 text-sm">AI-powered threat detection and prevention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Success Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
                <div className="text-white/70">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">40%</div>
                <div className="text-white/70">Cost Reduction</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">60%</div>
                <div className="text-white/70">Efficiency Improvement</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">3x</div>
                <div className="text-white/70">ROI Average</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/70 mb-8">
            Let's discuss how our AI-powered solutions can solve your specific challenges and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-200"
            >
              Get Started Today
            </a>
            <a
              href="/case-studies"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}