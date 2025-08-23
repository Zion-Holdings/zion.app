import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Network, Lock, Atom, Globe, Cpu, Zap, Eye, Key, CheckCircle } from 'lucide-react';

const QuantumInternetSecurity2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-cyan-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
                <Shield className="w-4 h-4" />
                Quantum Internet Security 2041
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Quantum Internet Security 2041
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Next-generation quantum-secured internet infrastructure with unbreakable encryption and quantum-resistant protocols
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                  Secure Your Network
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-300 rounded-2xl hover:bg-blue-500/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Security Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Advanced quantum technologies that provide unprecedented levels of internet security and privacy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8 text-blue-400" />,
                  title: "Quantum Encryption",
                  description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms"
                },
                {
                  icon: <Network className="w-8 h-8 text-cyan-400" />,
                  title: "Quantum Networks",
                  description: "Secure quantum communication channels with instant threat detection"
                },
                {
                  icon: <Shield className="w-8 h-8 text-purple-400" />,
                  title: "Quantum Firewalls",
                  description: "Advanced threat protection using quantum computing for real-time analysis"
                },
                {
                  icon: <Lock className="w-8 h-8 text-emerald-400" />,
                  title: "Zero-Trust Security",
                  description: "Continuous verification and authentication at every network level"
                },
                {
                  icon: <Eye className="w-8 h-8 text-orange-400" />,
                  title: "Quantum Monitoring",
                  description: "Real-time security monitoring with quantum-enhanced threat detection"
                },
                {
                  icon: <Key className="w-8 h-8 text-yellow-400" />,
                  title: "Quantum Key Management",
                  description: "Secure key generation, distribution, and management systems"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Security Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive protection for your digital infrastructure and communications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Unbreakable Encryption",
                  description: "Quantum-resistant algorithms that cannot be cracked by classical or quantum computers",
                  icon: <Lock className="w-12 h-12 text-blue-400" />
                },
                {
                  title: "Instant Threat Detection",
                  description: "Real-time monitoring and immediate response to security threats",
                  icon: <Eye className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: "Global Security",
                  description: "Worldwide protection with quantum-secured communication channels",
                  icon: <Globe className="w-12 h-12 text-purple-400" />
                },
                {
                  title: "Future-Proof Protection",
                  description: "Security that evolves with emerging threats and technologies",
                  icon: <Shield className="w-12 h-12 text-emerald-400" />
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 text-lg">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Quantum Security?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Protect your digital future with the most advanced internet security technology
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                Get Protected
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumInternetSecurity2041;