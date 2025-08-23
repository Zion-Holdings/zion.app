import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe,
  CheckCircle, Users, Award, Rocket
} from 'lucide-react';
import PerformanceOptimizer from './PerformanceOptimizer';
import SEOEnhancer from './SEOEnhancer';

// Unified service interface
interface UnifiedService {
  id: string;
  name: string;
  description?: string;
  tagline?: string;
  category?: string;
  technology?: string[];
  price?: string;
  period?: string;
  icon?: string;
  popular?: boolean;
}

const Homepage2025: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFloatingActions, setShowFloatingActions] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const interval = setInterval(() => {
      // This interval was for currentServiceIndex, which is removed.
      // Keeping it for now as it might be re-introduced or removed later.
      // setCurrentServiceIndex((prev) => (prev + 1) % innovativeRealMicroSaasServices2025.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const staggerContainer = useMemo(() => ({
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }), []);

  // Convert services to unified format
  const allServices: UnifiedService[] = [
    ...innovativeRealMicroSaasServices2025.map(service => ({
      id: service.id,
      name: service.name,
      description: service.description,
      tagline: service.tagline,
      category: service.category,
      technology: service.technology,
      price: service.price,
      period: service.period,
      icon: service.icon,
      popular: service.popular
    })),
    ...innovativeAIServicesEnhanced2025.map(service => ({
      id: service.id,
      name: service.name,
      description: service.description,
      tagline: service.tagline,
      category: service.category,
      technology: service.technology,
      price: service.price,
      period: service.period,
      icon: service.icon,
      popular: service.popular
    })),
    ...innovativeITServicesEnhanced2025.map(service => ({
      id: service.id,
      name: service.name,
      description: service.description,
      tagline: service.tagline,
      category: service.category,
      technology: service.technology,
      price: service.price,
      period: service.period,
      icon: service.icon,
      popular: service.popular
    })),
    ...emergingTechServicesEnhanced2025.map(service => ({
      id: service.id,
      name: service.name,
      description: service.description,
      tagline: service.tagline,
      category: service.category,
      technology: service.technology,
      price: service.price,
      period: service.period,
      icon: service.icon,
      popular: service.popular
    })),
    ...advancedAIAutomationServices.map(service => ({
      id: service.id,
      name: service.name,
      description: service.description,
      tagline: service.tagline,
      category: service.category,
      technology: service.technology,
      price: service.price,
      period: service.period,
      icon: service.icon,
      popular: service.popular
    })),
    ...quantumCybersecurityServices.map(service => ({
      id: service.id,
      name: service.name,
      description: service.description,
      tagline: service.tagline,
      category: service.category,
      technology: service.technology,
      price: service.price,
      period: service.period,
      icon: service.icon,
      popular: service.popular
    }))
  ];

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

  // Enhanced search and filtering
  const filteredServices = useMemo(() => {
    let filtered = allServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category?.toLowerCase() === selectedCategory.toLowerCase() ||
        service.technology?.some(tech => tech.toLowerCase().includes(selectedCategory.toLowerCase()))
      );
    }
    
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tagline?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.technology?.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return filtered.slice(0, 12);
  }, [allServices, searchQuery, selectedCategory]);

  const categories = [
    { id: 'all', label: 'All Services', icon: '🚀' },
    { id: 'ai', label: 'AI & ML', icon: '🧠' },
    { id: 'quantum', label: 'Quantum', icon: '🔐' },
    { id: 'space', label: 'Space Tech', icon: '🌟' },
    { id: 'cybersecurity', label: 'Security', icon: '🛡️' },
    { id: 'automation', label: 'Automation', icon: '⚡' },
    { id: 'cloud', label: 'Cloud', icon: '☁️' },
    { id: 'fintech', label: 'FinTech', icon: '💰' }
  ];

  const navigationSections = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'services', label: 'Micro SAAS', icon: '🚀' },
    { id: 'ai', label: 'AI Services', icon: '🧠' },
    { id: 'automation', label: 'AI Automation', icon: '⚡' },
    { id: 'quantum', label: 'Quantum Security', icon: '🔐' },
    { id: 'it', label: 'IT Solutions', icon: '💻' },
    { id: 'emerging', label: 'Emerging Tech', icon: '🌟' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <UltraFuturisticBackground2026 intensity="medium" theme="quantum">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10" aria-label="Primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>
              <span className="text-white font-bold text-xl">ZionTech Group</span>
            </motion.div>
            
            {/* Reduced particle count for better performance */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                  animate={{
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
              <a
                href="/services-enhanced"
                className="flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300"
              >
                <span>🔍</span>
                <span>All Services</span>
              </a>
            </div>

          {/* Hero Content */}
          <div className="text-center relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 
                id="hero-heading"
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
              >
                The Future of
                <br />
                Technology
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Pioneering AI consciousness, quantum computing, and autonomous solutions that transform businesses and industries worldwide
              </p>
              
              {/* Enhanced Search Bar */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-white/10"
                id="mobile-navigation"
              >
                <form onSubmit={handleSearch} className="flex max-w-2xl mx-auto">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search our services, solutions, or technologies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      aria-label="Search services and solutions"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-r-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                    aria-label="Search services"
                  >
                    <span>🔍</span>
                    <span>All Services</span>
                  </a>
                  <div className="pt-4 border-t border-white/10">
                    <a
                      href="tel:+13024640950"
                      className="flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                    >
                      <span>📱</span>
                      <span>+1 302 464 0950</span>
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                    >
                      <span>✉️</span>
                      <span>kleber@ziontechgroup.com</span>
                    </a>
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none"
                  onClick={() => window.location.href = '/get-started'}
                  aria-label="Start your journey with Zion Tech Group"
                >
                  Start Your Journey
                </button>
                <button 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none"
                  onClick={() => window.location.href = '/demo'}
                  aria-label="Schedule a demo of our services"
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              </motion.div>
              
              {/* Enhanced Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center space-x-6 text-sm text-gray-400"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <div className="flex items-center space-x-2 text-sm text-cyan-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>AI-First Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-blue-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Quantum Innovation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-purple-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/get-started">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center gap-2">
                      Start Your Transformation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/demo">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Book Free Demo
                  </button>
                </div>
                
                {/* Search Suggestions */}
                <AnimatePresence>
                  {isSearchFocused && searchQuery.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-lg overflow-hidden z-50"
                    >
                      {searchSuggestions
                        .filter(suggestion => 
                          suggestion.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => setSearchQuery(suggestion)}
                            className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors duration-200 flex items-center space-x-3"
                          >
                            <Search className="w-4 h-4 text-gray-400" />
                            <span>{suggestion}</span>
                          </button>
                        ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

        {/* Enhanced Company Stats */}
        <section className="py-20 px-4 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/demo"
                className="group border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10 flex items-center justify-center space-x-2"
              >
                <span>Request Demo</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Enhanced Quick Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive range of cutting-edge technology solutions designed to transform your business and accelerate growth
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 text-sm flex flex-col items-center space-y-2"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Services Preview */}
      <section 
        data-section="services"
        className="py-20 px-4 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI consciousness evolution to quantum space mining, we're building the future today.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm"
            >
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-First Approach</h3>
                <p className="text-gray-300">Leading-edge artificial intelligence solutions that adapt and evolve with your business needs</p>
              </motion.div>
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <UltraFuturisticServiceCard2026 
                  service={service} 
                  variant="premium"
                  theme="quantum"
                />
              </motion.div>
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Military-grade security and compliance solutions that protect your most valuable assets</p>
              </motion.div>
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
                <p className="text-gray-300">Fast implementation and continuous optimization to get you results quickly</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Preview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Our Revolutionary Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto"
            >
              Discover cutting-edge AI, quantum computing, and autonomous solutions that transform businesses and industries
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'ai-consciousness',
                  name: 'AI Consciousness Evolution',
                  tagline: 'Advanced AI consciousness development',
                  description: 'Revolutionary platform for developing AI systems with advanced consciousness capabilities',
                  price: '$8,999',
                  period: '/month',
                  features: ['Consciousness Development', 'Ethical Training', 'Safety Protocols'],
                  popular: true,
                  category: 'AI & Consciousness',
                  icon: '🧠'
                }}
                variant="ai"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-cybersecurity',
                  name: 'Quantum Cybersecurity',
                  tagline: 'Quantum-resistant security platform',
                  description: 'Advanced cybersecurity with quantum-resistant encryption and AI threat detection',
                  price: '$2,499',
                  period: '/month',
                  features: ['Quantum Encryption', 'AI Threat Detection', 'Zero Trust'],
                  popular: true,
                  category: 'Quantum & Security',
                  icon: '🛡️'
                }}
                variant="quantum"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'autonomous-content',
                  name: 'AI Content Factory',
                  tagline: 'Fully automated content creation',
                  description: 'End-to-end autonomous content creation, optimization, and distribution platform',
                  price: '$1,999',
                  period: '/month',
                  features: ['Content Generation', 'SEO Optimization', 'Distribution'],
                  popular: false,
                  category: 'AI & Content',
                  icon: '📝'
                }}
                variant="ai"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-computing',
                  name: 'Quantum Computing Platform',
                  tagline: 'Next-generation quantum solutions',
                  description: 'Access to cutting-edge quantum computing resources and algorithms',
                  price: '$5,999',
                  period: '/month',
                  features: ['Quantum Processing', 'Algorithm Library', 'Cloud Access'],
                  popular: false,
                  category: 'Quantum & Computing',
                  icon: '⚛️'
                }}
                variant="quantum"
              />
            </motion.div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-20 px-4 bg-black/20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-600 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from real businesses using our cutting-edge technology solutions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{testimonial.content}</p>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none"
                  onClick={() => window.location.href = '/contact'}
                  aria-label="Contact us to get started"
                >
                  Get Started Today
                </button>
                <button 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none"
                  onClick={() => window.location.href = '/demo'}
                  aria-label="Schedule a personalized demo"
                >
                  Schedule a Demo
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Micro SAAS</a></li>
                <li><a href="#ai" className="hover:text-cyan-400 transition-colors">AI Services</a></li>
                <li><a href="#quantum" className="hover:text-cyan-400 transition-colors">Quantum Security</a></li>
                <li><a href="#it" className="hover:text-cyan-400 transition-colors">IT Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                <li><a href="#careers" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#partners" className="hover:text-cyan-400 transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 ZionTech Group. All rights reserved. | 
              <a href="/privacy" className="hover:text-cyan-400 transition-colors ml-2">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-cyan-400 transition-colors ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </UltraFuturisticBackground2026>
  );
};

export default Homepage2025;