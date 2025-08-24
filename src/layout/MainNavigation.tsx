
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare } from "lucide-react";
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
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/it-onsite-services')
    },
    {
      key: 'micro-saas',
      href: '/micro-saas-services',
      matches: (path: string) => path.startsWith('/micro-saas-services')
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
      matches: (path:string) => path.startsWith('/equipment')
    },
    {
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    },
    {
      key: 'about',
      href: '/about',
      matches: (path: string) => path === '/about'
    }
  ];

  let links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) }));
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push(
      {
        key: 'services',
        name: t('nav.services'),
        href: '/services',
        matches: (path: string) => path.startsWith('/services') || path.startsWith('/it-onsite-services')
      },
      {
        key: 'micro-saas',
        name: t('nav.micro-saas'),
        href: '/micro-saas-services',
        matches: (path: string) => path.startsWith('/micro-saas-services')
      },
      {
        key: 'dashboard',
        name: t('nav.dashboard'),
        href: '/dashboard',
        matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'
      }
    );
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
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-all duration-300 relative overflow-hidden group",
                link.matches(location.pathname)
                  ? "bg-gradient-to-r from-zion-purple/30 to-zion-cyan/30 text-zion-cyan shadow-lg shadow-zion-purple/20"
                  : "text-white hover:text-zion-cyan"
              )}
            >
              {/* Hover background effect */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md",
                link.matches(location.pathname) && "opacity-100"
              )} />

              {/* Glowing border effect */}
              <div className={cn(
                "absolute inset-0 rounded-md border border-transparent group-hover:border-zion-purple/30 transition-all duration-300",
                link.matches(location.pathname) && "border-zion-cyan/50"
              )} />

              <span className="relative z-10">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
