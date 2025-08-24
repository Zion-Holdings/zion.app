
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
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const searchSuggestions = generateSearchSuggestions();
  
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#000000', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <>
      {/* Animated Background */}
      <div className="fixed top-0 left-0 w-full h-20 bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-blue-dark opacity-90 z-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,113,242,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(34,221,210,0.1)_50%,transparent_70%)] animate-pulse"></div>
      </div>

      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20' 
            : 'bg-transparent'
        }`}
        style={headerStyle}
      >
        <div className="container flex h-20 items-center px-4 sm:px-6 relative">
          {/* Neon Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-zion-purple/5 to-zion-cyan/5 rounded-b-3xl"></div>
          
          <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

          {/* Desktop Navigation */}
          <div className="ml-6 flex-1 hidden lg:block">
            <MainNavigation />
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="hidden md:block w-80 mx-4 relative">
            <div className="relative">
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSelectSuggestion={(text) => {
                  navigate(`/search?q=${encodeURIComponent(text)}`);
                  setQuery("");
                }}
                searchSuggestions={searchSuggestions}
              />
              {/* Search Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-lg blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </form>

          {/* Desktop Actions */}
          <div className="flex items-center gap-3 hidden md:flex">
            <LanguageSelector />
            {!hideLogin && <UserMenu />}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-zion-purple/20 hover:text-zion-cyan transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-zion-blue-dark/95 backdrop-blur-xl border-t border-zion-purple/30 shadow-2xl">
            <div className="container px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSubmit} className="w-full">
                <EnhancedSearchInput
                  value={query}
                  onChange={setQuery}
                  onSelectSuggestion={(text) => {
                    navigate(`/search?q=${encodeURIComponent(text)}`);
                    setQuery("");
                    setIsMobileMenuOpen(false);
                  }}
                  searchSuggestions={searchSuggestions}
                />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                <Link
                  to="/"
                  className="block px-4 py-3 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/marketplace"
                  className="block px-4 py-3 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Marketplace
                </Link>
                <Link
                  to="/services"
                  className="block px-4 py-3 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/talent"
                  className="block px-4 py-3 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Talent
                </Link>
                <Link
                  to="/equipment"
                  className="block px-4 py-3 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Equipment
                </Link>
                <Link
                  to="/community"
                  className="block px-4 py-3 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Community
                </Link>
                {user && (
                  <Link
                    to="/dashboard"
                    className="block px-4 py-3 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                )}
              </nav>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-zion-purple/30">
                <LanguageSelector />
                {!hideLogin && <UserMenu />}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
