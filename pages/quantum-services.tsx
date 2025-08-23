import React from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Atom, Brain, Shield, Zap, Network, Database, 
  Globe, Cpu, Lock, ArrowRight, Star, CheckCircle,
  Rocket, Target, Users, BarChart3
} from 'lucide-react';

const QuantumServicesPage: React.FC = () => {
  const quantumServices = [
    {
      category: 'Quantum Computing Platforms',
      services: [
        {
          name: 'Quantum Neural Network Platform',
          description: 'Advanced quantum computing systems for neural network processing and AI applications',
          href: '/quantum-neural-network-platform',
          featured: true,
          icon: <Brain className="w-6 h-6" />
        },
        {
          name: 'Quantum Financial Trading Platform',
          description: 'Quantum-powered trading algorithms and financial modeling systems',
          href: '/quantum-financial-trading',
          featured: true,
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          name: 'Quantum Materials Discovery Platform',
          description: 'Quantum simulation for advanced materials research and development',
          href: '/quantum-materials-discovery-platform',
          icon: <Atom className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Quantum Security & Communication',
      services: [
        {
          name: 'Quantum Internet Security Platform',
          description: 'Next-generation quantum-secured internet infrastructure',
          href: '/quantum-internet-security-platform',
          featured: true,
          icon: <Shield className="w-6 h-6" />
        },
        {
          name: 'Quantum-Secure Cloud Infrastructure',
          description: 'Cloud platforms protected by quantum encryption technology',
          href: '/quantum-secure-cloud-infrastructure',
          featured: true,
          icon: <Lock className="w-6 h-6" />
        },
        {
          name: 'Quantum Secure Communication',
          description: 'Unbreakable communication systems using quantum cryptography',
          href: '/quantum-secure-communication',
          icon: <Network className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Quantum Applications & Solutions',
      services: [
        {
          name: 'Quantum Bio-Computing Platform',
          description: 'Quantum computing solutions for biological and medical research',
          href: '/quantum-bio-computing-platform',
          featured: true,
          icon: <Target className="w-6 h-6" />
        },
        {
          name: 'Quantum Logistics Optimization',
          description: 'Quantum algorithms for complex supply chain and logistics optimization',
          href: '/quantum-logistics-optimization',
          icon: <Rocket className="w-6 h-6" />
        },
        {
          name: 'Quantum IoT Platform',
          description: 'Quantum-enhanced Internet of Things infrastructure and applications',
          href: '/quantum-iot',
          icon: <Globe className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Quantum Research & Development',
      services: [
        {
          name: 'Quantum Robotics',
          description: 'Advanced robotics systems enhanced with quantum computing capabilities',
          href: '/quantum-robotics',
          icon: <Cpu className="w-6 h-6" />
        },
        {
          name: 'Quantum Metaverse',
          description: 'Quantum-powered virtual reality and metaverse platforms',
          href: '/quantum-metaverse',
          icon: <Users className="w-6 h-6" />
        },
        {
          name: 'Quantum Energy Platform',
          description: 'Quantum solutions for energy optimization and renewable energy systems',
          href: '/quantum-energy-platform',
          icon: <Zap className="w-6 h-6" />
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Atom className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionary quantum computing solutions that solve previously impossible problems and unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Computing Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From neural networks to financial trading, our quantum services push the boundaries of what's possible.
            </p>
          </motion.div>

          <div className="space-y-16">
            {quantumServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 border rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 ${
                        service.featured ? 'border-purple-500/30' : 'border-gray-700/50'
                      }`}
                    >
                      {service.featured && (
                        <div className="flex items-center mb-4">
                          <Star className="w-5 h-5 text-yellow-400 mr-2" />
                          <span className="text-yellow-400 text-sm font-semibold">Featured</span>
                        </div>
                      )}
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                      >
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's explore how quantum technology can solve your most complex challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start Your Quantum Journey
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/resources"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                Explore Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default QuantumServicesPage;