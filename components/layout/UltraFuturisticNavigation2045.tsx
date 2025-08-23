import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, Zap, Globe, Lock, 
  Phone, Mail, MapPin, ArrowRight, Star, Users, Award,
  Brain, Rocket, Shield, Cpu, Database, Cloud, Palette,
  Sparkles, Target, BarChart3, Lightbulb, Code, Server,
  Network, ShieldCheck, BrainCircuit, Atom, Satellite
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
  icon?: React.ReactNode;
  description?: string;
  badge?: string;
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Zap className="w-4 h-4" />
  },
  {
    label: 'Services',
    children: [
      {
        label: 'AI & Machine Learning',
        href: '/ai-services',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        badge: 'Hot'
      },
      {
        label: 'Quantum Computing',
        href: '/quantum-computing',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        badge: 'New'
      },
      {
        label: 'Space Technology',
        href: '/space-tech',
        icon: <Satellite className="w-4 h-4" />,
        description: 'Innovative space solutions',
        badge: 'Trending'
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise security solutions',
        badge: 'Popular'
      },
      {
        label: 'Cloud Solutions',
        href: '/cloud-platform',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud infrastructure',
        badge: 'Featured'
      },
      {
        label: 'Micro SAAS',
        href: '/micro-saas',
        icon: <Code className="w-4 h-4" />,
        description: 'Specialized business solutions',
        badge: 'Growing'
      },
      {
        label: 'Innovative 2045 Services',
        href: '/innovative-2045-futuristic-services-showcase',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Cutting-edge futuristic technology solutions',
        badge: 'Revolutionary'
      },
      {
        label: 'View All Services',
        href: '/services',
        icon: <ArrowRight className="w-4 h-4" />,
        description: 'Complete service portfolio'
      }
    ]
  },
  {
    label: 'Solutions',
    children: [
      {
        label: 'Enterprise Solutions',
        href: '/enterprise-solutions',
        icon: <Server className="w-4 h-4" />,
        description: 'Large-scale enterprise solutions'
      },
      {
        label: 'Startup Solutions',
        href: '/startup-solutions',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Solutions for growing startups'
      },
      {
        label: 'Government Solutions',
        href: '/government-solutions',
        icon: <ShieldCheck className="w-4 h-4" />,
        description: 'Secure government solutions'
      },
      {
        label: 'Healthcare Solutions',
        href: '/healthcare-solutions',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced healthcare technology'
      }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: <Users className="w-4 h-4" />
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />
  }
];

const UltraFuturisticNavigation2045: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle click outside search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-500/10' 
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
              <Link href="/" className="flex items-center space-x-3 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </motion.div>
                <div className="hidden sm:block">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Group 2045</div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div key={item.label} className="relative group">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href || '#'}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-500/10 transition-all duration-300"
                                >
                                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {child.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                        {child.label}
                                      </span>
                                      {child.badge && (
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-400/20 to-pink-500/20 text-purple-300 border border-purple-400/30">
                                          {child.badge}
                                        </span>
                                      )}
                                    </div>
                                    {child.description && (
                                      <p className="text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                                        {child.description}
                                      </p>
                                    )}
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
              >
                <Search className="w-5 h-5" />
              </motion.button>

              {/* Contact Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              ref={searchRef}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4"
            >
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for innovative services, AI solutions, quantum computing..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-12 py-4 bg-gray-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 shadow-2xl shadow-cyan-500/20"
                  />
                  <button
                    type="submit"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-400/20 shadow-2xl shadow-cyan-500/20"
            >
              <div className="p-6">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">Zion Tech</div>
                      <div className="text-xs text-gray-400">Group 2045</div>
                    </div>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.label}>
                      {item.href ? (
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </Link>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between px-4 py-3 text-gray-300">
                            <div className="flex items-center space-x-3">
                              {item.icon}
                              <span>{item.label}</span>
                            </div>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                          {item.children && (
                            <div className="pl-8 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href || '#'}
                                  onClick={closeMobileMenu}
                                  className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
                                >
                                  {child.icon}
                                  <span className="text-sm">{child.label}</span>
                                  {child.badge && (
                                    <span className="ml-auto inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-400/20 to-pink-500/20 text-purple-300">
                                      {child.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-start space-x-3 text-gray-300">
                      <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                      <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraFuturisticNavigation2045;