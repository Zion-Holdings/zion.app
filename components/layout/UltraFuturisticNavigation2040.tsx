import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  BarChart3, Star, 
  Grid, TrendingUp, 
  GraduationCap,
  Cpu, Cloud, Monitor, Network, Heart, ShoppingCart, MessageCircle, HelpCircle, Building,
  Zap, Heart as HeartIcon, Code as CodeIcon, Palette as PaletteIcon,
  BookOpen, FileText, Handshake, Sun, Moon
} from 'lucide-react';
import EnhancedSearch from '../EnhancedSearch';

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  badge?: string;
  title?: string;
  featured?: boolean;
  category?: string;
  color?: string;
}

interface UltraFuturisticNavigation2040Props {
  onMenuToggle?: () => void;
  isSidebarOpen?: boolean;
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
        label: 'AI & Machine Learning',
        href: '/ai-services',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        badge: 'Hot'
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
        label: 'Innovative 2040 Services',
        href: '/innovative-2040-futuristic-services-showcase',
        icon: <Star className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        badge: 'Hot'
      },
      {
        label: 'Quantum Computing',
        href: '/quantum-services',
        icon: <Zap className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        badge: 'New'
      },
      {
        label: 'Space Technology',
        href: '/space-tech',
        icon: <Star className="w-4 h-4" />,
        description: 'Innovative space solutions',
        badge: 'Trending'
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Lock className="w-4 h-4" />,
        description: 'Enterprise security solutions',
        badge: 'Popular'
      },
      {
        label: 'Cloud Solutions',
        href: '/cloud-platform',
        icon: <Globe className="w-4 h-4" />,
        description: 'Scalable cloud infrastructure',
        badge: 'Scalable'
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
      { name: 'Pricing Calculator', href: '/pricing-calculator', description: 'Interactive pricing tool', featured: true },
      { name: 'Service Comparison', href: '/service-comparison', description: 'Compare services side by side', featured: true },
      { name: 'Micro SAAS Platform', href: '/micro-saas-platform', description: 'Scalable SAAS solutions' },
      { name: 'Subscription Management', href: '/subscription-management', description: 'Handle recurring billing' }
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

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const UltraFuturisticNavigation2040: React.FC<UltraFuturisticNavigation2040Props> = ({ onMenuToggle, isSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Handle scroll effect with throttling for better performance
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

  // Dark mode effect
  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode !== null) {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dark-mode', isDarkMode.toString());
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleSearchResultClick = (item: NavigationItem) => {
    if (item.href) {
      router.push(item.href);
      setIsSearchOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [router.asPath]);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2" aria-label="Zion Tech Group Home">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/10"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === item.label ? null : item.label);
                      }
                    }}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
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
                        className="absolute left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-50"
                        role="menu"
                      >
                        <div className="p-4 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href || '#'}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
                              role="menuitem"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {child.label}
                                  </p>
                                  {child.badge && (
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                {child.description && (
                                  <p className="text-sm text-gray-400 mt-1">{child.description}</p>
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

          {/* Search and Dark Mode */}
          <div className="hidden lg:flex items-center space-x-4">
            <EnhancedSearch />
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 rounded-xl hover:bg-white/5"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300">
              <User className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <Link href="/get-started">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Sidebar Toggle Button */}
            {onMenuToggle && (
              <button
                onClick={onMenuToggle}
                className="p-2 text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Toggle sidebar menu"
                aria-expanded={isSidebarOpen}
                aria-controls="sidebar-menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
            
            {/* Mobile Navigation Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Toggle mobile navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.label && item.children && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href || '#'}
                              className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
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
              
              <div className="pt-4 border-t border-cyan-500/20 space-y-3">
                <Link href="/pricing-calculator">
                  <button className="w-full px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200">
                    Pricing Calculator
                  </button>
                </Link>
                <Link href="/service-comparison">
                  <button className="w-full px-6 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-200">
                    Compare Services
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          >
            <div className="flex items-start justify-center pt-20 px-4">
              <motion.div
                initial={{ scale: 0.95, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: -20 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-2xl"
                ref={searchRef}
              >
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search for services, solutions, or resources..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
                    autoFocus
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <kbd className="px-2 py-1 text-xs bg-white/20 text-gray-300 rounded">⌘K</kbd>
                  </div>
                </div>

                {/* Search Results */}
                {searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 bg-black/90 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden"
                  >
                    {searchResults.map((result, index) => (
                      <button
                        key={`${result.label}-${index}`}
                        onClick={() => handleSearchResultClick(result)}
                        className="w-full px-4 py-3 text-left hover:bg-white/10 transition-colors focus:outline-none focus:bg-white/10"
                      >
                        <div className="flex items-center space-x-3">
                          {result.icon && (
                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                              {result.icon}
                            </div>
                          )}
                          <div>
                            <p className="text-white font-medium">{result.label}</p>
                            {result.description && (
                              <p className="text-sm text-gray-400">{result.description}</p>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* No Results */}
                {searchQuery.length >= 2 && searchResults.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-center text-gray-400"
                  >
                    No results found for "{searchQuery}"
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default UltraFuturisticNavigation2040;