import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Phone, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Home,
  Briefcase,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Target,
  Building,
  Users,
  BookOpen,
  FileText,
  Video,
  Code,
  Sparkles,
  Zap,
  Globe,
  Star,
  Lock,
  Database,
  Cpu,
  BarChart3,
  Lightbulb,
  Award
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
  badge?: string;
  featured?: boolean;
  neonColor?: string;
  category?: string;
}

// Enhanced navigation items with better organization
const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />,
    neonColor: 'shadow-cyan-400/50'
  },
  {
    label: 'Services',
    href: '/services',
    icon: <Briefcase className="w-4 h-4" />,
    description: 'Explore our comprehensive technology solutions',
    badge: 'New',
    neonColor: 'shadow-blue-400/50',
    children: [
      {
        label: 'AI & Machine Learning',
        href: '/services?category=ai-ml',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        featured: true,
        neonColor: 'shadow-purple-400/50',
        category: 'AI Services'
      },
      {
        label: 'Quantum Computing',
        href: '/services?category=quantum',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        neonColor: 'shadow-blue-400/50',
        category: 'Quantum Technology'
      },
      {
        label: 'Space Technology',
        href: '/services?category=space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications',
        featured: true,
        neonColor: 'shadow-pink-400/50',
        category: 'Space Technology'
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced security solutions',
        neonColor: 'shadow-red-400/50',
        category: 'Cybersecurity'
      },
      {
        label: 'Cloud Infrastructure',
        href: '/services?category=cloud',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud solutions',
        neonColor: 'shadow-indigo-400/50',
        category: 'Cloud Services'
      },
      {
        label: 'Edge Computing',
        href: '/services?category=edge',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Distributed computing solutions',
        neonColor: 'shadow-green-400/50',
        category: 'Edge Computing'
      },
      {
        label: 'Data & Analytics',
        href: '/services?category=data',
        icon: <Database className="w-4 h-4" />,
        description: 'Intelligent data solutions',
        neonColor: 'shadow-yellow-400/50',
        category: 'Data Services'
      },
      {
        label: 'Blockchain & Web3',
        href: '/services?category=blockchain',
        icon: <Code className="w-4 h-4" />,
        description: 'Decentralized technology solutions',
        neonColor: 'shadow-orange-400/50',
        category: 'Blockchain'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific solutions',
    neonColor: 'shadow-emerald-400/50',
    children: [
      {
        label: 'Enterprise Solutions',
        href: '/solutions/enterprise',
        icon: <Building className="w-4 h-4" />,
        description: 'Large-scale enterprise solutions',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Healthcare Technology',
        href: '/solutions/healthcare',
        icon: <Users className="w-4 h-4" />,
        description: 'Healthcare innovation solutions',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'Financial Technology',
        href: '/solutions/financial',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Fintech and financial solutions',
        neonColor: 'shadow-emerald-400/50'
      },
      {
        label: 'Manufacturing & IoT',
        href: '/solutions/manufacturing',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Smart manufacturing solutions',
        neonColor: 'shadow-orange-400/50'
      },
      {
        label: 'Smart Cities',
        href: '/solutions/smart-cities',
        icon: <Globe className="w-4 h-4" />,
        description: 'Urban technology solutions',
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Research & Development',
        href: '/solutions/research',
        icon: <Lightbulb className="w-4 h-4" />,
        description: 'Research technology platforms',
        neonColor: 'shadow-yellow-400/50'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge and learning resources',
    neonColor: 'shadow-purple-400/50',
    children: [
      {
        label: 'Documentation',
        href: '/docs',
        icon: <FileText className="w-4 h-4" />,
        description: 'Technical documentation',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Blog & Insights',
        href: '/blog',
        icon: <Lightbulb className="w-4 h-4" />,
        description: 'Latest insights and trends',
        neonColor: 'shadow-yellow-400/50'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Educational webinars',
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <Award className="w-4 h-4" />,
        description: 'Success stories and case studies',
        neonColor: 'shadow-green-400/50'
      }
    ]
  },
  {
    label: 'Company',
    href: '/about',
    icon: <Building className="w-4 h-4" />,
    description: 'About Zion Tech Group',
    neonColor: 'shadow-gray-400/50',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />,
        description: 'Our story and mission',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Leadership',
        href: '/leadership',
        icon: <Star className="w-4 h-4" />,
        description: 'Meet our leadership team',
        neonColor: 'shadow-yellow-400/50'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Users className="w-4 h-4" />,
        description: 'Join our team',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: <Phone className="w-4 h-4" />,
        description: 'Get in touch with us',
        neonColor: 'shadow-cyan-400/50'
      }
    ]
  }
];

const UltraFuturisticNavigation2025: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  }, [searchQuery, router]);

  // Handle navigation
  const handleNavigation = useCallback((href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    router.push(href);
  }, [router]);

  // Toggle dropdown
  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-400/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl p-2 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-full h-full text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex items-center space-x-1 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 ${
                        activeDropdown === item.label ? 'text-white bg-white/10' : ''
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Link>
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
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${child.neonColor} p-2 flex-shrink-0`}>
                                    {child.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                        {child.label}
                                      </span>
                                      {child.badge && (
                                        <span className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full">
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

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  <Search className="w-5 h-5" />
                </button>
                
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/10 p-4"
                    >
                      <form onSubmit={handleSearch} className="space-y-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search services, solutions..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
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
                className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-400/20"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.label && (
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
                                  className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                                  onClick={closeMobileMenu}
                                >
                                  {child.icon}
                                  <span className="text-sm">{child.label}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                        onClick={closeMobileMenu}
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Contact Button */}
                <div className="pt-4 border-t border-gray-700/50">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                    onClick={closeMobileMenu}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <span>•</span>
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition-colors duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition-colors duration-200">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition-colors duration-200">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UltraFuturisticNavigation2025;