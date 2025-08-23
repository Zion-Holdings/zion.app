import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
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
  Newspaper,
  CheckCircle
} from 'lucide-react';

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
  color?: string;
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
        children: [
          { label: 'AI Autonomous Services', href: '/services?category=ai-autonomous', icon: <Brain className="w-4 h-4" /> },
          { label: 'AI Automation Solutions', href: '/services?category=ai-automation', icon: <Zap className="w-4 h-4" /> },
          { label: 'Machine Learning Platforms', href: '/services?category=ml-platforms', icon: <Cpu className="w-4 h-4" /> }
        ]
      },
      {
        label: 'IT Infrastructure',
        href: '/services?category=it-infrastructure',
        icon: <Server className="w-4 h-4" />,
        description: 'Scalable infrastructure solutions',
        children: [
          { label: 'Cloud Computing', href: '/services?category=cloud', icon: <Cloud className="w-4 h-4" /> },
          { label: 'DevOps & Automation', href: '/services?category=devops', icon: <Code className="w-4 h-4" /> },
          { label: 'Edge Computing', href: '/services?category=edge', icon: <Network className="w-4 h-4" /> }
        ]
      },
      {
        label: 'Micro SAAS',
        href: '/services?category=micro-saas',
        icon: <Target className="w-4 h-4" />,
        description: 'Innovative software solutions',
        children: [
          { label: 'Business Solutions', href: '/services?category=business', icon: <Building className="w-4 h-4" /> },
          { label: 'Sales & Marketing', href: '/services?category=sales-marketing', icon: <TrendingUp className="w-4 h-4" /> },
          { label: 'HR & Operations', href: '/services?category=hr-operations', icon: <Users className="w-4 h-4" /> }
        ]
      },
      {
        label: 'Quantum Technology',
        href: '/services?category=quantum',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        children: [
          { label: 'Quantum Computing', href: '/services?category=quantum-computing', icon: <Atom className="w-4 h-4" /> },
          { label: 'Quantum Security', href: '/services?category=quantum-security', icon: <Shield className="w-4 h-4" /> },
          { label: 'Quantum AI', href: '/services?category=quantum-ai', icon: <Brain className="w-4 h-4" /> }
        ]
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced security solutions',
        children: [
          { label: 'Zero Trust Security', href: '/services?category=zero-trust', icon: <Lock className="w-4 h-4" /> },
          { label: 'Threat Detection', href: '/services?category=threat-detection', icon: <Eye className="w-4 h-4" /> },
          { label: 'Compliance & Audit', href: '/services?category=compliance', icon: <CheckCircle className="w-4 h-4" /> }
        ]
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    neonColor: 'shadow-green-400/50',
    category: 'main'
  },
  {
    label: 'About',
    href: '/about',
    icon: <Building className="w-4 h-4" />,
    neonColor: 'shadow-purple-400/50',
    category: 'main'
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    category: 'main',
    children: [
      { label: 'Blog', href: '/blog', icon: <Newspaper className="w-4 h-4" /> },
      { label: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4" /> },
      { label: 'White Papers', href: '/white-papers', icon: <FileText className="w-4 h-4" /> },
      { label: 'Webinars', href: '/webinars', icon: <Video className="w-4 h-4" /> },
      { label: 'Training', href: '/training', icon: <GraduationCap className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <MessageCircle className="w-4 h-4" />,
    neonColor: 'shadow-pink-400/50',
    category: 'main'
  }
];

const UltraFuturisticNavigation2045: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
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
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
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
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="text-sm text-gray-400 mb-3 font-medium">
                          {item.description}
                        </div>
                        <div className="space-y-2">
                          {item.children.map((child) => (
                            <div key={child.label}>
                              {child.children ? (
                                <div className="group/sub">
                                  <div className="flex items-center justify-between px-3 py-2 text-gray-300 group-hover/sub:text-white transition-colors duration-200">
                                    <div className="flex items-center space-x-2">
                                      {child.icon}
                                      <span>{child.label}</span>
                                    </div>
                                    <ChevronDown className="w-4 h-4 group-hover/sub:rotate-180 transition-transform duration-200" />
                                  </div>
                                  <div className="ml-4 pl-4 border-l border-gray-700/50 space-y-1">
                                    {child.children.map((subChild) => (
                                      <Link
                                        key={subChild.label}
                                        href={subChild.href}
                                        onClick={closeAllDropdowns}
                                        className="flex items-center space-x-2 px-3 py-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                                      >
                                        {subChild.icon}
                                        <span>{subChild.label}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  href={child.href}
                                  onClick={closeAllDropdowns}
                                  className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                                >
                                  {child.icon}
                                  <span>{child.label}</span>
                                </Link>
                              )}
                            </div>
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
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Contact Button */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-gray-700/50 z-50 lg:hidden"
          >
            <div className="p-6">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Zion Tech</span>
                </div>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-gray-300 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.label)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon}
                            <span>{item.label}</span>
                            {item.badge && (
                              <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-6 mt-2 space-y-2"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={closeAllDropdowns}
                                className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                              >
                                {child.icon}
                                <span>{child.label}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeAllDropdowns}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                      >
                        {item.icon}
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Contact Button */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeAllDropdowns}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-700/50 space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Building className="w-4 h-4" />
                  <span className="text-sm">Middletown, DE</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeAllDropdowns}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
};

export default UltraFuturisticNavigation2045;