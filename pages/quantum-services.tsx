import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Atom, Brain, Shield, Cloud, Server, Database, Network, 
  Rocket, Zap, Target, Users, Heart, DollarSign, Cog, 
  FileText, Calendar, Lightbulb, HelpCircle, Monitor,
  Star, Award, TrendingUp, Globe, Lock, Palette, Building,
  CheckCircle, ArrowRight
} from 'lucide-react';

const QuantumServicesPage: React.FC = () => {
  const quantumServices = [
    {
      category: 'Quantum Computing Solutions',
      services: [
        {
          name: 'Quantum Neural Networks',
          description: 'Next-generation quantum neural networks for solving complex AI problems',
          href: '/quantum-neural-network-platform',
          icon: <Brain className="w-6 h-6" />,
          features: ['Quantum Supremacy', 'Neural Processing', 'AI Acceleration', 'Complex Problem Solving'],
          badge: 'Revolutionary'
        },
        {
          name: 'Quantum Cybersecurity',
          description: 'Quantum-resistant cryptography and security solutions',
          href: '/quantum-cybersecurity-platform',
          icon: <Shield className="w-6 h-6" />,
          features: ['Quantum Encryption', 'Threat Detection', 'Secure Communication', 'Future-Proof Security'],
          badge: 'Critical'
        },
        {
          name: 'Quantum Cloud Infrastructure',
          description: 'Scalable quantum computing in the cloud',
          href: '/quantum-cloud-infrastructure',
          icon: <Cloud className="w-6 h-6" />,
          features: ['Cloud Integration', 'Scalability', 'Accessibility', 'Cost Optimization'],
          badge: 'Featured'
        }
      ]
    },
    {
      category: 'Quantum Data & Storage',
      services: [
        {
          name: 'Quantum Data Centers',
          description: 'Advanced quantum data processing and storage facilities',
          href: '/quantum-data-center',
          icon: <Database className="w-6 h-6" />,
          features: ['Quantum Storage', 'Data Processing', 'High Performance', 'Scalable Architecture'],
          badge: 'Advanced'
        },
        {
          name: 'Quantum Financial Trading',
          description: 'AI-powered quantum algorithms for financial markets',
          href: '/quantum-financial-trading-platform',
          icon: <DollarSign className="w-6 h-6" />,
          features: ['Algorithmic Trading', 'Risk Assessment', 'Market Analysis', 'Portfolio Optimization'],
          badge: 'Enterprise'
        },
        {
          name: 'Quantum Materials Discovery',
          description: 'Quantum computing for advanced materials research',
          href: '/quantum-materials-discovery-platform',
          icon: <Atom className="w-6 h-6" />,
          features: ['Materials Research', 'Molecular Modeling', 'Drug Discovery', 'Innovation'],
          badge: 'Research'
        }
      ]
    }
  ];

  const quantumAdvantages = [
    {
      title: 'Exponential Speed',
      description: 'Solve problems in minutes that would take classical computers centuries',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Parallel Processing',
      description: 'Process multiple possibilities simultaneously using quantum superposition',
      icon: <Network className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Quantum Entanglement',
      description: 'Leverage quantum entanglement for secure communications and computing',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Future-Proof',
      description: 'Stay ahead of classical computing limitations and security threats',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const applications = [
    {
      name: 'Cryptography & Security',
      description: 'Quantum-resistant encryption and secure communications',
      icon: <Lock className="w-6 h-6" />,
      examples: ['Post-Quantum Cryptography', 'Secure Key Distribution', 'Threat Detection']
    },
    {
      name: 'Drug Discovery',
      description: 'Accelerate pharmaceutical research and molecular modeling',
      icon: <Heart className="w-6 h-6" />,
      examples: ['Molecular Simulation', 'Protein Folding', 'Drug Optimization']
    },
    {
      name: 'Financial Modeling',
      description: 'Advanced risk assessment and portfolio optimization',
      icon: <DollarSign className="w-6 h-6" />,
      examples: ['Risk Analysis', 'Portfolio Management', 'Algorithmic Trading']
    },
    {
      name: 'Climate Research',
      description: 'Complex climate modeling and environmental analysis',
      icon: <Globe className="w-6 h-6" />,
      examples: ['Climate Modeling', 'Weather Prediction', 'Environmental Impact']
    }
  ];

  return (
    <Layout 
      title="Quantum Services - Zion Tech Group"
      description="Revolutionary quantum computing services including neural networks, cybersecurity, and cloud infrastructure"
      canonicalUrl="https://ziontechgroup.com/quantum-services"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Quantum
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {' '}Computing
                </span>
                {' '}Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the power of quantum computing with our cutting-edge 
                solutions that solve previously impossible problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <Rocket className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  View Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quantum Advantages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Quantum Computing?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quantum computing represents the next frontier in computational power, 
                offering capabilities that classical computers simply cannot match.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quantumAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {advantage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum Services Grid */}
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
                Our Quantum Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive quantum computing solutions designed to transform 
                industries and solve complex problems.
              </p>
            </motion.div>

            <div className="space-y-16">
              {quantumServices.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
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
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                            {service.icon}
                          </div>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                            {service.badge}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                          {service.name}
                        </h4>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <a
                          href={service.href}
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum computing is revolutionizing industries 
                and solving real-world problems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      {app.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{app.name}</h3>
                      <p className="text-blue-400 text-sm">{app.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {app.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready for the Quantum Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the quantum revolution and discover how our cutting-edge 
                solutions can solve your most complex challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Quantum Journey
                  <Rocket className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Explore Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumServicesPage;
