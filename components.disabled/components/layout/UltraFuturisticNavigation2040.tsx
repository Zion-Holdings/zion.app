import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  ChevronDown, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Brain, 
  Rocket, 
  Shield, 
  Atom, 
  BookOpen,
  DollarSign, 
  BarChart3, 
  Star, 
  Sparkles, 
  Grid, 
  Globe, 
  Cpu, 
  Database, 
  Cloud, 
  Palette,
  HelpCircle, 
  FileText, 
  Video, 
  Building, 
  MessageCircle,
  Zap, 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  Lock, 
  Clock, 
  Calendar,
  Search,
  Sun,
  Moon,
  Heart,
  Code
} from 'lucide-react';

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
  color?: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Comprehensive technology solutions',
    badge: 'New',
    category: 'services',
    color: 'from-emerald-500 to-cyan-500',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI & Machine Learning', 
        href: '/services#ai', 
        description: 'Advanced AI solutions',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Cloud Infrastructure', 
        href: '/services#cloud', 
        description: 'Scalable cloud solutions',
        icon: <Cloud className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'Cybersecurity', 
        href: '/services#security', 
        description: 'Enterprise security solutions',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Digital Transformation', 
        href: '/services#digital', 
        description: 'Business transformation services',
        icon: <Zap className="w-4 h-4" />,
        color: 'from-pink-500 to-purple-500'
      },
      { 
        name: 'Web Development', 
        href: '/services#web', 
        description: 'Modern web applications',
        icon: <Globe className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    category: 'solutions',
    color: 'from-blue-500 to-indigo-500',
    children: [
      { 
        name: 'Enterprise Solutions', 
        href: '/solutions#enterprise', 
        description: 'Large-scale enterprise solutions',
        icon: <Building className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Startup Solutions', 
        href: '/solutions#startup', 
        description: 'Growth-focused startup solutions',
        icon: <Rocket className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Healthcare Technology', 
        href: '/solutions#healthcare', 
        description: 'Healthcare innovation solutions',
        icon: <Heart className="w-4 h-4" />,
        color: 'from-red-500 to-pink-500'
      },
      { 
        name: 'Financial Technology', 
        href: '/solutions#fintech', 
        description: 'Fintech innovation solutions',
        icon: <DollarSign className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Users className="w-5 h-5" />,
    description: 'About our company',
    category: 'company',
    color: 'from-purple-500 to-pink-500',
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
        href: '/about#leadership', 
        description: 'Meet our leadership team',
        icon: <Award className="w-4 h-4" />
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Target className="w-4 h-4" />
      },
      { 
        name: 'News & Blog', 
        href: '/blog', 
        description: 'Latest insights and updates',
        icon: <FileText className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Helpful resources and tools',
    category: 'resources',
    color: 'from-orange-500 to-red-500',
    children: [
      { 
        name: 'Documentation', 
        href: '/docs', 
        description: 'Technical documentation',
        icon: <FileText className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Support Center', 
        href: '/support', 
        description: 'Get help and support',
        icon: <HelpCircle className="w-4 h-4" />
      },
      { 
        name: 'Video Tutorials', 
        href: '/tutorials', 
        description: 'Learn with video guides',
        icon: <Video className="w-4 h-4" />
      },
      { 
        name: 'API Reference', 
        href: '/api', 
        description: 'API documentation',
        icon: <Code className="w-4 h-4" />
      }
    ]
  }
];

const contactInfo = {
  phone: '+1 (555) 123-4567',
  email: 'info@ziontechgroup.com',
  address: 'San Francisco, CA'
};

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add theme persistence logic here
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200"
              >
                <Phone className="w-3 h-3" />
                <span>{contactInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200"
              >
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-3 h-3" />
                <span>Mon-Fri: 9AM-6PM PST</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-3 h-3 fill-current" />
                <span>4.9/5 (200+ Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Zion Tech Group</h1>
                <p className="text-cyan-400 text-sm">Innovation & Technology</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  onKeyDown={(e) => handleKeyDown(e, () => toggleDropdown(item.name))}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.title || item.name}</h3>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                        
                        <div className="space-y-3">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              onClick={closeAllDropdowns}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 group"
                            >
                              <div className="flex-shrink-0 mt-1">
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                    {child.name}
                                  </p>
                                  {child.featured && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className="text-gray-400 text-sm mt-1">{child.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {item.href !== '#' && (
                          <div className="mt-4 pt-4 border-t border-gray-700">
                            <Link
                              to={item.href}
                              onClick={closeAllDropdowns}
                              className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-200"
                            >
                              <span>View All {item.name}</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-6">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-3"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {activeDropdown === item.name && item.children && (
                    <div className="ml-6 mt-3 space-y-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => {
                            setIsOpen(false);
                            closeAllDropdowns();
                          }}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors py-2"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-700 space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl mx-4 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Search className="w-6 h-6 text-cyan-400" />
                  <input
                    type="text"
                    placeholder="Search for services, solutions, or resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-gray-400 border-none outline-none text-lg"
                    autoFocus
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-sm">
                    Press Enter to search or Escape to close
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2040;