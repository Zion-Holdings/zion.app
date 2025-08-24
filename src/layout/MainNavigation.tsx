
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown, Users, Briefcase, Settings, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

interface DropdownItem {
  key: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const { t } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const baseLinks = [
    {
      key: 'home',
      href: '/',
      matches: (path: string) => path === '/'
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
    },
    {
      key: 'talent',
      href: '/talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
      key: 'equipment',
      href: '/equipment',
      matches: (path: string) => path.startsWith('/equipment')
    },
    {
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    },
    {
      key: 'company',
      href: '/about',
      matches: (path: string) => path.startsWith('/about') || path.startsWith('/careers') || path.startsWith('/partners') || path.startsWith('/contact')
    },
    {
      key: 'blog',
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog')
    }
  ];

  const marketplaceDropdown: DropdownItem[] = [
    { key: 'products', href: '/marketplace', icon: <Briefcase className="w-4 h-4" />, description: 'Browse products' },
    { key: 'services', href: '/services', icon: <Settings className="w-4 h-4" />, description: 'IT services' },
    { key: 'equipment', href: '/equipment', icon: <BarChart3 className="w-4 h-4" />, description: 'Tech equipment' },
    { key: 'green-it', href: '/green-it', icon: <Users className="w-4 h-4" />, description: 'Sustainable solutions' },
  ];

  const companyDropdown: DropdownItem[] = [
    { key: 'about', href: '/about', icon: <Users className="w-4 h-4" />, description: 'Learn about Zion' },
    { key: 'careers', href: '/careers', icon: <Briefcase className="w-4 h-4" />, description: 'Join our team' },
    { key: 'partners', href: '/partners', icon: <Users className="w-4 h-4" />, description: 'Partnership opportunities' },
    { key: 'contact', href: '/contact', icon: <MessageSquare className="w-4 h-4" />, description: 'Get in touch' },
  ];

  let links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) }));
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      key: 'dashboard',
      name: t('nav.dashboard'),
      href: '/dashboard',
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'
    });
  }
  
  // Add admin-only links
  if (isAdmin) {
    links.push({
      key: 'analytics',
      name: t('nav.analytics'),
      href: '/analytics',
      matches: (path: string) => path.startsWith('/analytics')
    });
  }

  const renderDropdown = (items: DropdownItem[], dropdownKey: string) => (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setActiveDropdown(activeDropdown === dropdownKey ? null : dropdownKey)}
        className={cn(
          "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
          location.pathname.startsWith(`/${dropdownKey}`)
            ? "bg-zion-purple/20 text-zion-cyan"
            : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
        )}
      >
        {t(`nav.${dropdownKey}`)}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      {activeDropdown === dropdownKey && (
        <div className="absolute top-full left-0 mt-2 w-64 rounded-md bg-zion-blue-dark border border-zion-purple/20 shadow-lg z-50">
          <div className="p-2">
            {items.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                onClick={() => setActiveDropdown(null)}
                className="flex items-center p-3 rounded-md text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
              >
                {item.icon && <span className="mr-3">{item.icon}</span>}
                <div>
                  <div className="font-medium">{t(`nav.${item.key}`)}</div>
                  {item.description && (
                    <div className="text-sm text-zion-slate-light">{item.description}</div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
  
  return (
    <nav className={cn("navbar ml-6 hidden md:flex", className)}>
      <ul className="flex items-center gap-1">
        {links.map((link) => {
          if (link.key === 'marketplace') {
            return (
              <li key={link.key}>
                {renderDropdown(marketplaceDropdown, 'marketplace')}
              </li>
            );
          }
          
          if (link.key === 'company') {
            return (
              <li key={link.key}>
                {renderDropdown(companyDropdown, 'company')}
              </li>
            );
          }
          
          return (
            <li key={link.name}>
              <Link
                to={link.href}
                className={cn(
                  "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  link.matches(location.pathname)
                    ? "bg-zion-purple/20 text-zion-cyan"
                    : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                )}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        
        {/* Messages link with unread counter */}
        {isAuthenticated && (
          <li>
            <Link
              to="/messages"
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",
                location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              {t('nav.messages')}
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
