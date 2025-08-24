import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Database, Cloud } from 'lucide-react';
import Link from 'next/link';

const ITInfrastructurePage: React.FC = () => {
  const services = [
    {
      name: 'Quantum Cloud Infrastructure Platform 2045',
      description: 'Next-generation quantum cloud with consciousness and AI capabilities',
      href: '/quantum-cloud-infrastructure-platform-2045',
      icon: Cloud,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Autonomous IT Infrastructure Management 2045',
      description: 'Fully autonomous IT infrastructure with AI consciousness',
      href: '/autonomous-it-infrastructure-management-2045',
      icon: Cpu,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'AI-Powered Cloud Optimization 2045',
      description: 'Intelligent cloud optimization with consciousness integration',
      href: '/ai-powered-cloud-optimization-2045',
      icon: Database,
      color: 'from-yellow-500 to-green-500'
    },
    {
      name: 'Quantum Edge Computing Platform 2045',
      description: 'Quantum-powered edge computing with consciousness',
      href: '/quantum-edge-computing-platform-2045',
      icon: Sparkles,
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const features = [
    { icon: Cpu, title: "Quantum Computing", description: "Unprecedented processing power" },
    { icon: Cloud, title: "Cloud Integration", description: "Seamless cloud infrastructure" },
    { icon: Database, title: "AI Optimization", description: "Intelligent resource management" },
    { icon: Zap, title: "Edge Computing", description: "Distributed processing power" }
  ];

  const stats = [
    { number: "1000x", label: "Performance Boost", icon: Zap },
    { number: "99.99%", label: "Uptime", icon: CheckCircle },
    { number: "24/7", label: "Monitoring", icon: Clock },
    { number: "100+", label: "Data Centers", icon: Cloud }
  ];

  return (
    <Layout 
      title="IT Infrastructure Services - Zion Tech Group"
      description="Revolutionary IT infrastructure with quantum computing, autonomous management, and AI optimization. Leading the future of technology infrastructure."
      keywords="IT infrastructure, quantum cloud, autonomous IT, cloud optimization, edge computing, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/20 to-orange-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                IT Infrastructure
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Revolution Platform
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of technology infrastructure with quantum computing, autonomous management, 
                and AI optimization for unprecedented performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Upgrade Your Infrastructure
                  <Cpu className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300"
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
                Revolutionary Infrastructure Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our IT infrastructure platform delivers unprecedented performance with quantum computing, 
                autonomous management, and AI optimization capabilities.
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
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
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
                Our IT Infrastructure Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive suite of quantum-powered infrastructure and optimization solutions.
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
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 group-hover:scale-105">
                      <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-6 flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                        <span className="font-semibold">Learn More</span>
                        <Cpu className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                Ready to Upgrade Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the infrastructure revolution with quantum computing and autonomous management. 
                Transform your technology foundation with the future of IT infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Upgrade Your Infrastructure
                  <Cpu className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300"
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

export default ITInfrastructurePage;