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
  Lock,
  Database,
  Cpu,
  BarChart3,
  Lightbulb,
  Award
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileNavigation from './MobileNavigation';

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
        label: 'AI & Machine Learning',
        href: '/services?category=ai-ml',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        featured: true,
        neonColor: 'shadow-purple-400/50',
        category: 'AI Services'
      },
      {
        label: 'Quantum Computing',
        href: '/services?category=quantum',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        neonColor: 'shadow-blue-400/50',
        category: 'Quantum Technology'
      },
      {
        label: 'Space Technology',
        href: '/services?category=space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications',
        featured: true,
        neonColor: 'shadow-pink-400/50',
        category: 'Space Technology'
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced security solutions',
        neonColor: 'shadow-red-400/50',
        category: 'Cybersecurity'
      },
      {
        label: 'Cloud Infrastructure',
        href: '/services?category=cloud',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud solutions',
        neonColor: 'shadow-indigo-400/50',
        category: 'Cloud Services'
      },
      {
        label: 'Edge Computing',
        href: '/services?category=edge',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Distributed computing solutions',
        neonColor: 'shadow-green-400/50',
        category: 'Edge Computing'
      },
      {
        label: 'Data & Analytics',
        href: '/services?category=data',
        icon: <Database className="w-4 h-4" />,
        description: 'Intelligent data solutions',
        neonColor: 'shadow-yellow-400/50',
        category: 'Data Services'
      },
      {
        label: 'Blockchain & Web3',
        href: '/services?category=blockchain',
        icon: <Code className="w-4 h-4" />,
        description: 'Decentralized technology solutions',
        neonColor: 'shadow-orange-400/50',
        category: 'Blockchain'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific solutions',
    neonColor: 'shadow-emerald-400/50',
    children: [
      {
        label: 'Enterprise Solutions',
        href: '/solutions/enterprise',
        icon: <Building className="w-4 h-4" />,
        description: 'Large-scale enterprise solutions',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Healthcare Technology',
        href: '/solutions/healthcare',
        icon: <Users className="w-4 h-4" />,
        description: 'Healthcare innovation solutions',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'Financial Technology',
        href: '/solutions/financial',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Fintech and financial solutions',
        neonColor: 'shadow-emerald-400/50'
      },
      {
        label: 'Manufacturing & IoT',
        href: '/solutions/manufacturing',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Smart manufacturing solutions',
        neonColor: 'shadow-orange-400/50'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge and learning resources',
    neonColor: 'shadow-purple-400/50',
    children: [
      {
        label: 'Documentation',
        href: '/docs',
        icon: <FileText className="w-4 h-4" />,
        description: 'Technical documentation',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Blog & Insights',
        href: '/blog',
        icon: <Lightbulb className="w-4 h-4" />,
        description: 'Latest insights and trends',
        neonColor: 'shadow-yellow-400/50'
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
        icon: <Award className="w-4 h-4" />,
        description: 'Success stories and case studies',
        neonColor: 'shadow-green-400/50'
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
        icon: <Users className="w-4 h-4" />,
        description: 'Our story and mission',
        neonColor: 'shadow-blue-400/50'
      },
      {
        label: 'Leadership',
        href: '/leadership',
        icon: <Star className="w-4 h-4" />,
        description: 'Meet our leadership team',
        neonColor: 'shadow-yellow-400/50'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Users className="w-4 h-4" />,
        description: 'Join our team',
        neonColor: 'shadow-green-400/50'
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: <Phone className="w-4 h-4" />,
        description: 'Get in touch with us',
        neonColor: 'shadow-cyan-400/50'
      }
    ]
  }
];

const UltraFuturisticNavigation2025: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  }, [searchQuery, router]);

  // Handle navigation
  const handleNavigation = useCallback((href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    router.push(href);
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-cyan-400/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Pioneering the Future</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative" ref={(el) => dropdownRefs.current[item.label] = el}>
                  {item.children ? (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 font-medium ${
                        router.pathname === item.href ? 'text-cyan-400' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                            >
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${child.neonColor} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                                {child.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {child.label}
                                  </span>
                                  {child.badge && (
                                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                                      {child.badge}
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
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
                
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 p-4"
                    >
                      <form onSubmit={(e) => { e.preventDefault(); setIsSearchOpen(false); }}>
                        <input
                          ref={searchRef}
                          type="text"
                          placeholder="Search services, solutions..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        />
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNavigation 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <span>•</span>
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition-colors duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition-colors duration-200">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition-colors duration-200">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UltraFuturisticNavigation2025;