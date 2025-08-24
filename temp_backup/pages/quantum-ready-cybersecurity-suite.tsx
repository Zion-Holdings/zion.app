import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, ArrowRight, Star, Shield, Lock, Zap, 
  BarChart3, Target, Cpu, Globe, Eye, Award
} from 'lucide-react';

const QuantumReadyCybersecuritySuite = () => {
  const features = [
    'Post-quantum cryptography algorithms',
    'Quantum-resistant key management',
    'Advanced threat detection with AI',
    'Zero-trust architecture implementation',
    'Real-time security monitoring',
    'Compliance reporting (SOC2, ISO27001)',
    'Quantum-safe VPN and encryption',
    'Security automation and orchestration'
  ];

  const benefits = [
    'Future-proof against quantum computing threats',
    'Reduce security incidents by 80%',
    'Improve compliance posture significantly',
    'Advanced threat detection and response',
    'Automated security operations',
    'Quantum-resistant encryption standards'
  ];

  const useCases = [
    'Financial institutions requiring quantum security',
    'Healthcare organizations with sensitive data',
    'Government agencies and defense contractors',
    'Enterprise companies with compliance needs',
    'Technology companies handling critical data'
  ];

  const technologies = [
    'Post-quantum cryptography algorithms',
    'AI-powered threat detection',
    'Zero-trust security framework',
    'Quantum-resistant key exchange',
    'Advanced encryption standards',
    'Real-time monitoring systems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO 
        title="Quantum-Ready Cybersecurity Suite | Zion Tech Group"
        description="Post-quantum cryptography and advanced threat detection for the quantum era. Future-proof your security infrastructure with quantum-resistant protocols."
        keywords="quantum cybersecurity, post-quantum cryptography, quantum-resistant security, advanced threat detection, zero-trust security"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-violet-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl mb-6">🔐</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Quantum-Ready Cybersecurity Suite
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Prepare for quantum computing threats with post-quantum cryptography, 
                advanced threat detection, and quantum-resistant security protocols. 
                Future-proof your security infrastructure today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Schedule Security Assessment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Request Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Security Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive quantum-ready cybersecurity starting at $399/month
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Enterprise Security Suite
                </h3>
                <div className="text-6xl font-bold text-purple-600 mb-2">
                  $399
                </div>
                <div className="text-xl text-gray-600">per month</div>
                <p className="text-lg text-gray-600 mt-2">30-day free trial available</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Features:</h4>
                  <ul className="space-y-3">
                    {features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Advanced Features:</h4>
                  <ul className="space-y-3">
                    {features.slice(4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
                >
                  Start Free Trial
                </motion.button>
                <p className="text-sm text-gray-500 mt-3">
                  Free for 30 days • No setup fees • Enterprise support included
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quantum-Ready Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive cybersecurity suite provides protection against both 
              current and future quantum computing threats.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Post-Quantum Cryptography
              </h3>
              <p className="text-gray-600">
                Implement quantum-resistant algorithms that will remain secure even after quantum computers become mainstream.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Threat Detection
              </h3>
              <p className="text-gray-600">
                Advanced AI algorithms detect and respond to threats in real-time, providing proactive security protection.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Zero-Trust Architecture
              </h3>
              <p className="text-gray-600">
                Implement a zero-trust security model that verifies every user and device before granting access.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real-Time Monitoring
              </h3>
              <p className="text-gray-600">
                24/7 security monitoring with instant alerts and automated response capabilities.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Compliance Ready
              </h3>
              <p className="text-gray-600">
                Built-in compliance reporting for SOC2, ISO27001, and other security standards.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quantum-Safe VPN
              </h3>
              <p className="text-gray-600">
                Secure remote access with quantum-resistant encryption and advanced authentication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Security Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Built with the latest security technologies and quantum-resistant algorithms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200"
              >
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tech}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect For Your Organization
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're a financial institution, healthcare provider, or government agency, 
              our quantum-ready security suite provides the protection you need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {useCase}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Proven Security Results
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">80%</div>
              <div className="text-xl">Reduction in Security Incidents</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-xl">Threat Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-xl">Quantum-Ready Protection</div>
            </div>
          </div>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            "Zion Tech Group's quantum-ready cybersecurity suite has transformed our security posture. 
            We're now protected against both current and future threats."
          </p>
          <div className="text-lg font-semibold">- Michael Chen, CISO, GlobalBank</div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Quantum-Ready Security?
            </h2>
            <p className="text-xl text-gray-600">
              Stay ahead of the curve with security that's built for the future
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200"
              >
                <div className="flex items-start">
                  <Star className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg font-semibold text-gray-900">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Future-Proof Your Security?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't wait until quantum computers become a threat. Start protecting your 
            organization today with quantum-ready cybersecurity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition-colors"
            >
              Contact Security Team
            </motion.button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            Questions? Call us at <a href="tel:+13024640950" className="text-purple-600 hover:underline">+1 302 464 0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-purple-600 hover:underline">kleber@ziontechgroup.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default QuantumReadyCybersecuritySuite;