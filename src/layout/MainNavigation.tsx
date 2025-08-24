
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, Briefcase, Users, Settings, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

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

  const baseLinks = [
    {
      key: 'home',
      href: '/',
      name: 'Home',
      icon: null,
      matches: (path: string) => path === '/'
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      name: 'Marketplace',
      icon: Briefcase,
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'services',
      href: '/services',
      name: 'Services',
      icon: null,
      matches: (path: string) => path.startsWith('/services')
    },
    {
      key: 'talent',
      href: '/talent',
      name: 'Talent',
      icon: Users,
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
      key: 'equipment',
      href: '/equipment',
      name: 'Equipment',
      icon: null,
      matches: (path: string) => path.startsWith('/equipment')
    },
    {
      key: 'community',
      href: '/community',
      name: 'Community',
      icon: null,
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    },
    {
      key: 'blog',
      href: '/blog',
      name: 'Blog',
      icon: null,
      matches: (path: string) => path.startsWith('/blog')
    },
    {
      key: 'about',
      href: '/about',
      name: 'About',
      icon: null,
      matches: (path: string) => path.startsWith('/about')
    },
    {
      key: 'contact',
      href: '/contact',
      name: 'Contact',
      icon: null,
      matches: (path: string) => path === '/contact'
    }
  ];

  let links = baseLinks;
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      key: 'dashboard',
      name: 'Dashboard',
      href: '/dashboard',
      icon: BarChart3,
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'
    });
  }
  
  // Add admin-only links
  if (isAdmin) {
    links.push({
      key: 'analytics',
      name: 'Analytics',
      href: '/analytics',
      icon: BarChart3,
      matches: (path: string) => path.startsWith('/analytics')
    });
  }
  
  return (
    <nav className={cn("navbar ml-6 hidden md:flex", className)}>
      <ul className="flex items-center gap-1">
        {links.map((link) => {
          const IconComponent = link.icon;
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
                {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
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
              Messages
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
