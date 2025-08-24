
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { MainNavigation } from "./MainNavigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User, Bell, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

interface AppHeaderProps {
  isAdmin?: boolean;
  unreadCount?: number;
}

export function AppHeader({ isAdmin = false, unreadCount = 0 }: AppHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zion-blue-dark/95 backdrop-blur-md shadow-lg border-b border-zion-blue-light/20"
          : "bg-zion-blue-dark"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan via-zion-purple-light to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-zion-cyan via-zion-purple-light to-zion-purple rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION
              </span>
              <div className="text-xs text-zion-slate-light -mt-1">Tech Group</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <MainNavigation isAdmin={isAdmin} unreadCount={unreadCount} />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20"
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Notifications */}
            {isAuthenticated && (
              <Button
                variant="ghost"
                size="sm"
                className="relative text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20"
              >
                <Bell className="h-4 w-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-zion-cyan rounded-full text-xs text-white flex items-center justify-center font-medium">
                    {unreadCount > 9 ? "9+" : unreadCount}
                  </span>
                )}
              </Button>
            )}

            {/* Messages */}
            {isAuthenticated && (
              <Button
                variant="ghost"
                size="sm"
                className="relative text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20"
              >
                <MessageSquare className="h-4 w-4" />
              </Button>
            )}

            {/* User Menu / Auth Buttons */}
            {isAuthenticated ? (
              <div className="relative group">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2 text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20"
                >
                  <div className="w-8 h-8 bg-zion-purple rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="hidden sm:block">{user?.email}</span>
                </Button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20 transition-colors"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20 transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20 transition-colors"
                    >
                      Settings
                    </Link>
                    <hr className="border-zion-blue-light my-2" />
                    <button
                      onClick={signOut}
                      className="block w-full text-left px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="text-zion-slate-light hover:text-white">
                    Sign In
                  </Button>
                </Link>
                <Link to="/get-started">
                  <Button size="sm" className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="lg:hidden text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="py-4 border-t border-zion-blue-light/20">
              <MainNavigation isAdmin={isAdmin} unreadCount={unreadCount} className="flex-col space-y-4" />
              
              {/* Mobile Auth Buttons */}
              {!isAuthenticated && (
                <div className="flex flex-col space-y-3 pt-4 border-t border-zion-blue-light/20">
                  <Link to="/login">
                    <Button variant="ghost" className="w-full text-zion-slate-light hover:text-white">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/get-started">
                    <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
