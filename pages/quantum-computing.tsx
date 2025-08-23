import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Atom, Cpu, Brain, Shield, Zap, TrendingUp, 
  Users, Award, ArrowRight, Star, Globe, Lock, 
  Database, Cloud, Palette, Heart, Rocket
} from 'lucide-react';
import Link from 'next/link';

const quantumServices = [
  {
    title: 'Quantum Computing Platform',
    description: 'Next-generation quantum computing infrastructure for complex problem-solving and optimization.',
    icon: <Atom className="w-8 h-8 text-cyan-400" />,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Simulation Capabilities', 'Quantum Advantage'],
    href: '/quantum-cloud-infrastructure'
  },
  {
    title: 'Quantum AI & Machine Learning',
    description: 'Quantum-enhanced AI systems that leverage quantum computing for superior machine learning performance.',
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    features: ['Quantum Neural Networks', 'Quantum ML Algorithms', 'Enhanced Learning', 'Quantum Speedup'],
    href: '/quantum-ai-cognitive'
  },
  {
    title: 'Quantum Cybersecurity',
    description: 'Quantum-resistant security solutions and post-quantum cryptography for future-proof protection.',
    icon: <Shield className="w-8 h-8 text-red-400" />,
    features: ['Post-Quantum Crypto', 'Quantum Key Distribution', 'Threat Resistance', 'Future-Proof Security'],
    href: '/quantum-cybersecurity'
  },
  {
    title: 'Quantum Financial Trading',
    description: 'Quantum algorithms for high-frequency trading, risk assessment, and portfolio optimization.',
    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    features: ['Portfolio Optimization', 'Risk Assessment', 'High-Frequency Trading', 'Market Analysis'],
    href: '/quantum-financial-trading'
  },
  {
    title: 'Quantum Internet & Communication',
    description: 'Quantum-secured communication networks and quantum internet infrastructure.',
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    features: ['Quantum Networks', 'Secure Communication', 'Quantum Internet', 'Entanglement Distribution'],
    href: '/quantum-secure-communication'
  },
  {
    title: 'Quantum Materials Discovery',
    description: 'Quantum computing applications in materials science and drug discovery.',
            icon: <Cpu className="w-8 h-8 text-yellow-400" />,
    features: ['Materials Simulation', 'Drug Discovery', 'Chemical Modeling', 'Molecular Dynamics'],
    href: '/quantum-materials-discovery-platform'
  }
];

const quantumAdvantages = [
  {
    title: 'Exponential Speedup',
    description: 'Solve complex problems exponentially faster than classical computers',
    icon: <Zap className="w-6 h-6 text-cyan-400" />
  },
  {
    title: 'Quantum Supremacy',
    description: 'Achieve computational capabilities impossible with classical systems',
    icon: <Award className="w-6 h-6 text-purple-400" />
  },
  {
    title: 'Parallel Processing',
    description: 'Process multiple possibilities simultaneously through quantum superposition',
    icon: <Database className="w-6 h-6 text-blue-400" />
  },
  {
    title: 'Quantum Entanglement',
    description: 'Leverage quantum correlations for secure communication and computation',
    icon: <Lock className="w-6 h-6 text-green-400" />
  }
];

export default function QuantumComputing() {
  return (
    <Layout>
      <SEO 
        title="Quantum Computing Services | Zion Tech Group"
        description="Revolutionary quantum computing solutions for enterprise transformation. Quantum AI, cybersecurity, financial trading, and materials discovery."
        canonical="https://ziontechgroup.com/quantum-computing/"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                Quantum Computing Excellence
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Quantum
              </span>
              <br />
              <span className="text-white">Revolution</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of computing with our quantum solutions. From AI enhancement to 
              cybersecurity, unlock unprecedented computational power and solve previously impossible problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Explore Quantum
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-2xl hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Quantum Elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <Atom className="w-16 h-16 text-purple-400" />
        </div>
        <div className="absolute top-40 right-20 opacity-20 animate-float-delayed">
                      <Cpu className="w-12 h-12 text-cyan-400" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-20 animate-float">
          <Brain className="w-14 h-14 text-blue-400" />
        </div>
      </section>

      {/* Quantum Advantages */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Quantum Computing?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                className="text-center group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum computing services span multiple domains, delivering 
              revolutionary capabilities across industries and applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700/50 rounded-xl group-hover:bg-purple-500/10 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries and 
              solving complex problems that were previously impossible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Cpu className="w-6 h-6 text-cyan-400 mr-3" />
                  Scientific Research
                </h3>
                <p className="text-gray-400 mb-4">
                  Accelerate scientific discoveries in physics, chemistry, and materials science through quantum simulation.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Quantum Chemistry Simulations</li>
                  <li>• Materials Discovery</li>
                  <li>• Drug Development</li>
                  <li>• Climate Modeling</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
                  Financial Services
                </h3>
                <p className="text-gray-400 mb-4">
                  Optimize portfolios, assess risks, and develop trading strategies with quantum algorithms.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Portfolio Optimization</li>
                  <li>• Risk Assessment</li>
                  <li>• High-Frequency Trading</li>
                  <li>• Fraud Detection</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-red-400 mr-3" />
                  Cybersecurity
                </h3>
                <p className="text-gray-400 mb-4">
                  Develop quantum-resistant cryptography and secure communication systems for the future.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Post-Quantum Cryptography</li>
                  <li>• Quantum Key Distribution</li>
                  <li>• Secure Communication</li>
                  <li>• Threat Detection</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Brain className="w-6 h-6 text-purple-400 mr-3" />
                  Artificial Intelligence
                </h3>
                <p className="text-gray-400 mb-4">
                  Enhance machine learning algorithms and AI systems with quantum computing capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Quantum Neural Networks</li>
                  <li>• Enhanced ML Algorithms</li>
                  <li>• Pattern Recognition</li>
                  <li>• Optimization Problems</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for the Quantum Future?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the quantum revolution and gain a competitive advantage with 
              computational power that was once science fiction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Quantum Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/quote"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-2xl hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}