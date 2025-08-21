import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Phone, Mail, MapPin } from 'lucide-react';

interface Service {
  name: string;
  href: string;
  description: string;
  price: string;
}

interface ServiceCategory {
  name: string;
  href: string;
  description: string;
  services: Service[];
}

const UltraAdvancedNavigation2026: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const serviceCategories: ServiceCategory[] = [
    {
      name: 'AI Services',
      href: '/ai-services',
      description: 'Advanced Artificial Intelligence Solutions',
      services: [
        { name: 'Quantum AI Consciousness', href: '/ai-services/quantum-consciousness', description: 'Simulate human consciousness with quantum computing', price: '$15,000/month' },
        { name: 'Autonomous Healthcare AI', href: '/ai-services/autonomous-healthcare', description: 'Self-learning AI for healthcare decisions', price: '$12,000/month' },
        { name: 'Neuromorphic Computing', href: '/ai-services/neuromorphic', description: 'Brain-inspired computing for next-gen AI', price: '$18,000/month' }
      ]
    },
    {
      name: 'Quantum Services',
      href: '/quantum-services',
      description: 'Next-Generation Quantum Computing',
      services: [
        { name: 'Quantum Internet Security', href: '/quantum-services/internet-security', description: 'Unbreakable encryption for quantum internet', price: '$25,000/month' },
        { name: 'Quantum Financial Trading', href: '/quantum-services/financial-trading', description: 'Quantum-powered algorithmic trading', price: '$30,000/month' },
        { name: 'Quantum Machine Learning', href: '/quantum-services/machine-learning', description: 'Quantum algorithms for ML acceleration', price: '$22,000/month' }
      ]
    },
    {
      name: 'Space Technology',
      href: '/space-technology',
      description: 'Innovative Space Solutions',
      services: [
        { name: 'Autonomous Space Mining', href: '/space-technology/space-mining', description: 'AI-powered autonomous mining in space', price: '$50,000/month' },
        { name: 'Space Debris Management', href: '/space-technology/debris-management', description: 'AI-powered space safety and tracking', price: '$35,000/month' },
        { name: 'Quantum Internet Infrastructure', href: '/space-technology/quantum-infrastructure', description: 'Platform for building quantum internet', price: '$40,000/month' }
      ]
    },
    {
      name: 'Biotechnology',
      href: '/biotechnology',
      description: 'Cutting-Edge Biotech Solutions',
      services: [
        { name: 'DNA Computing Platform', href: '/biotechnology/dna-computing', description: 'Molecular computing for complex problems', price: '$28,000/month' },
        { name: 'Biotech AI Research', href: '/biotechnology/ai-research', description: 'Accelerate biotech research with AI', price: '$20,000/month' },
        { name: 'Autonomous Manufacturing AI', href: '/biotechnology/manufacturing-ai', description: 'Self-optimizing manufacturing operations', price: '$25,000/month' }
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas',
      description: 'Specialized Software Solutions',
      services: [
        { name: 'Holographic Metaverse', href: '/micro-saas/holographic-metaverse', description: '3D holographic metaverse experiences', price: '$8,000/month' },
        { name: 'Autonomous Marketing AI', href: '/micro-saas/marketing-ai', description: 'Self-optimizing marketing campaigns', price: '$6,000/month' },
        { name: 'Autonomous Legal AI', href: '/micro-saas/legal-ai', description: 'AI-powered legal research and analysis', price: '$10,000/month' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-300">
            <div className="flex items-center space-x-6">
              <a 
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-200"
              >
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-200"
              >
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://ziontechgroup.com"
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-200"
              >
                <Globe className="w-3 h-3" />
                <span>ziontechgroup.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gradient-cyber">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">Future is Now</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {serviceCategories.map((category) => (
              <div key={category.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(category.name)}
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  <span>{category.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === category.name ? 'rotate-180' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === category.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-400/20 rounded-xl shadow-2xl overflow-hidden"
                      onMouseLeave={closeDropdown}
                    >
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">{category.name}</h3>
                        <p className="text-sm text-gray-300 mb-4">{category.description}</p>
                        <div className="space-y-3">
                          {category.services.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              className="block p-3 rounded-lg hover:bg-cyan-400/10 transition-colors duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                    {service.name}
                                  </h4>
                                  <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                                </div>
                                <span className="text-sm font-semibold text-cyan-400">{service.price}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-cyan-400/20">
                          <a
                            href={category.href}
                            className="block text-center py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium"
                          >
                            View All {category.name}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Additional Links */}
            <a
              href="/pricing"
              className="text-white hover:text-cyan-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/5"
            >
              Pricing
            </a>
            <a
              href="/about"
              className="text-white hover:text-cyan-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/5"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/5"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.a
              href="/get-started"
              className="btn-futuristic inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors duration-200 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-400/20"
          >
            <div className="px-4 py-6 space-y-4">
              {serviceCategories.map((category) => (
                <div key={category.name}>
                  <button
                    onClick={() => toggleDropdown(category.name)}
                    className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-white/5"
                  >
                    <span>{category.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === category.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === category.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-2 space-y-2"
                      >
                        {category.services.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="block py-2 px-4 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/5"
                          >
                            <div className="flex items-center justify-between">
                              <span>{service.name}</span>
                              <span className="text-xs text-cyan-400 font-medium">{service.price}</span>
                            </div>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile Additional Links */}
              <div className="pt-4 border-t border-cyan-400/20 space-y-2">
                <a
                  href="/pricing"
                  className="block py-2 px-4 text-white hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  Pricing
                </a>
                <a
                  href="/about"
                  className="block py-2 px-4 text-white hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="block py-2 px-4 text-white hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  Contact
                </a>
                <a
                  href="/get-started"
                  className="block mt-4 py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg text-center font-medium"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default UltraAdvancedNavigation2026;