import React, { useState } from 'react';
import { useMessaging } from '@/context/MessagingContext';
import Link from 'next/link';
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation';
import { Logo } from '@/components/header/Logo';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { MobileMenu } from '@/components/header/MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
import { PointsBadge } from '@/components/loyalty/PointsBadge';
import { useAuth } from '@/hooks/useAuth';
import { UserMenu } from '@/components/header/UserMenu';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { cn } from '@/lib/utils'; // Import cn utility
import { useRouter } from 'next/router';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { user } = useAuth();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const router = useRouter();
  const showTagline = router.pathname === '/';
  
  // Try to access the messaging context, but provide a fallback value if it's not available
  let unreadCount = 0;
  try {
    const { unreadCount: count } = useMessaging();
    unreadCount = count;
  } catch (error) {
    console.warn('Messaging context not available');
  }
  
  return (
    <>
      <header
        style={{ "--nav-height": "64px" } as React.CSSProperties}
        className={cn(
          "sticky top-0 z-50 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md",
          { "bg-red-500": mobileMenuOpen }
        )}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          {showTagline && (
            <span className="ml-4 hidden text-sm text-muted-foreground md:inline">
              {t('home.header_tagline')}
            </span>
          )}
          <div className="ml-6 flex-1 hidden md:block">
            <ResponsiveNavigation />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label={t('general.toggle_mobile_menu')}
            >
              <span className="sr-only">{t('general.open_main_menu')}</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <PointsBadge />
          {!isLoggedIn && (
            <div className="ml-4 relative z-10 flex items-center">
              <Link
                href="/auth/login"
                className="text-sm font-medium text-foreground/70 hover:text-foreground"
                aria-label={t('auth.login')}
                data-testid="login-link"
              >
                {t('auth.login')}
              </Link>
              <Link
                href="/auth/register"
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"
                aria-label={t('auth.signup')}
                data-testid="signup-nav-link"
              >
                {t('auth.signup')}
              </Link>
            </div>
          )}
          {/* User avatar menu */}
          {isLoggedIn && (
            <div className="ml-4">
              <UserMenu />
            </div>
          )}
        </div>
      </header>
      
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-60 pt-16">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-card border-t border-primary/20 h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu 
              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)} 
            />
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
    </>
  );
}
