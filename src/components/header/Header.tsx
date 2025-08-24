
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
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles, Zap, Brain, Shield } from "lucide-react";

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
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
          <nav className="hidden lg:flex ml-8 flex-1 items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link 
                to="/" 
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 font-medium">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-zion-cyan font-semibold mb-3 flex items-center">
                          <Zap className="h-4 w-4 mr-2" />
                          Core Services
                        </h3>
                        <div className="space-y-2">
                          <Link to="/services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            IT & AI Services
                          </Link>
                          <Link to="/it-onsite-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            Onsite Services
                          </Link>
                          <Link to="/equipment" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            Equipment
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-zion-purple font-semibold mb-3 flex items-center">
                          <Sparkles className="h-4 w-4 mr-2" />
                          Micro SAAS
                        </h3>
                        <div className="space-y-2">
                          <Link to="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            All Services
                          </Link>
                          <Link to="/micro-saas-services?category=AI" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            AI Solutions
                          </Link>
                          <Link to="/micro-saas-services?category=IT" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            IT Solutions
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 font-medium">
                  <span>Solutions</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-zion-cyan font-semibold mb-3 flex items-center">
                          <Brain className="h-4 w-4 mr-2" />
                          AI & Tech
                        </h3>
                        <div className="space-y-2">
                          <Link to="/zion-hire-ai" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            Zion Hire AI
                          </Link>
                          <Link to="/match" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            AI Matcher
                          </Link>
                          <Link to="/talent" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            Talent Directory
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-zion-purple font-semibold mb-3 flex items-center">
                          <Shield className="h-4 w-4 mr-2" />
                          Enterprise
                        </h3>
                        <div className="space-y-2">
                          <Link to="/enterprise" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            Enterprise Solutions
                          </Link>
                          <Link to="/partners" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            Partnerships
                          </Link>
                          <Link to="/request-quote" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            Get Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link 
                to="/community" 
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 font-medium"
              >
                Community
              </Link>
              
              <Link 
                to="/blog" 
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 font-medium"
              >
                Blog
              </Link>
            </div>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="hidden md:block w-80 mx-6">
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

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            {!hideLogin && <UserMenu />}
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden border-t border-zion-purple/20 bg-zion-blue-dark/50">
          <div className="container px-4 py-3">
            <form onSubmit={handleSubmit}>
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSelectSuggestion={(text) => {
                  navigate(`/search?q=${encodeURIComponent(text)}`);
                  setQuery("");
                  closeMobileMenu();
                }}
                searchSuggestions={searchSuggestions}
              />
            </form>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-80 bg-zion-blue-dark/95 backdrop-blur-xl border-l border-zion-purple/30 shadow-2xl shadow-zion-purple/20">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
                <h2 className="text-xl font-semibold text-white">Menu</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMobileMenu}
                  className="text-zion-slate-light hover:text-zion-cyan"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <nav className="flex-1 p-4 space-y-6">
                <div>
                  <h3 className="text-zion-cyan font-semibold mb-3">Services</h3>
                  <div className="space-y-2 ml-4">
                    <Link to="/services" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      IT & AI Services
                    </Link>
                    <Link to="/micro-saas-services" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Micro SAAS Services
                    </Link>
                    <Link to="/it-onsite-services" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Onsite Services
                    </Link>
                    <Link to="/equipment" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Equipment
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-zion-purple font-semibold mb-3">Solutions</h3>
                  <div className="space-y-2 ml-4">
                    <Link to="/zion-hire-ai" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Zion Hire AI
                    </Link>
                    <Link to="/match" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      AI Matcher
                    </Link>
                    <Link to="/talent" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Talent Directory
                    </Link>
                    <Link to="/enterprise" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Enterprise
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-zion-cyan font-semibold mb-3">Company</h3>
                  <div className="space-y-2 ml-4">
                    <Link to="/community" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Community
                    </Link>
                    <Link to="/blog" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Blog
                    </Link>
                    <Link to="/partners" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Partners
                    </Link>
                    <Link to="/contact" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Contact
                    </Link>
                  </div>
                </div>
              </nav>

              <div className="p-4 border-t border-zion-purple/20">
                <Button className="w-full bg-zion-cyan text-zion-slate hover:bg-zion-cyan/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
