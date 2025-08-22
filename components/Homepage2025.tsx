import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  innovativeRealMicroSaasServices2025 
} from '../data/2025-innovative-real-micro-saas-services';
import { 
  innovativeAIServicesEnhanced2025 
} from '../data/2025-innovative-ai-services-enhanced';
import { 
  innovativeITServicesEnhanced2025 
} from '../data/2025-innovative-it-services-enhanced';
import { 
  emergingTechServicesEnhanced2025 
} from '../data/2025-emerging-tech-services-enhanced';
import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';
import { quantumCybersecurityServices } from '../data/2026-quantum-cybersecurity-services';
import UltraFuturisticBackground2026 from './ui/UltraFuturisticBackground2026';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

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

  const featuredServices = allServices.filter(service => service.popular).slice(0, 12);

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
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  aria-current={activeSection === section.id ? 'page' : undefined}
                  className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  <span>{section.icon}</span>
                  <span>{section.label}</span>
                </button>
              ))}
              <a
                href="/services-enhanced"
                className="flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300"
              >
                <span>🔍</span>
                <span>All Services</span>
              </a>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-4"
            >
              <a
                href="tel:+13024640950"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              >
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm"
              >
                Contact Us
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="mobile-navigation"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-white/10"
                id="mobile-navigation"
              >
                <div className="py-4 space-y-2">
                  {navigationSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      aria-current={activeSection === section.id ? 'page' : undefined}
                      className={`flex items-center space-x-3 w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-cyan-400/20 text-cyan-400'
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <span>{section.icon}</span>
                      <span>{section.label}</span>
                    </button>
                  ))}
                  <a
                    href="/services-enhanced"
                    className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-all duration-300"
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
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center z-10 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Future of Technology
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed"
          >
            Revolutionary micro SAAS services, cutting-edge AI solutions, quantum cybersecurity, and emerging technologies that transform businesses and industries.
          </motion.p>

          {/* Enhanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 max-w-2xl mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for services, technologies, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {}} // Removed setShowSearchResults(true)
                className="w-full px-6 py-4 bg-black/40 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400 text-black'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Explore Services
            </button>
            <a
              href="https://ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Visit Website
            </a>
          </motion.div>

          {/* Search Results or Featured Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {(searchQuery || selectedCategory !== 'all' ? filteredServices : featuredServices.slice(0, 3)).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm">{service.tagline}</p>
                <div className="mt-4 text-cyan-400 font-bold">{service.price}{service.period}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative content-visibility-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionary Micro SAAS Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transform your business with our cutting-edge micro SAAS solutions that deliver immediate value and rapid ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeRealMicroSaasServices2025.slice(0, 9).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticServiceCard2026 
                  service={service} 
                  variant="default"
                  theme="quantum"
                />
              </motion.div>
            ))}
          </div>
          
          {/* View All Services Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/services-enhanced"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <span>🔍</span>
              <span>View All Services</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* AI Services Section */}
      <section id="ai" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20 content-visibility-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Cutting-Edge AI Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Leverage the power of artificial intelligence with our comprehensive suite of AI solutions designed for modern enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeAIServicesEnhanced2025.slice(0, 9).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticServiceCard2026 
                  service={service} 
                  variant="premium"
                  theme="quantum"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation Services Section */}
      <section id="automation" className="py-20 px-4 sm:px-6 lg:px-8 relative content-visibility-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Advanced AI Automation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Intelligent automation solutions that learn, adapt, and continuously optimize your business processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedAIAutomationServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticServiceCard2026 
                  service={service} 
                  variant="enterprise"
                  theme="holographic"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Cybersecurity Section */}
      <section id="quantum" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20 content-visibility-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Quantum Cybersecurity
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Unbreakable security powered by quantum computing and advanced AI algorithms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumCybersecurityServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticServiceCard2026 
                  service={service} 
                  variant="premium"
                  theme="cyberpunk"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Solutions Section */}
      <section id="it" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Advanced IT Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive IT services that drive digital transformation and business innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeITServicesEnhanced2025.slice(0, 9).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticServiceCard2026 
                  service={service} 
                  variant="default"
                  theme="quantum"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technologies Section */}
      <section id="emerging" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Emerging Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Revolutionary technologies that define the future of human civilization and business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergingTechServicesEnhanced2025.slice(0, 9).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticServiceCard2026 
                  service={service} 
                  variant="enterprise"
                  theme="holographic"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our innovative services can revolutionize your operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
              <form className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-300 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  >
                    <option value="">Select a service category</option>
                    <option value="ai-services">AI & Machine Learning</option>
                    <option value="quantum-cybersecurity">Quantum Cybersecurity</option>
                    <option value="micro-saas">Micro SAAS Solutions</option>
                    <option value="space-technology">Space Technology</option>
                    <option value="it-infrastructure">IT Infrastructure</option>
                    <option value="automation">Process Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>
                <span className="text-white font-bold text-xl">ZionTech Group</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Leading the future of technology with revolutionary micro SAAS services, cutting-edge AI solutions, and quantum cybersecurity innovations.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
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