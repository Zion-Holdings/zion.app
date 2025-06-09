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
}

export function ResponsiveNavigation({ className }: ResponsiveNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { t } = useTranslation();
  const router = useRouter();

  const items: NavItem[] = [
    { label: t('nav.home', 'Home'), href: '/' },
    {
      label: t('nav.marketplace', 'Marketplace'),
      subItems: [
        { label: t('nav.marketplace', 'Marketplace'), href: '/marketplace' },
        { label: t('nav.categories', 'Categories'), href: '/categories' },
        { label: t('nav.talent', 'Talent'), href: '/talent' },
        { label: t('nav.equipment', 'Equipment'), href: '/equipment' },
      ],
    },
    {
      label: t('nav.community', 'Community'),
      subItems: [
        { label: t('nav.community', 'Community'), href: '/community' },
        { label: t('nav.blog', 'Blog'), href: '/blog' },
        { label: t('nav.partners', 'Partners'), href: '/partners' },
      ],
    },
    { label: t('nav.about', 'About'), href: '/about' },
  ];

  if (isAuthenticated) {
    items.push({ label: t('nav.dashboard', 'Dashboard'), href: '/dashboard' });
  }

  return (
    <NavigationMenu className={cn('hidden md:flex', className)}>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.label}>
            {item.subItems ? (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col p-2 min-w-[180px]">
                    {item.subItems.map((sub) => (
                      <li key={sub.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={sub.href}
                            className={cn(
                              "block rounded-sm px-3 py-2 text-sm hover:bg-accent focus:bg-accent focus:outline-none",
                              router.pathname === sub.href && "bg-accent text-accent-foreground"
                            )}
                          >
                            {sub.label}
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
