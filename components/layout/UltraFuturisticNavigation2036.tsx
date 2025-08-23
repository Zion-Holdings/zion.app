import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail,
  Rocket, Grid, Star, DollarSign, BarChart3, 
  Users, Building, MessageCircle, BookOpen,
  FileText, Award, HelpCircle, Search
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
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <Star className="w-4 h-4" />
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
        icon: <Grid className="w-4 h-4" />
      },
      { 
        name: 'Specialized Solutions', 
        href: '/solutions', 
        description: 'Industry-specific solutions',
        icon: <Star className="w-4 h-4" />
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

interface UltraFuturisticNavigation2036Props {
  isScrolled?: boolean;
}

export default function UltraFuturisticNavigation2036({ isScrolled = false }: UltraFuturisticNavigation2036Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Optimized scroll handler with throttling
  useEffect(() => {
    const handleScroll = () => {
      setInternalScrollState(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              onClick={closeAllDropdowns}
              aria-label="Zion Tech Group Homepage"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeDropdown === item.name
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                  }`}
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup="true"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-2 px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {item.description}
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeAllDropdowns}
                              className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                                child.featured
                                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30'
                                  : 'hover:bg-gray-800/50'
                              }`}
                              onClick={closeAllDropdowns}
                              role="menuitem"
                            >
                              <div className={`flex-shrink-0 ${
                                child.featured ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'
                              }`}>
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium ${
                                  child.featured ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'
                                }`}>
                                  {child.name}
                                </p>
                                <p className="text-xs text-gray-400 truncate">
                                  {child.description}
                                </p>
                              </div>
                              {child.featured && (
                                <Star className="w-4 h-4 text-cyan-400" />
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          {/* Search Bar */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                aria-label="Search services"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center justify-between w-full px-4 py-3 text-left text-white hover:bg-gray-800/50 rounded-xl transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Mobile Dropdown */}
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
                            onClick={closeAllDropdowns}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                              child.featured
                                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30'
                                : 'hover:bg-gray-800/50'
                            }`}
                          >
                            <div className={`flex-shrink-0 ${
                              child.featured ? 'text-cyan-400' : 'text-gray-400'
                            }`}>
                              {child.icon}
                            </div>
                            <div className="flex-1">
                              <p className={`text-sm font-medium ${
                                child.featured ? 'text-cyan-400' : 'text-white'
                              }`}>
                                {child.name}
                              </p>
                              <p className="text-xs text-gray-400">
                                {child.description}
                              </p>
                            </div>
                            {child.featured && (
                              <Star className="w-4 h-4 text-cyan-400" />
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-800/50">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Get Started
                </motion.button>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-700 space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden" 
          onClick={closeAllDropdowns}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default UltraFuturisticNavigation2036;