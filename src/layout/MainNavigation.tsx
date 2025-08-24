
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown, Users, Settings, HelpCircle, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
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
      key: 'ai-hiring',
      href: '/zion-hire-ai',
      matches: (path: string) => path.startsWith('/zion-hire-ai') || path.startsWith('/hire-ai')
    }
  ];

  const moreLinks = [
    {
      key: 'categories',
      href: '/categories',
      icon: <FileText className="w-4 h-4" />,
      description: 'Browse service categories'
    },
    {
      key: 'community',
      href: '/community',
      icon: <Users className="w-4 h-4" />,
      description: 'Join our community'
    },
    {
      key: 'help',
      href: '/help-center',
      icon: <HelpCircle className="w-4 h-4" />,
      description: 'Get help and support'
    },
    {
      key: 'faq',
      href: '/faq',
      icon: <HelpCircle className="w-4 h-4" />,
      description: 'Frequently asked questions'
    },
    {
      key: 'about',
      href: '/about',
      icon: <FileText className="w-4 h-4" />,
      description: 'Learn about Zion Tech Group'
    },
    {
      key: 'contact',
      href: '/contact',
      icon: <MessageSquare className="w-4 h-4" />,
      description: 'Get in touch with us'
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
        
        {/* More dropdown */}
        <li className="relative">
          <div ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              dropdownOpen
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            More
            <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform", dropdownOpen && "rotate-180")} />
          </button>
          
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-64 bg-zion-blue-dark border border-zion-purple/20 rounded-lg shadow-xl z-50">
              <div className="p-2">
                {moreLinks.map((link) => (
                  <Link
                    key={link.key}
                    to={link.href}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-md text-white hover:bg-zion-purple/10 transition-colors"
                  >
                    <div className="text-zion-cyan mt-0.5">
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{t(`nav.${link.key}`)}</div>
                      <div className="text-xs text-zion-slate-light">{link.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          </div>
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
