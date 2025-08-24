
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
import { Search, Menu, X, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/Button";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
      setIsSearchExpanded(false);
    }
  };

  const handleSearchSelect = (text: string) => {
    navigate(`/search?q=${encodeURIComponent(text)}`);
    setQuery("");
    setIsSearchExpanded(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchExpanded(false);
  }, [navigate]);
  
  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md shadow-lg"
      style={headerStyle}
    >
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        {/* Desktop Navigation */}
        <div className="ml-6 flex-1 hidden lg:block">
          <MainNavigation />
        </div>

        {/* Enhanced Search - Desktop */}
        <div className="hidden md:block w-64 mx-4">
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            onSelectSuggestion={handleSearchSelect}
            searchSuggestions={searchSuggestions}
            placeholder="Search talents, services, equipment..."
          />
        </div>

        {/* Mobile Search Toggle */}
        <div className="md:hidden ml-auto mr-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSearchExpanded(!isSearchExpanded)}
            className="text-zion-cyan hover:bg-zion-cyan/10"
            aria-label="Toggle search"
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-zion-cyan hover:bg-zion-cyan/10 mobile-menu-toggle"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {user && (
            <Button
              variant="ghost"
              size="sm"
              className="text-zion-cyan hover:bg-zion-cyan/10 relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </Button>
          )}
          <LanguageSelector />
          {!hideLogin && <UserMenu />}
        </div>
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
                              <EnhancedSearchInput
                  value={query}
                  onChange={setQuery}
                  onSelectSuggestion={handleSearchSelect}
                  searchSuggestions={searchSuggestions}
                  placeholder="Search talents, services, equipment..."
                />
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
            className="lg:hidden border-t border-zion-purple/20 bg-zion-blue-dark/95 mobile-menu"
          >
            <div className="container px-4 py-4 space-y-4">
              {/* Mobile Navigation */}
              <nav className="space-y-2">
                <Link
                  to="/marketplace"
                  className="block px-3 py-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Marketplace
                </Link>
                <Link
                  to="/talent"
                  className="block px-3 py-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Find Talent
                </Link>
                <Link
                  to="/services"
                  className="block px-3 py-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/equipment"
                  className="block px-3 py-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Equipment
                </Link>
                <Link
                  to="/community"
                  className="block px-3 py-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Community
                </Link>
              </nav>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-zion-purple/20">
                <div className="flex items-center gap-3 mb-4">
                  <LanguageSelector />
                  {user && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-zion-cyan hover:bg-zion-cyan/10"
                      aria-label="Notifications"
                    >
                      <Bell className="w-5 h-5" />
                      <span className="ml-1 text-sm">Notifications</span>
                    </Button>
                  )}
                </div>
                {!hideLogin && <UserMenu />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
