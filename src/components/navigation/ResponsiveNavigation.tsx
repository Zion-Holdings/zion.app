import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';

interface NavItem {
  label: string;
  href?: string;
  subItems?: { label: string; href: string }[];
}

interface ResponsiveNavigationProps {
  className?: string;
  openLoginModal: (returnToPath: string) => void;
}

// Define protected routes - these align with routes not in publicRoutes in middleware.ts
// and are the ones that should trigger the login modal if accessed while unauthenticated.
const protectedRoutes = [
  '/categories',
  '/talent',
  '/equipment',
  '/partners',
  '/tutorials',
  '/case-studies',
  // Add any specific sub-routes if necessary, though startsWith checks below should cover them.
];

function isProtectedRoute(href: string): boolean {
  return protectedRoutes.some(route => href.startsWith(route));
}

export function ResponsiveNavigation({ className, openLoginModal }: ResponsiveNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { t } = useTranslation();
  const router = useRouter();

  const items: NavItem[] = [
    { label: t('nav.home', 'Home'), href: '/' },
    {
      label: t('nav.marketplace', 'Marketplace'),
      href: '/marketplace',
      subItems: [
        { label: t('nav.marketplace_overview', 'Overview'), href: '/marketplace' },
        { label: t('nav.categories', 'Categories'), href: '/categories' },
        { label: t('nav.talent', 'Talent'), href: '/talent' },
        { label: t('nav.equipment', 'Equipment'), href: '/equipment' },
      ],
    },
    {
      label: t('nav.community', 'Community'),
      subItems: [
        { label: t('nav.community_overview', 'Overview'), href: '/community' },
        { label: t('nav.blog', 'Blog'), href: '/blog' },
        { label: t('nav.partners', 'Partners'), href: '/partners' },
      ],
    },
    {
      label: t('nav.resources', 'Resources'),
      subItems: [
        { label: t('nav.docs', 'Docs'), href: '/docs' },
        { label: t('nav.tutorials', 'Tutorials'), href: '/tutorials' },
        { label: t('nav.case_studies', 'Case Studies'), href: '/case-studies' },
      ],
    },
    { label: t('nav.about', 'About'), href: '/about' },
  ];

  if (isAuthenticated) {
    items.push({ label: t('nav.dashboard', 'Dashboard'), href: '/dashboard' });
  }

  const isItemActive = (item: NavItem) => {
    if (item.href) {
      return router.pathname === item.href;
    }
    if (item.subItems) {
      return item.subItems.some((sub) => router.pathname.startsWith(sub.href));
    }
    return false;
  };

  return (
    <NavigationMenu className={cn('hidden md:flex', className)}>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.href || item.label}>
            {item.subItems ? (
              <>
                <NavigationMenuTrigger
                  className={cn(isItemActive(item) && 'text-primary')}
                  onSelect={(e) => e.preventDefault()}
                  onClick={(e) => e.preventDefault()}
                >
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col p-2 min-w-[180px]">
                    {item.subItems.map((sub) => (
                      <li key={sub.href}>
                        <NavigationMenuLink asChild>
                          <Link legacyBehavior href={sub.href} passHref>
                            <a
                              className={cn(
                                "block rounded-sm px-2 py-1.5 text-sm hover:bg-accent focus:bg-accent focus:outline-none",
                                router.pathname.startsWith(sub.href) && "bg-accent text-accent-foreground"
                              )}
                              onClick={(e) => {
                                if (!isAuthenticated && isProtectedRoute(sub.href)) {
                                  e.preventDefault();
                                  // Update URL to include returnTo, then open modal
                                  // This makes the returnTo available in router.query for the login page/modal logic
                                  router.push({ pathname: '/auth/login', query: { returnTo: sub.href } }, undefined, { shallow: true });
                                  openLoginModal(sub.href);
                                }
                                // If authenticated or not a protected route, default Link behavior occurs
                              }}
                            >
                              {sub.label}
                            </a>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href || '#'}
                  className={cn(
                    "inline-block px-4 py-2 text-sm font-medium",
                    item.href && router.pathname === item.href && "text-primary"
                  )}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
