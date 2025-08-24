import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Lock, 
  Shield, 
  Network, 
  Eye, 
  Key, 
  Zap, 
  Server, 
  Database,
  CheckCircle,
  BarChart3,
  ArrowRight,
  Star,
  Sparkles,
  Layers,
  Target,
  Users,
  Cloud,
  Brain,
  Atom
} from 'lucide-react';

const ZeroTrustQuantumNetwork: React.FC = () => {
  const features = [
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description: "Implement zero trust security principles with continuous verification and never-trust, always-verify approach."
    },
    {
      icon: Atom,
      title: "Quantum Encryption",
      description: "Unbreakable quantum encryption algorithms that protect data at the atomic level with quantum key distribution."
    },
    {
      icon: Network,
      title: "Quantum Network Security",
      description: "Advanced network security protocols that detect and prevent threats using quantum computing capabilities."
    },
    {
      icon: Eye,
      title: "Continuous Monitoring",
      description: "24/7 surveillance of network traffic with real-time threat detection and automated response systems."
    },
    {
      icon: Key,
      title: "Quantum Identity Management",
      description: "Quantum-verified identity authentication with multi-factor verification and continuous validation."
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Hardened network infrastructure with quantum-secured endpoints and intrusion prevention."
    }
  ];

  const benefits = [
    "Unbreakable quantum-level security",
    "Continuous verification and monitoring",
    "Zero trust architecture implementation",
    "Real-time threat detection and response",
    "Compliance with security standards",
    "Scalable security for any organization"
  ];

  const securityLayers = [
    {
      title: "Network Perimeter",
      description: "Quantum-encrypted network boundaries with advanced firewall protection and intrusion detection."
    },
    {
      title: "Identity Verification",
      description: "Multi-factor authentication with quantum-verified credentials and continuous validation."
    },
    {
      title: "Data Protection",
      description: "End-to-end encryption using quantum algorithms for maximum data security and privacy."
    },
    {
      title: "Threat Intelligence",
      description: "AI-powered threat detection with quantum computing for advanced security analytics."
    }
  ];

  const complianceStandards = [
    "SOC 2 Type II",
    "ISO 27001",
    "NIST Cybersecurity Framework",
    "GDPR",
    "HIPAA",
    "PCI DSS"
  ];

  return (
    <Layout
      title="Zero Trust Quantum Network - Zion Tech Group"
      description="Revolutionary zero trust network security platform combining quantum encryption with advanced threat detection for unparalleled protection."
      keywords="zero trust, quantum network, network security, quantum encryption, cybersecurity, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                <Lock className="w-4 h-4 mr-2" />
                Zero Trust Quantum Security
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zero Trust
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Quantum Network
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of network security with our revolutionary Zero Trust Quantum Network. 
                Combining unbreakable quantum encryption with zero trust principles for maximum protection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Secure Network
                </button>
                <button className="px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300">
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The most advanced network security platform ever created
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Layers Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Multi-Layer Security Architecture
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive protection at every level of your network infrastructure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityLayers.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{layer.title}</h3>
                  <p className="text-gray-300">{layer.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance & Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Meet and exceed industry security standards and compliance requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
                >
                  <span className="text-red-400 text-sm font-medium">{standard}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zero Trust Quantum Security?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Unparalleled protection for your network infrastructure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 bg-white/5 border border-white/10 rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Secure Your Network Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the quantum revolution in network security with our zero trust platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Get Protected
                </button>
                <button className="px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ZeroTrustQuantumNetwork;