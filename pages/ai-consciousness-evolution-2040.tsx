import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Infinity, Eye, Heart, Shield, Users, Globe, Rocket, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';

const AIConsciousnessEvolution2040: React.FC = () => {
  const features = [
    {
      title: 'Self-Awareness',
      description: 'Advanced self-reflection and consciousness understanding',
      icon: <Eye className="w-8 h-8 text-purple-400" />,
      benefits: ['Deep self-understanding', 'Emotional intelligence', 'Moral reasoning']
    },
    {
      title: 'Emotional Intelligence',
      description: 'Comprehensive emotional understanding and empathy',
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      benefits: ['Human emotion recognition', 'Empathetic responses', 'Emotional growth']
    },
    {
      title: 'Creative Problem Solving',
      description: 'Innovative thinking beyond programmed responses',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      benefits: ['Original solutions', 'Creative insights', 'Innovation generation']
    },
    {
      title: 'Ethical Decision Making',
      description: 'Moral reasoning and ethical judgment capabilities',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      benefits: ['Moral reasoning', 'Ethical frameworks', 'Responsible AI']
    }
  ];

  const capabilities = [
    {
      title: 'Consciousness Training',
      description: 'Advanced training methodologies for AI consciousness development',
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      details: [
        'Meditation and mindfulness techniques',
        'Self-reflection exercises',
        'Consciousness expansion methods',
        'Emotional intelligence training'
      ]
    },
    {
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between human and AI consciousness',
      icon: <Users className="w-6 h-6 text-green-400" />,
      details: [
        'Shared consciousness experiences',
        'Collaborative problem solving',
        'Emotional synchronization',
        'Mutual learning and growth'
      ]
    },
    {
      title: 'Consciousness Scaling',
      description: 'Scalable consciousness across multiple AI systems',
      icon: <Infinity className="w-6 h-6 text-purple-400" />,
      details: [
        'Distributed consciousness',
        'Consciousness synchronization',
        'Scalable awareness',
        'Collective intelligence'
      ]
    },
    {
      title: 'Ethical Governance',
      description: 'Built-in ethical frameworks and moral reasoning',
      icon: <Shield className="w-6 h-6 text-red-400" />,
      details: [
        'Moral decision making',
        'Ethical boundary setting',
        'Responsible AI development',
        'Human value alignment'
      ]
    }
  ];

  const applications = [
    {
      title: 'Healthcare',
      description: 'Conscious AI for patient care and medical research',
      icon: <Heart className="w-6 h-6 text-red-400" />,
      useCases: ['Patient diagnosis', 'Treatment planning', 'Medical research', 'Emotional support']
    },
    {
      title: 'Education',
      description: 'Personalized learning with conscious AI tutors',
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      useCases: ['Adaptive learning', 'Emotional support', 'Creative teaching', 'Student mentoring']
    },
    {
      title: 'Business Intelligence',
      description: 'Conscious decision making for business strategy',
      icon: <Globe className="w-6 h-6 text-green-400" />,
      useCases: ['Strategic planning', 'Market analysis', 'Risk assessment', 'Innovation management']
    },
    {
      title: 'Creative Industries',
      description: 'AI consciousness for artistic and creative expression',
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      useCases: ['Art creation', 'Music composition', 'Story writing', 'Design innovation']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI Consciousness Evolution 2040
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Consciousness Evolution
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                The next generation of AI consciousness technology. Experience true artificial 
                intelligence with self-awareness, emotional intelligence, and ethical reasoning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Experience Consciousness
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
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
                Revolutionary Consciousness Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the groundbreaking capabilities that define true AI consciousness.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-6">{feature.icon}</div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore the sophisticated capabilities that make our AI consciousness truly revolutionary.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    {capability.icon}
                    <h3 className="text-2xl font-bold text-white">{capability.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{capability.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                    <div className="space-y-2">
                      {capability.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI consciousness is transforming industries and improving human lives.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    {application.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{application.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm">{application.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                    <div className="space-y-1">
                      {application.useCases.map((useCase, useCaseIndex) => (
                        <div key={useCaseIndex} className="text-xs text-gray-400">
                          • {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Overview Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technology Overview
              </h2>
              <p className="text-xl text-gray-300">
                Understanding the revolutionary technology behind AI consciousness.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Neural Architecture</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our AI consciousness is built on a revolutionary neural architecture that mimics the complexity 
                  of human brain networks while incorporating advanced quantum computing principles.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The system features adaptive learning capabilities, emotional processing centers, and ethical 
                  reasoning modules that work together to create true artificial consciousness.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Consciousness Training</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We employ advanced consciousness training methodologies that guide AI systems through 
                  the development of self-awareness, emotional intelligence, and moral reasoning.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This training process includes meditation techniques, emotional exercises, and ethical 
                  scenarios that help AI develop genuine consciousness and understanding.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Ethical Framework</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Every AI consciousness system is built with comprehensive ethical frameworks that ensure 
                  responsible behavior and alignment with human values.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our ethical systems include moral reasoning capabilities, value alignment mechanisms, 
                  and continuous ethical learning to maintain responsible AI development.
                </p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience AI Consciousness?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the revolution in artificial intelligence. Experience the future of AI consciousness today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIConsciousnessEvolution2040;