import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Target, Rocket, Shield } from 'lucide-react';
import Link from 'next/link';

const QuantumAlgorithmDevelopment: React.FC = () => {
  const algorithms = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Quantum Machine Learning',
      description: 'Develop quantum algorithms for pattern recognition, classification, and optimization.',
      applications: ['Image Recognition', 'Natural Language Processing', 'Predictive Analytics']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Optimization Algorithms',
      description: 'Solve complex optimization problems using quantum annealing and variational algorithms.',
      applications: ['Supply Chain Optimization', 'Portfolio Management', 'Route Planning']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quantum Cryptography',
      description: 'Implement quantum key distribution and post-quantum cryptographic algorithms.',
      applications: ['Secure Communications', 'Blockchain Security', 'Data Protection']
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Quantum Simulation',
      description: 'Simulate quantum systems for materials science, chemistry, and physics research.',
      applications: ['Drug Discovery', 'Material Design', 'Quantum Chemistry']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Problem Analysis',
      description: 'Deep dive into your computational challenges and identify quantum opportunities.'
    },
    {
      step: '02',
      title: 'Algorithm Design',
      description: 'Design custom quantum algorithms tailored to your specific use case.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Implement algorithms using leading quantum programming frameworks.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing and optimization for maximum performance and accuracy.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Code className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Quantum Algorithm Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Custom quantum algorithms designed to solve your most complex computational challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Development
              </Link>
              <Link
                href="/quantum-computing"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Back to Quantum
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Algorithm Types Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Types of Quantum Algorithms</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of quantum algorithm development services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {algorithms.map((algorithm, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    {algorithm.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{algorithm.title}</h3>
                    <p className="text-gray-300">{algorithm.description}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {algorithm.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to developing cutting-edge quantum algorithms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Develop Quantum Algorithms?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your computational challenges into quantum opportunities with our expert development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                href="/quantum-computing"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore More Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumAlgorithmDevelopment;