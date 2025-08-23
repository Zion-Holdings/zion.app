import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, ChevronRight, 
  Home, Briefcase, Users, BookOpen, Phone, 
  Globe, Zap, Shield, Brain, Rocket, Building,
  Target, Heart, Cpu, Cloud
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Define Node type for DOM event handling
type Node = HTMLElement | null;

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />
  },
  {
    label: 'Services',
    href: '/services',
    icon: <Briefcase className="w-4 h-4" />,
    description: 'Explore our comprehensive technology solutions',
    children: [
      {
        label: 'AI & Machine Learning',
        href: '/services?category=ai-ml',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise'
      },
      {
        label: 'Quantum Computing',
        href: '/services?category=quantum',
        icon: <Zap className="w-4 h-4" />,
        description: 'Next-generation quantum solutions'
      },
      {
        label: 'Space Technology',
        href: '/services?category=space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications'
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise-grade security solutions'
      },
      {
        label: 'Enterprise IT',
        href: '/services?category=enterprise-it',
        icon: <Building className="w-4 h-4" />,
        description: 'Enterprise infrastructure solutions'
      },
      {
        label: 'Micro SAAS',
        href: '/services?category=micro-saas',
        icon: <Target className="w-4 h-4" />,
        description: 'Innovative business solutions'
      },
      {
        label: 'DevOps & Automation',
        href: '/services?category=devops',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Development and operations automation'
      },
      {
        label: 'Cloud & Infrastructure',
        href: '/services?category=cloud',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Cloud computing and infrastructure'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific technology solutions',
    children: [
      {
        label: 'Healthcare & Biotech',
        href: '/solutions/healthcare',
        icon: <Heart className="w-4 h-4" />,
        description: 'Advanced healthcare solutions'
      },
      {
        label: 'Financial Services',
        href: '/solutions/financial',
        icon: <Zap className="w-4 h-4" />,
        description: 'Quantum financial technology'
      },
      {
        label: 'Manufacturing',
        href: '/solutions/manufacturing',
        icon: <Building className="w-4 h-4" />,
        description: 'Industry 4.0 solutions'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge base and documentation',
    children: [
      {
        label: 'Documentation',
        href: '/docs',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'Technical documentation'
      },
      {
        label: 'Blog',
        href: '/blog',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'Latest insights and updates'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'Success stories and implementations'
      }
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />,
    description: 'Get in touch with our team'
  }
];

const UltraAdvancedFuturisticNavigation2025: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Memoized scroll handler for better performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
      setIsSearchOpen(false);
    }
  }, []);

  // Handle click outside to close dropdowns
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setIsSearchOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleScroll, handleKeyDown, handleClickOutside]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [router.asPath]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navigationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" as const }
    }
  };

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        className={`bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30 transition-all duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-90'
        }`}
        initial="hidden"
        animate="visible"
        variants={navigationVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                <a href="tel:+1 302 464 0950" className="hover:text-cyan-400 transition-colors duration-200">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-200">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="hover:text-cyan-400 transition-colors duration-200">
                  364 E Main St STE 1008 Middletown DE 19709
                </span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cyan-400" aria-hidden="true">
                  <path d="M12 6v6l4 2"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span>Mon-Fri: 9AM-6PM EST</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true">
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
                <span>4.9/5 (200+ Reviews)</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2">
                <Link href="/contact" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                  </svg>
                  <span>Get Quote</span>
                </Link>
                <Link href="/demo" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span>Book Demo</span>
                </Link>
                <Link href="/support" className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                  </svg>
                  <span>Live Chat</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <nav 
        aria-label="Primary navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
              aria-label="Zion Tech Group - Home"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg"
                      onClick={() => toggleDropdown(item.label)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleDropdown(item.label);
                        }
                      }}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                      aria-label={`${item.label} menu`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg"
                      aria-label={item.description || item.label}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 z-50"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <div className="p-4">
                            <div className="mb-4">
                              <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
                              <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                            <div className="space-y-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                                  aria-label={child.description || child.label}
                                >
                                  <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                                    {child.icon}
                                  </div>
                                  <div>
                                    <div className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                      {child.label}
                                    </div>
                                    {child.description && (
                                      <div className="text-sm text-gray-400">{child.description}</div>
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

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search */}
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg"
                  aria-label="Open search"
                >
                  <Search className="w-5 h-5" />
                </button>
                
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      className="absolute top-full right-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 z-50"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <form onSubmit={handleSearch} className="p-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search services..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500"
                            aria-label="Search services"
                          />
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Buttons */}
              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Get started with Zion Tech Group"
              >
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="pt-24 pb-6 px-4 h-full overflow-y-auto">
              <div className="space-y-6">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full p-4 text-left text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          onClick={() => toggleDropdown(item.label)}
                          aria-expanded={activeDropdown === item.label}
                          aria-haspopup="true"
                        >
                          <div className="flex items-center gap-3">
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                          </div>
                          <ChevronRight 
                            className={`w-5 h-5 transition-transform duration-200 ${
                              activeDropdown === item.label ? 'rotate-90' : ''
                            }`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              className="ml-8 mt-2 space-y-2"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="flex items-center gap-3 p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {child.icon}
                                  <div>
                                    <div className="font-medium">{child.label}</div>
                                    {child.description && (
                                      <div className="text-sm text-gray-400">{child.description}</div>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 p-4 text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraAdvancedFuturisticNavigation2025;