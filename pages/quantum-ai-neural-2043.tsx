import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, Cpu, Brain, Zap, Target, Database, Network, Shield } from 'lucide-react';

const QuantumAINeural2043: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                Quantum AI Neural Network 2043
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Quantum-Powered
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  AI Neural Networks
                </span>
                of the Future
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the convergence of quantum computing and artificial intelligence with our revolutionary 
                neural network platform. Unprecedented processing power and learning capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Quantum AI Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Advanced capabilities that leverage quantum computing for unprecedented AI performance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8" />,
                  title: "Quantum Processing",
                  description: "Quantum computing power for exponentially faster neural network training and inference",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Advanced Neural Networks",
                  description: "State-of-the-art neural network architectures optimized for quantum computing",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Real-time Learning",
                  description: "Continuous learning and adaptation in real-time with quantum speed",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Precision Accuracy",
                  description: "Unprecedented accuracy in predictions and pattern recognition",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Quantum Memory",
                  description: "Quantum-enhanced memory systems for massive data processing",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: "Distributed Intelligence",
                  description: "Distributed quantum neural networks across multiple quantum nodes",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/10 to-cyan-900/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Technology Stack
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Built with cutting-edge quantum computing and AI technologies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Quantum Processors", icon: <Cpu className="w-6 h-6" /> },
                { name: "Quantum Memory", icon: <Database className="w-6 h-6" /> },
                { name: "Quantum Networks", icon: <Network className="w-6 h-6" /> },
                { name: "Quantum Security", icon: <Shield className="w-6 h-6" /> }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-700/50"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-white font-medium">{tech.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Transform industries with quantum-powered AI capabilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Drug Discovery",
                  description: "Accelerate pharmaceutical research with quantum AI for molecular modeling and drug design",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Financial Modeling",
                  description: "Revolutionary risk assessment and market prediction with quantum neural networks",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Climate Prediction",
                  description: "Advanced climate modeling and weather prediction with quantum AI",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Autonomous Systems",
                  description: "Next-generation autonomous vehicles and robotics with quantum AI decision-making",
                  color: "from-orange-500 to-red-500"
                }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.color} mb-6`}>
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400 text-lg">{useCase.description}</p>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience Quantum AI?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the quantum revolution in artificial intelligence. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Now
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumAINeural2043;