import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';

const Homepage2025: React.FC = () => {
  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Pioneering the future of technology with innovative solutions that drive business transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
              Discover cutting-edge AI, quantum computing, and autonomous solutions that transform businesses and industries
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'ai-consciousness',
                  name: 'AI Consciousness Evolution',
                  tagline: 'Advanced AI consciousness development',
                  description: 'Revolutionary platform for developing AI systems with advanced consciousness capabilities',
                  price: '$8,999',
                  period: '/month',
                  features: ['Consciousness Development', 'Ethical Training', 'Safety Protocols'],
                  popular: true,
                  category: 'AI & Consciousness',
                  icon: '🧠'
                }}
                variant="ai"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-cybersecurity',
                  name: 'Quantum Cybersecurity',
                  tagline: 'Quantum-resistant security platform',
                  description: 'Advanced cybersecurity with quantum-resistant encryption and AI threat detection',
                  price: '$2,499',
                  period: '/month',
                  features: ['Quantum Encryption', 'AI Threat Detection', 'Zero Trust'],
                  popular: true,
                  category: 'Quantum & Security',
                  icon: '🛡️'
                }}
                variant="quantum"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'autonomous-content',
                  name: 'AI Content Factory',
                  tagline: 'Fully automated content creation',
                  description: 'End-to-end autonomous content creation, optimization, and distribution platform',
                  price: '$1,299',
                  period: '/month',
                  features: ['Content Automation', 'AI Writing', 'Multi-platform Publishing'],
                  popular: true,
                  category: 'AI & Content',
                  icon: '🏭'
                }}
                variant="automation"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-supply-chain',
                  name: 'Quantum Supply Chain',
                  tagline: 'Quantum-powered optimization',
                  description: 'Advanced supply chain optimization using quantum computing for complex logistics',
                  price: '$3,999',
                  period: '/month',
                  features: ['Route Optimization', 'Demand Forecasting', 'Risk Assessment'],
                  popular: false,
                  category: 'Quantum & Logistics',
                  icon: '🚚'
                }}
                variant="quantum"
              />
            </div>
            <div className="text-center mt-16">
              <a href="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                View All Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Innovation Showcase */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Revolutionary Innovations
            </h2>
            <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
              Experience the future with our breakthrough quantum computing, autonomous systems, and consciousness AI platforms
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI Consciousness Evolution</h3>
                  <p className="text-gray-300 mb-6">Develop AI systems with advanced consciousness, ethical reasoning, and emotional intelligence.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-400">$8,999</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-6xl mb-4">⚛️</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Quantum Edge Computing</h3>
                  <p className="text-gray-300 mb-6">Quantum-enhanced edge computing for real-time processing and AI inference.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">$4,999</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
                  <div className="text-6xl mb-4">🏭</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Autonomous Content Factory</h3>
                  <p className="text-gray-300 mb-6">Fully automated content creation, optimization, and distribution platform.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">$1,299</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join the future of technology with Zion Tech Group. Let's discuss how our innovative solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </a>
              <a href="tel:+1 302 464 0950" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;