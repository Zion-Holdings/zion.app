import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Zap, Globe, Lock,
  Phone, Mail, ArrowRight, Star, Users, Award,
  Rocket, Brain, Cpu, Database, Cloud,
  ArrowUpRight, Search as SearchIcon, Bell
} from 'lucide-react';
import EnhancedSearch from '../EnhancedSearch';

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  badge?: string;
  isNew?: boolean;
  isPopular?: boolean;
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
        isPopular: true
      },
      {
        label: 'Quantum Computing',
        href: '/quantum-services',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        isNew: true
      },
      {
        label: 'Space Technology',
        href: '/space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space solutions',
        isNew: true
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Lock className="w-4 h-4" />,
        description: 'Enterprise security solutions',
        isPopular: true
      },
      {
        label: 'Cloud Solutions',
        href: '/cloud-platform',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud infrastructure'
      },
      {
        name: 'Observability Platform',
        href: '/services/observability-platform',
        description: 'Unified monitoring and analytics',
        icon: <Eye className="w-4 h-4" />
      },
      {
        label: 'View All Services',
        href: '/services',
        icon: <ArrowRight className="w-4 h-4" />,
        description: 'Complete service portfolio',
        badge: '500+'
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
    label: 'Company',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />,
        description: 'Learn about our mission and team'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Star className="w-4 h-4" />,
        description: 'Join our innovative team',
        badge: '20+'
      },
      {
        label: 'News & Updates',
        href: '/news',
        icon: <Bell className="w-4 h-4" />,
        description: 'Latest company news and insights'
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: <Mail className="w-4 h-4" />,
        description: 'Get in touch with our team'
      }
    ]
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Documentation',
        href: '/docs',
        icon: <Database className="w-4 h-4" />,
        description: 'Technical documentation and guides'
      },
      {
        label: 'Blog',
        href: '/blog',
        icon: <Star className="w-4 h-4" />,
        description: 'Insights and industry trends'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <Award className="w-4 h-4" />,
        description: 'Success stories from our clients'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Globe className="w-4 h-4" />,
        description: 'Educational webinars and events'
      }
    ]
  }
];

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect with throttling for better performance
  useEffect(() => {
    let ticking = false;
    
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  // Handle navigation item click
  const handleNavItemClick = (item: NavigationItem) => {
    if (item.href) {
      router.push(item.href);
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  // Enhanced dropdown animations
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95,
      filter: 'blur(10px)',
      transition: {
        duration: 0.2,
        ease: "easeIn" as const
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {/* Enhanced Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="grid gap-4">
                            {item.children.map((child, index) => (
                              <motion.div
                                key={child.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group/item"
                              >
                                <button
                                  onClick={() => handleNavItemClick(child)}
                                  className="w-full text-left p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group-hover/item:bg-white/10"
                                >
                                  <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 group-hover/item:scale-110 transition-transform duration-300">
                                      {child.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-white font-semibold group-hover/item:text-cyan-400 transition-colors duration-300">
                                          {child.label}
                                        </h3>
                                        {child.badge && (
                                          <span className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full">
                                            {child.badge}
                                          </span>
                                        )}
                                        {child.isNew && (
                                          <span className="px-2 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full">
                                            New
                                          </span>
                                        )}
                                        {child.isPopular && (
                                          <span className="px-2 py-1 text-xs font-medium bg-orange-500/20 text-orange-400 rounded-full">
                                            Popular
                                          </span>
                                        )}
                                      </div>
                                      {child.description && (
                                        <p className="text-sm text-gray-400 group-hover/item:text-gray-300 transition-colors duration-300">
                                          {child.description}
                                        </p>
                                      )}
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/item:text-cyan-400 transition-colors duration-300 opacity-0 group-hover/item:opacity-100" />
                                  </div>
                                </button>
                              </motion.div>
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
            {/* Enhanced Search */}
            <div className="relative" ref={searchRef}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <SearchIcon className="w-5 h-5" />
              </motion.button>

              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4"
                  >
                    <form onSubmit={handleSearch} className="space-y-4">
                      <div className="relative">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search services, solutions..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                          autoFocus
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                      >
                        Search
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-8 mt-2 space-y-2"
                          >
                            {item.children.map((child) => (
                              <button
                                key={child.label}
                                onClick={() => handleNavItemClick(child)}
                                className="flex items-center space-x-3 w-full px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                              >
                                {child.icon}
                                <span>{child.label}</span>
                                {child.badge && (
                                  <span className="ml-auto px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full">
                                    {child.badge}
                                  </span>
                                )}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavItemClick(item)}
                      className="flex items-center space-x-3 w-full px-4 py-3 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Button */}
              <div className="pt-4 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact Us</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default UltraFuturisticNavigation2040;