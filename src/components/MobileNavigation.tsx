import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Search, User, Menu, X, Phone, Mail, MapPin, Globe, Settings } from 'lucide-react';
import Link from 'next/link';

export function BottomNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'services', label: 'Services', icon: Search, href: '/services' },
    { id: 'talent', label: 'Talent', icon: User, href: '/talent' },
    { id: 'menu', label: 'Menu', icon: Menu, href: '#', action: () => setIsMenuOpen(true) }
  ];

  const quickActions = [
    { icon: Phone, label: 'Call Us', action: () => window.open('tel:+1234567890') },
    { icon: Mail, label: 'Email', action: () => window.open('mailto:info@ziontechgroup.com') },
    { icon: MapPin, label: 'Location', action: () => window.open('https://maps.google.com') },
    { icon: Globe, label: 'Website', action: () => window.open('https://ziontechgroup.com') }
  ];

  const menuItems = [
    { label: 'About Us', href: '/about', icon: User },
    { label: 'Our Services', href: '/services', icon: Search },
    { label: 'Portfolio', href: '/portfolio', icon: Globe },
    { label: 'Contact', href: '/contact', icon: Phone },
    { label: 'Blog', href: '/blog', icon: Settings },
    { label: 'Careers', href: '/careers', icon: User }
  ];

  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-zion-blue-dark/90 backdrop-blur-md border-t border-zion-blue-light/30">
        <div className="flex justify-around items-center py-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.action) {
                  item.action();
                } else {
                  setActiveTab(item.id);
                }
              }}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                activeTab === item.id
                  ? 'text-zion-cyan bg-zion-cyan/10'
                  : 'text-zinc-300 hover:text-zion-cyan hover:bg-zion-cyan/5'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-zion-blue-light/30">
                  <h2 className="text-2xl font-bold text-white">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg bg-zion-blue-light/20 hover:bg-zion-blue-light/30 transition-colors duration-200"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Quick Actions */}
                <div className="p-6 border-b border-zion-blue-light/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {quickActions.map((action, index) => (
                      <motion.button
                        key={action.label}
                        onClick={action.action}
                        className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-cyan to-zion-blue flex items-center justify-center">
                          <action.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-medium">{action.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Navigation Menu */}
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
                  <div className="space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-zion-blue/20 transition-all duration-200 group"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="w-10 h-10 rounded-lg bg-zion-purple/20 border border-zion-purple/30 flex items-center justify-center group-hover:border-zion-cyan/50 transition-colors duration-200">
                            <item.icon className="w-5 h-5 text-zion-cyan" />
                          </div>
                          <span className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-200">
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-zion-blue-light/30">
                  <div className="text-center">
                    <p className="text-zinc-300 text-sm mb-2">© 2024 Zion Tech Group</p>
                    <p className="text-zinc-400 text-xs">Empowering the future of technology</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}