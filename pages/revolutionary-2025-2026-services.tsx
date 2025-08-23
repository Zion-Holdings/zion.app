import React from 'react';
import SEO from '../components/SEO';
import Revolutionary20252026ServicesShowcase from '../components/sections/Revolutionary20252026ServicesShowcase';
import { 
  Brain, Atom, Cloud, Shield, Sparkles, TrendingUp, 
  Zap, Users, Award, Phone, Mail, Globe as GlobeIcon 
} from 'lucide-react';

const Revolutionary20252026ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Revolutionary 2025-2026 Services | Zion Tech Group"
        description="Experience the future of technology with our cutting-edge micro SAAS, AI, and IT infrastructure solutions. Built for tomorrow, available today."
        keywords="revolutionary services, 2025, 2026, micro SAAS, AI services, IT infrastructure, quantum computing, autonomous systems, cutting-edge technology"
        image="/og-revolutionary-services-2025-2026.jpg"
        canonical="https://ziontechgroup.com/revolutionary-2025-2026-services"
      />
      
      <Revolutionary20252026ServicesShowcase />
      
      {/* Additional Content Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our Revolutionary Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services are designed to give you a competitive edge in the rapidly evolving technology landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">First-to-Market Solutions</h3>
              <p className="text-gray-300">
                Be among the first to leverage cutting-edge technologies like quantum computing, autonomous AI, and quantum-resistant security.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI & Results</h3>
              <p className="text-gray-300">
                Our services deliver measurable results with proven ROI improvements ranging from 25% to 90% across different domains.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise-Grade Security</h3>
              <p className="text-gray-300">
                Built with quantum-resistant encryption and advanced security measures to protect your most critical assets.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Implementation</h3>
              <p className="text-gray-300">
                Get up and running quickly with our streamlined setup processes and comprehensive support.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Support</h3>
              <p className="text-gray-300">
                Access to our team of technology experts and dedicated support to ensure your success.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Industry Recognition</h3>
              <p className="text-gray-300">
                Trusted by leading companies across industries for our innovative solutions and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Stack Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Built with Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary services leverage the latest advancements in AI, quantum computing, and cloud infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-gray-400">TensorFlow, PyTorch, Custom Models</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
              <p className="text-sm text-gray-400">Qiskit, Quantum Algorithms</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cloud Native</h3>
              <p className="text-sm text-gray-400">Kubernetes, Docker, Microservices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Advanced Security</h3>
              <p className="text-sm text-gray-400">Quantum-Resistant, Zero-Trust</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team today to learn how our revolutionary services can transform your business and give you a competitive edge in 2025 and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call +1 302 464 0950</span>
            </a>
            
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Revolutionary Services Inquiry"
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-2">Visit our headquarters:</p>
            <p className="text-white">
              364 E Main St STE 1008<br />
              Middletown DE 19709
            </p>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mt-2"
            >
              <GlobeIcon className="w-4 h-4" />
              <span>ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Revolutionary20252026ServicesPage;