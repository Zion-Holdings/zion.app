import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Cpu, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Settings, Factory } from 'lucide-react';
import Link from 'next/link';
=======
import { 
  Building, Users, Shield, Cpu, Database, Globe, Zap, Target, 
  TrendingUp, BarChart3, Lock, Cloud, Server, Network, Settings, Brain,
  Factory, Cog, Wrench, Gauge
} from 'lucide-react';
>>>>>>> origin/clean-website-enhancement

const ManufacturingSolutionsPage: React.FC = () => {
  const solutions = [
    {
<<<<<<< HEAD
      name: 'AI-Powered Manufacturing Intelligence 2045',
      description: 'Advanced AI manufacturing optimization with consciousness and predictive analytics',
      href: '/ai-powered-manufacturing-intelligence-2045',
      icon: Factory,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Quantum Manufacturing Platform 2045',
      description: 'Quantum-powered manufacturing with consciousness and AI integration',
      href: '/quantum-manufacturing-platform-2045',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Autonomous Production AI 2045',
      description: 'Fully autonomous AI production management with consciousness',
      href: '/autonomous-production-ai-2045',
      icon: Settings,
      color: 'from-purple-500 to-blue-500'
    },
    {
      name: 'Smart Factory Intelligence 2045',
      description: 'AI-powered smart factory with consciousness and IoT integration',
      href: '/smart-factory-intelligence-2045',
      icon: Sparkles,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const features = [
    { icon: Factory, title: "Smart Manufacturing", description: "Intelligent production systems" },
    { icon: Cpu, title: "Quantum Computing", description: "Quantum-powered optimization" },
    { icon: Settings, title: "Autonomous AI", description: "Self-governing production" },
    { icon: Zap, title: "IoT Integration", description: "Connected factory systems" }
  ];

  const stats = [
    { number: "500%", label: "Efficiency Gain", icon: Zap },
    { number: "99.9%", label: "Quality Rate", icon: CheckCircle },
    { number: "24/7", label: "Operation", icon: Clock },
    { number: "100+", label: "Factories", icon: Factory }
=======
      title: "Manufacturing AI & Machine Learning",
      description: "AI-powered manufacturing optimization with predictive maintenance and quality control",
      icon: <Brain className="w-8 h-8" />,
      features: ["Predictive maintenance", "Quality control automation", "Production optimization", "Supply chain intelligence"],
      href: "/services?category=ai-ml"
    },
    {
      title: "Manufacturing Cybersecurity",
      description: "Industrial-grade security for manufacturing environments",
      icon: <Shield className="w-8 h-8" />,
      features: ["OT security", "Industrial IoT protection", "Compliance automation", "Threat detection"],
      href: "/services?category=security"
    },
    {
      title: "Manufacturing Cloud Infrastructure",
      description: "Cloud solutions designed for manufacturing operations",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Industrial cloud platforms", "Edge computing", "Data integration", "Scalable infrastructure"],
      href: "/services?category=cloud"
    },
    {
      title: "Manufacturing Analytics & BI",
      description: "Real-time manufacturing analytics and business intelligence",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time monitoring", "Performance analytics", "Predictive insights", "Executive dashboards"],
      href: "/services?category=bi"
    }
  ];

  const benefits = [
    {
      title: "Efficiency",
      description: "Optimize production processes",
      icon: <Gauge className="w-6 h-6" />
    },
    {
      title: "Quality",
      description: "Improve product quality",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Automation",
      description: "Reduce manual processes",
      icon: <Cog className="w-6 h-6" />
    },
    {
      title: "Insights",
      description: "Data-driven decisions",
      icon: <BarChart3 className="w-6 h-6" />
    }
>>>>>>> origin/clean-website-enhancement
  ];

  return (
    <Layout 
      title="Manufacturing Solutions - Zion Tech Group"
<<<<<<< HEAD
      description="Revolutionary manufacturing solutions with AI consciousness, quantum computing, and autonomous production intelligence. Leading the future of smart manufacturing."
      keywords="manufacturing solutions, AI manufacturing, quantum manufacturing, autonomous production, smart factory, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Manufacturing
                <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Revolution Platform
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of manufacturing with AI consciousness, quantum computing, 
                and autonomous production intelligence for unprecedented efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105"
                >
                  Transform Manufacturing
                  <Factory className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Explore All Solutions
                </Link>
=======
      description="Advanced technology solutions for manufacturing. AI, cybersecurity, cloud infrastructure, and analytics designed for the manufacturing sector."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Manufacturing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your manufacturing operations with cutting-edge technology solutions designed for 
                efficiency, quality, and innovation. Built for the future of manufacturing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/case-studies"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View Case Studies
                </a>
>>>>>>> origin/clean-website-enhancement
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
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
                Revolutionary Manufacturing Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our manufacturing platform delivers unprecedented capabilities with AI consciousness, 
                quantum computing, and autonomous production management.
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
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
=======
        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Manufacturing Technology Solutions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive technology solutions designed specifically for manufacturing operations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={solution.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <Zap className="w-4 h-4 ml-2" />
                  </a>
>>>>>>> origin/clean-website-enhancement
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Solutions Grid */}
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
                Our Manufacturing Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered manufacturing and production solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={solution.href}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                      <div className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <solution.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                        {solution.name}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        <span className="font-semibold">Learn More</span>
                        <Factory className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
=======
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Why Choose Zion Tech Group for Manufacturing Solutions?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Manufacturing-grade solutions with the innovation and agility of a startup
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="text-cyan-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
>>>>>>> origin/clean-website-enhancement
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Manufacturing?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the manufacturing revolution with AI consciousness and quantum computing. 
                Transform your production with the future of smart manufacturing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105"
                >
                  Transform Manufacturing
                  <Factory className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Explore All Solutions
                </Link>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Manufacturing Operations?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how our manufacturing technology solutions can drive efficiency and growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="/pricing"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View Pricing
                </a>
>>>>>>> origin/clean-website-enhancement
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ManufacturingSolutionsPage;