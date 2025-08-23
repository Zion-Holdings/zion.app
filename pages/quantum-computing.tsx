import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Brain, Shield, Rocket, Cpu, 
  Atom, Globe, Lock, Target, TrendingUp,
  ArrowRight, CheckCircle, Star, Users, Award
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const QuantumComputing: React.FC = () => {
  const services = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for optimization, cryptography, and machine learning',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      features: ['Grover\'s Algorithm', 'Shor\'s Algorithm', 'Quantum Machine Learning', 'Custom Optimization']
    },
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum key distribution and post-quantum cryptography',
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      features: ['QKD Implementation', 'Post-Quantum Algorithms', 'Quantum Random Number Generation', 'Secure Communication']
    },
    {
      title: 'Quantum Simulation',
      description: 'Molecular and material simulation for drug discovery and materials science',
      icon: <Atom className="w-8 h-8 text-green-400" />,
      features: ['Molecular Dynamics', 'Chemical Reactions', 'Material Properties', 'Drug Discovery']
    },
    {
      title: 'Quantum Machine Learning',
      description: 'AI algorithms enhanced with quantum computing capabilities',
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      features: ['Quantum Neural Networks', 'Quantum Feature Maps', 'Hybrid Classical-Quantum', 'Optimization Algorithms']
    }
  ];

  const benefits = [
    'Exponential speedup for specific problems',
    'Unbreakable encryption security',
    'Revolutionary drug discovery capabilities',
    'Advanced AI and machine learning',
    'Optimization of complex systems',
    'Financial modeling and risk assessment'
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      applications: ['Drug Discovery', 'Protein Folding', 'Medical Imaging', 'Personalized Medicine']
    },
    {
      industry: 'Finance',
      applications: ['Portfolio Optimization', 'Risk Assessment', 'Fraud Detection', 'Algorithmic Trading']
    },
    {
      industry: 'Manufacturing',
      applications: ['Supply Chain Optimization', 'Quality Control', 'Predictive Maintenance', 'Resource Planning']
    },
    {
      industry: 'Energy',
      applications: ['Grid Optimization', 'Renewable Energy', 'Nuclear Fusion', 'Carbon Capture']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quantum Computing
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Unlock the power of quantum mechanics with our cutting-edge quantum computing solutions. 
              Transform impossible problems into solvable challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="quantum" size="lg" className="text-lg px-8 py-4">
                Start Quantum Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/quantum-services" variant="outline" size="lg" className="text-lg px-8 py-4">
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Computing Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From algorithm development to quantum machine learning, we provide comprehensive 
              quantum computing solutions for enterprise applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Quantum Computing?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantum computing represents the next frontier in computational power, 
              offering unprecedented capabilities for complex problem-solving.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-white">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantum computing is revolutionizing industries across the board, 
              from healthcare to finance to manufacturing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Target className="w-6 h-6 text-cyan-400 mr-2" />
                  {useCase.industry}
                </h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center">
                      <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Go Quantum?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and transform your business with 
              the most advanced computing technology available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="quantum" size="lg" className="text-lg px-8 py-4">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/quantum-services" variant="outline" size="lg" className="text-lg px-8 py-4">
                View All Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default QuantumComputing;