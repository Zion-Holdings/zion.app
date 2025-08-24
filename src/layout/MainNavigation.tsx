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
      name: 'Home',
      matches: (path: string) => path === '/'
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      name: 'Marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'services',
      href: '/services',
      name: 'Services',
      matches: (path: string) => path.startsWith('/services')
    },
    {
      key: 'talent',
      href: '/talent',
      name: 'Talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
      key: 'equipment',
      href: '/equipment',
      name: 'Equipment',
      matches: (path: string) => path.startsWith('/equipment')
    },
    {
      key: 'community',
      href: '/community',
      name: 'Community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    },
    {
      key: 'about',
      href: '/about',
      name: 'About',
      matches: (path: string) => path === '/about'
    },
    {
      key: 'blog',
      href: '/blog',
      name: 'Blog',
      matches: (path: string) => path.startsWith('/blog')
    }
  ];

  const dropdownMenus = {
    solutions: {
      label: 'Solutions',
      items: [
        { href: '/ai-solutions', label: 'AI Solutions' },
        { href: '/it-services', label: 'IT Services' },
        { href: '/green-it', label: 'Green IT' },
        { href: '/enterprise', label: 'Enterprise' }
      ]
    },
    resources: {
      label: 'Resources',
      items: [
        { href: '/developers', label: 'Developer Portal' },
        { href: '/api-docs', label: 'API Documentation' },
        { href: '/help-center', label: 'Help Center' },
        { href: '/sitemap', label: 'Sitemap' }
      ]
    }
  };

  let links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) || link.name }));
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      key: 'dashboard',
      name: t('nav.dashboard') || 'Dashboard',
      href: '/dashboard',
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'
    });
  }
  
  // Add admin-only links
  if (isAdmin) {
    links.push({
      key: 'analytics',
      name: t('nav.analytics') || 'Analytics',
      href: '/analytics',
      matches: (path: string) => path.startsWith('/analytics')
    });
  }
  
  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <nav className={cn("navbar ml-6 hidden md:flex", className)}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
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
        ))}
        
        {/* Solutions Dropdown */}
        <li className="relative">
          <button
            onClick={() => handleDropdownToggle('solutions')}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Solutions
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          {activeDropdown === 'solutions' && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-lg shadow-lg z-50">
              {dropdownMenus.solutions.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </li>

        {/* Resources Dropdown */}
        <li className="relative">
          <button
            onClick={() => handleDropdownToggle('resources')}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Resources
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          {activeDropdown === 'resources' && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-lg shadow-lg z-50">
              {dropdownMenus.resources.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.label}
                </Link>
              ))}
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
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              {t('nav.messages') || 'Messages'}
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