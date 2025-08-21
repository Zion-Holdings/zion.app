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
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' }
];

export default function UltraAdvancedNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Enhanced Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border-b border-gray-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{contactInfo.mobile}</span>
                <span className="sm:hidden">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">{contactInfo.email}</span>
                <span className="sm:hidden">kleber@ziontechgroup.com</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2 text-green-300 hover:text-green-200 transition-colors">
                <MapPin className="w-4 h-4" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="/contact" 
                className="hidden sm:inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400 -mt-1">Revolutionary Technology</div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {serviceCategories.map((category) => (
              <div key={category.title} className="relative group">
                <button
                  onClick={() => toggleDropdown(category.title)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group-hover:text-cyan-300"
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.title}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === category.title ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Enhanced Dropdown */}
                <AnimatePresence>
                  {(activeDropdown === category.title || isHovering) && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden z-50"
                    >
                      <div className="p-4">
                        <div className="text-sm font-semibold text-cyan-400 mb-3 border-b border-gray-700/50 pb-2">
                          {category.title}
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-800/60 transition-all duration-300 group/item"
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 group-hover/item:scale-150 transition-transform duration-300" />
                              <div className="flex-1">
                                <div className="text-white font-medium group-hover/item:text-cyan-300 transition-colors duration-300">
                                  {service.name}
                                </div>
                                <div className="text-gray-400 text-sm mt-1">
                                  {service.description}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Enhanced Company Links */}
            <div className="flex items-center space-x-6">
              {companyLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:text-cyan-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex items-center space-x-4">
              <a
                href="/pricing"
                className="text-gray-300 hover:text-white transition-colors duration-300 hover:text-purple-300"
              >
                Pricing
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gray-800/60 border border-gray-700/50 hover:bg-gray-700/60 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Service Categories */}
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <div className="text-lg font-semibold text-cyan-400 mb-3 flex items-center space-x-2">
                    <category.icon className="w-5 h-5" />
                    <span>{category.title}</span>
                  </div>
                  <div className="space-y-2 ml-6">
                    {category.services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        onClick={closeMenu}
                        className="block p-3 rounded-lg hover:bg-gray-800/60 transition-colors duration-300"
                      >
                        <div className="text-white font-medium">{service.name}</div>
                        <div className="text-gray-400 text-sm mt-1">{service.description}</div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile Company Links */}
              <div className="pt-4 border-t border-gray-700/50">
                <div className="text-lg font-semibold text-purple-400 mb-3">Company</div>
                <div className="grid grid-cols-2 gap-4">
                  {companyLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:text-purple-300"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700/50">
                <a
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
