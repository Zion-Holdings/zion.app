import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Network, Users, Zap, Globe, 
  ArrowRight, Star, CheckCircle, TrendingUp,
  Cpu, Database, Lock, Eye, Sparkles,
  BookOpen, Target, MessageCircle, FileText, Atom
} from 'lucide-react';

const QuantumInternetSecurity2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-indigo-900/20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Quantum Internet Security 2041</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Quantum Internet Security 2041
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Next-generation quantum internet security solutions protecting the future of global communications with unbreakable encryption
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Secure Your Network
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Revolutionary Quantum Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our quantum internet security systems provide unprecedented protection against all forms of cyber threats
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8" />,
                  title: "Quantum Key Distribution",
                  description: "Unbreakable encryption keys generated through quantum mechanics principles",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Quantum-Resistant Cryptography",
                  description: "Advanced cryptographic algorithms resistant to quantum computing attacks",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: "Quantum Network Protection",
                  description: "End-to-end quantum security across all network infrastructure",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Real-time Threat Detection",
                  description: "Instant detection and response to quantum-based cyber threats",
                  color: "from-pink-500 to-red-500"
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Quantum Authentication",
                  description: "Multi-factor quantum authentication for maximum security",
                  color: "from-red-500 to-orange-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Zero-Trust Architecture",
                  description: "Quantum-enhanced zero-trust security framework",
                  color: "from-orange-500 to-yellow-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Layers */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Multi-Layer Security Architecture
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security layers ensuring complete protection of quantum internet infrastructure
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Physical Layer", icon: <Atom className="w-6 h-6" />, description: "Quantum hardware security" },
                { name: "Network Layer", icon: <Network className="w-6 h-6" />, description: "Quantum network protection" },
                { name: "Application Layer", icon: <Shield className="w-6 h-6" />, description: "Quantum app security" },
                { name: "Data Layer", icon: <Database className="w-6 h-6" />, description: "Quantum data encryption" }
              ].map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 mb-3">
                    {layer.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{layer.name}</h3>
                  <p className="text-gray-400 text-sm">{layer.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Advanced Quantum Security Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on cutting-edge quantum technologies for maximum security and performance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cpu className="w-8 h-8" />,
                  title: "Quantum Processors",
                  description: "Advanced quantum computing for security operations"
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: "Quantum Networks",
                  description: "Secure quantum communication infrastructure"
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Quantum Databases",
                  description: "Quantum-enhanced data storage and retrieval"
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{tech.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Ready to Secure Your Quantum Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Protect your digital infrastructure with next-generation quantum security
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Get Quantum Security
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
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

export default QuantumInternetSecurity2041;