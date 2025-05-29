
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import {
  HomeIcon,
  ShoppingCartIcon,
  LayoutGridIcon,
  UsersIcon,
  HardDriveIcon,
  MessageCircleIcon, // For Community
  LayoutDashboardIcon,
  BarChartIcon,
  MessageSquare,   // For Messages
} from "lucide-react";
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

  const iconMap: { [key: string]: React.ElementType } = {
    home: HomeIcon,
    marketplace: ShoppingCartIcon,
    categories: LayoutGridIcon,
    talent: UsersIcon,
    equipment: HardDriveIcon,
    community: MessageCircleIcon,
    dashboard: LayoutDashboardIcon,
    analytics: BarChartIcon,
    messages: MessageSquare,
  };

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
    }
  ];

  let links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`), Icon: iconMap[link.key] }));
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      key: 'dashboard',
      name: t('nav.dashboard'),
      href: '/dashboard',
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'),
      Icon: iconMap['dashboard']
    });
  }
  
  // Add admin-only links
  if (isAdmin) {
    links.push({
      key: 'analytics',
      name: t('nav.analytics'),
      href: '/analytics',
      matches: (path: string) => path.startsWith('/analytics'),
      Icon: iconMap['analytics']
    });
  }
  
  const linkBaseClasses = "inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar-background";
  const linkDefaultStateClasses = "text-slate-200 hover:bg-zion-purple/30 hover:text-white";
  const linkActiveStateClasses = "bg-zion-purple/20 text-zion-cyan border-b-2 border-zion-cyan";

  return (
    <nav className={cn("navbar ml-6 hidden md:flex", className)}>
      <ul className="flex items-center gap-1">
        {links.map((link) => {
          const IconComponent = link.Icon;
          return (
            <li key={link.key}> {/* Use link.key for a more stable key */}
              <Link
                to={link.href}
                className={cn(
                  linkBaseClasses,
                  link.matches(location.pathname)
                    ? linkActiveStateClasses
                    : linkDefaultStateClasses
                )}
              >
                {IconComponent && <IconComponent className="mr-2 h-4 w-4" />}
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
                linkBaseClasses,
                "relative", // For positioning unread counter
                (location.pathname === "/messages" || location.pathname === "/inbox")
                  ? linkActiveStateClasses
                  : linkDefaultStateClasses
              )}
            >
              <MessageSquare className="mr-2 h-4 w-4" /> {/* Standardized icon style */}
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
