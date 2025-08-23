import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Globe, Satellite } from 'lucide-react';
import Link from 'next/link';

const SpaceTechnologyPage: React.FC = () => {
  const services = [
    {
      name: 'Space Resource Intelligence Platform 2045',
      description: 'AI-powered space exploration with consciousness and resource management',
      href: '/space-resource-intelligence-platform-2045',
      icon: Rocket,
      color: 'from-pink-500 to-red-500'
    },
    {
      name: 'Quantum Space Communication 2045',
      description: 'Quantum-powered space communication with consciousness integration',
      href: '/quantum-space-communication-2045',
      icon: Satellite,
      color: 'from-red-500 to-purple-500'
    },
    {
      name: 'Autonomous Space Exploration AI 2045',
      description: 'Fully autonomous space exploration with AI consciousness',
      href: '/autonomous-space-exploration-ai-2045',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Space Mining Intelligence Platform 2045',
      description: 'AI-powered space mining with consciousness and resource optimization',
      href: '/space-mining-intelligence-platform-2045',
      icon: Sparkles,
      color: 'from-pink-500 to-orange-500'
    }
  ];

  const features = [
    { icon: Rocket, title: "Space Exploration", description: "Advanced space missions" },
    { icon: Satellite, title: "Quantum Communication", description: "Instant space communication" },
    { icon: Globe, title: "Resource Management", description: "Intelligent resource allocation" },
    { icon: Zap, title: "Autonomous AI", description: "Self-governing space systems" }
  ];

  const stats = [
    { number: "100+", label: "Space Missions", icon: Rocket },
    { number: "99.99%", label: "Success Rate", icon: CheckCircle },
    { number: "24/7", label: "Monitoring", icon: Clock },
    { number: "50+", label: "Satellites", icon: Satellite }
  ];

  return (
    <Layout 
      title="Space Technology Services - Zion Tech Group"
      description="Revolutionary space technology with AI consciousness, quantum communication, and autonomous exploration. Leading the future of space innovation."
      keywords="space technology, space exploration, quantum space communication, autonomous space AI, space mining, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-red-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Space Technology
                <span className="block bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                  Revolution Platform
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of space exploration with AI consciousness, quantum communication, 
                and autonomous exploration for unprecedented discoveries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Space
                  <Rocket className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-pink-500 text-pink-400 font-semibold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Space Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our space technology platform delivers unprecedented exploration capabilities with AI consciousness, 
                quantum communication, and autonomous mission management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Space Technology Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered space exploration and communication solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={service.href}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 group-hover:scale-105">
                      <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-6 flex items-center text-pink-400 group-hover:text-pink-300 transition-colors duration-300">
                        <span className="font-semibold">Learn More</span>
                        <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Explore Space?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the space technology revolution with AI consciousness and quantum communication. 
                Transform space exploration with the future of interplanetary innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Space
                  <Rocket className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-pink-500 text-pink-400 font-semibold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SpaceTechnologyPage;