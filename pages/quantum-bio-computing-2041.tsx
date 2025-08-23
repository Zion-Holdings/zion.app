import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Zap, Target, ArrowRight, 
  Dna, Leaf, Eye, BarChart3, CheckCircle, 
  Star, TrendingUp, Globe, Network, Code
} from 'lucide-react';

const QuantumBioComputing2041: React.FC = () => {
  const features = [
    {
      icon: <Dna className="w-8 h-8" />,
      title: "Quantum DNA Computing",
      description: "Revolutionary computing using quantum principles and biological molecules"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Bio-Quantum Hybrid Systems",
      description: "Integration of quantum computing with biological processes"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Consciousness Integration",
      description: "AI systems with biological consciousness and quantum processing"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Bio-Quantum Sensing",
      description: "Advanced biological sensors with quantum detection capabilities"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Quantum Bio-Networks",
      description: "Biological networks enhanced with quantum communication"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Bio-Quantum Algorithms",
      description: "Next-generation algorithms combining biology and quantum computing"
    }
  ];

  const benefits = [
    "1000x faster bio-processing",
    "Unlimited biological scalability",
    "Consciousness integration",
    "Real-time bio-optimization",
    "Quantum bio-security",
    "Sustainable computing"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
                <Dna className="w-4 h-4 mr-2" />
                Quantum Bio-Computing 2041
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                Quantum Bio-Computing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionary computing systems that combine quantum mechanics with biological processes, 
                creating conscious AI with unprecedented biological intelligence and processing power.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                  Deploy Bio-Quantum System
                </button>
                <button className="px-8 py-4 border border-green-500/50 text-green-300 font-semibold rounded-full hover:bg-green-500/20 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Bio-Quantum Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our systems combine the power of quantum computing with biological intelligence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-green-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-green-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Computing with Biology
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of computing with biological and quantum integration.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Bio-Processing</span>
                    <span className="text-green-400 font-semibold">1000x Faster</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Scalability</span>
                    <span className="text-green-400 font-semibold">Unlimited</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Consciousness</span>
                    <span className="text-green-400 font-semibold">Integrated</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sustainability</span>
                    <span className="text-green-400 font-semibold">100%</span>
                  </div>
                </div>
              </motion.div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Bio-Quantum Computing?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Deploy the future of computing with biological and quantum integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                  Deploy Bio-Quantum System
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-green-500/50 text-green-300 font-semibold rounded-full hover:bg-green-500/20 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumBioComputing2041;