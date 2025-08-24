import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, Briefcase, Code, Server, Database, Brain, Zap } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Zap },
    { name: 'About', href: '/about', icon: User },
    { name: 'Services', href: '/comprehensive-services', icon: Briefcase },
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'Enterprise', href: '/enterprise-solutions', icon: Server },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Code },
    { name: 'Pricing', href: '/services-pricing', icon: Database },
    { name: 'Contact', href: '/contact', icon: User },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-zion-blue-dark border-b border-zion-purple/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2 ${
                    isActive(item.href)
                      ? 'bg-zion-purple/20 text-zion-cyan'
                      : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/search" className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
              <Search className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-light transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-zion-blue-dark border-t border-zion-purple/20">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center space-x-3 ${
                      isActive(item.href)
                        ? 'bg-zion-purple/20 text-zion-cyan'
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Actions */}
              <div className="pt-4 border-t border-zion-purple/20">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-3 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-light transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}