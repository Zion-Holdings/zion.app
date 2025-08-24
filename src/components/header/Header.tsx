
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { Menu, X, ChevronDown } from 'lucide-react';

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
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
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

  const isActive = (path: string) => location.pathname === path;
  
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex ml-8 space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-zion-cyan ${
              isActive('/') ? 'text-zion-cyan' : 'text-zion-slate-light'
            }`}
          >
            Home
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className={`flex items-center text-sm font-medium transition-colors hover:text-zion-cyan ${
                location.pathname.startsWith('/services') || location.pathname.startsWith('/ai-solutions') || 
                location.pathname.startsWith('/it-services') || location.pathname.startsWith('/enterprise') 
                  ? 'text-zion-cyan' 
                  : 'text-zion-slate-light'
              }`}
            >
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/20 rounded-lg shadow-xl backdrop-blur-md">
                <div className="py-2">
                  <Link 
                    to="/services" 
                    className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/ai-solutions" 
                    className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    AI Solutions
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    IT Services
                  </Link>
                  <Link 
                    to="/enterprise" 
                    className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    Enterprise Solutions
                  </Link>
                  <Link 
                    to="/comprehensive-services" 
                    className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    Comprehensive Services
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <Link 
            to="/developers" 
            className={`text-sm font-medium transition-colors hover:text-zion-cyan ${
              isActive('/developers') ? 'text-zion-cyan' : 'text-zion-slate-light'
            }`}
          >
            Developer Portal
          </Link>
          
          <Link 
            to="/help-center" 
            className={`text-sm font-medium transition-colors hover:text-zion-cyan ${
              isActive('/help-center') ? 'text-zion-cyan' : 'text-zion-slate-light'
            }`}
          >
            Help Center
          </Link>
          
          <Link 
            to="/sitemap" 
            className={`text-sm font-medium transition-colors hover:text-zion-cyan ${
              isActive('/sitemap') ? 'text-zion-cyan' : 'text-zion-slate-light'
            }`}
          >
            Sitemap
          </Link>
        </nav>

        <div className="ml-6 flex-1">
          {/* Search bar */}
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
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Services
            </Link>
            <Link 
              to="/ai-solutions" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI Solutions
            </Link>
            <Link 
              to="/it-services" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              IT Services
            </Link>
            <Link 
              to="/enterprise" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enterprise Solutions
            </Link>
            <Link 
              to="/developers" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Developer Portal
            </Link>
            <Link 
              to="/help-center" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Help Center
            </Link>
            <Link 
              to="/sitemap" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sitemap
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
