import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Cpu, Brain, Zap, Shield, Globe, Rocket, Users, Target, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function QuantumComputing() {
  const services = [
    {
      icon: Brain,
      title: 'Quantum AI Brain-Computer Interface',
      description: 'Next-generation quantum-enhanced brain-computer interface technology',
      features: ['Quantum neural processing', 'Real-time communication', 'Medical applications', 'Research tools'],
      href: '/quantum-ai-brain-computer-interface'
    },
    {
      icon: Cpu,
      title: 'Quantum AI Hybrid Computing',
      description: 'Hybrid quantum-classical computing solutions for complex problems',
      features: ['Quantum algorithm optimization', 'Hybrid processing', 'Performance acceleration', 'Scalable architecture'],
      href: '/ai-quantum-hybrid-computing'
    },
    {
      icon: Atom,
      title: 'Quantum Bio-Computing Platform',
      description: 'Revolutionary quantum computing platform for biological applications',
      features: ['DNA computing', 'Protein folding', 'Drug discovery', 'Biological modeling'],
      href: '/quantum-bio-computing-platform'
    },
    {
      icon: Shield,
      title: 'Quantum Cybersecurity Platform',
      description: 'Quantum-resistant security solutions for the future',
      features: ['Post-quantum cryptography', 'Quantum key distribution', 'Threat detection', 'Secure communications'],
      href: '/quantum-cybersecurity-platform'
    },
    {
      icon: Zap,
      title: 'Quantum Energy Platform',
      description: 'Quantum computing solutions for energy optimization',
      features: ['Grid optimization', 'Renewable energy', 'Storage solutions', 'Efficiency analysis'],
      href: '/quantum-energy-platform'
    },
    {
      icon: Globe,
      title: 'Quantum IoT Platform',
      description: 'Quantum-enhanced Internet of Things infrastructure',
      features: ['Quantum sensors', 'Secure communications', 'Real-time processing', 'Scalable deployment'],
      href: '/quantum-iot-platform'
    }
  ];

  const stats = [
    { number: '100+', label: 'Quantum Solutions', icon: Atom },
    { number: '1000+', label: 'Qubits', icon: Cpu },
    { number: '24/7', label: 'Quantum Operations', icon: Zap },
    { number: '99.99%', label: 'Reliability', icon: Shield }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-6">
                Quantum Computing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary quantum computing solutions that solve previously impossible problems. 
                From brain-computer interfaces to cybersecurity, we're building the quantum future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Computing Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge quantum solutions designed to revolutionize industries and solve complex problems
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <a href={service.href} className="block">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for the Quantum Revolution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our quantum computing experts help you harness the power of quantum technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}