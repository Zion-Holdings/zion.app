import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Atom, Brain, Zap, Target, Users, Shield, Rocket, Cloud, 
  ArrowRight, Star, Check, Mail, Phone, MapPin, Cpu, Database
} from 'lucide-react';

const QuantumTechnologyServices: React.FC = () => {
  const services = [
    {
      title: 'Quantum Neural Networks 2045',
      description: 'Next-generation quantum AI that combines consciousness with quantum computing',
      href: '/quantum-neural-network-platform-2045',
      icon: Atom,
      features: ['Quantum Processing', 'Neural Evolution', 'Consciousness Integration', 'Advanced Learning']
    },
    {
      title: 'Quantum Cybersecurity 2045',
      description: 'Unbreakable quantum encryption and advanced threat protection',
      href: '/quantum-cybersecurity-platform-2045',
      icon: Shield,
      features: ['Quantum Encryption', 'Threat Detection', 'Zero Trust Security', 'Quantum Key Distribution']
    },
    {
      title: 'Quantum Cloud Infrastructure 2045',
      description: 'Quantum-powered cloud computing and infrastructure solutions',
      href: '/quantum-cloud-infrastructure-2045',
      icon: Cloud,
      features: ['Quantum Computing', 'Scalable Infrastructure', 'High Performance', 'Energy Efficient']
    },
    {
      title: 'Quantum Data Center Management 2045',
      description: 'Revolutionary data center management powered by quantum technology',
      href: '/quantum-data-center-management-2045',
      icon: Database,
      features: ['Quantum Optimization', 'Resource Management', 'Energy Efficiency', 'Performance Monitoring']
    },
    {
      title: 'Quantum AI Cognitive 2045',
      description: 'Advanced cognitive AI systems enhanced by quantum computing',
      href: '/quantum-ai-cognitive-2045',
      icon: Brain,
      features: ['Cognitive Processing', 'Quantum Enhancement', 'Pattern Recognition', 'Decision Making']
    },
    {
      title: 'Quantum Secure Communication 2045',
      description: 'Unhackable communication systems using quantum cryptography',
      href: '/quantum-secure-communication-2045',
      icon: Shield,
      features: ['Quantum Cryptography', 'Secure Channels', 'Real-time Encryption', 'Threat Prevention']
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Quantum Technology Services 2045 - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum technology solutions that harness the power of quantum computing, cryptography, and AI. Experience the future with Zion Tech Group." />
        <meta name="keywords" content="quantum technology, quantum computing, quantum AI, quantum cybersecurity, quantum cloud, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services/quantum-technology" />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>

        {/* Header Section */}
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                <Atom className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">Quantum Technology Services 2045</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Quantum Technology Revolution
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Harness the power of quantum computing, cryptography, and AI to unlock unprecedented 
                possibilities. We're pioneering the quantum revolution that will transform industries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center space-x-2 border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>Explore Solutions</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Quantum Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of quantum technology solutions designed to revolutionize your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={service.href} className="block">
                    <div className="bg-gray-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-500/40 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                        <service.icon className="w-8 h-8 text-purple-400" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                            <span className="text-sm text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                        <span className="font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Ready for the Quantum Revolution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our quantum technology solutions can transform your business
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuantumTechnologyServices;