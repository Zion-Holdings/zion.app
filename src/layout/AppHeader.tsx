import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export function AppHeader() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Zion Tech Group
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  Welcome, {user?.name || user?.email}
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}