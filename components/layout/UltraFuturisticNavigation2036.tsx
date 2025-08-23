import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, ArrowRight,
  Brain, Rocket, Target, Atom, BookOpen,
  DollarSign, BarChart3, Users, Star, 
  Cpu, Building, Play, Calculator,
  Grid, FileText, Code, Video
} from 'lucide-react';
import Link from 'next/link';

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

// Custom Handshake icon component
const Handshake = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const navigationItems: NavigationItem[] = [
  {
    name: 'Services',
    href: '/services',
    icon: <Play className="w-5 h-5" />,
    description: 'Complete technology solutions',
    badge: 'Main',
    category: 'services',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Calculator className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI & Consciousness', 
        href: '/ai-services', 
        description: 'Advanced AI consciousness solutions',
        icon: <Brain className="w-4 h-4" />
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <Atom className="w-4 h-4" />
      },
      { 
        name: 'Autonomous Systems', 
        href: '/autonomous-systems', 
        description: 'Self-operating intelligent systems',
        icon: <Cpu className="w-4 h-4" />
      },
      { 
        name: 'Micro SAAS', 
        href: '/micro-saas', 
        description: 'Specialized business solutions',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'Enterprise IT', 
        href: '/enterprise-it', 
        description: 'Corporate infrastructure solutions',
        icon: <Building className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Showcase & Pricing',
    href: '/showcase',
    icon: <Star className="w-5 h-5" />,
    description: 'Service demonstrations and pricing',
    category: 'showcase',
    children: [
      { 
        name: '2025 Services Showcase', 
        href: '/services', 
        description: 'Current service portfolio',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Pricing Plans', 
        href: '/pricing', 
        description: 'Transparent pricing structure',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories and results',
        icon: <BarChart3 className="w-4 h-4" />
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
        icon: <FileText className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Documentation', 
        href: '/docs', 
        description: 'Technical documentation',
        icon: <Code className="w-4 h-4" />
      },
      { 
        name: 'Webinars', 
        href: '/webinars', 
        description: 'Educational sessions',
        icon: <Video className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    category: 'company',
    children: [
      { 
        name: 'About Us', 
        href: '/about', 
        description: 'Our story and mission',
        icon: <Users className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Target className="w-4 h-4" />
      },
      { 
        name: 'Partners', 
        href: '/partners', 
        description: 'Strategic partnerships',
        icon: <Handshake className="w-4 h-4" />
      }
    ]
  }
];

const UltraFuturisticNavigation2036: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Handle scroll effect for navigation styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(event.target as HTMLElement)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent, itemName: string) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (navigationItems.find(item => item.name === itemName)?.children) {
          setActiveDropdown(activeDropdown === itemName ? null : itemName);
        }
        break;
      case 'Escape':
        setActiveDropdown(null);
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (navigationItems.find(item => item.name === itemName)?.children) {
          setActiveDropdown(itemName);
        }
        break;
    }
  }, [activeDropdown]);

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
    }
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              aria-label="Zion Tech Group - Home"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative" ref={(el) => {
                dropdownRefs.current[item.name] = el;
              }}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  onKeyDown={(e) => handleKeyDown(e, item.name)}
                  className={`group flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeDropdown === item.name
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup={!!item.children}
                  aria-label={`${item.name} menu`}
                >
                  {item.icon && <span className="w-4 h-4" aria-hidden="true">{item.icon}</span>}
                  <span>{item.name}</span>
                  {item.children && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                      aria-hidden="true"
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby={`${item.name}-button`}
                      >
                        <div className="p-4">
                          <div className="grid gap-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={normalizeHref(child.href)}
                                className={`group flex items-start space-x-3 p-3 rounded-lg transition-all duration-200 ${
                                  child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30'
                                    : 'hover:bg-white/5'
                                }`}
                                role="menuitem"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {child.icon && (
                                  <span className="w-5 h-5 text-cyan-400 mt-0.5" aria-hidden="true">
                                    {child.icon}
                                  </span>
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <p className={`text-sm font-medium ${
                                      child.featured ? 'text-cyan-400' : 'text-white'
                                    }`}>
                                      {child.name}
                                    </p>
                                    {child.featured && (
                                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
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
                                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" aria-hidden="true" />
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

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link href="/contact">
              <button className="px-4 py-2 text-sm font-medium text-cyan-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black">
                Contact
              </button>
            </Link>
            <Link href="/get-started">
              <button className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="w-full flex items-center justify-between p-3 text-left text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup={!!item.children}
                  >
                    <span className="flex items-center space-x-3">
                      {item.icon && <span className="w-5 h-5 text-cyan-400" aria-hidden="true">{item.icon}</span>}
                      <span className="font-medium">{item.name}</span>
                    </span>
                    {item.children && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-6 mt-2 space-y-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          className="block p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="flex items-center space-x-3">
                            {child.icon && (
                              <span className="w-4 h-4 text-cyan-400" aria-hidden="true">
                                {child.icon}
                              </span>
                            )}
                            <span>{child.name}</span>
                          </div>
                          {child.description && (
                            <p className="text-sm text-gray-500 mt-1 ml-7">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Link href="/contact" className="block">
                  <button className="w-full px-4 py-3 text-sm font-medium text-cyan-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-center">
                    Contact Us
                  </button>
                </Link>
                <Link href="/get-started" className="block">
                  <button className="w-full px-4 py-3 text-sm font-medium bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 text-center">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2036;