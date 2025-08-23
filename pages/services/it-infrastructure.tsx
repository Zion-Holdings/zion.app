import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { Cpu, Zap, Target, Users, Shield, Rocket, Star, CheckCircle, Cloud, Server, Database, Network, Monitor, Settings } from 'lucide-react';

const ITInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services'
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server administration and optimization'
    },
    {
      icon: Database,
      title: 'Database Systems',
      description: 'High-performance database design and management'
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Robust networking solutions and security'
    },
    {
      icon: Monitor,
      title: 'Monitoring & Analytics',
      description: 'Real-time system monitoring and performance insights'
    },
    {
      icon: Settings,
      title: 'Automation & DevOps',
      description: 'Streamlined deployment and operational processes'
    }
  ];

  const services = [
    'Cloud migration and optimization',
    'Infrastructure as Code (IaC)',
    'Container orchestration and management',
    'High availability and disaster recovery',
    'Performance optimization and scaling',
    'Security hardening and compliance'
  ];

  const benefits = [
    'Improved system reliability and uptime',
    'Enhanced performance and scalability',
    'Reduced operational costs and complexity',
    'Faster deployment and time to market',
    'Better security and compliance posture',
    '24/7 monitoring and support'
  ];

  return (
    <Layout
      title="IT Infrastructure Solutions - Zion Tech Group"
      description="Comprehensive IT infrastructure solutions including cloud services, server management, and DevOps automation to optimize your technology operations."
      keywords="IT infrastructure, cloud solutions, server management, DevOps, automation, Zion Tech Group"
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-medium mb-6">
                <Cpu className="w-4 h-4 mr-2" />
                IT Infrastructure Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
                IT Infrastructure Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Build and optimize your technology foundation with our comprehensive IT infrastructure solutions including cloud services, server management, and DevOps automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  Explore Infrastructure
                </button>
                <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300">
                  Infrastructure Assessment
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
                Comprehensive Infrastructure Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our IT infrastructure platform provides enterprise-grade solutions for modern technology operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/60 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Infrastructure Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Professional services designed to optimize your technology infrastructure and operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {services.slice(0, 3).map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{service}</p>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {services.slice(3).map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{service}</p>
                  </div>
                ))}
              </motion.div>
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
                Why Choose Our IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience enterprise-grade infrastructure solutions that drive efficiency and reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/40 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </motion.div>
              ))}
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
                Ready to Optimize Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let us help you build a robust, scalable, and efficient technology foundation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  Start Optimization
                </button>
                <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300">
                  Contact Infrastructure Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ITInfrastructurePage;