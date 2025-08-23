import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, Zap, Shield, Target, TrendingUp, Users, Globe, Rocket, Brain, Lock } from 'lucide-react';

const QuantumServices: React.FC = () => {
  const services = [
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problems',
      icon: <Atom className="w-8 h-8 text-blue-400" />,
      features: [
        'Quantum Algorithms',
        'Quantum Simulation',
        'Quantum Machine Learning',
        'Quantum Optimization',
        'Quantum Cryptography',
        'Quantum Error Correction'
      ],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'Quantum Neural Networks',
      description: 'Revolutionary quantum-enhanced neural network platforms',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      features: [
        'Quantum Neural Processing',
        'Hybrid Quantum-Classical AI',
        'Quantum Feature Extraction',
        'Quantum Pattern Recognition',
        'Quantum Learning Algorithms',
        'Quantum Memory Systems'
      ],
      price: 'Starting at $2,499/month'
    },
    {
      title: 'Quantum Security',
      description: 'Unbreakable quantum-secured communication and encryption',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      features: [
        'Quantum Key Distribution',
        'Post-Quantum Cryptography',
        'Quantum Random Number Generation',
        'Quantum-Secure Networks',
        'Quantum Authentication',
        'Quantum Digital Signatures'
      ],
      price: 'Starting at $1,799/month'
    }
  ];

  const applications = [
    {
      title: 'Financial Services',
      description: 'Quantum algorithms for portfolio optimization and risk assessment',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Drug Discovery',
      description: 'Quantum simulation for molecular modeling and pharmaceutical research',
      icon: <Atom className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Climate Modeling',
      description: 'Quantum computing for complex climate simulations and predictions',
      icon: <Globe className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Logistics Optimization',
      description: 'Quantum algorithms for supply chain and route optimization',
      icon: <Target className="w-6 h-6 text-purple-400" />
    }
  ];

  const benefits = [
    {
      title: 'Exponential Speedup',
      description: 'Solve complex problems in minutes instead of years',
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      title: 'Unprecedented Accuracy',
      description: 'Quantum precision for scientific and business applications',
      icon: <Target className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Future-Proof Security',
      description: 'Quantum-resistant encryption for long-term data protection',
      icon: <Lock className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead with cutting-edge quantum technology',
      icon: <Rocket className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                Quantum Technology
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of quantum mechanics to solve the world's most complex problems and unlock unprecedented computational capabilities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Explore Quantum Solutions
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Schedule a Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Quantum Services Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive quantum solutions designed for enterprise-scale applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-400 font-semibold text-lg">{service.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Quantum Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover how quantum technology is transforming industries across the globe
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <motion.div
                  key={application.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    {application.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{application.title}</h3>
                  <p className="text-gray-400">{application.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Quantum Advantages
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the revolutionary benefits of quantum technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Ready for the Quantum Future?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Be among the first to harness the power of quantum computing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Start Quantum Journey
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Contact Quantum Experts
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumServices;