import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Atom, Brain, Shield, Cloud, Server, Database, Network, Zap, Target, Users, 
  Heart, DollarSign, Cog, FileText, Calendar, Lightbulb, HelpCircle, Monitor,
  Star, Award, TrendingUp, Globe, Lock, Rocket, Palette, Cpu, Layers, Globe2
} from 'lucide-react';

const QuantumServicesPage: React.FC = () => {
  const quantumServices = [
    {
      category: 'Quantum Computing Infrastructure',
      services: [
        {
          name: 'Quantum Cloud Infrastructure 2045',
          description: 'Next-generation quantum cloud computing platform with consciousness integration',
          href: '/quantum-cloud-infrastructure-2045',
          icon: <Cloud className="w-6 h-6" />,
          features: ['Quantum Processing Units', 'Quantum Memory', 'Quantum Networking', 'Scalable Architecture'],
          badge: 'Revolutionary'
        },
        {
          name: 'Quantum Data Center Management',
          description: 'Advanced quantum data center operations and optimization',
          href: '/quantum-data-center-management-2044',
          icon: <Server className="w-6 h-6" />,
          features: ['Quantum Resource Management', 'Energy Optimization', 'Security Protocols', 'Performance Monitoring'],
          badge: 'Advanced'
        },
        {
          name: 'Quantum Storage Solutions',
          description: 'Quantum-enhanced storage systems with unprecedented capacity and speed',
          href: '/quantum-storage-solutions-2044',
          icon: <Database className="w-6 h-6" />,
          features: ['Quantum Memory', 'Superposition Storage', 'Entanglement Backup', 'Quantum Compression'],
          badge: 'Innovative'
        }
      ]
    },
    {
      category: 'Quantum AI & Neural Networks',
      services: [
        {
          name: 'Quantum AI Neural Networks',
          description: 'Quantum-powered artificial intelligence with consciousness integration',
          href: '/quantum-ai-neural-network-platform-2045',
          icon: <Brain className="w-6 h-6" />,
          features: ['Quantum Neural Processing', 'Consciousness Integration', 'Superposition Learning', 'Entanglement Intelligence'],
          badge: 'Featured'
        },
        {
          name: 'Quantum AI Cognitive Platform',
          description: 'Advanced quantum cognitive computing for human-like intelligence',
          href: '/quantum-ai-cognitive',
          icon: <Brain className="w-6 h-6" />,
          features: ['Quantum Cognition', 'Emotional Intelligence', 'Pattern Recognition', 'Decision Making'],
          badge: 'Hot'
        },
        {
          name: 'Quantum AI Fusion Platform',
          description: 'Hybrid quantum-classical AI systems for optimal performance',
          href: '/quantum-ai-fusion-platform',
          icon: <Zap className="w-6 h-6" />,
          features: ['Hybrid Processing', 'Quantum-Classical Integration', 'Adaptive Algorithms', 'Performance Optimization'],
          badge: 'Trending'
        }
      ]
    },
    {
      category: 'Quantum Cybersecurity',
      services: [
        {
          name: 'Quantum Cybersecurity Platform',
          description: 'Quantum-resistant security solutions for the post-quantum era',
          href: '/quantum-cybersecurity-platform-2045',
          icon: <Shield className="w-6 h-6" />,
          features: ['Quantum-Resistant Encryption', 'Post-Quantum Cryptography', 'Threat Detection', 'Security Automation'],
          badge: 'Critical'
        },
        {
          name: 'Quantum Internet Security',
          description: 'Secure quantum internet infrastructure and protocols',
          href: '/quantum-internet-security-platform',
          icon: <Network className="w-6 h-6" />,
          features: ['Quantum Key Distribution', 'Secure Communication', 'Network Protection', 'Protocol Security'],
          badge: 'Strategic'
        },
        {
          name: 'Quantum Threat Detection',
          description: 'Advanced quantum-powered threat detection and response',
          href: '/quantum-threat-detection',
          icon: <Shield className="w-6 h-6" />,
          features: ['Quantum Sensing', 'Real-time Detection', 'Predictive Analysis', 'Automated Response'],
          badge: 'Defense'
        }
      ]
    },
    {
      category: 'Quantum Industry Solutions',
      services: [
        {
          name: 'Quantum Financial Intelligence',
          description: 'Quantum computing for advanced financial analysis and trading',
          href: '/quantum-financial-intelligence',
          icon: <DollarSign className="w-6 h-6" />,
          features: ['Portfolio Optimization', 'Risk Assessment', 'Trading Algorithms', 'Market Analysis'],
          badge: 'Financial'
        },
        {
          name: 'Quantum Materials Discovery',
          description: 'Quantum computing for advanced materials research and development',
          href: '/quantum-materials-discovery-platform',
          icon: <Atom className="w-6 h-6" />,
          features: ['Molecular Simulation', 'Property Prediction', 'Discovery Automation', 'Optimization'],
          badge: 'Research'
        },
        {
          name: 'Quantum Logistics Optimization',
          description: 'Quantum-powered supply chain and logistics optimization',
          href: '/quantum-logistics-optimization',
          icon: <Globe2 className="w-6 h-6" />,
          features: ['Route Optimization', 'Supply Chain Management', 'Resource Allocation', 'Efficiency Improvement'],
          badge: 'Logistics'
        }
      ]
    }
  ];

  const features = [
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Supremacy',
      description: 'Achieve computational power beyond classical computing limits'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quantum Security',
      description: 'Unbreakable encryption and quantum-resistant security protocols'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Quantum Speed',
      description: 'Exponential performance improvements for complex calculations'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Quantum Network',
      description: 'Worldwide quantum internet infrastructure and connectivity'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Qubits Available', icon: <Atom className="w-6 h-6" /> },
    { number: '99.99%', label: 'Quantum Fidelity', icon: <Star className="w-6 h-6" /> },
    { number: '100x', label: 'Speed Improvement', icon: <Zap className="w-6 h-6" /> },
    { number: '24/7', label: 'Quantum Monitoring', icon: <Monitor className="w-6 h-6" /> }
  ];

  return (
    <Layout
      title="Quantum Services - Zion Tech Group"
      description="Revolutionary quantum computing services including infrastructure, AI integration, cybersecurity, and industry solutions. Experience the future of computing with quantum technology."
      keywords="quantum services, quantum computing, quantum AI, quantum cybersecurity, quantum infrastructure, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/quantum-services"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Quantum Computing Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of computing with our revolutionary quantum technology services. 
              From quantum AI to quantum cybersecurity, unlock unprecedented computational power.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
              >
                Explore Quantum
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quantum computing represents the next frontier in computational power, 
              offering solutions to problems that are impossible for classical computers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-gradient-to-r from-blue-900/10 to-indigo-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Quantum Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From quantum infrastructure to industry-specific solutions, 
              we provide the complete spectrum of quantum computing services.
            </p>
          </motion.div>

          <div className="space-y-16">
            {quantumServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center">
                            {service.icon}
                          </div>
                          {service.badge && (
                            <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 rounded-full border border-blue-500/30">
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <Star className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 rounded-lg border border-blue-500/30 hover:from-blue-500/30 hover:to-indigo-500/30 transition-all duration-200"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Quantum Computing Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries and solving 
              previously intractable problems across various domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cryptography & Security',
                description: 'Quantum-resistant encryption and secure communication protocols',
                icon: <Lock className="w-8 h-8" />,
                applications: ['Post-Quantum Cryptography', 'Quantum Key Distribution', 'Secure Communications']
              },
              {
                title: 'Drug Discovery',
                description: 'Accelerated molecular simulation and drug development',
                icon: <Atom className="w-8 h-8" />,
                applications: ['Molecular Modeling', 'Protein Folding', 'Drug Optimization']
              },
              {
                title: 'Financial Modeling',
                description: 'Advanced portfolio optimization and risk assessment',
                icon: <DollarSign className="w-8 h-8" />,
                applications: ['Portfolio Optimization', 'Risk Analysis', 'Trading Algorithms']
              },
              {
                title: 'Machine Learning',
                description: 'Quantum-enhanced AI and pattern recognition',
                icon: <Brain className="w-8 h-8" />,
                applications: ['Quantum Neural Networks', 'Pattern Recognition', 'Optimization']
              },
              {
                title: 'Logistics',
                description: 'Complex optimization problems in supply chain management',
                icon: <Globe2 className="w-8 h-8" />,
                applications: ['Route Optimization', 'Resource Allocation', 'Supply Chain Management']
              },
              {
                title: 'Climate Modeling',
                description: 'Advanced climate simulation and prediction models',
                icon: <Globe className="w-8 h-8" />,
                applications: ['Weather Prediction', 'Climate Analysis', 'Environmental Modeling']
              }
            ].map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{app.title}</h3>
                <p className="text-gray-400 mb-4 text-center">{app.description}</p>
                <ul className="space-y-2">
                  {app.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-3xl p-12 border border-blue-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience Quantum Computing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the quantum revolution and discover how our cutting-edge quantum computing 
                services can solve your most complex challenges and unlock new possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                >
                  Start Quantum Journey
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default QuantumServicesPage;