import React, { useState } from 'react';
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

const Innovative2025ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Combine all innovative services
  const allInnovativeServices = [
    ...innovativeMicroSaasExpansionV32025,
    ...innovativeITServicesExpansion2025V3,
    ...innovativeAIServicesExpansion2025V3
  ];

  const categories = [
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
  );
};

export default Innovative2025ServicesShowcase;
