import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Target, Cpu, Globe, Eye, 
  ChevronRight, Star, TrendingUp, Zap, Shield,
  ArrowRight, Search, Filter, Grid, List,
  Phone, Mail, MapPin, ExternalLink, Sparkles
} from 'lucide-react';
import UltraFuturisticBackground2029 from '../../components/ui/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029V2 from '../../components/layout/UltraFuturisticNavigation2029V2';
import UltraFuturisticFooter2029V2 from '../../components/layout/UltraFuturisticFooter2029V2';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    id: 'ai-solutions',
    title: '🧠 AI Solutions',
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Revolutionary AI consciousness and creativity solutions',
    services: 25,
    href: '/services/ai-solutions',
    features: ['AI Consciousness', 'Emotional Intelligence', 'Creative Orchestration', 'Autonomous Business']
  },
  {
    id: 'quantum-tech',
    title: '⚛️ Quantum Technology',
    icon: Globe,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and breakthrough quantum solutions',
    services: 18,
    href: '/services/quantum-tech',
    features: ['Quantum-AI Fusion', 'Quantum Security', 'DNA Computing', 'Quantum Trading']
  },
  {
    id: 'space-tech',
    title: '🌌 Space Technology',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and metaverse digital reality',
    services: 22,
    href: '/services/space-tech',
    features: ['Space Mining', 'Metaverse Reality', 'Health Analytics', 'Holographic Events']
  },
  {
    id: 'enterprise-it',
    title: '🏢 Enterprise IT',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'AI-powered enterprise solutions and optimization',
    services: 30,
    href: '/services/enterprise-it',
    features: ['Business Intelligence', 'Supply Chain', 'HR Analytics', 'Cybersecurity']
  },
  {
    id: 'micro-saas',
    title: '🎯 Micro SAAS',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Innovative micro software solutions for modern businesses',
    services: 35,
    href: '/services/micro-saas',
    features: ['Customer Success', 'Workflow Automation', 'Sales Intelligence', 'Data Governance']
  },
  {
    id: 'research-development',
    title: '🔬 Research & Development',
    icon: Eye,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions and innovation',
    services: 20,
    href: '/services/research-development',
    features: ['AI Research', 'Quantum Research', 'Biotech Research', 'Space Research']
  }
];

const Index: NextPage = () => {
  return (
    <UltraFuturisticBackground2029>
      <div className="min-h-screen bg-black/90">
        <Head>
          <title>Services - Zion Tech Group | AI, Quantum, Space Tech, Enterprise Solutions</title>
          <meta name="description" content="Comprehensive technology services including AI consciousness, quantum computing, space technology, enterprise IT, and micro SAAS solutions." />
          <meta name="keywords" content="AI services, quantum computing, space technology, enterprise IT, micro SAAS, Zion Tech Group" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Enhanced Navigation */}
        <UltraFuturisticNavigation2029V2 />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6">
                  <Target className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-8"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Services
                </span>
                <br />
                <span className="text-white">
                  Portfolio
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
              >
                Discover our comprehensive portfolio of cutting-edge technology services that are 
                transforming industries and unlocking unprecedented possibilities for businesses worldwide.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <a
                  href="#services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-lg"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Explore Services
                </a>
                
                <a
                  href={`mailto:${contactInfo.email}?subject=Service Inquiry`}
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our services span across six revolutionary domains, each designed to address 
                specific business challenges and drive innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={category.href}>
                    <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 h-full hover:transform hover:scale-105 backdrop-blur-sm`}>
                      <div className="text-center mb-6">
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {category.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-semibold">{category.services} Services</span>
                        <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-2xl p-12 backdrop-blur-sm">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                  Let's discuss how our cutting-edge services can drive innovation, 
                  efficiency, and growth for your organization.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Service Inquiry`}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Started Today
                  </a>
                  
                  <div className="flex items-center space-x-6 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span>{contactInfo.mobile}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span>{contactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <UltraFuturisticFooter2029V2 />
      </div>
    </UltraFuturisticBackground2029>
  );
};

export default Index;