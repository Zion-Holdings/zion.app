import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Atom, Sparkles, Zap, Target, Star, ArrowRight, 
  CheckCircle, Users, Award, Clock, TrendingUp, Cpu
} from 'lucide-react';
import Link from 'next/link';

const QuantumTechnologyServices: React.FC = () => {
  const services = [
    {
      title: "Quantum AI Hybrid Computing Platform",
      description: "Revolutionary quantum-classical hybrid computing with AI consciousness integration",
      href: "/quantum-ai-hybrid-computing",
      features: ["Quantum-Classical Hybrid", "AI Consciousness", "Quantum Neural Networks", "Hybrid Algorithms"],
      price: "$29,999/month",
      badge: "Featured"
    },
    {
      title: "Quantum Cloud Infrastructure Platform",
      description: "Quantum-powered cloud infrastructure with consciousness and security",
      href: "/quantum-cloud-infrastructure-platform",
      features: ["Quantum Security", "Cloud Infrastructure", "Consciousness Integration", "Scalable Architecture"],
      price: "$19,999/month",
      badge: "Popular"
    },
    {
      title: "Quantum Neural Networks Platform",
      description: "Advanced quantum neural networks with consciousness and learning capabilities",
      href: "/quantum-neural-networks-platform",
      features: ["Quantum Neural Networks", "Consciousness Learning", "Advanced Algorithms", "Research Tools"],
      price: "$24,999/month",
      badge: "Advanced"
    },
    {
      title: "Quantum Bio-Computing Platform",
      description: "Revolutionary quantum bio-computing with biological consciousness integration",
      href: "/quantum-bio-computing-platform",
      features: ["Quantum Bio-Computing", "Biological Integration", "Consciousness Research", "Medical Applications"],
      price: "$34,999/month",
      badge: "Research"
    }
  ];

  const stats = [
    { number: "1000+", label: "Quantum Projects", icon: Atom },
    { number: "99.99%", label: "Quantum Accuracy", icon: CheckCircle },
    { number: "100+", label: "Research Partners", icon: Users },
    { number: "24/7", label: "Quantum Support", icon: Clock }
  ];

  return (
    <Layout 
      title="Quantum Technology Services - Zion Tech Group"
      description="Revolutionary quantum technology services including quantum computing, quantum AI, and quantum infrastructure. Pioneer the future of quantum technology."
      keywords="quantum technology, quantum computing, quantum AI, quantum infrastructure, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <Atom className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Quantum Technology Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  {" "}Quantum Technology
                </span>
                <br />
                Solutions
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Pioneer the future of computing with quantum technology that transcends classical limits. 
                Experience quantum AI, quantum infrastructure, and quantum consciousness integration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Start Quantum Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Quantum Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive suite of quantum technology development and infrastructure services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {service.badge && (
                    <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-medium text-blue-300 mb-4">
                      {service.badge}
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  
                  <Link 
                    href={service.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Go Quantum?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the quantum revolution. Experience computing power that transcends classical limits 
                with our revolutionary quantum technology services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Start Quantum Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/team"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumTechnologyServices;