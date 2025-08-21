import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Target, Star, TrendingUp, Phone, Mail, MapPin,
  ChevronDown, Search, Menu, X, ArrowRight, CheckCircle,
  DollarSign, Users, Briefcase, BookOpen, MessageCircle,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck
} from 'lucide-react';
import UltraFuturisticNavigation2027 from '../components/layout/UltraFuturisticNavigation2027';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';

// Import all 2028 services
import { innovative2028Services } from '../data/innovative-2028-services';
import { emergingTech2028Services } from '../data/emerging-tech-2028-services';
import { enterpriseIT2028Services } from '../data/enterprise-it-2028-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Innovative Micro SAAS',
    icon: Rocket,
    color: 'from-blue-600 to-cyan-600',
    description: 'Practical business solutions for today',
    services: innovative2028Services.slice(0, 4)
  },
  {
    title: '⚛️ 2028 Emerging Technology',
    icon: Atom,
    color: 'from-indigo-600 to-purple-600',
    description: 'Cutting-edge innovations and breakthroughs',
    services: emergingTech2028Services.slice(0, 4)
  },
  {
    title: '🏢 2028 Enterprise IT Solutions',
    icon: Shield,
    color: 'from-red-600 to-orange-600',
    description: 'Enterprise-grade solutions and infrastructure',
    services: enterpriseIT2028Services.slice(0, 4)
  }
];

export default function Ultimate2028ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const allServices = [
    ...innovative2028Services,
    ...emergingTech2028Services,
    ...enterpriseIT2028Services
  ];

  const filteredServices = allServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [
    'all',
    'Customer Success & AI',
    'Inventory Management & AI',
    'HR & Recruitment',
    'Content Marketing & AI',
    'Financial Analytics & AI',
    'Sales Intelligence & AI',
    'Project Management & AI',
    'Customer Support & AI',
    'Supply Chain & AI',
    'Quantum Technology & Security',
    'AI Consciousness & Evolution',
    'AI Civilization & Society',
    'Quantum Physics & Time',
    'Space Technology & AI',
    'Quantum Neuroscience & AI',
    'Quantum Finance & Trading',
    'Enterprise Security & Zero Trust',
    'Edge Computing & Orchestration',
    '5G Networks & Enterprise',
    'Blockchain & Enterprise',
    'AI Analytics & Enterprise',
    'IoT & Enterprise Management',
    'Cloud Migration & Enterprise'
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Head>
        <title>Ultimate 2028 Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive 2028 services showcase featuring innovative micro SAAS, emerging technology, and enterprise IT solutions. Transform your business with cutting-edge AI, quantum computing, and advanced technology." />
        <meta name="keywords" content="2028 services, micro SAAS, emerging technology, enterprise IT, AI, quantum computing, blockchain, 5G, edge computing, Zion Tech Group" />
        <meta property="og:title" content="Ultimate 2028 Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive 2028 services showcase featuring innovative micro SAAS, emerging technology, and enterprise IT solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/ultimate-2028-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ultimate-2028-services-showcase" />
      </Head>

      <UltraQuantumHolographicBackground>
        <UltraFuturisticNavigation2027 />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              2028 Ultimate Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our comprehensive suite of innovative micro SAAS, 
              emerging technology breakthroughs, and enterprise IT solutions designed to transform your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact" className="group">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/pricing">
              <button className="px-8 py-4 border-2 border-purple-500 hover:bg-purple-500/20 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                View Pricing
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-10"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Showcase */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of services across three main categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <div key={service.id} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                      <span className="text-2xl">{service.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{service.name}</h4>
                        <p className="text-sm text-gray-400">{service.price}{service.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our complete portfolio of innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  {service.popular && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-semibold rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-400">
                    {service.price}{service.period}
                  </span>
                  <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({service.reviews})</span>
                  </div>
                  
                  <Link href={service.link}>
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg text-white text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss how our 2028 services can revolutionize your operations
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6 text-purple-400" />
                <span className="text-white">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-6 h-6 text-purple-400" />
                <span className="text-white">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-6 h-6 text-purple-400" />
                <span className="text-white text-sm">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us Today
                </button>
              </Link>
              <Link href="/pricing">
                <button className="px-8 py-4 border-2 border-purple-500 hover:bg-purple-500/20 rounded-full font-semibold text-lg transition-all duration-300">
                  View Pricing
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/80 backdrop-blur-xl border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Leading provider of innovative technology solutions for the future.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/micro-saas" className="text-gray-400 hover:text-white transition-colors">Micro SAAS</a></li>
                <li><a href="/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</a></li>
                <li><a href="/enterprise-it" className="text-gray-400 hover:text-white transition-colors">Enterprise IT</a></li>
                <li><a href="/quantum-services" className="text-gray-400 hover:text-white transition-colors">Quantum Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>{contactInfo.mobile}</p>
                <p>{contactInfo.email}</p>
                <p className="text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2028 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </UltraQuantumHolographicBackground>
    </div>
  );
}