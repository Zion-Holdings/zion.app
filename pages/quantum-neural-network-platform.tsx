import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, Brain, Zap, Target, Cpu, Shield, TrendingUp, Users } from 'lucide-react';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-indigo-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full">
                  <Atom className="w-12 h-12 text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Quantum Neural Network Platform
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary quantum computing platform that combines quantum mechanics with neural networks 
                to create unprecedented AI capabilities and computational power.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Explore Platform
                </button>
                <button className="px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300">
                  Request Demo
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Computing Meets Neural Networks
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our platform leverages quantum superposition and entanglement to create neural networks 
                that operate at speeds and scales previously thought impossible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8 text-blue-400" />,
                  title: "Quantum Superposition",
                  description: "Leverage quantum superposition to process multiple neural network states simultaneously."
                },
                {
                  icon: <Brain className="w-8 h-8 text-indigo-400" />,
                  title: "Quantum Entanglement",
                  description: "Utilize quantum entanglement for instant correlation across neural network layers."
                },
                {
                  icon: <Zap className="w-8 h-8 text-cyan-400" />,
                  title: "Exponential Speed",
                  description: "Achieve computational speeds that scale exponentially with quantum bits."
                },
                {
                  icon: <Target className="w-8 h-8 text-green-400" />,
                  title: "Precision Training",
                  description: "Train neural networks with quantum precision for unprecedented accuracy."
                },
                {
                  icon: <Cpu className="w-8 h-8 text-purple-400" />,
                  title: "Hybrid Architecture",
                  description: "Seamlessly integrate quantum and classical computing for optimal performance."
                },
                {
                  icon: <Shield className="w-8 h-8 text-yellow-400" />,
                  title: "Quantum Security",
                  description: "Built-in quantum-resistant security protocols for data protection."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for the Quantum Revolution?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Experience the future of computing with our quantum neural network platform. 
                Transform your AI capabilities with quantum-powered intelligence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumNeuralNetworkPlatform;