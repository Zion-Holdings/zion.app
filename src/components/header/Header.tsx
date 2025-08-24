
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Bell, User, Settings, LogOut, Sun, Moon, Zap } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { MainNavigation } from '@/layout/MainNavigation';

interface HeaderProps {
  customLogo?: string;
  hideLogin?: boolean;
}

export function Header({ customLogo, hideLogin = false }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    background: isScrolled 
      ? 'linear-gradient(135deg, rgba(10, 15, 31, 0.98) 0%, rgba(30, 38, 59, 0.98) 100%)'
      : 'linear-gradient(135deg, rgba(10, 15, 31, 0.95) 0%, rgba(30, 38, 59, 0.95) 100%)',
    backdropFilter: isScrolled ? 'blur(20px)' : 'blur(15px)',
    borderBottom: isScrolled 
      ? '1px solid rgba(0, 229, 255, 0.3)' 
      : '1px solid rgba(0, 229, 255, 0.2)',
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-gradient-to-r from-zion-blue-dark/95 via-zion-slate-dark/95 to-zion-blue-dark/95 backdrop-blur-xl shadow-2xl shadow-zion-purple/10"
      style={headerStyle}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zion-purple/10 to-transparent opacity-50" />

      <div className="container flex h-16 items-center px-4 sm:px-6 relative z-10">
        <Logo customLogo={customLogo} customColor={theme?.primaryColor} />

        <div className="ml-6 flex-1">
          <MainNavigation />
        </div>

        <div className="flex items-center gap-4">
          {/* Search Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </motion.button>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>

          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full animate-pulse"></span>
          </motion.button>

          {/* User Menu */}
          {!hideLogin && <UserMenu />}

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Neon glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-zion-blue-dark/95 backdrop-blur-xl border-t border-zion-purple/20 overflow-hidden"
          >
            <div className="container px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              <nav className="space-y-2">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-200"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-200"
                >
                  Services
                </Link>
                <Link
                  to="/micro-saas-services"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-200"
                >
                  Micro SAAS
                </Link>
                <Link
                  to="/talent"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-200"
                >
                  Talent
                </Link>
                <Link
                  to="/equipment"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-200"
                >
                  Equipment
                </Link>
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-200"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-200"
                >
                  Contact
                </Link>
              </nav>

              {/* Mobile User Actions */}
              {user ? (
                <div className="space-y-2 pt-4 border-t border-zion-purple/20">
                  <Link
                    to="/dashboard"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-200"
                  >
                    <User className="w-5 h-5" />
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-200"
                  >
                    <Settings className="w-5 h-5" />
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      closeMobileMenu();
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-200"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-2 pt-4 border-t border-zion-purple/20">
                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-200"
                  >
                    <Zap className="w-5 h-5" />
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center gap-2 px-4 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
                  >
                    <User className="w-5 h-5" />
                    Sign Up
                  </Link>
                </div>
              )}

              {/* Contact Info */}
              <div className="pt-4 border-t border-zion-purple/20 space-y-2 text-sm text-zion-slate-light">
                <div className="px-4 py-2">
                  <strong>Contact:</strong> +1 302 464 0950
                </div>
                <div className="px-4 py-2">
                  <strong>Email:</strong> kleber@ziontechgroup.com
                </div>
                <div className="px-4 py-2">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
