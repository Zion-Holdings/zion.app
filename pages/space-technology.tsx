import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Satellite, Globe, Zap, Brain, Shield, 
  Database, Network, Star, ArrowRight, CheckCircle,
  Orbit, Telescope, Globe2
} from 'lucide-react';

const spaceServices = [
  {
    category: 'Space Exploration & Research',
    services: [
      {
        name: 'Space Resource Mining Platform',
        description: 'Advanced platforms for mining and extracting resources from asteroids and celestial bodies',
        href: '/space-resource-mining-platform',
        icon: <Rocket className="w-6 h-6 text-cyan-400" />,
        featured: true
      },
      {
        name: 'AI-Powered Space Technology',
        description: 'Intelligent systems for space exploration and research',
        href: '/ai-powered-space-technology',
        icon: <Brain className="w-6 h-6 text-purple-400" />
      },
      {
        name: 'Space Technology AI Platform',
        description: 'Comprehensive AI platform for space technology applications',
        href: '/space-technology-ai-platform',
        icon: <Satellite className="w-6 h-6 text-blue-400" />
      }
    ]
  },
  {
    category: 'Satellite & Communication Systems',
    services: [
      {
        name: 'Satellite Communication Infrastructure',
        description: 'Advanced satellite communication systems and networks',
        href: '/satellite-communication-infrastructure',
        icon: <Network className="w-6 h-6 text-green-400" />
      },
      {
        name: 'Space-Based Internet Services',
        description: 'Global internet connectivity through space infrastructure',
        href: '/space-based-internet-services',
        icon: <Globe className="w-6 h-6 text-yellow-400" />
      },
      {
        name: 'Satellite Data Processing',
        description: 'Real-time satellite data analysis and processing',
        href: '/satellite-data-processing',
        icon: <Database className="w-6 h-6 text-indigo-400" />
      }
    ]
  },
  {
    category: 'Space Security & Defense',
    services: [
      {
        name: 'Space Cybersecurity Platform',
        description: 'Protection of space assets and communication systems',
        href: '/space-cybersecurity-platform',
        icon: <Shield className="w-6 h-6 text-red-400" />
      },
      {
        name: 'Space Traffic Management',
        description: 'Intelligent management of space debris and satellite traffic',
        href: '/space-traffic-management',
        icon: <Orbit className="w-6 h-6 text-pink-400" />
      }
    ]
  },
  {
    category: 'Space Observation & Analytics',
    services: [
      {
        name: 'Earth Observation Systems',
        description: 'Advanced satellite-based Earth monitoring and analysis',
        href: '/earth-observation-systems',
        icon: <Telescope className="w-6 h-6 text-emerald-400" />
      },
      {
        name: 'Space Weather Monitoring',
        description: 'Real-time monitoring of solar activity and space weather',
        href: '/space-weather-monitoring',
        icon: <Zap className="w-6 h-6 text-orange-400" />
      },
      {
        name: 'Planetary Science Platform',
        description: 'Research and analysis tools for planetary exploration',
        href: '/planetary-science-platform',
        icon: <Globe2 className="w-6 h-6 text-cyan-400" />
      }
    ]
  }
];

const features = [
  'Advanced Satellite Technology',
  'AI-Powered Space Systems',
  'Real-time Data Processing',
  'Global Communication Networks',
  'Space Resource Management',
  'Environmental Monitoring',
  'Space Traffic Control',
  'Planetary Exploration Tools'
];

export default function SpaceTechnology() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Space Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary space technology solutions that push the boundaries of human exploration and unlock the potential of the cosmos
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Space Tech
              </Link>
              <Link 
                href="/services"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose Space Technology?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge space solutions that enable exploration, communication, and discovery beyond Earth's boundaries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Space Technology Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive space solutions designed for exploration, research, and commercial applications
            </p>
          </motion.div>

          <div className="space-y-16">
            {spaceServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-center text-white">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: categoryIndex * 0.2 + serviceIndex * 0.1 }}
                      className={`bg-gray-800/50 p-6 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                        service.featured 
                          ? 'border-purple-500/50 bg-gradient-to-br from-gray-800/50 to-purple-900/20' 
                          : 'border-gray-700 hover:border-purple-500/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        {service.icon}
                        {service.featured && (
                          <span className="px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      <Link 
                        href={service.href}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Innovation Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The Future of Space Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering innovations that are reshaping humanity's relationship with space
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Space Exploration</h3>
              <p className="text-gray-300">
                Advanced propulsion systems and exploration platforms for deep space missions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Satellite className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Satellite Technology</h3>
              <p className="text-gray-300">
                Next-generation satellite systems for communication, observation, and research
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Integration</h3>
              <p className="text-gray-300">
                Intelligent space systems that learn, adapt, and optimize operations autonomously
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Reach for the Stars?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the space technology revolution and be part of humanity's next great adventure
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Launch Your Space Project
              </Link>
              <Link 
                href="/pricing"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

