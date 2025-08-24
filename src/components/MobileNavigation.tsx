import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  Search, 
  User, 
  Settings, 
  HelpCircle, 
  MessageCircle,
  Bell,
  Bookmark,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface MobileNavigationProps {
  className?: string;
}

export function MobileNavigation({ className }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const location = useLocation();
  const { t } = useTranslation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigationItems = [
    { id: 'home', label: t('nav.home') || 'Home', icon: Home, path: '/' },
    { id: 'search', label: t('nav.search') || 'Search', icon: Search, path: '/search' },
    { id: 'profile', label: t('nav.profile') || 'Profile', icon: User, path: '/profile' },
    { id: 'settings', label: t('nav.settings') || 'Settings', icon: Settings, path: '/settings' },
  ];

  const quickActions = [
    { label: 'Help Center', icon: HelpCircle, path: '/help' },
    { label: 'Contact Support', icon: MessageCircle, path: '/contact' },
    { label: 'Notifications', icon: Bell, path: '/notifications' },
    { label: 'Saved Items', icon: Bookmark, path: '/saved' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className={`lg:hidden ${className || ''}`}
        aria-label="Toggle mobile menu"
      >
        <Menu className="w-6 h-6 text-zion-cyan" />
      </Button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-slate-dark border-l border-zion-purple/30 z-50 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zion-purple/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <div>
                    <h2 className="text-white font-semibold">Zion Tech</h2>
                    <p className="text-zion-cyan text-sm">Tech Marketplace</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMenu}
                  className="text-zion-cyan hover:bg-zion-purple/20"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Navigation Items */}
              <div className="p-4 space-y-2">
                <h3 className="text-zion-slate-light text-sm font-medium uppercase tracking-wider mb-3 px-2">
                  Navigation
                </h3>
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.div
                      key={item.id}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-zion-purple/30 to-zion-cyan/30 border border-zion-purple/50 text-white'
                            : 'text-zion-slate-light hover:bg-zion-blue/30 hover:text-white'
                        }`}
                        onClick={() => setActiveTab(item.id)}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-zion-cyan' : ''}`} />
                        <span className="font-medium">{item.label}</span>
                        {isActive && (
                          <motion.div
                            className="ml-auto w-2 h-2 bg-zion-cyan rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="p-4 space-y-2">
                <h3 className="text-zion-slate-light text-sm font-medium uppercase tracking-wider mb-3 px-2">
                  Quick Actions
                </h3>
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  
                  return (
                    <motion.div
                      key={action.label}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={action.path}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-zion-slate-light hover:bg-zion-blue/30 hover:text-white transition-all duration-200"
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{action.label}</span>
                        <ChevronRight className="w-4 h-4 ml-auto opacity-50" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* User Section */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zion-purple/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">Guest User</p>
                    <p className="text-zion-cyan text-sm">Sign in to continue</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    asChild
                  >
                    <Link to="/login">Sign In</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
                    asChild
                  >
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Bottom Navigation Bar for Mobile
export function BottomNavigation() {
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { id: 'home', label: t('nav.home') || 'Home', icon: Home, path: '/' },
    { id: 'search', label: t('nav.search') || 'Search', icon: Search, path: '/search' },
    { id: 'marketplace', label: t('nav.marketplace') || 'Market', icon: Search, path: '/marketplace' },
    { id: 'profile', label: t('nav.profile') || 'Profile', icon: User, path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zion-blue-dark/95 backdrop-blur-lg border-t border-zion-purple/30 z-40 lg:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-zion-cyan bg-zion-purple/20'
                  : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue/30'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-zion-cyan' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
              {isActive && (
                <motion.div
                  className="w-1 h-1 bg-zion-cyan rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}