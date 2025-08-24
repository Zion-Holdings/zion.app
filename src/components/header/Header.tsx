
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { MainNavigation } from '@/layout/MainNavigation';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, Bell, MessageCircle } from "lucide-react";

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
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchSuggestions = generateSearchSuggestions();
  
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#000000', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined);
  
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor,
    color: effectiveTheme.textColor,
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {};

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSearchFocus = () => {
    setIsSearchExpanded(true);
  };

  const handleSearchBlur = () => {
    // Delay closing to allow for suggestion clicks
    setTimeout(() => setIsSearchExpanded(false), 200);
  };
  
  return (
    <header 
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-blue-dark/95 backdrop-blur-md border-zion-purple/30 shadow-lg' 
          : 'bg-zion-blue-dark/90 backdrop-blur-md border-zion-purple/20'
      }`}
      style={headerStyle}
    >
      <div className="container flex h-16 items-center px-4 sm:px-6">
        {/* Logo */}
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex ml-6 flex-1">
          <MainNavigation />
        </div>

        {/* Desktop Search */}
        <div className="hidden md:block w-64 mx-4 relative">
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            onSelectSuggestion={(text) => {
              navigate(`/search?q=${encodeURIComponent(text)}`);
              setQuery("");
            }}
            searchSuggestions={searchSuggestions}
            placeholder="Search marketplace..."
          />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Notifications */}
          <button className="relative p-2 text-zion-slate-light hover:text-zion-cyan transition-colors rounded-lg hover:bg-zion-blue-light/20">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-zion-purple rounded-full"></span>
          </button>

          {/* Messages */}
          <button className="relative p-2 text-zion-slate-light hover:text-zion-cyan transition-colors rounded-lg hover:bg-zion-blue-light/20">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full"></span>
          </button>

          <LanguageSelector />
          {!hideLogin && <UserMenu />}
        </div>

        {/* Mobile Search Toggle */}
        <div className="md:hidden mx-2">
          <button
            onClick={() => setIsSearchExpanded(!isSearchExpanded)}
            className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors rounded-lg hover:bg-zion-blue-light/20"
            aria-label="Toggle search"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors rounded-lg hover:bg-zion-blue-light/20"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Search Bar */}
      <AnimatePresence>
        {isSearchExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-zion-purple/20 bg-zion-blue-dark/95"
          >
            <div className="container px-4 py-3">
              <form onSubmit={handleSubmit} className="relative">
                <EnhancedSearchInput
                  value={query}
                  onChange={setQuery}
                  onSelectSuggestion={(text) => {
                    navigate(`/search?q=${encodeURIComponent(text)}`);
                    setQuery("");
                    setIsSearchExpanded(false);
                  }}
                  searchSuggestions={searchSuggestions}
                  placeholder="Search marketplace..."
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md"
          >
            <div className="container px-4 py-4">
              <div className="space-y-4">
                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  <Link
                    to="/marketplace"
                    onClick={closeMobileMenu}
                    className="block py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    Marketplace
                  </Link>
                  <Link
                    to="/services"
                    onClick={closeMobileMenu}
                    className="block py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    to="/talent"
                    onClick={closeMobileMenu}
                    className="block py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    Talent
                  </Link>
                  <Link
                    to="/equipment"
                    onClick={closeMobileMenu}
                    className="block py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    Equipment
                  </Link>
                  <Link
                    to="/community"
                    onClick={closeMobileMenu}
                    className="block py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    Community
                  </Link>
                </nav>

                {/* Mobile Actions */}
                <div className="pt-4 border-t border-zion-purple/20">
                  <div className="flex items-center gap-3 mb-4">
                    <LanguageSelector />
                    {!hideLogin && <UserMenu />}
                  </div>
                  
                  {/* Mobile CTA */}
                  <Link
                    to="/signup"
                    onClick={closeMobileMenu}
                    className="block w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white text-center py-3 px-4 rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
