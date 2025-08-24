
import { useState } from 'react';
import { useMessaging } from '@/context/MessagingContext';
import { MainNavigation } from './MainNavigation';
import { Logo } from '@/components/header/Logo';
import { ModeToggle } from '@/components/ModeToggle';
import { Menu, X, Search, User, Bell } from 'lucide-react';
import { MobileMenu } from '@/components/header/MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();
  const { user, logout } = useAuth();
  
  // Try to access the messaging context, but provide a fallback value if it's not available
  let unreadCount = 0;
  try {
    const { unreadCount: count } = useMessaging();
    unreadCount = count;
  } catch (error) {
    console.warn('Messaging context not available');
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };
  
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex ml-6 flex-1 max-w-md">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search services, talent, equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg px-4 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="ml-6 flex-1 hidden lg:block">
            <MainNavigation unreadCount={unreadCount} />
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-2 ml-auto">
            {/* Notifications */}
            {user && (
              <Link
                to="/notifications"
                className="relative p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </Link>
            )}

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:block text-sm font-medium">{user.name || user.email}</span>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 transition-colors"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 transition-colors"
                    >
                      Settings
                    </Link>
                    <hr className="border-zion-purple/20 my-2" />
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-zion-purple/10 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-lg hover:bg-zion-purple/10"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-zion-purple hover:bg-zion-purple/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="lg:hidden ml-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            
            <ModeToggle />
          </div>
        </div>
      </header>
      
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-16">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-zion-blue-dark border-t border-zion-purple/20 h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Mobile Search */}
            <div className="p-4 border-b border-zion-purple/20">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services, talent, equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg px-4 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
            </div>
            
            <MobileMenu 
              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)} 
            />
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
    </>
  );
}
