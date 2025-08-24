
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
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Zap, 
  Brain, 
  Cloud, 
  Shield,
  Users,
  Building,
  Code,
  Globe
} from "lucide-react";

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
      setIsSearchExpanded(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    {
      label: "Marketplace",
      href: "/marketplace",
      icon: <Globe className="h-4 w-4" />,
      children: [
        { label: "AI & ML Services", href: "/micro-saas-services", icon: <Brain className="h-4 w-4" /> },
        { label: "IT Services", href: "/services", icon: <Zap className="h-4 w-4" /> },
        { label: "Cloud Solutions", href: "/services", icon: <Cloud className="h-4 w-4" /> },
        { label: "Cybersecurity", href: "/services", icon: <Shield className="h-4 w-4" /> },
      ]
    },
    {
      label: "Talent",
      href: "/talent",
      icon: <Users className="h-4 w-4" />,
      children: [
        { label: "AI Engineers", href: "/talent", icon: <Brain className="h-4 w-4" /> },
        { label: "DevOps Specialists", href: "/talent", icon: <Code className="h-4 w-4" /> },
        { label: "Data Scientists", href: "/talent", icon: <Brain className="h-4 w-4" /> },
        { label: "Full-Stack Developers", href: "/talent", icon: <Code className="h-4 w-4" /> },
      ]
    },
    {
      label: "Enterprise",
      href: "/enterprise",
      icon: <Building className="h-4 w-4" />,
      children: [
        { label: "Custom Solutions", href: "/enterprise", icon: <Code className="h-4 w-4" /> },
        { label: "White-Label Platform", href: "/enterprise", icon: <Building className="h-4 w-4" /> },
        { label: "Dedicated Support", href: "/enterprise", icon: <Users className="h-4 w-4" /> },
        { label: "API Access", href: "/developers", icon: <Code className="h-4 w-4" /> },
      ]
    },
    {
      label: "Resources",
      href: "/blog",
      icon: <Code className="h-4 w-4" />,
      children: [
        { label: "Blog & Insights", href: "/blog", icon: <Code className="h-4 w-4" /> },
        { label: "Developer Docs", href: "/developers", icon: <Code className="h-4 w-4" /> },
        { label: "Community", href: "/community", icon: <Users className="h-4 w-4" /> },
        { label: "Help Center", href: "/help", icon: <Code className="h-4 w-4" /> },
      ]
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
        <nav className="hidden lg:flex ml-8 space-x-1">
          {navigationItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.href}
                className="flex items-center gap-2 px-4 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 rounded-lg hover:bg-zion-purple/10"
              >
                {item.icon}
                <span>{item.label}</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              
              {/* Dropdown Menu */}
              {item.children && (
                <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-zion-slate/95 backdrop-blur-xl border border-zion-purple/30 rounded-xl p-4 shadow-2xl shadow-zion-purple/20">
                    <div className="grid gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="flex items-center gap-3 p-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-200"
                          onClick={closeMobileMenu}
                        >
                          <div className="text-zion-purple-light">{child.icon}</div>
                          <span>{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden md:block flex-1 max-w-md mx-8">
          <form onSubmit={handleSubmit} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
            <input
              type="text"
              placeholder="Search AI services, talent, equipment..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-zion-slate/30 border border-zion-purple/30 rounded-lg text-white placeholder:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-zion-purple transition-all duration-200"
            />
          </form>
        </div>

        {/* Mobile Search Toggle */}
        <div className="md:hidden ml-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSearchExpanded(!isSearchExpanded)}
            className="text-zion-slate-light hover:text-zion-cyan"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 ml-auto">
          <LanguageSelector />
          {!hideLogin && <UserMenu />}
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="lg:hidden text-zion-slate-light hover:text-zion-cyan"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchExpanded && (
        <div className="md:hidden border-t border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-xl p-4">
          <form onSubmit={handleSubmit} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
            <input
              type="text"
              placeholder="Search AI services, talent, equipment..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-zion-slate/30 border border-zion-purple/30 rounded-lg text-white placeholder:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-zion-purple"
            />
          </form>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-xl">
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="flex items-center gap-3 p-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
                
                {/* Mobile Submenu */}
                {item.children && (
                  <div className="ml-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="flex items-center gap-3 p-2 text-zion-slate-light/80 hover:text-zion-cyan rounded-lg transition-colors"
                        onClick={closeMobileMenu}
                      >
                        <div className="text-zion-purple-light">{child.icon}</div>
                        <span className="text-sm">{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
