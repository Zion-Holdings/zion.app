import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Database, Network, Brain, Atom, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

export default function QuantumComputing() {
  const quantumServices = [
    {
      title: 'Quantum Cybersecurity',
      description: 'Advanced quantum-resistant encryption and security protocols',
      href: '/quantum-cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random Number Generation']
    },
    {
      title: 'Quantum AI Integration',
      description: 'Hybrid quantum-classical AI systems for unprecedented computational power',
      href: '/quantum-ai-cognitive',
      icon: <Brain className="w-8 h-8" />,
      features: ['Quantum Machine Learning', 'Neural Network Optimization', 'AI-Quantum Hybrid Computing']
    },
    {
      title: 'Quantum Cloud Infrastructure',
      description: 'Scalable quantum computing resources in the cloud',
      href: '/quantum-cloud-infrastructure',
      icon: <Network className="w-8 h-8" />,
      features: ['Quantum Processing Units', 'Hybrid Computing', 'Cloud Integration']
    },
    {
      title: 'Quantum Blockchain',
      description: 'Next-generation blockchain technology powered by quantum computing',
      href: '/quantum-blockchain',
      icon: <Database className="w-8 h-8" />,
      features: ['Quantum-Secure Transactions', 'Enhanced Consensus', 'Quantum Mining']
    },
    {
      title: 'Quantum Financial Trading',
      description: 'Revolutionary trading algorithms using quantum optimization',
      href: '/quantum-financial-trading',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Portfolio Optimization', 'Risk Analysis', 'Market Prediction']
    },
    {
      title: 'Quantum Internet',
      description: 'Building the foundation for quantum communication networks',
      href: '/quantum-internet-security-platform',
      icon: <Globe className="w-8 h-8" />,
      features: ['Quantum Networking', 'Secure Communication', 'Distributed Computing']
    }
  ];

  const benefits = [
    'Exponential computational speedup for complex problems',
    'Unbreakable quantum encryption and security',
    'Revolutionary optimization capabilities',
    'Enhanced AI and machine learning performance',
    'Future-proof technology infrastructure',
    'Competitive advantage in quantum-ready markets'
  ];

  return (
    <Layout>
      <SEO 
        title="Quantum Computing Solutions | Zion Tech Group"
        description="Explore our cutting-edge quantum computing services including quantum AI, cybersecurity, blockchain, and cloud infrastructure. Leading the quantum revolution."
        keywords={["quantum computing", "quantum AI", "quantum cybersecurity", "quantum blockchain", "quantum cloud", "quantum technology"]}
      />

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Atom className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">
                Quantum Computing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Harness the power of quantum mechanics to solve previously impossible problems. 
                Our quantum computing solutions provide exponential advantages in computation, security, and optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Quantum Journey
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Explore All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quantum Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Quantum Services Portfolio</h2>
              <p className="text-xl text-gray-300">Comprehensive quantum computing solutions for enterprise</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quantumServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <a
                    href={service.href}
                    className="block p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Quantum Computing?</h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Quantum computing represents the next frontier in computational power, 
                  offering unprecedented capabilities that classical computers cannot match.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <div className="w-full h-80 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Atom className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Quantum Advantage</h3>
                    <p className="text-gray-300">Exponential computational power</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Enter the Quantum Era?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the quantum revolution and unlock computational capabilities that were once thought impossible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/quantum-cybersecurity"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Explore Quantum Security
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}