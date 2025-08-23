import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, Brain, Shield, Zap, Target, Rocket, 
  CheckCircle, ArrowRight, Cpu, Lock, Database,
  BarChart3, Globe, Network, Server, Cloud, Users
} from 'lucide-react';

export default function QuantumServices() {
  const quantumServices = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Access to quantum processors and quantum algorithm development',
      icon: <Atom className="w-12 h-12 text-cyan-400" />,
      features: ['Quantum Algorithm Design', 'Quantum Circuit Optimization', 'Quantum Error Correction', 'Hybrid Classical-Quantum Systems'],
      applications: ['Cryptography', 'Optimization Problems', 'Drug Discovery', 'Financial Modeling']
    },
    {
      title: 'Quantum AI & Machine Learning',
      description: 'Quantum-enhanced artificial intelligence and machine learning algorithms',
      icon: <Brain className="w-12 h-12 text-purple-400" />,
      features: ['Quantum Neural Networks', 'Quantum Feature Selection', 'Quantum Clustering', 'Quantum Classification'],
      applications: ['Pattern Recognition', 'Data Analysis', 'Predictive Modeling', 'Anomaly Detection']
    },
    {
      title: 'Quantum Cybersecurity',
      description: 'Quantum-resistant cryptography and quantum key distribution',
      icon: <Shield className="w-12 h-12 text-green-400" />,
      features: ['Post-Quantum Cryptography', 'Quantum Key Distribution', 'Quantum Random Number Generation', 'Quantum-Safe Protocols'],
      applications: ['Secure Communications', 'Financial Transactions', 'Government Systems', 'Healthcare Data']
    },
    {
      title: 'Quantum Finance',
      description: 'Quantum algorithms for financial modeling and risk assessment',
      icon: <BarChart3 className="w-12 h-12 text-blue-400" />,
      features: ['Portfolio Optimization', 'Risk Assessment', 'Option Pricing', 'Market Simulation'],
      applications: ['Investment Management', 'Risk Management', 'Trading Algorithms', 'Regulatory Compliance']
    },
    {
      title: 'Quantum Internet & Networking',
      description: 'Quantum communication networks and quantum internet infrastructure',
      icon: <Network className="w-12 h-12 text-yellow-400" />,
      features: ['Quantum Repeaters', 'Quantum Memory', 'Quantum Routing', 'Quantum Network Security'],
      applications: ['Secure Communications', 'Quantum Cloud Computing', 'Distributed Quantum Systems', 'Quantum Internet']
    },
    {
      title: 'Quantum Materials & Chemistry',
      description: 'Quantum simulations for materials science and chemical discovery',
      icon: <Rocket className="w-12 h-12 text-pink-400" />,
      features: ['Molecular Simulation', 'Material Properties', 'Chemical Reactions', 'Catalyst Design'],
      applications: ['Drug Discovery', 'Material Development', 'Energy Storage', 'Catalysis']
    }
  ];

  const quantumAdvantages = [
    {
      title: 'Exponential Speedup',
      description: 'Solve complex problems exponentially faster than classical computers',
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Quantum Supremacy',
      description: 'Achieve computational capabilities beyond classical limitations',
      icon: <Rocket className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Quantum Entanglement',
      description: 'Leverage quantum correlations for enhanced information processing',
      icon: <Atom className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Quantum Parallelism',
      description: 'Process multiple possibilities simultaneously',
      icon: <Cpu className="w-8 h-8 text-green-400" />
    }
  ];

  const useCases = [
    'Cryptography and cybersecurity',
    'Optimization and logistics',
    'Drug discovery and materials science',
    'Financial modeling and risk assessment',
    'Artificial intelligence and machine learning',
    'Climate modeling and environmental science',
    'Supply chain optimization',
    'Quantum machine learning'
  ];

  const quantumTechnologies = [
    'Superconducting Qubits',
    'Trapped Ions',
    'Topological Qubits',
    'Photonic Quantum Computing',
    'Quantum Annealing',
    'Quantum Error Correction',
    'Quantum Memory',
    'Quantum Repeaters'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent mb-6"
          >
            Quantum Computing Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Harness the power of quantum mechanics to solve previously impossible problems and unlock new computational frontiers.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="/contact" className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>Explore Quantum Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/ai-services" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              AI + Quantum
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quantum Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent">
              Quantum Computing Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From quantum algorithms to quantum-safe cybersecurity, we provide comprehensive quantum computing services that push the boundaries of what's possible.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {quantumServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {service.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Advantages */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent">
              Quantum Computing Advantages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover why quantum computing represents the next paradigm shift in computational power and problem-solving capabilities.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300 text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent">
              Quantum Computing Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the diverse applications where quantum computing provides revolutionary advantages over classical approaches.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center"
              >
                <span className="text-gray-300">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Technologies */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent">
              Quantum Technologies We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge quantum technologies and platforms to deliver the most advanced quantum computing solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quantumTechnologies.map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center"
              >
                <span className="text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent">
              Quantum Implementation Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our structured approach to implementing quantum computing solutions in your organization.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Quantum Readiness Assessment',
                description: 'Evaluating your organization\'s quantum computing readiness and identifying opportunities',
                icon: <Target className="w-8 h-8 text-purple-400" />
              },
              {
                step: '02',
                title: 'Quantum Strategy Development',
                description: 'Creating a comprehensive quantum computing roadmap and implementation strategy',
                icon: <Brain className="w-8 h-8 text-cyan-400" />
              },
              {
                step: '03',
                title: 'Quantum Solution Development',
                description: 'Building and testing quantum algorithms and quantum-classical hybrid systems',
                icon: <Atom className="w-8 h-8 text-green-400" />
              },
              {
                step: '04',
                title: 'Quantum Deployment & Scaling',
                description: 'Deploying quantum solutions and scaling quantum computing capabilities',
                icon: <Rocket className="w-8 h-8 text-yellow-400" />
              }
            ].map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <div className="flex justify-center mb-3">{phase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300 text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum + AI Integration */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent">
              Quantum + AI Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combine the power of quantum computing with artificial intelligence to create revolutionary hybrid solutions.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">Quantum-Enhanced AI</h3>
              <p className="text-lg text-gray-300 mb-6">
                Our quantum AI solutions leverage quantum computing's unique properties to enhance machine learning algorithms, 
                enabling faster training, better optimization, and more accurate predictions.
              </p>
              <ul className="space-y-3">
                {[
                  'Quantum Neural Networks',
                  'Quantum Feature Selection',
                  'Quantum Clustering Algorithms',
                  'Quantum Optimization for ML',
                  'Quantum-Safe AI Systems'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-500 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-32 h-32 text-white" />
              </div>
              <p className="text-gray-300">
                The future of computing lies in the convergence of quantum mechanics and artificial intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent">
              Ready to Explore the Quantum Frontier?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us in pioneering the future of computing with quantum technology solutions that solve previously impossible problems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Start Your Quantum Journey</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/ai-services" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Explore AI Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}