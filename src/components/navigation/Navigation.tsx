import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const isActive = (path: string) => {
    if (path === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(path);
  };

  const navigationItems = [
    { href: '/', label: 'Home' },
    { 
      href: '/marketplace', 
      label: 'Marketplace',
      submenu: [
        { href: '/marketplace', label: 'Overview' },
        { href: '/categories', label: 'Categories' },
        { href: '/talent', label: 'Talent' },
        { href: '/equipment', label: 'Equipment' },
      ]
    },
    {
      href: '/community',
      label: 'Community',
      submenu: [
        { href: '/community', label: 'Overview' },
        { href: '/blog', label: 'Blog' },
        { href: '/partners', label: 'Partners' },
      ]
    },
    {
      href: '/resources',
      label: 'Resources',
      submenu: [
        { href: '/resources/docs', label: 'Docs' },
        { href: '/tutorials', label: 'Tutorials' },
        { href: '/case-studies', label: 'Case Studies' },
      ]
    },
    { href: '/about', label: 'About' },
  ];

  if (isAuthenticated) {
    navigationItems.push({ href: '/dashboard', label: 'Dashboard' });
  }

  return (
    <nav className={cn('flex items-center space-x-6', className)}>
      {navigationItems.map((item) => (
        <div key={item.href} className="relative group">
          <Link
            href={item.href}
            className={cn(
              'text-foreground hover:text-primary transition-colors duration-200',
              isActive(item.href) && 'text-primary font-medium'
            )}
          >
            {item.label}
          </Link>
          
          {item.submenu && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={cn(
                      'block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors',
                      isActive(subItem.href) && 'bg-muted text-primary'
                    )}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
} 