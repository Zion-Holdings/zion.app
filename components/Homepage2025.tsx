import React, { useState, useEffect, useCallback, useMemo } from 'react';
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

const Homepage2025: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Memoize expensive computations
  const allServices = useMemo(() => [
    ...innovativeRealMicroSaasServices2025,
    ...innovativeAIServicesEnhanced2025,
    ...innovativeITServicesEnhanced2025,
    ...emergingTechServicesEnhanced2025,
    ...advancedAIAutomationServices,
    ...quantumCybersecurityServices
  ], []);

  const navigationSections = useMemo(() => [
    { id: 'hero', label: 'Home', icon: '🏠', description: 'Welcome to Zion Tech Group' },
    { id: 'services', label: 'Micro SAAS', icon: '🚀', description: 'Innovative software solutions' },
    { id: 'ai', label: 'AI Services', icon: '🧠', description: 'Advanced artificial intelligence' },
    { id: 'automation', label: 'AI Automation', icon: '⚡', description: 'Intelligent process automation' },
    { id: 'quantum', label: 'Quantum Security', icon: '🔐', description: 'Next-generation cybersecurity' },
    { id: 'it', label: 'IT Solutions', icon: '💻', description: 'Enterprise technology services' },
    { id: 'emerging', label: 'Emerging Tech', icon: '🌟', description: 'Cutting-edge innovations' },
    { id: 'contact', label: 'Contact', icon: '📞', description: 'Get in touch with us' }
  ], []);

  // Optimized scroll handler with debouncing
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  }, []);

  // Intersection Observer for better performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navigationSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navigationSections]);

  useEffect(() => {
    setIsLoading(false);
    
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % innovativeRealMicroSaasServices2025.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [innovativeRealMicroSaasServices2025.length]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto"></div>
          <p className="text-white mt-4 text-lg">Loading Zion Tech Group...</p>
        </div>
      </div>
    );
  }

  return (
    <UltraFuturisticBackground2026 intensity="medium" theme="quantum">
      {/* Enhanced Navigation with better accessibility */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10" 
        aria-label="Primary navigation"
        role="navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div 
                className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"
                aria-hidden="true"
              ></div>
              <span className="text-white font-bold text-xl">ZionTech Group</span>
            </motion.div>
            
            {/* Enhanced Desktop Navigation with tooltips */}
            <div className="hidden lg:flex space-x-8" role="menubar">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  aria-current={activeSection === section.id ? 'page' : undefined}
                  aria-label={`${section.label}: ${section.description}`}
                  role="menuitem"
                  className={`group flex items-center space-x-2 text-sm font-medium transition-all duration-300 relative ${
                    activeSection === section.id
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  <span aria-hidden="true">{section.icon}</span>
                  <span>{section.label}</span>
                  
                  {/* Enhanced tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    {section.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                  </div>
                </button>
              ))}
            </div>

            {/* Enhanced Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-4"
            >
              <a
                href="tel:+13024640950"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm flex items-center space-x-2"
                aria-label="Call us at +1 302 464 0950"
              >
                <span aria-hidden="true">📱</span>
                <span>+1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm flex items-center space-x-2"
                aria-label="Send us an email"
              >
                <span aria-hidden="true">✉️</span>
                <span>Contact Us</span>
              </a>
            </motion.div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="mobile-navigation"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Enhanced Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-white/10"
                id="mobile-navigation"
                role="menu"
              >
                <div className="py-4 space-y-2">
                  {navigationSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      aria-current={activeSection === section.id ? 'page' : undefined}
                      role="menuitem"
                      className={`flex items-center space-x-3 w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-cyan-400/20 text-cyan-400'
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <span aria-hidden="true">{section.icon}</span>
                      <span>{section.label}</span>
                      <span className="text-xs text-gray-400 ml-auto">{section.description}</span>
                    </button>
                  ))}
                  <div className="pt-4 border-t border-white/10">
                    <a
                      href="tel:+13024640950"
                      className="flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                      aria-label="Call us at +1 302 464 0950"
                    >
                      <span aria-hidden="true">📱</span>
                      <span>+1 302 464 0950</span>
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                      aria-label="Send us an email"
                    >
                      <span aria-hidden="true">✉️</span>
                      <span>kleber@ziontechgroup.com</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Enhanced Hero Section with better accessibility */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
        aria-labelledby="hero-heading"
        role="banner"
      >
        <div className="text-center z-10 max-w-6xl mx-auto">
          <motion.h1
            id="hero-heading"
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
            Pioneering the next generation of AI-powered solutions, quantum computing, and autonomous systems that transform businesses and drive innovation across industries.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="Explore our services"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 text-lg font-semibold"
              aria-label="Get in touch with us"
            >
              Get Started
            </a>
          </motion.div>

          {/* Enhanced Service Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <p className="text-gray-400 mb-4 text-lg">Featured Service:</p>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-4xl">{innovativeRealMicroSaasServices2025[currentServiceIndex]?.icon}</span>
                <div className="text-left">
                  <h3 className="text-white font-semibold text-lg">
                    {innovativeRealMicroSaasServices2025[currentServiceIndex]?.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {innovativeRealMicroSaasServices2025[currentServiceIndex]?.tagline}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section with Performance Optimizations */}
      <section 
        id="services" 
        className="py-20 px-4 sm:px-6 lg:px-8 relative content-visibility-auto"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              id="services-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionary Micro SAAS Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our cutting-edge micro SAAS solutions that deliver immediate value and rapid ROI. 
              Built with modern technologies and designed for scalability.
            </p>
            
            {/* Enhanced Service Stats */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{innovativeRealMicroSaasServices2025.length}+</div>
                <div className="text-gray-400 text-sm">Available Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-gray-400 text-sm">Support Available</div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Service Grid with Lazy Loading */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeRealMicroSaasServices2025.slice(0, 9).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <UltraFuturisticServiceCard2026 
                  service={service} 
                  variant="default"
                  theme="quantum"
                />
                
                {/* Enhanced Hover Effects */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Setup: {service.setupTime}</span>
                    <span>Trial: {service.trialDays} days</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {service.technology.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/services"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="View all our services"
            >
              <span>View All Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Enhanced AI Services Section */}
      <section 
        id="ai" 
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20 content-visibility-auto"
        aria-labelledby="ai-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              id="ai-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Cutting-Edge AI Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI solutions that transform businesses and create unprecedented opportunities. 
              From machine learning to natural language processing, we're pushing the boundaries of what's possible.
            </p>
            
            {/* AI Capabilities Overview */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: '🤖', label: 'Machine Learning', desc: 'Advanced ML models' },
                { icon: '💬', label: 'NLP', desc: 'Natural language processing' },
                { icon: '👁️', label: 'Computer Vision', desc: 'Image & video analysis' },
                { icon: '🧠', label: 'Neural Networks', desc: 'Deep learning systems' }
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{capability.icon}</div>
                  <div className="font-semibold text-white text-sm">{capability.label}</div>
                  <div className="text-gray-400 text-xs">{capability.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced AI Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeAIServicesEnhanced2025.slice(0, 9).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <UltraFuturisticServiceCard2026 
                  service={service} 
                  variant="premium"
                  theme="quantum"
                />
                
                {/* AI Service Specific Features */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap gap-2">
                    {service.useCases?.slice(0, 2).map((useCase, useCaseIndex) => (
                      <span 
                        key={useCaseIndex}
                        className="px-3 py-1 bg-purple-400/10 text-purple-400 text-xs rounded-full"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced AI Automation Services Section */}
      <section 
        id="automation" 
        className="py-20 px-4 sm:px-6 lg:px-8 relative content-visibility-auto"
        aria-labelledby="automation-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              id="automation-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Advanced AI Automation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Intelligent automation solutions that learn, adapt, and continuously optimize your business processes. 
              Reduce manual work by up to 80% while improving accuracy and efficiency.
            </p>
            
            {/* Automation Benefits Overview */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '⚡', label: '80% Faster', desc: 'Process automation' },
                { icon: '🎯', label: '99.9% Accuracy', desc: 'AI-powered precision' },
                { icon: '🔄', label: '24/7 Operation', desc: 'Continuous optimization' }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-emerald-400/50 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <div className="font-semibold text-white text-sm">{benefit.label}</div>
                  <div className="text-gray-400 text-xs">{benefit.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Automation Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedAIAutomationServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <UltraFuturisticServiceCard2026 
                  service={service} 
                  variant="enterprise"
                  theme="holographic"
                />
                
                {/* Automation Service Specific Features */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap gap-2">
                    {service.integrations?.slice(0, 3).map((integration, integrationIndex) => (
                      <span 
                        key={integrationIndex}
                        className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs rounded-full"
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                  {service.roi && (
                    <div className="mt-2 text-sm text-emerald-400 font-medium">
                      ROI: {service.roi}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Quantum Cybersecurity Section */}
      <section 
        id="quantum" 
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20 content-visibility-auto"
        aria-labelledby="quantum-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              id="quantum-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Quantum Cybersecurity
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Unbreakable security powered by quantum computing and advanced AI algorithms. 
              Future-proof your organization against emerging cyber threats with next-generation protection.
            </p>
            
            {/* Quantum Security Features */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { icon: '🔐', label: 'Quantum Encryption', desc: 'Unbreakable algorithms' },
                { icon: '🛡️', label: 'AI Threat Detection', desc: 'Real-time monitoring' },
                { icon: '🚨', label: 'Zero-Day Protection', desc: 'Advanced threat prevention' },
                { icon: '🔒', label: 'Compliance Ready', desc: 'SOC2, ISO, GDPR' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-indigo-400/50 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <div className="font-semibold text-white text-sm">{feature.label}</div>
                  <div className="text-gray-400 text-xs">{feature.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Quantum Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumCybersecurityServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <UltraFuturisticServiceCard2026 
                  service={service} 
                  variant="premium"
                  theme="cyberpunk"
                />
                
                {/* Quantum Service Specific Features */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap gap-2">
                    {service.technology?.slice(0, 2).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-400/10 text-indigo-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {service.marketPosition && (
                    <div className="mt-2 text-xs text-gray-400 leading-relaxed">
                      {service.marketPosition}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced IT Solutions Section */}
      <section 
        id="it" 
        className="py-20 px-4 sm:px-6 lg:px-8 relative content-visibility-auto"
        aria-labelledby="it-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              id="it-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Advanced IT Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services that drive digital transformation and business innovation. 
              From cloud infrastructure to enterprise applications, we build the foundation for your success.
            </p>
            
            {/* IT Solutions Overview */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { icon: '☁️', label: 'Cloud Solutions', desc: 'Multi-cloud expertise' },
                { icon: '🔧', label: 'DevOps', desc: 'CI/CD automation' },
                { icon: '📊', label: 'Data Analytics', desc: 'Business intelligence' },
                { icon: '🛡️', label: 'Cybersecurity', desc: 'Enterprise protection' }
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{solution.icon}</div>
                  <div className="font-semibold text-white text-sm">{solution.label}</div>
                  <div className="text-gray-400 text-xs">{solution.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced IT Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeITServicesEnhanced2025.slice(0, 9).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <UltraFuturisticServiceCard2026 
                  service={service} 
                  variant="default"
                  theme="quantum"
                />
                
                {/* IT Service Specific Features */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap gap-2">
                    {service.category && (
                      <span className="px-3 py-1 bg-green-400/10 text-green-400 text-xs rounded-full">
                        {service.category}
                      </span>
                    )}
                    {service.targetAudience && (
                      <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs rounded-full">
                        {service.targetAudience}
                      </span>
                    )}
                  </div>
                  {service.growthRate && (
                    <div className="mt-2 text-sm text-green-400 font-medium">
                      Growth: {service.growthRate}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Emerging Technologies Section */}
      <section 
        id="emerging" 
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20 content-visibility-auto"
        aria-labelledby="emerging-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              id="emerging-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Emerging Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionary technologies that define the future of human civilization and business. 
              From space exploration to quantum computing, we're building tomorrow's innovations today.
            </p>
            
            {/* Emerging Tech Categories */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { icon: '🚀', label: 'Space Tech', desc: 'Satellite & exploration' },
                { icon: '🧬', label: 'Biotech', desc: 'Genetic engineering' },
                { icon: '⚛️', label: 'Quantum', desc: 'Computing & security' },
                { icon: '🌐', label: 'Metaverse', desc: 'Virtual reality' }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="font-semibold text-white text-sm">{category.label}</div>
                  <div className="text-gray-400 text-xs">{category.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Emerging Tech Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergingTechServicesEnhanced2025.slice(0, 9).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <UltraFuturisticServiceCard2026 
                  service={service} 
                  variant="enterprise"
                  theme="holographic"
                />
                
                {/* Emerging Tech Service Specific Features */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap gap-2">
                    {service.marketSize && (
                      <span className="px-3 py-1 bg-yellow-400/10 text-yellow-400 text-xs rounded-full">
                        {service.marketSize}
                      </span>
                    )}
                    {service.competitors && service.competitors.length > 0 && (
                      <span className="px-3 py-1 bg-orange-400/10 text-orange-400 text-xs rounded-full">
                        {service.competitors.length} competitors
                      </span>
                    )}
                  </div>
                  {service.launchDate && (
                    <div className="mt-2 text-sm text-yellow-400 font-medium">
                      Launched: {new Date(service.launchDate).getFullYear()}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section 
        id="contact" 
        className="py-20 px-4 sm:px-6 lg:px-8 relative content-visibility-auto"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              id="contact-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Contact us today to learn how our innovative services can revolutionize your operations. 
              Let's build the future together.
            </p>
            
            {/* Enhanced Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  aria-label="Call us at +1 302 464 0950"
                >
                  +1 302 464 0950
                </a>
                <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">✉️</div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  aria-label="Send us an email"
                >
                  kleber@ziontechgroup.com
                </a>
                <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📍</div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <address className="text-gray-300 text-sm not-italic">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </address>
                <p className="text-gray-400 text-sm mt-2">Global remote support</p>
              </motion.div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                href="https://ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                aria-label="Visit our main website"
              >
                Visit Our Website
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                href="mailto:kleber@ziontechgroup.com?subject=Business%20Transformation%20Inquiry"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                aria-label="Get started with our services"
              >
                Get Started Today
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer with Better Accessibility */}
      <footer 
        className="bg-black/60 border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8"
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-4">ZionTech Group</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Revolutionary technology solutions that transform businesses and industries through innovation, AI, and emerging technologies.
              </p>
              <div className="mt-4 flex space-x-4">
                <a 
                  href="/social/linkedin" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="/social/twitter" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="Follow us on X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="/social/github" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="Follow us on GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors" aria-label="View Micro SAAS services">Micro SAAS</a></li>
                <li><a href="#ai" className="hover:text-cyan-400 transition-colors" aria-label="View AI services">AI Services</a></li>
                <li><a href="#automation" className="hover:text-cyan-400 transition-colors" aria-label="View AI automation services">AI Automation</a></li>
                <li><a href="#quantum" className="hover:text-cyan-400 transition-colors" aria-label="View quantum security services">Quantum Security</a></li>
                <li><a href="#it" className="hover:text-cyan-400 transition-colors" aria-label="View IT solutions">IT Solutions</a></li>
                <li><a href="#emerging" className="hover:text-cyan-400 transition-colors" aria-label="View emerging technologies">Emerging Tech</a></li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors" aria-label="Learn more about us">About Us</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors" aria-label="Contact us">Contact</a></li>
                <li><a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors" aria-label="View career opportunities">Careers</a></li>
                <li><a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors" aria-label="Read our blog">Blog</a></li>
                <li><a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors" aria-label="Latest news">News</a></li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a 
                    href="tel:+13024640950" 
                    className="hover:text-cyan-400 transition-colors flex items-center space-x-2"
                    aria-label="Call us at +1 302 464 0950"
                  >
                    <span aria-hidden="true">📱</span>
                    <span>+1 302 464 0950</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="hover:text-cyan-400 transition-colors flex items-center space-x-2"
                    aria-label="Send us an email"
                  >
                    <span aria-hidden="true">✉️</span>
                    <span>kleber@ziontechgroup.com</span>
                  </a>
                </li>
                <li><a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors" aria-label="Visit our main website">Website</a></li>
                <li><a href="/social/linkedin" className="hover:text-cyan-400 transition-colors" aria-label="Connect on LinkedIn">LinkedIn</a></li>
                <li><a href="/social/twitter" className="hover:text-cyan-400 transition-colors" aria-label="Follow on X (Twitter)">X (Twitter)</a></li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="border-t border-white/10 pt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              © 2025 ZionTech Group. All rights reserved. | 
              <a 
                href="https://ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 ml-2 transition-colors"
                aria-label="Visit our main website"
              >
                https://ziontechgroup.com
              </a>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Revolutionizing technology, one breakthrough at a time.
            </p>
            
            {/* Enhanced Back to Top Button */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-6 inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              aria-label="Back to top"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to Top</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </footer>
    </UltraFuturisticBackground2026>
  );
};

export default Homepage2025;