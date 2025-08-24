
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import Search from 'lucide-react/dist/esm/icons/search';
import User from 'lucide-react/dist/esm/icons/user';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import Home from 'lucide-react/dist/esm/icons/home';
import Store from 'lucide-react/dist/esm/icons/store';
import Users from 'lucide-react/dist/esm/icons/users';
import Settings from 'lucide-react/dist/esm/icons/settings';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  className?: string;
}

export function MobileMenu({ className }: MobileMenuProps) {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigationItems = [
    { href: '/', label: t('nav.home'), icon: Home, matches: (path: string) => path === '/' },
    { href: '/marketplace', label: t('nav.marketplace'), icon: Store, matches: (path: string) => path.startsWith('/marketplace') },
    { href: '/talent', label: t('nav.talent'), icon: Users, matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard') },
    { href: '/categories', label: t('nav.categories'), icon: Store, matches: (path: string) => path.startsWith('/categories') },
    { href: '/equipment', label: t('nav.equipment'), icon: Store, matches: (path: string) => path.startsWith('/equipment') },
    { href: '/community', label: t('nav.community'), icon: Users, matches: (path: string) => path.startsWith('/community') },
  ];

  if (isAuthenticated) {
    navigationItems.push(
      { href: '/dashboard', label: t('nav.dashboard'), icon: Settings, matches: (path: string) => path.startsWith('/dashboard') }
    );
  }

  return (
    <div className={cn("md:hidden", className)}>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="p-2 text-white hover:bg-zion-purple/20"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-80 bg-zion-blue-dark border-l border-zion-purple/20">
            <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
              <h2 className="text-lg font-semibold text-white">Menu</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="p-2 text-white hover:bg-zion-purple/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Navigation items */}
            <nav className="p-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.matches(location.pathname);
                
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={toggleMenu}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-white transition-colors",
                      isActive
                        ? "bg-zion-purple/20 text-zion-cyan border border-zion-purple/40"
                        : "hover:bg-zion-purple/10 hover:text-zion-cyan"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* User section */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zion-purple/20">
              {isAuthenticated ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 px-4 py-2">
                    <User className="h-5 w-5 text-zion-cyan" />
                    <span className="text-white font-medium">
                      {user?.email || 'User'}
                    </span>
                  </div>
                  <Link
                    to="/messages"
                    onClick={toggleMenu}
                    className="flex items-center gap-3 px-4 py-2 text-white hover:text-zion-cyan transition-colors"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Messages</span>
                  </Link>
                  <Link
                    to="/profile"
                    onClick={toggleMenu}
                    className="flex items-center gap-3 px-4 py-2 text-white hover:text-zion-cyan transition-colors"
                  >
                    <Settings className="h-5 w-5" />
                    <span>Profile</span>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link
                    to="/login"
                    onClick={toggleMenu}
                    className="block w-full px-4 py-2 text-center bg-zion-purple text-white rounded-lg hover:bg-zion-purple-dark transition-colors"
                  >
                    {t('auth.login')}
                  </Link>
                  <Link
                    to="/signup"
                    onClick={toggleMenu}
                    className="block w-full px-4 py-2 text-center border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors"
                  >
                    {t('auth.signup')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
