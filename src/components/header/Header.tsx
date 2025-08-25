
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
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Database,
  TrendingUp,
  Users,
  Briefcase,
  HardDrive,
  Lightbulb
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const servicesMenuItems = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions",
      icon: <Brain className="h-5 w-5" />,
      link: "/services?category=ai-services",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "IT Infrastructure",
      description: "Complete IT solutions",
      icon: <Shield className="h-5 w-5" />,
      link: "/services?category=it-services",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Micro SAAS Solutions",
      description: "Custom business applications",
      icon: <Cloud className="h-5 w-5" />,
      link: "/services?category=saas-solutions",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Data & Analytics",
      description: "Advanced data solutions",
      icon: <Database className="h-5 w-5" />,
      link: "/services?category=data-services",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Cybersecurity",
      description: "Security & compliance",
      icon: <Shield className="h-5 w-5" />,
      link: "/services?category=cybersecurity",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end transformation",
      icon: <TrendingUp className="h-5 w-5" />,
      link: "/services?category=digital-transformation",
      color: "from-violet-500 to-purple-600"
    }
  ];
  
  return (
    <>
      <header 
        className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md shadow-lg shadow-zion-purple/10"
        style={headerStyle}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

          {/* Desktop Navigation */}
          <div className="ml-6 flex-1 hidden lg:block">
            <MainNavigation />
            
            {/* Services Dropdown */}
            <div className="relative inline-block ml-4">
              <Button
                variant="ghost"
                className="text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                onClick={toggleServicesDropdown}
              >
                Services
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-xl shadow-zion-purple/20 backdrop-blur-md">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {servicesMenuItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          className="group p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-200"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} text-white`}>
                              {item.icon}
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {item.title}
                              </div>
                              <div className="text-sm text-zion-slate-light">
                                {item.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-zion-purple/30">
                      <Link
                        to="/services"
                        className="block text-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
              className="lg:hidden text-white hover:bg-zion-purple/10"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md">
            <div className="container px-4 py-4">
              <div className="space-y-4">
                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  <Link
                    to="/"
                    className="block px-3 py-2 text-white hover:bg-zion-purple/10 hover:text-zion-cyan rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/marketplace"
                    className="block px-3 py-2 text-white hover:bg-zion-purple/10 hover:text-zion-cyan rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Marketplace
                  </Link>
                  <Link
                    to="/talent"
                    className="block px-3 py-2 text-white hover:bg-zion-purple/10 hover:text-zion-cyan rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Talent
                  </Link>
                  <Link
                    to="/equipment"
                    className="block px-3 py-2 text-white hover:bg-zion-purple/10 hover:text-zion-cyan rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Equipment
                  </Link>
                  <Link
                    to="/community"
                    className="block px-3 py-2 text-white hover:bg-zion-purple/10 hover:text-zion-cyan rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Community
                  </Link>
                </nav>

                {/* Mobile Services */}
                <div className="border-t border-zion-purple/20 pt-4">
                  <h3 className="px-3 text-sm font-medium text-zion-cyan mb-2">Services</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {servicesMenuItems.slice(0, 4).map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        className="p-3 rounded-lg bg-zion-blue-dark/50 border border-zion-purple/20 hover:border-zion-purple/40 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex items-center space-x-2">
                          <div className={`p-1 rounded bg-gradient-to-br ${item.color} text-white`}>
                            {item.icon}
                          </div>
                          <span className="text-sm text-white">{item.title}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/services"
                    className="block mt-3 px-3 py-2 text-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>

                {/* Mobile Search */}
                <div className="border-t border-zion-purple/20 pt-4">
                  <form onSubmit={handleSubmit}>
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
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Click outside to close dropdowns */}
      {isServicesDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsServicesDropdownOpen(false)}
        />
      )}
    </>
  );
}
