import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, User, ShoppingCart, 
  Bell, Settings, LogOut, Sun, Moon, Monitor,
  Zap, Shield, Brain, Rocket, Star, TrendingUp
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
  badge?: string;
  featured?: boolean;
}

interface EnhancedNavigationProps {
  theme?: 'light' | 'dark' | 'auto';
  onThemeChange?: (theme: 'light' | 'dark' | 'auto') => void;
  showSearch?: boolean;
  showNotifications?: boolean;
  showUserMenu?: boolean;
}

const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({
  theme = 'dark',
  onThemeChange,
  showSearch = true,
  showNotifications = true,
  showUserMenu = true
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTheme, setCurrentTheme] = useState(theme);

  const searchRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  // Navigation items
  const navigationItems: NavigationItem[] = [
    {
      label: 'Services',
      href: '/services',
      description: 'Explore our revolutionary technology services',
      icon: <Zap className="w-4 h-4" />,
      children: [
        { label: 'AI & Machine Learning', href: '/services/ai-ml', badge: 'Hot', featured: true },
        { label: 'Quantum Computing', href: '/services/quantum', badge: 'New' },
        { label: 'Space Technology', href: '/services/space', badge: 'Trending' },
        { label: 'Cybersecurity', href: '/services/cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { label: 'Blockchain & Web3', href: '/services/blockchain' },
        { label: 'IoT & Edge Computing', href: '/services/iot' }
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      description: 'Industry-specific technology solutions',
      icon: <Brain className="w-4 h-4" />,
      children: [
        { label: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { label: 'Startup Solutions', href: '/solutions/startup' },
        { label: 'Government Solutions', href: '/solutions/government' },
        { label: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { label: 'Financial Services', href: '/solutions/financial' },
        { label: 'Education Solutions', href: '/solutions/education' }
      ]
    },
    {
      label: 'Innovation Lab',
      href: '/innovation-lab',
      description: 'Research and development center',
      icon: <Rocket className="w-4 h-4" />,
      children: [
        { label: 'Research Projects', href: '/innovation-lab/research' },
        { label: 'Prototype Development', href: '/innovation-lab/prototypes' },
        { label: 'Technology Partnerships', href: '/innovation-lab/partnerships' },
        { label: 'Innovation Events', href: '/innovation-lab/events' }
      ]
    },
    {
      label: 'About',
      href: '/about',
      description: 'Learn about our mission and team',
      children: [
        { label: 'Our Story', href: '/about/story' },
        { label: 'Leadership Team', href: '/about/team' },
        { label: 'Company Values', href: '/about/values' },
        { label: 'Careers', href: '/about/careers', badge: 'Hiring' }
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      description: 'Knowledge base and learning materials',
      children: [
        { label: 'Documentation', href: '/resources/docs' },
        { label: 'Blog & Insights', href: '/resources/blog' },
        { label: 'Case Studies', href: '/resources/case-studies' },
        { label: 'Webinars', href: '/resources/webinars' },
        { label: 'Training Programs', href: '/resources/training' }
      ]
    }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle theme change
  const handleThemeChange = useCallback((newTheme: 'light' | 'dark' | 'auto') => {
    setCurrentTheme(newTheme);
    onThemeChange?.(newTheme);
  }, [onThemeChange]);

  // Handle search
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    // Implement search functionality
    console.log('Searching for:', query);
  }, []);

  // Toggle dropdown
  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  // Close all menus
  const closeAllMenus = useCallback(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setIsUserMenuOpen(false);
    setIsNotificationsOpen(false);
    setActiveDropdown(null);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Star className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech
              </div>
              <div className="text-xs text-gray-400">Revolutionary Technology</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                >
                  {item.icon && item.icon}
                  <span className="font-medium">{item.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                          {item.description && (
                            <p className="text-sm text-gray-400">{item.description}</p>
                          )}
                        </div>
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeAllMenus}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                            >
                              <div className="flex items-center space-x-3">
                                {child.icon && child.icon}
                                <div>
                                  <div className="text-white font-medium">{child.label}</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                {child.badge && (
                                  <span className={`px-2 py-1 text-xs rounded-full ${
                                    child.badge === 'Hot' ? 'bg-red-500/20 text-red-400' :
                                    child.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                                    child.badge === 'Trending' ? 'bg-blue-500/20 text-blue-400' :
                                    child.badge === 'Hiring' ? 'bg-purple-500/20 text-purple-400' :
                                    'bg-gray-500/20 text-gray-400'
                                  }`}>
                                    {child.badge}
                                  </span>
                                )}
                                {child.featured && (
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
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
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            {showSearch && (
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Search className="w-5 h-5" />
                </button>

                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl p-4"
                    >
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search services, solutions..."
                          value={searchQuery}
                          onChange={(e) => handleSearch(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          autoFocus
                        />
                      </div>
                      {searchQuery && (
                        <div className="mt-3 text-sm text-gray-400">
                          Press Enter to search for "{searchQuery}"
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Theme Toggle */}
            <div className="relative">
              <button
                onClick={() => handleThemeChange(currentTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                {currentTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Notifications */}
            {showNotifications && (
              <div className="relative" ref={notificationsRef}>
                <button
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200 relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>

                <AnimatePresence>
                  {isNotificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white">Notifications</h3>
                        <button className="text-sm text-purple-400 hover:text-purple-300">
                          Mark all read
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-700/50 rounded-lg">
                          <div className="text-sm text-white font-medium">New Service Available</div>
                          <div className="text-xs text-gray-400">Quantum AI Platform is now live</div>
                          <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
                        </div>
                        <div className="p-3 bg-slate-700/50 rounded-lg">
                          <div className="text-sm text-white font-medium">System Update</div>
                          <div className="text-xs text-gray-400">Performance improvements deployed</div>
                          <div className="text-xs text-gray-500 mt-1">1 day ago</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* User Menu */}
            {showUserMenu && (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl p-4"
                    >
                      <div className="mb-3 pb-3 border-b border-slate-700">
                        <div className="text-white font-medium">John Doe</div>
                        <div className="text-sm text-gray-400">john@ziontech.com</div>
                      </div>
                      <div className="space-y-1">
                        <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 text-left">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-white">Profile</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 text-left">
                          <Settings className="w-4 h-4 text-gray-400" />
                          <span className="text-white">Settings</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 text-left">
                          <LogOut className="w-4 h-4 text-gray-400" />
                          <span className="text-white">Sign Out</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={closeAllMenus}
                    className="block text-lg font-medium text-white hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeAllMenus}
                          className="block text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation;
