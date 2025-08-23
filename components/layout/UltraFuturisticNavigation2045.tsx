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
  Star,
  Globe,
  Cpu,
  Database,
  Eye,
  Heart,
  Infinity
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Define Node type for DOM event handling
type Node = HTMLElement | null;

// Custom icon components
const ShoppingBag = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Share2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
);

const Headphones = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
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
  category?: string;
}

// Enhanced navigation items with more services and better organization
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
        label: 'Enterprise AI Services',
        href: '/services?category=enterprise-ai',
        icon: <Building className="w-4 h-4" />,
        description: 'AI-powered enterprise solutions',
        featured: true,
        neonColor: 'shadow-emerald-400/50',
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
        label: 'Space Technology',
        href: '/services?category=space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications',
        featured: true,
        neonColor: 'shadow-pink-400/50',
        category: 'space'
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced security solutions',
        neonColor: 'shadow-red-400/50',
        category: 'security'
      },
      {
        label: 'Cloud Infrastructure',
        href: '/services?category=cloud',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Scalable cloud solutions',
        neonColor: 'shadow-indigo-400/50',
        category: 'infrastructure'
      },
      {
        label: 'Edge Computing',
        href: '/services?category=edge-computing',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Distributed edge solutions',
        neonColor: 'shadow-teal-400/50',
        category: 'infrastructure'
      },
      {
        label: 'Data Management',
        href: '/services?category=data-management',
        icon: <Database className="w-4 h-4" />,
        description: 'Intelligent data solutions',
        neonColor: 'shadow-cyan-400/50',
        category: 'data'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific technology solutions',
    neonColor: 'shadow-emerald-400/50',
    category: 'main',
    children: [
      {
        label: 'Financial Services',
        href: '/solutions/financial-services',
        icon: <Building className="w-4 h-4" />,
        description: 'AI-powered financial solutions',
        neonColor: 'shadow-green-400/50',
        category: 'industry'
      },
      {
        label: 'Healthcare',
        href: '/solutions/healthcare',
        icon: <Heart className="w-4 h-4" />,
        description: 'Digital health innovations',
        neonColor: 'shadow-red-400/50',
        category: 'industry'
      },
      {
        label: 'Manufacturing',
        href: '/solutions/manufacturing',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Smart manufacturing solutions',
        neonColor: 'shadow-blue-400/50',
        category: 'industry'
      },
      {
        label: 'Retail & E-commerce',
        href: '/solutions/retail-ecommerce',
        icon: <ShoppingBag className="w-4 h-4" />,
        description: 'Digital commerce platforms',
        neonColor: 'shadow-purple-400/50',
        category: 'industry'
      }
    ]
  },
  {
    label: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Sparkles className="w-4 h-4" />,
    description: 'Innovative micro SAAS solutions',
    badge: 'Hot',
    neonColor: 'shadow-yellow-400/50',
    category: 'main',
    children: [
      {
        label: 'Content Creation',
        href: '/services/ai-content-creation-platform-2025',
        icon: <FileText className="w-4 h-4" />,
        description: 'AI-powered content generation',
        neonColor: 'shadow-pink-400/50',
        category: 'saas'
      },
      {
        label: 'Email Marketing',
        href: '/services/intelligent-email-marketing-automation-2025',
        icon: <Mail className="w-4 h-4" />,
        description: 'Intelligent email automation',
        neonColor: 'shadow-blue-400/50',
        category: 'saas'
      },
      {
        label: 'Social Media',
        href: '/services/smart-social-media-management-2025',
        icon: <Share2 className="w-4 h-4" />,
        description: 'Smart social media management',
        neonColor: 'shadow-purple-400/50',
        category: 'saas'
      },
      {
        label: 'Customer Support',
        href: '/services/intelligent-customer-support-platform-2025',
        icon: <Headphones className="w-4 h-4" />,
        description: 'AI-powered customer support',
        neonColor: 'shadow-green-400/50',
        category: 'saas'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge base and learning resources',
    neonColor: 'shadow-orange-400/50',
    category: 'main'
  },
  {
    label: 'About',
    href: '/about',
    icon: <Users className="w-4 h-4" />,
    description: 'Learn about our company and team',
    neonColor: 'shadow-indigo-400/50',
    category: 'main'
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />,
    description: 'Get in touch with our team',
    neonColor: 'shadow-green-400/50',
    category: 'main'
  }
];

export default function UltraFuturisticNavigation2045() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  }, [searchQuery, router]);

  // Handle dropdown toggle
  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!target?.closest('.navigation-dropdown')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Enhanced navigation item renderer
  const renderNavigationItem = useCallback((item: NavigationItem, isMobile = false) => {
    const hasChildren = item.children && item.children.length > 0;
    const isActive = router.pathname === item.href || router.asPath.startsWith(item.href);

    return (
      <div key={item.label} className="relative navigation-dropdown">
        {hasChildren ? (
          <div>
            <button
              onClick={() => toggleDropdown(item.label)}
              className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 group ${
                isActive
                  ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              } ${item.neonColor}`}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.badge && (
                <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg shadow-pink-500/25">
                  {item.badge}
                </span>
              )}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                activeDropdown === item.label ? 'rotate-180' : ''
              }`} />
            </button>

            {/* Enhanced dropdown menu */}
            <AnimatePresence>
              {activeDropdown === item.label && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className={`absolute ${
                    isMobile ? 'relative mt-2' : 'top-full left-0 mt-2'
                  } w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 z-50`}
                >
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`group flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 ${
                            child.featured
                              ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30'
                              : 'hover:bg-gray-800/50'
                          }`}
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          <div className={`p-2 rounded-lg ${
                            child.featured
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                              : 'bg-gray-700 text-gray-300 group-hover:bg-gray-600'
                          } transition-colors duration-300`}>
                            {child.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <p className={`text-sm font-medium ${
                                child.featured ? 'text-white' : 'text-gray-300 group-hover:text-white'
                              } transition-colors duration-300`}>
                                {child.label}
                              </p>
                              {child.featured && (
                                <Star className="w-3 h-3 text-yellow-400" />
                              )}
                            </div>
                            {child.description && (
                              <p className="text-xs text-gray-400 mt-1 line-clamp-2">
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
            </AnimatePresence>
          </div>
        ) : (
          <Link
            href={item.href}
            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 group ${
              isActive
                ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/25'
                : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
            } ${item.neonColor}`}
            onClick={() => setIsOpen(false)}
          >
            {item.icon}
            <span>{item.label}</span>
            {item.badge && (
              <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg shadow-pink-500/25">
                {item.badge}
              </span>
            )}
          </Link>
        )}
      </div>
    );
  }, [activeDropdown, toggleDropdown, router, setIsOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl shadow-black/50' 
        : 'bg-transparent'
    }`}>
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://linkedin.com" className="hover:text-cyan-200 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" className="hover:text-cyan-200 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://github.com" className="hover:text-cyan-200 transition-colors">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">Innovating Tomorrow</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => renderNavigationItem(item))}
          </div>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
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
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                />
              </form>

              {/* Mobile Navigation Items */}
              <div className="space-y-2">
                {navigationItems.map((item) => renderNavigationItem(item, true))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-center rounded-lg shadow-lg shadow-cyan-500/25"
                  onClick={() => setIsOpen(false)}
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
}