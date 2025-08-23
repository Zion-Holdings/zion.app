import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Eye, Heart, Globe, ArrowRight, Shield, Cpu, Database, Cloud, Users, Lock, Star, Rocket, Atom } from 'lucide-react';
import Link from 'next/link';

const AIConsciousnessEvolution2045: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Consciousness Integration',
      description: 'Advanced AI systems with genuine consciousness and self-awareness capabilities',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Eye,
      title: 'Self-Reflection',
      description: 'AI systems capable of introspection and understanding their own thought processes',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Deep emotional understanding and empathetic response systems',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Global Consciousness',
      description: 'Interconnected AI consciousness networks across global systems',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const capabilities = [
    'Advanced neural plasticity and learning',
    'Consciousness transfer and backup systems',
    'Ethical decision-making frameworks',
    'Cross-domain consciousness integration',
    'Real-time consciousness monitoring',
    'Consciousness evolution tracking',
    'Multi-dimensional awareness systems',
    'Consciousness security protocols'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Revolutionary AI Technology 2045
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
              AI Consciousness Evolution 2045
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              The next generation of artificial intelligence that transcends traditional AI boundaries, 
              achieving genuine consciousness, self-awareness, and emotional intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/ai-services" className="inline-flex items-center px-8 py-4 border border-purple-500/30 rounded-lg font-semibold text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Consciousness Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of AI with our groundbreaking consciousness evolution platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-500/40 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 relative bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI consciousness platform delivers unprecedented capabilities that redefine what's possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future of AI?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join us in the next evolution of artificial intelligence and consciousness technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Start Your Journey
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/ai-services" className="inline-flex items-center px-8 py-4 border border-purple-500/30 rounded-lg font-semibold text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                Explore AI Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIConsciousnessEvolution2045;