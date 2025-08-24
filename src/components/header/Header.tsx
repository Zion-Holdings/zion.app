
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
  ChevronDown, 
  Sparkles, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Building,
  Globe,
  Star
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const megaMenuItems = [
    {
      title: "AI & Technology",
      icon: <Zap className="h-5 w-5 text-zion-cyan" />,
      description: "Cutting-edge AI solutions and tech services",
      items: [
        { name: "AI Development", href: "/services", description: "Custom AI solutions" },
        { name: "Machine Learning", href: "/services", description: "ML model development" },
        { name: "AI Integration", href: "/services", description: "Seamless AI integration" },
        { name: "Zion Hire AI", href: "/zion-hire-ai", description: "AI-powered recruiting" }
      ]
    },
    {
      title: "Micro SAAS Services",
      icon: <Sparkles className="h-5 w-5 text-zion-purple-light" />,
      description: "Innovative micro SAAS solutions",
      items: [
        { name: "Business Tools", href: "/micro-saas-services", description: "Productivity & collaboration" },
        { name: "Security Solutions", href: "/micro-saas-services", description: "Cybersecurity & compliance" },
        { name: "Analytics Platform", href: "/micro-saas-services", description: "Data visualization & BI" },
        { name: "Marketing Tools", href: "/micro-saas-services", description: "AI-powered marketing" }
      ]
    },
    {
      title: "Enterprise Solutions",
      icon: <Building className="h-5 w-5 text-zion-blue-light" />,
      description: "Scalable enterprise-grade solutions",
      items: [
        { name: "White-label Solutions", href: "/enterprise", description: "Custom branded platforms" },
        { name: "API Integration", href: "/developers", description: "Developer tools & APIs" },
        { name: "Consulting Services", href: "/services", description: "Expert IT consulting" },
        { name: "Onsite Support", href: "/it-onsite-services", description: "Global IT services" }
      ]
    }
  ];
  
  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/30 shadow-2xl shadow-zion-cyan/10' 
          : 'bg-zion-slate-dark/90 backdrop-blur-md border-b border-zion-purple/20'
      }`}
      style={headerStyle}
    >
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        {/* Desktop Navigation */}
        <div className="ml-6 flex-1 hidden lg:block">
          <MainNavigation />
        </div>

        {/* Desktop Search */}
        <form onSubmit={handleSubmit} className="hidden lg:block w-80 mx-6">
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

        {/* Desktop Right Side */}
        <div className="flex items-center gap-2 hidden lg:flex">
          <LanguageSelector />
          {!hideLogin && <UserMenu />}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden ml-auto p-2 text-white hover:bg-zion-purple/20"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zion-slate-dark border-t border-zion-blue-light">
          <div className="container px-4 py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="mb-4">
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

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <Link
                to="/"
                className="block px-4 py-2 text-white hover:bg-zion-purple/20 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/marketplace"
                className="block px-4 py-2 text-white hover:bg-zion-purple/20 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Marketplace
              </Link>
              <Link
                to="/micro-saas-services"
                className="block px-4 py-2 text-white hover:bg-zion-purple/20 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Micro SAAS Services
              </Link>
              <Link
                to="/talent"
                className="block px-4 py-2 text-white hover:bg-zion-purple/20 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Talent
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 text-white hover:bg-zion-purple/20 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link
                to="/community"
                className="block px-4 py-2 text-white hover:bg-zion-purple/20 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Community
              </Link>
              {user && (
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-white hover:bg-zion-purple/20 rounded-md transition-colors"
                  onClick={closeMobileMenu}
                >
                  Dashboard
                </Link>
              )}
            </nav>

            {/* Mobile Language & User */}
            <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">
              <LanguageSelector />
              {!hideLogin && <UserMenu />}
            </div>
          </div>
        </div>
      )}

      {/* Mega Menu for Desktop */}
      <div className="hidden lg:block border-t border-zion-blue-light/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 py-2">
            {megaMenuItems.map((section) => (
              <div key={section.title} className="relative group">
                <button
                  className="flex items-center gap-2 px-4 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors font-medium"
                  onClick={() => handleDropdownToggle(section.title)}
                >
                  {section.icon}
                  {section.title}
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === section.title ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Content */}
                {activeDropdown === section.title && (
                  <div className="absolute top-full left-0 w-80 bg-zion-slate-dark border border-zion-blue-light rounded-lg shadow-2xl shadow-zion-cyan/20 p-6 z-50">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-white mb-2">{section.title}</h3>
                      <p className="text-sm text-zion-slate-light">{section.description}</p>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block p-3 rounded-md hover:bg-zion-blue-dark/30 transition-colors group/item"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="font-medium text-white group-hover/item:text-zion-cyan transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-zion-slate-light">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
