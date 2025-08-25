import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Bell, 
  ChevronDown,
  Globe,
  Settings,
  LogOut,
  Sun,
  Moon
} from 'lucide-react';

interface NavigationProps {
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

export function EnhancedNavigation({ onThemeToggle, isDarkMode = true }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Services', href: '/services', current: location.pathname === '/services' },
    { name: 'Marketplace', href: '/marketplace', current: location.pathname === '/marketplace' },
    { name: 'Talent', href: '/talent', current: location.pathname === '/talent' },
    { name: 'Community', href: '/community', current: location.pathname === '/community' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-purple/20 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center"
              >
                <span className="text-white font-bold text-xl">Z</span>
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">
                Zion
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    item.current
                      ? 'text-zion-cyan bg-zion-cyan/10'
                      : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                  }`}
                >
                  {item.name}
                  {item.current && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-zion-cyan/10 rounded-lg border border-zion-cyan/20"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="text-zion-slate-light hover:text-white hover:bg-zion-purple/10"
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={onThemeToggle}
                className="text-zion-slate-light hover:text-white hover:bg-zion-purple/10"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              {/* Notifications */}
              <Button
                variant="ghost"
                size="sm"
                className="text-zion-slate-light hover:text-white hover:bg-zion-purple/10 relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>

              {/* User Menu */}
              <div className="relative group">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zion-slate-light hover:text-white hover:bg-zion-purple/10 flex items-center space-x-2"
                >
                  <User className="w-5 h-5" />
                  <span>Account</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors duration-200"
                    >
                      <User className="w-4 h-4 mr-3" />
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors duration-200"
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Settings
                    </Link>
                    <div className="border-t border-zion-purple/20 my-2"></div>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors duration-200">
                      <LogOut className="w-4 h-4 mr-3" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-zion-slate-light hover:text-white hover:bg-zion-purple/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-purple/20"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-zion-purple/20">
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-zion-slate-light">Theme</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onThemeToggle}
                      className="text-zion-slate-light hover:text-white hover:bg-zion-purple/10"
                    >
                      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </Button>
                  </div>
                  
                  <Button
                    asChild
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold py-3 rounded-xl"
                  >
                    <Link to="/signup" onClick={() => setIsOpen(false)}>Get Started</Link>
                  </Button>
                </div>
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
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-2xl bg-zion-blue-dark border border-zion-purple/20 rounded-2xl p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for services, talent, or equipment..."
                    className="w-full pl-12 pr-4 py-4 bg-zion-blue-light/20 border border-zion-purple/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                    autoFocus
                  />
                </div>
                
                <div className="flex gap-3">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold py-3 rounded-xl"
                  >
                    Search
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsSearchOpen(false)}
                    className="border-zion-purple/30 text-zion-slate-light hover:bg-zion-purple/10 hover:text-white px-6 py-3 rounded-xl"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}