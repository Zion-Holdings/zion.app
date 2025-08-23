import React, { useState } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { 
  ArrowRight, Cpu, Database, Sparkles as SparklesIcon,
  Brain as BrainIcon, Shield as ShieldIcon, Code,
  CheckCircle, Star, Globe, Brain, Phone, Mail, MapPin, Zap, Search
} from 'lucide-react';

// Import our new innovative services
import { innovativeMicroSaasExpansionV32025 } from '../data/2025-innovative-micro-saas-expansion-v3';
import { innovativeITServicesExpansion2025V3 } from '../data/2025-innovative-it-services-expansion-v3';
import { innovativeAIServicesExpansion2025V3 } from '../data/2025-innovative-ai-services-expansion-v3';
=======
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, ChevronDown,
  Brain, Atom, Shield, Target, Rocket, Cpu, Cloud,
  ArrowRight, Star, Zap, Users, Award, Globe,
  ExternalLink, Sparkles, Eye, Lock, Clock, CheckCircle,
  TrendingUp, DollarSign, Phone, Mail, MapPin
} from 'lucide-react';

// Import new innovative service data
import { innovative2025MicroSaasExpansions } from '../data/innovative-2025-micro-saas-expansions';
import { innovative2025ITServiceExpansions } from '../data/innovative-2025-it-services-expansions';
import { innovative2025AIServiceExpansions } from '../data/innovative-2025-ai-services-expansions';
>>>>>>> origin/main

