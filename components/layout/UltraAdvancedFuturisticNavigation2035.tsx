import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, ChevronRight, 
  Home, Briefcase, Users, BookOpen, Phone, 
  Zap, Shield, Brain, Rocket, Atom, Satellite,
  Cloud, Database, Lock, ChartBar, Cpu, Globe,
  Target, Lightbulb, Code, Palette, Gamepad2
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Type definitions for DOM elements
type Node = any;

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
        href: '/services?category=ai',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise'
      },
      {
        label: 'Quantum Computing',
        href: '/services?category=quantum',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions'
      },
      {
        label: 'Space Technology',
        href: '/services?category=space',
        icon: <Satellite className="w-4 h-4" />,
        description: 'Innovative space tech applications'
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cyber',
        icon: <Shield className="w-4 h-4" />,
        description: 'Enterprise-grade security solutions'
      },
      {
        label: 'Cloud & DevOps',
        href: '/services?category=cloud',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud infrastructure'
      },
      {
        label: 'FinTech Solutions',
        href: '/services?category=fintech',
        icon: <ChartBar className="w-4 h-4" />,
        description: 'Financial technology innovations'
      },
      {
        label: 'View All Services',
        href: '/services',
        icon: <Globe className="w-4 h-4" />,
        description: 'Complete service portfolio'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific solutions and use cases',
    children: [
      {
        label: 'Healthcare',
        href: '/healthcare-solutions',
        icon: <Users className="w-4 h-4" />,
        description: 'Medical technology solutions'
      },
      {
        label: 'Finance',
        href: '/financial-solutions',
        icon: <ChartBar className="w-4 h-4" />,
        description: 'Fintech and banking solutions'
      },
      {
        label: 'Manufacturing',
        href: '/manufacturing-solutions',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Industry 4.0 solutions'
      },
      {
        label: 'Retail',
        href: '/retail-solutions',
        icon: <Globe className="w-4 h-4" />,
        description: 'E-commerce and retail tech'
      },
      {
        label: 'Government',
        href: '/government-solutions',
        icon: <Shield className="w-4 h-4" />,
        description: 'Public sector solutions'
      }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: <Users className="w-4 h-4" />,
    description: 'Learn about our mission and team'
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Whitepapers, case studies, and insights',
    children: [
      {
        label: 'Blog',
        href: '/blog',
        icon: <Lightbulb className="w-4 h-4" />,
        description: 'Industry insights and updates'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <Target className="w-4 h-4" />,
        description: 'Success stories and implementations'
      },
      {
        label: 'Whitepapers',
        href: '/white-papers',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'In-depth research and analysis'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Users className="w-4 h-4" />,
        description: 'Educational content and training'
      },
      {
        label: 'Documentation',
        href: '/docs',
        icon: <Code className="w-4 h-4" />,
        description: 'Technical guides and APIs'
      }
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />,
    description: 'Get in touch with our experts'
  }
];

const UltraAdvancedFuturisticNavigation2035: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [router.asPath]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center"
            >
              <Rocket className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </motion.div>
            <div className="hidden sm:block">
              <div className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Innovating Tomorrow</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  onClick={() => {
                    if (!item.children) {
                      router.push(item.href);
                    }
                  }}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  {item.children && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-4">
                      <div className="text-sm font-semibold text-cyan-400 mb-3">{item.description}</div>
                      <div className="space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                          >
                            <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                              {child.icon}
                            </div>
                            <div>
                              <div className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                                {child.label}
                              </div>
                              <div className="text-sm text-gray-400">{child.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
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
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/contact')}
              className="hidden sm:block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
            >
              Get Started
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-900/95 backdrop-blur-xl z-50"
          >
            <div className="max-w-2xl mx-auto px-4 pt-20">
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search our services, solutions, and resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-lg"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-xl transition-colors duration-200"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Press ESC to close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => {
                      if (item.children) {
                        setActiveDropdown(activeDropdown === item.label ? null : item.label);
                      } else {
                        router.push(item.href);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className="flex items-center justify-between w-full text-left p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.children && (
                      <ChevronRight 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-90' : ''
                        }`} 
                      />
                    )}
                  </button>
                  
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-8 mt-2 space-y-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                        >
                          {child.icon}
                          <span>{child.label}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Button */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-medium py-3 px-4 rounded-lg text-center transition-all duration-300"
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

export default UltraAdvancedFuturisticNavigation2035;