
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
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  Globe,
  Building,
  Users,
  Zap,
  Code,
  Shield,
  BarChart3,
  Cloud,
  Brain,
  Network,
  Video,
  Eye,
  Server,
  MessageSquare,
  TrendingUp,
  Lightbulb,
  Settings,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Handshake,
  FileText
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
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Services menu items
  const servicesMenuItems = [
    { title: "AI Development", icon: Brain, link: "/ai-development", description: "Custom AI solutions" },
    { title: "Cloud Services", icon: Cloud, link: "/cloud-services", description: "AWS, Azure, GCP" },
    { title: "Cybersecurity", icon: Shield, link: "/cybersecurity", description: "Security & compliance" },
    { title: "Data Analytics", icon: BarChart3, link: "/data-analytics", description: "Business intelligence" },
    { title: "DevOps", icon: Zap, link: "/devops", description: "Automation & CI/CD" },
    { title: "Blockchain", icon: Network, link: "/blockchain", description: "Web3 & DeFi" },
    { title: "IoT Solutions", icon: Network, link: "/iot-solutions", description: "Connected devices" },
    { title: "Video Analytics", icon: Video, link: "/video-analytics", description: "AI video processing" }
  ];

  // Solutions menu items
  const solutionsMenuItems = [
    { title: "Enterprise", icon: Building, link: "/enterprise", description: "Large organizations" },
    { title: "Startups", icon: TrendingUp, link: "/startups", description: "Growing businesses" },
    { title: "Healthcare", icon: Shield, link: "/healthcare", description: "Medical & pharma" },
    { title: "Fintech", icon: BarChart3, link: "/fintech", description: "Financial services" },
    { title: "Education", icon: Users, link: "/education", description: "EdTech solutions" },
    { title: "Retail", icon: BarChart3, link: "/retail", description: "E-commerce & retail" },
    { title: "Manufacturing", icon: Settings, link: "/manufacturing", description: "Industry 4.0" },
    { title: "Government", icon: Building, link: "/government", description: "Public sector" }
  ];

  // Company menu items
  const companyMenuItems = [
    { title: "About Us", icon: Users, link: "/about", description: "Our story & mission" },
    { title: "Careers", icon: TrendingUp, link: "/careers", description: "Join our team" },
    { title: "Partners", icon: Handshake, link: "/partners", description: "Strategic alliances" },
    { title: "Contact", icon: Phone, link: "/contact", description: "Get in touch" },
    { title: "Support", icon: HelpCircle, link: "/support", description: "Help & resources" },
    { title: "Blog", icon: FileText, link: "/blog", description: "Latest insights" }
  ];

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-zion-slate-dark border-b border-zion-blue-light/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zion-slate-light">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-3 w-3" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header 
        className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md shadow-lg"
        style={headerStyle}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-zion-cyan hover:text-white transition-colors py-2"
                  onMouseEnter={() => setIsServicesMenuOpen(true)}
                  onMouseLeave={() => setIsServicesMenuOpen(false)}
                >
                  <Zap className="h-4 w-4" />
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {isServicesMenuOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-xl backdrop-blur-md"
                    onMouseEnter={() => setIsServicesMenuOpen(true)}
                    onMouseLeave={() => setIsServicesMenuOpen(false)}
                  >
                    <div className="p-4">
                      <h3 className="text-zion-cyan font-semibold mb-3">Our Services</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {servicesMenuItems.map((item) => (
                          <Link
                            key={item.title}
                            to={item.link}
                            className="flex items-start space-x-3 p-2 rounded hover:bg-zion-purple/10 transition-colors group"
                          >
                            <item.icon className="h-5 w-5 text-zion-cyan mt-0.5" />
                            <div>
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {item.title}
                              </div>
                              <div className="text-xs text-zion-slate-light">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-zion-cyan hover:text-white transition-colors py-2"
                  onMouseEnter={() => setIsSolutionsMenuOpen(true)}
                  onMouseLeave={() => setIsSolutionsMenuOpen(false)}
                >
                  <Eye className="h-4 w-4" />
                  <span>Solutions</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {isSolutionsMenuOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-xl backdrop-blur-md"
                    onMouseEnter={() => setIsSolutionsMenuOpen(true)}
                    onMouseLeave={() => setIsSolutionsMenuOpen(false)}
                  >
                    <div className="p-4">
                      <h3 className="text-zion-cyan font-semibold mb-3">Industry Solutions</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {solutionsMenuItems.map((item) => (
                          <Link
                            key={item.title}
                            to={item.link}
                            className="flex items-start space-x-3 p-2 rounded hover:bg-zion-purple/10 transition-colors group"
                          >
                            <item.icon className="h-5 w-5 text-zion-cyan mt-0.5" />
                            <div>
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {item.title}
                              </div>
                              <div className="text-xs text-zion-slate-light">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-zion-cyan hover:text-white transition-colors py-2"
                  onMouseEnter={() => setIsCompanyMenuOpen(true)}
                  onMouseLeave={() => setIsCompanyMenuOpen(false)}
                >
                  <Building className="h-4 w-4" />
                  <span>Company</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {isCompanyMenuOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-xl backdrop-blur-md"
                    onMouseEnter={() => setIsCompanyMenuOpen(true)}
                    onMouseLeave={() => setIsCompanyMenuOpen(false)}
                  >
                    <div className="p-4">
                      <h3 className="text-zion-cyan font-semibold mb-3">About Zion</h3>
                      <div className="space-y-2">
                        {companyMenuItems.map((item) => (
                          <Link
                            key={item.title}
                            to={item.link}
                            className="flex items-center space-x-3 p-2 rounded hover:bg-zion-purple/10 transition-colors group"
                          >
                            <item.icon className="h-5 w-5 text-zion-cyan" />
                            <div>
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {item.title}
                              </div>
                              <div className="text-xs text-zion-slate-light">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Links */}
              <Link to="/marketplace" className="text-zion-cyan hover:text-white transition-colors">
                Marketplace
              </Link>
              <Link to="/talent" className="text-zion-cyan hover:text-white transition-colors">
                Talent
              </Link>
              <Link to="/blog" className="text-zion-cyan hover:text-white transition-colors">
                Blog
              </Link>
            </nav>

            {/* Search Bar */}
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

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              <LanguageSelector />
              {!hideLogin && <UserMenu />}
              
              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 text-zion-cyan hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mobile-menu bg-zion-blue-dark border-t border-zion-purple/20">
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Search */}
              <form onSubmit={handleSubmit} className="mb-6">
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
              <div className="space-y-4">
                <div>
                  <h3 className="text-zion-cyan font-semibold mb-2">Services</h3>
                  <div className="space-y-2 pl-4">
                    {servicesMenuItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.link}
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-zion-cyan font-semibold mb-2">Solutions</h3>
                  <div className="space-y-2 pl-4">
                    {solutionsMenuItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.link}
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-zion-cyan font-semibold mb-2">Quick Links</h3>
                  <div className="space-y-2 pl-4">
                    <Link to="/marketplace" className="block text-zion-slate-light hover:text-zion-cyan transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      Marketplace
                    </Link>
                    <Link to="/talent" className="block text-zion-slate-light hover:text-zion-cyan transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      Talent
                    </Link>
                    <Link to="/blog" className="block text-zion-slate-light hover:text-zion-cyan transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
