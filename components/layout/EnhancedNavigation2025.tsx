import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Globe, Brain, Atom, Shield, Rocket,
  Phone, Mail, MapPin, Star, Award, Users, TrendingUp, Zap
} from 'lucide-react';

const navigationItems = [
  {
    name: 'Services',
    href: '/services',
    icon: Globe,
    submenu: [
      {
        name: 'AI & Consciousness',
        href: '/services/ai-consciousness',
        icon: Brain,
        description: 'Advanced AI solutions for business transformation',
        services: ['AI Content Factory Pro', 'AI Healthcare Diagnostics', 'AI Legal Contract Analyzer']
      },
      {
        name: 'Quantum & Emerging Tech',
        href: '/services/quantum-emerging-tech',
        icon: Atom,
        description: 'Next-generation quantum computing solutions',
        services: ['Quantum Financial Trading', 'Quantum Logistics', 'Space Technology AI']
      },
      {
        name: 'Enterprise IT',
        href: '/services/enterprise-it',
        icon: Shield,
        description: 'Enterprise-grade IT infrastructure and security',
        services: ['Cyber Threat Intelligence', 'Quantum Data Analytics', 'Autonomous DevOps']
      },
      {
        name: 'Micro SAAS',
        href: '/services/micro-saas',
        icon: Rocket,
        description: 'Innovative micro SAAS solutions',
        services: ['AI Project Management', 'Smart Inventory', 'Intelligent Customer Support']
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Zap,
    submenu: [
      {
        name: 'Industry Solutions',
        href: '/solutions/industries',
        description: 'Tailored solutions for specific industries'
      },
      {
        name: 'Technology Stack',
        href: '/solutions/tech-stack',
        description: 'Modern technology architecture and tools'
      },
      {
        name: 'Integration Services',
        href: '/solutions/integrations',
        description: 'Seamless integration with existing systems'
      }
    ]
  },
  {
    name: 'Company',
    href: '/company',
    icon: Users,
    submenu: [
      {
        name: 'About Us',
        href: '/company/about',
        description: 'Learn about our mission and values'
      },
      {
        name: 'Leadership',
        href: '/company/leadership',
        description: 'Meet our executive team'
      },
      {
        name: 'Careers',
        href: '/company/careers',
        description: 'Join our innovative team'
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: TrendingUp,
    submenu: [
      {
        name: 'Blog',
        href: '/blog',
        description: 'Latest insights and industry trends'
      },
      {
        name: 'Case Studies',
        href: '/resources/case-studies',
        description: 'Success stories from our clients'
      },
      {
        name: 'Documentation',
        href: '/resources/docs',
        description: 'Technical documentation and guides'
      }
    ]
  }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

export default function EnhancedNavigation2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
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

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900 to-purple-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-300" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-300" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-300" />
              <span className="text-xs">{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
                <p className="text-xs text-gray-400">Innovation • Intelligence • Impact</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeSubmenu === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Submenu */}
                  <AnimatePresence>
                    {activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-6">
                          {item.submenu?.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              onClick={() => setActiveSubmenu(null)}
                              className="group block p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-200 mb-2 last:mb-0"
                            >
                              <div className="flex items-start space-x-3">
                                {subitem.icon && (
                                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-200">
                                    <subitem.icon className="w-5 h-5 text-cyan-400" />
                                  </div>
                                )}
                                <div className="flex-1">
                                  <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                                    {subitem.name}
                                  </h3>
                                  <p className="text-sm text-gray-400 mt-1">
                                    {subitem.description}
                                  </p>
                                  {subitem.services && (
                                    <div className="mt-2 flex flex-wrap gap-1">
                                      {subitem.services.slice(0, 2).map((service) => (
                                        <span
                                          key={service}
                                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                                        >
                                          {service}
                                        </span>
                                      ))}
                                      {subitem.services.length > 2 && (
                                        <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">
                                          +{subitem.services.length - 2} more
                                        </span>
                                      )}
                                    </div>
                                  )}
                                </div>
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

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/pricing"
                className="px-6 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeMenu}
            />
            
            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 overflow-y-auto">
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-6">
                  <button
                    onClick={closeMenu}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5 text-cyan-400" />
                          <span className="text-white font-medium">{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          activeSubmenu === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Mobile Submenu */}
                      <AnimatePresence>
                        {activeSubmenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-8 space-y-2"
                          >
                            {item.submenu?.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                onClick={closeMenu}
                                className="block p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                              >
                                <h4 className="text-white font-medium">{subitem.name}</h4>
                                <p className="text-sm text-gray-400 mt-1">{subitem.description}</p>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 space-y-4">
                  <Link
                    href="/pricing"
                    onClick={closeMenu}
                    className="block w-full text-center px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-200"
                  >
                    View Pricing
                  </Link>
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className="flex items-start space-x-3 text-gray-400">
                      <MapPin className="w-4 h-4 text-green-400 mt-0.5" />
                      <span className="text-xs">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
}