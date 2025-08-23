import React from 'react';
import SEO from '../components/SEO';
import CuttingEdgeServicesShowcase2025 from '../components/sections/2025CuttingEdgeServicesShowcase';

const CuttingEdgeServices2025: React.FC = () => {
  return (
    <>
      <SEO
        title="2025 Cutting-Edge Innovative Services | Zion Tech Group"
        description="Discover our latest cutting-edge micro SAAS, IT, and AI solutions designed to transform your business operations and drive growth in 2025. From AI-powered automation to quantum computing solutions."
        keywords={["2025 innovative services", "cutting-edge AI solutions", "micro SAAS services", "enterprise IT solutions", "quantum computing", "blockchain services", "IoT solutions", "Zion Tech Group"]}
        image="https://ziontechgroup.com/og-2025-cutting-edge-services.jpg"
        url="https://ziontechgroup.com/2025-cutting-edge-services"
      />
      
      <CuttingEdgeServicesShowcase2025 />
      
      {/* Additional Information Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our 2025 Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge services are built on the latest technologies and designed to address real business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation First</h3>
              <p className="text-gray-300">
                We stay ahead of the curve with the latest AI, quantum computing, and emerging technologies
              </p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real Business Value</h3>
              <p className="text-gray-300">
                Every service is designed to deliver measurable ROI and solve actual business problems
              </p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Easy Implementation</h3>
              <p className="text-gray-300">
                Quick setup times and comprehensive support to get you up and running fast
              </p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">
                Track record of successful implementations with satisfied customers worldwide
              </p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Continuous Updates</h3>
              <p className="text-gray-300">
                Regular feature updates and improvements to keep your business ahead of the competition
              </p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Support</h3>
              <p className="text-gray-300">
                Dedicated support team and comprehensive documentation for seamless operation
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Stack Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built on Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services leverage the latest advancements in AI, quantum computing, blockchain, and more
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI & ML</h3>
              <p className="text-gray-400 text-sm">GPT-4, Claude, Custom Models</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚛️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
              <p className="text-gray-400 text-sm">IBM Qiskit, Google Cirq</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔗</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Blockchain</h3>
              <p className="text-gray-400 text-sm">Ethereum, Hyperledger, Smart Contracts</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Edge Computing</h3>
              <p className="text-gray-400 text-sm">IoT, Edge AI, Real-time Processing</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="bg-gradient-to-r from-cyan-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our cutting-edge services can transform your business operations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=2025 Cutting-Edge Services Inquiry"
              className="bg-white text-cyan-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-cyan-900 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Mobile</h3>
              <p className="text-cyan-200">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-cyan-200">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-cyan-200 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CuttingEdgeServices2025;