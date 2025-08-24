
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
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

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
            ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20' 
            : 'bg-zion-slate-dark/80 backdrop-blur-md border-b border-zion-purple/20'
        }`}
        style={headerStyle}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

          {/* Desktop Navigation */}
          <div className="ml-6 flex-1 hidden lg:block">
            <MainNavigation />
          </div>

          {/* Services Dropdown */}
          <div className="hidden lg:block ml-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-zion-purple/20 hover:text-zion-cyan transition-colors"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Services
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center" 
                className="w-80 bg-zion-slate-dark border-zion-purple/30 backdrop-blur-xl"
              >
                <div className="grid grid-cols-2 gap-2 p-2">
                  <DropdownMenuItem asChild>
                    <Link to="/services" className="flex items-center gap-3 p-3 rounded-lg hover:bg-zion-purple/20">
                      <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white">All Services</div>
                        <div className="text-sm text-zion-slate-light">Complete service catalog</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild>
                    <Link to="/services?category=AI Services" className="flex items-center gap-3 p-3 rounded-lg hover:bg-zion-purple/20">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                        <Brain className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white">AI Services</div>
                        <div className="text-sm text-zion-slate-light">AI-powered solutions</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild>
                    <Link to="/services?category=IT Services" className="flex items-center gap-3 p-3 rounded-lg hover:bg-zion-purple/20">
                      <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                        <Settings className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white">IT Services</div>
                        <div className="text-sm text-zion-slate-light">Technical support & solutions</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild>
                    <Link to="/services?category=Micro SAAS" className="flex items-center gap-3 p-3 rounded-lg hover:bg-zion-purple/20">
                      <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                        <Building className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white">Micro SAAS</div>
                        <div className="text-sm text-zion-slate-light">Business software solutions</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
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

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <LanguageSelector />
            {!hideLogin && <UserMenu />}
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:bg-zion-purple/20 hover:text-zion-cyan"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-zion-purple/20 bg-zion-slate-dark/95 backdrop-blur-xl">
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
              <nav className="space-y-2">
                <Link
                  to="/"
                  className="block px-3 py-2 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                <Link
                  to="/services"
                  className="block px-3 py-2 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  All Services
                </Link>
                
                <Link
                  to="/marketplace"
                  className="block px-3 py-2 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Marketplace
                </Link>
                
                <Link
                  to="/talent"
                  className="block px-3 py-2 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Talent
                </Link>
                
                <Link
                  to="/equipment"
                  className="block px-3 py-2 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Equipment
                </Link>
                
                <Link
                  to="/community"
                  className="block px-3 py-2 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Community
                </Link>
                
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>

              {/* Mobile Services Quick Links */}
              <div className="mt-6 pt-4 border-t border-zion-purple/20">
                <h4 className="text-sm font-medium text-zion-cyan mb-3 px-3">Quick Services</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/services?category=AI Services"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Brain className="h-4 w-4" />
                    AI Services
                  </Link>
                  
                  <Link
                    to="/services?category=IT Services"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Settings className="h-4 w-4" />
                    IT Services
                  </Link>
                  
                  <Link
                    to="/services?category=Micro SAAS"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Building className="h-4 w-4" />
                    Micro SAAS
                  </Link>
                  
                  <Link
                    to="/services?category=Development"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Code className="h-4 w-4" />
                    Development
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

// Missing icon components
const Brain = ({ className, ...props }: any) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Settings = ({ className, ...props }: any) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Building = ({ className, ...props }: any) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Code = ({ className, ...props }: any) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);
