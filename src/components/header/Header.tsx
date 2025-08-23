import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { AvatarMenu } from './AvatarMenu';
import { LanguageSelector } from './LanguageSelector';
import { MainNavigation } from '@/layout/MainNavigation';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { slugify } from "@/lib/slugify";
import { useRouter } from "next/router"; // Changed from react-router-dom
import { useState } from "react";
import { PointsBadge } from '@/components/loyalty/PointsBadge';
import { useTranslation } from 'react-i18next';
import { logInfo } from '@/utils/productionLogger';

export interface HeaderProps {
  hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
}

export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
  const { user } = useAuth();
  const firstName =
    (user && typeof user !== 'boolean' ? (user.displayName?.split(' ')[0] || user.name?.split(' ')[0]) : undefined) || '';
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const { t } = useTranslation();
  const router = useRouter(); // Changed from useNavigate
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
  
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#000000', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined);
  
  // const headerStyle = effectiveTheme ? {
  //   backgroundColor: effectiveTheme.backgroundColor,
  //   color: effectiveTheme.textColor,
  //   borderColor: `${effectiveTheme.primaryColor}20`
  // } : {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      logInfo('Header search submit:', { data: trimmed });
      router
        .push(`/search?q=${encodeURIComponent(trimmed)}`)
        .then(() => setQuery(''))
        .catch((err) => logInfo('Search navigation failed', { data: err }));
    }
  };
  
  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground"
      // style={headerStyle} // Removed inline style
    >
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo}  />

        <div className="ml-6 flex-1">
          <MainNavigation />
        </div>
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            onSelectSuggestion={(suggestion) => {
              logInfo('Header search suggestion selected:', { data: suggestion });
              // Navigate to specific item if slug and type indicate direct link, otherwise search by text
              if (suggestion.slug && (suggestion.type === 'product' || suggestion.type === 'doc' || suggestion.type === 'blog')) {
                // Assuming product slugs are like /marketplace/listing/id
                // doc slugs are like /docs/path
                // blog slugs are like /blog/post-slug
                let path = suggestion.slug;
                if (suggestion.type === 'product' && !suggestion.slug.startsWith('/marketplace/listing/')) {
                    path = `/marketplace/listing/${suggestion.slug}`;
                } else if (suggestion.type === 'doc' && !suggestion.slug.startsWith('/docs')) {
                    // This case might need refinement based on actual doc slug structure
                    path = `/docs/${suggestion.slug}`;
                } else if (suggestion.type === 'blog' && !suggestion.slug.startsWith('/blog/')) {
                    path = `/blog/${suggestion.slug}`;
                }
                router.push(path);
              } else {
                router.push(`/search?q=${encodeURIComponent(suggestion.text)}`);
              }
              setQuery("");
            }}
            searchSuggestions={searchSuggestions}
          />
        </form>

        <div className="flex items-center gap-2">
          <PointsBadge />
          {!user && !hideLogin && (
            <>
              <Link
                href="/auth/login"
                className="text-sm text-foreground hover:text-primary"
                aria-label="Login"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="ml-2 text-sm text-foreground hover:text-primary"
                aria-label="Sign up"
              >
                Sign up
              </Link>
            </>
          )}
          <LanguageSelector />
          {user && (
            <span
              className="hidden sm:block text-sm text-foreground mr-2"
              data-testid="header-greeting"
            >
              {t('general.greeting_user', { name: firstName })}
            </span>
          )}
          {/* User avatar menu */}
          {!hideLogin && user && <AvatarMenu />}
        </div>
      </div>
    </header>
  );
}
