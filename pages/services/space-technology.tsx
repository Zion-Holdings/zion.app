import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { Rocket, Zap, Target, Users, Shield, Star, CheckCircle, Globe, Satellite, Orbit, Telescope, Globe2, Sun, Moon } from 'lucide-react';

const SpaceTechnologyPage: React.FC = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Space Launch Systems',
      description: 'Advanced propulsion and launch vehicle technology'
    },
    {
      icon: Satellite,
      title: 'Satellite Technology',
      description: 'Earth observation and communication satellites'
    },
    {
      icon: Orbit,
      title: 'Orbital Mechanics',
      description: 'Precise orbital calculations and trajectory optimization'
    },
    {
      icon: Telescope,
      title: 'Space Observation',
      description: 'Advanced telescopes and imaging systems'
    },
    {
      icon: Globe2,
      title: 'Planetary Exploration',
      description: 'Robotic missions and planetary research'
    },
    {
      icon: Moon,
      title: 'Lunar & Mars Missions',
      description: 'Human spaceflight and colonization planning'
    }
  ];

  const applications = [
    'Satellite communications and navigation',
    'Earth observation and climate monitoring',
    'Space resource mining and utilization',
    'Interplanetary travel and exploration',
    'Space tourism and commercial spaceflight',
    'Astronomical research and discovery'
  ];

  const benefits = [
    'Revolutionary breakthroughs in space exploration',
    'Advanced satellite technology and services',
    'Sustainable space resource utilization',
    'Enhanced Earth observation capabilities',
    'Commercial space opportunities and innovation',
    'Scientific advancement and discovery'
  ];

  return (
    <Layout
      title="Space Technology Solutions - Zion Tech Group"
      description="Revolutionary space technology solutions including satellite systems, space exploration, and resource management for the future of space travel."
      keywords="space technology, satellite systems, space exploration, orbital mechanics, space resources, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Space Technology Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent mb-6">
                Space Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Pioneer the future of space exploration with our revolutionary space technology solutions including satellite systems, orbital mechanics, and space resource management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                  Explore Space Solutions
                </button>
                <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300">
                  Space Technology Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Space Technology Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our space technology platform represents the cutting edge of space exploration and satellite technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/60 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Space Technology Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover how space technology is revolutionizing industries and expanding human capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/40 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <p className="text-gray-300">{application}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Space Technology?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of space exploration with our revolutionary technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Reach for the Stars?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join us in pioneering the next frontier of space exploration and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                  Launch Space Journey
                </button>
                <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300">
                  Contact Space Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SpaceTechnologyPage;