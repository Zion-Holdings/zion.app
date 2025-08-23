import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  MessageCircle,
  Calculator,
  Play,
  Globe,
  Rocket,
  Brain,
  Atom,
  Shield,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import EnhancedSearch from '../EnhancedSearch';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;
  category?: string;
}

function normalizeHref(href: string): string {
  if (!href) return href;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }
  if (!href.startsWith('/')) return href;
  const hasQueryOrHash = href.includes('?') || href.includes('#');
  if (hasQueryOrHash) return href;
  return href.endsWith('/') ? href : href + '/';
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Services',
    href: '/services',
    icon: <Play className="w-5 h-5" />,
    description: 'Complete technology solutions',
    badge: 'Main',
    category: 'services',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Calculator className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI & Machine Learning', 
        href: '/ai-services', 
        description: 'Advanced AI solutions',
        icon: <Brain className="w-4 h-4" />
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <Atom className="w-4 h-4" />
      },
      { 
        name: 'Space Technology', 
        href: '/space-technology', 
        description: 'Space exploration solutions',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'IT Solutions', 
        href: '/it-services', 
        description: 'Enterprise IT infrastructure',
        icon: <Shield className="w-4 h-4" />
      },
      { 
        name: 'Specialized Solutions', 
        href: '/solutions', 
        description: 'Industry-specific solutions',
        icon: <Zap className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Showcase & Pricing',
    href: '/comprehensive-services-showcase-2025',
    icon: <Star className="w-5 h-5" />,
    description: 'Services portfolio & pricing',
    badge: 'Showcase',
    category: 'showcase',
    featured: true,
    children: [
      {
        name: '2025 Services',
        href: '/comprehensive-services-showcase-2025',
        description: 'Latest service offerings',
        icon: <Star className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Pricing Plans',
        href: '/pricing',
        description: 'Flexible pricing options',
        icon: <Calculator className="w-4 h-4" />
      },
      {
        name: 'Enterprise Solutions',
        href: '/enterprise-solutions-showcase',
        description: 'Large-scale deployments',
        icon: <Globe className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Globe className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    category: 'company',
    children: [
      {
        name: 'About Us',
        href: '/about',
        description: 'Our story and mission',
        icon: <Globe className="w-4 h-4" />
      },
      {
        name: 'Leadership',
        href: '/leadership',
        description: 'Meet our team',
        icon: <Star className="w-4 h-4" />
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our team',
        icon: <MessageCircle className="w-4 h-4" />
      },
      {
        name: 'Partners',
        href: '/partners',
        description: 'Strategic partnerships',
        icon: <Shield className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <MessageCircle className="w-5 h-5" />,
    description: 'Knowledge & insights',
    category: 'resources',
    children: [
      {
        name: 'Blog',
        href: '/blog',
        description: 'Latest insights',
        icon: <MessageCircle className="w-4 h-4" />
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        description: 'Success stories',
        icon: <Star className="w-4 h-4" />
      },
      {
        name: 'White Papers',
        href: '/white-papers',
        description: 'In-depth research',
        icon: <Calculator className="w-4 h-4" />
      },
      {
        name: 'Webinars',
        href: '/webinars',
        description: 'Live events',
        icon: <Play className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Industry solutions',
    category: 'solutions',
    children: [
      {
        name: 'Healthcare',
        href: '/healthcare-solutions',
        description: 'AI-powered healthcare',
        icon: <Shield className="w-4 h-4" />
      },
      {
        name: 'Financial Services',
        href: '/financial-solutions',
        description: 'Fintech innovations',
        icon: <Calculator className="w-4 h-4" />
      },
      {
        name: 'Manufacturing',
        href: '/manufacturing-ai-solutions',
        description: 'Smart manufacturing',
        icon: <Zap className="w-4 h-4" />
      },
      {
        name: 'Government',
        href: '/government-technology-solutions',
        description: 'Public sector tech',
        icon: <Globe className="w-4 h-4" />
      }
    ]
  }
];

const UltraFuturisticNavigation2036: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Memoized animation variants for better performance
  const menuVariants = useMemo(() => ({
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 }
  }), []);

  const dropdownVariants = useMemo(() => ({
    closed: { opacity: 0, y: -10, scale: 0.95 },
    open: { opacity: 1, y: 0, scale: 1 }
  }), []);

  // Handle scroll effect with throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => setMobileMenuOpen(false);
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  // Handle dropdown interactions
  const handleDropdownToggle = useCallback((category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  }, [activeDropdown]);

  const closeAllDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // Enhanced mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      closeAllDropdowns();
    }
  }, [mobileMenuOpen, closeAllDropdowns]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        closeAllDropdowns();
        setSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeAllDropdowns]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl shadow-lg shadow-cyan-500/25"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-500/50 rounded-xl animate-pulse"></div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ZionTech Group
                </span>
                <span className="text-xs text-white/60">Future Technology Solutions</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                    onClick={() => handleDropdownToggle(item.category || '')}
                    onMouseEnter={() => setActiveDropdown(item.category || '')}
                    onMouseLeave={() => setActiveDropdown(null)}
                    aria-expanded={activeDropdown === item.category}
                    aria-haspopup="true"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.category ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Enhanced Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.category && item.children && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownVariants}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50"
                        onMouseEnter={() => setActiveDropdown(item.category || '')}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="p-4">
                          <div className="mb-4">
                            <h3 className="text-white font-semibold text-lg mb-2">{item.name}</h3>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                          <div className="space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={normalizeHref(child.href)}
                                className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200"
                                onClick={closeAllDropdowns}
                              >
                                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                  {child.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-white group-hover:text-cyan-400 transition-colors duration-200">
                                      {child.name}
                                    </span>
                                    {child.featured && (
                                      <span className="text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-gray-400 text-sm">{child.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link href="/contact">
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg"></div>
                  <span className="text-white font-bold text-lg">Menu</span>
                </div>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-white hover:text-cyan-400 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="p-4 border-b border-white/10">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Mobile Navigation Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <button
                      onClick={() => handleDropdownToggle(item.category || '')}
                      className="w-full flex items-center justify-between p-3 text-left text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.category ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.category && item.children && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-6 space-y-1"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              className="block p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                              onClick={toggleMobileMenu}
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded flex items-center justify-center">
                                  {child.icon}
                                </div>
                                <div>
                                  <div className="font-medium">{child.name}</div>
                                  <div className="text-sm text-gray-400">{child.description}</div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="p-4 border-t border-white/10 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  onClick={toggleMobileMenu}
                >
                  Get Started
                </Link>
                <div className="flex space-x-2">
                  <a
                    href="tel:+1-302-464-0950"
                    className="flex-1 flex items-center justify-center space-x-2 p-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">Call</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex-1 flex items-center justify-center space-x-2 p-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          >
            <div className="flex items-center justify-center min-h-screen p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <EnhancedSearch onClose={() => setSearchOpen(false)} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2036;