import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from 'lucide-react';








import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import { useTranslation } from 'react-i18next';

export interface MobileMenuProps {
  unreadCount?: number;
  onClose: () => void;
  openLoginModal: (returnToPath: string) => void; // Added from plan
}

// Define protected routes - consistent with ResponsiveNavigation.tsx and middleware.ts
// These are routes that should trigger the login modal if accessed while unauthenticated.
const protectedRoutes = [
  '/categories',
  '/talent',
  '/equipment',
  '/partners',
  '/tutorials',
  '/case-studies',
  '/post-job', // Already marked as authRequired, but good to be explicit if used elsewhere
  '/messages',  // Already marked as authRequired
  '/dashboard', // Already marked as authRequired
  // Add any specific sub-routes if necessary
];

function isProtectedRoute(href: string): boolean {
  // Also check against the item's own authRequired flag if present
  return protectedRoutes.some(route => href.startsWith(route));
}

export function MobileMenu({ unreadCount = 0, onClose, openLoginModal }: MobileMenuProps) {
  const router = useRouter();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { t } = useTranslation();

  const baseItems = [
    {
      key: 'home',
      href: '/',
      icon: Home,
      matches: (path: string) => path === '/',
    },
    {
      key: 'explore',
      href: '/talent',
      icon: Search,
      matches: (path: string) =>
        path.startsWith('/talent') ||
        path.startsWith('/categories') ||
        path.startsWith('/marketplace'),
    },
    {
      key: 'community',
      href: '/community',
      icon: MessageCircle,
      matches: (path: string) =>
        path.startsWith('/community') || path.startsWith('/forum'),
    },
    {
      key: 'post_job',
      href: '/post-job',
      icon: BriefcaseIcon,
      matches: (path: string) => path.startsWith('/post-job'),
      authRequired: true,
    },
    {
      key: 'messages',
      href: '/messages',
      icon: MessageSquare,
      matches: (path: string) =>
        path.startsWith('/messages') || path.startsWith('/inbox'),
      badge: unreadCount,
      authRequired: true,
    },
    {
      key: 'dashboard',
      href: '/dashboard',
      icon: User,
      matches: (path: string) => path.startsWith('/dashboard'),
      authRequired: true,
    },
  ];

  const navItems = baseItems.map((item) => ({
    ...item,
    name: item.key === 'explore' ? t('general.explore') : t(`nav.${item.key}`),
  }));

  // Filter items based on auth status
  const visibleItems = navItems.filter(
    (item) => !item.authRequired || (item.authRequired && isAuthenticated),
  );

  return (
    <div className="py-6">
      <div className="flex justify-between items-center px-6 mb-6">
        <h2 className="text-xl font-bold text-foreground">Menu</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close menu"
          title="Close menu"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <nav className="space-y-1">
        {visibleItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(
              'flex items-center px-6 py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              item.matches(router.pathname)
                ? 'bg-primary/20 text-primary border-l-4 border-primary'
                : 'text-foreground hover:bg-primary/10 hover:text-primary',
            )}
            onClick={(e) => {
              const routeIsProtected = item.authRequired || isProtectedRoute(item.href);
              if (!isAuthenticated && routeIsProtected) {
                e.preventDefault();
                // Update URL to include returnTo, then open modal
                router.push({ pathname: '/auth/login', query: { returnTo: item.href } }, undefined, { shallow: true });
                openLoginModal(item.href);
                // It's important to call onClose AFTER openLoginModal if the modal might be part of the same parent that controls menu visibility.
                // Or ensure modal is rendered at a higher level. Given AppHeader structure, this should be okay.
              }
              onClose(); // Close mobile menu on any click
            }}
          >
            <div className="relative mr-4">
              <item.icon className="h-5 w-5" aria-hidden="true" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-6 px-6">
        <ModeToggle />
      </div>
    </div>
  );
}
