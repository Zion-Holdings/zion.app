
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
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

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
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-gradient-to-r from-zion-blue-dark/95 via-zion-purple-dark/95 to-zion-slate-dark/95 backdrop-blur-md shadow-lg shadow-zion-purple/10"
      style={headerStyle}
    >
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        {/* Desktop Navigation */}
        <div className="ml-6 flex-1 hidden lg:block">
          <MainNavigation />
        </div>

        {/* Search Bar */}
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

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button 
            asChild 
            variant="outline" 
            className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 transition-all duration-300"
          >
            <Link to="/pricing">
              <Sparkles className="h-4 w-4 mr-2" />
              Pricing
            </Link>
          </Button>
          <LanguageSelector />
          {!hideLogin && <UserMenu />}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="text-zion-cyan hover:bg-zion-purple/10"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-zion-purple/20 bg-zion-slate-dark/95 backdrop-blur-md">
          <div className="container px-4 py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="mb-4">
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
            <nav className="mb-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketplace"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                  >
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/talent"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                  >
                    Talent
                  </Link>
                </li>
                <li>
                  <Link
                    to="/equipment"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                  >
                    Equipment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/community"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                {user && (
                  <li>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
              </ul>
            </nav>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-2">
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              >
                <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                  <Sparkles className="h-4 w-4 mr-2" />
                  View Pricing
                </Link>
              </Button>
              <div className="flex items-center justify-between">
                <LanguageSelector />
                {!hideLogin && <UserMenu />}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
