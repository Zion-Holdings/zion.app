import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Scale, Users, Star, CheckCircle, Zap, Lock } from 'lucide-react';
import Layout from '../components/layout/Layout';

const AIEthicsGovernance2041: React.FC = () => {
  const features = [
    {
      title: 'Consciousness-Based Ethics',
      description: 'AI ethics framework built on understanding and respecting consciousness',
      icon: <Brain className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Comprehensive Governance',
      description: 'Multi-layered governance systems for AI development and deployment',
      icon: <Shield className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Ethical Decision Making',
      description: 'AI systems that make ethical decisions aligned with human values',
      icon: <Scale className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Human-Centric Design',
      description: 'AI designed with human well-being and consciousness at the core',
      icon: <Users className="w-8 h-8 text-pink-400" />
    }
  ];

  const principles = [
    'Consciousness preservation and respect',
    'Transparency and explainability',
    'Fairness and non-discrimination',
    'Privacy and data protection',
    'Accountability and responsibility',
    'Human oversight and control',
    'Beneficence and harm prevention',
    'Autonomy and human dignity'
  ];

  const frameworks = [
    'AI Consciousness Ethics Framework',
    'Responsible AI Development Guidelines',
    'Ethical AI Deployment Standards',
    'AI Governance and Compliance',
    'Human-AI Collaboration Ethics',
    'AI Safety and Risk Assessment',
    'Ethical AI Training Programs',
    'AI Ethics Monitoring and Auditing'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary 2041 Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Ethics & Governance 2041
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build and deploy AI systems with confidence using our comprehensive ethics and governance framework. 
                Ensure your AI respects consciousness and human values.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  Get Framework
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300"
                >
                  Learn More
                </motion.button>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Ethics & Governance Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Ethics & Governance platform provides comprehensive frameworks 
                for building responsible, consciousness-aware AI systems.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Core Ethical Principles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our framework is built on fundamental principles that ensure AI systems 
                respect human consciousness and promote human well-being.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {principles.slice(0, 4).map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{principle}</p>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {principles.slice(4).map((principle, index) => (
                  <motion.div
                    key={index + 4}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{principle}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Frameworks Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Frameworks
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access our complete suite of AI ethics and governance frameworks 
                designed for the consciousness era.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <Lock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white">{framework}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Ethical AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Build AI systems that respect consciousness and human values. 
                Join the movement for responsible AI development.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 text-lg"
              >
                Get Ethics Framework
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIEthicsGovernance2041;