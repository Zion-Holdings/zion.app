import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Rocket, Globe, Zap, Target, CheckCircle, ArrowRight,
  Cpu, Database, Shield, Satellite, Users, Network
} from 'lucide-react';
import Link from 'next/link';

const SpaceResourceIntelligence2043: React.FC = () => {
  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Space Resource Mapping',
      description: 'Advanced AI-powered mapping of space resources and materials',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Autonomous Space Operations',
      description: 'Fully autonomous space resource extraction and management',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Quantum Space Computing',
      description: 'Quantum-powered computing for space resource optimization',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: 'Real-Time Space Monitoring',
      description: 'Continuous monitoring and analysis of space resources',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const useCases = [
    'Space Mining',
    'Resource Mapping',
    'Satellite Operations',
    'Space Exploration',
    'Resource Optimization',
    'Space Infrastructure'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Space Resource Intelligence 2043 - AI-Powered Space Resource Management"
        description="Revolutionary space resource intelligence platform for 2024. AI-powered mapping, autonomous operations, and quantum computing for space resource optimization."
        keywords={["space resource intelligence", "space mining", "space operations", "AI space", "quantum space", "2024"]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Space Resource Intelligence 2043
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary space resource intelligence platform with AI-powered mapping, 
              autonomous operations, and quantum computing for space resource optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/25"
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="/space-technology">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-indigo-500/50 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-500/10 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Space Intelligence Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of space resource management with AI intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform space exploration with AI-powered resource intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-6 rounded-xl border border-white/10 bg-white/5 hover:border-indigo-500/30 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                <span className="text-white font-medium">{useCase}</span>
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
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ready for Space Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore the future of space with Zion Tech Group
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/25"
              >
                Start Your Journey
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpaceResourceIntelligence2043;