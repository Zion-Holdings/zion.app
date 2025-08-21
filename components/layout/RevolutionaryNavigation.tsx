import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, User, 
  Brain, Zap, Shield, Rocket, Globe,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

const RevolutionaryNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        {
          name: 'AI Services',
          href: '/ai-services',
          icon: <Brain className="w-4 h-4" />,
          description: 'Advanced AI solutions for business'
        },
        {
          name: 'IT Services',
          href: '/it-services',
          icon: <Zap className="w-4 h-4" />,
          description: 'Enterprise IT infrastructure'
        },
        {
          name: 'Quantum Computing',
          href: '/quantum-ai-cognitive',
          icon: <Shield className="w-4 h-4" />,
          description: 'Next-generation quantum solutions'
        },
        {
          name: 'Micro SaaS',
          href: '/micro-saas',
          icon: <Rocket className="w-4 h-4" />,
          description: 'Specialized business applications'
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        {
          name: 'Manufacturing',
          href: '/autonomous-manufacturing',
          icon: <Zap className="w-4 h-4" />,
          description: 'AI-powered manufacturing automation'
        },
        {
          name: 'Finance',
          href: '/quantum-blockchain',
          icon: <Shield className="w-4 h-4" />,
          description: 'Quantum blockchain financial solutions'
        },
        {
          name: 'Healthcare',
          href: '/biotech-ai',
          icon: <Brain className="w-4 h-4" />,
          description: 'AI biotech research platform'
        },
        {
          name: 'Space Tech',
          href: '/space-technology',
          icon: <Rocket className="w-4 h-4" />,
          description: 'AI space technology solutions'
        }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      dropdown: [
        {
          name: 'About Us',
          href: '/about',
          icon: <User className="w-4 h-4" />,
          description: 'Learn about our mission'
        },
        {
          name: 'Careers',
          href: '/careers',
          icon: <Zap className="w-4 h-4" />,
          description: 'Join our revolutionary team'
        },
        {
          name: 'Contact',
          href: '/contact',
          icon: <Mail className="w-4 h-4" />,
          description: 'Get in touch with us'
        }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: [
        {
          name: 'Documentation',
          href: '/docs',
          icon: <Globe className="w-4 h-4" />,
          description: 'Technical documentation'
        },
        {
          name: 'Blog',
          href: '/blog',
          icon: <Brain className="w-4 h-4" />,
          description: 'Latest insights and updates'
        },
        {
          name: 'Case Studies',
          href: '/case-studies',
          icon: <Rocket className="w-4 h-4" />,
          description: 'Success stories and results'
        }
      ]
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                >
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        {item.dropdown?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                          >
                            <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                              {dropdownItem.icon}
                            </div>
                            <div>
                              <div className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-200">
                                {dropdownItem.name}
                              </div>
                              <div className="text-gray-400 text-sm">
                                {dropdownItem.description}
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

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-4 text-sm"
            >
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-gray-300 hover:text-white py-2 text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-gray-400 hover:text-white py-1 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default RevolutionaryNavigation;