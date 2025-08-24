import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, Zap, Globe, Lock, 
  Phone, Mail, MapPin, ArrowRight, Star, Users, Award,
  Brain, Atom, Rocket, Shield, Cpu, Database, Cloud,
  Palette, Heart, Target, Sparkles, Eye, TrendingUp
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
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space solutions',
        badge: 'Future'
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise security solutions',
        badge: 'Secure'
      },
      {
        label: 'Cloud Solutions',
        href: '/cloud-platform',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud infrastructure',
        badge: 'Scalable'
      },
      {
        label: 'DevOps & Infrastructure',
        href: '/devops-infrastructure',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Modern DevOps practices',
        badge: 'Fast'
      },
      {
        label: 'Data & Analytics',
        href: '/data-analytics',
        icon: <Database className="w-4 h-4" />,
        description: 'Data-driven insights',
        badge: 'Smart'
      },
      {
        label: 'Innovative 2025 Services',
        href: '/innovative-2025-services-showcase',
        icon: <Sparkles className="w-4 h-4" />,
        description: 'Cutting-edge 2025 technology solutions',
        badge: '2025'
      },
      {
        label: 'Innovative 2040 Services',
        href: '/innovative-2040-futuristic-services-showcase',
        icon: <Eye className="w-4 h-4" />,
        description: 'Futuristic 2040 technology solutions',
        badge: '2040'
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
        icon: <Users className="w-4 h-4" />,
        description: 'Large-scale enterprise implementations'
      },
      {
        label: 'SMB Solutions',
        href: '/smb-solutions',
        icon: <Target className="w-4 h-4" />,
        description: 'Small and medium business solutions'
      },
      {
        label: 'Industry Solutions',
        href: '/industry-solutions',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Industry-specific technology solutions'
      },
      {
        label: 'Custom Development',
        href: '/custom-development',
        icon: <Palette className="w-4 h-4" />,
        description: 'Tailored solutions for your needs'
      }
    ]
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Documentation',
        href: '/docs',
        icon: <Database className="w-4 h-4" />,
        description: 'Technical documentation and guides'
      },
      {
        label: 'Blog & Insights',
        href: '/blog',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Latest insights and industry trends'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <Star className="w-4 h-4" />,
        description: 'Success stories and implementations'
      },
      {
        label: 'White Papers',
        href: '/white-papers',
        icon: <Eye className="w-4 h-4" />,
        description: 'In-depth research and analysis'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Globe className="w-4 h-4" />,
        description: 'Educational webinars and training'
      }
    ]
  },
  {
    label: 'Company',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />,
        description: 'Learn about our mission and team'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Heart className="w-4 h-4" />,
        description: 'Join our innovative team'
      },
      {
        label: 'Partners',
        href: '/partners',
        icon: <Star className="w-4 h-4" />,
        description: 'Strategic partnerships and alliances'
      },
      {
        label: 'News & Updates',
        href: '/news',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Company news and announcements'
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: <Phone className="w-4 h-4" />,
        description: 'Get in touch with our team'
      }
    ]
  }
];

const UltraFuturisticNavigation2025: React.FC = () => {
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

  // Handle search
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
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-2xl shadow-black/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </span>
                <div className="text-xs text-gray-400">Future Technology Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-gray-800/50"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-gray-800/50"
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
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href || '#'}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                              >
                                <div className="flex-shrink-0 w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-all duration-300">
                                  {child.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                      {child.label}
                                    </p>
                                    {child.badge && (
                                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-400 to-blue-500 text-white">
                                        {child.badge}
                                      </span>
                                    )}
                                  </div>
                                  {child.description && (
                                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                                      {child.description}
                                    </p>
                                  )}
                                </div>
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

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-gray-800/50"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 p-4"
                  >
                    <form onSubmit={handleSearch} className="space-y-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          ref={searchInputRef}
                          type="text"
                          placeholder="Search services, solutions..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                      >
                        Search
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-gray-800/50"
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

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50"
            ref={mobileMenuRef}
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-gray-800/50"
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between px-4 py-3 text-gray-300 font-medium">
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
                                className="block px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-gray-800/50"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Contact Button */}
              <div className="pt-4 border-t border-gray-800/50">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2025;