import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3,
  Globe,
  Smartphone,
  TrendingUp,
  Briefcase,
  Zap,
  Server,
  Monitor,
  MapPin
} from 'lucide-react';

export interface EnhancedHeaderProps {
  hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
}

interface NavigationItemType {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    icon?: React.ElementType;
    description?: string;
  }>;
}

const NavigationItem = ({ item }: { item: NavigationItemType }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (item.children) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 px-4 py-2 text-zion-slate-300 hover:text-zion-cyan transition-colors duration-200 group"
        >
          <span>{item.label}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-900/95 backdrop-blur-xl border border-zion-slate-700 rounded-xl shadow-2xl z-50 animate-in slide-in-from-top-2 duration-200">
            <div className="p-2">
              {item.children.map((child, index) => (
                <Link
                  key={index}
                  to={child.href}
                  className="flex items-center space-x-3 px-4 py-3 text-zion-slate-300 hover:text-zion-cyan hover:bg-zion-slate-800/50 rounded-lg transition-all duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  {child.icon && <child.icon className="w-5 h-5 text-zion-cyan group-hover:text-zion-cyan" />}
                  <div>
                    <div className="font-medium text-zion-slate-200 group-hover:text-zion-cyan">{child.label}</div>
                    {child.description && (
                      <div className="text-sm text-zion-slate-400 group-hover:text-zion-slate-300">{child.description}</div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.href}
      className="px-4 py-2 text-zion-slate-300 hover:text-zion-cyan transition-colors duration-200"
    >
      {item.label}
    </Link>
  );
};

const navigationItems: NavigationItemType[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    children: [
      { label: 'IT Services', href: '/services', icon: Server, description: 'Professional IT solutions' },
      { label: 'AI Experts', href: '/talent', icon: Brain, description: 'Find AI specialists' },
      { label: 'Hardware', href: '/equipment', icon: Monitor, description: 'IT equipment & hardware' },
      { label: 'Onsite Services', href: '/it-onsite-services', icon: MapPin, description: 'On-site IT support' },
      { label: 'Comprehensive Services', href: '/comprehensive-services', icon: Zap, description: 'Full tech solutions' }
    ]
  },
  { label: 'Talent', href: '/talent' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

const MobileMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 lg:hidden"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-zion-slate-900/95 backdrop-blur-xl border-l border-zion-slate-700 shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-zion-slate-700">
              <Logo />
              <button
                onClick={onClose}
                className="p-2 text-zion-slate-400 hover:text-zion-cyan transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="p-6">
              <ul className="space-y-4">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    {item.children ? (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-zion-slate-400 uppercase tracking-wider">
                          {item.label}
                        </div>
                        <ul className="ml-4 space-y-2">
                          {item.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              <Link
                                to={child.href}
                                onClick={onClose}
                                className="flex items-center space-x-3 px-3 py-2 text-zion-slate-300 hover:text-zion-cyan hover:bg-zion-slate-800/50 rounded-lg transition-all duration-200"
                              >
                                {child.icon && <child.icon className="w-4 h-4 text-zion-cyan" />}
                                <span>{child.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className="block px-3 py-2 text-zion-slate-300 hover:text-zion-cyan hover:bg-zion-slate-800/50 rounded-lg transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export function EnhancedHeader({ hideLogin = false, customLogo, customTheme }: EnhancedHeaderProps) {
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  const servicesDropdownItems = [
    {
      to: '/services',
      label: 'IT Services',
      icon: <Briefcase className="w-5 h-5" />,
      description: 'Comprehensive IT solutions and consulting'
    },
    {
      to: '/talent',
      label: 'AI Experts',
      icon: <Brain className="w-5 h-5" />,
      description: 'Machine learning and AI specialists'
    },
    {
      to: '/equipment',
      label: 'Hardware',
      icon: <Zap className="w-5 h-5" />,
      description: 'Servers, workstations, and equipment'
    },
    {
      to: '/it-onsite-services',
      label: 'Onsite Services',
      icon: <Globe className="w-5 h-5" />,
      description: 'Global IT support and implementation'
    }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled 
            ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-zion-purple/30 shadow-lg shadow-zion-purple/20' 
            : 'bg-zion-blue-dark/90 backdrop-blur-md border-zion-purple/20'
        }`}
        style={headerStyle}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          {/* Logo */}
          <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

          {/* Desktop Navigation */}
          <nav className="ml-6 flex-1 hidden lg:block">
            <ul className="flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <NavigationItem item={item} />
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

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <LanguageSelector />
            {!hideLogin && <UserMenu />}
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}