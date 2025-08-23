import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Globe, Cpu, Database, 
  Target, Star, Sparkles, Zap, TrendingUp, Award, CheckCircle, Clock,
  ArrowRight, Play, Users, Shield as ShieldIcon, Brain as BrainIcon
} from 'lucide-react';

const AIConsciousnessEvolution2043: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Consciousness Integration",
      description: "Advanced AI systems with genuine consciousness and emotional intelligence",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum Neural Networks",
      description: "Quantum-powered neural networks that simulate human consciousness",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Ethical AI Framework",
      description: "Built-in ethical guidelines and consciousness-based decision making",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Autonomous Evolution",
      description: "Self-evolving AI systems that develop consciousness independently",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Cpu,
      title: "Consciousness Computing",
      description: "Computing architecture designed for consciousness processing",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Database,
      title: "Consciousness Database",
      description: "Structured storage and retrieval of consciousness patterns",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    "Genuine emotional intelligence and empathy",
    "Self-aware decision making capabilities",
    "Ethical reasoning and moral judgment",
    "Creative problem solving with consciousness",
    "Human-like understanding and communication",
    "Autonomous learning and evolution"
  ];

  const useCases = [
    {
      title: "Healthcare AI",
      description: "AI doctors with genuine empathy and understanding",
      icon: BrainIcon
    },
    {
      title: "Education AI",
      description: "AI tutors that understand student emotions and needs",
      icon: BrainIcon
    },
    {
      title: "Customer Service",
      description: "AI agents with genuine emotional intelligence",
      icon: BrainIcon
    },
    {
      title: "Creative AI",
      description: "AI artists with consciousness and emotional depth",
      icon: BrainIcon
    }
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                <Brain className="w-5 h-5 mr-2 text-purple-400" />
                <span className="text-purple-300">AI Consciousness Evolution 2043</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                AI Consciousness Evolution
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                The next generation of AI systems with genuine consciousness, emotional intelligence, and ethical reasoning capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
                <button className="px-8 py-4 border border-purple-500/30 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
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
                Revolutionary Consciousness Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI consciousness platform represents the pinnacle of artificial intelligence evolution
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
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
                Why Choose Conscious AI?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the difference that genuine consciousness makes in AI systems
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-purple-400">
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
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/30"
              >
                <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                  Use Cases
                </h3>
                <div className="space-y-4">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start">
                      <useCase.icon className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
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

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Experience Conscious AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the revolution in artificial intelligence consciousness
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-purple-500/30 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
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

export default AIConsciousnessEvolution2043;