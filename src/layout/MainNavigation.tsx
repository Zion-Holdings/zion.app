
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, User, ShoppingCart, Bell, Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Services', href: '/services' },
    { name: 'Talent', href: '/talent' },
    { name: 'Equipment', href: '/equipment' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-zion-blue-dark/95 backdrop-blur-md shadow-lg border-b border-zion-blue-light/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Zion Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-zion-cyan'
                    : 'text-zion-slate-light hover:text-zion-cyan'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for services, talent, or equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-zion-blue-light/10 border-zion-blue-light/20 text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-zion-cyan/20"
              />
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-zion-slate-light hover:text-zion-cyan">
              <Globe className="w-4 h-4 mr-2" />
              EN
            </Button>
            
            <Button variant="ghost" size="sm" className="text-zion-slate-light hover:text-zion-cyan">
              <Bell className="w-4 h-4 mr-2" />
              <Badge variant="secondary" className="ml-1">3</Badge>
            </Button>
            
            <Button variant="ghost" size="sm" className="text-zion-slate-light hover:text-zion-cyan">
              <ShoppingCart className="w-4 h-4 mr-2" />
              <Badge variant="secondary" className="ml-1">2</Badge>
            </Button>
            
            <Button variant="ghost" size="sm" className="text-zion-slate-light hover:text-zion-cyan">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-zion-slate-light hover:text-zion-cyan"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-blue-light/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-zion-blue-light/10 border-zion-blue-light/20 text-white placeholder-zion-slate-light"
                />
              </form>

              {/* Mobile Navigation Items */}
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-zion-cyan bg-zion-blue-light/10'
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue-light/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-zion-blue-light/20 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-zion-slate-light hover:text-zion-cyan">
                  <Globe className="w-4 h-4 mr-2" />
                  Language
                </Button>
                <Button variant="ghost" className="w-full justify-start text-zion-slate-light hover:text-zion-cyan">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start text-zion-slate-light hover:text-zion-cyan">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart
                </Button>
                <Button variant="ghost" className="w-full justify-start text-zion-slate-light hover:text-zion-cyan">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
