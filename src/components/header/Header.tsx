
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface HeaderProps {
  hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
}

export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchExpanded(false);
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
      setIsSearchExpanded(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSearchExpanded(false);
  };

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <div className="text-2xl font-bold text-zion-cyan">Zion Tech</div>

        {/* Desktop Navigation */}
        <div className="ml-6 flex-1 hidden lg:block">
          <nav className="flex space-x-8">
            <Link to="/" className="text-zion-cyan hover:text-zion-purple transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-zion-cyan hover:text-zion-purple transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-zion-cyan hover:text-zion-purple transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-zion-cyan hover:text-zion-purple transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:block w-64 mx-4">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services..."
              className="w-full px-4 py-2 bg-zion-blue-light/20 border border-zion-purple/30 rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple"
            />
          </form>
        </div>

        {/* Desktop Actions */}
        <div className="flex items-center gap-2 hidden md:flex">
          {!hideLogin && (
            <Link
              to="/login"
              className="px-4 py-2 bg-zion-purple text-white rounded-md hover:bg-zion-purple-dark transition-colors"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleSearch}
            className="p-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
            aria-label="Toggle search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <AnimatePresence>
        {isSearchExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-zion-purple/20 bg-zion-blue-dark/95"
          >
            <div className="container px-4 py-3">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services..."
                  className="flex-1 px-4 py-2 bg-zion-blue-light/20 border border-zion-purple/30 rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-zion-purple text-white rounded-md hover:bg-zion-purple-dark transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-zion-purple/20 bg-zion-blue-dark/95 lg:hidden"
          >
            <div className="container px-4 py-4">
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-zion-cyan hover:text-zion-purple transition-colors py-2">
                  Home
                </Link>
                <Link to="/services" className="text-zion-cyan hover:text-zion-purple transition-colors py-2">
                  Services
                </Link>
                <Link to="/about" className="text-zion-cyan hover:text-zion-purple transition-colors py-2">
                  About
                </Link>
                <Link to="/contact" className="text-zion-cyan hover:text-zion-purple transition-colors py-2">
                  Contact
                </Link>
              </nav>
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                {!hideLogin && (
                  <Link
                    to="/login"
                    className="block w-full px-4 py-2 bg-zion-purple text-white rounded-md hover:bg-zion-purple-dark transition-colors text-center"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
