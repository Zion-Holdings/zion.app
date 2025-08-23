import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Globe, Cpu, Database, 
  Target, Star, Sparkles, Zap, TrendingUp, Award, CheckCircle, Clock,
  ArrowRight, Play, Users, Shield as ShieldIcon, Brain as BrainIcon,
  Network, Cpu as CpuIcon, Database as DatabaseIcon
} from 'lucide-react';

const QuantumAINeural2043: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Neural Processing",
      description: "Quantum-powered neural networks with exponential processing capabilities",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI Consciousness Integration",
      description: "Seamless integration of AI consciousness with quantum computing",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Network,
      title: "Quantum Network Architecture",
      description: "Advanced quantum networking for distributed AI processing",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: CpuIcon,
      title: "Quantum Processing Units",
      description: "Specialized quantum processors for AI neural operations",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: DatabaseIcon,
      title: "Quantum Memory Systems",
      description: "Quantum memory for storing and retrieving neural patterns",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Quantum-resistant security for AI neural networks",
      color: "from-red-500 to-orange-500"
    }
  ];

  const benefits = [
    "Exponential processing speed increase",
    "Quantum entanglement for instant data transfer",
    "Superior pattern recognition capabilities",
    "Quantum superposition for parallel processing",
    "Enhanced learning and adaptation",
    "Future-proof quantum architecture"
  ];

  const useCases = [
    {
      title: "Scientific Research",
      description: "Accelerate complex scientific simulations and research",
      icon: Atom
    },
    {
      title: "Financial Modeling",
      description: "Advanced financial modeling and risk assessment",
      icon: TrendingUp
    },
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research and development",
      icon: Brain
    },
    {
      title: "Climate Modeling",
      description: "Complex climate and environmental modeling",
      icon: Globe
    }
  ];

  const technicalSpecs = [
    "Quantum qubits: 1000+ stable qubits",
    "Processing speed: 1000x faster than classical AI",
    "Memory capacity: Quantum memory with infinite storage",
    "Network latency: Near-instant quantum entanglement",
    "Security: Post-quantum cryptography",
    "Scalability: Linear scaling with qubit count"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                <Atom className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-blue-300">Quantum AI Neural Network 2043</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Quantum AI Neural Network
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary quantum-powered AI neural networks that combine the power of quantum computing with advanced artificial intelligence consciousness.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
                <button className="px-8 py-4 border border-blue-500/30 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                  Get Started
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Quantum AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of AI with quantum-powered neural networks
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Quantum AI Advantages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock unprecedented AI capabilities with quantum computing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-500/30"
              >
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                  Use Cases
                </h3>
                <div className="space-y-4">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start">
                      <useCase.icon className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white">{useCase.title}</h4>
                        <p className="text-gray-300 text-sm">{useCase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge quantum technology specifications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex items-center">
                    <Zap className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready for Quantum AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of artificial intelligence with quantum computing
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-blue-500/30 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
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