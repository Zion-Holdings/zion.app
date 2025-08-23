import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Globe, Cpu, Database, 
  Target, Star, Sparkles, Zap, TrendingUp, Award, CheckCircle, Clock,
  ArrowRight, Play, Users, Shield as ShieldIcon, Brain as BrainIcon,
  Lock, Key, Eye, AlertTriangle, Server, Network
} from 'lucide-react';

const QuantumCybersecurity2043: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Quantum-Resistant Encryption",
      description: "Post-quantum cryptography that withstands quantum attacks",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Atom,
      title: "Quantum Key Distribution",
      description: "Unbreakable encryption using quantum entanglement",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      description: "Advanced zero-trust security framework",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Eye,
      title: "AI Threat Detection",
      description: "AI-powered threat detection and response",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Server,
      title: "Quantum-Secure Infrastructure",
      description: "Infrastructure hardened against quantum threats",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Network,
      title: "Quantum Network Security",
      description: "Secure quantum networking protocols",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    "Future-proof quantum-resistant security",
    "Unbreakable quantum encryption",
    "AI-powered threat detection",
    "Zero-trust security architecture",
    "Real-time security monitoring",
    "Compliance with quantum security standards"
  ];

  const useCases = [
    {
      title: "Financial Institutions",
      description: "Secure financial transactions and data",
      icon: Shield
    },
    {
      title: "Healthcare Organizations",
      description: "Protect sensitive patient information",
      icon: Lock
    },
    {
      title: "Government Agencies",
      description: "National security and classified data protection",
      icon: Server
    },
    {
      title: "Critical Infrastructure",
      description: "Secure power grids and transportation systems",
      icon: Network
    }
  ];

  const securityFeatures = [
    "Post-quantum cryptography algorithms",
    "Quantum key distribution (QKD)",
    "AI-powered anomaly detection",
    "Behavioral analysis and threat hunting",
    "Automated incident response",
    "Continuous security monitoring"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
                <Shield className="w-5 h-5 mr-2 text-red-400" />
                <span className="text-red-300">Quantum Cybersecurity 2043</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Quantum Cybersecurity
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Future-proof your security with quantum-resistant encryption, AI-powered threat detection, and zero-trust architecture that protects against tomorrow's threats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
                <button className="px-8 py-4 border border-red-500/30 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Quantum Cybersecurity Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced security features powered by quantum technology and AI
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Quantum Cybersecurity?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of evolving cyber threats with quantum technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-red-400">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-red-500/30"
              >
                <h3 className="text-2xl font-semibold mb-6 text-red-400">
                  Use Cases
                </h3>
                <div className="space-y-4">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start">
                      <useCase.icon className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white">{useCase.title}</h4>
                        <p className="text-gray-300 text-sm">{useCase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security capabilities for the quantum era
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Zap className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready for Quantum Cybersecurity?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Protect your organization with future-proof quantum security
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-red-500/30 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumCybersecurity2043;