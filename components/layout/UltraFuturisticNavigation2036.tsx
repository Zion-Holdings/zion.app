import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, ArrowRight,
  BookOpen, DollarSign, BarChart3, Users, Star, 
  Building, Play, Calculator,
  Grid, FileText, Code, Video
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
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Space Technology', 
        href: '/space-technology', 
        description: 'Space exploration solutions',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'IT Solutions', 
        href: '/it-services', 
        description: 'Enterprise IT infrastructure',
        icon: <Shield className="w-4 h-4" />
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
        name: '2025 Services',
        href: '/comprehensive-services-showcase-2025',
        description: 'Latest service offerings',
        icon: <Star className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Pricing Plans',
        href: '/pricing',
        description: 'Flexible pricing options',
        icon: <Calculator className="w-4 h-4" />
      },
      {
        name: 'Enterprise Solutions',
        href: '/enterprise-solutions-showcase',
        description: 'Large-scale deployments',
        icon: <Globe className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Star className="w-5 h-5" />,
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
        name: 'Leadership',
        href: '/leadership',
        description: 'Meet our team',
        icon: <Star className="w-4 h-4" />
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our team',
        icon: <Play className="w-4 h-4" />
      }
    ]
  }
];

const UltraFuturisticNavigation2036: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as HTMLElement)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as HTMLElement)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


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
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, solutions, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  aria-label="Search"
                />
              </div>
              
              {/* Search Results */}
              {searchQuery && (
                <div className="mt-4 max-h-96 overflow-y-auto">
                  <div className="grid gap-2">
                    {filteredItems.map((item) => (
                      <div key={item.name} className="p-3 bg-white/5 rounded-lg border border-cyan-400/20">
                        <Link
                          href={normalizeHref(item.href)}
                          className="block text-white hover:text-cyan-400 transition-colors"
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon}
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
          >
            <div className="p-6">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg"></div>
                  <span className="text-white font-bold text-lg">ZionTech Group</span>
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
                <EnhancedSearch 
                  onSearch={(query) => {
                    // Handle search - could navigate to search results page
                    window.location.href = `/services?search=${encodeURIComponent(query)}`;
                  }}
                  onResultSelect={(result) => {
                    // Handle result selection - navigate to the service page
                    window.location.href = result.slug;
                    setMobileMenuOpen(false);
                  }}
                  placeholder="Search services..."
                  showFilters={false}
                />
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
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Contact Us
                  </button>
                </Link>
                <Link href="/get-started" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-3 text-sm font-medium bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          >
            <div className="flex items-center justify-center min-h-screen p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <EnhancedSearch onClose={() => setSearchOpen(false)} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2036;