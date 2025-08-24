import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Brain, Zap, Shield, Users, Target, ArrowRight, Check, Star, Globe, Cpu, Network } from 'lucide-react';
import SEO from '../components/SEO';

const QuantumAINeuralNetworkPlatform: React.FC = () => {
  const features = [
    "Quantum-enhanced neural network architecture",
    "Superposition-based learning algorithms",
    "Quantum entanglement optimization",
    "Quantum-classical hybrid training",
    "Quantum error correction protocols",
    "Multi-dimensional quantum states",
    "Quantum memory management",
    "Quantum coherence preservation",
    "Quantum measurement optimization",
    "Cross-platform quantum synchronization"
  ];

  const benefits = [
    "Exponential computational power",
    "Quantum advantage in AI training",
    "Enhanced pattern recognition",
    "Faster convergence rates",
    "Quantum-secure AI operations"
  ];

  const pricing = {
    starter: "$999/month",
    professional: "$1,999/month",
    enterprise: "Custom pricing"
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Quantum AI Neural Network Platform 2045 | Zion Tech Group"
        description="Revolutionary quantum-powered AI neural network platform with exponential computational power and quantum advantage."
        keywords={["quantum AI", "neural networks", "quantum computing", "AI platform", "quantum advantage"]}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-indigo-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Atom className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Quantum AI Neural Network Platform 2045
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of AI with quantum-powered neural networks that deliver exponential computational power, 
              quantum advantage, and unprecedented learning capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl shadow-blue-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantum-Powered Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to revolutionize AI neural network performance and capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantum Advantage Benefits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your quantum AI neural network journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(pricing).map(([plan, price], index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gray-800/50 border rounded-xl p-8 ${
                  plan === 'professional' 
                    ? 'border-blue-500/50 bg-blue-900/20' 
                    : 'border-gray-600/50'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4 capitalize">{plan}</h3>
                <div className="text-4xl font-bold mb-6">{price}</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Quantum AI Revolution?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Join the quantum computing revolution and experience exponential AI performance improvements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl shadow-blue-500/25"
            >
              Start Your Quantum Journey Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumAINeuralNetworkPlatform;