
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const { t } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const baseLinks = [
    {
      key: 'home',
      href: '/',
      matches: (path: string) => path === '/',
      name: t('nav.home')
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services'),
      name: t('nav.services')
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      matches: (path: string) => path.startsWith('/marketplace'),
      name: t('nav.marketplace')
    },
    {
      key: 'talent',
      href: '/talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard'),
      name: t('nav.talent')
    },
    {
      key: 'equipment',
      href: '/equipment',
      matches: (path: string) => path.startsWith('/equipment'),
      name: t('nav.equipment')
    },
    {
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum'),
      name: t('nav.community')
    },
    {
      key: 'blog',
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog'),
      name: t('nav.blog')
    }
  ];

  let links = baseLinks;
  
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

  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };
  
  return (
    <nav className={cn("navbar ml-6 hidden md:flex", className)}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li key={link.name} className="relative">
            <Link
              to={link.href}
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                link.matches(location.pathname)
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
              onClick={closeDropdown}
            >
              {link.name}
            </Link>
          </li>
        ))}
        
        {/* Company dropdown */}
        <li className="relative">
          <button
            onClick={() => handleDropdownToggle('company')}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              activeDropdown === 'company'
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Company
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {activeDropdown === 'company' && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg z-50">
              <div className="py-2">
                <Link
                  to="/about"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={closeDropdown}
                >
                  About Us
                </Link>
                <Link
                  to="/careers"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={closeDropdown}
                >
                  Careers
                </Link>
                <Link
                  to="/partners"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={closeDropdown}
                >
                  Partners
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={closeDropdown}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </li>

        {/* Support dropdown */}
        <li className="relative">
          <button
            onClick={() => handleDropdownToggle('support')}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              activeDropdown === 'support'
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Support
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {activeDropdown === 'support' && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg z-50">
              <div className="py-2">
                <Link
                  to="/help"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={closeDropdown}
                >
                  Help Center
                </Link>
                <Link
                  to="/request-quote"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={closeDropdown}
                >
                  Request Quote
                </Link>
                <Link
                  to="/it-onsite-services"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={closeDropdown}
                >
                  IT Services
                </Link>
              </div>
            </div>
          )}
        </li>
        
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
              onClick={closeDropdown}
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
