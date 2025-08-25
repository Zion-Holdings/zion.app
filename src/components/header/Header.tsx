
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776

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
<<<<<<< HEAD
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
=======
  const searchSuggestions = generateSearchSuggestions();
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
  
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#000000', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined);
<<<<<<< HEAD

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
  
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
<<<<<<< HEAD

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
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              {customLogo || 'ZION TECH GROUP'}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="ml-6 flex-1 hidden lg:block">
            <nav className="flex space-x-8">
              <Link to="/" className="text-white hover:text-zion-cyan transition-colors">Home</Link>
              <Link to="/marketplace" className="text-white hover:text-zion-cyan transition-colors">Marketplace</Link>
              <Link to="/services" className="text-white hover:text-zion-cyan transition-colors">Services</Link>
              <Link to="/talent" className="text-white hover:text-zion-cyan transition-colors">Talent</Link>
              <Link to="/equipment" className="text-white hover:text-zion-cyan transition-colors">Equipment</Link>
              <Link to="/community" className="text-white hover:text-zion-cyan transition-colors">Community</Link>
            </nav>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="hidden md:block w-80 mx-4 relative">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services..."
                className="w-full px-4 py-2 bg-white/10 border border-zion-purple/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
              />
              {/* Search Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-lg blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </form>

          {/* Desktop Actions */}
          <div className="flex items-center gap-3 hidden md:flex">
            {!hideLogin && (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-white hover:text-zion-cyan transition-colors">Login</Link>
                <Link to="/register" className="px-4 py-2 bg-zion-cyan text-black rounded-lg hover:bg-zion-cyan/80 transition-colors">Sign Up</Link>
              </div>
            )}
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
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services..."
                  className="w-full px-4 py-2 bg-white/10 border border-zion-purple/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
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
                  className="block px-4 py-3 text-white hover:bg-zion-purple/20 hover:text-zion-cyan transition-colors"
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
                {!hideLogin && (
                  <div className="flex flex-col space-y-2">
                    <Link to="/login" className="block px-4 py-3 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors">Login</Link>
                    <Link to="/register" className="block px-4 py-3 bg-zion-cyan text-black rounded-lg hover:bg-zion-cyan/80 transition-colors text-center">Sign Up</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
=======
  
  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md shadow-2xl"
      style={headerStyle}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1 h-1 bg-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute top-2 right-1/3 w-1 h-1 bg-zion-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-4 left-1/2 w-1 h-1 bg-zion-blue rounded-full animate-pulse delay-2000"></div>
      </div>
      
      <div className="container flex h-16 items-center px-4 sm:px-6 relative z-10">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        <div className="ml-6 flex-1">
          {/* Navigation removed - using sidebar instead */}
        </div>
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            onSelectSuggestion={(text) => {
              navigate(`/search?q=${encodeURIComponent(text)}`);
              setQuery("");
            }}
            searchSuggestions={searchSuggestions}
          />
        </form>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          {!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
  );
}
