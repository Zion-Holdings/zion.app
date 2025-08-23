import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, ArrowRight,
  BookOpen, DollarSign, BarChart3, Users, Star, 
  Building, Play, Calculator,
  Grid, FileText, Code, Video
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
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

interface UltraFuturisticNavigation2036Props {
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

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
        icon: <Play className="w-4 h-4" />
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <Play className="w-4 h-4" />
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
      },
      { 
        name: 'Space Technology', 
        href: '/space-technology', 
        description: 'Space exploration solutions',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'Cybersecurity', 
        href: '/cybersecurity', 
        description: 'Advanced security solutions',
        icon: <Shield className="w-4 h-4" />
      },
      { 
        name: 'IT Solutions', 
        href: '/it-services', 
        description: 'Enterprise IT infrastructure',
        icon: <Shield className="w-4 h-4" />
      },
      { 
        name: 'Healthcare AI', 
        href: '/healthcare-ai-solutions', 
        description: 'AI-powered healthcare',
        icon: <Heart className="w-4 h-4" />
      },
      { 
        name: 'Financial Technology', 
        href: '/fintech-solutions', 
        description: 'Fintech and banking solutions',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Supply Chain AI', 
        href: '/supply-chain-ai', 
        description: 'AI-powered logistics',
        icon: <Truck className="w-4 h-4" />
      },
      { 
        name: 'Environmental Tech', 
        href: '/environmental-technology', 
        description: 'Green technology solutions',
        icon: <Cloud className="w-4 h-4" />
      },
      { 
        name: 'Education AI', 
        href: '/education-ai', 
        description: 'AI-powered education',
        icon: <GraduationCap className="w-4 h-4" />
      },
      { 
        name: 'Micro SAAS', 
        href: '/micro-saas', 
        description: 'Innovative micro SAAS solutions',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Specialized Solutions', 
        href: '/solutions', 
        description: 'Industry-specific solutions',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Innovative 2025 Services', 
        href: '/innovative-2025-services-showcase', 
        description: 'Cutting-edge 2025 innovations',
        icon: <Star className="w-4 h-4" />,
        featured: true,
        badge: 'New'
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
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
        icon: <Users className="w-4 h-4" />,
        featured: true
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
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
        icon: <Play className="w-4 h-4" />
      }
    ]
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
  }
];

export default function UltraFuturisticNavigation2036({ onMenuToggle, isMenuOpen }: UltraFuturisticNavigation2036Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60

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
      if (activeDropdown && !navRef.current?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Enhanced dropdown animation variants
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              aria-label="Zion Tech Group - Home"
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
            >
              <Rocket className="w-8 h-8 text-cyan-400" />
              <span>Zion Tech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeDropdown === item.name
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="ml-2 px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="p-4">
                          <div className="grid gap-2">
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={normalizeHref(child.href)}
                                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                                  child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30'
                                    : 'hover:bg-white/5'
                                }`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {child.icon}
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <span className="font-medium text-white">{child.name}</span>
                                    {child.featured && (
                                      <Star className="w-4 h-4 text-cyan-400" />
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-400 mt-1">{child.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white hover:text-cyan-400 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="mb-6">
                <EnhancedSearch />
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      className="w-full flex items-center justify-between p-3 text-left text-white hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      aria-expanded={activeDropdown === item.name}
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-2 space-y-2 overflow-hidden"
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.icon}
                              <span className="text-sm">{child.name}</span>
                              {child.featured && (
                                <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                  Featured
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Contact Us
                  </button>
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
                </Link>
                <Link
                  href="/quote"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 text-gray-300 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
                >
                  <DollarSign className="w-4 h-4" />
                  <span>Get Quote</span>
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
                  </button>
                </Link>
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraFuturisticNavigation2036;