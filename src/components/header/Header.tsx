
import React from 'react';
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
import { useState } from "react";
import { Menu, X, Search, Sparkles } from "lucide-react";

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
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-xl shadow-2xl shadow-zion-purple/10"
      style={headerStyle}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark via-zion-slate to-zion-blue-dark opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(140,21,233,0.1),transparent_50%)]"></div>
      
      <div className="relative container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        {/* Desktop Navigation */}
        <div className="ml-6 flex-1 hidden lg:block">
          <MainNavigation />
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="hidden md:block w-80 mx-6 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
            <EnhancedSearchInput
              value={query}
              onChange={setQuery}
              onSelectSuggestion={(text) => {
                navigate(`/search?q=${encodeURIComponent(text)}`);
                setQuery("");
              }}
              searchSuggestions={searchSuggestions}
              placeholder="Search AI services, talent, equipment..."
            />
          </div>
        </form>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* AI Assistant Button */}
          <Link 
            to="/zion-hire-ai"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/30 hover:scale-105"
          >
            <Sparkles className="h-4 w-4" />
            <span className="hidden md:inline">AI Assistant</span>
          </Link>

          <LanguageSelector />
          {!hideLogin && <UserMenu />}

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zion-blue-dark/98 border-t border-zion-purple/20 backdrop-blur-xl">
          <div className="container px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, talent, equipment..."
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-purple focus:ring-2 focus:ring-zion-purple/20 transition-all duration-300"
              />
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/marketplace" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Marketplace
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/talent" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Talent
              </Link>
              <Link 
                to="/equipment" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Equipment
              </Link>
              <Link 
                to="/zion-hire-ai" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                AI Assistant
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-zion-purple/20">
              <Link 
                to="/request-quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/30"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
