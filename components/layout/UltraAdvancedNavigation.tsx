import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Rocket, Phone, Mail, MapPin,
  Brain, Cpu, Shield, Zap, Star, Users, TrendingUp
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    services: [
      { name: 'AI Consciousness Simulation', href: '/ai-consciousness-simulation', description: 'Simulate human consciousness with AI' },
      { name: 'AI Time Series Prediction', href: '/ai-time-series-prediction', description: '99.9% accurate future predictions' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform', description: 'Understand human emotions with AI' },
      { name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform', description: 'Unify text, image, audio, and video' }
    ]
  },
  {
    title: 'Quantum Computing',
    icon: Cpu,
    services: [
      { name: 'Quantum AI Hybrid Computing', href: '/ai-quantum-hybrid-computing', description: 'AI and quantum computing combined' },
      { name: 'Quantum Internet Infrastructure', href: '/quantum-internet-infrastructure', description: 'Ultra-secure quantum internet' },
      { name: 'Quantum Brain Interface', href: '/quantum-ai-brain-interface', description: 'Direct brain-computer communication' },
      { name: 'Quantum Space Mining', href: '/quantum-space-mining-platform', description: 'Mine asteroids with quantum precision' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: Shield,
    services: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture', description: 'Advanced network security' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed computing management' },
      { name: '5G Private Networks', href: '/5g-private-network-solutions', description: 'High-speed private networks' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Secure blockchain solutions' }
    ]
  },
  {
    title: 'Innovative SaaS',
    icon: Zap,
    services: [
      { name: 'AI Autonomous Business', href: '/ai-autonomous-business-platform', description: 'Run your business with AI' },
      { name: 'AI Creative Studio', href: '/ai-creative-studio-platform', description: 'Unlimited AI-powered creativity' },
      { name: 'AI Healthcare Companion', href: '/ai-healthcare-companion', description: 'Personalized healthcare AI' },
      { name: 'Quantum Logistics Platform', href: '/quantum-logistics-platform', description: 'Optimize supply chains with quantum' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: '2026 Services', href: '/2026-services-showcase' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' }
];

export default function UltraAdvancedNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-gray-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-cyan-300">
                <Phone className="w-3 h-3" />
                <span className="hidden sm:inline">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-300">
                <Mail className="w-3 h-3" />
                <span className="hidden sm:inline">{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-green-300 text-xs">
                <Star className="w-3 h-3" />
                <span>1000+ Services</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-300 text-xs">
                <TrendingUp className="w-3 h-3" />
                <span>1000% ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2">
                <span className="font-medium">Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Mega Menu */}
              <div className="absolute top-full left-0 w-screen max-w-6xl bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-x-1/2 translate-y-2">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8">
                  {serviceCategories.map((category, index) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {category.services.map((service) => (
                          <li key={service.name}>
                            <Link
                              href={service.href}
                              className="block p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 group"
                            >
                              <div className="text-sm font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-400 mt-1">
                                {service.description}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA Section */}
                <div className="border-t border-gray-700/50 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-b-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold text-white mb-2">Ready to Transform Your Business?</div>
                      <div className="text-sm text-gray-400">Explore 1000+ revolutionary services</div>
                    </div>
                    <Link
                      href="/services"
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Navigation Links */}
            {companyLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href="/pricing"
                className="px-6 py-3 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Services Accordion */}
              <div className="space-y-4">
                <div className="text-lg font-semibold text-white mb-4">Services</div>
                {serviceCategories.map((category) => (
                  <div key={category.title} className="border border-gray-700/50 rounded-lg">
                    <button
                      onClick={() => toggleDropdown(category.title)}
                      className="w-full flex items-center justify-between p-4 text-left text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <category.icon className="w-5 h-5 text-cyan-400" />
                        <span className="font-medium">{category.title}</span>
                      </div>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === category.title ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === category.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-700/50 bg-gray-800/30"
                        >
                          <div className="p-4 space-y-3">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                onClick={closeMenu}
                                className="block p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                              >
                                <div className="text-sm font-medium text-gray-200">
                                  {service.name}
                                </div>
                                <div className="text-xs text-gray-400 mt-1">
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Company Links */}
              <div className="space-y-4">
                <div className="text-lg font-semibold text-white mb-4">Company</div>
                <div className="grid grid-cols-2 gap-4">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 pt-6 border-t border-gray-700/50">
                <Link
                  href="/pricing"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  View Pricing
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
                >
                  Get Started Today
                </Link>
              </div>

              {/* Contact Info */}
              <div className="pt-6 border-t border-gray-700/50">
                <div className="text-sm text-gray-400 mb-3">Contact Information:</div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
