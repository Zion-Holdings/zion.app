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
  Star,
  Globe,
  Lock,
  Cpu,
  Database,
  Server,
  BarChart3,
  Settings,
  User,
  Bell,
  HelpCircle,
  Info
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Define Node type for DOM event handling
type Node = HTMLElement | null;

// Custom icon components
const Handshake = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

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
    neonColor: 'shadow-cyan-400/50',
    category: 'main'
  },
  {
    label: 'Services',
    href: '/services',
    icon: <Briefcase className="w-4 h-4" />,
    description: 'Explore our comprehensive technology solutions',
    badge: 'New',
    neonColor: 'shadow-blue-400/50',
    category: 'main',
    children: [
      {
        label: 'AI & Consciousness',
        href: '/services?category=ai-ml',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI consciousness solutions',
        featured: true,
        neonColor: 'shadow-purple-400/50',
        category: 'ai'
      },
      {
        label: 'Quantum Computing',
        href: '/services?category=quantum',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        neonColor: 'shadow-blue-400/50',
        category: 'quantum'
      },
      {
        label: 'Space Technology',
        href: '/services?category=space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications',
        featured: true,
        neonColor: 'shadow-pink-400/50',
        category: 'space'
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced security solutions',
        neonColor: 'shadow-red-400/50',
        category: 'security'
      },
      {
        label: 'Cloud Infrastructure',
        href: '/services?category=cloud',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud solutions',
        neonColor: 'shadow-indigo-400/50',
        category: 'cloud'
      },
      {
        label: 'Micro SAAS',
        href: '/services?category=micro-saas',
        icon: <Code className="w-4 h-4" />,
        description: 'Innovative micro SAAS platforms',
        neonColor: 'shadow-emerald-400/50',
        category: 'saas'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific technology solutions',
    neonColor: 'shadow-green-400/50',
    category: 'main',
    children: [
      {
        label: 'Enterprise Solutions',
        href: '/solutions/enterprise',
        icon: <Building className="w-4 h-4" />,
        description: 'Large-scale enterprise solutions',
        neonColor: 'shadow-blue-400/50',
        category: 'enterprise'
      },
      {
        label: 'Healthcare & Biotech',
        href: '/solutions/healthcare',
        icon: <Users className="w-4 h-4" />,
        description: 'Healthcare technology solutions',
        neonColor: 'shadow-red-400/50',
        category: 'healthcare'
      },
      {
        label: 'Financial Services',
        href: '/solutions/financial',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Financial technology solutions',
        neonColor: 'shadow-green-400/50',
        category: 'financial'
      },
      {
        label: 'Manufacturing',
        href: '/solutions/manufacturing',
        icon: <Settings className="w-4 h-4" />,
        description: 'Manufacturing technology solutions',
        neonColor: 'shadow-orange-400/50',
        category: 'manufacturing'
      },
      {
        label: 'Retail & E-commerce',
        href: '/solutions/retail',
        icon: <ShoppingCart className="w-4 h-4" />,
        description: 'Retail technology solutions',
        neonColor: 'shadow-purple-400/50',
        category: 'retail'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge base and learning resources',
    neonColor: 'shadow-yellow-400/50',
    category: 'main',
    children: [
      {
        label: 'Documentation',
        href: '/docs',
        icon: <FileText className="w-4 h-4" />,
        description: 'Technical documentation',
        neonColor: 'shadow-blue-400/50',
        category: 'docs'
      },
      {
        label: 'API Reference',
        href: '/api-documentation',
        icon: <Code className="w-4 h-4" />,
        description: 'API documentation and guides',
        neonColor: 'shadow-green-400/50',
        category: 'api'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Educational webinars',
        neonColor: 'shadow-purple-400/50',
        category: 'webinars'
      },
      {
        label: 'White Papers',
        href: '/white-papers',
        icon: <FileText className="w-4 h-4" />,
        description: 'Industry insights and research',
        neonColor: 'shadow-indigo-400/50',
        category: 'whitepapers'
      },
      {
        label: 'Blog',
        href: '/blog',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'Latest insights and updates',
        neonColor: 'shadow-cyan-400/50',
        category: 'blog'
      }
    ]
  },
  {
    label: 'Company',
    href: '/about',
    icon: <Building className="w-4 h-4" />,
    description: 'Learn about Zion Tech Group',
    neonColor: 'shadow-gray-400/50',
    category: 'main',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Info className="w-4 h-4" />,
        description: 'Our story and mission',
        neonColor: 'shadow-blue-400/50',
        category: 'about'
      },
      {
        label: 'Our Team',
        href: '/team',
        icon: <Users className="w-4 h-4" />,
        description: 'Meet our experts',
        neonColor: 'shadow-green-400/50',
        category: 'team'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Briefcase className="w-4 h-4" />,
        description: 'Join our team',
        neonColor: 'shadow-purple-400/50',
        category: 'careers'
      },
      {
        label: 'Partners',
        href: '/partners',
        icon: <Handshake className="w-4 h-4" />,
        description: 'Strategic partnerships',
        neonColor: 'shadow-orange-400/50',
        category: 'partners'
      },
      {
        label: 'News',
        href: '/news',
        icon: <Bell className="w-4 h-4" />,
        description: 'Company news and updates',
        neonColor: 'shadow-red-400/50',
        category: 'news'
      }
    ]
  }
];

const UltraFuturisticNavigation2045: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
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
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search
  const handleSearch = useCallback((query: string) => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setSearchQuery('');
    }
  }, [router]);

  // Handle navigation
  const handleNavigation = useCallback((href: string) => {
    router.push(href);
    setIsOpen(false);
    setActiveDropdown(null);
  }, [router]);

  // Toggle dropdown
  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  // Close all dropdowns
  const closeAllDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary 2045 Technology</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group-hover:text-cyan-400"
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                  {item.badge && (
                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                      {item.badge}
                    </span>
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
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                        onMouseLeave={closeAllDropdowns}
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => handleNavigation(child.href)}
                                className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                              >
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${child.neonColor?.replace('shadow-', 'from-').replace('/50', '')} flex items-center justify-center flex-shrink-0`}>
                                  {child.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <span className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                      {child.label}
                                    </span>
                                    {child.featured && (
                                      <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  {child.description && (
                                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">
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
            <div ref={searchRef} className="relative hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                  className="w-64 px-4 py-2 pl-10 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('/contact')}
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-400/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                  className="w-full px-4 py-3 pl-10 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
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
                          onClick={() => handleNavigation(child.href)}
                          className="block p-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Mobile Contact Button */}
              <button
                onClick={() => handleNavigation('/contact')}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2045;