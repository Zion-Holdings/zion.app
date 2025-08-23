import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Rocket, Shield, Atom, Globe, BookOpen, Building, ChevronDown, Menu, X, Star } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  description: string;
  badge?: string;
  featured?: boolean;
  category: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    featured: true,
    category: 'AI',
    children: [
      {
        name: 'AI Consciousness Evolution 2029',
        href: '/ai-consciousness-evolution-2029',
        icon: <Brain className="w-4 h-4" />,
        description: 'Breakthrough AI consciousness platform',
        category: 'AI'
      },
      {
        name: 'AI Emotional Intelligence Training',
        href: '/ai-emotional-intelligence-training',
        icon: <Brain className="w-4 h-4" />,
        description: 'Train AI systems to understand emotions',
        category: 'AI'
      },
      {
        name: 'AI Autonomous Research Assistant',
        href: '/ai-autonomous-research-assistant',
        icon: <Brain className="w-4 h-4" />,
        description: 'Fully autonomous AI research agent',
        category: 'AI'
      },
      {
        name: 'AI Predictive Maintenance',
        href: '/ai-predictive-maintenance-platform',
        icon: <Brain className="w-4 h-4" />,
        description: 'Predict equipment failures with AI',
        category: 'AI'
      }
    ]
  },
  {
    name: 'Enterprise IT Solutions',
    href: '/it-services',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure solutions',
    badge: 'Enterprise',
    category: 'IT',
    children: [
      {
        name: 'Enterprise Cybersecurity Suite 2029',
        href: '/enterprise-cybersecurity-suite-2029',
        icon: <Shield className="w-4 h-4" />,
        description: 'Next-generation enterprise cybersecurity',
        category: 'IT'
      },
      {
        name: 'Cloud Infrastructure Automation',
        href: '/cloud-infrastructure-automation',
        icon: <Shield className="w-4 h-4" />,
        description: 'Automate cloud infrastructure management',
        category: 'IT'
      },
      {
        name: 'Data Center Optimization',
        href: '/data-center-optimization-suite',
        icon: <Shield className="w-4 h-4" />,
        description: 'Optimize data center performance with AI',
        category: 'IT'
      },
      {
        name: 'Network Performance Monitoring',
        href: '/network-performance-monitoring',
        icon: <Shield className="w-4 h-4" />,
        description: 'Monitor and optimize network performance',
        category: 'IT'
      }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Business',
    category: 'SAAS',
    children: [
      {
        name: 'AI-Powered CRM Automation',
        href: '/ai-powered-crm-automation',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Automate your CRM with intelligent AI workflows',
        category: 'SAAS'
      },
      {
        name: 'Smart Inventory Management',
        href: '/smart-inventory-management',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Optimize inventory with AI-powered forecasting',
        category: 'SAAS'
      },
      {
        name: 'Automated Accounting Platform',
        href: '/automated-accounting-platform',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Streamline accounting with intelligent automation',
        category: 'SAAS'
      },
      {
        name: 'Intelligent Project Management',
        href: '/intelligent-project-management',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Manage projects with AI-powered insights',
        category: 'SAAS'
      }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Cutting-edge quantum and emerging technologies',
    badge: 'Future',
    category: 'Quantum',
    children: [
      {
        name: 'Quantum Cybersecurity',
        href: '/quantum-cybersecurity-services',
        icon: <Atom className="w-4 h-4" />,
        description: 'Quantum-resistant security solutions',
        category: 'Quantum'
      },
      {
        name: 'Quantum AI Fusion',
        href: '/quantum-ai-fusion',
        icon: <Atom className="w-4 h-4" />,
        description: 'Quantum AI hybrid computing platform',
        category: 'Quantum'
      },
      {
        name: 'Space Technology',
        href: '/space-technology',
        icon: <Atom className="w-4 h-4" />,
        description: 'Advanced space technology solutions',
        category: 'Quantum'
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge base and learning resources',
    category: 'Resources',
    children: [
      {
        name: 'Blog',
        href: '/blog',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'Latest insights and industry trends',
        category: 'Resources'
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'Real-world implementation success stories',
        category: 'Resources'
      },
      {
        name: 'Documentation',
        href: '/docs',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'Technical documentation and guides',
        category: 'Resources'
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'Learn about Zion Tech Group',
    category: 'Company',
    children: [
      {
        name: 'About Us',
        href: '/about',
        icon: <Building className="w-4 h-4" />,
        description: 'Our mission and vision',
        category: 'Company'
      },
      {
        name: 'Careers',
        href: '/careers',
        icon: <Building className="w-4 h-4" />,
        description: 'Join our team',
        category: 'Company'
      },
      {
        name: 'Contact',
        href: '/contact',
        icon: <Building className="w-4 h-4" />,
        description: 'Get in touch with us',
        category: 'Company'
      }
    ]
  }
];

// Normalize href to ensure proper routing
const normalizeHref = (href: string) => {
  if (href.startsWith('http')) return href;
  return href.startsWith('/') ? href : `/${href}`;
};

interface UltraFuturisticNavigation2037Props {
  onMenuToggle?: () => void;
  'aria-expanded'?: boolean;
}

export default function UltraFuturisticNavigation2037({ 
  onMenuToggle, 
  'aria-expanded': ariaExpanded 
}: UltraFuturisticNavigation2037Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onMenuToggle?.();
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              onClick={closeAllDropdowns}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <p className="text-xs text-gray-400">Future Technology Solutions</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup="true"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl z-50"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby={`${item.name}-button`}
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        
                        {item.children && (
                          <div className="space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={normalizeHref(child.href)}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                                onClick={closeAllDropdowns}
                                role="menuitem"
                              >
                                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                                  {child.icon}
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-200">
                                    {child.name}
                                  </div>
                                  <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                                    {child.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                        
                        {item.featured && (
                          <div className="mt-4 pt-4 border-t border-cyan-500/20">
                            <Link
                              href={normalizeHref(item.href)}
                              className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                              onClick={closeAllDropdowns}
                            >
                              <Star className="w-4 h-4" />
                              <span>Explore {item.name}</span>
                            </Link>
                          </div>
                        )}
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
              href="/contact"
              className="px-4 py-2 text-cyan-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/get-started"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-expanded={ariaExpanded}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
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
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.name && item.children && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-8 space-y-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                            onClick={closeAllDropdowns}
                          >
                            {child.icon}
                            <span className="text-sm">{child.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 text-center text-cyan-400 hover:text-white transition-colors duration-200"
                  onClick={closeAllDropdowns}
                >
                  Contact Us
                </Link>
                <Link
                  href="/get-started"
                  className="block w-full px-4 py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  onClick={closeAllDropdowns}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeAllDropdowns}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}