import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '@/components/header/Logo';
import { PointsBadge } from '@/components/loyalty/PointsBadge';
import { UserMenu } from '@/components/header/UserMenu';
import { LanguageSelector } from '@/components/header/LanguageSelector';
import { useAuth } from '@/hooks/useAuth';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMessaging } from '@/context/MessagingContext';
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data/marketplaceData';
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation';
import { MobileMenu } from '@/components/header/MobileMenu';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

export function PrimaryNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const cartCount = useSelector((s: RootState) =>
    s.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md"
        role="navigation"
        aria-label="Primary"
        data-testid="header"
      >
        <div className="container grid grid-cols-[auto_1fr_auto] items-center gap-4 h-16 px-4 sm:px-6">
          <Logo />
          <div className="hidden md:block">
            <ResponsiveNavigation />
          </div>
          <div className="hidden md:flex items-center gap-2 justify-self-end">
            <form onSubmit={handleSubmit} className="w-64">
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSelectSuggestion={(sugg) => {
                  if (sugg.id) {
                    router.push(`/marketplace/listing/${sugg.id}`);
                  } else {
                    router.push(`/search?q=${encodeURIComponent(sugg.text)}`);
                  }
                  setQuery('');
                }}
                searchSuggestions={suggestions}
              />
            </form>
            <PointsBadge />
            <Link href="/cart" className="relative" aria-label={t('nav.cart','Cart')}>
              <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <LanguageSelector />
            {!isLoggedIn && (
              <>
                <Link href="/login" className="text-sm hover:text-primary" data-testid="login-link">
                  {t('login', 'Login')}
                </Link>
                <Link href="/signup" className="ml-2 text-sm hover:text-primary">
                  {t('signup', 'Sign up')}
                </Link>
              </>
            )}
            {isLoggedIn && <UserMenu />}
          </div>
          <button
            className="md:hidden ml-auto mr-2 p-2 rounded focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={t('general.toggle_mobile_menu')}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-60 pt-16">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />
          <div className="relative bg-card border-t border-primary/20 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu unreadCount={unreadCount} onClose={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
    </>
  );
}
