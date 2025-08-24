
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
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Cloud, 
  Shield, 
  Code, 
  BarChart3,
  Settings,
  Link as LinkIcon,
  Bot,
  Building,
  Users,
  HardDrive,
  Lightbulb
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
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    {
      label: "Services",
      href: "/services",
      icon: <Code className="h-4 w-4" />,
      dropdown: [
        { label: "IT Services", href: "/services", icon: <Cloud className="h-4 w-4" /> },
        { label: "AI Services", href: "/micro-saas-services?category=ai", icon: <Bot className="h-4 w-4" /> },
        { label: "Development", href: "/micro-saas-services?category=dev", icon: <Code className="h-4 w-4" /> },
        { label: "Security", href: "/micro-saas-services?category=security", icon: <Shield className="h-4 w-4" /> },
        { label: "Analytics", href: "/micro-saas-services?category=analytics", icon: <BarChart3 className="h-4 w-4" /> },
        { label: "Automation", href: "/micro-saas-services?category=automation", icon: <Settings className="h-4 w-4" /> },
        { label: "Integration", href: "/micro-saas-services?category=integration", icon: <LinkIcon className="h-4 w-4" /> }
      ]
    },
    {
      label: "Micro SAAS",
      href: "/micro-saas-services",
      icon: <Zap className="h-4 w-4" />,
      isNew: true,
      dropdown: [
        { label: "AI Chatbot Builder", href: "/micro-saas-services?service=ai-chatbot-builder", icon: "🤖", price: "$29/month" },
        { label: "Smart CRM System", href: "/micro-saas-services?service=customer-relationship", icon: "👥", price: "$19/month" },
        { label: "Inventory Management", href: "/micro-saas-services?service=inventory-management", icon: "📦", price: "$9/month" },
        { label: "Project Management", href: "/micro-saas-services?service=project-management", icon: "📋", price: "$14/month" },
        { label: "View All Solutions", href: "/micro-saas-services", icon: <Zap className="h-4 w-4" /> }
      ]
    },
    {
      label: "Talent",
      href: "/talent",
      icon: <Users className="h-4 w-4" />,
      dropdown: [
        { label: "AI Experts", href: "/talent?category=ai", icon: <Bot className="h-4 w-4" /> },
        { label: "Developers", href: "/talent?category=development", icon: <Code className="h-4 w-4" /> },
        { label: "Data Scientists", href: "/talent?category=data", icon: <BarChart3 className="h-4 w-4" /> },
        { label: "Security Specialists", href: "/talent?category=security", icon: <Shield className="h-4 w-4" /> },
        { label: "Browse All", href: "/talent", icon: <Users className="h-4 w-4" /> }
      ]
    },
    {
      label: "Equipment",
      href: "/equipment",
      icon: <HardDrive className="h-4 w-4" />,
      dropdown: [
        { label: "AI Workstations", href: "/equipment?category=ai", icon: <Bot className="h-4 w-4" /> },
        { label: "Servers", href: "/equipment?category=servers", icon: <Cloud className="h-4 w-4" /> },
        { label: "Networking", href: "/equipment?category=networking", icon: <LinkIcon className="h-4 w-4" /> },
        { label: "Browse All", href: "/equipment", icon: <HardDrive className="h-4 w-4" /> }
      ]
    },
    {
      label: "Enterprise",
      href: "/enterprise",
      icon: <Building className="h-4 w-4" />,
      dropdown: [
        { label: "White-label Solutions", href: "/enterprise/white-label", icon: <Building className="h-4 w-4" /> },
        { label: "Custom Development", href: "/enterprise/custom", icon: <Code className="h-4 w-4" /> },
        { label: "Consulting", href: "/enterprise/consulting", icon: <Users className="h-4 w-4" /> },
        { label: "Support Plans", href: "/enterprise/support", icon: <Shield className="h-4 w-4" /> }
      ]
    }
  ];
  
  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md shadow-lg"
      style={headerStyle}
    >
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        {/* Desktop Navigation */}
        <nav className="ml-6 flex-1 hidden lg:flex">
          <ul className="flex space-x-8">
            {navigationItems.map((item) => (
              <li key={item.label} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center space-x-1 px-3 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors font-medium"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.isNew && (
                    <Badge variant="secondary" className="ml-1 bg-green-500/20 text-green-400 text-xs">
                      New
                    </Badge>
                  )}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                
                {/* Dropdown Menu */}
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/20 rounded-lg shadow-2xl z-50">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.dropdown?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            to={dropdownItem.href}
                            onClick={closeMobileMenu}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-colors group"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="text-lg">{dropdownItem.icon}</div>
                              <span className="text-white group-hover:text-zion-cyan transition-colors">
                                {dropdownItem.label}
                              </span>
                            </div>
                            {dropdownItem.price && (
                              <span className="text-zion-cyan font-medium text-sm">
                                {dropdownItem.price}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

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
            size="icon"
            className="lg:hidden text-zion-slate-light hover:text-zion-cyan"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zion-blue-dark border-t border-zion-purple/20">
          <div className="container px-4 py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="mb-6">
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
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full p-3 text-left text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                      {item.isNew && (
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 text-xs">
                          New
                        </Badge>
                      )}
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === item.label && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.dropdown?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          onClick={closeMobileMenu}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="text-lg">{dropdownItem.icon}</div>
                            <span className="text-zion-slate-light">
                              {dropdownItem.label}
                            </span>
                          </div>
                          {dropdownItem.price && (
                            <span className="text-zion-cyan font-medium text-sm">
                              {dropdownItem.price}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
