import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Rocket, Globe, Target, Star, CheckCircle, Satellite, Database, Shield, Zap, Atom, Brain, Users } from 'lucide-react';

const SpaceResourceIntelligence2040: React.FC = () => {
  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-indigo-400" />,
      title: 'Space Mining Intelligence',
      description: 'AI-powered systems for identifying and extracting valuable resources from asteroids and celestial bodies'
    },
    {
      icon: <Satellite className="w-8 h-8 text-blue-400" />,
      title: 'Orbital Resource Mapping',
      description: 'Comprehensive mapping and analysis of resources across the solar system'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'Autonomous Space Operations',
      description: 'Self-directed space missions with advanced decision-making capabilities'
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: 'Resource Optimization',
      description: 'Intelligent resource allocation and utilization for space missions'
    }
  ];

  const benefits = [
    'Unlimited resource access beyond Earth',
    'Revolutionary space exploration capabilities',
    'Sustainable resource extraction methods',
    'Advanced autonomous space technology',
    'Economic opportunities in space economy',
    'Scientific discovery acceleration'
  ];

  const applications = [
    {
      title: 'Asteroid Mining',
      description: 'Automated extraction of precious metals and rare elements from near-Earth asteroids',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'Lunar Resource Development',
      description: 'Establishing sustainable resource operations on the Moon for future colonization',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Mars Resource Planning',
      description: 'Strategic planning for resource utilization in Mars exploration missions',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Space Manufacturing',
      description: 'In-space manufacturing using locally sourced materials and resources',
      icon: <Atom className="w-6 h-6" />
    }
  ];

  const technologyStack = [
    'Advanced AI Space Navigation',
    'Autonomous Resource Extraction Systems',
    'Quantum Communication Networks',
    'Space Resource Mapping AI',
    'Sustainable Mining Technologies',
    'Interplanetary Logistics Systems'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900/20 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Revolutionary Space Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Space Resource Intelligence
                <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  2040
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Explore the final frontier with AI-powered space resource intelligence, 
                enabling sustainable resource extraction and space exploration beyond imagination.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25"
                >
                  Get Started
                </a>
                <a
                  href="/space-tech"
                  className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-black transition-all duration-300"
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
                Our space resource intelligence platform delivers unprecedented capabilities 
                that redefine what's possible in space exploration and resource utilization.
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
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Space Resource Intelligence?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the transformative power of AI-driven space technology that 
                opens up unlimited possibilities for resource exploration and utilization.
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
                Discover how space resource intelligence is revolutionizing space exploration 
                and creating new economic opportunities beyond Earth.
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
                  <div className="mb-4 text-indigo-400">{application.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{application.title}</h3>
                  <p className="text-gray-300">{application.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-indigo-900/20">
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
                Built on the most cutting-edge space technologies available in 2040, 
                ensuring unparalleled space exploration and resource utilization capabilities.
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
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
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
                Ready to Explore Space?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the space revolution and discover what's possible when 
                AI meets space exploration and resource intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25"
                >
                  Start Your Journey
                </a>
                <a
                  href="/space-tech"
                  className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-black transition-all duration-300"
                >
                  Explore All Space Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SpaceResourceIntelligence2040;