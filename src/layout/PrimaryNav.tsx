import { useState } from 'react';
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
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card';
import { MiniCartPreview } from '@/components/cart/MiniCartPreview';

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
    s.cart.items.reduce((sum, i) => sum + i.quantity, 0),
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search/${slugify(query)}`);
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
                    // Default: search results page
                    const slug = sugg.slug || slugify(sugg.text);
                    router.push(`/search/${slug}`);
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
            <PointsBadge />
            <HoverCard openDelay={100}>
              <HoverCardTrigger asChild>
                <Link
                  href="/cart"
                  className="relative"
                  aria-label={t('nav.cart', 'Cart')}
                >
                  <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </HoverCardTrigger>
              <HoverCardContent>
                <MiniCartPreview />
              </HoverCardContent>
            </HoverCard>
            {/* Visual separator and theme toggle group */}
            <div className="flex items-center gap-2 border-l border-primary/20 pl-2 ml-1">
              <ModeToggle />
              <LanguageSelector />
            </div>
            {!isLoggedIn && (
              <>
                <Link
                  href="/login"
                  className="text-sm hover:text-primary"
                  data-testid="login-link"
                >
                  {t('auth.login')}
                </Link>
                <Link
                  href="/signup"
                  className="ml-2 text-sm hover:text-primary"
                >
                  {t('auth.signup')}
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
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-60 pt-16">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-card border-t border-primary/20 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu
              unreadCount={unreadCount}
              onClose={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
    </>
  );
}
