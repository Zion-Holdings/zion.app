import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, Star, CheckCircle, Users, Shield, Globe, Cpu, Database, Network, Eye } from 'lucide-react';

const BrainComputerInterface2040: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      title: 'Neural Interface Technology',
      description: 'Advanced brain-computer interfaces with unprecedented neural signal processing'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Real-time Communication',
      description: 'Instant thought-to-action translation with minimal latency'
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: 'Precision Control',
      description: 'Exact control over digital systems through neural commands'
    },
    {
      icon: <Star className="w-8 h-8 text-purple-400" />,
      title: 'Consciousness Integration',
      description: 'Seamless integration between human consciousness and digital systems'
    }
  ];

  const benefits = [
    'Direct neural control of technology',
    'Enhanced human-computer interaction',
    'Revolutionary accessibility solutions',
    'Advanced medical applications',
    'Consciousness-based computing',
    'Unprecedented human potential'
  ];

  const applications = [
    {
      title: 'Medical Rehabilitation',
      description: 'Restoring movement and communication for patients with paralysis',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Assistive Technology',
      description: 'Enabling independence for people with disabilities',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Gaming & Entertainment',
      description: 'Immersive experiences controlled directly by thoughts',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Professional Applications',
      description: 'Enhanced productivity and control in professional environments',
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const technologyStack = [
    'Advanced Neural Sensors',
    'AI Signal Processing',
    'Quantum Neural Networks',
    'Consciousness Mapping',
    'Real-time Neural Decoding',
    'Biocompatible Interface Materials'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-pink-900/20 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                Revolutionary Neural Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Brain-Computer Interface
                <span className="block bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  2040
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of human-computer interaction with revolutionary 
                brain-computer interfaces that connect consciousness directly to technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25"
                >
                  Get Started
                </a>
                <a
                  href="/emerging-tech"
                  className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-black transition-all duration-300"
                >
                  Learn More
                </a>
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
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our brain-computer interface platform delivers unprecedented capabilities 
                that redefine the relationship between human consciousness and technology.
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

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Brain-Computer Interface?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the transformative power of direct neural control that 
                opens up unlimited possibilities for human-computer interaction.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-lg text-white">{benefit}</span>
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
                Discover how brain-computer interfaces are revolutionizing industries and 
                transforming the way humans interact with technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4 text-pink-400">{application.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{application.title}</h3>
                  <p className="text-gray-300">{application.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on the most cutting-edge neural interface technologies available in 2040, 
                ensuring unparalleled brain-computer interaction capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologyStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-300">{tech}</span>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Connect Your Mind?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the brain-computer interface revolution and discover what's possible when 
                human consciousness directly controls and interacts with technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25"
                >
                  Start Your Journey
                </a>
                <a
                  href="/emerging-tech"
                  className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-black transition-all duration-300"
                >
                  Explore All Emerging Tech
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BrainComputerInterface2040;