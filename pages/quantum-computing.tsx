import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Zap, Shield, Database, Code, Rocket, Brain, Globe, Cpu, Server } from 'lucide-react';
import Link from 'next/link';

const QuantumComputingPage: React.FC = () => {
  const services = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing services for complex problem solving',
      icon: <Atom className="w-8 h-8" />,
      features: [
        'Quantum Algorithm Development',
        'Quantum Circuit Design',
        'Quantum Error Correction',
        'Quantum Simulation',
        'Quantum Optimization',
        'Hybrid Quantum-Classical Systems'
      ],
      href: '/quantum-ai-brain-computer-interface'
    },
    {
      title: 'Quantum AI Integration',
      description: 'Revolutionary AI systems powered by quantum computing',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'Quantum Neural Networks',
        'Quantum Machine Learning',
        'Quantum Natural Language Processing',
        'Quantum Computer Vision',
        'Quantum Reinforcement Learning'
      ],
      href: '/quantum-ai-cognitive'
    },
    {
      title: 'Quantum Cybersecurity',
      description: 'Unbreakable security solutions using quantum cryptography',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'Quantum Key Distribution',
        'Post-Quantum Cryptography',
        'Quantum-Safe Communication',
        'Quantum Random Number Generation',
        'Quantum Threat Detection'
      ],
      href: '/quantum-cybersecurity'
    },
    {
      title: 'Quantum Infrastructure',
      description: 'Enterprise quantum computing infrastructure and platforms',
      icon: <Server className="w-8 h-8" />,
      features: [
        'Quantum Cloud Platforms',
        'Quantum Data Centers',
        'Quantum Network Infrastructure',
        'Quantum Software Development',
        'Quantum Hardware Integration'
      ],
      href: '/quantum-secure-cloud-infrastructure'
    }
  ];

  const applications = [
    {
      title: 'Financial Services',
      description: 'Quantum algorithms for portfolio optimization, risk assessment, and trading strategies',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Drug Discovery',
      description: 'Quantum simulation for molecular modeling and pharmaceutical research',
      icon: <Atom className="w-6 h-6" />
    },
    {
      title: 'Logistics & Supply Chain',
      description: 'Quantum optimization for complex routing and scheduling problems',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Climate Modeling',
      description: 'Quantum computing for advanced climate simulations and predictions',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Quantum Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Unlock the power of quantum computing for revolutionary problem-solving capabilities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
              <Link
                href="/quantum-services"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-200 font-medium text-lg"
              >
                View Quantum Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-gray-400">
                    <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
              >
                <span>Learn More</span>
                <Rocket className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Applications Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Quantum Computing Applications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how quantum computing is transforming industries and solving previously intractable problems
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index + 0.6 }}
              className="bg-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white w-fit mx-auto mb-4">
                {app.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{app.title}</h3>
              <p className="text-gray-400 text-sm">{app.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore Quantum Computing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our quantum computing experts are ready to help you harness the power of quantum technology for your business challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-cyan-500/25"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/quantum-services"
              className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-200 font-medium text-lg"
            >
              Explore Quantum Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumComputingPage;