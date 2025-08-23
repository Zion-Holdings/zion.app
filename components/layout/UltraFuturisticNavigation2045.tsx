import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  BarChart3,
  Cpu
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Define Node type for DOM event handling
type Node = HTMLElement | null;

// Add missing icon components
const ShoppingCart = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01M9 9h.01M15 9h.01" />
  </svg>
);

const Handshake = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
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
}

// Enhanced navigation items for 2045
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
        label: 'AI & Consciousness',
        href: '/services?category=ai-consciousness',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI consciousness solutions',
        featured: true,
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Quantum Technology',
        href: '/services?category=quantum',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Space Technology',
        href: '/services?category=space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications',
        featured: true,
        neonColor: 'shadow-pink-400/50'
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced security solutions',
        neonColor: 'shadow-red-400/50'
      },
      {
        label: 'Cloud Infrastructure',
        href: '/services?category=cloud',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud solutions',
        neonColor: 'shadow-indigo-400/50'
      },
      {
        label: 'Business Intelligence',
        href: '/services?category=business-intelligence',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'AI-powered business insights',
        neonColor: 'shadow-emerald-400/50'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific solutions',
    neonColor: 'shadow-green-400/50',
    children: [
      {
        label: 'Healthcare',
        href: '/healthcare-solutions',
        icon: <Users className="w-4 h-4" />,
        description: 'AI-powered healthcare solutions',
        neonColor: 'shadow-red-400/50'
      },
      {
        label: 'Financial Services',
        href: '/financial-solutions',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Fintech and banking solutions',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'Manufacturing',
        href: '/manufacturing-solutions',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Smart manufacturing solutions',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Retail & E-commerce',
        href: '/retail-solutions',
        icon: <ShoppingCart className="w-4 h-4" />,
        description: 'Digital retail transformation',
        neonColor: 'shadow-purple-400/50'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge and insights',
    neonColor: 'shadow-yellow-400/50',
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
        description: 'Educational webinars',
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <Target className="w-4 h-4" />,
        description: 'Success stories',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'Documentation',
        href: '/docs',
        icon: <Code className="w-4 h-4" />,
        description: 'Technical documentation',
        neonColor: 'shadow-indigo-400/50'
      }
    ]
  },
  {
    label: 'Company',
    href: '/about',
    icon: <Building className="w-4 h-4" />,
    description: 'About Zion Tech Group',
    neonColor: 'shadow-gray-400/50',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Building className="w-4 h-4" />,
        description: 'Our story and mission',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Users className="w-4 h-4" />,
        description: 'Join our team',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'Partners',
        href: '/partners',
        icon: <Handshake className="w-4 h-4" />,
        description: 'Strategic partnerships',
        neonColor: 'shadow-purple-400/50'
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: <Phone className="w-4 h-4" />,
        description: 'Get in touch',
        neonColor: 'shadow-cyan-400/50'
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

  // Handle search click outside
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
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  }, [searchQuery, router]);



  // Toggle dropdown
  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  // Close all dropdowns
  const closeAllDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6 text-white/80">
              <a href="tel:+13024640950" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span>+1 302 464 0950</span>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-white/60 font-medium">Revolutionary Technology 2045</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-2 px-4 py-2 text-white/90 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                  >
                    <span className="font-medium">{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 text-white/90 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-cyan-500/10 p-4"
                    onMouseLeave={closeAllDropdowns}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${child.neonColor} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-200`}>
                            {child.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                {child.label}
                              </span>
                              {child.featured && (
                                <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            {child.description && (
                              <p className="text-sm text-white/60 mt-1 group-hover:text-white/80 transition-colors duration-200">
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
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-cyan-500/10 p-4"
                  >
                    <form onSubmit={handleSearch} className="space-y-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search services, solutions..."
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-200"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                      >
                        Search
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services, solutions..."
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                >
                  Search
                </button>
              </form>

              {/* Mobile Menu Items */}
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-white/90 hover:text-white transition-colors duration-200"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2 text-white/70 hover:text-white transition-colors duration-200"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-white/90 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2045;