
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
import { Menu, X, Search as SearchIcon, Sparkles } from "lucide-react";

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
  
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor,
    color: effectiveTheme.textColor,
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {};

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20' 
            : 'bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-purple/20'
        }`}
        style={headerStyle}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

          {/* Desktop Navigation */}
          <div className="ml-6 flex-1 hidden lg:block">
            <MainNavigation />
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="hidden md:block w-80 mx-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSelectSuggestion={(text) => {
                  navigate(`/search?q=${encodeURIComponent(text)}`);
                  setQuery("");
                }}
                searchSuggestions={searchSuggestions}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon className="h-4 w-4 text-zion-slate-light" />
              </div>
            </div>
          </form>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* AI Assistant Button */}
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 text-zion-cyan hover:from-zion-purple/30 hover:to-zion-cyan/30 transition-all duration-300 group">
              <Sparkles className="h-4 w-4 group-hover:animate-pulse" />
              <span className="text-sm font-medium">AI Assistant</span>
            </button>

            <LanguageSelector />
            {!hideLogin && <UserMenu />}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg border border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden px-4 pb-4">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSelectSuggestion={(text) => {
                  navigate(`/search?q=${encodeURIComponent(text)}`);
                  setQuery("");
                }}
                searchSuggestions={searchSuggestions}
                placeholder="Search services, talent, equipment..."
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon className="h-4 w-4 text-zion-slate-light" />
              </div>
            </div>
          </form>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-zion-blue-dark/95 backdrop-blur-xl">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-zion-purple/30">
              <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg border border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/talent"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Talent
                  </Link>
                </li>
                <li>
                  <Link
                    to="/equipment"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Equipment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/community"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-content-generator"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    AI Content Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cybersecurity-suite"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Cybersecurity Suite
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cloud-optimizer"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Cloud Cost Optimizer
                  </Link>
                </li>
                {user && (
                  <li>
                    <Link
                      to="/dashboard"
                      onClick={toggleMobileMenu}
                      className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
              </ul>
            </nav>

            <div className="p-4 border-t border-zion-purple/30">
              <div className="flex flex-col gap-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-medium hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300">
                  <Sparkles className="h-4 w-4" />
                  AI Assistant
                </button>
                {!user && (
                  <div className="flex gap-2">
                    <Link
                      to="/login"
                      onClick={toggleMobileMenu}
                      className="flex-1 px-4 py-2 text-center rounded-lg border border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={toggleMobileMenu}
                      className="flex-1 px-4 py-2 text-center rounded-lg bg-zion-purple text-white hover:bg-zion-purple-dark transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
