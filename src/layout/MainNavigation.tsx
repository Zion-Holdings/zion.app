
import { Link, useLocation } from "react-router-dom";
import { useState } from "react"; // Import useState
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import { useFavorites } from "@/hooks/useFavorites";
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { Heart, MessageSquare, ShoppingCart, CreditCard } from "lucide-react";
import { LanguageSelector } from '@/components/header/LanguageSelector';

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
  const location = useLocation();
  const { t } = useTranslation();
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
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
    <>
      <button
        className="navbar-toggler md:hidden ml-auto mr-4" // Added ml-auto and mr-4 for positioning
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-controls="main-navbar-collapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className={cn("navbar", className)}> {/* Removed ml-6 hidden md:flex */}
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
              <li key={link.name} className="nav-item"> {/* Added nav-item */}
                <Link
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  className={cn(
                    "nav-link", // Added nav-link
                    "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors", // Kept existing styling
                    link.matches(location.pathname)
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Wishlist link */}
            {isAuthenticated && (
              <li className="nav-item"> {/* Added nav-item */}
                <Link
                  to="/wishlist"
                  aria-label="Wishlist"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  className={cn(
                    "nav-link", // Added nav-link
                    "relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors", // Kept existing styling
                    location.pathname === "/wishlist"
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
                </Link>
              </li>
            )}

            {/* Wallet link */}
            {isAuthenticated && (
              <li className="nav-item">
                <Link
                  to="/wallet"
                  aria-label={t('nav.wallet')} // Assuming you'll add 'wallet' to your translation files
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "nav-link",
                    "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",
                    location.pathname === "/wallet"
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  <CreditCard className="w-4 h-4 mr-1" />
                  {t('nav.wallet', 'Wallet')} {/* Fallback to 'Wallet' if translation is missing */}
                </Link>
              </li>
            )}

            {/* Messages link with unread counter */}
            {isAuthenticated && (
              <li className="nav-item"> {/* Added nav-item */}
                <Link
                  to="/messages"
                  aria-label={t('nav.messages')}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "nav-link",
                    "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",
                    location.pathname === "/messages" || location.pathname === "/inbox"
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  <MessageSquare className="w-4 h-4 mr-1" />
                  {t('nav.messages')} {/* Assuming 'messages' key exists */}
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </Link>
              </li>
            )}

            {/* Cart icon with badge */}
            <li className="nav-item">
              <Link
                to="/cart"
                aria-label={t('nav.cart')}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "nav-link",
                  "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",
                  location.pathname.startsWith('/cart')
                    ? 'bg-zion-purple/20 text-zion-cyan'
                    : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                )}
              >
                <ShoppingCart className="w-4 h-4 mr-1" />
                {t('nav.cart', 'Cart')} {/* Added translation for Cart with fallback */}
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
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
