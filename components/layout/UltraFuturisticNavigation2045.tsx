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
  Sparkles,
  Zap,
  Globe,
  Star,
  Heart,
  Infinity,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Define Node type for DOM event handling
type Node = HTMLElement | null;

// Add missing icons
const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const GraduationCap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const Handshake = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
  </svg>
);

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  featured?: boolean;
  neonColor?: string;
  color?: string;
}

// Memoized navigation items for better performance
const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />,
    neonColor: 'shadow-cyan-400/50',
    color: 'from-cyan-400 to-blue-400'
  },
  {
    label: 'Services',
    href: '/services',
    icon: <Briefcase className="w-4 h-4" />,
    description: 'Explore our comprehensive technology solutions',
    badge: 'New',
    neonColor: 'shadow-blue-400/50',
    color: 'from-blue-400 to-indigo-400',
    children: [
      {
        label: 'AI & Consciousness',
        href: '/services?category=ai-consciousness',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI consciousness solutions',
        featured: true,
        neonColor: 'shadow-purple-400/50',
        color: 'from-purple-400 to-pink-400'
      },
      {
        label: 'Quantum Technology',
        href: '/services?category=quantum',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        neonColor: 'shadow-blue-400/50',
        color: 'from-blue-400 to-cyan-400'
      },
      {
        label: 'Space Technology',
        href: '/services?category=space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications',
        featured: true,
        neonColor: 'shadow-pink-400/50',
        color: 'from-pink-400 to-red-400'
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced security solutions',
        neonColor: 'shadow-red-400/50',
        color: 'from-red-400 to-orange-400'
      },
      {
        label: 'Cloud Infrastructure',
        href: '/services?category=cloud',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud solutions',
        neonColor: 'shadow-indigo-400/50',
        color: 'from-indigo-400 to-purple-400'
      },
      {
        label: 'Business Intelligence',
        href: '/services?category=business-intelligence',
        icon: <Target className="w-4 h-4" />,
        description: 'AI-powered business insights',
        neonColor: 'shadow-emerald-400/50',
        color: 'from-emerald-400 to-teal-400'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific technology solutions',
    neonColor: 'shadow-emerald-400/50',
    color: 'from-emerald-400 to-teal-400',
    children: [
      {
        label: 'Healthcare & Biotech',
        href: '/healthcare-ai-solutions',
        icon: <Heart className="w-4 h-4" />,
        description: 'AI-powered healthcare solutions',
        neonColor: 'shadow-red-400/50',
        color: 'from-red-400 to-pink-400'
      },
      {
        label: 'Financial Services',
        href: '/financial-solutions',
        icon: <DollarSign className="w-4 h-4" />,
        description: 'Fintech and banking solutions',
        neonColor: 'shadow-green-400/50',
        color: 'from-green-400 to-emerald-400'
      },
      {
        label: 'Manufacturing',
        href: '/manufacturing-ai-solutions',
        icon: <Building className="w-4 h-4" />,
        description: 'Smart manufacturing solutions',
        neonColor: 'shadow-blue-400/50',
        color: 'from-blue-400 to-indigo-400'
      },
      {
        label: 'Retail & E-commerce',
        href: '/retail-technology-solutions',
        icon: <ShoppingCart className="w-4 h-4" />,
        description: 'Digital retail transformation',
        neonColor: 'shadow-purple-400/50',
        color: 'from-purple-400 to-pink-400'
      },
      {
        label: 'Education',
        href: '/education-technology-solutions',
        icon: <GraduationCap className="w-4 h-4" />,
        description: 'EdTech and learning solutions',
        neonColor: 'shadow-indigo-400/50',
        color: 'from-indigo-400 to-purple-400'
      },
      {
        label: 'Government',
        href: '/government-technology-solutions',
        icon: <Building className="w-4 h-4" />,
        description: 'Public sector technology',
        neonColor: 'shadow-gray-400/50',
        color: 'from-gray-400 to-blue-400'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge base and documentation',
    neonColor: 'shadow-yellow-400/50',
    color: 'from-yellow-400 to-orange-400',
    children: [
      {
        label: 'Documentation',
        href: '/docs',
        icon: <FileText className="w-4 h-4" />,
        description: 'Technical documentation',
        neonColor: 'shadow-blue-400/50',
        color: 'from-blue-400 to-indigo-400'
      },
      {
        label: 'API Reference',
        href: '/api-docs',
        icon: <Code className="w-4 h-4" />,
        description: 'API documentation and guides',
        neonColor: 'shadow-green-400/50',
        color: 'from-green-400 to-emerald-400'
      },
      {
        label: 'Video Tutorials',
        href: '/video-tutorials',
        icon: <Video className="w-4 h-4" />,
        description: 'Step-by-step video guides',
        neonColor: 'shadow-red-400/50',
        color: 'from-red-400 to-pink-400'
      },
      {
        label: 'Blog',
        href: '/blog',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'Latest insights and updates',
        neonColor: 'shadow-purple-400/50',
        color: 'from-purple-400 to-pink-400'
      }
    ]
  },
  {
    label: 'Company',
    href: '/about',
    icon: <Building className="w-4 h-4" />,
    description: 'About Zion Tech Group',
    neonColor: 'shadow-gray-400/50',
    color: 'from-gray-400 to-blue-400',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />,
        description: 'Our story and mission',
        neonColor: 'shadow-blue-400/50',
        color: 'from-blue-400 to-indigo-400'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Briefcase className="w-4 h-4" />,
        description: 'Join our team',
        neonColor: 'shadow-green-400/50',
        color: 'from-green-400 to-emerald-400'
      },
      {
        label: 'Partners',
        href: '/partners',
        icon: <Handshake className="w-4 h-4" />,
        description: 'Partnership opportunities',
        neonColor: 'shadow-purple-400/50',
        color: 'from-purple-400 to-pink-400'
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: <Phone className="w-4 h-4" />,
        description: 'Get in touch with us',
        neonColor: 'shadow-cyan-400/50',
        color: 'from-cyan-400 to-blue-400'
      }
    ]
  }
];

const UltraFuturisticNavigation2045: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
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
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search
  const handleSearch = useCallback((query: string) => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  }, [router]);

  // Handle navigation item click
  const handleNavItemClick = useCallback((href: string) => {
    router.push(href);
    setIsOpen(false);
    setActiveDropdown(null);
  }, [router]);

  // Toggle dropdown
  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  return (
    <>
      {/* Enhanced Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">
                    Revolutionary 2045
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {item.children ? (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center space-x-2 px-4 py-2 text-white/80 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-cyan-400 to-purple-400 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 px-4 py-2 text-white/80 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )}

                  {/* Enhanced Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/25 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.children.map((child, childIndex) => (
                            <motion.div
                              key={child.label}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: childIndex * 0.05 }}
                            >
                              <Link
                                href={child.href}
                                className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${child.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                  {child.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                      {child.label}
                                    </p>
                                    {child.featured && (
                                      <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-white/60 mt-1 line-clamp-2">
                                    {child.description}
                                  </p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-cyan-400 transition-colors" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
                ref={searchRef}
              >
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-white/80 hover:text-white transition-colors duration-200 hover:bg-white/5 rounded-lg"
                >
                  <Search className="w-5 h-5" />
                </button>

                {/* Enhanced Search Dropdown */}
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/25 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search services, solutions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors"
                            autoFocus
                          />
                          <button
                            onClick={() => handleSearch(searchQuery)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-white/60 hover:text-cyan-400 transition-colors"
                          >
                            <Search className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="hidden sm:block"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 transform hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact</span>
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-white/80 hover:text-white transition-colors duration-200 hover:bg-white/5 rounded-lg"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-black/95 backdrop-blur-xl border-l border-cyan-400/20 shadow-2xl shadow-cyan-500/25"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-white">Menu</span>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-white/60 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-4">
                    {navigationItems.map((item) => (
                      <div key={item.label}>
                        {item.children ? (
                          <div>
                            <button
                              onClick={() => toggleDropdown(item.label)}
                              className="flex items-center justify-between w-full p-3 text-left text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                            >
                              <div className="flex items-center space-x-3">
                                {item.icon}
                                <span className="font-medium">{item.label}</span>
                              </div>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.label ? 'rotate-180' : ''
                              }`} />
                            </button>
                            
                            <AnimatePresence>
                              {activeDropdown === item.label && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-6 mt-2 space-y-2"
                                >
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      onClick={closeMobileMenu}
                                      className="flex items-center space-x-3 p-3 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                                    >
                                      {child.icon}
                                      <span className="text-sm">{child.label}</span>
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="flex items-center space-x-3 p-3 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                          >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-white/10">
                  <div className="space-y-4">
                    <Link
                      href="/contact"
                      onClick={closeMobileMenu}
                      className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Contact Us</span>
                    </Link>
                    
                    <div className="text-center text-white/60 text-sm">
                      <p>Ready to transform your business?</p>
                      <p className="text-cyan-400 font-medium">Get started today!</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraFuturisticNavigation2045;