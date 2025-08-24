
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
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  Search, 
  Sparkles, 
  Zap, 
  Brain, 
  Shield,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

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

  const enhancedNavigationItems = [
    {
      label: 'Services',
      href: '/micro-saas-services',
      icon: <Sparkles className="w-4 h-4" />,
      description: 'AI & IT Solutions',
      badge: 'New'
    },
    {
      label: 'Marketplace',
      href: '/marketplace',
      icon: <Zap className="w-4 h-4" />,
      description: 'Products & Talent'
    },
    {
      label: 'AI Tools',
      href: '/zion-hire-ai',
      icon: <Brain className="w-4 h-4" />,
      description: 'AI Recruiting'
    },
    {
      label: 'Support',
      href: '/it-onsite-services',
      icon: <Shield className="w-4 h-4" />,
      description: 'IT Onsite Services'
    }
  ];
  
  return (
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

        {/* Enhanced Search */}
        <form onSubmit={handleSubmit} className="hidden md:block w-80 mx-4">
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
        <div className="flex items-center gap-3 hidden md:flex">
          <LanguageSelector />
          {!hideLogin && <UserMenu />}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zion-blue-dark/95 backdrop-blur-xl border-t border-zion-purple/20">
          <div className="container px-4 py-6">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services, products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                />
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-4 mb-6">
              {enhancedNavigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-colors group"
                >
                  <div className="text-zion-cyan group-hover:text-zion-purple transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">{item.label}</span>
                      {item.badge && (
                        <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-zion-slate-light text-sm">{item.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-zion-blue-light">
              <LanguageSelector />
              {!hideLogin && <UserMenu />}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Navigation Bar for Larger Screens */}
      <div className="hidden xl:block border-t border-zion-purple/10 bg-zion-blue-dark/50">
        <div className="container px-4">
          <div className="flex items-center justify-center py-3 space-x-8">
            {enhancedNavigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300"
              >
                <div className="text-zion-cyan group-hover:text-zion-purple transition-colors">
                  {item.icon}
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                      {item.label}
                    </span>
                    {item.badge && (
                      <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-zion-slate-light text-xs group-hover:text-zion-slate-light/80 transition-colors">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
