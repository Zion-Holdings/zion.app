import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Star, Sparkles, 
  Grid, List, TrendingUp, 
  Calendar, Calculator, GraduationCap,
  Cpu, Cloud, Settings, Monitor, Palette, Network, Layers, Code, Heart, ShoppingCart, Clock, MessageCircle, HelpCircle, Building,
  Zap, Infinity, Eye, Heart as HeartIcon, Code as CodeIcon, Palette as PaletteIcon, Search
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeToggle from '../ThemeToggle';

// Define Node type for DOM event handling
type Node = HTMLElement | null;

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  badge?: string;
}

// Memoized navigation items for better performance
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
    badge: 'New',
    neonColor: 'shadow-blue-400/50',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete revolutionary services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI & Machine Learning', 
        href: '/services?category=ai-data', 
        description: 'Advanced AI and ML solutions',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise'
      },
      { 
        name: 'IT Infrastructure', 
        href: '/services?category=cloud-finops', 
        description: 'Enterprise infrastructure solutions',
        icon: <Cpu className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'Micro SAAS Solutions', 
        href: '/services?category=developer-tools', 
        description: 'Innovative micro SAAS platforms',
        icon: <Code className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Cybersecurity', 
        href: '/services?category=cybersecurity', 
        description: 'Advanced security solutions',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Observability', 
        href: '/services?category=observability', 
        description: 'Monitoring and analytics',
        icon: <Eye className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      }
    ]
  },
  {
    name: 'AI & Machine Learning',
    href: '/services?category=ai-data',
    icon: <Brain className="w-5 h-5" />,
    description: 'Advanced AI and ML solutions',
    badge: 'Featured',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      {
        name: 'AI Content Intelligence',
        href: '/services/ai-content-intelligence-platform',
        description: 'AI-powered content optimization',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI Customer Success',
        href: '/services/ai-customer-success-automation',
        description: 'Intelligent customer success automation',
        icon: <HeartIcon className="w-4 h-4" />
      },
      {
        name: 'AI Sales Intelligence',
        href: '/services/ai-sales-intelligence-suite',
        description: 'AI-powered sales optimization',
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        name: 'AI Product Analytics',
        href: '/services/ai-product-analytics-platform',
        description: 'AI-driven product insights',
        icon: <BarChart3 className="w-4 h-4" />
      },
      {
        name: 'AI Cybersecurity',
        href: '/services/ai-cybersecurity-threat-intelligence',
        description: 'AI-powered threat detection',
        icon: <Shield className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'IT Infrastructure',
    href: '/services?category=cloud-finops',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Enterprise infrastructure solutions',
    badge: 'Enterprise',
    category: 'infrastructure',
    color: 'from-blue-500 to-cyan-500',
    children: [
      {
        name: 'Cloud Cost Optimization',
        href: '/services/cloud-cost-optimization-platform',
        description: 'AI-powered cloud cost management',
        icon: <Cloud className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'DevOps Automation',
        href: '/services/devops-automation-platform',
        description: 'Intelligent DevOps automation',
        icon: <Settings className="w-4 h-4" />
      },
      {
        name: 'Kubernetes Management',
        href: '/services/kubernetes-management-platform',
        description: 'Enterprise K8s management',
        icon: <Layers className="w-4 h-4" />
      },
      {
        name: 'Observability Platform',
        href: '/services/observability-platform',
        description: 'Unified monitoring and analytics',
        icon: <Eye className="w-4 h-4" />
      },
      {
        name: 'API Gateway Management',
        href: '/services/api-gateway-management',
        description: 'Centralized API management',
        icon: <Network className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    href: '/services?category=developer-tools',
    icon: <Code className="w-5 h-5" />,
    description: 'Innovative micro SAAS platforms',
    badge: 'Innovative',
    category: 'micro-saas',
    color: 'from-orange-500 to-red-500',
    children: [
      {
        name: 'No-Code Automation',
        href: '/services/no-code-automation-platform',
        description: 'Visual workflow automation',
        icon: <Code className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI Email Marketing',
        href: '/services/ai-powered-email-marketing',
        description: 'Intelligent email optimization',
        icon: <Mail className="w-4 h-4" />
      },
      {
        name: 'Social Media Automation',
        href: '/services/social-media-automation-suite',
        description: 'Multi-platform social management',
        icon: <MessageCircle className="w-4 h-4" />
      },
      {
        name: 'AI Customer Support',
        href: '/services/ai-powered-customer-support',
        description: 'Intelligent support automation',
        icon: <HelpCircle className="w-4 h-4" />
      },
      {
        name: 'AI SEO Optimization',
        href: '/services/ai-powered-seo-optimization',
        description: 'AI-driven SEO insights',
        icon: <Search className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative micro SAAS solutions',
    badge: 'Hot',
    category: 'saas',
    color: 'from-green-500 to-emerald-500',
    children: [
      {
        name: 'AI Code Review Assistant',
        href: '/ai-code-review-assistant',
        description: 'Intelligent code review with AI',
        icon: <Code className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI Autonomous Customer Support',
        href: '/ai-autonomous-customer-support',
        description: 'Fully autonomous customer support',
        icon: <MessageCircle className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'AI Autonomous Marketing Platform',
        href: '/ai-autonomous-marketing-platform',
        description: 'Fully autonomous marketing',
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        name: 'AI Autonomous Sales Platform',
        href: '/ai-autonomous-sales-platform',
        description: 'Fully autonomous sales',
        icon: <DollarSign className="w-4 h-4" />
      },
      {
        name: 'Vector Search Starter',
        href: '/vector-search-starter',
        description: 'Production RAG starter',
        icon: <Search className="w-4 h-4" />
      },
      {
        name: 'Status Page & SLO Monitor',
        href: '/status-pages-slo',
        description: 'Public status pages and monitoring',
        icon: <Monitor className="w-4 h-4" />
      },
      {
        name: 'TLS Certificate Monitor',
        href: '/tls-certificate-monitor',
        description: 'Certificate expiry monitoring',
        icon: <Lock className="w-4 h-4" />
      },
      {
        name: 'SSO in a Box',
        href: '/sso-in-a-box',
        description: 'Enterprise SSO solution',
        icon: <Shield className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Comprehensive business solutions',
    category: 'solutions',
    color: 'from-indigo-500 to-purple-500',
    children: [
      {
        name: 'AI Solutions',
        href: '/ai-solutions',
        description: 'AI-powered business solutions',
        icon: <Brain className="w-4 h-4" />
      },
      {
        name: 'Quantum Solutions',
        href: '/quantum-solutions',
        description: 'Quantum computing solutions',
        icon: <Atom className="w-4 h-4" />
      },
      {
        name: 'IT Infrastructure',
        href: '/it-infrastructure',
        description: 'Enterprise IT infrastructure',
        icon: <Server className="w-4 h-4" />
      },
      {
        name: 'Cybersecurity',
        href: '/cybersecurity',
        description: 'Advanced security solutions',
        icon: <Shield className="w-4 h-4" />
      },
      {
        name: 'Cloud Migration',
        href: '/cloud-migration',
        description: 'Cloud migration services',
        icon: <Cloud className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and learning resources',
    category: 'resources',
    color: 'from-teal-500 to-cyan-500',
    children: [
      {
        name: 'Documentation',
        href: '/docs',
        description: 'Technical documentation',
        icon: <FileText className="w-4 h-4" />
      },
      {
        name: 'API Reference',
        href: '/api',
        description: 'API documentation',
        icon: <Code className="w-4 h-4" />
      },
      {
        name: 'Tutorials',
        href: '/tutorials',
        description: 'Step-by-step guides',
        icon: <GraduationCap className="w-4 h-4" />
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        description: 'Success stories',
        icon: <Star className="w-4 h-4" />
      },
      {
        name: 'Blog',
        href: '/blog',
        description: 'Latest insights and news',
        icon: <BookOpen className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    category: 'company',
    color: 'from-gray-500 to-slate-500',
    children: [
      {
        name: 'About Us',
        href: '/about',
        description: 'Our story and mission',
        icon: <Building className="w-4 h-4" />
      },
      {
        name: 'Team',
        href: '/team',
        description: 'Meet our team',
        icon: <Users className="w-4 h-4" />
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our team',
        icon: <Briefcase className="w-4 h-4" />
      },
      {
        name: 'Partners',
        href: '/partners',
        description: 'Strategic partnerships',
        icon: <Handshake className="w-4 h-4" />
      },
      {
        name: 'News',
        href: '/news',
        description: 'Company updates',
        icon: <Newspaper className="w-4 h-4" />
      }
    ]
  }
];

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(3); // Mock notification count
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Memoized animation variants for better performance
  const navVariants = useMemo(() => ({
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }), []);

  const dropdownVariants = useMemo(() => ({
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  }), []);

  // Optimized scroll handling
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  // Handle click outside mobile menu
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [router.asPath]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  }, [searchQuery, router]);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <div className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-cyan-400 font-medium">2040</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
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
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-4 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href || '#'}
                              className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-700/50 transition-colors duration-200 group"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                                  {child.label}
                                </p>
                                {child.description && (
                                  <p className="text-sm text-gray-400 mt-1">
                                    {child.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
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
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
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

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              ref={searchRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="py-4 border-t border-gray-700/50"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search our services, solutions, and innovations..."
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-colors duration-200"
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-colors duration-200"
                        aria-expanded={activeDropdown === item.label}
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.label && item.children && (
                        <div className="mt-2 ml-8 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href || '#'}
                              className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                            >
                              {child.icon}
                              <span className="text-sm">{child.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Button */}
              <div className="pt-4 border-t border-gray-700/50">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default UltraFuturisticNavigation2040;