
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import { useFavorites } from "@/hooks/useFavorites";
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { Heart, MessageSquare, ShoppingCart, CreditCard } from "lucide-react";
import { LanguageSelector } from '@/components/header/LanguageSelector';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { MiniCartPreview } from '@/components/cart/MiniCartPreview';

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add state
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { count } = useFavorites();
  const router = useRouter(); // Changed from useLocation
  const { t } = useTranslation();
  const cartCount = useSelector((s: RootState) =>
    s.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

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

  const links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) }));
  
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
    <>
      <button
        className="navbar-toggler md:hidden ml-auto mr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" // Added ml-auto and mr-4 for positioning
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-controls="main-navbar-collapse"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav
        className={cn("navbar", className)}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          id="main-navbar-collapse"
          className={cn(
            "navbar-collapse",
            { "open": isMobileMenuOpen },
            "w-full md:flex md:w-auto", // Handles visibility and desktop layout
            !isMobileMenuOpen && "hidden" // Explicitly hide when not open and on mobile
          )}
        >
          <ul className="navbar-nav flex flex-col md:flex-row md:items-center md:gap-1"> {/* Added navbar-nav and flex direction classes */}
            {links.map((link) => (
              <li key={link.name} className="nav-item">
                <Link href={link.href} legacyBehavior={false}>
                  <a
                    aria-label={link.name}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "nav-link",
                      "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      link.matches(router.pathname)
                        ? "bg-zion-purple/20 text-zion-cyan"
                        : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                    )}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}

            {/* Wishlist link */}
            {isAuthenticated && (
              <li className="nav-item">
                <Link href="/wishlist" legacyBehavior={false}>
                  <a
                    aria-label="Wishlist"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "nav-link",
                      "relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      router.pathname === "/wishlist"
                        ? "bg-zion-purple/20 text-zion-cyan"
                        : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                    )}
                  >
                    <Heart className="w-4 h-4" />
                    {count > 0 && (
                      <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {count}
                      </span>
                    )}
                  </a>
                </Link>
              </li>
            )}

            {/* Wallet link */}
            {isAuthenticated && (
              <li className="nav-item">
                <Link href="/wallet" legacyBehavior={false}>
                  <a
                    aria-label={t('nav.wallet')}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "nav-link",
                      "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      router.pathname === "/wallet"
                        ? "bg-zion-purple/20 text-zion-cyan"
                        : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                    )}
                  >
                    <CreditCard className="w-4 h-4 mr-1" />
                    {t('nav.wallet', 'Wallet')}
                  </a>
                </Link>
              </li>
            )}

            {/* Messages link with unread counter */}
            {isAuthenticated && (
              <li className="nav-item">
                <Link href="/messages" legacyBehavior={false}>
                  <a
                    aria-label={t('nav.messages')}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "nav-link",
                      "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      router.pathname === "/messages" || router.pathname === "/inbox"
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
                  </a>
                </Link>
              </li>
            )}

            {/* Cart icon with badge */}
            <li className="nav-item">
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    aria-label={t('nav.cart')}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'nav-link',
                      'inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                      router.pathname.startsWith('/cart')
                        ? 'bg-zion-purple/20 text-zion-cyan'
                        : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                    )}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    {t('nav.cart', 'Cart')}
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-56" align="end">
                  <MiniCartPreview />
                  <Link href="/cart" legacyBehavior={false}>
                    <a className="mt-2 block text-sm text-primary hover:underline">
                      {t('cart.view_cart', 'View Cart')}
                    </a>
                  </Link>
                </PopoverContent>
              </Popover>
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-auto">
            <LanguageSelector />
          </div>
        </div>
      </nav>
    </>
  );
}
