import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Sparkles,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Link as LinkIcon,
  PenTool
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface EnhancedHeaderProps {
  hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
}

export function EnhancedHeader({ hideLogin = false, customLogo, customTheme }: EnhancedHeaderProps) {
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchSuggestions = generateSearchSuggestions();
  
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#000000',
    textColor: '#ffffff',
  } : undefined);
  
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor,
    color: effectiveTheme.textColor,
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {};

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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

  const servicesMenu = [
    {
      title: "AI & Chatbots",
      description: "Intelligent conversational AI solutions",
      icon: <Brain className="w-5 h-5" />,
      link: "/micro-saas-services#ai-chatbots",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity",
      description: "Advanced threat protection & compliance",
      icon: <Shield className="w-5 h-5" />,
      link: "/micro-saas-services#cybersecurity",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud Management",
      description: "Multi-cloud optimization & monitoring",
      icon: <Cloud className="w-5 h-5" />,
      link: "/micro-saas-services#cloud-management",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "DevOps & Automation",
      description: "CI/CD pipelines & infrastructure",
      icon: <Code className="w-5 h-5" />,
      link: "/micro-saas-services#devops",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data & Analytics",
      description: "Business intelligence & insights",
      icon: <Database className="w-5 h-5" />,
      link: "/micro-saas-services#data-analytics",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "IoT & Edge Computing",
      description: "Connected devices & real-time processing",
      icon: <Monitor className="w-5 h-5" />,
      link: "/micro-saas-services#iot",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20' 
            : 'bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-blue-light/20'
        }`}
        style={headerStyle}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex ml-8 space-x-1">
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === '/'
                      ? 'bg-zion-purple/20 text-zion-cyan shadow-lg shadow-zion-purple/20'
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  }`}
                >
                  Home
                </Link>
                
                {/* Services Dropdown */}
                <div className="relative">
                  <Button
                    variant="ghost"
                    className={`px-4 py-2 h-auto text-sm font-medium transition-all duration-200 ${
                      location.pathname.startsWith('/micro-saas-services') || location.pathname.startsWith('/services')
                        ? 'bg-zion-purple/20 text-zion-cyan shadow-lg shadow-zion-purple/20'
                        : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                    }`}
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    Services
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                      isServicesDropdownOpen ? 'rotate-180' : ''
                    }`} />
                  </Button>
                  
                  {/* Services Dropdown Menu */}
                  {isServicesDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 p-4"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {servicesMenu.map((service) => (
                          <Link
                            key={service.title}
                            to={service.link}
                            className="group p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-200"
                          >
                            <div className="flex items-start gap-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} text-white group-hover:scale-110 transition-transform duration-200`}>
                                {service.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold text-white group-hover:text-zion-cyan transition-colors">
                                  {service.title}
                                </h4>
                                <p className="text-xs text-zion-slate-light mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-zion-purple/20">
                        <Link
                          to="/micro-saas-services"
                          className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-200"
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          View All Services
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                
                <Link
                  to="/marketplace"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname.startsWith('/marketplace')
                      ? 'bg-zion-purple/20 text-zion-cyan shadow-lg shadow-zion-purple/20'
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  }`}
                >
                  Marketplace
                </Link>
                
                <Link
                  to="/talent"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname.startsWith('/talent')
                      ? 'bg-zion-purple/20 text-zion-cyan shadow-lg shadow-zion-purple/20'
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  }`}
                >
                  Talent
                </Link>
                
                <Link
                  to="/equipment"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname.startsWith('/equipment')
                      ? 'bg-zion-purple/20 text-zion-cyan shadow-lg shadow-zion-purple/20'
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  }`}
                >
                  Equipment
                </Link>
                
                <Link
                  to="/community"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname.startsWith('/community')
                      ? 'bg-zion-purple/20 text-zion-cyan shadow-lg shadow-zion-purple/20'
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  }`}
                >
                  Community
                </Link>
              </nav>
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <form onSubmit={handleSubmit} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
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
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* New Services Badge */}
              <Link to="/micro-saas-services">
                <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0 hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-200 cursor-pointer">
                  <Zap className="w-3 h-3 mr-1" />
                  New Services
                </Badge>
              </Link>
              
              {/* Language Selector */}
              <LanguageSelector />
              
              {/* User Menu */}
              {!hideLogin && <UserMenu />}
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-zion-blue-dark/95 backdrop-blur-xl">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-zion-blue-light/20">
              <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Mobile Search */}
            <div className="p-4 border-b border-zion-blue-light/20">
              <form onSubmit={handleSubmit} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services, talent, equipment..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/50 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </form>
            </div>
            
            {/* Mobile Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link
                to="/micro-saas-services"
                className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>Services</span>
                  <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs">
                    New
                  </Badge>
                </div>
              </Link>
              
              <Link
                to="/marketplace"
                className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Marketplace
              </Link>
              
              <Link
                to="/talent"
                className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Talent
              </Link>
              
              <Link
                to="/equipment"
                className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Equipment
              </Link>
              
              <Link
                to="/community"
                className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </Link>
            </nav>
            
            {/* Mobile CTA */}
            <div className="p-4 border-t border-zion-blue-light/20">
              <Link
                to="/contact"
                className="block w-full px-4 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white text-center rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}