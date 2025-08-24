
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

interface NavigationLink {
  key: string;
  name: string;
  href: string;
  matches: (path: string) => boolean;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const { t } = useTranslation();
  const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const baseLinks: NavigationLink[] = [
    {
      key: 'home',
      name: t('nav.home'),
      href: '/',
      matches: (path: string) => path === '/'
    },
    {
      key: 'about',
      name: t('nav.about'),
      href: '/about',
      matches: (path: string) => path === '/about'
    }
  ];

  const marketplaceLinks: NavigationLink[] = [
    {
      key: 'marketplace',
      name: t('nav.marketplace'),
      href: '/marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'categories',
      name: t('nav.categories'),
      href: '/categories',
      matches: (path: string) => path.startsWith('/categories')
    },
    {
      key: 'equipment',
      name: t('nav.equipment'),
      href: '/equipment',
      matches: (path: string) => path.startsWith('/equipment')
    }
  ];

  const servicesLinks: NavigationLink[] = [
    {
      key: 'services',
      name: t('nav.services'),
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
    },
    {
      key: 'it-onsite-services',
      name: t('nav.it-onsite-services'),
      href: '/it-onsite-services',
      matches: (path: string) => path.startsWith('/it-onsite-services')
    },
    {
      key: 'green-it',
      name: t('nav.green-it'),
      href: '/green-it',
      matches: (path: string) => path.startsWith('/green-it')
    }
  ];

  const talentLinks: NavigationLink[] = [
    {
      key: 'talent',
      name: t('nav.talent'),
      href: '/talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
      key: 'careers',
      name: t('nav.careers'),
      href: '/careers',
      matches: (path: string) => path.startsWith('/careers')
    }
  ];

  const communityLinks: NavigationLink[] = [
    {
      key: 'community',
      name: t('nav.community'),
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    },
    {
      key: 'blog',
      name: t('nav.blog'),
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog')
    },
    {
      key: 'partners',
      name: t('nav.partners'),
      href: '/partners',
      matches: (path: string) => path.startsWith('/partners')
    }
  ];

  let links: NavigationLink[] = [...baseLinks];
  
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

        {/* Marketplace Dropdown */}
        <li className="relative">
          <button
            onClick={() => setIsMarketplaceOpen(!isMarketplaceOpen)}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              location.pathname.startsWith('/marketplace') || location.pathname.startsWith('/categories') || location.pathname.startsWith('/equipment')
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Marketplace
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {isMarketplaceOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-md shadow-lg z-50">
              {marketplaceLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.href}
                  className="block px-4 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={() => setIsMarketplaceOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </li>

        {/* Services Dropdown */}
        <li className="relative">
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              location.pathname.startsWith('/services') || location.pathname.startsWith('/it-onsite-services') || location.pathname.startsWith('/green-it')
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Services
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {isServicesOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-md shadow-lg z-50">
              {servicesLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.href}
                  className="block px-4 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={() => setIsServicesOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </li>

        {/* Talent Links */}
        {talentLinks.map((link) => (
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

        {/* Community Links */}
        {communityLinks.map((link) => (
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

        {/* Contact Link */}
        <li>
          <Link
            to="/contact"
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              location.pathname === "/contact"
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            {t('nav.contact')}
          </Link>
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
