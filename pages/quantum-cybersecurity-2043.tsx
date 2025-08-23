import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Atom, Zap, Target, Users, Award, CheckCircle,
  Cpu, Database, Lock, Globe, Rocket, AlertTriangle,
  Star, Sparkles, ArrowRight, Eye, Key, Server
} from 'lucide-react';

const QuantumCybersecurity2043: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quantum-Resistant Encryption",
      description: "Advanced encryption algorithms that resist quantum computing attacks",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Key Distribution",
      description: "Unbreakable encryption keys using quantum entanglement principles",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "AI-Powered Threat Detection",
      description: "Intelligent systems that identify and neutralize cyber threats in real-time",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Zero-Trust Architecture",
      description: "Comprehensive security model that verifies every access attempt",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Quantum-Secure Infrastructure",
      description: "Hardened systems designed to withstand quantum computing attacks",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Automated Response",
      description: "Instant threat response and recovery systems with minimal downtime",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Future-Proof Security",
      description: "Protection against current and future quantum computing threats"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Real-Time Protection",
      description: "24/7 monitoring and instant threat response capabilities"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "AI Intelligence",
      description: "Advanced AI systems that learn and adapt to new threats"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Compliance Ready",
      description: "Built-in compliance with industry standards and regulations"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Scalable Protection",
      description: "Security that grows with your organization and infrastructure"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Cost Effective",
      description: "Reduce security incidents and minimize financial impact"
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Protect financial transactions and customer data with quantum security",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Healthcare",
      description: "Secure patient data and medical systems with quantum encryption",
      icon: <Lock className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Government",
      description: "National security and classified information protection",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Critical Infrastructure",
      description: "Protect power grids, water systems, and transportation networks",
      icon: <Server className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Cloud Services",
      description: "Secure cloud infrastructure and data storage systems",
      icon: <Database className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "IoT Networks",
      description: "Protect connected devices and smart city infrastructure",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "99.99%", label: "Threat Detection", description: "Advanced AI threat detection rate" },
    { number: "0ms", label: "Response Time", description: "Instant threat response and mitigation" },
    { number: "24/7", label: "Protection", description: "Continuous security monitoring" },
    { number: "150+", label: "Countries", description: "Global security coverage" }
  ];

  const securityLayers = [
    {
      title: "Network Security",
      description: "Advanced firewall, intrusion detection, and network monitoring",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Endpoint Protection",
      description: "Device-level security with AI-powered threat detection",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Encryption",
      description: "Quantum-resistant encryption for data at rest and in transit",
      icon: <Lock className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Identity Management",
      description: "Multi-factor authentication and zero-trust access control",
      icon: <Key className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Threat Intelligence",
      description: "Real-time threat feeds and predictive security analytics",
      icon: <Eye className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Incident Response",
      description: "Automated threat response and recovery systems",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary Cybersecurity 2043
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                  Quantum Cybersecurity 2043
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Experience the future of cybersecurity with quantum-resistant encryption, 
                AI-powered threat detection, and zero-trust architecture. Protect your 
                organization against current and future cyber threats with the most advanced 
                security platform ever developed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25 focus:outline-none focus:ring-4 focus:ring-red-500/50"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  Explore All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Quantum Cybersecurity platform combines cutting-edge quantum technology 
                with advanced AI to provide unprecedented protection against cyber threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-red-500/5 via-orange-500/5 to-yellow-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Quantum Cybersecurity?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of quantum-resistant security combined with AI intelligence 
                to protect your organization against the most sophisticated cyber threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Protect Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Quantum Cybersecurity technology is safeguarding critical industries 
                across the globe with advanced threat protection and quantum-resistant security.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 mb-6 rounded-xl bg-gradient-to-r ${useCase.color} flex items-center justify-center text-white`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Layers Section */}
        <section className="py-20 bg-gradient-to-r from-red-500/5 via-orange-500/5 to-yellow-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multi-Layer Security Architecture
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience comprehensive protection with our layered security approach 
                that covers every aspect of your digital infrastructure.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityLayers.map((layer, index) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 mb-6 rounded-xl bg-gradient-to-r ${layer.color} flex items-center justify-center text-white`}>
                    {layer.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{layer.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{layer.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Deep Dive */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Security Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform leverages the latest breakthroughs in quantum computing, 
                artificial intelligence, and cybersecurity to deliver superior protection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Quantum Security</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Quantum Key Distribution</h4>
                      <p className="text-gray-300 text-sm">Unbreakable encryption using quantum entanglement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Post-Quantum Cryptography</h4>
                      <p className="text-gray-300 text-sm">Algorithms resistant to quantum computing attacks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Quantum Random Number Generation</h4>
                      <p className="text-gray-300 text-sm">True randomness for cryptographic keys</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">AI & Machine Learning</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Behavioral Analysis</h4>
                      <p className="text-gray-300 text-sm">AI-powered user and system behavior monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Threat Intelligence</h4>
                      <p className="text-gray-300 text-sm">Real-time threat detection and analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Automated Response</h4>
                      <p className="text-gray-300 text-sm">Instant threat mitigation and recovery</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 rounded-3xl p-12 border border-red-500/20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Secure Your Future?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join the quantum revolution in cybersecurity. Our platform is ready to 
                protect your organization against the most sophisticated cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25 focus:outline-none focus:ring-4 focus:ring-red-500/50"
                >
                  Start Your Journey
                </a>
                <a
                  href="/pricing"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumCybersecurity2043;