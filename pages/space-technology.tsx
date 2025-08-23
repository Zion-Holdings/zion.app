import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Satellite, Globe, Star, Zap, Target, Atom, Users, ArrowRight, Shield, Brain } from 'lucide-react';
import SEO from '../components/SEO';

const spaceServices = [
  {
    title: 'Space Resource Mining',
    description: 'Advanced platforms for extracting and processing resources from asteroids and celestial bodies',
    icon: <Rocket className="w-8 h-8 text-orange-400" />,
    href: '/space-resource-mining-platform',
    features: ['Asteroid Mining', 'Resource Processing', 'Space Logistics']
  },
  {
    title: 'AI-Powered Space Technology',
    description: 'Intelligent systems for space exploration, navigation, and mission control',
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    href: '/ai-powered-space-technology',
    features: ['Autonomous Navigation', 'Mission Planning', 'Data Analysis']
  },
  {
    title: 'Satellite Technology',
    description: 'Advanced satellite systems for communication, observation, and research',
    icon: <Satellite className="w-8 h-8 text-blue-400" />,
    href: '/satellite-technology-solutions',
    features: ['Communication Satellites', 'Earth Observation', 'Research Platforms']
  },
  {
    title: 'Space Infrastructure',
    description: 'Orbital and lunar infrastructure for sustainable space operations',
    icon: <Globe className="w-8 h-8 text-green-400" />,
    href: '/space-infrastructure-platform',
    features: ['Orbital Stations', 'Lunar Bases', 'Space Habitats']
  },
  {
    title: 'Space Communications',
    description: 'High-speed communication networks for interplanetary and deep space missions',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    href: '/space-communications-network',
    features: ['Deep Space Comms', 'Quantum Communications', 'Network Security']
  },
  {
    title: 'Space Robotics',
    description: 'Autonomous robotic systems for space exploration and maintenance',
    icon: <Target className="w-8 h-8 text-purple-400" />,
    href: '/space-robotics-platform',
    features: ['Autonomous Rovers', 'Maintenance Robots', 'Exploration Drones']
  }
];

export default function SpaceTechnology() {
  return (
    <>
      <SEO 
        title="Space Technology Solutions | Zion Tech Group"
        description="Revolutionary space technology platforms including resource mining, AI-powered exploration, satellite systems, and space infrastructure."
        canonical="https://ziontechgroup.com/space-technology"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Space Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Pioneering space technology platforms that push the boundaries of human exploration and enable sustainable space operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Explore Space Solutions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Space Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Space Technology Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive space solutions designed to accelerate humanity's expansion into the cosmos
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spaceServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={service.href}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold group-hover:text-orange-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Space Innovation Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-900/20 to-red-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Space Innovation Frontiers
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technologies that are revolutionizing space exploration and commercialization
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Resource Mining',
                  description: 'Extract valuable resources from asteroids and celestial bodies',
                  icon: <Rocket className="w-12 h-12 text-orange-400" />
                },
                {
                  title: 'AI Navigation',
                  description: 'Autonomous space navigation and mission planning',
                  icon: <Brain className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: 'Quantum Communications',
                  description: 'Secure quantum communication for deep space missions',
                  icon: <Atom className="w-12 h-12 text-purple-400" />
                },
                {
                  title: 'Sustainable Infrastructure',
                  description: 'Eco-friendly space habitats and orbital stations',
                  icon: <Globe className="w-12 h-12 text-green-400" />
                }
              ].map((innovation, index) => (
                <motion.div
                  key={innovation.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    {innovation.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-400">
                    {innovation.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Reach for the Stars?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join us in pioneering the next frontier of space technology and exploration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Launch Space Journey
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Space Technology Assessment
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

