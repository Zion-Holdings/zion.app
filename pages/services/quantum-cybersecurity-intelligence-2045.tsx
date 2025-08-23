import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Atom, Brain, Zap, Lock, Globe, Star, CheckCircle, ArrowRight, Eye, Cpu } from 'lucide-react';

const QuantumCybersecurityIntelligence: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Quantum Encryption",
      description: "Unbreakable quantum encryption for ultimate data protection"
    },
    {
      icon: Brain,
      title: "AI Threat Detection",
      description: "Advanced AI consciousness for intelligent threat identification"
    },
    {
      icon: Atom,
      title: "Quantum Security",
      description: "Quantum-resistant security protocols and systems"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 quantum-powered security monitoring and response"
    }
  ];

  const benefits = [
    "Unbreakable quantum encryption",
    "AI-powered threat intelligence",
    "Real-time security monitoring",
    "Quantum-resistant protocols",
    "Global security network"
  ];

  const useCases = [
    "Financial Institutions",
    "Healthcare Organizations",
    "Government Agencies",
    "Critical Infrastructure",
    "Enterprise Networks"
  ];

  return (
    <Layout
      title="Quantum Cybersecurity Intelligence 2045 - Zion Tech Group"
      description="Revolutionary quantum cybersecurity intelligence platform with AI consciousness and unbreakable quantum encryption for ultimate protection."
      keywords="quantum cybersecurity, AI threat detection, quantum encryption, security intelligence, cyber protection, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services/quantum-cybersecurity-intelligence-2045"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Quantum Cybersecurity
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Intelligence 2045
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of cybersecurity with our revolutionary quantum intelligence platform. 
                Combining unbreakable quantum encryption with AI consciousness for ultimate protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2">
                  Get Protected
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-red-500 hover:text-red-400 transition-all duration-300">
                  Security Assessment
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Security Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover the cutting-edge security capabilities that make our quantum cybersecurity platform 
                the most advanced in the world.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ultimate Protection
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Unlock unprecedented security with quantum cybersecurity integration.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Key Benefits
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Protected Industries
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-red-400" />
                        <span className="text-gray-300">{useCase}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready for Ultimate Security?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the future of cybersecurity and quantum protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300">
                  Secure Your Systems
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-red-500 hover:text-red-400 transition-all duration-300">
                  Schedule Security Audit
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumCybersecurityIntelligence;