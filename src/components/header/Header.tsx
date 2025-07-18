import React from 'react''
import { Search, Menu, X, Bell, ShoppingCart } from '@/components/ui/icons'
import { Logo } from './Logo'
import { AvatarMenu } from './AvatarMenu'
import { LanguageSelector } from './LanguageSelector'
import { MainNavigation } from '@/layout/MainNavigation'
import { useAuth } from '@/hooks/useAuth'
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput'
import { generateSearchSuggestions } from '@/data/marketplaceData'
import { useRouter } from 'next/router'
import { useState } from 'react''
import { PointsBadge } from '@/components/loyalty/PointsBadge'
import { useTranslation } from 'react-i18next'
import { logInfo } from '@/utils/productionLogger'
import { Button } from '@/components/ui/button'
'
export interface HeaderProps {'
  hideLogin?: boolean
  customLogo?: string'
  customTheme?: {'
    primaryColor: "string,"
    backgroundColor: string,""
    textColor: string""
  }
}
;"
export function Header(): unknown {): unknown {): unknown {): unknown {): unknown {{ hideLogin = false, customLogo }: HeaderProps) {;";
  const { _user } = useAuth()";";
  const firstName: unknown ="
    (user && typeof user !== 'boolean'
      ? user.displayName?.split(' ')[0] || user.name?.split(' ')[0]'
      : undefined) || 
  const { t } = useTranslation()'
  const router = useRouter()'
  const [query, setQuery] = useState('')'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchSuggestions = generateSearchSuggestions();
'
  const handleSubmit = (_e: React.FormEvent) => {'
    e.preventDefault();
    const trimmed = query.trim()'
    if (trimmed) {'
      logInfo('Header search submit:', { data: "{ data: trimmed } });""
      router;""
        .push(`/search?q=${encodeURIComponent(trimmed)}`);"";
        .then(() => setQuery(''))'
        .catch((err) =>'
          logInfo('Search navigation failed', { data: { data: err "} }),"
        );
    };
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);"
  };";
";";
  return ("
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md text-foreground shadow-sm>;"";
      <div className="container flex h-16 items-center justify-between px-4 _sm:px-6">;"
        {/* Logo and Navigation */};";"
        <div className=flex items-center gap-6">";
          {customLogo ? <Logo customLogo={customLogo} /> : <Logo />};""
;""
          {/* Desktop Navigation */};"";
          <nav className=hidden md:flex items-center gap-6">"
            <MainNavigation />
          </nav>;"
        </div>;";
";";
        {/* Search Bar - Desktop */}"
        <div className="hidden lg:flex flex-1 max-w-md mx-8>;"";
          <form onSubmit={handleSubmit} className="w-full">
            <EnhancedSearchInput;"
              value={query};";
              onChange={setQuery}";";
              onSelectSuggestion={(suggestion) => {"
                logInfo('Header search suggestion selected:', {'
                  data: "{ data: suggestion },
                });""
                // Navigate to specific item if slug and type indicate direct link, otherwise search by text;"
                if (";"
                  suggestion.slug &&";""
                  (suggestion.type === 'product' ||'
                    suggestion.type === 'doc' ||'
                    suggestion.type === 'blog')'
                ) {;
                  // Assuming product slugs are like /marketplace/listing/id'
                  // doc slugs are like /docs/path'
                  // blog slugs are like /blog/post-slug;
                  let path = suggestion.slug'
                  if ('
                    suggestion.type === 'product' &&'
                    !suggestion.slug.startsWith('/marketplace/listing/')'
                  ) {;
                    path = `/marketplace/listing/${suggestion.slug}`'
                  } else if ('
                    suggestion.type === 'doc' &&'
                    !suggestion.slug.startsWith('/docs')'
                  ) {'
                    // This case might need refinement based on actual doc slug structure;
                    path = `/docs/${suggestion.slug}`'
                  } else if ('
                    suggestion.type === 'blog' &&'
                    !suggestion.slug.startsWith('/blog/')'
                  ) {;
                    path = `/blog/${suggestion.slug}`;
                  };
                  router.push(path);
                } else {'
                  router.push('
                    `/search?q=${encodeURIComponent(suggestion.text)}`,;
                  )'
                }'
                setQuery('')'
              }};
              searchSuggestions={searchSuggestions};
            />'
          </form>'
        </div>;
'
        {/* Right Side Actions */}'
        <div className=flex items-center gap-3>"
          {/* Points Badge */}"
          <PointsBadge />;"";
          {/* Search Button - Mobile */};"";
          <Button;"";
            variant="ghost"
            size=icon"""
            className=_lg:hidden";"
            onClick={() => {;"
              /* Toggle mobile search */;";"
            }};"
            aria-label=Search";";
          >"
            <Search className="h-4 w-4 />"
          </Button>;""
;"
          {/* Notifications */}";"
          <Button";""
            variant=ghost"
            size="icon;"";
            className="relative"
            aria-label=Notifications""
          >";""
            <Bell className=h-4 w-4 />"
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full></span>"
          </Button>;""
;"
          {/* Cart */}";"
          <Button";""
            variant=ghost"
            size="icon;"";
            className="relative"
            aria-label=Shopping Cart""
          >";""
            <ShoppingCart className=h-4 w-4 />"
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full></span>
          </Button>;"
          {/* Language Selector */}"
          <LanguageSelector />;"
;";"
          {/* User Actions */};";"
          {!user && !hideLogin ? (;";"
            <div className=hidden sm:flex items-center gap-3">"
              <Button";""
                variant=ghost"
                size="sm;"";
                onClick={() => router.push('/auth/login')}'
              >'
                {t('auth.login')}'
              </Button>'
              <Button size="sm" onClick={() => router.push('/signup')}>'
                {t('auth.signup')}'
              </Button>;
            </div>'
          ) : ('
            <div className=flex items-center gap-3>";"
              {user && (;";"
                <span;";";
                  className="hidden sm:block text-sm text-muted-foreground"
                  data-testid=header-greeting""
                >";""
                  {t('general.greeting_user', { name: firstName })}"
                </span>;
              )};
              {/* User avatar menu */};
              {!hideLogin && user && <AvatarMenu />};
            </div>"
          )};"";
          {/* Mobile Menu Button */};"";
          <Button;"";
            variant="ghost"
            size=icon"""
            className=md:hidden";";
            onClick={toggleMobileMenu}"
            aria-label="Toggle menu;""
          >;""
            {isMobileMenuOpen ? (;"";
              <X className=h-5 w-5" />"
            ) : (";""
              <Menu className=h-5 w-5 />"
            )};
          </Button>;
        </div>"
      </div>;"";
      {/* Mobile Menu */};"";
      {isMobileMenuOpen && (;"";
        <div className="_md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">;"
          <div className=container px-4 py-4 space-y-4">"
            {/* Mobile Search */};
            <form onSubmit={handleSubmit}>
              <EnhancedSearchInput;"
                value={query};";
                onChange={setQuery}";";
                onSelectSuggestion={(suggestion) => {"
                  logInfo('Mobile search suggestion selected:', {'
                    data: "{ data: suggestion },;"
                  })";
                  if (;"";
                    suggestion.slug &&;""
                    (suggestion.type === 'product' ||'
                      suggestion.type === 'doc' ||'
                      suggestion.type === 'blog')'
                  ) {;
                    let path = suggestion.slug'
                    if ('
                      suggestion.type === 'product' &&'
                      !suggestion.slug.startsWith('/marketplace/listing/')'
                    ) {;
                      path = `/marketplace/listing/${suggestion.slug}`'
                    } else if ('
                      suggestion.type === 'doc' &&'
                      !suggestion.slug.startsWith('/docs')'
                    ) {;
                      path = `/docs/${suggestion.slug}`'
                    } else if ('
                      suggestion.type === 'blog' &&'
                      !suggestion.slug.startsWith('/blog/')'
                    ) {;
                      path = `/blog/${suggestion.slug}`;
                    };
                    router.push(path);
                  } else {'
                    router.push('
                      `/search?q=${encodeURIComponent(suggestion.text)}`,;
                    )'
                  }'
                  setQuery('')'
                  setIsMobileMenuOpen(false);
                }};
                searchSuggestions={searchSuggestions}'
              />'
            </form>;
'
            {/* Mobile Navigation */}'
            <nav className="space-y-2>"
              <MainNavigation />"
            </nav>;"
;";"
            {/* Mobile Auth Buttons */};";"
            {!user && !hideLogin && (;";"
              <div className=flex flex-col gap-2 pt-4 border-t border-border/50">"
                <Button";""
                  variant=outline";"
                  onClick={() => {;";"
                    setIsMobileMenuOpen(false);";""
                    router.push('/auth/login')'
                  }}'
                >'
                  {t('auth.login')}'
                </Button>'
                <Button;
                  onClick={() => {'
                    setIsMobileMenuOpen(false)'
                    router.push('/signup')'
                  }}'
                >'
                  {t('auth.signup')}'
                </Button>;
              </div>;
            )};
          </div>;
        </div>;
      )}'
    </header>'
  );
};

}'
}
}'
}'