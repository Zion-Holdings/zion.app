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
  Zap,
  Star,
  Sparkles,
  Globe,
  Cpu,
  Database,
  Eye,
  Heart,
  Infinity,
  TrendingUp,
  Palette,
  Layers,
  Grid,
  BarChart3,
  Settings,
  HelpCircle,
  MessageCircle,
  Calendar,
  Award,
  Lightbulb,
  Play,
  DollarSign,
  GraduationCap,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Define Node type for DOM event handling
type Node = HTMLElement | null;

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
        label: 'AI & Machine Learning',
        href: '/services?category=ai-ml',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
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
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced security and protection',
        neonColor: 'shadow-red-400/50',
        category: 'security'
      },
      {
        label: 'Space Technology',
        href: '/services?category=space',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space solutions',
        neonColor: 'shadow-indigo-400/50',
        category: 'space'
      },
      {
        label: 'Enterprise Solutions',
        href: '/services?category=enterprise',
        icon: <Building className="w-4 h-4" />,
        description: 'Business transformation services',
        neonColor: 'shadow-green-400/50',
        category: 'enterprise'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific solutions',
    neonColor: 'shadow-green-400/50',
    category: 'main'
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge and insights',
    neonColor: 'shadow-yellow-400/50',
    category: 'main',
    children: [
      {
        label: 'White Papers',
        href: '/white-papers',
        icon: <FileText className="w-4 h-4" />,
        description: 'In-depth research and insights'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Expert-led sessions'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Success stories and results'
      }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: <Users className="w-4 h-4" />,
    description: 'Learn about our company',
    neonColor: 'shadow-purple-400/50',
    category: 'main'
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <MessageCircle className="w-4 h-4" />,
    description: 'Get in touch with us',
    neonColor: 'shadow-pink-400/50',
    category: 'main'
  }
];

// Contact information
const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '+1 302 464 0950', href: 'tel:+13024640950' },
  { icon: Mail, label: 'Email Us', value: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
  { icon: MapPin, label: 'Visit Us', value: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
];

// Social media links
const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
  { icon: Youtube, href: 'https://youtube.com/ziontechgroup', label: 'YouTube' }
];

const UltraFuturisticNavigation2045: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Responsive design detection
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [router.asPath]);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveDropdown(null);
    }
  }, [isOpen]);

  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  }, [searchQuery, router]);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        const searchInput = document.getElementById('search-input') as HTMLInputElement;
        if (searchInput) searchInput.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  // Memoize navigation items to prevent unnecessary re-renders
  const memoizedNavigationItems = useMemo(() => navigationItems, []);

  return (
    <>
      {/* Top Contact Bar */}
      <motion.div 
        className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border-b border-cyan-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-cyan-300">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-2 hover:text-cyan-200 transition-colors duration-200"
                  aria-label={`${contact.label}: ${contact.value}`}
                >
                  <contact.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{contact.value}</span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-cyan-400/70">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-200 transition-colors duration-200"
                  aria-label={`Visit our ${social.label} page`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
            : 'bg-black/50 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group" aria-label="Zion Tech Group Home">
              <motion.div
                className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Brain className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-cyan-400/70">Revolutionary Technology</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {memoizedNavigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/20 p-4"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="grid gap-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                          >
                            <div className={`w-10 h-10 bg-gradient-to-r ${child.neonColor || 'from-gray-500 to-slate-500'} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                              {child.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                                  {child.label}
                                </span>
                                {child.featured && (
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                )}
                              </div>
                              {child.description && (
                                <p className="text-sm text-white/70 line-clamp-2">
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={toggleSearch}
                className="p-2 text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* CTA Button */}
              <Link href="/contact">
                <motion.button
                  className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Get started with us"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Get Started</span>
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                aria-label="Toggle mobile menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            ref={searchRef}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-center min-h-screen p-4">
              <motion.div
                className="w-full max-w-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <form onSubmit={handleSearch} className="relative">
                  <input
                    id="search-input"
                    type="text"
                    placeholder="Search for services, solutions, or insights..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 text-lg bg-gray-900/90 border-2 border-cyan-500/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 backdrop-blur-xl"
                    aria-label="Search input"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    aria-label="Submit search"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </form>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors duration-200"
                  aria-label="Close search"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <nav className="space-y-2">
                  {memoizedNavigationItems.map((item) => (
                    <div key={item.label}>
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.label)}
                            className="w-full flex items-center justify-between p-4 text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                            aria-expanded={activeDropdown === item.label}
                          >
                            <span className="flex items-center gap-3">
                              {item.icon}
                              <span>{item.label}</span>
                              {item.badge && (
                                <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </span>
                            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          {activeDropdown === item.label && (
                            <motion.div
                              className="ml-8 mt-2 space-y-2"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="flex items-center gap-3 p-3 text-white/70 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                                >
                                  {child.icon}
                                  <span>{child.label}</span>
                                  {child.featured && (
                                    <Star className="w-4 h-4 text-yellow-400 fill-current ml-auto" />
                                  )}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 p-4 text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full ml-auto">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                  <div className="space-y-3">
                    {contactInfo.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center gap-3 p-3 text-white/70 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                        aria-label={`${contact.label}: ${contact.value}`}
                      >
                        <contact.icon className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="text-sm font-medium text-white">{contact.label}</div>
                          <div className="text-sm text-white/70">{contact.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile Social Links */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-200"
                        aria-label={`Visit our ${social.label} page`}
                      >
                        <social.icon className="w-6 h-6 text-cyan-400" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="p-4 border-t border-white/10">
                <Link href="/contact" className="w-full">
                  <motion.button
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Get started with us"
                  >
                    Get Started Today
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraFuturisticNavigation2045;