import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, Zap, Globe, Lock, 
  Phone, Mail, MapPin, ArrowRight, Star, Users, Award,
  Brain, Atom, Rocket, Shield, Cpu, Database, Cloud,
  BarChart3, Palette, Code, Smartphone, Monitor, Server
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
        label: 'IT Infrastructure',
        href: '/it-services',
        icon: <Server className="w-4 h-4" />,
        description: 'Enterprise IT solutions',
        badge: 'Popular'
      },
      {
        label: 'Micro SAAS',
        href: '/micro-saas',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative micro services',
        badge: 'Trending'
      },
      {
        label: 'Space Technology',
        href: '/space-tech',
        icon: <Globe className="w-4 h-4" />,
        description: 'Innovative space solutions',
        badge: 'Future'
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise security solutions',
        badge: 'Critical'
      },
      {
        label: 'Cloud Solutions',
        href: '/cloud-platform',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud infrastructure',
        badge: 'Scalable'
      },
      {
        label: 'Data Analytics',
        href: '/data-analytics',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Business intelligence & analytics',
        badge: 'Insights'
      },
      {
        label: 'DevOps & Automation',
        href: '/devops-automation',
        icon: <Code className="w-4 h-4" />,
        description: 'Development & operations automation',
        badge: 'Efficient'
      },
      {
        label: 'Mobile & Web',
        href: '/mobile-web-solutions',
        icon: <Smartphone className="w-4 h-4" />,
        description: 'Digital experience solutions',
        badge: 'Modern'
      },
      {
        label: 'Innovative 2040 Services',
        href: '/innovative-2040-futuristic-services-showcase',
        icon: <Star className="w-4 h-4" />,
        description: 'Cutting-edge futuristic technology solutions',
        badge: 'Revolutionary'
      },
      {
        label: 'View All Services',
        href: '/services',
        icon: <ArrowRight className="w-4 h-4" />,
        description: 'Complete service portfolio',
        badge: 'Complete'
      }
    ]
  },
  {
    label: 'Solutions',
    children: [
      {
        label: 'Enterprise Solutions',
        href: '/enterprise-solutions',
        icon: <Database className="w-4 h-4" />,
        description: 'Large-scale enterprise solutions'
      },
      {
        label: 'Startup Solutions',
        href: '/startup-solutions',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Scalable startup solutions'
      },
      {
        label: 'Government Solutions',
        href: '/government-solutions',
        icon: <Shield className="w-4 h-4" />,
        description: 'Secure government technology'
      },
      {
        label: 'Healthcare Solutions',
        href: '/healthcare-solutions',
        icon: <Brain className="w-4 h-4" />,
        description: 'AI-powered healthcare technology'
      },
      {
        label: 'Financial Solutions',
        href: '/financial-solutions',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Fintech and financial services'
      }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: <Users className="w-4 h-4" />
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Blog',
        href: '/blog',
        icon: <Code className="w-4 h-4" />,
        description: 'Latest insights and updates'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Success stories and results'
      },
      {
        label: 'Documentation',
        href: '/docs',
        icon: <Database className="w-4 h-4" />,
        description: 'Technical documentation'
      },
      {
        label: 'Training',
        href: '/training',
        icon: <Brain className="w-4 h-4" />,
        description: 'Professional development'
      }
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const UltraFuturisticNavigation2040: React.FC = () => {
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

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle dropdown toggle
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20' 
        : 'bg-black/80 backdrop-blur-lg'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-cyan-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center space-x-4 text-cyan-400">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-cyan-300 transition-colors">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-1 hover:text-cyan-300 transition-colors">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                {contactInfo.website.replace('https://', '')}
              </a>
              <div className="flex items-center space-x-2">
                <Star className="w-3 h-3 text-yellow-400" />
                <span className="text-yellow-400">Innovation Leader 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">Revolutionary Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link 
                    href={item.href}
                    className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-lg shadow-2xl shadow-cyan-500/10 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href || '#'}
                                className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-cyan-400/30">
                                    {child.icon}
                                  </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <p className="text-sm font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
                                      {child.label}
                                    </p>
                                    {child.badge && (
                                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-400/30">
                                        {child.badge}
                                      </span>
                                    )}
                                  </div>
                                  {child.description && (
                                    <p className="text-xs text-gray-400 mt-1">
                                      {child.description}
                                    </p>
                                  )}
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
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
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-lg shadow-2xl shadow-cyan-500/10 p-4"
                  >
                    <form onSubmit={handleSearch}>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search services, solutions..."
                          className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                        />
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link href="/get-started">
              <button className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden"
            ref={mobileMenuRef}
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {item.children && activeDropdown === item.label && (
                        <div className="ml-6 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href || '#'}
                              className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:text-cyan-400 transition-colors rounded-lg"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.icon}
                              <span className="text-sm">{child.label}</span>
                              {child.badge && (
                                <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-400/30">
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
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cyan-500/20">
                <Link href="/get-started" className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
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

export default UltraFuturisticNavigation2040;