import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, Satellite, Globe, Zap, Shield, Target, Users, Star, CheckCircle, 
  ArrowRight, Play, TrendingUp, Database, Brain, Cpu,
  Lock, Cloud, Network, FileText, GraduationCap, DollarSign, Clock, Orbit
} from 'lucide-react';

const SpaceTechnologyPage: React.FC = () => {
  const features = [
    {
      icon: Rocket,
      title: "Space Exploration",
      description: "Advanced propulsion systems and exploration technologies for deep space missions",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Satellite,
      title: "Satellite Technology",
      description: "Next-generation satellite systems with AI-powered operations and monitoring",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Resource Management",
      description: "Space resource identification, extraction, and utilization technologies",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Orbit,
      title: "Orbital Solutions",
      description: "Space debris management and sustainable orbital infrastructure",
      color: "from-yellow-500 to-green-500"
    }
  ];

  const services = [
    {
      title: "Space Exploration Platform",
      description: "Complete platform for space exploration missions with advanced propulsion and AI navigation",
      price: "From $500,000",
      features: ["Advanced propulsion", "AI navigation", "Mission planning", "Real-time monitoring"]
    },
    {
      title: "Satellite Constellation",
      description: "Low Earth orbit satellite network for global connectivity and monitoring",
      price: "From $250,000",
      features: ["LEO satellites", "Global coverage", "AI operations", "Ground stations"]
    },
    {
      title: "Space Resource Platform",
      description: "Technology platform for identifying and extracting space resources",
      price: "From $1,000,000",
      features: ["Resource mapping", "Extraction technology", "Processing systems", "Transport logistics"]
    }
  ];

  const stats = [
    { number: "100+", label: "Satellites Launched", icon: Satellite },
    { number: "1M+", label: "Miles Explored", icon: Rocket },
    { number: "24/7", label: "Global Coverage", icon: Globe },
    { number: "99.9%", label: "Mission Success", icon: Star }
  ];

  return (
    <Layout 
      title="Space Technology Services - Zion Tech Group"
      description="Revolutionary space technology solutions including exploration, satellite systems, and space resource management."
      keywords="space technology, space exploration, satellites, space resources, orbital solutions, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services/space-technology"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">Space</span> Technology
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of space exploration with cutting-edge technology, 
                advanced propulsion systems, and revolutionary space resource management solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2" />
                </button>
                <button className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2" /> Watch Demo
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Space Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our space technology services push the boundaries of what's possible, 
                enabling humanity to explore, utilize, and thrive in the final frontier.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Space Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive space solutions designed to advance humanity's presence 
                in space and unlock the vast potential of space resources.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-500 hover:border-pink-400 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-pink-400 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 to-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Reach for the Stars
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Ready to be part of humanity's next great adventure in space exploration?
              </p>
              <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg">
                Launch Your Space Journey
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SpaceTechnologyPage;