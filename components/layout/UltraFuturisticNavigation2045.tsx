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
  ArrowRight,
  Network,
  ShoppingCart,
  Monitor,
  Lock,
  Server,
  Globe2,
  Newspaper
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
          category: 'cloud'
        },
      {
        label: 'Edge Computing',
        href: '/services?category=edge',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Next-generation edge solutions',
        neonColor: 'shadow-green-400/50',
        category: 'edge'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific solutions and use cases',
    neonColor: 'shadow-emerald-400/50',
    category: 'main',
    children: [
      {
        label: 'Enterprise Solutions',
        href: '/solutions/enterprise',
        icon: <Building className="w-4 h-4" />,
        description: 'Large-scale enterprise implementations',
        neonColor: 'shadow-blue-400/50',
        category: 'enterprise'
      },
      {
        label: 'Startup Solutions',
        href: '/solutions/startup',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Scalable solutions for startups',
        neonColor: 'shadow-green-400/50',
        category: 'startup'
      },
      {
        label: 'Government Solutions',
        href: '/solutions/government',
        icon: <Shield className="w-4 h-4" />,
        description: 'Secure government implementations',
        neonColor: 'shadow-purple-400/50',
        category: 'government'
      },
      {
        label: 'Healthcare Solutions',
        href: '/solutions/healthcare',
        icon: <Heart className="w-4 h-4" />,
        description: 'AI-powered healthcare solutions',
        neonColor: 'shadow-red-400/50',
        category: 'healthcare'
      },
      {
        label: 'Financial Solutions',
        href: '/solutions/financial',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Fintech and financial services',
        neonColor: 'shadow-yellow-400/50',
        category: 'financial'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge base and learning resources',
    neonColor: 'shadow-orange-400/50',
    category: 'main',
    children: [
      {
        label: 'Documentation',
        href: '/resources/documentation',
        icon: <FileText className="w-4 h-4" />,
        description: 'Technical documentation and guides',
        neonColor: 'shadow-blue-400/50',
        category: 'docs'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Live and recorded webinars',
        neonColor: 'shadow-purple-400/50',
        category: 'webinars'
      },
      {
        label: 'Case Studies',
        href: '/resources/case-studies',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Success stories and implementations',
        neonColor: 'shadow-green-400/50',
        category: 'case-studies'
      },
      {
        label: 'API Reference',
        href: '/resources/api',
        icon: <Code className="w-4 h-4" />,
        description: 'Developer API documentation',
        neonColor: 'shadow-indigo-400/50',
        category: 'api'
      },
      {
        label: 'Training',
        href: '/training',
        icon: <GraduationCap className="w-4 h-4" />,
        description: 'Training programs and certifications',
        neonColor: 'shadow-yellow-400/50',
        category: 'training'
      }
    ]
  },
  {
    label: 'Company',
    href: '/company',
    icon: <Building className="w-4 h-4" />,
    description: 'About Zion Tech Group',
    neonColor: 'shadow-cyan-400/50',
    category: 'main',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />,
        description: 'Our story and mission',
        neonColor: 'shadow-blue-400/50',
        category: 'about'
      },
      {
        label: 'Mission',
        href: '/mission',
        icon: <Target className="w-4 h-4" />,
        description: 'Our vision and goals',
        neonColor: 'shadow-green-400/50',
        category: 'mission'
      },
      {
        label: 'Team',
        href: '/team',
        icon: <Users className="w-4 h-4" />,
        description: 'Meet our team',
        neonColor: 'shadow-purple-400/50',
        category: 'team'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Award className="w-4 h-4" />,
        description: 'Join our team',
        neonColor: 'shadow-orange-400/50',
        category: 'careers'
      },
      {
        label: 'News',
        href: '/news',
        icon: <FileText className="w-4 h-4" />,
        description: 'Latest company news',
        neonColor: 'shadow-indigo-400/50',
        category: 'news'
      }
    ]
  },
  {
    label: 'Support',
    href: '/support',
    icon: <HelpCircle className="w-4 h-4" />,
    description: 'Get help and support',
    neonColor: 'shadow-red-400/50',
    category: 'main',
    children: [
      {
        label: 'Help Center',
        href: '/support/help',
        icon: <HelpCircle className="w-4 h-4" />,
        description: 'Self-service help and guides',
        neonColor: 'shadow-blue-400/50',
        category: 'help'
      },
      {
        label: 'Contact Us',
        href: '/contact',
        icon: <MessageCircle className="w-4 h-4" />,
        description: 'Get in touch with our team',
        neonColor: 'shadow-green-400/50',
        category: 'contact'
      },
      {
        label: 'Status',
        href: '/status',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Service status and uptime',
        neonColor: 'shadow-orange-400/50',
        category: 'status'
      },
      {
        label: 'Support Portal',
        href: '/support/portal',
        icon: <Settings className="w-4 h-4" />,
        description: 'Customer support portal',
        neonColor: 'shadow-purple-400/50',
        category: 'portal'
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    badge: '2045',
    category: 'company',
    color: 'from-gray-500 to-slate-500',
    children: [
      { 
        name: 'About Us', 
        href: '/about', 
        description: 'Learn about our mission and values',
        icon: <Users className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Our Team', 
        href: '/team', 
        description: 'Meet our leadership team',
        icon: <Users className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our innovative team',
        icon: <Briefcase className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'News & Blog', 
        href: '/blog', 
        description: 'Latest insights and updates',
        icon: <Newspaper className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories from our clients',
        icon: <FileText className="w-4 h-4" />,
        color: 'from-orange-500 to-red-500'
      }
    ]
  }
];

// Quick action buttons
const quickActions = [
  {
    label: 'Get Started',
    href: '/get-started',
    icon: <Zap className="w-4 h-4" />,
    variant: 'primary' as const
  },
  {
    label: 'Demo',
    href: '/demo',
    icon: <Play className="w-4 h-4" />,
    variant: 'secondary' as const
  },
  {
    label: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-4 h-4" />,
    variant: 'outline' as const
  }
];

interface UltraFuturisticNavigation2045Props {
  className?: string;
}

const UltraFuturisticNavigation2045: React.FC<UltraFuturisticNavigation2045Props> = ({ 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // Handle click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
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
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [router]);

  // Toggle dropdown
  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  // Close all dropdowns
  const closeAllDropdowns = useCallback(() => {
    setActiveDropdown(null);
    setIsSearchOpen(false);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAllDropdowns();
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeAllDropdowns]);

  // Navigation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const }
    }
  };

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
    <>
      {/* Futuristic Navigation Bar */}
      <motion.nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
          ${isScrolled 
            ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
            : 'bg-black/80 backdrop-blur-lg border-b border-transparent'
          }
          ${className}
        `}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo and Brand */}
            <motion.div 
              className="flex items-center space-x-4"
              variants={itemVariants}
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Zion Tech
                  </h1>
                  <p className="text-xs text-gray-400 font-mono">Group</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div 
              className="hidden lg:flex items-center space-x-1"
              variants={itemVariants}
            >
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  <button
                    onClick={() => item.children ? toggleDropdown(item.label) : handleNavItemClick(item.href)}
                    className={`
                      flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                      ${router.pathname === item.href 
                        ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }
                      group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-400/25
                    `}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full animate-pulse">
                        {item.badge}
                      </span>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className={`
                                    flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group
                                    ${child.featured 
                                      ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20' 
                                      : 'hover:bg-white/5'
                                    }
                                    hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25
                                  `}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className={`p-2 rounded-lg ${child.featured ? 'bg-gradient-to-r from-cyan-500 to-purple-600' : 'bg-gray-700/50'}`}>
                                    {child.icon}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2">
                                      <span className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                        {child.label}
                                      </span>
                                      {child.featured && (
                                        <Star className="w-4 h-4 text-yellow-400" />
                                      )}
                                    </div>
                                    {child.description && (
                                      <p className="text-sm text-gray-400 mt-1">
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
                  )}
                </div>
              ))}
            </motion.div>

            {/* Right Side Actions */}
            <motion.div 
              className="flex items-center space-x-3"
              variants={itemVariants}
            >
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Quick Action Buttons */}
              <div className="hidden md:flex items-center space-x-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className={`
                      flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                      ${action.variant === 'primary' 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25' 
                        : action.variant === 'secondary'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25'
                        : 'border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:scale-105'
                      }
                    `}
                  >
                    {action.icon}
                    <span>{action.label}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              ref={searchRef}
              className="border-t border-cyan-500/20 bg-black/95 backdrop-blur-xl"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services, solutions, resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                    autoFocus
                  />
                  <button
                    onClick={() => handleSearch(searchQuery)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Search
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Content */}
            <motion.div
              className="absolute top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl shadow-cyan-500/20"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
                  <h2 className="text-xl font-bold text-white">Menu</h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-4">
                    {navigationItems.map((item) => (
                      <div key={item.label}>
                        <button
                          onClick={() => item.children ? toggleDropdown(item.label) : handleNavItemClick(item.href)}
                          className={`
                            w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-300
                            ${router.pathname === item.href 
                              ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20' 
                              : 'text-gray-300 hover:text-white hover:bg-white/5'
                            }
                          `}
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                          </div>
                          {item.children && (
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                          )}
                        </button>

                        {/* Mobile Dropdown */}
                        {item.children && activeDropdown === item.label && (
                          <motion.div
                            className="mt-2 ml-6 space-y-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className={`
                                  block p-3 rounded-lg transition-all duration-300
                                  ${child.featured 
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20' 
                                    : 'hover:bg-white/5'
                                  }
                                `}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`p-2 rounded-lg ${child.featured ? 'bg-gradient-to-r from-cyan-500 to-purple-600' : 'bg-gray-700/50'}`}>
                                    {child.icon}
                                  </div>
                                  <div>
                                    <div className="flex items-center space-x-2">
                                      <span className="font-medium text-white">
                                        {child.label}
                                      </span>
                                      {child.featured && (
                                        <Star className="w-4 h-4 text-yellow-400" />
                                      )}
                                    </div>
                                    {child.description && (
                                      <p className="text-sm text-gray-400 mt-1">
                                        {child.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Mobile Quick Actions */}
                  <div className="mt-8 pt-6 border-t border-cyan-500/20">
                    <div className="space-y-3">
                      {quickActions.map((action) => (
                        <Link
                          key={action.label}
                          href={action.href}
                          className={`
                            flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                            ${action.variant === 'primary' 
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700' 
                              : action.variant === 'secondary'
                              ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                              : 'border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50'
                            }
                          `}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {action.icon}
                          <span>{action.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
};

export default UltraFuturisticNavigation2045;