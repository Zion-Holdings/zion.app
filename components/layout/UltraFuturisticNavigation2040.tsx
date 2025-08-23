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
  Cpu,
  Star
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
}

// Memoized navigation items for better performance
const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />,
    neonColor: 'shadow-cyan-400/50'
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
        label: 'AI & Consciousness 2045',
        href: '/ai-consciousness-evolution-2045',
        icon: <Brain className="w-4 h-4" />,
        description: 'Next-generation AI consciousness',
        featured: true,
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Quantum Neural Networks 2045',
        href: '/quantum-neural-network-platform-2045',
        icon: <Atom className="w-4 h-4" />,
        description: 'Quantum-powered AI with consciousness',
        featured: true,
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Space Resource Intelligence 2045',
        href: '/space-resource-intelligence-2045',
        icon: <Rocket className="w-4 h-4" />,
        description: 'AI-powered space exploration',
        featured: true,
        neonColor: 'shadow-pink-400/50'
      },
      {
        label: 'Quantum Cybersecurity 2045',
        href: '/quantum-cybersecurity-platform-2045',
        icon: <Shield className="w-4 h-4" />,
        description: 'Quantum-resistant security',
        neonColor: 'shadow-red-400/50'
      },
      {
        label: 'Autonomous Business Intelligence 2045',
        href: '/ai-autonomous-business-intelligence-2045',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Fully autonomous AI business intelligence',
        neonColor: 'shadow-emerald-400/50'
      },
      {
        label: 'Quantum Cloud Infrastructure 2045',
        href: '/quantum-cloud-infrastructure-2045',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Quantum-powered cloud solutions',
        neonColor: 'shadow-indigo-400/50'
      },
      {
        label: 'View All Services',
        href: '/revolutionary-2045-pricing-showcase',
        icon: <Star className="w-4 h-4" />,
        description: 'Complete service catalog',
        neonColor: 'shadow-yellow-400/50'
      }
    ]
  },
  {
    label: 'Revolutionary 2045',
    href: '/revolutionary-2045-pricing-showcase',
    icon: <Star className="w-4 h-4" />,
    description: 'Cutting-edge 2045 technology solutions',
    badge: 'BREAKTHROUGH',
    neonColor: 'shadow-purple-400/50',
    children: [
      {
        label: 'AI Consciousness Evolution',
        href: '/ai-consciousness-evolution-2045',
        icon: <Brain className="w-4 h-4" />,
        description: 'Next-generation AI consciousness',
        featured: true,
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Quantum AI Fusion',
        href: '/quantum-ai-fusion-2045',
        icon: <Atom className="w-4 h-4" />,
        description: 'Quantum computing meets AI consciousness',
        featured: true,
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Space Resource Intelligence',
        href: '/space-resource-intelligence-2045',
        icon: <Rocket className="w-4 h-4" />,
        description: 'AI-powered space exploration',
        neonColor: 'shadow-pink-400/50'
      },
      {
        label: 'Autonomous DevOps Platform',
        href: '/autonomous-devops-platform-2045',
        icon: <Code className="w-4 h-4" />,
        description: 'Fully autonomous DevOps operations',
        neonColor: 'shadow-emerald-400/50'
      },
      {
        label: 'Quantum Network Security',
        href: '/quantum-network-security-2045',
        icon: <Shield className="w-4 h-4" />,
        description: 'Quantum-resistant network security',
        neonColor: 'shadow-red-400/50'
      },
      {
        label: 'View All Revolutionary Services',
        href: '/revolutionary-2045-pricing-showcase',
        icon: <Star className="w-4 h-4" />,
        description: 'Complete revolutionary service catalog',
        neonColor: 'shadow-yellow-400/50'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific technology solutions',
    neonColor: 'shadow-green-400/50',
    children: [
      {
        label: 'Enterprise Solutions',
        href: '/solutions/enterprise',
        icon: <Building className="w-4 h-4" />,
        description: 'Large-scale enterprise solutions',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Startup Solutions',
        href: '/solutions/startup',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Growth-focused startup solutions',
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Government Solutions',
        href: '/solutions/government',
        icon: <Shield className="w-4 h-4" />,
        description: 'Secure government technology',
        neonColor: 'shadow-green-400/50'
      }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: <Users className="w-4 h-4" />,
    description: 'Learn about our company and mission',
    neonColor: 'shadow-yellow-400/50'
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Educational content and tools',
    neonColor: 'shadow-orange-400/50',
    children: [
      {
        label: 'Blog',
        href: '/blog',
        icon: <FileText className="w-4 h-4" />,
        description: 'Latest insights and updates',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Educational webinars and events',
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Documentation',
        href: '/docs',
        icon: <Code className="w-4 h-4" />,
        description: 'Technical documentation',
        neonColor: 'shadow-green-400/50'
      }
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />,
    description: 'Get in touch with our team',
    neonColor: 'shadow-red-400/50'
  }
];

// Memoized social links
const socialLinks = [
  { href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
  { href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
  { href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" />, label: 'GitHub' },
  { href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" />, label: 'YouTube' }
];

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Memoized scroll handler for better performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  // Memoized dropdown toggle handler
  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  // Memoized search handler
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  }, [searchQuery, router]);

  // Memoized navigation close handler
  const closeNavigation = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setIsSearchOpen(false);
  }, []);

  // Memoized click outside handler
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      closeNavigation();
    }
  }, [closeNavigation]);

  // Memoized keyboard navigation handler
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeNavigation();
    }
  }, [closeNavigation]);

  // Effects for scroll, click outside, and keyboard navigation
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleScroll, handleClickOutside, handleKeyDown]);

  // Focus search input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close navigation on route change
  useEffect(() => {
    closeNavigation();
  }, [router.asPath, closeNavigation]);

  // Memoized navigation classes
  const navClasses = useMemo(() => {
    const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
    const scrolledClasses = isScrolled 
      ? "bg-black/90 backdrop-blur-md border-b border-cyan-400/20" 
      : "bg-transparent";
    return `${baseClasses} ${scrolledClasses}`;
  }, [isScrolled]);

  // Memoized logo classes
  const logoClasses = useMemo(() => {
    return isScrolled ? "text-2xl" : "text-3xl";
  }, [isScrolled]);

  return (
    <nav ref={navRef} className={navClasses} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" aria-label="Zion Tech Group Home">
            <motion.div
              className={`font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 ${logoClasses}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion
              </span>
              <span className="text-white">Tech</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    onKeyDown={(e) => e.key === 'Enter' && toggleDropdown(item.label)}
                    className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-lg"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-2 px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-lg"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-2 px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10 z-50"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`${item.label}-button`}
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`group flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                              child.featured ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20' : ''
                            }`}
                            role="menuitem"
                          >
                            <div className={`p-2 rounded-lg bg-gray-800/50 group-hover:bg-cyan-500/20 transition-colors duration-300 ${child.neonColor}`}>
                              {child.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                  {child.label}
                                </span>
                                {child.featured && (
                                  <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full">
                                    Featured
                                  </span>
                                )}
                              </div>
                              {child.description && (
                                <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-lg"
              aria-label="Open search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Social Links */}
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-lg"
                aria-label={`Visit our ${social.label} page`}
              >
                {social.icon}
              </a>
            ))}

            {/* CTA Button */}
            <Link href="/contact">
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contact us"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-lg"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, solutions, or resources..."
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                  aria-label="Search query"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-cyan-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-lg"
                  aria-label="Submit search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-lg"
                          aria-expanded={activeDropdown === item.label}
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon}
                            <span>{item.label}</span>
                            {item.badge && (
                              <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-8 mt-2 space-y-2"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300 rounded-lg"
                                onClick={closeNavigation}
                              >
                                {child.icon}
                                <span>{child.label}</span>
                                {child.featured && (
                                  <span className="ml-auto px-2 py-1 text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full">
                                    Featured
                                  </span>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg"
                        onClick={closeNavigation}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="ml-auto px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-700">
                  <Link href="/contact">
                    <motion.button
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={closeNavigation}
                      aria-label="Contact us"
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2040;