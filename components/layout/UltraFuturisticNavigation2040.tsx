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
  Zap,
  Globe,
  Star,
  Settings,
  HelpCircle,
  Mail,
  DollarSign,
  Heart,
  ShoppingBag
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
}

// Memoized navigation items for better performance
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
        label: 'Enterprise SAAS',
        href: '/services?category=enterprise',
        icon: <Building className="w-4 h-4" />,
        description: 'Enterprise-grade software solutions',
        featured: true,
        neonColor: 'shadow-yellow-400/50'
      },
      {
        label: 'AI & Machine Learning',
        href: '/services?category=ai-ml',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        featured: true,
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Quantum Computing',
        href: '/services?category=quantum',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced security solutions',
        neonColor: 'shadow-red-400/50'
      },
      {
        label: 'Cloud Infrastructure',
        href: '/services?category=cloud',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud solutions',
        neonColor: 'shadow-indigo-400/50'
      },
      {
        label: 'Micro SAAS',
        href: '/services?category=micro-saas',
        icon: <Zap className="w-4 h-4" />,
        description: 'Specialized business solutions',
        neonColor: 'shadow-green-400/50'
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
        label: 'Financial Services',
        href: '/solutions/financial-services',
        icon: <DollarSign className="w-4 h-4" />,
        description: 'AI-powered financial solutions',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'Healthcare',
        href: '/solutions/healthcare',
        icon: <Heart className="w-4 h-4" />,
        description: 'Digital health innovations',
        neonColor: 'shadow-red-400/50'
      },
      {
        label: 'Manufacturing',
        href: '/solutions/manufacturing',
        icon: <Settings className="w-4 h-4" />,
        description: 'Smart manufacturing solutions',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Retail & E-commerce',
        href: '/solutions/retail-ecommerce',
        icon: <ShoppingBag className="w-4 h-4" />,
        description: 'Digital commerce platforms',
        neonColor: 'shadow-purple-400/50'
      }
    ]
  },
  {
    label: 'Company',
    href: '/about',
    icon: <Building className="w-4 h-4" />,
    description: 'Learn about Zion Tech Group',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />,
        description: 'Our story and mission',
        neonColor: 'shadow-cyan-400/50'
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
        icon: <Briefcase className="w-4 h-4" />,
        description: 'Join our team',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'News & Updates',
        href: '/news',
        icon: <FileText className="w-4 h-4" />,
        description: 'Latest company news',
        neonColor: 'shadow-blue-400/50'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Educational content and tools',
    children: [
      {
        label: 'Documentation',
        href: '/docs',
        icon: <FileText className="w-4 h-4" />,
        description: 'Technical documentation',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'API Reference',
        href: '/api',
        icon: <Code className="w-4 h-4" />,
        description: 'Developer API documentation',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Educational webinars',
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'White Papers',
        href: '/white-papers',
        icon: <FileText className="w-4 h-4" />,
        description: 'Industry insights and research',
        neonColor: 'shadow-orange-400/50'
      }
    ]
  },
  {
    label: 'Support',
    href: '/support',
    icon: <HelpCircle className="w-4 h-4" />,
    description: 'Get help and support',
    children: [
      {
        label: 'Help Center',
        href: '/help',
        icon: <HelpCircle className="w-4 h-4" />,
        description: 'Self-service support',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Contact Support',
        href: '/contact',
        icon: <Mail className="w-4 h-4" />,
        description: 'Get in touch with our team',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'Status Page',
        href: '/status',
        icon: <Globe className="w-4 h-4" />,
        description: 'Service status and uptime',
        neonColor: 'shadow-orange-400/50'
      },
      {
        label: 'Training',
        href: '/training',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'User training and certification',
        neonColor: 'shadow-purple-400/50'
      }
    ]
  }
];

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  // Handle navigation item click
  const handleNavItemClick = useCallback((href: string) => {
    router.push(href);
    setIsOpen(false);
    setActiveDropdown(null);
  }, [router]);

  // Handle dropdown toggle
  const handleDropdownToggle = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <div key={item.label} className="relative group">
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="ml-2 px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.children && (
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {item.children && (
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
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
                                    onClick={() => handleNavItemClick(child.href)}
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                                  >
                                    <div className={`p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors duration-200 ${child.neonColor}`}>
                                      {child.icon}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center space-x-2">
                                        <span className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                          {child.label}
                                        </span>
                                        {child.featured && (
                                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                                            Featured
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-sm text-gray-400">{child.description}</p>
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
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
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
                      className="absolute top-full right-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 p-4"
                    >
                      <form onSubmit={handleSearch} className="space-y-4">
                        <div>
                          <label htmlFor="search" className="sr-only">Search</label>
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              id="search"
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder="Search services, solutions..."
                              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
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
                className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
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
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu} />
            <div className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-white">Menu</h2>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.label}>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                      >
                        <div className="flex items-center space-x-3">
                          <span>{item.icon}</span>
                          <span className="font-medium">{item.label}</span>
                          {item.badge && (
                            <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.children && (
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        )}
                      </button>

                      {item.children && activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-6 mt-2 space-y-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={closeMobileMenu}
                              className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                            >
                              <span>{child.icon}</span>
                              <span className="text-sm">{child.label}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Contact Button */}
                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraFuturisticNavigation2040;