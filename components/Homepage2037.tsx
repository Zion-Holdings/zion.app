import React from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Atom, Shield, Zap, Target, 
  Globe, Sparkles, Star, ArrowRight, Phone, Mail,
  Users, Building, Award, BookOpen, MessageCircle,
  TrendingUp, Lock, Cloud, Settings, Eye, Clock,
  Heart, Lightbulb, Search, Grid, List, DollarSign,
  BarChart3, Cpu, Database, Network, Server, Monitor
} from 'lucide-react';

const Homepage2037: React.FC = () => {
  const featuredServices = [
    {
      id: 'ai-content-orchestrator',
      name: 'AI Content Orchestrator',
      tagline: 'Intelligent content creation and management',
      description: 'Advanced AI-powered content orchestration system that automates content creation, optimization, and distribution across multiple channels.',
      price: '$1,299',
      period: 'month',
      icon: <Brain className="w-8 h-8" />,
      category: 'AI & Machine Learning',
      popular: true
    },
    {
      id: 'quantum-cybersecurity-suite',
      name: 'Quantum Cybersecurity Suite',
      tagline: 'Next-generation quantum-resistant security',
      description: 'Advanced cybersecurity suite leveraging quantum computing principles to provide unbreakable encryption and threat detection.',
      price: '$2,499',
      period: 'month',
      icon: <Shield className="w-8 h-8" />,
      category: 'Quantum Technology',
      popular: false
    },
    {
      id: 'space-data-analytics-platform',
      name: 'Space Data Analytics Platform',
      tagline: 'Satellite data processing and analytics',
      description: 'Comprehensive platform for processing, analyzing, and visualizing satellite and space data with AI-powered insights.',
      price: '$1,899',
      period: 'month',
      icon: <Rocket className="w-8 h-8" />,
      category: 'Space Technology',
      popular: true
    },
    {
      id: 'blockchain-governance-platform',
      name: 'Blockchain Governance Platform',
      tagline: 'Decentralized governance and voting system',
      description: 'Secure blockchain-based platform for decentralized governance, voting, and decision-making with transparent audit trails.',
      price: '$999',
      period: 'month',
      icon: <Globe className="w-8 h-8" />,
      category: 'Blockchain & Web3',
      popular: false
    },
    {
      id: 'edge-computing-orchestrator',
      name: 'Edge Computing Orchestrator',
      tagline: 'Intelligent edge computing management',
      description: 'Advanced platform for managing and optimizing edge computing infrastructure with AI-powered load balancing and security.',
      price: '$1,799',
      period: 'month',
      icon: <Zap className="w-8 h-8" />,
      category: 'Edge Computing',
      popular: true
    },
    {
      id: 'metaverse-development-studio',
      name: 'Metaverse Development Studio',
      tagline: 'Complete metaverse creation platform',
      description: 'Comprehensive platform for building, deploying, and managing metaverse experiences with 3D modeling and VR/AR integration.',
      price: '$2,299',
      period: 'month',
      icon: <Target className="w-8 h-8" />,
      category: 'Metaverse & VR',
      popular: false
    }
  ];

  const stats = [
    { label: 'AI Services', value: '25+', icon: <Brain className="w-6 h-6" /> },
    { label: 'Quantum Solutions', value: '15+', icon: <Atom className="w-6 h-6" /> },
    { label: 'Space Technology', value: '10+', icon: <Rocket className="w-6 h-6" /> },
    { label: 'Blockchain Platforms', value: '12+', icon: <Globe className="w-6 h-6" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Zion Tech Group
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pioneering the future of technology with revolutionary 2037 solutions that drive 
              business transformation through AI, Quantum Computing, Space Technology, and Blockchain.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="/revolutionary-2037-services-showcase"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore 2037 Services
              </a>
              <a 
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Call Now: +1 302 464 0950
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionary 2037 Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge portfolio of AI, 
                Quantum Computing, Space Technology, and Blockchain solutions.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="relative group"
                  variants={itemVariants}
                >
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}
                    
                    {/* Service Icon */}
                    <div className="text-cyan-400 mb-4">
                      {service.icon}
                    </div>
                    
                    {/* Category */}
                    <div className="text-sm text-cyan-400 mb-2 font-medium">
                      {service.category}
                    </div>
                    
                    {/* Service Name */}
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    {/* Tagline */}
                    <p className="text-gray-400 text-sm mb-3">
                      {service.tagline}
                    </p>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                        <span className="text-gray-400 text-sm">/{service.period}</span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <a
                      href={`/services/${service.id}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* View All Services CTA */}
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <a
                href="/revolutionary-2037-services-showcase"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                <span>View Complete 2037 Services Portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another technology company. We're pioneers building the future, 
                today, with solutions that transform industries and drive innovation.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: 'Cutting-Edge Innovation',
                  description: 'Leading the charge in AI, Quantum Computing, Space Technology, and Blockchain with revolutionary solutions.'
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: 'Proven Excellence',
                  description: 'Delivering world-class solutions with a track record of success across multiple industries and use cases.'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Expert Team',
                  description: 'Our team of industry experts brings decades of combined experience in emerging technologies.'
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: 'Scalable Solutions',
                  description: 'Built for growth with solutions that scale from startup to enterprise level.'
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: 'Enterprise Security',
                  description: 'Bank-grade security and compliance built into every solution we deliver.'
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: '24/7 Support',
                  description: 'Round-the-clock support and maintenance to ensure your success.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6"
                  variants={itemVariants}
                >
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the future of technology with our revolutionary 2037 services. 
              Contact our team to discuss how we can drive innovation and growth in your organization.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a 
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: +1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2037;