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
  
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor,
    color: effectiveTheme.textColor,
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      console.log('Header search submit:', query);
      router.push(`/search/${slugify(query)}`);
      setQuery("");
    }
  };
  
  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md"
      style={headerStyle}
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
              console.log('Header search suggestion selected:', suggestion);
              router.push(`/search/${suggestion.slug || slugify(suggestion.text)}`);
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
                prefetch={false}
                className="text-sm text-white hover:text-zion-cyan"
                aria-label="Login"
              >
                Login
              </Link>
              <Link
                href="/signup"
                prefetch={false}
                className="ml-2 text-sm text-white hover:text-zion-cyan"
                aria-label="Sign up"
              >
                Sign up
              </Link>
            </>
          )}
          <LanguageSelector />
          {user && (
            <span
              className="hidden sm:block text-sm text-white mr-2"
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
