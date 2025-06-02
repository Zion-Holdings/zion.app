import { useState, useContext } from 'react'; // useContext might be needed if useMessaging is refactored
import { MessagingContext, useMessaging } from '@/context/MessagingContext'; // Ensure useMessaging is correctly imported
import { MainNavigation } from './MainNavigation';
import { Logo } from '@/components/header/Logo';
import { useTranslation } from 'react-i18next';
// Removed duplicate import of useTranslation
import { Menu, X } from 'lucide-react';
import { MobileMenu } from '@/components/header/MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
import { PointsBadge } from '@/components/loyalty/PointsBadge';
import { useAuth } from '@/hooks/useAuth';
import { AvatarMenu } from '@/components/header/AvatarMenu';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { user } = useAuth();
  
  // Call useMessaging unconditionally at the top level
  const messagingData = useMessaging();
  // Safely access unreadCount, defaulting to 0 if messagingData is null or unreadCount is not available
  const unreadCount = messagingData?.unreadCount || 0;
  
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          <div className="ml-6 flex-1 hidden md:block">
            <MainNavigation unreadCount={unreadCount} />
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
          {!user && (
            <div className="ml-4">
              <a href="/login" className="text-sm font-medium text-foreground/70 hover:text-foreground" aria-label="Login" data-testid="login-link">
                Login
              </a>
            </div>
          )}
          {/* User avatar menu */}
          {user && (
            <div className="ml-4">
              <AvatarMenu />
            </div>
          )}
        </div>
      </header>
      
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 pt-16">
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
