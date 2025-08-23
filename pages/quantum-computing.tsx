import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, Zap, Cpu, Database, Shield, Cloud, 
  Users, Target, TrendingUp, ArrowRight, Star,
  CheckCircle, Rocket, Brain, Globe, Code, Lock
} from 'lucide-react';
import Link from 'next/link';

const QuantumComputing: React.FC = () => {
  const services = [
    {
      title: 'Quantum Neural Ecosystem',
      description: 'Hybrid quantum-AI computing platform for next-generation neural networks',
      icon: <Brain className="w-8 h-8" />,
      features: ['Quantum neural networks', 'Hybrid computing', 'Advanced algorithms'],
      href: '/quantum-neural-ecosystem-2045',
      badge: 'BREAKTHROUGH'
    },
    {
      title: 'Quantum Cloud Infrastructure',
      description: 'Scalable quantum computing infrastructure for enterprise applications',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Quantum cloud services', 'Scalable infrastructure', 'Enterprise solutions'],
      href: '/quantum-cloud-infrastructure',
      badge: 'CLOUD'
    },
    {
      title: 'Quantum Cybersecurity',
      description: 'Next-generation security solutions powered by quantum computing',
      icon: <Shield className="w-8 h-8" />,
      features: ['Quantum encryption', 'Post-quantum cryptography', 'Advanced security'],
      href: '/quantum-cybersecurity-platform-2045',
      badge: 'SECURE'
    },
    {
      title: 'Quantum Blockchain',
      description: 'Quantum-resistant blockchain technology for secure transactions',
      icon: <Lock className="w-8 h-8" />,
      features: ['Quantum-resistant algorithms', 'Secure transactions', 'Blockchain innovation'],
      href: '/quantum-blockchain',
      badge: 'BLOCKCHAIN'
    },
    {
      title: 'Quantum Bio-Computing',
      description: 'Revolutionary bio-quantum computing platform',
      icon: <Atom className="w-8 h-8" />,
      features: ['Bio-quantum integration', 'Molecular computing', 'Biological algorithms'],
      href: '/quantum-bio-computing-platform',
      badge: 'BIO'
    },
    {
      title: 'Quantum Consulting',
      description: 'Strategic quantum computing consulting and implementation',
      icon: <Users className="w-8 h-8" />,
      features: ['Strategy development', 'Implementation planning', 'Training & support'],
      href: '/quantum-consulting-services',
      badge: 'EXPERT'
    }
  ];

  const applications = [
    {
      title: 'Cryptography & Security',
      description: 'Quantum-resistant encryption and advanced security protocols',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Drug Discovery',
      description: 'Accelerated molecular simulation and drug development',
      icon: <Atom className="w-6 h-6" />
    },
    {
      title: 'Financial Modeling',
      description: 'Complex financial calculations and risk assessment',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Climate Modeling',
      description: 'Advanced climate simulation and prediction models',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'AI & Machine Learning',
      description: 'Quantum-enhanced AI algorithms and neural networks',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Logistics Optimization',
      description: 'Complex optimization problems and route planning',
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Quantum Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Next-generation quantum computing solutions that solve previously impossible problems and unlock new possibilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/case-studies" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Quantum Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <Atom className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-40 right-20 text-purple-400/20"
          >
            <Cpu className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <Database className="w-14 h-14" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Quantum Computing Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge quantum solutions designed to revolutionize computing and solve complex problems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                    {service.badge}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Computing Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries and solving complex challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl w-16 h-16 mb-4 flex items-center justify-center">
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {app.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {app.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Advantage Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Quantum Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Why quantum computing represents the future of computational power
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Exponential Speed</h3>
              <p className="text-gray-300 mb-4">
                Quantum computers can solve certain problems exponentially faster than classical computers, 
                reducing computation time from years to minutes for complex algorithms.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Factorization problems</li>
                <li>• Optimization algorithms</li>
                <li>• Machine learning training</li>
                <li>• Cryptography breaking</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Supremacy</h3>
              <p className="text-gray-300 mb-4">
                Achieve computational tasks that are impossible for classical computers, 
                opening new frontiers in science, technology, and business.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Quantum simulation</li>
                <li>• Quantum machine learning</li>
                <li>• Quantum chemistry</li>
                <li>• Quantum optimization</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Harness Quantum Power?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's explore how quantum computing can revolutionize your business and solve your most complex challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </Link>
              <Link href="/pricing" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputing;