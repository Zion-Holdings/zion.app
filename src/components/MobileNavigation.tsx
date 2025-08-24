import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Briefcase, Phone, HelpCircle, FileText, Globe, Settings } from 'lucide-react';
import { Button } from './ui/button';

const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/careers', label: 'Careers', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Phone },
    { path: '/help', label: 'Help', icon: HelpCircle },
    { path: '/sitemap', label: 'Sitemap', icon: FileText },
    { path: '/micro-saas-services', label: 'Services', icon: Globe },
    { path: '/green-it', label: 'Green IT', icon: Settings },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="lg:hidden">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="p-2 text-zion-cyan hover:text-zion-cyan-light hover:bg-zion-cyan/10"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-zion-blue-dark/95 backdrop-blur-lg border-l border-zion-blue-light/30 z-50"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zion-blue-light/20">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMenu}
                  className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Navigation Items */}
              <nav className="p-4">
                <ul className="space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.path);
                    
                    return (
                      <motion.li
                        key={item.path}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          to={item.path}
                          onClick={closeMenu}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                            active
                              ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                              : 'text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20'
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${active ? 'text-zion-cyan' : 'text-zion-slate-light'}`} />
                          <span className="font-medium">{item.label}</span>
                          {active && (
                            <motion.div
                              className="w-2 h-2 bg-zion-cyan rounded-full ml-auto"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.1 }}
                            />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Contact Section */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-zion-blue-light/20 bg-zion-blue-dark/50">
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-zion-cyan mb-3">Need Help?</h3>
                  <div className="space-y-2 text-sm text-zion-slate-light">
                    <p>📞 +1 (302) 464-0950</p>
                    <p>📧 kleber@ziontechgroup.com</p>
                    <p>📍 Middletown, DE 19709</p>
                  </div>
                  <Button
                    asChild
                    className="w-full mt-4 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white"
                  >
                    <Link to="/contact" onClick={closeMenu}>
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavigation;