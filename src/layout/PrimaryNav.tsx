import { useState } from 'react';
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '@/components/header/Logo';
import { PointsBadge } from '@/components/loyalty/PointsBadge';
import { UserMenu } from '@/components/header/UserMenu';
import { LanguageSelector } from '@/components/header/LanguageSelector';
import { ModeToggle } from '@/components/ModeToggle';
import { useAuth } from '@/hooks/useAuth';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMessaging } from '@/context/MessagingContext';
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data/marketplaceData';
import { slugify } from '@/lib/slugify';
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation';
import { MobileMenu } from '@/components/header/MobileMenu';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
import { Menu, X } from 'lucide-react';


import { useTranslation } from 'react-i18next';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { LoginModal } from '@/components/auth/LoginModal';

export function PrimaryNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { user } = useAuth();
  const isLoggedIn = !!user;
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const suggestions = generateSearchSuggestions();

  let unreadCount = 0;
  try {
    const messaging = useMessaging();
    unreadCount = messaging.unreadCount;
  } catch {
    // context not available
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      logDebug('PrimaryNav search submit:', { query: trimmed });
      router
        .push(`/search?q=${encodeURIComponent(trimmed)}`)
        .then(() => setQuery(''))
        .catch((err) => logErrorToProduction('Search navigation failed', err, { query: trimmed, component: 'PrimaryNav' }));
    }
  };

  return (
    <>
      <header
        className="sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md"
        role="navigation"
        aria-label="Primary"
        data-testid="header"
      >
        <div className="container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap">
          <Logo />
          
          {/* Navigation - hidden on mobile and tablets, shown on desktop */}
          <div className="hidden lg:block order-1 flex-shrink-0">
            <ResponsiveNavigation openLoginModal={(returnToPath) => setLoginOpen(true)} />
          </div>
          
          {/* Actions container with responsive layout */}
          <div className="hidden lg:flex items-center gap-2 order-2 flex-shrink-0 min-w-0">
            {/* Search form with clamped width */}
            <form onSubmit={handleSubmit} className="flex-shrink-0" style={{ width: 'clamp(12rem, 20vw, 16rem)' }}>
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSelectSuggestion={(sugg) => {
                  logDebug('PrimaryNav search suggestion selected:', { suggestion: sugg });
                  // Handle different suggestion types with proper navigation
                  if (sugg.id) {
                    // Product listings with IDs go to product detail page
                    router.push(`/marketplace/listing/${sugg.id}`);
                  } else if (sugg.type === 'doc' && sugg.slug && sugg.slug.startsWith('/')) {
                    // Documentation suggestions navigate directly to their path
                    router.push(sugg.slug);
                  } else if (sugg.type === 'blog' && sugg.slug) {
                    // Blog posts navigate to blog detail page
                    router.push(`/blog/${sugg.slug}`);
                  } else {
                    // Default: search results page with query parameter
                    router.push(`/search?q=${encodeURIComponent(sugg.text)}`);
                  }
                  setQuery('');
                  
                  // Track analytics event
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'search_suggestion_click', {
                      search_term: sugg.text,
                      suggestion_type: sugg.type,
                      suggestion_id: sugg.id || sugg.slug
                    });
                  }
                }}
                searchSuggestions={suggestions}
              />
            </form>
            
            {/* Compact actions group */}
            <div className="flex items-center gap-1">
              <PointsBadge />
              <CartDrawer />
            </div>
            
            {/* Compact controls group */}
            <div className="flex items-center gap-1 border-l border-primary/20 pl-1 ml-1">
              <ModeToggle />
              <LanguageSelector />
            </div>
            
            {/* Auth links - flex wrap for very small screens */}
            <div className="flex items-center gap-1 flex-wrap">
              {!isLoggedIn && (
                <>
                  <Link
                    href="/auth/login"
                    className="text-sm hover:text-primary whitespace-nowrap"
                    data-testid="login-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setLoginOpen(true);
                    }}
                  >
                    {t('auth.login')}
                  </Link>
                  <Link
                    href="/signup"
                    className="text-sm hover:text-primary whitespace-nowrap"
                  >
                    {t('auth.signup')}
                  </Link>
                </>
              )}
              {isLoggedIn && <UserMenu />}
            </div>
          </div>
          
          {/* Tablet view (md to lg) - simplified controls */}
          <div className="hidden md:flex lg:hidden items-center gap-2 order-2">
            <ModeToggle />
            <LanguageSelector />
            {!isLoggedIn && (
              <Link
                href="/auth/login"
                className="text-sm hover:text-primary"
                data-testid="login-link"
                onClick={(e) => {
                  e.preventDefault();
                  setLoginOpen(true);
                }}
              >
                {t('auth.login')}
              </Link>
            )}
            {isLoggedIn && <UserMenu />}
          </div>
          
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded focus:outline-none flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={t('general.toggle_mobile_menu')}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-60 pt-16">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-card border-t border-primary/20 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu
              unreadCount={unreadCount}
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={(returnToPath) => setLoginOpen(true)}
            />
          </div>
        </div>
      )}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
}
