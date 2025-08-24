
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

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
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setToolsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
      key: 'categories',
      href: '/categories',
      matches: (path: string) => path.startsWith('/categories')
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
      key: 'faq',
      href: '/faq',
      matches: (path: string) => path === '/faq'
    },
    {
      key: 'help',
      href: '/help',
      matches: (path: string) => path === '/help'
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
        
        {/* Tools dropdown */}
        <li className="relative" ref={toolsRef}>
          <button
            onClick={() => setToolsOpen(!toolsOpen)}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              toolsOpen
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Tools
            <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", toolsOpen && "rotate-180")} />
          </button>
          
          {toolsOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-md shadow-lg py-2 z-50">
              <Link
                to="/ai-matcher"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                onClick={() => setToolsOpen(false)}
              >
                AI Matcher
              </Link>
              <Link
                to="/content-generator"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                onClick={() => setToolsOpen(false)}
              >
                Content Generator
              </Link>
              <Link
                to="/portfolio-builder"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                onClick={() => setToolsOpen(false)}
              >
                Portfolio Builder
              </Link>
              <Link
                to="/service-description-generator"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                onClick={() => setToolsOpen(false)}
              >
                Service Generator
              </Link>
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
