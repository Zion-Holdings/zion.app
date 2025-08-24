
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      key: 'about',
      href: '/about',
      matches: (path: string) => path.startsWith('/about')
    },
    {
      key: 'contact',
      href: '/contact',
      matches: (path: string) => path.startsWith('/contact')
    }
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
        
        {/* More dropdown menu */}
        <li className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            More
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg z-50">
              <div className="py-1">
                <Link
                  to="/blog"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/careers"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  to="/partners"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Partners
                </Link>
                <Link
                  to="/green-it"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Green IT
                </Link>
                <Link
                  to="/help"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Help Center
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
