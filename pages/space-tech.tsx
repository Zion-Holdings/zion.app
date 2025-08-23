import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Satellite, Globe, Cpu, Database, Network, Zap, Brain, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

export default function SpaceTechnology() {
  const spaceServices = [
    {
      title: 'Satellite AI Processing',
      description: 'Advanced AI systems for real-time satellite data processing and analysis',
      href: '/satellite-ai-processing',
      icon: <Satellite className="w-8 h-8" />,
      features: ['Real-time Image Analysis', 'Autonomous Navigation', 'Predictive Maintenance']
    },
    {
      title: 'Space Resource Mining',
      description: 'Quantum-powered asteroid mining and resource extraction platforms',
      href: '/space-resource-mining-platform',
      icon: <Database className="w-8 h-8" />,
      features: ['Asteroid Detection', 'Resource Mapping', 'Extraction Robotics']
    },
    {
      title: 'Quantum Space Communication',
      description: 'Ultra-secure quantum communication networks for space missions',
      href: '/quantum-space-communication',
      icon: <Network className="w-8 h-8" />,
      features: ['Quantum Entanglement', 'Secure Channels', 'Deep Space Network']
    },
    {
      title: 'Mars Colony Management',
      description: 'Comprehensive AI systems for managing Mars colonization projects',
      href: '/mars-colony-management',
      icon: <Brain className="w-8 h-8" />,
      features: ['Life Support Systems', 'Resource Management', 'Colony Planning']
    },
    {
      title: 'Space Traffic Control',
      description: 'AI-powered orbital traffic management and collision avoidance',
      href: '/space-traffic-control',
      icon: <Globe className="w-8 h-8" />,
      features: ['Orbital Tracking', 'Collision Prevention', 'Launch Coordination']
    },
    {
      title: 'Interplanetary Navigation',
      description: 'Quantum-enhanced navigation systems for deep space exploration',
      href: '/interplanetary-navigation',
      icon: <Rocket className="w-8 h-8" />,
      features: ['Trajectory Optimization', 'Gravitational Mapping', 'Autonomous Guidance']
    }
  ];

  const benefits = [
    'Advanced AI for autonomous space operations',
    'Quantum computing for complex orbital calculations',
    'Real-time satellite data processing and analysis',
    'Secure quantum communication networks',
    'Autonomous resource extraction capabilities',
    'Expert space technology team with mission experience'
  ];

  const stats = [
    { value: '50+', label: 'Satellites Supported' },
    { value: '99.9%', label: 'Mission Success Rate' },
    { value: '24/7', label: 'Space Operations' },
    { value: '∞', label: 'Space Possibilities' }
  ];

  return (
    <Layout>
      <SEO 
        title="Space Technology Solutions | Zion Tech Group"
        description="Revolutionary space technology services including satellite AI processing, quantum space communication, Mars colony management, and interplanetary navigation. Pioneering the future of space exploration."
        keywords={["space technology", "satellite AI", "quantum space communication", "Mars colony", "space mining", "interplanetary navigation"]}
      />

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Rocket className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">
                Space Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Pioneering the future of space exploration with advanced AI, quantum computing, and autonomous systems. 
                From satellite operations to Mars colonization, we're building the infrastructure for humanity's space future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Launch Your Space Mission
                </a>
                <a
                  href="/space-resource-mining-platform"
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Explore Space Mining
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Space Stats */}
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6"
                >
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Space Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Space Technology Portfolio</h2>
              <p className="text-xl text-gray-300">Comprehensive space solutions for the new space economy</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spaceServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <a
                    href={service.href}
                    className="block p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-purple-400 group-hover:text-blue-400 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Space Technology?</h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  The new space economy demands cutting-edge technology solutions. 
                  Our space technology combines AI, quantum computing, and autonomous systems to enable the future of space exploration.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <div className="w-full h-80 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Satellite className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Space Innovation</h3>
                    <p className="text-gray-300">Advanced satellite technology</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Space Mission Timeline */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Space Mission Roadmap</h2>
              <p className="text-xl text-gray-300">Our vision for the future of space exploration</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center p-8 bg-black/40 border border-gray-800 rounded-2xl"
              >
                <Satellite className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">2025-2030</h3>
                <p className="text-gray-300">Advanced satellite constellations and space traffic management</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-center p-8 bg-black/40 border border-gray-800 rounded-2xl"
              >
                <Database className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">2030-2035</h3>
                <p className="text-gray-300">Asteroid mining operations and space resource utilization</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center p-8 bg-black/40 border border-gray-800 rounded-2xl"
              >
                <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">2035-2040</h3>
                <p className="text-gray-300">Mars colonization and interplanetary civilization</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Reach for the Stars?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in building the technology infrastructure for humanity's expansion into space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Space Mission
                </a>
                <a
                  href="/quantum-space-communication"
                  className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-black transition-all duration-300"
                >
                  Explore Quantum Space Tech
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}