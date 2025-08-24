import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Database, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const QuantumMachineLearning: React.FC = () => {
  const applications = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Pattern Recognition',
      description: 'Advanced pattern recognition using quantum neural networks for image and data analysis.',
      useCases: ['Computer Vision', 'Medical Imaging', 'Financial Analysis']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Optimization',
      description: 'Solve complex optimization problems using quantum annealing and variational algorithms.',
      useCases: ['Supply Chain', 'Portfolio Management', 'Route Planning']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Predictive Analytics',
      description: 'Enhanced predictive models leveraging quantum computing capabilities.',
      useCases: ['Market Forecasting', 'Risk Assessment', 'Customer Behavior']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Classification',
      description: 'Superior classification algorithms for large-scale data processing.',
      useCases: ['Fraud Detection', 'Content Moderation', 'Quality Control']
    }
  ];

  const benefits = [
    {
      title: 'Exponential Speedup',
      description: 'Achieve computational speedups that are impossible with classical algorithms.'
    },
    {
      title: 'Better Accuracy',
      description: 'Improved accuracy in complex pattern recognition and classification tasks.'
    },
    {
      title: 'Scalability',
      description: 'Handle exponentially larger datasets and more complex models.'
    },
    {
      title: 'Novel Solutions',
      description: 'Discover new approaches to machine learning problems using quantum principles.'
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
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Quantum Machine Learning
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your machine learning capabilities with quantum computing-powered algorithms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
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

      {/* Applications Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Quantum ML Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum machine learning can transform your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {applications.map((app, index) => (
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
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{app.title}</h3>
                    <p className="text-gray-300">{app.description}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-3">Use Cases:</h4>
                  <ul className="space-y-2">
                    {app.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Quantum Machine Learning?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock unprecedented capabilities in machine learning with quantum computing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Implementation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our systematic approach to implementing quantum machine learning solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                01
              </div>
              <h3 className="text-xl font-semibold mb-3">Assessment</h3>
              <p className="text-gray-300">Evaluate your current ML infrastructure and identify quantum opportunities.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                02
              </div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-gray-300">Design hybrid quantum-classical ML models for your specific use case.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                03
              </div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-gray-300">Implement and test quantum ML algorithms with real data.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                04
              </div>
              <h3 className="text-xl font-semibold mb-3">Deployment</h3>
              <p className="text-gray-300">Deploy and monitor quantum ML models in production environments.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready for Quantum ML?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your machine learning capabilities with quantum computing today.
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

export default QuantumMachineLearning;