const Innovative2025ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
<<<<<<< HEAD

  // Combine all innovative services
  const allInnovativeServices = [
    ...innovativeMicroSaasExpansionV32025,
    ...innovativeITServicesExpansion2025V3,
    ...innovativeAIServicesExpansion2025V3
=======
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');

  // Combine all new innovative services
  const allInnovativeServices = [
    ...innovative2025MicroSaasExpansions,
    ...innovative2025ITServiceExpansions,
    ...innovative2025AIServiceExpansions
>>>>>>> origin/main
  ];

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allInnovativeServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: allInnovativeServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: allInnovativeServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allInnovativeServices.filter(s => s.category.includes('Security')).length },
    { id: 'cloud', name: 'Cloud & FinOps', icon: Database, color: 'from-blue-500 to-indigo-500', count: allInnovativeServices.filter(s => s.category.includes('Cloud') || s.category.includes('FinOps')).length },
    { id: 'developer', name: 'Developer Tools', icon: Code, color: 'from-green-500 to-teal-500', count: allInnovativeServices.filter(s => s.category.includes('Developer')).length }
  ];

  const filteredServices = allInnovativeServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory) ||
      (selectedCategory === 'ai' && (service.category.includes('AI') || service.category.includes('Machine Learning'))) ||
      (selectedCategory === 'it' && (service.category.includes('IT') || service.category.includes('Infrastructure'))) ||
      (selectedCategory === 'cybersecurity' && service.category.includes('Security')) ||
      (selectedCategory === 'cloud' && (service.category.includes('Cloud') || service.category.includes('FinOps'))) ||
      (selectedCategory === 'developer' && service.category.includes('Developer'));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (service as any).tagline?.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: "15+", label: "Innovative Services", icon: Star },
    { number: "99.9%", label: "Uptime Guarantee", icon: CheckCircle },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "200+", label: "Countries Served", icon: Globe }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Head>
        <title>Innovative 2025 Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's innovative 2025 services including AI-powered solutions, advanced IT infrastructure, and cutting-edge micro SAAS platforms. Transform your business with our revolutionary technology solutions." />
        <meta name="keywords" content="innovative services 2025, AI services, IT infrastructure, micro SAAS, cybersecurity, cloud solutions, Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-2025-services-showcase" />
      </Head>

      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,219,255,0.3),transparent_50%)]"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <motion.header 
            className="relative z-20 py-8 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </Link>
                
                <nav className="hidden md:flex items-center space-x-8">
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                  <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">
                    Solutions
                  </Link>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </nav>

                <div className="flex items-center space-x-4">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Hero Section */}
          <motion.section 
            className="relative z-20 py-20 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-7xl mx-auto text-center">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Innovative 2025
                </span>
                <br />
                <span className="text-white">Services Showcase</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Discover the future of technology with our cutting-edge AI services, advanced IT infrastructure, 
                and revolutionary micro SAAS platforms designed to transform your business in 2025 and beyond.
              </motion.p>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Search and Filter Section */}
          <motion.section 
            className="relative z-20 py-12 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="max-w-7xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search innovative services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                    <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Services Grid */}
          <motion.section 
            className="relative z-20 py-16 px-4 sm:px-6 lg:px-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <motion.div
                    key={service.id}
                    className="group relative"
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
                      {/* Service Icon and Header */}
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${(service as any).color || 'from-blue-500 to-purple-500'} flex items-center justify-center text-3xl`}>
                            {(service as any).icon || '🚀'}
                          </div>
                                                      {(service as any).popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                              POPULAR
                            </div>
                          )}
                        </div>

                        {/* Service Name and Tagline */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {(service as any).tagline || service.description?.substring(0, 100) || 'Innovative service solution'}
                        </p>

                        {/* Price */}
                        <div className="flex items-baseline mb-6">
                          <span className="text-3xl font-bold text-white">{(service as any).price || (service as any).pricing?.starter || 'Contact Us'}</span>
                          <span className="text-gray-400 ml-2">{(service as any).period || ''}</span>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-8">
                          {service.features.slice(0, 5).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 5 && (
                            <div className="text-gray-500 text-sm">
                              +{service.features.length - 5} more features
                            </div>
                          )}
                        </div>

                        {/* Service Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                          <div>
                            <div className="text-lg font-bold text-white">{(service as any).customers || '1000'}+</div>
                            <div className="text-xs text-gray-400">Customers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">{(service as any).rating || '4.8'}</div>
                            <div className="text-xs text-gray-400">Rating</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">{(service as any).reviews || '500'}</div>
                            <div className="text-xs text-gray-400">Reviews</div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                          href={`/services/${service.id}`}
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredServices.length === 0 && (
                <motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-6xl mb-6">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                  <p className="text-gray-400 mb-8">
                    Try adjusting your search terms or category filters
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section 
            className="relative z-20 py-20 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Get in touch with our team to learn more about our innovative 2025 services 
                and how they can revolutionize your operations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us Today
                </Link>
                <Link
                  href="/services"
                  className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-gray-500 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer 
            className="relative z-20 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Transforming businesses with innovative technology solutions for the future.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-4">Services</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/services" className="hover:text-white transition-colors">AI Services</Link></li>
                    <li><Link href="/services" className="hover:text-white transition-colors">IT Infrastructure</Link></li>
                    <li><Link href="/services" className="hover:text-white transition-colors">Micro SAAS</Link></li>
                    <li><Link href="/services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-4">Company</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                    <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                    <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                    <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-4">Connect</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
                    <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                    <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                <p className="text-gray-400 text-sm">
                  © 2025 Zion Tech Group. All rights reserved. | 
                  <Link href="/privacy" className="hover:text-white transition-colors ml-2">Privacy Policy</Link> | 
                  <Link href="/terms" className="hover:text-white transition-colors ml-2">Terms of Service</Link>
                </p>
              </div>
            </div>
          </motion.footer>
        </div>
      </div>
    </>
=======
    { 
      id: 'all', 
      name: 'All Services', 
      icon: <Globe className="w-5 h-5" />, 
      count: allInnovativeServices.length,
      color: 'from-gray-500 to-slate-500'
    },
    { 
      id: 'micro-saas', 
      name: 'Micro SAAS', 
      icon: <Rocket className="w-5 h-5" />, 
      count: innovative2025MicroSaasExpansions.length,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'it-services', 
      name: 'IT Services', 
      icon: <Cpu className="w-5 h-5" />, 
      count: innovative2025ITServiceExpansions.length,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'ai-services', 
      name: 'AI Services', 
      icon: <Brain className="w-5 h-5" />, 
      count: innovative2025AIServiceExpansions.length,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // Filter and sort services
  const filteredServices = allInnovativeServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        service.category.toLowerCase().includes(selectedCategory) ||
        service.name.toLowerCase().includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Innovative 2025 Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge micro SAAS, IT services, and AI solutions for 2025. Transform your business with innovative technology solutions."
        keywords="innovative services, micro SAAS, IT services, AI solutions, 2025, technology solutions, business transformation"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
          
          {/* Animated grid */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '200px 200px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '200px 200px']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovative 2025 Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with our cutting-edge micro SAAS, IT services, and AI solutions. 
            Built for the future, delivering results today.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-6 py-3">
              <span className="text-cyan-400 font-semibold">{allInnovativeServices.length}+ Services</span>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-3">
              <span className="text-purple-400 font-semibold">AI-Powered Solutions</span>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-3">
              <span className="text-green-400 font-semibold">Enterprise Ready</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="mb-12 space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex gap-4 items-center">
                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* View Mode */}
                <div className="flex bg-gray-900 border border-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} border-transparent text-white`
                      : 'bg-gray-900 border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchTerm}-${sortBy}-${viewMode}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    viewMode === 'list' ? 'flex' : 'block'
                  }`}
                >
                  {/* Service Card */}
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    {/* Header */}
                    <div className={`p-6 ${viewMode === 'list' ? 'border-r border-gray-700' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{service.icon}</div>
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>
                            <p className="text-gray-400 text-sm">{service.tagline}</p>
                          </div>
                        </div>
                        {service.popular && (
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                            Popular
                          </div>
                        )}
                      </div>

                      <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-cyan-400">
                          {service.price}
                          <span className="text-gray-400 text-lg font-normal">{service.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm">{service.rating}</span>
                          <span className="text-gray-400 text-sm">({service.reviews})</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>

                      {/* Market Info */}
                      <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                        <div className="text-xs text-gray-400 mb-2">Market Position</div>
                        <div className="text-sm text-gray-300">{service.marketPosition}</div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 bg-gray-800/30 border-t border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{service.setupTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{service.customers}+ customers</span>
                          </div>
                        </div>
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get in touch with our team to discuss how our innovative services can help you achieve your goals.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <Phone className="w-6 h-6 text-cyan-400" />
              <div className="text-left">
                <div className="text-sm text-gray-400">Phone</div>
                <div className="text-white font-medium">{contactInfo.mobile}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <Mail className="w-6 h-6 text-cyan-400" />
              <div className="text-left">
                <div className="text-sm text-gray-400">Email</div>
                <div className="text-white font-medium">{contactInfo.email}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <div className="text-left">
                <div className="text-sm text-gray-400">Address</div>
                <div className="text-white font-medium text-sm">{contactInfo.address}</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href={`tel:${contactInfo.mobile.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 border border-gray-600 hover:border-gray-500"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> origin/main
  );
};

export default Innovative2025ServicesShowcase;