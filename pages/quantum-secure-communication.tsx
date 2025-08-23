import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Shield, Lock, TrendingUp as TrendingUpIcon, Phone, Rocket, ArrowRight
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';

export default function QuantumSecureCommunication() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    'Quantum key distribution (QKD) encryption',
    'End-to-end encryption for all communications',
    'Quantum-resistant algorithms and protocols',
    'Secure file sharing and collaboration tools',
    'Real-time encrypted messaging and video calls',
    'Audit trails and compliance reporting',
    'Multi-platform support (Web, Mobile, Desktop)',
    'Integration with existing communication tools',
    'Advanced threat detection and monitoring',
    '24/7 security monitoring and support'
  ];

  const useCases = [
    'Secure executive communications',
    'Confidential document sharing',
    'Regulated industry compliance',
    'Research collaboration',
    'Government communications'
  ];

  const integrations = [
    'Slack', 'Microsoft Teams', 'Zoom', 'Email systems', 
    'File storage platforms'
  ];

  const technology = [
    'Quantum Computing', 'Post-Quantum Cryptography', 'React', 'Node.js', 
    'WebRTC', 'WebAssembly', 'Docker', 'Kubernetes'
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Quantum-Secure Communication - Zion Tech Group | Unbreakable Encryption</title>
          <meta name="description" content="Unbreakable encryption for the quantum era with quantum key distribution and quantum-resistant protocols. Contact: +1 302 464 0950" />
          <meta name="keywords" content="quantum secure communication, quantum encryption, quantum key distribution, post-quantum cryptography, secure messaging, quantum security" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Quantum-Secure Communication - Zion Tech Group" />
          <meta property="og:description" content="Unbreakable encryption for the quantum era with quantum key distribution. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/quantum-secure-communication" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/quantum-secure-communication" />
        </Head>

        <UltraAdvancedNavigation />

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl shadow-2xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  <Lock className="w-12 h-12 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6"
              >
                Quantum-Secure Communication
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto font-medium"
              >
                Unbreakable encryption for the <span className="text-purple-400 font-bold">quantum era</span>
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Next-generation communication platform that uses quantum cryptography to provide unbreakable encryption for sensitive communications, ensuring your data remains secure even against quantum computers.
              </motion.p>

              {/* Pricing and CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 p-1 rounded-2xl shadow-2xl"
                >
                  <div className="bg-gray-900 rounded-2xl px-8 py-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">$599</div>
                      <div className="text-purple-200 text-lg mb-4">per month</div>
                      <div className="text-gray-300 mb-6">30-day free trial</div>
                      <Button 
                        href="/contact"
                        variant="primary"
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl"
                      >
                        Start Free Trial
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <Button 
                    href="/contact"
                    variant="secondary"
                    className="text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl hover:shadow-green-500/25"
                  >
                    <span className="flex items-center">
                      <Phone className="mr-3 w-5 h-5" />
                      Talk to Expert
                    </span>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-purple-400 mb-2">500% ROI</div>
                  <div className="text-gray-300">Average customer sees 500% ROI through avoided security breaches</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-green-400 mb-2">4 Hours</div>
                  <div className="text-gray-300">Setup time from installation to first secure communication</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-pink-400 mb-2">1200+</div>
                  <div className="text-gray-300">Active customers worldwide</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Quantum Security Features
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Advanced quantum cryptography and security features for unbreakable communications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Use Cases
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Discover how quantum-secure communication protects your most sensitive communications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-6 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors">
                      {useCase}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Integrations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Technology Stack */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-8">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Technology Stack
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {technology.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-gray-800/40 rounded-lg border border-gray-700/50"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-200">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Integrations */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-8">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Integrations
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-gray-800/40 rounded-lg border border-gray-700/50"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-200">{integration}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Market Position & ROI */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Market Position & ROI
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Competitive Advantage</h3>
                <p className="text-gray-300 mb-6">
                  Competitive with Signal (Free), Wickr ($4.99/user/month), and Wire ($5.83/user/month). 
                  Our advantage: Quantum-resistant encryption, enterprise features, and compliance tools.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-200">Quantum-resistant encryption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-200">Enterprise features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-200">Compliance tools</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Return on Investment</h3>
                <div className="text-4xl font-bold text-green-400 mb-4">500% ROI</div>
                <p className="text-gray-300 mb-6">
                  Average customer sees 500% ROI through avoided security breaches and compliance cost savings.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUpIcon className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Avoided security breaches</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUpIcon className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Compliance cost savings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUpIcon className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Future-proof security</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Quantum-Secure Communication?
              </h2>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Join 1200+ organizations that have already secured their communications with quantum cryptography.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    href="/contact"
                    variant="primary"
                    className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/25"
                  >
                    <span className="flex items-center">
                      <Rocket className="mr-3 w-5 h-5" />
                      Start Free Trial
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </span>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <Button 
                    href="/contact"
                    variant="secondary"
                    className="text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl hover:shadow-green-500/25"
                  >
                    <span className="flex items-center">
                      <Phone className="mr-3 w-5 h-5" />
                      Talk to Expert
                    </span>
                  </Button>
                </motion.div>
              </div>

              <div className="mt-8 text-gray-400">
                <p>Contact us: <a href={`tel:${contactInfo.mobile}`} className="text-purple-400 hover:text-purple-300">{contactInfo.mobile}</a> | <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300">{contactInfo.email}</a></p>
                <p className="mt-2">{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}