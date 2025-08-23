import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, Zap, Shield, Rocket, Brain, Cpu } from 'lucide-react';
import Link from 'next/link';

const QuantumServices: React.FC = () => {
  const quantumServices = [
    {
      category: 'Quantum Computing Platforms',
      services: [
        { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform', description: 'Advanced quantum neural computing solutions' },
        { name: 'Quantum AI Brain-Computer Interface', href: '/quantum-ai-brain-computer-interface', description: 'Quantum-powered brain-computer interfaces' },
        { name: 'Quantum AI Cognitive Platform', href: '/quantum-ai-cognitive', description: 'Cognitive computing with quantum algorithms' },
        { name: 'Quantum AI Fusion Platform', href: '/quantum-ai-fusion', description: 'Hybrid quantum-classical AI systems' }
      ]
    },
    {
      category: 'Quantum Security & Cryptography',
      services: [
        { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform', description: 'Quantum-resistant security solutions' },
        { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform', description: 'Secure quantum internet infrastructure' },
        { name: 'Quantum Encryption Gateway', href: '/quantum-encryption-gateway', description: 'Advanced quantum encryption services' },
        { name: 'Quantum Threat Detection', href: '/quantum-threat-detection', description: 'AI-powered quantum security monitoring' }
      ]
    },
    {
      category: 'Quantum Financial Services',
      services: [
        { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading', description: 'High-frequency quantum trading systems' },
        { name: 'Quantum Risk Financial Manager', href: '/quantum-risk-financial-manager', description: 'Quantum risk assessment and management' },
        { name: 'Neural Finance AI Platform', href: '/neural-finance-ai', description: 'Neural network-based financial intelligence' }
      ]
    },
    {
      category: 'Quantum Infrastructure',
      services: [
        { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform', description: 'Scalable quantum cloud solutions' },
        { name: 'Quantum Data Center', href: '/quantum-data-center', description: 'Enterprise quantum computing infrastructure' },
        { name: 'Quantum Networking', href: '/quantum-networking', description: 'Quantum network infrastructure' },
        { name: 'Quantum Network Security', href: '/quantum-network-security', description: 'Secure quantum network protocols' }
      ]
    },
    {
      category: 'Quantum Materials & Energy',
      services: [
        { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery-platform', description: 'AI-powered materials research' },
        { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Quantum energy optimization' },
        { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization', description: 'Energy efficiency with quantum algorithms' },
        { name: 'Quantum Bio-Computing Platform', href: '/quantum-bio-computing-platform', description: 'Biological quantum computing' }
      ]
    },
    {
      category: 'Quantum Applications',
      services: [
        { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-enhanced IoT solutions' },
        { name: 'Quantum Logistics Optimization', href: '/quantum-logistics-optimization', description: 'Supply chain optimization with quantum computing' },
        { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer', description: 'End-to-end supply chain optimization' },
        { name: 'Quantum Metaverse Platform', href: '/quantum-metaverse', description: 'Quantum-powered virtual reality' }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <Atom className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                  Quantum Services
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary quantum computing solutions that solve previously impossible problems 
                and unlock new possibilities across industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From quantum neural networks to secure quantum infrastructure, our services 
                represent the cutting edge of computational technology.
              </p>
            </motion.div>

            <div className="space-y-16">
              {quantumServices.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Link href={service.href}>
                          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 h-full">
                            <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                              {service.name}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {service.description}
                            </p>
                            <div className="mt-4 flex items-center text-blue-400 text-sm font-medium">
                              Learn More
                              <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum Advantages Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Why Quantum Computing?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quantum computing offers exponential speedups for specific problems that are 
                intractable for classical computers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-12 h-12 text-yellow-400" />,
                  title: 'Exponential Speedup',
                  description: 'Solve complex problems in minutes that would take classical computers years'
                },
                {
                  icon: <Shield className="w-12 h-12 text-green-400" />,
                  title: 'Unbreakable Security',
                  description: 'Quantum-resistant cryptography and secure communications'
                },
                {
                  icon: <Brain className="w-12 h-12 text-purple-400" />,
                  title: 'AI Enhancement',
                  description: 'Supercharge machine learning with quantum algorithms'
                }
              ].map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="flex justify-center mb-4">{advantage.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
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
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Harness Quantum Power?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover how quantum computing can transform your business and solve 
                previously impossible challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
                    View All Services
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumServices;