import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart,
  Phone, Mail, MapPin, Search, Grid, List, Sparkles, Target, BarChart3, 
  Lightbulb, Code, Server, Network, ShieldCheck, BrainCircuit, Atom, Satellite
} from 'lucide-react';
import Link from 'next/link';

// Import our new innovative services
import { innovative2046AdvancedMicroSAASServices } from '../data/innovative-2046-advanced-micro-saas';
import { innovative2046AdvancedITServices } from '../data/innovative-2046-advanced-it-services';
import { innovative2046AdvancedAIServices } from '../data/innovative-2046-advanced-ai-services';

// Loading fallback component with enhanced animations
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
    {/* Animated background particles */}
    <div className="absolute inset-0">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          animate={{
            x: [0, Math.random() * 1000],
            y: [0, Math.random() * 1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ))}
    </div>
    
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center relative z-10"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 mx-auto mb-6"
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
            <Atom className="w-12 h-12 text-white" />
          </div>
        </motion.div>
      </div>
      <motion.h1 
        className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading Zion Tech Group 2046...
      </motion.h1>
      <p className="text-lg text-gray-300 mb-2">Preparing your futuristic digital transformation journey</p>
      <p className="text-sm text-gray-400">Quantum AI • Neural Interfaces • Space Technology • Advanced IT</p>
    </motion.div>
  </div>
);

const Homepage2046: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for better performance
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.3, rootMargin: '-100px' }
      );

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.2, ease: "easeOut" }
  };

  const getColorClasses = (index: number) => {
    const colors = [
      'from-cyan-400 to-blue-500',
      'from-purple-400 to-pink-500',
      'from-emerald-400 to-teal-500',
      'from-orange-400 to-red-500',
      'from-indigo-400 to-purple-500',
      'from-yellow-400 to-orange-500'
    ];
    return colors[index % colors.length];
  };

  const allServices = [
    ...innovative2046AdvancedMicroSAASServices,
    ...innovative2046AdvancedITServices,
    ...innovative2046AdvancedAIServices
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', 'AI', 'Quantum', 'IT', 'Micro SAAS', 'Cybersecurity', 'Space', 'Blockchain', 'Healthcare', 'Finance', 'Energy', 'Manufacturing'];

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <Layout>
      <AnimatePresence>
        {isVisible && (
          <div className="relative min-h-screen">
            {/* Enhanced Animated Background */}
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
              
              {/* Floating geometric shapes with enhanced animations */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 border border-cyan-400/20 rounded-lg"
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    rotate: [0, 360],
                    opacity: [0.1, 0.4, 0.1],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: Math.random() * 15 + 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                  }}
                />
              ))}
              
              {/* Enhanced animated particles */}
              {[...Array(150)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
                  animate={{
                    x: [0, Math.random() * 1000],
                    y: [0, Math.random() * 1000],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                  }}
                />
              ))}
            </div>

            {/* Hero Section */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <motion.div
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block p-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-[length:200%_200%] mb-6"
                  >
                    <div className="px-6 py-2 bg-black rounded-full">
                      <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        🚀 2046 Technology Showcase
                      </span>
                    </div>
                  </motion.div>
                  
                  <motion.h1 
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      Zion Tech Group
                    </span>
                    <br />
                    <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-300">
                      2046
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Pioneering the future with revolutionary quantum AI, advanced IT infrastructure, 
                    and cutting-edge micro SAAS solutions. Experience technology that transcends 
                    current limitations and opens new possibilities.
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <Link href="/services">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full flex items-center gap-2 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Explore Services
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                    
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full flex items-center gap-2 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                      >
                        <Phone className="w-5 h-5" />
                        Contact Us
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Services Showcase Section */}
            <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                    Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">2046 Services</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Discover our cutting-edge portfolio of quantum AI, advanced IT infrastructure, 
                    and innovative micro SAAS solutions that are reshaping industries.
                  </p>
                </motion.div>

                {/* Search and Filter */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                    <div className="relative w-full max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                      />
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            selectedCategory === category
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                              : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredServices.slice(0, 9).map((service, index) => (
                    <motion.div
                      key={service.id}
                      variants={fadeInUp}
                      className="group relative"
                    >
                      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                        <div className="absolute top-4 right-4">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getColorClasses(index)}`}></div>
                        </div>
                        
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {service.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">
                            {service.tagline}
                          </p>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl font-bold text-cyan-400">
                              {service.price}
                            </span>
                            <span className="text-sm text-gray-500">/month</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{service.rating}</span>
                            <span className="text-sm text-gray-500">({service.reviews} reviews)</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            {service.customers} customers • {service.launchDate}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Link href={service.link}>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                            >
                              Learn More
                            </motion.button>
                          </Link>
                          
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span className="text-xs text-gray-500">{service.contactInfo.phone}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* View All Services Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mt-12"
                >
                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    >
                      View All Services
                      <ArrowRight className="w-5 h-5 ml-2 inline" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Future?</span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    Connect with our team of experts and discover how our revolutionary 2046 
                    technology solutions can accelerate your digital transformation journey.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                      <p className="text-cyan-400">+1 302 464 0950</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <p className="text-purple-400">kleber@ziontechgroup.com</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                      <p className="text-emerald-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                  
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Get Started Today
                      <ArrowRight className="w-5 h-5 ml-2 inline" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </section>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Homepage2046;