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
  const [internalScrollState, setInternalScrollState] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        (isScrolled || internalScrollState)
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-black/40 backdrop-blur-lg border-b border-white/5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-white/80">
            <div className="flex items-center space-x-4">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{contactInfo.address}</span>
              </span>
              <a href={contactInfo.website} className="hover:text-cyan-400 transition-colors">
                {contactInfo.website.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>
      </div>

  return (
    <>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Link 
              href="/" 
              className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-1"
              aria-label="Zion Tech Group - Home"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl shadow-lg shadow-cyan-500/25"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-500/50 rounded-xl animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ZionTech Group
                </span>
                <span className="text-xs text-white/60">Future Technology Solutions</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleDropdown(item.name);
                    }
                  }}
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup="true"
                  aria-controls={`dropdown-${item.name}`}
                  className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black ${
                    activeDropdown === item.name
                      ? 'text-cyan-400 bg-white/10 border border-cyan-400/30'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} 
                    aria-hidden="true"
                  />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      id={`dropdown-${item.name}`}
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                      role="menu"
                      aria-label={`${item.name} submenu`}
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                          <p className="text-white/60 text-sm">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 group"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors duration-200">
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                    {child.name}
                                  </p>
                                  {child.featured && (
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                                      Featured
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
                </div>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          onClick={closeAllDropdowns}
                          className="flex items-center space-x-3 p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {child.icon}
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-800/50">
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-800/50 space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-5 h-5" />
                    <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors duration-200">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-5 h-5" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors duration-200">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default UltraFuturisticNavigation2036;