import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import {
  Atom, Brain, Zap, Target, Users, Award, CheckCircle,
  Cpu, Database, Shield, Globe, Rocket, Network,
  TrendingUp, Star, Sparkles, ArrowRight, Activity
} from 'lucide-react';

const QuantumAINeuralNetwork2043: React.FC = () => {
  const features = [
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Processing",
      description: "Quantum computing cores that process neural networks at unprecedented speeds",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neural Architecture",
      description: "Advanced neural network architectures inspired by human brain structures",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Distributed Learning",
      description: "Distributed neural networks that learn and adapt across multiple quantum nodes",
      color: "from-emerald-500 to-teal-500"
    },
    {
              icon: <Activity className="w-8 h-8" />,
      title: "Quantum Circuits",
      description: "Quantum circuit optimization for maximum neural network efficiency",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Quantum Memory",
      description: "Quantum memory systems for storing and retrieving neural network states",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Evolutionary Networks",
      description: "Self-evolving neural networks that continuously improve their architecture",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quantum Speed",
      description: "Process complex neural networks in seconds instead of hours"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Unlimited Scale",
      description: "Scale neural networks to unprecedented sizes and complexity"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quantum Entanglement",
      description: "Leverage quantum entanglement for instant information transfer"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Parallel Processing",
      description: "Process multiple neural pathways simultaneously"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quantum Learning",
      description: "Advanced learning algorithms that leverage quantum properties"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Future-Proof",
      description: "Built on the cutting edge of quantum computing technology"
    }
  ];

  const useCases = [
    {
      title: "Drug Discovery",
      description: "Quantum neural networks for molecular modeling and drug development",
      icon: <Atom className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Financial Modeling",
      description: "Complex financial predictions using quantum neural networks",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Climate Prediction",
      description: "Advanced climate modeling with quantum neural networks",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Space Exploration",
      description: "Autonomous space navigation using quantum neural networks",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Research",
      description: "Breakthrough AI research powered by quantum neural networks",
      icon: <Brain className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Cybersecurity",
      description: "Quantum-resistant security systems with neural network intelligence",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "1000x", label: "Processing Speed", description: "Faster than classical neural networks" },
    { number: "∞", label: "Scalability", description: "Unlimited neural network size" },
    { number: "99.99%", label: "Accuracy", description: "Quantum-enhanced precision" },
    { number: "24/7", label: "Operation", description: "Continuous quantum processing" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary Quantum Technology 2043
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                  Quantum AI Neural Network 2043
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Experience the future of artificial intelligence with quantum-powered neural networks. 
                Our revolutionary technology combines quantum computing with advanced neural architectures 
                to create the most powerful AI systems ever developed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  Explore All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Quantum AI Neural Network platform combines the power of quantum computing with 
                advanced neural network architectures to create unprecedented AI capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Quantum AI Neural Networks?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of quantum computing combined with advanced neural networks 
                to solve the most complex problems in human history.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Quantum AI Neural Network technology is revolutionizing industries across the globe, 
                from healthcare to space exploration, with unprecedented computational power.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 mb-6 rounded-xl bg-gradient-to-r ${useCase.color} flex items-center justify-center text-white`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Deep Dive */}
        <section className="py-20 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Quantum Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform leverages the latest breakthroughs in quantum computing, 
                neural network architecture, and artificial intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Quantum Computing Cores</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Quantum Bits (Qubits)</h4>
                      <p className="text-gray-300 text-sm">Advanced qubit technology for superior computational power</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Quantum Entanglement</h4>
                      <p className="text-gray-300 text-sm">Leverage quantum entanglement for instant information transfer</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Superposition States</h4>
                      <p className="text-gray-300 text-sm">Process multiple neural pathways simultaneously</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Neural Network Architecture</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Deep Learning Networks</h4>
                      <p className="text-gray-300 text-sm">Multi-layered neural networks with quantum optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Recurrent Networks</h4>
                      <p className="text-gray-300 text-sm">Memory-enabled networks for sequential data processing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Convolutional Networks</h4>
                      <p className="text-gray-300 text-sm">Specialized networks for pattern recognition and analysis</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 rounded-3xl p-12 border border-blue-500/20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience Quantum AI?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join the quantum revolution in artificial intelligence. Our Quantum AI Neural Network platform 
                is ready to transform your business and unlock new possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                >
                  Start Your Journey
                </a>
                <a
                  href="/pricing"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumAINeuralNetwork2043;