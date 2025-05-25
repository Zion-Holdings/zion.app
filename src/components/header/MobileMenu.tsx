
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export interface MobileMenuProps {
  unreadCount?: number;
  onClose: () => void;
}

export function MobileMenu({ unreadCount = 0, onClose }: MobileMenuProps) {
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { t } = useTranslation();

  const baseItems = [
    {
      key: 'home',
      href: '/',
      icon: Home,
      matches: (path: string) => path === '/'
    },
    {
      key: 'explore',
      href: '/talent',
      icon: Search,
      matches: (path: string) => path.startsWith('/talent') || path.startsWith('/categories') || path.startsWith('/marketplace')
    },
    {
      key: 'community',
      href: '/community',
      icon: MessageCircle,
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    },
    {
      key: 'post_job',
      href: '/post-job',
      icon: BriefcaseIcon,
      matches: (path: string) => path.startsWith('/post-job'),
      authRequired: true
    },
    {
      key: 'messages',
      href: '/messages',
      icon: MessageSquare,
      matches: (path: string) => path.startsWith('/messages') || path.startsWith('/inbox'),
      badge: unreadCount,
      authRequired: true
    },
    {
      key: 'dashboard',
      href: '/dashboard',
      icon: User,
      matches: (path: string) => path.startsWith('/dashboard'),
      authRequired: true
    }
  ];

  const navItems = baseItems.map(item => ({
    ...item,
    name:
      item.key === 'explore'
        ? t('general.explore')
        : t(`nav.${item.key}`)
  }));

  // Filter items based on auth status
  const visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  );

  return (
    <div className="py-6">
      <div className="flex justify-between items-center px-6 mb-6">
        <h2 className="text-xl font-bold">Menu</h2>
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close menu" title="Close menu">
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <nav className="space-y-1">
        {visibleItems.map(item => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              "flex items-center px-6 py-3 text-base font-medium",
              item.matches(location.pathname)
                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
            onClick={onClose}
          >
            <div className="relative mr-4">
              <item.icon className="h-5 w-5" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
