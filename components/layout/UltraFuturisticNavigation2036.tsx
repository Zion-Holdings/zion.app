import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  MessageCircle,
  Calculator,
  Play,
  Brain,
  Shield,
  Rocket,
  Globe,
  Cpu,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Zap,
  Target
} from 'lucide-react';
import Link from 'next/link';

// Custom ShoppingBag icon component
const ShoppingBag = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;
  category?: string;
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

const navigationItems: NavigationItem[] = [
  {
    name: 'Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Complete technology solutions',
    badge: 'Main',
    category: 'services',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Ultimate 2036 Showcase', 
        href: '/ultimate-2036-futuristic-services-showcase', 
        description: 'Latest futuristic services',
        icon: <Sparkles className="w-4 h-4" />,
        featured: true,
        badge: 'NEW'
      },
      { 
        name: 'AI & Machine Learning', 
        href: '/ai-services', 
        description: 'Advanced AI solutions',
        icon: <Brain className="w-4 h-4" />
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <Cpu className="w-4 h-4" />
      },
      { 
        name: 'Space Technology', 
        href: '/space-technology', 
        description: 'Space exploration solutions',
        icon: <Globe className="w-4 h-4" />
      },
      { 
        name: 'IT Solutions', 
        href: '/it-services', 
        description: 'Enterprise IT infrastructure',
        icon: <Database className="w-4 h-4" />
      },
      { 
        name: 'Micro SAAS', 
        href: '/micro-saas', 
        description: 'Specialized software solutions',
        icon: <Code className="w-4 h-4" />
      },
      { 
        name: 'Cybersecurity', 
        href: '/cybersecurity', 
        description: 'Security & compliance solutions',
        icon: <Shield className="w-4 h-4" />
      },
      { 
        name: 'Cloud Solutions', 
        href: '/cloud-platform', 
        description: 'Cloud infrastructure & services',
        icon: <Cloud className="w-4 h-4" />
      },
      { 
        name: 'Specialized Solutions', 
        href: '/solutions', 
        description: 'Industry-specific solutions',
        icon: <Target className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Showcase & Pricing',
    href: '/2036-innovative-services-showcase',
    icon: <Star className="w-5 h-5" />,
    description: 'Service showcases and pricing',
    badge: 'Featured',
    category: 'showcase',
    children: [
      { 
        name: '2036 Innovation Showcase', 
        href: '/2036-innovative-services-showcase', 
        description: 'Cutting-edge 2036 services',
        icon: <Sparkles className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Services Showcase', 
        href: '/comprehensive-services-showcase-2025', 
        description: 'Complete services overview',
        icon: <Grid className="w-4 h-4" />,
      },
      { 
        name: 'Innovative 2037 Services', 
        href: '/innovative-2037-services-showcase', 
        description: 'Cutting-edge 2037 services',
        icon: <Sparkles className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Pricing Plans', 
        href: '/pricing', 
        description: 'Service pricing information',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Market Pricing', 
        href: '/market-pricing', 
        description: 'Market price references',
        icon: <BarChart3 className="w-4 h-4" />
      },
      { 
        name: 'Revolutionary Pricing 2025', 
        href: '/revolutionary-2025-pricing', 
        description: '2025 pricing innovations',
        icon: <TrendingUp className="w-4 h-4" />
      },
      { 
        name: 'Revolutionary Pricing 2026', 
        href: '/revolutionary-2026-pricing', 
        description: '2026 pricing innovations',
        icon: <TrendingUp className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    category: 'solutions',
    children: [
      {
        name: 'Enterprise Solutions',
        href: '/enterprise-solutions',
        description: 'Large-scale enterprise solutions',
        icon: <Building className="w-4 h-4" />
      },
      {
        name: 'Startup Solutions',
        href: '/startup-solutions',
        description: 'Solutions for growing businesses',
        icon: <Rocket className="w-4 h-4" />
      },
      {
        name: 'Government Solutions',
        href: '/government-solutions',
        description: 'Public sector technology',
        icon: <ShieldCheck className="w-4 h-4" />
      },
      {
        name: 'Healthcare Solutions',
        href: '/healthcare-solutions',
        description: 'Medical technology solutions',
        icon: <Heart className="w-4 h-4" />
      },
      {
        name: 'Financial Solutions',
        href: '/financial-solutions',
        description: 'Fintech and banking solutions',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Users className="w-4 h-4" />
      },
      { 
        name: 'Investors', 
        href: '/investors', 
        description: 'Investment information',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <User className="w-4 h-4" />
      },
      { 
        name: 'News', 
        href: '/news', 
        description: 'Company updates',
        icon: <FileText className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and insights',
    category: 'resources',
    children: [
      {
        name: 'Blog & Insights',
        href: '/blog',
        description: 'Latest industry insights',
        icon: <FileText className="w-4 h-4" />
      },
      {
        name: 'White Papers',
        href: '/white-papers',
        description: 'In-depth research reports',
        icon: <BookOpenCheck className="w-4 h-4" />
      },
      {
        name: 'Webinars',
        href: '/webinars',
        description: 'Educational webinars',
        icon: <Video className="w-4 h-4" />
      },
      {
        name: 'Training',
        href: '/training',
        description: 'Professional development',
        icon: <GraduationCap className="w-4 h-4" />
      },
      {
        name: 'Documentation',
        href: '/api-documentation',
        description: 'Technical documentation',
        icon: <Code className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Play className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    category: 'company',
    children: [
      {
        name: 'About Us',
        href: '/about',
        description: 'Our story and mission',
        icon: <Users className="w-4 h-4" />
      },
      {
        name: 'Team',
        href: '/team',
        description: 'Meet our experts',
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
        name: 'Investors',
        href: '/investors',
        description: 'Investment opportunities',
        icon: <TrendingUp className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Support',
    href: '/support',
    icon: <HelpCircle className="w-5 h-5" />,
    description: 'Help and support',
    category: 'support',
    children: [
      {
        name: 'Help Center',
        href: '/support',
        description: 'Comprehensive help resources',
        icon: <HelpCircle className="w-4 h-4" />
      },
      { 
        name: 'Training', 
        href: '/training', 
        description: 'Learning resources',
        icon: <BookOpenCheck className="w-4 h-4" />
      },
      { 
        name: 'Webinars', 
        href: '/webinars', 
        description: 'Educational sessions',
        icon: <Video className="w-4 h-4" />
      },
      { 
        name: 'White Papers', 
        href: '/white-papers', 
        description: 'In-depth research',
        icon: <FileText className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry solutions',
    category: 'solutions',
    children: [
      { 
        name: 'Healthcare', 
        href: '/healthcare-ai-solutions', 
        description: 'Healthcare technology',
        icon: <Heart className="w-4 h-4" />
      },
      { 
        name: 'Financial Services', 
        href: '/financial-solutions', 
        description: 'Fintech solutions',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Manufacturing', 
        href: '/manufacturing-ai-solutions', 
        description: 'Industrial automation',
        icon: <Settings className="w-4 h-4" />
      },
      { 
        name: 'Retail', 
        href: '/retail-technology-solutions', 
        description: 'Retail technology',
        icon: <ShoppingCart className="w-4 h-4" />
      },
      { 
        name: 'Government', 
        href: '/government-technology-solutions', 
        description: 'Public sector solutions',
        icon: <Building className="w-4 h-4" />
      },
      { 
        name: 'Education', 
        href: '/education-technology-solutions', 
        description: 'EdTech solutions',
        icon: <BookOpen className="w-4 h-4" />
      }
    ]
  }
];

export default function UltraFuturisticNavigation2036({ onMenuToggle, isMenuOpen }: UltraFuturisticNavigation2036Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Optimized scroll handler with throttling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              aria-label="Zion Tech Group - Home"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Zion
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  onKeyDown={(e) => handleKeyDown(e, () => toggleDropdown(item.name))}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                    activeDropdown === item.name ? 'text-white bg-white/10' : ''
                  }`}
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup="true"
                  aria-label={`${item.name} menu`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-cyan-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden"
                      role="menu"
                      aria-label={`${item.name} submenu`}
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeDropdown}
                              className={`flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group ${
                                child.featured ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30' : ''
                              }`}
                              role="menuitem"
                            >
                              {child.icon}
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium">{child.name}</span>
                                  {child.featured && (
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  )}
                                </div>
                                <p className="text-sm text-gray-400">{child.description}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                aria-label="Search the website"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              aria-label="Contact us"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-xs text-gray-400">Revolutionary Technology</div>
                </div>
              </Link>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50"
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  aria-label="Search the website"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    onKeyDown={(e) => handleKeyDown(e, () => toggleDropdown(item.name))}
                    className="w-full flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 space-y-2"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            onClick={() => {
                              closeDropdown();
                              onMenuToggle?.();
                            }}
                            className="block p-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                            role="menuitem"
                          >
                            <div className="flex items-center space-x-3">
                              {child.icon}
                              <div>
                                <div className="font-medium">{child.name}</div>
                                <div className="text-sm text-gray-500">{child.description}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile Contact Button */}
              <div className="pt-4 border-t border-gray-700/50">
                <Link
                  href="/contact"
                  onClick={onMenuToggle}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  aria-label="Contact us"
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 rounded-lg"
                onClick={handleMobileMenuToggle}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeAllDropdowns} />
            <div className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-white">Menu</h2>
                  <button
                    onClick={closeAllDropdowns}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label="Close mobile menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <button
                        className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                        onClick={() => handleDropdownToggle(item.name)}
                        aria-expanded={activeDropdown === item.name}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-6 mt-2 space-y-2 overflow-hidden"
                          >
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={normalizeHref(child.href)}
                                className="block p-3 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                                onClick={closeAllDropdowns}
                              >
                                <div className="flex items-center gap-3">
                                  {child.icon}
                                  <div>
                                    <div className="font-medium">{child.name}</div>
                                    {child.description && (
                                      <div className="text-sm text-gray-500">{child.description}</div>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                    onClick={closeAllDropdowns}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/quote"
                    className="block w-full text-center px-4 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
                    onClick={closeAllDropdowns}
                  >
                    Get Quote
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-700/50">
                  <div className="space-y-3 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <a href="tel:+1 302 464 0950" className="hover:text-cyan-400 transition-colors duration-200">
                        +1 302 464 0950
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-200">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraFuturisticNavigation2036;