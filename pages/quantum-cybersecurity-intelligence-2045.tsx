import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Atom, Lock, Eye, Zap, CheckCircle, ArrowRight, Star, Globe, Cpu, Brain, Target } from 'lucide-react';

const QuantumCybersecurityIntelligence: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Quantum Encryption",
      description: "Unbreakable quantum-resistant cryptography",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Atom,
      title: "Quantum Detection",
      description: "Advanced threat detection using quantum algorithms",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Comprehensive security framework",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Eye,
      title: "AI Monitoring",
      description: "Intelligent security surveillance",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const securityFeatures = [
    "Quantum-resistant encryption algorithms",
    "Real-time threat intelligence",
    "AI-powered anomaly detection",
    "Automated incident response",
    "Compliance automation",
    "Multi-layered security architecture"
  ];

  const protectionAreas = [
    {
      title: "Network Security",
      description: "Advanced firewall and intrusion prevention",
      icon: Shield
    },
    {
      title: "Data Protection",
      description: "Quantum encryption for sensitive information",
      icon: Lock
    },
    {
      title: "Identity Management",
      description: "Multi-factor authentication and access control",
      icon: Eye
    },
    {
      title: "Cloud Security",
      description: "Secure cloud infrastructure protection",
      icon: Globe
    }
  ];

  return (
    <Layout
      title="Quantum Cybersecurity Intelligence 2045 - Zion Tech Group"
      description="Revolutionary quantum cybersecurity platform with AI intelligence, quantum encryption, and advanced threat detection for ultimate security protection."
      keywords="quantum cybersecurity, AI security, threat detection, quantum encryption, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 text-red-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Quantum Security Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Quantum Cybersecurity
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Intelligence
                </span>
                <span className="block text-3xl md:text-4xl text-gray-300 mt-4">2045 Edition</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of cybersecurity with our revolutionary quantum security platform. 
                Combining quantum encryption with AI intelligence for unprecedented protection against evolving threats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-red-500/30 text-red-300 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300"
                >
                  Security Assessment
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the cutting-edge capabilities that make our quantum cybersecurity platform truly revolutionary
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-white/10 hover:border-white/20 transition-all duration-300 h-full`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 bg-gradient-to-r from-red-500/5 to-orange-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Security Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock unprecedented security protection with our quantum cybersecurity platform
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Protection Areas Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform protects every aspect of your digital infrastructure
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {protectionAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                  <p className="text-gray-300 text-lg">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Secure Your Future?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join the quantum security revolution and protect your digital assets with unprecedented security.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 text-lg"
                >
                  Get Protected Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumCybersecurityIntelligence;